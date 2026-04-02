# CannonBall Pipeline Evidence Sources

This reference maps every evidence type used in the pipeline evidence gate to its concrete location, format, and interpretation rules.

## 1. Developer Handoff Guide (DHG)

The DHG is the primary evidence source. It is generated at the end of each pipeline run and summarizes the full build outcome.

### Where to Find It

- Generated as a markdown file after each pipeline run
- Typically attached as `DeveloperHandoffGuide_(<run_number>)_<timestamp>.md`
- Check `attached_assets/` for the most recent version

### Key Sections and What They Tell You

| DHG Section | What It Contains | Evidence Type |
|---|---|---|
| Header metrics | Workflow counts, deployment readiness %, total remediations, auto-repairs, quality warnings | Pipeline metrics |
| Per-Workflow Preservation Summary | Tier (Generated/Stub), preserved vs. degraded vs. manual counts, bind points | Pipeline self-assessment |
| Section 1: Generated Logic | Which workflows are fully generated and Studio-openable | Pipeline self-assessment |
| AI-Resolved with Smart Defaults | Auto-repairs applied (REPAIR_PLACEHOLDER_CLEANUP, REPAIR_GENERIC, etc.) | Pipeline self-assessment — confirms existing mitigations |
| Studio Compatibility table | Per-file openability status and failure category | Consumer verdict (proxy) |
| Section 3: Manual Work Remaining | Itemized TODO list with priority, category, description, developer action, and estimated effort | Pipeline self-assessment |
| Section 7: Orchestrator Artifacts | Asset/credential inventory, hardcoded flags, detailed usage map | Pipeline self-assessment |
| Section 8: SDD × XAML Reconciliation | Mismatches between what the SDD declares and what the XAML references | Pipeline self-assessment |
| Section 10: Exception Handling | TryCatch coverage percentage, uncovered high-risk activities | Pipeline self-assessment |
| Section 12: Upstream Quality Findings | Aggregated quality warning codes with counts and samples | Pipeline self-assessment |
| Section 14: Deployment Readiness Score | Category scores (Credentials, Exception Handling, Queues, Build Quality, Environment) | Pipeline metrics |
| Section 16: Structured Report (JSON) | Machine-readable version of the full report | Programmatic evidence |

### How to Read DHG Entries

- **Remediation codes** (e.g., `STUB_ACTIVITY_UNKNOWN`, `STUB_WORKFLOW`) indicate what the pipeline did when it could not generate correct output — these are symptoms of upstream defects
- **Quality warning codes** (e.g., `hardcoded-asset-name`, `unprefixed-activity`, `BARE_TOKEN_QUOTED`) are classified findings from the quality gate — each represents a distinct defect class
- **Auto-repair codes** (e.g., `REPAIR_PLACEHOLDER_CLEANUP`, `REPAIR_GENERIC`) indicate the pipeline already attempted to fix something — check whether the repair was sufficient before claiming a defect still exists
- **Studio Compatibility** values: "Studio-openable" means no errors; "Openable with warnings" means Studio loads it but shows issues; "Not Studio-loadable" means Studio cannot open the file at all

### Interpreting Counts

- `Quality Warnings: 112` does not mean 112 unique bugs — many warnings are instances of the same defect class (e.g., 27 `hardcoded-asset-name` warnings may all trace to one resolver bug)
- Group warnings by code to identify distinct defect classes
- The Section 12 summary table gives you the grouped view: code, severity, count, sample message

## 2. Build Logs

### Where to Find Them

- Pipeline console output during the build run
- Check workflow logs if the pipeline runs as a workflow
- Look for timestamped log lines with stage prefixes

### What to Look For

| Log Pattern | What It Means |
|---|---|
| `[ExpressionResolver]` or similar stage prefix | Identifies which pipeline stage produced the output |
| `WARN:` or `WARNING:` lines | Non-fatal issues the pipeline detected but did not fix |
| `ERROR:` lines | Fatal issues that caused a stage to fail or fall back |
| `Auto-repair applied:` or `Remediation:` lines | Confirms the pipeline applied a fix — check if it was sufficient |
| `Stub generated for:` lines | Confirms a workflow was replaced with a stub (not fully generated) |
| Timing/duration lines | Useful for identifying performance bottlenecks |

### Evidence Format

When citing a build log line, include:
- The exact line text (or a meaningful excerpt)
- The stage prefix if present
- Timestamp if available

Example: `[QualityGate] WARN: Line 69 of InitializeConfig.xaml — hardcoded-asset-name: asset name contains literal-object wrapper`

## 3. Studio Errors

### Where to Find Them

- Open the generated project in UiPath Studio
- Check the **Errors** panel at the bottom of Studio (Design tab → Errors tab)
- Scope should be set to "Project" and Rule to "All Rules"
- Also check the **Output** panel for runtime errors during debug execution

### What Studio Errors Look Like

From the Studio Errors panel (see attached screenshot for reference):

| Column | Content |
|---|---|
| Code | Error code (e.g., "ERROR") |
| Name | Error category (e.g., "Validation Error") |
| Description | Full error description |
| File | Which .xaml file has the error |

### Common Studio Error Patterns

| Studio Error | Likely Pipeline Defect |
|---|---|
| `Could not load ... DynamicActivity or its implementation` | Malformed XAML structure — the pipeline emitted invalid XML nesting or missing namespace declarations |
| `Cannot create unknown type '...'` | Invalid `x:TypeArguments` or missing activity package reference |
| `Cannot set unknown member '...'` | Property name not recognized by the activity — may be an `invalid-activity-property` quality warning |
| Activity shows as "Unknown" in designer | Missing namespace prefix (maps to `unprefixed-activity` quality warning) |
| Yellow warning triangle on activity | Non-blocking issue — Studio can run but behavior may be incorrect |

### Evidence Format

When citing a Studio error, include:
- The exact Description text
- The File column value
- Whether it is from the Errors panel (static validation) or Output panel (runtime)

Example: `Studio Errors panel → Validation Error: "Cannot set unknown member 'UiPath.Core.Activities.GetTransactionItem.QueueName'" in GetTransactionData.xaml`

## 4. Pipeline Metrics

### Key Metrics to Check

| Metric | Where to Find | What It Tells You |
|---|---|---|
| Deployment Readiness % | DHG header + Section 14 | Overall build quality — below 70% indicates significant issues |
| Quality Warning count | DHG header | Total number of quality gate findings — group by code for defect classes |
| Remediation count | DHG header | How many issues the pipeline attempted to fix |
| Auto-Repair count | DHG header | How many issues were automatically resolved |
| Studio Compatibility summary | DHG Section 1, Studio Compatibility table | How many files Studio can open without issues |
| Exception Handling coverage % | DHG Section 10 | Percentage of high-risk activities inside TryCatch blocks |
| Category scores | DHG Section 14 table | Breakdown by area: Credentials & Assets, Exception Handling, Queue Management, Build Quality, Environment |

### Tracking Improvement

When proposing a fix, estimate the expected metric improvement:
- Which quality warning codes will be eliminated?
- How many remediations will no longer be needed?
- What will the new Deployment Readiness score be?

## 5. Pipeline Self-Assessment vs. Consumer Verdict

This distinction is critical for accurate root cause analysis.

### Pipeline Self-Assessment

What the pipeline itself reports about its output. Sources:

- DHG quality warnings and remediations
- Build log warnings and errors
- Deployment readiness score and category scores
- SDD × XAML reconciliation results

**Limitation:** The pipeline may report a warning for something that is actually fine in Studio (false positive), or miss something that Studio flags (false negative).

### Consumer Verdict

What UiPath Studio — the actual consumer of the pipeline output — reports. Sources:

- Studio Errors panel (static validation)
- Studio Output panel (runtime errors during debug)
- Studio designer view (visual inspection — does the workflow look correct?)
- Actual execution results (does the workflow run correctly?)

**Limitation:** Studio may not catch all issues until runtime (e.g., wrong asset names pass Studio validation but fail when GetAsset executes against Orchestrator).

### When Both Are Required

Both perspectives are required when:

- The DHG reports "Studio-openable" but you are claiming a Studio error exists → must show the actual Studio error
- The DHG reports a quality warning but you are claiming it does not matter → must show Studio validation passes and runtime behavior is correct
- A defect is only visible in Studio (not in the DHG) → must document this gap as a pipeline coverage issue
- A defect class spans both: the DHG reports symptoms and Studio confirms impact → cite both for maximum confidence

### When Only One Is Available

- If Studio is not available (no test harness), document this limitation and rely on DHG evidence with a note: "Consumer verdict: not available — Studio testing pending"
- If the DHG is not available (e.g., pre-pipeline code change), do not plan pipeline fixes — wait for the next pipeline run to produce a DHG

## 6. Mapping Defect Classes from DHG Evidence

Use this process to identify the complete set of defect classes from a DHG:

1. **Read Section 12 (Upstream Quality Findings)** — each unique warning code is a candidate defect class
2. **Read the remediations list** — each unique remediation code that is NOT an auto-repair is a candidate defect class
3. **Read Section 8 (SDD × XAML Reconciliation)** — systematic mismatches indicate a defect class (e.g., all SDD-only artifacts mapping to literal-wrapped XAML-only artifacts = one defect class)
4. **Read Studio Compatibility** — any file marked "Not Studio-loadable" or "Openable with warnings" with a specific failure category is a candidate defect class
5. **Cross-reference**: some DHG entries are symptoms of the same root cause (e.g., `hardcoded-asset-name` warnings and SDD-only/XAML-only reconciliation mismatches may both trace to the expression resolver)
6. **Group by root cause**: collapse related symptoms into a single root pattern, citing all evidence sources

### Example Defect Class Extraction

From a sample DHG with 112 quality warnings:

| Defect Class | DHG Evidence | Count | Root Cause Area |
|---|---|---|---|
| Unresolved literal-object wrappers | hardcoded-asset-name (27), Section 8 mismatches (30), BARE_TOKEN_QUOTED (19) | 76 | Expression resolver |
| Unprefixed activities | unprefixed-activity (7 remediations) | 7 | Activity emitter namespace handling |
| Hardcoded retry values | hardcoded-retry-count (6), hardcoded-retry-interval (9), RETRY_INTERVAL_DEFAULTED (4) | 19 | Config externalization |
| Invalid activity properties | invalid-activity-property (20) | 20 | Property catalog completeness |
| Duplicate literal-named workflow files | 4 files named `{"type":"literal","value":"..."}.xaml` | 4 | Invocation expression resolver |
| Complex expression passthrough | COMPLEX_EXPRESSION_PASSTHROUGH (1) | 1 | Expression parser limitations |

This gives you 6 defect classes from 112 warnings — a plan must address all 6 to be complete (per gate #5).
