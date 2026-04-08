# UiPath Package-Generation Pipeline — Architecture Analysis & Roadmap

> **Purpose**: Grounded analysis of the current XAML / NuGet package-generation
> pipeline. Inventories recurring failure patterns, evaluates eight architectural
> areas, and proposes a prioritised three-tier improvement roadmap.
>
> **Scope**: Analysis only — no code changes.
>
> **Date**: 2026-03 (generated from source as of this commit)

---

## 1  Pipeline Overview

The pipeline transforms a high-level automation idea into a Studio-openable
`.nupkg` in six major stages:

| # | Stage | Key File(s) | LOC |
|---|-------|-------------|-----|
| 1 | **Spec decomposition** | `uipath-spec-decomposer.ts` | 696 |
| 2 | **Workflow-tree assembly** | `workflow-tree-assembler.ts`, `workflow-spec-types.ts` | 1 393 |
| 3 | **XAML emission** | `xaml-generator.ts` | 4 121 |
| 4 | **AI enrichment** | `ai-xaml-enricher.ts` | 772 |
| 5 | **Compliance & quality** | `xaml-compliance.ts`, `uipath-quality-gate.ts` | 3 570 |
| 6 | **Package assembly** | `package-assembler.ts` | 3 533 |
| 7 | **Meta-validation / remediation** | `meta-validation/meta-validator.ts`, `uipath-pipeline.ts` | 1 560 |

Orchestration: `uipath-pipeline.ts` (1 352 LOC) drives the two-phase flow
(`generateWorkflowSpecs` → `compilePackageFromSpecs`) with an auto-downgrade
ladder from `full_implementation` to `baseline_openable` on `QualityGateError`.

### Strengths worth preserving

| Strength | Location | Why it matters |
|----------|----------|----------------|
| **Remediation ladder** | `uipath-pipeline.ts` (`compilePackageFromSpecs` catch block) | Auto-downgrades on quality-gate failure prevent total pipeline aborts; users always receive *some* package. |
| **Catalog-driven validation** | `catalog-service.ts`, `metadata-service.ts` | Activity prefixes, property enums, and structural rules are derived from a live UiPath catalog rather than hard-coded. |
| **Two-phase generation** | `generateWorkflowSpecs` / `compilePackageFromSpecs` | Separating spec production from XAML compilation allows spec caching, re-use across versions, and isolated retry. |
| **DHG / PipelineOutcomeReport** | `dhg-generator.ts`, pipeline | Structured developer handoff guide provides actionable gap information alongside the package. |
| **Meta-validation** | `meta-validator.ts`, confidence scorer | Post-generation LLM review catches enum violations, undeclared variables, and nested arguments missed by deterministic checks. |
| **Quality-level taxonomy** | `PackageStatus` type union in `uipath-pipeline.ts` | Five-level status (`BUILDING`, `READY`, `READY_WITH_WARNINGS`, `FALLBACK_READY`, `FAILED`) gives downstream consumers graded trust signals. |

---

## 2  Failure-Pattern Inventory

Every fixup function in the pipeline is evidence of a class of defect that the
emission layer produces but does not prevent. The table below catalogues them
by source file, ordered by estimated production frequency.

### 2.1  Deterministic fixup evidence (xaml-compliance.ts)

| # | Fixup Function | Defect Class | Root Cause |
|---|----------------|--------------|------------|
| F1 | `normalizeAssignArgumentNesting` | Doubled `<InArgument>` / `<OutArgument>` wrappers around `Assign.To` / `Assign.Value` | XAML emitter and AI enricher both add wrapper; neither checks for the other's. |
| F2 | `collapseDoubledArgumentsXmlParser` | Same nesting but detected via XML parse | Fallback for F1 when regex-based collapse missed edge cases. |
| F3 | `ensureVariableDeclarations` | Variables referenced in `[expr]` but never declared in `<Variable>` | AI enrichment adds expressions mentioning new variables without emitting declarations. |
| F4 | `fixBareVariableRefsInExpressionAttributes` | Variable references in `Value`/`Condition`/`To` attributes not bracket-wrapped | Emitter writes `Value="myVar"` instead of `Value="[myVar]"`; Studio treats bare text as a literal string. |
| F5 | `normalizeNamespaceAliases` | Wrong `xmlns:` prefix for CLR namespaces (`scg`, `scg2`, `s`, etc.) | Template literals embed namespace URIs that may not match the Windows / cross-platform target. |
| F6 | `sanitizeXmlArtifacts` | Stray `}` characters outside markup extensions | LLM hallucinates XAML markup-extension syntax (`{Binding ...}`) or leaves JSON-template artefacts. |
| F7 | `validateActivityTagSemantics` + auto-repair | Activity has wrong namespace prefix (e.g., `ui:Assign` instead of bare `Assign`) | Emitter applies default `ui:` prefix; catalog lookup would yield the correct prefix but is not consulted at emit time. |
| F8 | `injectDynamicNamespaceDeclarations` | Missing assembly references / namespace imports for activities actually used | Namespace header is a static template; additional packages (e.g., `UiPath.Web.Activities`) are discovered only post-hoc. |

### 2.2  Quality-gate evidence (uipath-quality-gate.ts)

| # | Check | Defect Class |
|---|-------|--------------|
| Q1 | `CATALOG_STRUCTURAL_VIOLATION` | Activity emitted with wrong child structure or missing mandatory properties per catalog schema. |
| Q2 | `ENUM_VIOLATION` | Property value not in the catalog's allowed enum set (e.g., `LogMessage` Level = `"Debug"` instead of `"Trace"`). |
| Q3 | `uncatalogued-activity` | Activity tag has no catalog entry at all — may be fabricated by LLM. |
| Q4 | `namespace-prefix-error` | Prefix used in tags with no matching `xmlns:` declaration. |
| Q5 | `completeness: incomplete` | Quality gate concludes the output is structurally deficient and flags the entire build. |
| Q6 | `blocked-pattern` | Activity is on the blocked list (`uipath-activity-policy.ts`) or matches a blocked usage pattern (e.g., `TakeScreenshot` with invalid result type). Quality gate emits error-severity violations; `package-assembler.ts` replaces blocked activities with stubs via `filterBlockedActivitiesFromXaml` / `applyActivityPolicy`. |

### 2.3  Meta-validation evidence (meta-validator.ts)

| # | Category | What It Catches |
|---|----------|-----------------|
| M1 | `ENUM_VIOLATIONS` | Same as Q2 but caught by LLM review when deterministic check missed it. |
| M2 | `NESTED_ARGUMENTS` | Same as F1/F2 when deterministic collapse was incomplete. |
| M3 | `LITERAL_EXPRESSIONS` | Bare `<` in `InArgument` text, unbracketed variable refs. |
| M4 | `MISSING_PROPERTIES` | Required activity properties absent (e.g., `HttpClient` without `Url`). |
| M5 | `UNDECLARED_VARIABLES` | Same as F3 — a second pass because the deterministic pass uses regex heuristics. |
| M6 | `FLAT_STRUCTURE` | Activities that should be inside `TryCatch` / `If` / `ForEach` placed flat in `Sequence`. Report-only — no auto-fix. |

### 2.4  Silent / structural failures

| # | Pattern | Location | Impact |
|---|---------|----------|--------|
| S1 | **Empty `catch {}` blocks** swallow errors | `uipath-quality-gate.ts` (2 sites), `xaml-compliance.ts`, `workflow-tree-assembler.ts` (2 sites) | Pipeline reports success when an internal step actually failed; incorrect quality-gate pass. |
| S2 | **`[object Object]` in XAML** | Observed when `toString()` is called on a spec object instead of serialising its value | Produces invalid XAML that Studio cannot parse; not always caught by quality gate. |
| S3 | **`InvokeWorkflowFile` with empty arguments** | `xaml-generator.ts` — argument-wiring block not populated at emit time | Child workflows are invoked but receive no input; runtime `ArgumentNullException`. |
| S4 | **Generic `Error` thrown instead of `QualityGateError`** | Most of pipeline outside quality-gate module | Auto-downgrade only triggers on `QualityGateError`; generic errors bypass the remediation ladder and surface as unhandled 500s. |
| S5 | **Pseudo-XAML from LLM** | AI enricher returns prose / partial XML that is not well-formed | `makeUiPathCompliant` cannot repair fundamentally malformed input; no early-reject signal. |
| S6 | **Dual `WorkflowSpec` types** | `workflow-spec-types.ts` vs legacy flat type in `xaml-generator.ts` | Confusion between tree-based and flat spec; wrong type passed silently, producing subtly invalid output. |

---

## 3  Model-Driven vs Deterministic Boundary

A key architectural question in this pipeline is *which responsibilities
belong to the LLM (model-driven) and which must be handled by deterministic
code*. The current boundary is implicit and inconsistent, leading to defect
classes where both sides attempt the same transformation (F1, F3) or where
neither side handles a responsibility (S3).

### 3.1  Current boundary (as-is)

| Responsibility | Owner | File(s) | Assessment |
|----------------|-------|---------|------------|
| **Workflow decomposition** (idea → workflow list) | Model | `uipath-spec-decomposer.ts` | Appropriate — requires semantic understanding of the automation goal. |
| **Activity selection** (which UiPath activities to use) | Model | `ai-xaml-enricher.ts`, `xaml-generator.ts` | Appropriate — requires domain knowledge of UiPath activity capabilities. |
| **Activity body generation** (property values, expressions) | Model | `ai-xaml-enricher.ts` | Appropriate for values; problematic for structural attributes (prefix, wrappers) that have deterministic correct answers. |
| **Namespace prefix selection** | Split (model emits default `ui:`, deterministic fixes) | `xaml-generator.ts` → `xaml-compliance.ts` | **Should be fully deterministic** — the correct prefix is a catalog lookup, not a judgment call. Currently model guesses, then `validateActivityTagSemantics` repairs. |
| **Argument wrapping** (`<InArgument>`, `<OutArgument>`) | Split (both emitter and enricher add wrappers) | `xaml-generator.ts`, `ai-xaml-enricher.ts` → `xaml-compliance.ts` | **Should be fully deterministic** — wrapper presence is a structural rule, not semantic. Dual ownership causes F1/F2. |
| **Variable declaration** | Split (enricher introduces refs, compliance adds declarations) | `ai-xaml-enricher.ts` → `xaml-compliance.ts` | **Should be deterministic post-enrichment** — after the model decides which variables exist, declaration is mechanical. |
| **Expression bracket wrapping** | Split (emitter sometimes wraps, compliance fixes the rest) | `xaml-generator.ts` → `xaml-compliance.ts` | **Should be fully deterministic** — every expression-attribute value must be `[...]` wrapped; no judgment required. |
| **Selector generation** | Model | `ai-xaml-enricher.ts` | Appropriate — selectors require UI context. However, no deterministic validation exists. |
| **Enum value selection** | Model (with no constraint) | `ai-xaml-enricher.ts` | **Model should select from catalog-provided enum lists** — currently unconstrained, causing Q2. |
| **Meta-validation / correction** | Model (LLM review) | `meta-validator.ts` | Partially appropriate — catches issues deterministic checks miss, but also redundantly re-checks F1/F3/F4 defects that should not exist. |

### 3.2  Recommended boundary (to-be)

The guiding principle: **the model decides *what* to express; deterministic
code decides *how* to express it in valid XAML**.

| Responsibility | Recommended Owner | Extend or Rethink |
|----------------|-------------------|-------------------|
| Workflow decomposition | Model | **Extend** — current approach works; add Zod validation on output. |
| Activity selection | Model | **Extend** — constrain to catalog-known activities; flag unknowns. |
| Activity body / property values | Model | **Extend** — provide enum constraints as LLM context; validate output. |
| Namespace prefixes | Deterministic (catalog lookup) | **Rethink** — move from post-hoc repair to emit-time lookup. |
| Argument wrapping | Deterministic (emitter only) | **Rethink** — remove from enricher; single deterministic pass. |
| Variable declarations | Deterministic (post-enrichment pass) | **Rethink** — structured scan replaces regex heuristic. |
| Expression bracket wrapping | Deterministic (emit-time) | **Rethink** — wrap at emission, not as fixup. |
| Selector strings | Model + deterministic validation | **Extend** — add structural selector validation. |
| Enum values | Model with catalog constraints | **Rethink** — provide allowed values in enrichment prompt; validate deterministically. |
| Meta-validation | Model (reduced scope) | **Extend** — focus on semantic issues (FLAT_STRUCTURE, MISSING_PROPERTIES) once deterministic checks handle structural correctness. |

---

## 4  Eight Evaluation Areas

The eight areas are ranked below by improvement priority (combining defect
frequency, severity, and feasibility). Each area carries a disposition label:

- **Preserve**: the current implementation is sound; no change needed.
- **Formalize**: the current approach works but needs hardening, contracts, or test coverage.
- **Re-architect**: the current approach has structural deficiencies requiring redesign.

### 4.1  Deterministic emission — Priority 1 ⬤ Re-architect

**Current state**: XAML is produced by string-template interpolation in
`xaml-generator.ts`. Namespace headers, activity bodies, and variable
declarations are concatenated as template literals.

**Gap**: The emitter does not consult the activity catalog at emit time.
Prefix selection, required properties, and child-element structure are guessed
by pattern or hard-coded, then corrected downstream by `xaml-compliance.ts` and
the quality gate. This inversion (emit wrong → fix later) is the root cause of
defect classes F1–F8.

**Disposition**: **Re-architect**. Move to a structured emitter that builds an
in-memory XML document (or at minimum a typed AST) from the canonical IR,
querying the catalog for each activity's prefix, mandatory properties, and
allowed enum values at emission time rather than at validation time.

**Roadmap tier**: T2.1 (top-5 activities), T3.1 (full AST emitter).

### 4.2  IR / WorkflowSpec fidelity — Priority 2 ⬤ Re-architect

**Current state**: Two competing `WorkflowSpec` shapes coexist.
`workflow-spec-types.ts` defines a tree-structured spec (`ActivityNode`,
`children`, `properties`) used by the tree assembler and AI enricher.
`xaml-generator.ts` internally defines a flat representation with `steps[]`.
Neither is a canonical, validated IR; both are plain TypeScript interfaces
with no runtime schema enforcement.

**Gap**: There is no single source of truth for "what the pipeline intends to
emit." The tree spec can represent nested control flow; the flat spec cannot.
When the AI enricher returns a tree but the code path falls through to the flat
emitter, structural information is silently lost.

**Disposition**: **Re-architect**. Converge on the tree spec as the canonical
IR. Add Zod runtime validation at the spec-creation boundary so malformed
specs are rejected before XAML emission begins.

**Roadmap tier**: T2.2.

### 4.3  Recurring failure patterns — Priority 3 ⬤ Formalize

The ten most impactful failure patterns, ranked by estimated frequency and
severity:

| Rank | ID | Pattern | Frequency | Severity | Root Cause |
|------|----|---------|-----------|----------|------------|
| 1 | F3 | Undeclared variables | Very high | Medium | AI enricher adds expressions with new variables; no declaration pass at enrichment time. |
| 2 | F1 | Doubled argument nesting | High | High | Two code paths (emitter + enricher) both add wrapper elements. |
| 3 | F4 | Unbracketed variable refs | High | Medium | Emitter writes `Value="x"` instead of `Value="[x]"`. |
| 4 | Q1 | Catalog structural violations | High | High | Emitter does not consult catalog for child-element rules. |
| 5 | S3 | Empty InvokeWorkflow args | Medium | High | Argument wiring not implemented at emit time. |
| 6 | F7 | Wrong activity prefix | Medium | Medium | Default `ui:` prefix assumed; catalog consulted only at validation. |
| 7 | Q2 | Enum violations | Medium | Medium | Allowed values not checked at emit time. |
| 8 | S5 | Pseudo-XAML from LLM | Low–Med | Critical | No structural pre-check on AI enricher output. |
| 9 | S1 | Silent error swallowing | Low–Med | High | Empty `catch {}` blocks hide failures. |
| 10 | S4 | Generic Error bypasses ladder | Low | High | Non-`QualityGateError` throws skip downgrade path. |

**Disposition**: **Formalize**. Each pattern has an identifiable root cause;
Tier 1 items address the top patterns (#1–#4, #8–#10) with targeted fixes.
The underlying architecture (emit → fix → validate) is not replaced until
Tier 3 but each individual pattern can be formally addressed.

**Roadmap tier**: T1.1–T1.6 (individual fixes), T2.5 (regression corpus).

### 4.4  High-risk constructs — Priority 4 ⬤ Re-architect

The following XAML constructs are disproportionately likely to cause Studio
load failures or runtime errors:

| Construct | Risk | Current Mitigation |
|-----------|------|--------------------|
| `InvokeWorkflowFile` argument wiring | No input/output arguments emitted (S3) | None — arguments block is empty at emit time |
| `TryCatch` with `Catches` collection | Incorrect `ActivityAction` / `DelegateInArgument` nesting | Quality gate checks for structure; no emit-time prevention |
| `ForEach<T>` / `ForEachRow` | TypeArgument often wrong or missing | `ensureVariableDeclarations` infers types by prefix heuristic (F3) |
| `If` condition expressions | Bare variable refs without brackets (F4) | `fixBareVariableRefsInExpressionAttributes` post-hoc |
| VB.NET expressions in attributes | Complex expressions break `[...]` bracket heuristic | No handling for multi-line or nested-bracket expressions |
| Selector strings | LLM-fabricated selectors with wrong attribute names | No selector validation; flagged only if meta-validation catches it |

**Disposition**: **Re-architect**. For the top three constructs
(`InvokeWorkflowFile`, `TryCatch`, `ForEach`), build dedicated emitter
functions that construct the activity from the catalog schema rather than
interpolating templates. This eliminates the argument-wiring gap (S3) and
reduces the need for post-hoc structural fixups.

**Roadmap tier**: T2.1 (top-5 activities), T3.1 (full AST emitter).

### 4.5  Quality levels / PackageStatus — Priority 5 ⬤ Formalize

**Current state**: Five levels (`BUILDING`, `READY`, `READY_WITH_WARNINGS`,
`FALLBACK_READY`, `FAILED`) are defined as a string union type `PackageStatus`
in `uipath-pipeline.ts`. The auto-downgrade path converts
`full_implementation` → `baseline_openable` on `QualityGateError` (up to
`maxDowngradeAttempts`, default 1). Template compliance scores and violation
counts feed the meta-validation confidence scorer.

**Gap**: `PackageStatus` is currently internal — it is not surfaced in the API
response to the caller. The downgrade decision is based only on error class
(`QualityGateError` vs generic `Error`), not on violation severity or count.
Non-`QualityGateError` failures bypass the ladder entirely (S4).

**Disposition**: **Formalize**. (a) Include `PackageStatus` and violation
summary in the API response. (b) Wrap all pipeline-internal `throw new
Error(...)` calls in a `PipelineError` subclass hierarchy so the downgrade
logic can reason about severity without relying on a single sentinel class.

**Roadmap tier**: T1.4, T1.5.

### 4.6  Failure provenance — Priority 6 ⬤ Formalize

**Current state**: Errors are logged to `console.warn` / `console.log` with
`[Pipeline]`, `[XAML Compliance]`, or `[Quality Gate]` prefixes. Pipeline
warnings are accumulated in a `PipelineWarning[]` array with `code`, `message`,
`stage`, and `recoverable` fields. Downgrade events are tracked in
`DowngradeEvent[]`.

**Gap**: There is no unified trace-ID linking a specific generation run's
warnings, downgrades, quality-gate violations, and meta-validation corrections
into a single inspectable record. The `PipelineOutcomeReport` in the DHG is
the closest thing, but it is a rendered markdown document rather than a
structured object. Silent `catch {}` blocks (S1) drop error context entirely.

**Disposition**: **Formalize**. (a) Assign a `runId` (already partially
implemented) and thread it through every log and warning. (b) Persist the full
`PipelineOutcomeReport` as a structured JSON artefact alongside the `.nupkg`.
(c) Eliminate empty `catch {}` blocks; at minimum, log the caught error at
`warn` level with the `runId`.

**Roadmap tier**: T1.3 (catch blocks), T2.6 (structured trace record).

### 4.7  Stub strategy — Priority 7 ⬤ Formalize

**Current state**: `gap-analyzer.ts` produces stubs carrying `category`,
`activity`, `description`, `placeholder`, and `estimatedMinutes`. Stubs are
inserted when an activity cannot be generated with confidence. The stub
metadata is surfaced in the DHG.

**Gap**: Stubs carry no back-reference to the gap reason or the specific
quality-gate violation that triggered them. There is no DHG cross-reference
linking a stub to a specific failing check. The `estimatedMinutes` field is
heuristic and not calibrated against actual completion data.

**Disposition**: **Formalize**. Attach a `gapReason` enum (e.g.,
`UNCATALOGUED_ACTIVITY`, `STRUCTURAL_VIOLATION`, `AI_ENRICHMENT_FAILURE`) and a
`triggeringViolation` reference to each stub, then propagate this into the DHG
for actionable developer guidance.

**Roadmap tier**: T2.4.

### 4.8  Regression corpus — Priority 8 ⬤ Re-architect

**Current state**: One test file exists for meta-validation
(`__tests__/meta-validation.test.ts`). No XAML golden-file tests; no
round-trip test that produces a `.nupkg` and validates it against a known-good
reference.

**Gap**: When a fixup function is modified, there is no automated check that
previously-working outputs remain valid. Regressions are discovered in
production (user-reported Studio load failure).

**Disposition**: **Re-architect**. Build a regression corpus of 10–20
representative packages (varying complexity tiers, process types, activity
mixes) with golden XAML snapshots. Run the full pipeline against these on
every CI push. Start with the highest-frequency failure classes (F1, F3, F4,
Q1).

**Roadmap tier**: T2.5 (initial corpus), T3.4 (closed-loop infrastructure).

### Area priority ranking summary

| Rank | Area | §Ref | Disposition | Primary Roadmap Items |
|------|------|------|-------------|----------------------|
| 1 | Deterministic emission | §4.1 | Re-architect | T2.1, T3.1 |
| 2 | IR / WorkflowSpec fidelity | §4.2 | Re-architect | T2.2 |
| 3 | Recurring failure patterns | §4.3 | Formalize | T1.1–T1.6, T2.5 |
| 4 | High-risk constructs | §4.4 | Re-architect | T2.1, T3.1 |
| 5 | Quality levels / PackageStatus | §4.5 | Formalize | T1.4, T1.5 |
| 6 | Failure provenance | §4.6 | Formalize | T1.3, T2.6 |
| 7 | Stub strategy | §4.7 | Formalize | T2.4 |
| 8 | Regression corpus | §4.8 | Re-architect | T2.5, T3.4 |

---

## 5  Prioritised Three-Tier Roadmap

### Tier 1 — Quick wins (1–2 weeks each, no architectural change)

These items reduce the highest-frequency defect classes with minimal risk to
the existing pipeline. All Tier 1 items are independent and can be executed
in parallel.

| ID | Item | Addresses | Approach | Effort | Expected Impact |
|----|------|-----------|----------|--------|-----------------|
| T1.1 | **Emit-time bracket wrapping**: wrap every expression-attribute value in `[...]` at the point of emission in `xaml-generator.ts` instead of relying on `fixBareVariableRefsInExpressionAttributes`. | F4 | Rethink | S | Eliminates the most common "works in generator, fails in Studio" defect. |
| T1.2 | **Single-responsibility argument wrapping**: choose *one* code path (emitter or enricher) to add `<InArgument>` / `<OutArgument>` wrappers; remove the other. Keep `normalizeAssignArgumentNesting` as a safety net but expect it to be a no-op. | F1, F2, M2 | Rethink | S | Removes the doubled-nesting class entirely. |
| T1.3 | **Eliminate empty `catch {}` blocks**: audit all `catch {}` sites in `uipath-quality-gate.ts`, `xaml-compliance.ts`, and `workflow-tree-assembler.ts`. Replace with `catch (e) { console.warn('[stage] ...', e); }` at minimum. | S1 | Extend | S | Surfaces hidden failures in logs; unblocks failure-provenance improvements. |
| T1.4 | **`PipelineError` base class**: introduce `PipelineError extends Error` with a `stage` field. Have the downgrade logic catch `PipelineError \| QualityGateError` instead of only `QualityGateError`. | S4 | Extend | S | All categorised errors enter the remediation ladder instead of producing unhandled 500s. |
| T1.5 | **Surface `PackageStatus` in API response**: include the computed status and a violation-count summary in the generation endpoint's JSON response. | §4.5 | Extend | S | Callers can make informed decisions about whether to present the package to the end user. |
| T1.6 | **AI enricher output pre-check**: before accepting enriched XAML, verify it is well-formed XML (parse with a lightweight XML parser). Reject and fall back to the pre-enrichment XAML on parse failure. | S5 | Extend | S | Prevents pseudo-XAML from propagating through the rest of the pipeline. |

### Tier 2 — Structural improvements (2–4 weeks each, localised refactors)

These items address the root causes behind the largest defect clusters and
require targeted refactors within individual modules. Tier 2 items depend on
selected Tier 1 completions as noted in the dependency graph (§6).

| ID | Item | Addresses | Approach | Effort | Expected Impact |
|----|------|-----------|----------|--------|-----------------|
| T2.1 | **Catalog-aware emission for top-5 activities**: for `Assign`, `InvokeWorkflowFile`, `LogMessage`, `If`, and `TryCatch`, build dedicated emitter functions that query the catalog for prefix, required properties, and child structure at emit time. | F7, Q1, Q2, S3 | Rethink | M | Eliminates the "emit wrong, fix later" cycle for the five highest-frequency activities. |
| T2.2 | **Canonical IR convergence**: deprecate the flat `WorkflowSpec` in `xaml-generator.ts`; route all code paths through the tree-based `WorkflowSpec` in `workflow-spec-types.ts`. Add Zod runtime validation at the spec-creation boundary. | S6, §4.2 | Rethink | M | Single spec shape prevents silent type mismatches and enables downstream tooling (diffing, visualisation). |
| T2.3 | **Variable-declaration pass in the enricher**: after AI enrichment, run a dedicated pass that scans the enriched tree for variable references and emits matching `<Variable>` declarations before XAML generation. | F3, M5 | Rethink | M | Moves variable declaration from a post-hoc regex fixup to a structured pre-emit step. |
| T2.4 | **Stub provenance and DHG cross-reference**: extend the gap-analyzer stub record with `gapReason`, `triggeringViolation`, and a back-link into the DHG. | §4.7 | Extend | M | Developers receiving a `FALLBACK_READY` package can immediately see *why* each stub exists and what to do about it. |
| T2.5 | **Golden-file regression corpus (10 packages)**: create a test suite that generates packages for 10 representative automation scenarios and compares the output XAML against checked-in golden snapshots. | §4.8 | Rethink | M | Prevents regressions in fixup functions; catches new defect classes introduced by refactors. |
| T2.6 | **Structured failure-provenance record**: persist a JSON `PipelineTrace` artefact (keyed by `runId`) containing all warnings, downgrades, quality-gate violations, meta-validation corrections, and timing data. | §4.6 | Extend | M | Enables systematic failure analysis, trend tracking, and targeted improvement prioritisation. |

### Tier 3 — Architectural evolution (1–3 months, cross-module)

These items re-shape the emission architecture to eliminate entire defect
classes by construction. Tier 3 items build on the structural foundation
laid by Tier 2.

| ID | Item | Addresses | Approach | Effort | Expected Impact |
|----|------|-----------|----------|--------|-----------------|
| T3.1 | **Typed XAML AST emitter**: replace the string-template emitter in `xaml-generator.ts` with a typed AST builder that constructs an in-memory XML document. Each activity is a node with typed properties; serialisation to XAML string happens in a single final step. Namespace declarations, variable scoping, and argument wrapping are structural invariants of the AST, not post-hoc fixups. | F1–F8, Q1–Q4, S2, S3 | Rethink | L | Eliminates the entire fixup layer by making invalid XAML unrepresentable. |
| T3.2 | **Full catalog-driven emission**: extend T2.1 to all catalogued activities. The AST emitter queries the catalog for every activity's schema (prefix, required/optional properties, child structure, enum values) and constructs the node accordingly. Unknown activities are emitted as annotated stubs rather than best-guess tags. | Q1–Q3, F7 | Rethink | L | Every emitted activity is catalog-valid by construction. Uncatalogued activities are explicitly flagged rather than silently guessed. |
| T3.3 | **Monolith decomposition**: split `package-assembler.ts` and `xaml-generator.ts` along clear module boundaries — e.g., `xaml-ast/`, `nupkg-builder/`, `project-json-builder/`, `archive-validator/`. | Maintainability | Rethink | L | Reduces cognitive load; enables independent testing and evolution of each concern. |
| T3.4 | **Closed-loop regression infrastructure**: extend T2.5 with (a) automatic golden-file update on intentional changes, (b) Studio-headless validation (load `.nupkg` in UiPath CLI and verify no load errors), (c) nightly full-corpus runs against the latest catalog. | §4.8 | Extend | L | Regression detection moves from user-reported to CI-detected; Studio compatibility is validated, not assumed. |

---

## 6  Dependency Graph

```
T1.1 ─┐
T1.2 ─┤
T1.3 ─┼─→ T2.5 (golden-file corpus benefits from cleaner baseline)
T1.4 ─┤        │
T1.5 ─┘        ├─→ T3.1 (AST emitter replaces template emitter)
T1.6 ──────────┤        │
               │        ├─→ T3.2 (full catalog-driven emission)
T2.1 ──────────┤        │
T2.2 ──────────┘        └─→ T3.3 (monolith decomposition)
T2.3 ──────────┐
T2.4 ──────────┼─→ T2.6 (provenance record captures stub + enricher metadata)
               │
               └─→ T3.4 (closed-loop regression needs provenance data)
```

Tier 1 items are independent of each other and can be executed in parallel.
Tier 2 items depend on selected Tier 1 completions as noted.
Tier 3 items build on the structural foundation laid by Tier 2.

---

## 7  Metrics to Track

| Metric | Current Baseline | Target (post-Tier 2) |
|--------|-----------------|----------------------|
| Quality-gate pass rate (full_implementation) | Not tracked | > 85 % |
| Auto-downgrade rate | Not tracked | < 10 % |
| Meta-validation corrections per package | Not tracked | < 2 (down from estimated 4–6) |
| `xaml-compliance.ts` fixup activations per package | Not tracked | < 1 (safety-net only) |
| Mean pipeline latency | Not tracked | Baseline established |
| Regression-corpus pass rate | N/A | 100 % on CI |
| Studio-openable rate | Not tracked | > 95 % |

---

## 8  Appendix: File-Size Summary

| File | LOC | Role |
|------|-----|------|
| `xaml-generator.ts` | 4 121 | XAML emission (string templates) |
| `package-assembler.ts` | 3 533 | NuGet package construction |
| `uipath-integration.ts` | 3 431 | External UiPath API integration |
| `uipath-quality-gate.ts` | 2 050 | Quality-gate checks |
| `xaml-compliance.ts` | 1 520 | Post-hoc XAML fixups |
| `uipath-pipeline.ts` | 1 352 | Pipeline orchestration |
| `metadata-service.ts` | 1 366 | Catalog metadata access |
| `workflow-tree-assembler.ts` | 1 213 | Tree-based spec → XAML |
| `gap-analyzer.ts` | 825 | Stub generation |
| `ai-xaml-enricher.ts` | 772 | AI enrichment |
| `uipath-spec-decomposer.ts` | 696 | Idea → workflow specs |
| `catalog-service.ts` | 491 | Catalog service interface |
| `dhg-generator.ts` | 260 | Developer Handoff Guide |
| `meta-validator.ts` | 208 | LLM-based post-generation review |
| `workflow-spec-types.ts` | 180 | Tree-based spec types |
| `uipath-package.ts` | 82 | Package type definitions |
| **Total** | **~21 900** | |
