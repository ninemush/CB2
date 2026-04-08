# Authority Gap Assessment — Layers 2, 3, 4

## Scope

This assessment covers exactly three authority layers where the CB2 pipeline still discovers truth too late:

1. **Workflow contract authority** (layer 2) — caller/callee argument contracts
2. **Activity schema enforcement timing** (layer 3) — required properties, namespace/shape
3. **Expression authority** (layer 4) — expression validity before serialization

Out of scope: symbol authority (layer 1, in-flight via Task #455), graph authority (layer 5, strong), dependency authority (layer 6, strong), reporting authority (layer 7, reasonably strong).

---

## Gap Table

| Layer | Authority Gap | Current Status | Root Cause | Recommended Fix Direction |
|-------|--------------|----------------|------------|--------------------------|
| **2 — Workflow Contracts** | Contracts validated only post-emission; callers emit bindings without knowing callee's declared arguments | **Weak** | `buildWorkflowContracts` and `validateContractIntegrity` run on final XAML (`package-assembler.ts:8943`, `final-artifact-validation.ts:755`) — long after `workflow-tree-assembler.ts` has already emitted InvokeWorkflowFile bindings. The canonicalizer (`invoke-binding-canonicalizer.ts`) repairs attribute→child-element form and normalizes JSON expressions *post-emission*, confirming that the assembler does not have contract truth at emission time. | Make callee contracts (x:Members / x:Property declarations) available to the tree assembler before it emits InvokeWorkflowFile bindings, so bindings are structurally correct on first pass. |
| **3 — Activity Schema Enforcement** | Required properties, namespace prefixes, and child-element shapes are applied or repaired post-emission | **Partial** | The catalog (`catalogService`, `uipath-activity-registry.ts`) is available at assembly time and *is* consulted for some decisions (e.g., `getActivityTag`, valid-value validation in `workflow-tree-assembler.ts`). However, `required-property-enforcer.ts` runs as a post-emission pass (`package-assembler.ts:8106`) scanning XAML for sentinel values and binding required properties after the tree assembler has already emitted. `xaml-compliance.ts` injects missing namespace declarations and normalizes aliases post-emission. The catalog is partially authoritative at assembly time but required-property enforcement is entirely post-emission. | Wire required-property defaults and child-element shape into the tree assembler's property emission loop so required properties are never omitted in the first place, reducing the enforcer to a safety-net auditor. |
| **4 — Expression Authority** | Expression builder does not guarantee valid VB.NET; linter acts as primary fix path | **Partial** | `buildExpression` in `expression-builder.ts` handles the happy path (literal, variable, comparison, URL) and correctly blocks PLACEHOLDER sentinels. However, `normalizeStringToExpression` (called ~40+ times from the tree assembler) has extensive heuristic branches for raw strings, JSON ValueIntent payloads, config values, timezone patterns, etc., and can still produce ambiguous output. The VB.NET linter (`lintAndFixVbExpression` in `workflow-tree-assembler.ts:3203`, calling `lintExpression` in `vbnet-expression-linter.ts:565`) runs *during* tree assembly (before emission), not purely post-emission. This is stronger than layers 2 and 3. The linter catches C#→VB syntax errors, unbalanced parens, incorrect String.Format usage, and operator issues. The canonicalizer (`invoke-binding-canonicalizer.ts`) further repairs JSON expression leaks post-emission. | Consolidate the normalizeStringToExpression heuristic branches and make buildExpression return a validity tag alongside the expression string, so downstream consumers know whether the expression is guaranteed-valid or needs linting. |

---

## Layer 2 — Workflow Contract Authority (Detailed Assessment)

### Where authority currently lives

- **`workflow-contract-integrity.ts`**: `buildWorkflowContracts` extracts x:Property/x:Member declarations from final XAML to build a `Map<string, WorkflowContract>`. `validateContractIntegrity` compares caller InvokeWorkflowFile bindings against callee contracts. It detects unknown arguments, missing required arguments, undeclared variables, sentinel values, mixed literal/expression syntax, and pseudo-property serialization defects.
- **`invoke-binding-canonicalizer.ts`**: `canonicalizeInvokeBindings` runs post-gate (`package-assembler.ts:8078`) to repair attribute-style bindings → structured argument blocks, remove pseudo-properties (Then, Else, Body serialized as attributes), deduplicate dual serialization, and normalize JSON expression payloads in invoke bindings.
- **`workflow-tree-assembler.ts`**: Emits InvokeWorkflowFile elements and x:Members during tree-to-XAML conversion. The assembler generates x:Members based on the workflow spec's `arguments` array and emits InvokeWorkflowFile bindings based on each activity node's `properties`. It does *not* cross-reference the callee's declared arguments before emitting.
- **`xaml-generator.ts`**: Generates x:Members in the workflow header based on the enrichment spec's argument list.

### Where authority is duplicated, bypassed, or applied too late

- **Duplicated**: Contract validation runs twice — once in `package-assembler.ts:8943` (post-assembly) and again in `final-artifact-validation.ts:755` (final validation). Both are purely diagnostic (audit-only), not corrective.
- **Bypassed**: The tree assembler emits InvokeWorkflowFile bindings without consulting callee contracts. It uses the workflow spec's activity properties directly, which come from the LLM-generated enrichment result. If the LLM produces incorrect argument names, wrong directions, or missing arguments, these errors pass through unchecked.
- **Too late**: The canonicalizer repairs serialization form (attribute→child-element) after emission. The contract validator detects argument mismatches after emission. Neither feeds back to prevent the defective emission.

### Common failure manifestations

- InvokeWorkflowFile binds to argument names that don't exist on the callee (`unknown_target_argument`)
- Callee requires arguments that the caller never binds (`missing_required_target_argument`)
- Argument values serialized as XML attributes instead of structured `<InArgument x:Key="...">` child elements
- Pseudo-properties (Then, Else, Body) incorrectly serialized as InvokeWorkflowFile attributes
- JSON ValueIntent payloads in invoke binding values not resolved to VB expressions

### What would it take to make contracts authoritative at assembly time

The tree assembler would need access to a pre-built contract map (callee name → declared arguments with directions and types) *before* it begins emitting InvokeWorkflowFile elements. This is feasible because:

1. All workflow specs are known before assembly begins (they come from the enrichment result).
2. Each workflow spec declares its arguments in its `arguments` array.
3. The assembler could build a `Map<workflowName, { args: Map<name, {direction, type}> }>` from the full spec set before starting per-workflow assembly.
4. When emitting InvokeWorkflowFile, the assembler would look up the callee's contract and emit only valid bindings in the correct structured form.

This would not require changing the enrichment pipeline or prompts — it would use the same data that currently reaches the contract validator, but earlier.

### Existing coverage

- `workflow-contract-integrity.ts` provides comprehensive post-emission detection (13 defect types in `ContractDefectType` union: `unknown_target_argument`, `missing_required_target_argument`, `invoke_argument_binding_mismatch`, `decomposed_workflow_missing_contract`, `undeclared_variable_reference`, `undeclared_argument_reference`, `invalid_expression_scope`, `mixed_literal_expression_syntax`, `placeholder_sentinel_in_property`, `pseudo_property_on_invoke` (deprecated), `conflicting_argument_serialization`, `invalid_argument_map_serialization`, `invalid_invoke_serialization`).
- `invoke-binding-canonicalizer.ts` provides post-emission repair for serialization form issues.
- Task #455 (symbol authority) is out of scope for this layer — it addresses variable/argument declarations within a single workflow, not cross-workflow contract alignment.
- No existing task addresses pre-emission contract authority.

---

## Layer 3 — Activity Schema Enforcement Timing (Detailed Assessment)

### Where authority currently lives

- **`uipath-activity-registry.ts`**: Proxy-based `ACTIVITY_REGISTRY` merges a hardcoded fallback registry with the dynamic catalog. The fallback registry lists required/optional properties for ~80 common activities. The catalog (when loaded) provides the full schema.
- **`catalog/catalog-service.ts` + `catalog/xaml-template-builder.ts`**: The catalog service provides `getActivitySchema`, `getActivityPrefix`, `getNamespaceInfoForActivity`. The template builder constructs catalog-driven templates that encode required properties, valid values, and child-element vs. attribute syntax.
- **`workflow-tree-assembler.ts`**: The assembler *does* consult the catalog at assembly time for some decisions:
  - `getActivityTag` (line 27) resolves namespace prefixes.
  - `validatePropertyValue` (line 128) checks for serialization artifacts and validates enum values against the schema.
  - Property emission uses `normalizeStringToExpression` which considers CLR type context.
  - However, the assembler does NOT iterate over the schema's required properties to ensure they are all present. It only emits properties that appear in the workflow spec's activity node.
- **`required-property-enforcer.ts`**: Post-emission enforcer that scans XAML for activities, looks up their schema, identifies required properties that are missing or have sentinel values, and attempts to bind them from upstream sources (workflow arguments, variables, invoke outputs, catalog defaults). Called at `package-assembler.ts:8106` (pre-archive enforcement).
- **`xaml-compliance.ts`**: Post-emission namespace injection (`injectMissingNamespaceDeclarations`), alias normalization (`normalizeNamespaceAliases`), and structural validation.
- **`uipath-quality-gate.ts`**: Post-emission completeness checks, blocked pattern scanning.

### Where authority is duplicated, bypassed, or applied too late

- **Partially available but not fully used at assembly time**: The catalog is loaded and the assembler can call `getActivityTag` and validate enum values. But it does not use the catalog to ensure all required properties are emitted. This means the required-property enforcer must fill gaps post-emission.
- **Namespace authority is split**: The assembler uses `getActivityTag` for prefix resolution at assembly time, but `xaml-compliance.ts` must inject missing xmlns declarations and normalize aliases post-emission, because the assembler doesn't track which namespaces it has referenced.
- **Required-property enforcement is entirely post-emission**: `enforceRequiredProperties` runs on XAML text, scanning for activity tags and looking up their schemas. It uses a heuristic source-resolution algorithm (precedence tiers 1-6) to bind missing required properties. This works but is fundamentally a repair pass on already-emitted XAML rather than an authority at emission time.

### Common failure manifestations

- Activities emitted without required properties (e.g., LogMessage without Message, If without Condition)
- Sentinel values (PLACEHOLDER, TODO, STUB) surviving to final XAML in required properties
- Namespace prefixes missing from the root element's xmlns declarations
- Activities emitted with attribute syntax when the catalog specifies child-element syntax
- Required properties bound to generic defaults (empty string, Nothing) when upstream sources were available

### What would it take to make the catalog authoritative at assembly time

The tree assembler's activity emission function would need to:

1. Look up the activity's schema from the catalog.
2. For each required property in the schema, check if the workflow spec provides a value.
3. If not provided, attempt to resolve from the same precedence hierarchy the enforcer uses (workflow arguments, variables, catalog defaults).
4. Emit a structured diagnostic if a required property cannot be resolved, rather than silently omitting it.

This would reduce the required-property enforcer from the primary enforcement mechanism to a safety-net auditor that catches only edge cases.

### Existing coverage

- `required-property-enforcer.ts` provides comprehensive post-emission enforcement with source resolution, precedence tiers, type compatibility checks, and diagnostic reporting.
- `uipath-quality-gate.ts` provides post-emission sentinel detection and completeness checks.
- `xaml-compliance.ts` provides post-emission namespace injection and normalization.
- The catalog template builder provides correct templates to the LLM prompt, but there is no enforcement that the LLM's output conforms to these templates.

---

## Layer 4 — Expression Authority (Detailed Assessment)

### Where authority currently lives

- **`expression-builder.ts`**: `buildExpression` converts a structured `ValueIntent` (literal, variable, expression, url_with_params, vb_expression) to a VB.NET string. This function handles the happy path correctly and blocks PLACEHOLDER sentinels. `normalizeStringToExpression` converts raw strings to bracket-wrapped expressions with extensive heuristic pattern matching (JSON ValueIntent detection, URL detection, config value patterns, variable name inference, etc.).
- **`workflow-tree-assembler.ts`**: Calls `buildExpression` for structured ValueIntent properties and `normalizeStringToExpression` for raw string properties. `lintAndFixVbExpression` (line 3203) calls the linter *during assembly* (before emission) to catch C# syntax, unbalanced parens, and other issues. This is a pre-emission lint, not a post-emission repair.
- **`vbnet-expression-linter.ts`**: `lintExpression` (line 565) provides comprehensive VB.NET expression linting: C#→VB keyword conversion, String.Format decomposition, operator normalization, unbalanced parentheses detection, quote repair, and function argument count validation. Called both during assembly (via `lintAndFixVbExpression` in workflow-tree-assembler) and post-emission (by `workflow-contract-integrity.ts` for undeclared variable detection).
- **`invoke-binding-canonicalizer.ts`**: Post-emission JSON expression normalization in invoke bindings and general expression-bearing attributes (Message, Condition, Value, etc.).

### Where authority is duplicated, bypassed, or applied too late

- **Linting is partially pre-emission**: Unlike layers 2 and 3, the expression linter runs during tree assembly via `lintAndFixVbExpression`. This is architecturally better — the linter acts as a pre-emission gate for individual expressions.
- **JSON ValueIntent resolution is duplicated**: `tryParseJsonValueIntent` is called in `expression-builder.ts`, `normalizeStringToExpression`, `invoke-binding-canonicalizer.ts`, and `required-property-enforcer.ts`. Each call site has slightly different error handling and fallback behavior.
- **normalizeStringToExpression is the weakest link**: This function has 20+ conditional branches for classifying raw strings. It tries to distinguish between variable references, literal strings, VB code patterns, file paths, URLs, config values, and timezone identifiers using regex heuristics. Misclassification here produces expressions that are syntactically valid but semantically wrong (e.g., a literal string treated as a variable reference, or vice versa).
- **Post-emission JSON leak repair**: The invoke-binding-canonicalizer scans for JSON expression patterns in 15+ attribute names post-emission. This suggests that JSON ValueIntent payloads still leak through `buildExpression` and `normalizeStringToExpression` in some paths.

### Common failure manifestations

- JSON ValueIntent payloads (`{"type":"literal","value":"..."}`) surviving to final XAML instead of being resolved to VB expressions
- Raw strings misclassified as variable references (wrapped in `[...]` when they should be quoted)
- C# syntax leaking into VB.NET expressions (caught by the linter's blocker list, but only for known patterns)
- Mixed literal/expression syntax (e.g., `variableName "literal text"` without a concatenation operator)

### What would it take to make the expression builder authoritative

1. `buildExpression` could return a `{ expression: string; valid: boolean; issues: string[] }` tuple instead of a plain string. This would let downstream consumers know whether the expression passed validation without needing a separate lint pass.
2. `normalizeStringToExpression` could be refactored to use the declaration registry (already available via `_activeDeclarationLookup`) more consistently for variable-vs-literal disambiguation, reducing reliance on regex heuristics.
3. JSON ValueIntent resolution could be consolidated to a single canonical call site in `buildExpression`, with all other call sites removed or redirected.

### Existing coverage

- `lintAndFixVbExpression` in `workflow-tree-assembler.ts` provides pre-emission linting (stronger than layers 2 and 3).
- `invoke-binding-canonicalizer.ts` provides post-emission JSON expression repair.
- `vbnet-expression-linter.ts` provides comprehensive VB.NET syntax checking.
- Task #455 (symbol authority) addresses undeclared variable detection, which overlaps with expression authority for variable-reference expressions.
- The expression builder's JSON ValueIntent handling is extensive and covers most common patterns.

---

## Cross-Reference with Existing Work

### Task #455 (Symbol Authority — Variable Declaration Completion)

Task #455 addresses symbol discovery and declaration within a single workflow — ensuring that variables referenced in expressions are declared before quality gate. It explicitly lists as **out of scope**:
- Workflow invoke contract serialization and x:Members generation across workflows (→ this is Layer 2)
- Namespace prefix authority for activity tags (→ this is Layer 3)

Task #455 overlaps with Layer 4 (expression authority) in that improved symbol discovery makes `normalizeStringToExpression`'s variable-vs-literal disambiguation more reliable (the `isDeclared` callback). However, Task #455 does not address JSON ValueIntent leak prevention or expression validity guarantees.

### Existing Validators/Enforcers

| Validator/Enforcer | Layer(s) Covered | Role |
|---|---|---|
| `workflow-contract-integrity.ts` | Layer 2 | Post-emission auditor (detection only, no repair) |
| `invoke-binding-canonicalizer.ts` | Layers 2, 4 | Post-emission repair (serialization form, JSON expressions) |
| `required-property-enforcer.ts` | Layer 3 | Post-emission enforcement (required property binding) |
| `xaml-compliance.ts` | Layer 3 | Post-emission namespace injection and normalization |
| `uipath-quality-gate.ts` | Layer 3 | Post-emission completeness check |
| `vbnet-expression-linter.ts` | Layer 4 | Pre-emission lint (called during assembly) + post-emission analysis |
| `expression-builder.ts` | Layer 4 | Pre-emission expression construction |

### Previously Proposed Tasks

Note: task descriptions for #391, #373, #408, #410, #114, and #261 are not available in the current task index. The following overlap analysis is based on the task numbers referenced in the task description and the functional areas each number is associated with in pipeline history. Where definitive mapping is not possible, the entry states so explicitly.

- **#391, #373**: These task numbers are associated with invoke serialization and contract repair work. The invoke-binding-canonicalizer (`canonicalizeInvokeBindings`) and contract validator (`validateContractIntegrity`) now provide comprehensive post-emission coverage for these areas. The Tier 1 recommendation (pre-emission contract resolution) would supersede any remaining unimplemented work from these tasks by moving authority upstream. **Status: substantially covered by existing validators; residual gap addressed by Tier 1.**
- **#408, #410**: These task numbers are associated with expression enforcement and schema completeness. The required-property enforcer and expression linter now provide post-emission coverage. The Tier 2 design spike (required-property injection at assembly time) would address any remaining gap. **Status: substantially covered by existing enforcers; residual gap addressed by Tier 2.**
- **#114**: Insufficient evidence to map definitively. If this relates to foundational catalog/registry work, it is now superseded by the operational catalog service (`catalog-service.ts`) and activity registry (`uipath-activity-registry.ts`). **Status: likely superseded; confirm by reviewing original task description if available.**
- **#261**: Insufficient evidence to map definitively. If this relates to broader pipeline quality improvements, it overlaps with the existing quality gate (`uipath-quality-gate.ts`) and dependency analyzer (`post-emission-dependency-analyzer.ts`). **Status: likely partially covered; confirm by reviewing original task description if available.**

---

## Ranked Roadmap

### Tier 1 — Next Implementation Task (Exactly One)

**Pre-Emission Workflow Contract Resolution in Tree Assembler**

*Authority boundary change*: Workflow contract truth (callee argument names, directions, types) moves from post-emission audit (`validateContractIntegrity`) to pre-emission authority in the tree assembler. The assembler will emit InvokeWorkflowFile bindings that are structurally correct on first pass, using the callee's declared contract.

*Primary files to touch*:
- `server/workflow-tree-assembler.ts` — specifically the InvokeWorkflowFile emission path (search for `InvokeWorkflowFile` in the assembler; the function that emits invoke activity XAML). Add a contract lookup before emitting bindings: filter out unknown arguments, ensure correct InArgument/OutArgument direction, and use structured child-element form.
- `server/workflow-tree-assembler.ts` — add a `buildContractMap(specs: WorkflowSpec[]): Map<string, {args: Map<name, {direction, type}>}>` function that builds the callee contract index from the full workflow spec set before per-workflow assembly begins.
- `server/package-assembler.ts` — pass the contract map into the tree assembler's assembly function (the caller that invokes per-workflow assembly, around the section that iterates over workflow specs).

*What it does NOT touch*:
- Does not modify the enrichment pipeline, LLM prompts, or workflow spec types.
- Does not modify `workflow-contract-integrity.ts` (the post-emission validator remains as a safety-net auditor).
- Does not modify `invoke-binding-canonicalizer.ts` (the post-emission canonicalizer remains for edge cases).
- Does not address required-property enforcement or expression authority.

*Concrete change*: Before the tree assembler emits each InvokeWorkflowFile activity, it looks up the target workflow's contract from the pre-built contract map. It then: (a) emits only bindings for arguments that exist in the callee's contract, (b) uses the correct argument direction (InArgument vs OutArgument), (c) emits bindings in structured child-element form (not attribute form), and (d) logs a diagnostic for any spec-provided binding that references a non-existent callee argument. This eliminates the entire class of `unknown_target_argument` and `invoke_argument_binding_mismatch` defects at source, and makes `canonicalizeInvokeBindings`'s attribute→child-element repair largely unnecessary.

*Rationale*: Layer 2 is the weakest authority gap. Contracts are validated twice post-emission but never consulted pre-emission. The data needed (callee argument declarations) is already available in the workflow specs. This is a targeted, low-risk change that eliminates a well-understood defect class.

### Tier 2 — Next Optional Planning Task (Zero or One)

**Design Spike: Required-Property Injection at Assembly Time**

Investigate what it would take to have the tree assembler consult the activity catalog for required properties during property emission, rather than relying entirely on the post-emission enforcer. Specifically:

- How many activities in the benchmark have required properties that the LLM consistently omits?
- For those activities, can the tree assembler inject catalog defaults during emission without breaking the existing property emission logic?
- What is the interaction between assembly-time injection and the existing post-emission enforcer — can both coexist during a transition, or must they be mutually exclusive?

This is a scoped design question, not a broad assessment. The answer would determine whether Tier 1 (contract authority) should be followed by assembly-time required-property enforcement or whether the existing post-emission enforcer is adequate.

### Tier 3 — Deferred Work (Two Items)

**3a. Consolidate JSON ValueIntent Resolution to a Single Canonical Path**

Currently, `tryParseJsonValueIntent` + `buildExpression` is called in four different places with slightly different error handling: `expression-builder.ts`, `normalizeStringToExpression`, `invoke-binding-canonicalizer.ts`, and `required-property-enforcer.ts`. This duplication means JSON leak repair is scattered rather than authoritative.

*Why deferred*: The existing four call sites collectively catch most JSON leaks. The duplication is inelegant but not causing high-volume defects. This should wait until after Tier 1 (contract authority) is implemented, because fixing contract authority will reduce the number of malformed expressions reaching downstream canonicalization. Additionally, Task #455's symbol authority improvements may change the `normalizeStringToExpression` heuristic landscape, making consolidation easier to design after that work lands.

**3b. Expression Builder Validity Tagging**

Extend `buildExpression` to return a validity tag alongside the expression string, so the caller knows whether the expression is guaranteed-valid VB.NET or may need linting. This would let the tree assembler skip the `lintAndFixVbExpression` call for expressions the builder has already validated.

*Why deferred*: The current architecture where `lintAndFixVbExpression` runs during assembly (pre-emission) is already architecturally sound — the linter is not a post-emission repair for this layer, it is an assembly-time safety net. The performance and correctness cost of running the linter on already-valid expressions is low. This is a quality-of-life improvement, not an authority gap fix.

---

## Do Not Do Next

1. **Do not build a combined mega-task spanning all three layers.** The three authority gaps have different severity levels (Layer 2 weak, Layers 3-4 partial) and different fix strategies. A combined task would be too broad to implement cleanly and would risk incomplete coverage of each layer.

2. **Do not add a new parallel contract validator.** `workflow-contract-integrity.ts` already provides comprehensive post-emission contract validation with 13 defect types. The gap is not in detection — it is in timing. The fix is to consult contracts *before* emission, not to add another post-emission check.

3. **Do not add another post-emission required-property repair pass.** `required-property-enforcer.ts` already handles this with a sophisticated source-resolution algorithm. Adding a second post-emission enforcer would duplicate logic. If Layer 3 authority needs strengthening, the fix direction is to move enforcement *upstream* into the assembler, not to add another downstream repair.

4. **Do not treat expression authority (Layer 4) as the most urgent gap.** The expression linter already runs pre-emission during tree assembly, making Layer 4 architecturally stronger than Layers 2 and 3. Investing in Layer 4 before fixing Layer 2 (which has no pre-emission authority at all) would be misallocating effort.

5. **Do not recommend work already covered by Task #455.** Symbol discovery, undeclared-variable detection, and declaration registry improvements are in-flight. Any expression authority work should wait for Task #455 to land, then assess the residual gap.

6. **Do not use prompt engineering as the solution for any of these layers.** The gaps are in the pipeline's authority enforcement, not in the LLM's generation quality. Even a perfect LLM would benefit from pre-emission contract and schema validation as a safety net.

7. **Do not recommend broad "assess everything" follow-on tasks.** This assessment is the assessment. The roadmap above is specific enough to convert directly into implementation tasks.
