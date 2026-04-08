# Developer Handoff Guide

**Project:** BirthdayGreetingsV20
**Generated:** 2026-04-02
**Generation Mode:** Baseline Openable (minimal, deterministic)
**Deployment Readiness:** Not Ready (21%)

**21 workflows: 10 fully generated, 0 with handoff blocks, 10 workflow-level stubs, 1 Studio-blocked**
**Total Estimated Effort: ~1095 minutes (18.3 hours)**
**Remediations:** 73 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 7 workflow)
**Auto-Repairs:** 13
**Quality Warnings:** 95

---

### Per-Workflow Preservation Summary

| # | Workflow | Tier | Business Steps (SDD) | Preserved | Degraded (Handoff) | Manual | Bind Points |
|---|----------|------|-------------|-----------|-------------------|--------|-------------|
| 1 | `ParseContactEmailAddress.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 2 | `GenerateBirthdayMessage.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 3 | `Dispatcher.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 4 | `InitPerformer.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 5 | `ProcessTransaction.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 6 | `Performer.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 7 | `Process.xaml` | Stub | 1 | 1 | 0 | 0 | 0 |
| 8 | `InitAllSettings.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 9 | `Main.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 10 | `GetTransactionData.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 11 | `SetTransactionStatus.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 12 | `CloseAllApplications.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 13 | `KillAllProcesses.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 14 | `Init.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 15 | `{type:literal,value:ParseContactEmailAddress.xaml}.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 16 | `{type:literal,value:InitPerformer.xaml}.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 17 | `{type:literal,value:ProcessTransaction.xaml}.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 18 | `AgentInvocation_Stub.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 19 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 20 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 21 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |

## 1. Generated Logic (ready to use)

Generated XAML that is Studio-openable and does not contain handoff blocks or workflow-level stubs. May include auto-resolved property remediations or placeholders for fine-tuning.

The following 10 workflow(s) were fully generated and are ready to use:

| # | Workflow | Status | Studio Compatibility |
|---|----------|--------|---------------------|
| 1 | `Performer.xaml` | Generated with Remediations | Openable with warnings |
| 2 | `Main.xaml` | Fully Generated | Openable with warnings |
| 3 | `GetTransactionData.xaml` | Fully Generated | Studio-openable |
| 4 | `SetTransactionStatus.xaml` | Fully Generated | Studio-openable |
| 5 | `CloseAllApplications.xaml` | Fully Generated | Studio-openable |
| 6 | `Init.xaml` | Fully Generated | Openable with warnings |
| 7 | `{type:literal,value:ParseContactEmailAddress.xaml}.xaml` | Generated with Placeholders | Openable with warnings |
| 8 | `{type:literal,value:InitPerformer.xaml}.xaml` | Generated with Placeholders | Openable with warnings |
| 9 | `{type:literal,value:ProcessTransaction.xaml}.xaml` | Generated with Placeholders | Openable with warnings |
| 10 | `AgentInvocation_Stub.xaml` | Generated with Placeholders | Openable with warnings |

### AI-Resolved with Smart Defaults (13)

The following issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes Saved |
|---|------|------|-------------|-------------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Process.xaml` | Stripped 23 placeholder token(s) from Process.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `{type:literal,value:ParseContactEmailAddress.xaml}` | Stripped 1 placeholder token(s) from {type:literal,value:ParseContactEmailAddress.xaml} | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `{type:literal,value:InitPerformer.xaml}` | Stripped 1 placeholder token(s) from {type:literal,value:InitPerformer.xaml} | 5 |
| 4 | `REPAIR_PLACEHOLDER_CLEANUP` | `{type:literal,value:ProcessTransaction.xaml}` | Stripped 1 placeholder token(s) from {type:literal,value:ProcessTransaction.xaml} | 5 |
| 5 | `REPAIR_PLACEHOLDER_CLEANUP` | `AgentInvocation_Stub.xaml` | Stripped 1 placeholder token(s) from AgentInvocation_Stub.xaml | 5 |
| 6 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseCont... | undefined |
| 7 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved uweb:DeserializeJson.JsonString from attribute to child-element in Pars... | undefined |
| 8 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved uweb:DeserializeJson.JsonObject from attribute to child-element in Pars... | undefined |
| 9 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseCont... | undefined |
| 10 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved ForEach.Values from attribute to child-element in ParseContactEmailAddr... | undefined |
| 11 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseCont... | undefined |
| 12 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseCont... | undefined |
| 13 | `REPAIR_GENERIC` | `ParseContactEmailAddress.xaml` | Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseCont... | undefined |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `ParseContactEmailAddress.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 2 | `GenerateBirthdayMessage.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 3 | `Dispatcher.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 4 | `InitPerformer.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 5 | `ProcessTransaction.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 6 | `Performer.xaml` | Openable with warnings | Unclassified | — |
| 7 | `Process.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 135: Standalone word "Yes" may be an undec...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 234: Standalone word "Yes" may be an undec...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 512: Standalone word "Yes" may be an undec... |
| 8 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 9 | `Main.xaml` | Openable with warnings | Unclassified | — |
| 10 | `GetTransactionData.xaml` | Studio-openable | — | — |
| 11 | `SetTransactionStatus.xaml` | Studio-openable | — | — |
| 12 | `CloseAllApplications.xaml` | Studio-openable | — | — |
| 13 | `KillAllProcesses.xaml` | Studio-openable | — | — |
| 14 | `Init.xaml` | Openable with warnings | Unclassified | — |
| 15 | `{type:literal,value:ParseContactEmailAddress.xaml}` | Openable with warnings | Unclassified | — |
| 16 | `{type:literal,value:InitPerformer.xaml}` | Openable with warnings | Unclassified | — |
| 17 | `{type:literal,value:ProcessTransaction.xaml}` | Openable with warnings | Unclassified | — |
| 18 | `AgentInvocation_Stub.xaml` | Openable with warnings | Unclassified | — |
| 19 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 20 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 21 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}` | Openable with warnings | Unclassified | — |

**Summary:** 5 Studio-loadable, 10 with warnings, 6 not Studio-loadable

> **⚠ 6 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots/error_&amp;quot; &amp;amp; DateTime.Now.ToString(&amp;quot;yyyyMMdd_HHmmss&amp;quot;) &amp;amp; &amp;quot;.png&amp;quot;" contains a VB expression that is not bracket-wrapped — Studio will treat it as a literal string, not an expression: 5 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 135: Standalone word "Yes" may be an undeclared variable — should it be a string literal "Yes"? in expression: Yes; [EXPRESSION_SYNTAX_UNFIXABLE] Line 234: Standalone word "Yes" may be an undeclared variable — should it be a string literal "Yes"? in expression: Yes: 1 workflow(s)

## 2. Handoff Blocks (business logic preserved, implementation required)

Blocks where business logic is preserved as documentation but implementation requires manual Studio work. Each entry includes the workflow file, block type, business description from the SDD (when available), expected inputs/outputs, and the developer action required.

No handoff blocks — all logic was fully generated.

## 3. Manual Work Remaining

Consolidated developer TODO list organized by workflow, with estimated effort per item.

**168 items remaining — ~2045 minutes (34.1 hours) total estimated effort**

### Dispatcher.xaml (15 items, ~190 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 1 | High | Workflow Stub | Entire workflow `Dispatcher.xaml` replaced with Studio-openable stub | Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags | 15 |
| 2 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 3 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 4 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 5 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 6 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 7 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 8 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 9 | Low | Quality Warning | hardcoded-retry-interval: Line 332: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 10 | Low | Quality Warning | hardcoded-asset-name: Line 76: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 11 | Low | Quality Warning | hardcoded-asset-name: Line 116: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 12 | Low | Quality Warning | hardcoded-asset-name: Line 155: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 13 | Low | Quality Warning | hardcoded-asset-name: Line 194: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 14 | Low | Quality Warning | hardcoded-asset-name: Line 233: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 15 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 69: Complex expression (lambdas, LINQ, n... | Review and address | 10 |

### GenerateBirthdayMessage.xaml (23 items, ~325 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 16 | High | Workflow Stub | Entire workflow `GenerateBirthdayMessage.xaml` replaced with Studio-openable ... | Fix XML structure in GenerateBirthdayMessage.xaml — ensure proper nesting and... | 15 |
| 17 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 18 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 19 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 20 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 21 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 22 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 23 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 24 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 25 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 26 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 27 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 28 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 29 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 30 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 31 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 32 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 33 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 34 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 35 | Low | Quality Warning | hardcoded-retry-count: Line 126: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 36 | Low | Quality Warning | hardcoded-retry-interval: Line 81: retry interval hardcoded as "{&quot;type&q... | Review and address | 10 |
| 37 | Low | Quality Warning | hardcoded-retry-interval: Line 126: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 38 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 311: Complex expression (lambdas, LINQ, ... | Review and address | 10 |

### InitAllSettings.xaml (31 items, ~315 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 39 | High | Workflow Stub | Entire workflow `InitAllSettings.xaml` replaced with Studio-openable stub | Fix XML structure in InitAllSettings.xaml — ensure proper nesting and closing... | 15 |
| 40 | Low | Quality Warning | hardcoded-asset-name: Line 102: asset name "BGV20_GoogleOAuth_Credential" is ... | Review and address | 10 |
| 41 | Low | Quality Warning | hardcoded-asset-name: Line 107: asset name "BGV20_GoogleCalendar_Name" is har... | Review and address | 10 |
| 42 | Low | Quality Warning | hardcoded-asset-name: Line 116: asset name "BGV20_Gmail_FromConnectionName" i... | Review and address | 10 |
| 43 | Low | Quality Warning | hardcoded-asset-name: Line 125: asset name "BGV20_RunTimeZone" is hardcoded —... | Review and address | 10 |
| 44 | Low | Quality Warning | hardcoded-asset-name: Line 134: asset name "BGV20_EmailSubjectTemplate" is ha... | Review and address | 10 |
| 45 | Low | Quality Warning | hardcoded-asset-name: Line 143: asset name "BGV20_EmailPreferenceLabels" is h... | Review and address | 10 |
| 46 | Low | Quality Warning | hardcoded-asset-name: Line 152: asset name "BGV20_SkipIfAmbiguousContactMatch... | Review and address | 10 |
| 47 | Low | Quality Warning | hardcoded-asset-name: Line 161: asset name "BGV20_QueueItemDeferMinutes_OnRat... | Review and address | 10 |
| 48 | Low | Quality Warning | hardcoded-asset-name: Line 170: asset name "BGV20_LogMaskEmails" is hardcoded... | Review and address | 10 |
| 49 | Low | Quality Warning | hardcoded-asset-name: Line 179: asset name "BGV20_GenAI_Temperature" is hardc... | Review and address | 10 |
| 50 | Low | Quality Warning | hardcoded-asset-name: Line 188: asset name "BGV20_GenAI_MaxChars" is hardcode... | Review and address | 10 |
| 51 | Low | Quality Warning | hardcoded-asset-name: Line 197: asset name "BGV20_MaxBirthdaysPerRun" is hard... | Review and address | 10 |
| 52 | Low | Quality Warning | hardcoded-asset-name: Line 206: asset name "BGV20_BusinessSLA_SendByLocalTime... | Review and address | 10 |
| 53 | Low | Quality Warning | hardcoded-asset-name: Line 215: asset name "BGV20_OrchestratorFolderName" is ... | Review and address | 10 |
| 54 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Settings" for uexcel:ExcelReadRang... | Review and address | 10 |
| 55 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Constants" for uexcel:ExcelReadRan... | Review and address | 10 |
| 56 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleOAuth_Credential" for ... | Review and address | 10 |
| 57 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleCalendar_Name" for ui:... | Review and address | 10 |
| 58 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_Gmail_FromConnectionName" fo... | Review and address | 10 |
| 59 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_RunTimeZone" for ui:GetAsset... | Review and address | 10 |
| 60 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailSubjectTemplate" for ui... | Review and address | 10 |
| 61 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailPreferenceLabels" for u... | Review and address | 10 |
| 62 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_SkipIfAmbiguousContactMatch"... | Review and address | 10 |
| 63 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_QueueItemDeferMinutes_OnRate... | Review and address | 10 |
| 64 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_LogMaskEmails" for ui:GetAss... | Review and address | 10 |
| 65 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_Temperature" for ui:Ge... | Review and address | 10 |
| 66 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_MaxChars" for ui:GetAs... | Review and address | 10 |
| 67 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_MaxBirthdaysPerRun" for ui:G... | Review and address | 10 |
| 68 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_BusinessSLA_SendByLocalTime"... | Review and address | 10 |
| 69 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_OrchestratorFolderName" for ... | Review and address | 10 |

### InitPerformer.xaml (9 items, ~100 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 70 | High | Workflow Stub | Entire workflow `InitPerformer.xaml` replaced with Studio-openable stub | Fix XML structure in InitPerformer.xaml — ensure proper nesting and closing tags | 15 |
| 71 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in InitPerformer.xaml — estimated 15 min | 15 |
| 72 | Low | Quality Warning | hardcoded-asset-name: Line 135: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 73 | Low | Quality Warning | hardcoded-asset-name: Line 240: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 74 | Low | Quality Warning | hardcoded-asset-name: Line 358: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 75 | Low | Quality Warning | hardcoded-asset-name: Line 463: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 76 | Low | Quality Warning | hardcoded-asset-name: Line 568: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 77 | Low | Quality Warning | hardcoded-asset-name: Line 673: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 78 | Low | Quality Warning | hardcoded-asset-name: Line 782: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |

### KillAllProcesses.xaml (4 items, ~45 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 79 | High | Workflow Stub | Entire workflow `KillAllProcesses.xaml` replaced with Studio-openable stub | Fix XML structure in KillAllProcesses.xaml — ensure proper nesting and closin... | 15 |
| 80 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "chrome" for ui:KillProcess.Process... | Review and address | 10 |
| 81 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "iexplore" for ui:KillProcess.Proce... | Review and address | 10 |
| 82 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "EXCEL" for ui:KillProcess.ProcessN... | Review and address | 10 |

### ParseContactEmailAddress.xaml (16 items, ~230 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 83 | High | Workflow Stub | Entire workflow `ParseContactEmailAddress.xaml` replaced with Studio-openable... | Fix XML structure in ParseContactEmailAddress.xaml — ensure proper nesting an... | 15 |
| 84 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 85 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 86 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 87 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 88 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 89 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 90 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 91 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 92 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 93 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 94 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 95 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 96 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min | 15 |
| 97 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 245: Complex expression (lambdas, LINQ, ... | Review and address | 10 |
| 98 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 315: Unbalanced parentheses: 2 open vs 3 close — remo... | Review and address | 10 |

### ProcessTransaction.xaml (26 items, ~365 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 99 | High | Workflow Stub | Entire workflow `ProcessTransaction.xaml` replaced with Studio-openable stub | Fix XML structure in ProcessTransaction.xaml — ensure proper nesting and clos... | 15 |
| 100 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 101 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 102 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 103 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 104 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 105 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 106 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 107 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 108 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 109 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 110 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 111 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 112 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 113 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 114 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 115 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 116 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 117 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 118 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 119 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 120 | Low | Quality Warning | invalid-activity-property: Line 336: property "Arguments" is not a known prop... | Review and address | 10 |
| 121 | Low | Quality Warning | hardcoded-retry-count: Line 214: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 122 | Low | Quality Warning | hardcoded-retry-interval: Line 169: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 123 | Low | Quality Warning | hardcoded-retry-interval: Line 214: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 124 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 378: Complex expression (lambdas, LINQ, ... | Review and address | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 125 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 126 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 127 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {type:literal,value:InitPerformer.xaml}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 128 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### {type:literal,value:ParseContactEmailAddress.xaml}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 129 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### {type:literal,value:ProcessTransaction.xaml}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 130 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### AgentInvocation_Stub.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 131 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### Performer.xaml (7 items, ~75 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 132 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 133 | Low | Quality Warning | invalid-activity-property: Line 69: property "Arguments" is not a known prope... | Review and address | 10 |
| 134 | Low | Quality Warning | invalid-activity-property: Line 222: property "Timeout" is not a known proper... | Review and address | 10 |
| 135 | Low | Quality Warning | invalid-activity-property: Line 283: property "Arguments" is not a known prop... | Review and address | 10 |
| 136 | Low | Quality Warning | hardcoded-asset-name: Line 122: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 137 | Low | Quality Warning | hardcoded-asset-name: Line 161: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 138 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 277: Unbalanced parentheses: 1 open vs 2 close — remo... | Review and address | 10 |

### Process.xaml (20 items, ~230 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 139 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 140 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 141 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 142 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 143 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 144 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 145 | Low | Implementation Required | Contains 21 placeholder value(s) matching "\bTODO\b" [Developer Implementatio... | Implement in Studio | 10 |
| 146 | Low | Quality Warning | invalid-type-argument: Line 76: x:TypeArguments="UiPath.Persistence.Activitie... | Review and address | 10 |
| 147 | Low | Quality Warning | hardcoded-retry-count: Line 246: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 148 | Low | Quality Warning | hardcoded-retry-count: Line 424: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 149 | Low | Quality Warning | hardcoded-retry-count: Line 524: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 150 | Low | Quality Warning | hardcoded-retry-count: Line 570: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 151 | Low | Quality Warning | hardcoded-retry-interval: Line 246: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 152 | Low | Quality Warning | hardcoded-retry-interval: Line 424: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 153 | Low | Quality Warning | hardcoded-retry-interval: Line 524: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 154 | Low | Quality Warning | hardcoded-retry-interval: Line 570: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 155 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 156 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 157 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 158 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |

### orchestrator.xaml (10 items, ~100 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 159 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is r... | Review and address | 10 |
| 160 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_RunTimeZone}" is reference... | Review and address | 10 |
| 161 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_MaxBirthdaysPerRun}" is re... | Review and address | 10 |
| 162 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_LogMaskEmails}" is referen... | Review and address | 10 |
| 163 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_OrchestratorFolderName}" i... | Review and address | 10 |
| 164 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_Gmail_FromConnectionName}"... | Review and address | 10 |
| 165 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailSubjectTemplate}" is ... | Review and address | 10 |
| 166 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailPreferenceLabels}" is... | Review and address | 10 |
| 167 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_SkipIfAmbiguousContactMatc... | Review and address | 10 |
| 168 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_QueueItemDeferMinutes_OnRa... | Review and address | 10 |

## 4. Process Context (from Pipeline)

### Idea Description

Automate birthday greetings to friends and family

### PDD Summary

## 1. Executive Summary
The “birthday greetings V20” project automates the daily routine of checking a dedicated Google Calendar (“Birthdays”) at 8:00 AM and sending personalized birthday greetings from the user’s Gmail account. Today, the user manually reviews the calendar, looks up an email address in Google Contacts, writes a message in a warm, funny, sarcastic voice, and sends an email. Because the activity is manual, birthdays can occasionally be missed. The future-state design uses UiPath Orchestrator scheduling and queue-based processing to run fully autonomously in the background using unattended robots. The automation reads today’s birthday events from the “Birthdays” calendar, determines the correct recipient email from Google Contacts (preferring “Personal/Home” when multiple exist), generates a highly personal message in the user’s voice using UiPath’s native GenAI/Agents capabilities (without OpenAI), and sends exactly one email per person using the Gmail Integration Service connector configured as `ninemush@gmail.com`. If no email is found, the automation will take no action.

## 2. Process Scope
This PDD covers the end-to-end automated process for sending one birthday email per person whose birthday appears on the current day in the Google Calendar named “Birthdays.” The calendar entries contain the person’s full name (no relationship metadata is stored). Recipient email addresses are sourced from Google Contacts and are labeled as “home” or “personal” when present. The automation’s scope includes: daily scheduling, calendar event retrieval, transaction creation (one transaction per birthday person), contacts lookup, selection of the preferred email address when multiple are available, AI-based message generation in the user’s warm/funny/sarcastic voice using UiPath native capabilities, and sending via Gmail Integration Service using connection `ninemush@gmail.com`.

Out of scope for this iteration are: attaching or selecting photos (e.g., from Google...

### SDD Summary

## 1. Automation Architecture Overview

### 1.1 Chosen automation pattern and rationale
**Pattern:** **Queue-driven fan-out with Dispatcher/Performer** (REFramework-style transaction handling, modernized for integration activities).

**Why this pattern fits:**
- **One email per person** is naturally modeled as **one queue item per birthday person**.
- Provides **transaction-level traceability**, retries, and isolation of failures (one bad contact does not stop all greetings).
- Scales horizontally if multiple birthdays exist (11 unattended slots available).

### 1.2 Automation type selection (RPA vs Agent vs Hybrid)
**Automation type:** **Hybrid (Deterministic RPA + GenAI/Agent)**  
- Deterministic steps (schedule, calendar read, queue, contacts lookup, email send) are best as **unattended RPA** for reliability and auditability.
- Message drafting in a “warm, funny, sarcastic voice” benefits from **UiPath-native GenAI** (Agents / GenAI Activities) to generate natural language while staying on-platform and avoiding OpenAI/Azure OpenAI connectors.

**No Human-in-the-Loop**: The PDD explicitly requires fully autonomous execution and “if no email is found, don’t do anything.” Therefore:
- **Action Center is not in the critical path** and no approval/review tasks are created.
- Action Center will be used only for **optional operational escalation** (non-blocking) if platform operations request it; by default it’s disabled.

### 1.3 Platform services used and why
- **Orchestrator**: schedules 8:00 AM run, manages assets/config, queues, logging, alerts, package deployment.
- **Triggers**: time trigger at 08:00 daily; optional queue trigger for performer scale-out.
- **Queues**: enforces one transaction per birthday person; supports retries and reporting.
- **Integration Service**:
  - **Gmail connector** (connection **`ninemush@gmail.com`**, ID **0a0d5ee1-a1e8-477a-a943-58161e6f3272**) for sending emails.
  - **UiPath GenAI Activities connector** (connection **`prajwal.sha...

**Automation Type:** hybrid
**Rationale:** Calendar/contact retrieval and email sending are deterministic (RPA), but generating a “your voice” warm/funny/sarcastic message is best handled by an AI Agent/GenAI step with guardrails and fallback.
**Feasibility Complexity:** medium
**Effort Estimate:** 1-2 weeks

## 5. Business Process Overview

### Process Steps

| # | Step | Role | System | Type | Pain Point |
|---|------|------|--------|------|------------|
| 1 | 8am Daily Trigger | System | Orchestrator Triggers | start | — |
| 2 | Read Today’s Events from "Birthdays" Calendar | System | Google Calendar (UiPath activity) | task | — |
| 3 | Any Birthday Events Today? | System | Google Calendar (UiPath activity) | decision | — |
| 4 | Create Queue Items (1 per birthday person) | System | Orchestrator Queue | task | — |
| 5 | No Birthdays End | System | Orchestrator | end | — |
| 6 | Dequeue Birthday Person | System | Orchestrator Queue | task | — |
| 7 | Look Up Contact Record by Full Name | System | Google Contacts (UiPath activity) | task | — |
| 8 | Any Email Addresses Found? | System | Google Contacts (UiPath activity) | decision | — |
| 9 | Determine Recipient Email (prefer Personal/Home) | System | Google Contacts (UiPath activity) | task | — |
| 10 | Generate Birthday Message in My Voice | System | UiPath Agents / UiPath GenAI Activities (native) | agent-task | — |
| 11 | Message Meets Tone & Safety Rules? | System | UiPath Agents | agent-decision | — |
| 12 | Send Birthday Email | System | Gmail (Integration Service) - connection "ninemush@gmail.com" | task | — |
| 13 | Greeting Sent End | System | Orchestrator | end | — |
| 14 | Create Human Review Task (low confidence / unsafe content) | System | Action Center | task | — |
| 15 | Approved to Send? | You | Action Center | decision | — |
| 16 | Send Birthday Email (post-approval) | System | Gmail (Integration Service) - connection "ninemush@gmail.com" | task | — |
| 17 | Do Not Send End | System | Orchestrator | end | — |
| 18 | Skip (No Email Found) | System | Orchestrator | task | — |
| 19 | Done End | System | Orchestrator | end | — |

### Target Applications / Systems

The following applications were identified from the process map and must be accessible from the robot machine:

- Orchestrator Triggers
- Google Calendar (UiPath activity)
- Orchestrator Queue
- Orchestrator
- Google Contacts (UiPath activity)
- UiPath Agents / UiPath GenAI Activities (native)
- UiPath Agents
- Gmail (Integration Service) - connection "ninemush@gmail.com"
- Action Center

### User Roles Involved

- System
- You

### Decision Points (Process Map Topology)

**Any Birthday Events Today?**
  - [Yes] → Create Queue Items (1 per birthday person)
  - [No] → No Birthdays End

**Any Email Addresses Found?**
  - [Yes] → Determine Recipient Email (prefer Personal/Home)
  - [No] → Skip (No Email Found)

**Approved to Send?**
  - [Yes] → Send Birthday Email (post-approval)
  - [No] → Do Not Send End

## 6. Environment Setup

| Requirement | Value |
|---|---|
| Target Framework | Windows or Portable |
| Robot Type | Unattended |
| Modern Activities | No |
| Studio Version | 25.10.0 |
| Orchestrator Connection | Required |
| Machine Template | Standard |
| Action Center | Required |

### Machine Template

**Recommended:** Standard
Standard unattended machine template

### Orchestrator Folder Structure

Create a Modern Folder with unattended robot pool (2+ robots recommended for queue-based processing). Enable Auto-scaling if available.

### NuGet Dependencies

| # | Package |
|---|--------|
| 1 | `UiPath.System.Activities` |
| 2 | `UiPath.Excel.Activities` |
| 3 | `UiPath.UIAutomation.Activities` |
| 4 | `UiPath.WebAPI.Activities` |
| 5 | `UiPath.DataService.Activities` |
| 6 | `UiPath.Mail.Activities` |
| 7 | `UiPath.Persistence.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Google Calendar (UiPath activity)
- Orchestrator Queue
- Orchestrator
- Google Contacts (UiPath activity)
- UiPath Agents / UiPath GenAI Activities (native)
- UiPath Agents
- Gmail (Integration Service) - connection "ninemush@gmail.com"
- Action Center

## 7. Credential & Asset Inventory

**Total:** 2 activities (2 hardcoded, 0 variable-driven)

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | `Performer.xaml` | Create in Orchestrator before deployment |
| 2 | `{type:literal,value:BGV20_OrchestratorFolderName}` | Unknown | — | `Performer.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `Performer.xaml` | 131 | GetAsset | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | Yes |
| `Performer.xaml` | 170 | GetAsset | `{type:literal,value:BGV20_OrchestratorFolderName}` | Unknown | — | Yes |

> **Warning:** 2 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 0 aligned, 15 SDD-only, 5 XAML-only

> **Warning:** 15 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 5 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV20_GoogleCalendar_Name` | asset | **SDD Only** | type: Text, value: Birthdays, description: Target Google Calendar name to read birthday events from. | — | — |
| 2 | `BGV20_Gmail_FromConnectionName` | asset | **SDD Only** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used as the sender identity. | — | — |
| 3 | `BGV20_RunTimeZone` | asset | **SDD Only** | type: Text, value: America/New_York, description: Time zone used to compute 'today' for calendar queries and to align the 8:00 AM schedule. | — | — |
| 4 | `BGV20_EmailSubjectTemplate` | asset | **SDD Only** | type: Text, value: Happy Birthday, {FirstName}!, description: Email subject template. Workflow replaces tokens using contact/event-derived data. | — | — |
| 5 | `BGV20_EmailPreferenceLabels` | asset | **SDD Only** | type: Text, value: home,personal, description: Comma-separated preferred Google Contacts email labels (case-insensitive). | — | — |
| 6 | `BGV20_SkipIfAmbiguousContactMatch` | asset | **SDD Only** | type: Bool, value: true, description: If multiple Google Contacts match the same full name, skip sending to avoid wrong recipient. If false, use deterministic first exact match and log ambiguity. | — | — |
| 7 | `BGV20_QueueItemDeferMinutes_OnRateLimit` | asset | **SDD Only** | type: Integer, value: 15, description: If rate limits/transient connector errors occur, defer queue item by N minutes before retry. | — | — |
| 8 | `BGV20_LogMaskEmails` | asset | **SDD Only** | type: Bool, value: true, description: Mask recipient emails in logs to reduce PII exposure while preserving traceability. | — | — |
| 9 | `BGV20_GenAI_Temperature` | asset | **SDD Only** | type: Integer, value: 30, description: GenAI creativity control expressed as an integer percent (0-100). Workflow maps to model temperature (e.g., 0.30). | — | — |
| 10 | `BGV20_GenAI_MaxChars` | asset | **SDD Only** | type: Integer, value: 1200, description: Maximum characters for generated email body to keep messages concise and reduce quota risk. | — | — |
| 11 | `BGV20_MaxBirthdaysPerRun` | asset | **SDD Only** | type: Integer, value: 50, description: Safety cap to prevent runaway runs if the calendar query returns unexpected results. | — | — |
| 12 | `BGV20_BusinessSLA_SendByLocalTime` | asset | **SDD Only** | type: Text, value: 09:00, description: Operational SLA target: all greetings should be sent by this local time on the run day (best-effort; monitoring/alerts should key off this). | — | — |
| 13 | `BGV20_OrchestratorFolderName` | asset | **SDD Only** | type: Text, value: BirthdayGreetings, description: Target Orchestrator folder name where processes/queues/triggers are deployed (used for operator clarity). | — | — |
| 14 | `BGV20_GoogleOAuth_Credential` | credential | **SDD Only** | type: Credential, description: Reserved credential asset for Google OAuth/client secrets if a non-Integration-Service fallback is ever required (not used when Integration Service connections are healthy). | — | — |
| 15 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | asset | **XAML Only** | — | `Performer.xaml` | 131 |
| 16 | `{type:literal,value:BGV20_OrchestratorFolderName}` | asset | **XAML Only** | — | `Performer.xaml` | 170 |
| 17 | `BGV20_BirthdayGreetings_Transactions` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: One transaction per birthday person (from Google Calendar 'Birthdays') to enforce exactly one email per person, enable retries, and provide auditability. | — | — |
| 18 | `{&quot;type&quot;:&quot;variable&quot;,&quot;name&quot;:&quot;queueName&quot;}` | queue | **XAML Only** | — | `Performer.xaml` | 231 |
| 19 | `TODO: implement this expression` | queue | **XAML Only** | — | `Process.xaml` | 138 |
| 20 | `[in_QueueName]` | queue | **XAML Only** | — | `GetTransactionData.xaml` | 64 |

## 9. Queue Management

**Pattern:** Transactional (Dispatcher/Performer)

### Queues to Provision

| # | Queue Name | Activities | Unique Reference | Auto Retry | SLA | Action |
|---|-----------|------------|-----------------|------------|-----|--------|
| 1 | `{&quot;type&quot;:&quot;variable&quot;,&quot;name&quot;:&quot;queueName&quot;}` | GetTransactionItem | Recommended | Yes (3x) | — | Create in Orchestrator |
| 2 | `TODO: implement this expression` | AddQueueItem | Recommended | Yes (3x) | — | Create in Orchestrator |
| 3 | `[in_QueueName]` | GetTransactionItem | Recommended | Yes (3x) | — | Verify exists |

### SDD-Defined Queues (Not Yet in XAML)

| # | Queue Name | Unique Reference | Max Retries | SLA | Note |
|---|-----------|-----------------|-------------|-----|------|
| 1 | `BGV20_BirthdayGreetings_Transactions` | Yes | 2x | — | Defined in SDD but no matching XAML activity — verify implementation |

### Queue Activity Summary

| Capability | Present |
|---|---|
| Add Queue Item | Yes |
| Get Transaction Item | Yes |
| Set Transaction Status | Yes |

### Retry Policy

Transactional pattern detected — configure Auto Retry (recommended: 3 retries) in Orchestrator Queue settings

### SLA Guidance

Configure SLA in Orchestrator: set Maximum Execution Time per transaction item and monitor Queue SLA reports. Recommended: base SLA on observed P95 processing time + 20% buffer.

### Dead-Letter / Failed Items Handling

Items exceeding max retries are marked as Failed. Review failed items in Orchestrator Queues dashboard. Consider: (1) Create a separate cleanup/reprocessing workflow for DLQ items, (2) Set up email alerts for failed transaction counts exceeding threshold, (3) Log detailed failure context in SetTransactionStatus output for troubleshooting.

## 10. Exception Handling Coverage

**Coverage:** 11/16 high-risk activities inside TryCatch (69%)

### Files Without TryCatch

- `ParseContactEmailAddress.xaml`
- `GenerateBirthdayMessage.xaml`
- `Dispatcher.xaml`
- `InitPerformer.xaml`
- `ProcessTransaction.xaml`
- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `KillAllProcesses.xaml`
- `{type:literal,value:ParseContactEmailAddress.xaml}`
- `{type:literal,value:InitPerformer.xaml}`
- `{type:literal,value:ProcessTransaction.xaml}`
- `AgentInvocation_Stub.xaml`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `Process.xaml:138` | Create Queue Items (1 per birthday person) |
| 2 | `Process.xaml:515` | Send Birthday Email (post-approval) |
| 3 | `GetTransactionData.xaml:64` | Get Queue Item |
| 4 | `SetTransactionStatus.xaml:69` | Set Success |
| 5 | `SetTransactionStatus.xaml:91` | Set Failed |

> **Recommendation:** Wrap these activities in TryCatch blocks with appropriate exception types (BusinessRuleException for data errors, System.Exception for general failures).

## 11. Trigger Configuration

Based on the process analysis, the following trigger configuration is recommended:

| # | Trigger Type | Reason | Configuration |
|---|-------------|--------|---------------|
| 1 | **Schedule** | Defined in SDD orchestrator_artifacts: BGV20_08AM_Daily_Dispatcher | SDD-specified: BGV20_08AM_Daily_Dispatcher | Cron: 0 0 8 ? * * * | Daily 8:00 AM local-time dispatcher trigger: reads today's birthdays and enqueues one transaction per person. |
| 2 | **Queue** | Defined in SDD orchestrator_artifacts: BGV20_Queue_Consumer | SDD-specified: BGV20_Queue_Consumer | Queue: BGV20_BirthdayGreetings_Transactions | Queue trigger to process birthday-person transactions (lookup contact, generate message, send email). |

## 12. Upstream Quality Findings

The following quality warnings were produced by upstream pipeline stages (selector scoring, type validation, expression linting, etc.) and should be addressed during development:

| Code | Severity | Count | Sample Message |
|------|----------|-------|----------------|
| placeholder-value | warning | 8 | Contains 21 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] |
| undeclared-asset | warning | 10 | Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is referenced in XAML but not declared in orchestrator artifacts |
| invalid-activity-property | warning | 4 | Line 336: property "Arguments" is not a known property of ui:InvokeWorkflowFile |
| invalid-type-argument | warning | 1 | Line 76: x:TypeArguments="UiPath.Persistence.Activities.FormTask" may not be a valid .NET type |
| hardcoded-retry-count | warning | 6 | Line 126: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| hardcoded-retry-interval | warning | 9 | Line 81: retry interval hardcoded as "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:10&quot;}" — c... |
| hardcoded-asset-name | warning | 28 | Line 76: asset name "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}" is ... |
| COMPLEX_EXPRESSION_PASSTHROUGH | warning | 4 | Line 245: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption i... |
| EXPRESSION_SYNTAX | warning | 2 | Line 315: Unbalanced parentheses: 2 open vs 3 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imb... |
| BARE_TOKEN_QUOTED | warning | 19 | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quot... |
| RETRY_INTERVAL_DEFAULTED | warning | 4 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Assets | Provision asset: `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Yes |
| 5 | Assets | Provision asset: `{type:literal,value:BGV20_OrchestratorFolderName}` | Yes |
| 6 | Queues | Create queue: `{&quot;type&quot;:&quot;variable&quot;,&quot;name&quot;:&quot;queueName&quot;}` | Yes |
| 7 | Queues | Create queue: `TODO: implement this expression` | Yes |
| 8 | Queues | Create queue: `[in_QueueName]` | Yes |
| 9 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 10 | Testing | Run smoke test in target environment | Yes |
| 11 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 12 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 13 | Governance | Peer code review completed | Yes |
| 14 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 15 | Governance | Business process owner validation obtained | Yes |
| 16 | Governance | CoE approval obtained | Yes |
| 17 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Not Ready — 27/50 (21%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 6/10 | 2 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 4/10 | 69% coverage — consider wrapping remaining activities; 15 file(s) with no TryCatch blocks |
| Queue Management | 7/10 | 3 hardcoded queue name(s) — externalize to config |
| Build Quality | 0/10 | 95 quality warnings — significant remediation needed; 73 remediations — stub replacements need developer attention; 15/21 workflow(s) are Studio-loadable (6 blocked — 29% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 0 |
| Valid activities | 0 |
| Unknown → Comment stubs | 0 |
| Non-catalog properties stripped | 0 |
| Enum values auto-corrected | 0 |
| Missing required props filled | 0 |
| Total issues | 0 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 0 auto-fixed, 0 total issues |
| Post-emission (quality gate) | 168 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "GetTransactionData.xaml",
    "SetTransactionStatus.xaml",
    "CloseAllApplications.xaml",
    "{type:literal,value:ParseContactEmailAddress.xaml}",
    "{type:literal,value:InitPerformer.xaml}",
    "{type:literal,value:ProcessTransaction.xaml}",
    "AgentInvocation_Stub.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Process.xaml",
      "description": "Stripped 23 placeholder token(s) from Process.xaml",
      "developerAction": "Review Process.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "{type:literal,value:ParseContactEmailAddress.xaml}",
      "description": "Stripped 1 placeholder token(s) from {type:literal,value:ParseContactEmailAddress.xaml}",
      "developerAction": "Review {type:literal,value:ParseContactEmailAddress.xaml} for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "{type:literal,value:InitPerformer.xaml}",
      "description": "Stripped 1 placeholder token(s) from {type:literal,value:InitPerformer.xaml}",
      "developerAction": "Review {type:literal,value:InitPerformer.xaml} for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "{type:literal,value:ProcessTransaction.xaml}",
      "description": "Stripped 1 placeholder token(s) from {type:literal,value:ProcessTransaction.xaml}",
      "developerAction": "Review {type:literal,value:ProcessTransaction.xaml} for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "AgentInvocation_Stub.xaml",
      "description": "Stripped 1 placeholder token(s) from AgentInvocation_Stub.xaml",
      "developerAction": "Review AgentInvocation_Stub.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved uweb:DeserializeJson.JsonString from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved uweb:DeserializeJson.JsonObject from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved ForEach.Values from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseContactEmailAddress.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "ParseContactEmailAddress.xaml",
      "description": "Catalog (fallback): Moved MultipleAssign.Assignments from attribute to child-element in ParseContactEmailAddress.xaml"
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 67: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 125: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 264: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 312: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 339: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 68: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 330: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 364: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "InitPerformer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in InitPerformer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 61: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 219: Activity \"GmailGetMessages\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GmailGetMessages\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 255: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 181: Undeclared variable \"address\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 233: Undeclared variable \"label\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 241: Undeclared variable \"address\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 241: Undeclared variable \"label\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 261: Undeclared variable \"address\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 261: Undeclared variable \"label\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 293: Undeclared variable \"address\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 320: Undeclared variable \"address\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ParseContactEmailAddress.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"robot\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"automation\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"ai\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"generated\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"artificial\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"intelligence\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"openai\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"chatgpt\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"by\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"language\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"model\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 75: Undeclared variable \"RecipientName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 75: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 75: Undeclared variable \"DateLocal\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 75: Undeclared variable \"Notes\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Undeclared variable \"yyyyMMdd_HHmmss\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Undeclared variable \"_\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Undeclared variable \"N\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 322: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 322: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 465: Undeclared variable \"Summary\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 507: Undeclared variable \"Id\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 67: Undeclared variable \"FullName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 106: Undeclared variable \"RunDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 106: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 106: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 110: Undeclared variable \"EventId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 118: Undeclared variable \"BGV20_EmailPreferenceLabels\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 118: Undeclared variable \"home\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 118: Undeclared variable \"personal\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 122: Undeclared variable \"BGV20_SkipIfAmbiguousContactMatch\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 126: Undeclared variable \"BGV20_LogMaskEmails\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 130: Undeclared variable \"BGV20_Gmail_FromConnectionName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 134: Undeclared variable \"BGV20_EmailSubjectTemplate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 134: Undeclared variable \"Happy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 134: Undeclared variable \"Birthday\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 134: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 138: Undeclared variable \"BGV20_GenAI_MaxChars\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 142: Undeclared variable \"BGV20_GenAI_Temperature\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 277: Undeclared variable \"UnknownRef_\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 132: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 132: Undeclared variable \"Yes\" in expression: Yes — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 231: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 231: Undeclared variable \"Yes\" in expression: Yes — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 509: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 509: Undeclared variable \"Yes\" in expression: Yes — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in InitAllSettings.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "KillAllProcesses.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in KillAllProcesses.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "ParseContactEmailAddress.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in ParseContactEmailAddress.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in GenerateBirthdayMessage.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "InitPerformer.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in InitPerformer.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in ProcessTransaction.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Process.xaml",
      "detail": "Contains 21 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{type:literal,value:ParseContactEmailAddress.xaml}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{type:literal,value:InitPerformer.xaml}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{type:literal,value:ProcessTransaction.xaml}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "AgentInvocation_Stub.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_GoogleCalendar_Name}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_RunTimeZone}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_MaxBirthdaysPerRun}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_LogMaskEmails}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_OrchestratorFolderName}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_Gmail_FromConnectionName}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_EmailSubjectTemplate}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_EmailPreferenceLabels}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_SkipIfAmbiguousContactMatch}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 336: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 69: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 222: property \"Timeout\" is not a known property of ui:GetTransactionItem",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 283: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "Process.xaml",
      "detail": "Line 76: x:TypeArguments=\"UiPath.Persistence.Activities.FormTask\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 126: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 81: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:10&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 126: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 332: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:30&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 76: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 116: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 155: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_MaxBirthdaysPerRun&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 194: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_LogMaskEmails&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 233: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_OrchestratorFolderName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 135: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 240: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_Gmail_FromConnectionName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 358: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 463: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailSubjectTemplate&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 568: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailPreferenceLabels&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 673: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_SkipIfAmbiguousContactMatch&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitPerformer.xaml",
      "detail": "Line 782: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 214: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 169: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:10&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 214: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 122: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 161: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_OrchestratorFolderName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 246: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 424: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 524: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 570: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 246: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 424: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 524: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 570: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 102: asset name \"BGV20_GoogleOAuth_Credential\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 107: asset name \"BGV20_GoogleCalendar_Name\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 116: asset name \"BGV20_Gmail_FromConnectionName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 125: asset name \"BGV20_RunTimeZone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 134: asset name \"BGV20_EmailSubjectTemplate\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 143: asset name \"BGV20_EmailPreferenceLabels\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 152: asset name \"BGV20_SkipIfAmbiguousContactMatch\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 161: asset name \"BGV20_QueueItemDeferMinutes_OnRateLimit\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 170: asset name \"BGV20_LogMaskEmails\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 179: asset name \"BGV20_GenAI_Temperature\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 188: asset name \"BGV20_GenAI_MaxChars\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 197: asset name \"BGV20_MaxBirthdaysPerRun\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 206: asset name \"BGV20_BusinessSLA_SendByLocalTime\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 215: asset name \"BGV20_OrchestratorFolderName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "ParseContactEmailAddress.xaml",
      "detail": "Line 245: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(InPrefere...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "ParseContactEmailAddress.xaml",
      "detail": "Line 315: Unbalanced parentheses: 2 open vs 3 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imbalance near position 206, fragment: \"c).Last(), \\                )&quot;}\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(OutSelect...",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 311: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(rawGenera...",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "Dispatcher.xaml",
      "detail": "Line 69: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;\\&quot;BGV20...",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 378: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(logMaskEm...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Performer.xaml",
      "detail": "Line 277: Unbalanced parentheses: 1 open vs 2 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imbalance near position 234, fragment: \"amp; totalProcessed.ToString())&quot;}\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(transacti...",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"Settings\" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"Constants\" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_GoogleOAuth_Credential\" for ui:GetCredential.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_GoogleCalendar_Name\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_Gmail_FromConnectionName\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_RunTimeZone\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_EmailSubjectTemplate\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_EmailPreferenceLabels\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_SkipIfAmbiguousContactMatch\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_QueueItemDeferMinutes_OnRateLimit\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_LogMaskEmails\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_GenAI_Temperature\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_GenAI_MaxChars\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_MaxBirthdaysPerRun\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_BusinessSLA_SendByLocalTime\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BGV20_OrchestratorFolderName\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "KillAllProcesses.xaml",
      "detail": "Auto-quoted bare token \"chrome\" for ui:KillProcess.ProcessName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "KillAllProcesses.xaml",
      "detail": "Auto-quoted bare token \"iexplore\" for ui:KillProcess.ProcessName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "KillAllProcesses.xaml",
      "detail": "Auto-quoted bare token \"EXCEL\" for ui:KillProcess.ProcessName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Process.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Process.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Process.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Process.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 1095,
  "studioCompatibility": [
    {
      "file": "ParseContactEmailAddress.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "GenerateBirthdayMessage.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Dispatcher.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "InitPerformer.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "ProcessTransaction.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Performer.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Process.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 132: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 231: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 509: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes"
      ]
    },
    {
      "file": "InitAllSettings.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Main.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "GetTransactionData.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "SetTransactionStatus.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "CloseAllApplications.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "KillAllProcesses.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Init.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{type:literal,value:ParseContactEmailAddress.xaml}",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{type:literal,value:InitPerformer.xaml}",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{type:literal,value:ProcessTransaction.xaml}",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "AgentInvocation_Stub.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ParseContactEmailAddress.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitPerformer.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    }
  ],
  "emissionGateViolations": {
    "totalViolations": 25,
    "stubbed": 0,
    "corrected": 25,
    "blocked": 0,
    "degraded": 0,
    "details": [
      {
        "file": "Process.xaml",
        "line": 93,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 135,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 135,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 135,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 135,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 234,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 234,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 234,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 375,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "Process.xaml",
        "line": 234,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "{type:literal,value:ParseContactEmailAddress.xaml}",
        "line": 57,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "{type:literal,value:InitPerformer.xaml}",
        "line": 57,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "{type:literal,value:ProcessTransaction.xaml}",
        "line": 57,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
      {
        "file": "AgentInvocation_Stub.xaml",
        "line": 57,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      }
    ]
  },
  "preEmissionValidation": {
    "totalActivities": 0,
    "validActivities": 0,
    "unknownActivities": 0,
    "strippedProperties": 0,
    "enumCorrections": 0,
    "missingRequiredFilled": 0,
    "commentConversions": 0,
    "issueCount": 0
  }
}
```
