---
name: pipeline-evidence-gate
description: Enforces evidence-based planning for CannonBall UiPath XAML generation pipeline work. Use when a planning agent is scoping defect fixes, remediation tasks, or quality improvements on the CannonBall pipeline. Requires runtime evidence (build logs, DHG entries, Studio errors, pipeline metrics) before any root cause claim or task proposal.
---

# Pipeline Evidence Gate

Enforce evidence-based planning for all CannonBall pipeline work. Every root cause claim must be verified against runtime output — never rely solely on code-reading and inference.

## Activation Criteria

Use this skill whenever:

- A planning agent is scoping work on the UiPath XAML generation pipeline (CannonBall)
- A defect is being triaged or a root cause is being proposed for pipeline output issues
- A remediation plan is being drafted for quality gate findings, Studio errors, or DHG entries
- Any task proposes to change pipeline behavior based on a claimed defect pattern

Do NOT use this skill for:

- General code review unrelated to the pipeline
- Studio manual implementation work (downstream of the pipeline)
- Orchestrator provisioning or deployment tasks

## Evidence Template

For every root pattern claim in a planning document, fill in this template before proposing any task:

```
### Root Pattern: [short name]

**Claim:** [one-sentence description of the alleged defect]

**Evidence Sources:**

1. **Runtime evidence** (REQUIRED — at least one):
   - [ ] Build log line: [exact log line or excerpt, with timestamp if available]
   - [ ] DHG entry: [section number, table row, code/description from the Developer Handoff Guide]
   - [ ] Studio error: [exact error text from the Studio Errors panel, including file and description]
   - [ ] Pipeline metric: [metric name and value, e.g., "Deployment Readiness: 56%", "Quality Warnings: 112"]

2. **End-to-end code trace** (REQUIRED):
   - Entry point: [file:function or pipeline stage where the pattern originates]
   - Propagation path: [how the defect flows through pipeline stages]
   - Terminal effect: [what the end user or Studio sees as a result]
   - Existing mitigations: [any cleanup, repair, or fallback logic already in place — must be checked]

3. **Consumer verdict** (REQUIRED when available):
   - [ ] Studio opens the file: [Yes / Yes with warnings / No — with exact error]
   - [ ] Studio validation errors: [list from Errors panel, or "none"]
   - [ ] Runtime behavior in Studio: [observed vs. expected, or "not tested"]

**Confidence:** [HIGH / MEDIUM / LOW]
- HIGH: Runtime evidence confirms the defect exists and is not mitigated downstream
- MEDIUM: Runtime evidence shows symptoms consistent with the claim, but downstream mitigation status is uncertain
- LOW: Claim is based on code reading only — NOT ACCEPTABLE for task proposal

**Verdict:** [CONFIRMED / NEEDS MORE EVIDENCE / REJECTED]
```

## Pre-Proposal Checklist

Before proposing any task, every item must pass:

| # | Gate | Pass Criteria | Fail Action |
|---|------|---------------|-------------|
| 1 | Every root pattern has runtime evidence | At least one non-code evidence source (build log, DHG entry, Studio error, or pipeline metric) is cited per pattern | Do not propose. Gather evidence first. |
| 2 | Downstream cleanup is checked | For each claimed leak/defect, the agent has traced the code path to the output and confirmed no existing repair or fallback handles it | Do not propose. Trace the full path. |
| 3 | Pipeline self-assessment vs. consumer verdict distinction | The plan distinguishes between what the DHG/quality gate reports (pipeline self-assessment) and what Studio actually shows (consumer verdict) | Add the missing perspective. |
| 4 | No LOW-confidence patterns in the proposal | Every root pattern has confidence HIGH or MEDIUM | Remove LOW-confidence patterns or gather more evidence. |
| 5 | Defect class completeness | The agent has reviewed all DHG sections (quality warnings, remediations, Studio compatibility, reconciliation) — not just the code — to identify the full set of defect classes | Review the full DHG before finalizing. |
| 6 | Evidence is from the current build | Cited evidence matches the current pipeline run, not a stale or hypothetical run | Re-run the pipeline or obtain current output. |

## Worked Examples

### BAD: Code-inference only (REJECTED)

```
### Root Pattern: getPropString leak

**Claim:** getPropString emits raw JSON objects as property values, causing
Studio to fail on asset names like `{"type":"literal","value":"BGV20_..."}`.

**Evidence Sources:**
1. Runtime evidence: (none — claim based on reading getPropString source code)
2. Code trace: getPropString → returns interpolated template → emitted to XAML
3. Consumer verdict: (not checked)

**Confidence:** LOW
**Verdict:** NEEDS MORE EVIDENCE
```

**Why this fails:**

- No runtime evidence: the agent read the code and assumed the output was wrong
- Did not check whether downstream stages (e.g., `REPAIR_GENERIC`, `BARE_TOKEN_QUOTED` auto-repair) already fix this
- Did not open the XAML in Studio to see the actual error
- Missed that the DHG already documents this exact pattern under "hardcoded-asset-name" warnings (Section 12) — the pipeline is aware of it

### GOOD: Runtime-verified (CONFIRMED)

```
### Root Pattern: Unresolved literal-object asset names

**Claim:** The expression resolver emits `{"type":"literal","value":"..."}` wrappers
instead of bare string values for asset names in GetAsset activities, causing
13 hardcoded-asset-name quality warnings and SDD-vs-XAML reconciliation mismatches.

**Evidence Sources:**
1. Runtime evidence:
   - [x] DHG Section 12, "hardcoded-asset-name" row: 27 warnings, sample:
     `Line 69: asset name "{"type":"literal","value":"BGV20_GoogleCalendar_Name"}"
     is hardcoded`
   - [x] DHG Section 8 (SDD × XAML Reconciliation): 15 SDD-only artifacts and
     15 XAML-only artifacts — the XAML-only names are the literal-wrapped versions
     of the SDD-only names (e.g., SDD has `BGV20_GoogleCalendar_Name`, XAML has
     `{type:literal,value:BGV20_GoogleCalendar_Name}`)
   - [x] Pipeline metric: Deployment Readiness 56%, Credentials & Assets score 5/10
     citing "13 hardcoded asset name(s)"

2. Code trace:
   - Entry: expression resolver receives SDD property value as structured object
   - Propagation: resolver serializes the object to JSON string instead of
     extracting the `.value` field
   - Terminal: XAML GetAsset activities contain the JSON wrapper as the asset name
   - Existing mitigations: `BARE_TOKEN_QUOTED` auto-repair wraps the token in
     VB string quotes but does NOT unwrap the JSON object — the asset name is
     still wrong, just syntactically valid XML

3. Consumer verdict:
   - [x] Studio opens InitializeConfig.xaml: Yes (Studio-openable per DHG Section 1)
   - [x] Studio validation errors: No validation errors for this specific pattern
     (Studio treats the string as an opaque asset name)
   - [x] Runtime behavior: GetAsset will fail at runtime because Orchestrator
     has no asset named `{"type":"literal","value":"BGV20_GoogleCalendar_Name"}`
     — it expects `BGV20_GoogleCalendar_Name`

**Confidence:** HIGH
**Verdict:** CONFIRMED — the expression resolver must extract `.value` from
literal-type objects before emitting to XAML
```

**Why this passes:**

- Three independent runtime evidence sources (DHG warnings, reconciliation table, deployment score)
- Full code trace including check of existing mitigations (`BARE_TOKEN_QUOTED` does not fix the root cause)
- Consumer verdict distinguishes between Studio opening (passes) and runtime behavior (fails)
- Identifies the exact fix location (expression resolver) with confidence

### BAD: Missing defect classes (INCOMPLETE)

```
Plan proposes 2 tasks:
1. Fix getPropString for asset names
2. Fix retry interval expressions

(Plan stops here)
```

**Why this fails gate #5 (defect class completeness):**

The DHG for this build contains at least 5 distinct defect classes visible only from the DHG, not from code reading:

1. Literal-object asset names (27 hardcoded-asset-name warnings)
2. Unprefixed activities like `MultipleAssign` (7 validation findings across 4 files)
3. Literal-object retry intervals (9 hardcoded-retry-interval warnings)
4. Duplicate workflow files from unresolved invocation expressions (4 `{"type":"literal",...}.xaml` files)
5. Missing required activity properties (4 findings in Process.xaml)

A plan that only addresses 2 of 5 classes will leave the majority of defects unresolved. The agent must review all DHG sections before proposing.

## Key Principle

**Runtime artifacts are ground truth — not code inference alone.** The DHG, build logs, and Studio errors tell you what the pipeline *produced*; code reading only tells you what it *might* produce. A defect exists only if runtime evidence (DHG entry, build log, Studio error, or pipeline metric) confirms it. A defect is already handled if the DHG shows an auto-repair for it. Some defects are visible only in Studio and not in the DHG — always check both when available. Plan from the output backward to the code, never from the code forward to a hypothetical output.

## Reference

Read `.agents/skills/pipeline-evidence-gate/reference/evidence-sources.md` for detailed guidance on where to find each type of evidence and how to interpret it.
