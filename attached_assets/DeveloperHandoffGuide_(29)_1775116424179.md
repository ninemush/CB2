# Developer Handoff Guide

**Project:** BirthdayGreetingsV20
**Generated:** 2026-04-02
**Generation Mode:** Baseline Openable (minimal, deterministic)
**Deployment Readiness:** Not Ready (19%)

**17 workflows: 8 fully generated, 0 with handoff blocks, 8 workflow-level stubs, 1 Studio-blocked**
**Total Estimated Effort: ~1335 minutes (22.3 hours)**
**Remediations:** 89 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 7 workflow)
**Auto-Repairs:** 8
**Quality Warnings:** 89

---

### Per-Workflow Preservation Summary

| # | Workflow | Tier | Business Steps (SDD) | Preserved | Degraded (Handoff) | Manual | Bind Points |
|---|----------|------|-------------|-----------|-------------------|--------|-------------|
| 1 | `Dispatcher.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 2 | `ContactResolver.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 3 | `MessageGenerator.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 4 | `EmailSender.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 5 | `TransactionPersistence.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 6 | `Performer.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 7 | `Process.xaml` | Stub | 1 | 1 | 0 | 0 | 0 |
| 8 | `InitAllSettings.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 9 | `Main.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 10 | `GetTransactionData.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 11 | `SetTransactionStatus.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 12 | `CloseAllApplications.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 13 | `KillAllProcesses.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 14 | `Init.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 15 | `{type:literal,value:TransactionPersistence.xaml}.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 16 | `AgentInvocation_Stub.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 17 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |

## 1. Generated Logic (ready to use)

Generated XAML that is Studio-openable and does not contain handoff blocks or workflow-level stubs. May include auto-resolved property remediations or placeholders for fine-tuning.

The following 8 workflow(s) were fully generated and are ready to use:

| # | Workflow | Status | Studio Compatibility |
|---|----------|--------|---------------------|
| 1 | `TransactionPersistence.xaml` | Generated with Remediations | Studio-openable |
| 2 | `Main.xaml` | Fully Generated | Openable with warnings |
| 3 | `GetTransactionData.xaml` | Fully Generated | Studio-openable |
| 4 | `SetTransactionStatus.xaml` | Fully Generated | Studio-openable |
| 5 | `CloseAllApplications.xaml` | Fully Generated | Studio-openable |
| 6 | `Init.xaml` | Fully Generated | Openable with warnings |
| 7 | `{type:literal,value:TransactionPersistence.xaml}.xaml` | Generated with Placeholders | Openable with warnings |
| 8 | `AgentInvocation_Stub.xaml` | Generated with Placeholders | Openable with warnings |

### AI-Resolved with Smart Defaults (8)

The following issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes Saved |
|---|------|------|-------------|-------------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Process.xaml` | Stripped 23 placeholder token(s) from Process.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `{type:literal,value:TransactionPersistence.xaml}` | Stripped 1 placeholder token(s) from {type:literal,value:TransactionPersistence.xaml} | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `AgentInvocation_Stub.xaml` | Stripped 1 placeholder token(s) from AgentInvocation_Stub.xaml | 5 |
| 4 | `REPAIR_GENERIC` | `Dispatcher.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml | undefined |
| 5 | `REPAIR_GENERIC` | `Dispatcher.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml | undefined |
| 6 | `REPAIR_GENERIC` | `Dispatcher.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml | undefined |
| 7 | `REPAIR_GENERIC` | `Dispatcher.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml | undefined |
| 8 | `REPAIR_GENERIC` | `Dispatcher.xaml` | Catalog (fallback): Moved ForEach.Values from attribute to child-element in Dispatcher.xaml | undefined |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Dispatcher.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 2 | `ContactResolver.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 3 | `MessageGenerator.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 4 | `EmailSender.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 5 | `TransactionPersistence.xaml` | Studio-openable | — | — |
| 6 | `Performer.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots... |
| 7 | `Process.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 135: Standalone word "Yes" may be an undec...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 234: Standalone word "Yes" may be an undec...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 512: Standalone word "Yes" may be an undec... |
| 8 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 9 | `Main.xaml` | Openable with warnings | Unclassified | — |
| 10 | `GetTransactionData.xaml` | Studio-openable | — | — |
| 11 | `SetTransactionStatus.xaml` | Studio-openable | — | — |
| 12 | `CloseAllApplications.xaml` | Studio-openable | — | — |
| 13 | `KillAllProcesses.xaml` | Studio-openable | — | — |
| 14 | `Init.xaml` | Openable with warnings | Unclassified | — |
| 15 | `{type:literal,value:TransactionPersistence.xaml}` | Openable with warnings | Unclassified | — |
| 16 | `AgentInvocation_Stub.xaml` | Openable with warnings | Unclassified | — |
| 17 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}` | Openable with warnings | Unclassified | — |

**Summary:** 6 Studio-loadable, 5 with warnings, 6 not Studio-loadable

> **⚠ 6 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- [EXPRESSION_IN_LITERAL_SLOT] Line 57: Variable Default="&amp;quot;screenshots/error_&amp;quot; &amp;amp; DateTime.Now.ToString(&amp;quot;yyyyMMdd_HHmmss&amp;quot;) &amp;amp; &amp;quot;.png&amp;quot;" contains a VB expression that is not bracket-wrapped — Studio will treat it as a literal string, not an expression: 5 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 135: Standalone word "Yes" may be an undeclared variable — should it be a string literal "Yes"? in expression: Yes; [EXPRESSION_SYNTAX_UNFIXABLE] Line 234: Standalone word "Yes" may be an undeclared variable — should it be a string literal "Yes"? in expression: Yes: 1 workflow(s)

## 2. Handoff Blocks (business logic preserved, implementation required)

Blocks where business logic is preserved as documentation but implementation requires manual Studio work. Each entry includes the workflow file, block type, business description from the SDD (when available), expected inputs/outputs, and the developer action required.

No handoff blocks — all logic was fully generated.

## 3. Manual Work Remaining

Consolidated developer TODO list organized by workflow, with estimated effort per item.

**178 items remaining — ~2225 minutes (37.1 hours) total estimated effort**

### ContactResolver.xaml (13 items, ~185 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 1 | High | Workflow Stub | Entire workflow `ContactResolver.xaml` replaced with Studio-openable stub | Fix XML structure in ContactResolver.xaml — ensure proper nesting and closing... | 15 |
| 2 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 3 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 4 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 5 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 6 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 7 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 8 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 9 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 10 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 11 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ContactResolver.xaml — estimated 15 min | 15 |
| 12 | Low | Quality Warning | hardcoded-retry-interval: Line 70: retry interval hardcoded as "{&quot;type&q... | Review and address | 10 |
| 13 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 64: Complex expression (lambdas, LINQ, n... | Review and address | 10 |

### Dispatcher.xaml (20 items, ~275 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 14 | High | Workflow Stub | Entire workflow `Dispatcher.xaml` replaced with Studio-openable stub | Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags | 15 |
| 15 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 16 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 17 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 18 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 19 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 20 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 21 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 22 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 23 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 24 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 25 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 26 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 27 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 28 | Low | Validation Finding | Quality gate finding: `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Dispatcher.xaml — move attribute to child... | 15 |
| 29 | Low | Quality Warning | hardcoded-retry-interval: Line 285: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 30 | Low | Quality Warning | hardcoded-asset-name: Line 73: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 31 | Low | Quality Warning | hardcoded-asset-name: Line 112: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 32 | Low | Quality Warning | hardcoded-asset-name: Line 151: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 33 | Low | Quality Warning | hardcoded-asset-name: Line 190: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |

### EmailSender.xaml (13 items, ~180 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 34 | High | Workflow Stub | Entire workflow `EmailSender.xaml` replaced with Studio-openable stub | Fix XML structure in EmailSender.xaml — ensure proper nesting and closing tags | 15 |
| 35 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 36 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 37 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 38 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 39 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 40 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 41 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 42 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 43 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 44 | Low | Quality Warning | invalid-activity-property: Line 258: property "Condition" is not a known prop... | Review and address | 10 |
| 45 | Low | Quality Warning | hardcoded-retry-interval: Line 86: retry interval hardcoded as "{&quot;type&q... | Review and address | 10 |
| 46 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 76: Unbalanced parentheses: 2 open vs 3 close — remov... | Review and address | 10 |

### InitAllSettings.xaml (31 items, ~315 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 47 | High | Workflow Stub | Entire workflow `InitAllSettings.xaml` replaced with Studio-openable stub | Fix XML structure in InitAllSettings.xaml — ensure proper nesting and closing... | 15 |
| 48 | Low | Quality Warning | hardcoded-asset-name: Line 102: asset name "BGV20_GoogleOAuth_Credential" is ... | Review and address | 10 |
| 49 | Low | Quality Warning | hardcoded-asset-name: Line 107: asset name "BGV20_GoogleCalendar_Name" is har... | Review and address | 10 |
| 50 | Low | Quality Warning | hardcoded-asset-name: Line 116: asset name "BGV20_Gmail_FromConnectionName" i... | Review and address | 10 |
| 51 | Low | Quality Warning | hardcoded-asset-name: Line 125: asset name "BGV20_RunTimeZone" is hardcoded —... | Review and address | 10 |
| 52 | Low | Quality Warning | hardcoded-asset-name: Line 134: asset name "BGV20_EmailSubjectTemplate" is ha... | Review and address | 10 |
| 53 | Low | Quality Warning | hardcoded-asset-name: Line 143: asset name "BGV20_EmailPreferenceLabels" is h... | Review and address | 10 |
| 54 | Low | Quality Warning | hardcoded-asset-name: Line 152: asset name "BGV20_SkipIfAmbiguousContactMatch... | Review and address | 10 |
| 55 | Low | Quality Warning | hardcoded-asset-name: Line 161: asset name "BGV20_QueueItemDeferMinutes_OnRat... | Review and address | 10 |
| 56 | Low | Quality Warning | hardcoded-asset-name: Line 170: asset name "BGV20_LogMaskEmails" is hardcoded... | Review and address | 10 |
| 57 | Low | Quality Warning | hardcoded-asset-name: Line 179: asset name "BGV20_GenAI_Temperature" is hardc... | Review and address | 10 |
| 58 | Low | Quality Warning | hardcoded-asset-name: Line 188: asset name "BGV20_GenAI_MaxChars" is hardcode... | Review and address | 10 |
| 59 | Low | Quality Warning | hardcoded-asset-name: Line 197: asset name "BGV20_MaxBirthdaysPerRun" is hard... | Review and address | 10 |
| 60 | Low | Quality Warning | hardcoded-asset-name: Line 206: asset name "BGV20_BusinessSLA_SendByLocalTime... | Review and address | 10 |
| 61 | Low | Quality Warning | hardcoded-asset-name: Line 215: asset name "BGV20_OrchestratorFolderName" is ... | Review and address | 10 |
| 62 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Settings" for uexcel:ExcelReadRang... | Review and address | 10 |
| 63 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Constants" for uexcel:ExcelReadRan... | Review and address | 10 |
| 64 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleOAuth_Credential" for ... | Review and address | 10 |
| 65 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleCalendar_Name" for ui:... | Review and address | 10 |
| 66 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_Gmail_FromConnectionName" fo... | Review and address | 10 |
| 67 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_RunTimeZone" for ui:GetAsset... | Review and address | 10 |
| 68 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailSubjectTemplate" for ui... | Review and address | 10 |
| 69 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailPreferenceLabels" for u... | Review and address | 10 |
| 70 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_SkipIfAmbiguousContactMatch"... | Review and address | 10 |
| 71 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_QueueItemDeferMinutes_OnRate... | Review and address | 10 |
| 72 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_LogMaskEmails" for ui:GetAss... | Review and address | 10 |
| 73 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_Temperature" for ui:Ge... | Review and address | 10 |
| 74 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_MaxChars" for ui:GetAs... | Review and address | 10 |
| 75 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_MaxBirthdaysPerRun" for ui:G... | Review and address | 10 |
| 76 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_BusinessSLA_SendByLocalTime"... | Review and address | 10 |
| 77 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_OrchestratorFolderName" for ... | Review and address | 10 |

### KillAllProcesses.xaml (4 items, ~45 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 78 | High | Workflow Stub | Entire workflow `KillAllProcesses.xaml` replaced with Studio-openable stub | Fix XML structure in KillAllProcesses.xaml — ensure proper nesting and closin... | 15 |
| 79 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "chrome" for ui:KillProcess.Process... | Review and address | 10 |
| 80 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "iexplore" for ui:KillProcess.Proce... | Review and address | 10 |
| 81 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "EXCEL" for ui:KillProcess.ProcessN... | Review and address | 10 |

### MessageGenerator.xaml (20 items, ~290 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 82 | High | Workflow Stub | Entire workflow `MessageGenerator.xaml` replaced with Studio-openable stub | Fix XML structure in MessageGenerator.xaml — ensure proper nesting and closin... | 15 |
| 83 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 84 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 85 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 86 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 87 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 88 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 89 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 90 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 91 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 92 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 93 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 94 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 95 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 96 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 97 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 98 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 99 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 100 | Low | Quality Warning | hardcoded-retry-interval: Line 104: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 101 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 250: Complex expression (lambdas, LINQ, ... | Review and address | 10 |

### Performer.xaml (17 items, ~185 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 102 | High | Workflow Stub | Entire workflow `Performer.xaml` replaced with Studio-openable stub | Fix XML structure in Performer.xaml — ensure proper nesting and closing tags | 15 |
| 103 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 104 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 105 | Low | Quality Warning | invalid-activity-property: Line 577: property "in_Mode" is not a known proper... | Review and address | 10 |
| 106 | Low | Quality Warning | invalid-activity-property: Line 577: property "in_RunDate" is not a known pro... | Review and address | 10 |
| 107 | Low | Quality Warning | invalid-activity-property: Line 577: property "in_FullName" is not a known pr... | Review and address | 10 |
| 108 | Low | Quality Warning | invalid-activity-property: Line 577: property "in_QueueItemId" is not a known... | Review and address | 10 |
| 109 | Low | Quality Warning | invalid-activity-property: Line 577: property "out_IsDuplicate" is not a know... | Review and address | 10 |
| 110 | Low | Quality Warning | hardcoded-asset-name: Line 65: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 111 | Low | Quality Warning | hardcoded-asset-name: Line 104: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 112 | Low | Quality Warning | hardcoded-asset-name: Line 143: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 113 | Low | Quality Warning | hardcoded-asset-name: Line 182: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 114 | Low | Quality Warning | hardcoded-asset-name: Line 221: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 115 | Low | Quality Warning | hardcoded-asset-name: Line 260: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 116 | Low | Quality Warning | hardcoded-asset-name: Line 299: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 117 | Low | Quality Warning | hardcoded-asset-name: Line 338: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 118 | Low | Quality Warning | hardcoded-asset-name: Line 377: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 119 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {type:literal,value:TransactionPersistence.xaml}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 120 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### AgentInvocation_Stub.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 121 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### Process.xaml (20 items, ~230 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 122 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 123 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 124 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 125 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 126 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 127 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 128 | Low | Implementation Required | Contains 21 placeholder value(s) matching "\bTODO\b" [Developer Implementatio... | Implement in Studio | 10 |
| 129 | Low | Quality Warning | invalid-type-argument: Line 76: x:TypeArguments="UiPath.Persistence.Activitie... | Review and address | 10 |
| 130 | Low | Quality Warning | hardcoded-retry-count: Line 246: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 131 | Low | Quality Warning | hardcoded-retry-count: Line 424: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 132 | Low | Quality Warning | hardcoded-retry-count: Line 524: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 133 | Low | Quality Warning | hardcoded-retry-count: Line 570: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 134 | Low | Quality Warning | hardcoded-retry-interval: Line 246: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 135 | Low | Quality Warning | hardcoded-retry-interval: Line 424: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 136 | Low | Quality Warning | hardcoded-retry-interval: Line 524: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 137 | Low | Quality Warning | hardcoded-retry-interval: Line 570: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 138 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 139 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 140 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 141 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |

### TransactionPersistence.xaml (25 items, ~370 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 142 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 143 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 144 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 145 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 146 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 147 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 148 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 149 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 150 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 151 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 152 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 153 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 154 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 155 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 156 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 157 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 158 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 159 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 160 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 161 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 162 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 163 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 164 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 165 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in TransactionPersistence.xaml — estimated 15 min | 15 |
| 166 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 74: Unbalanced parentheses: 2 open vs 3 close — remov... | Review and address | 10 |

### orchestrator.xaml (12 items, ~120 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 167 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is r... | Review and address | 10 |
| 168 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_RunTimeZone}" is reference... | Review and address | 10 |
| 169 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_MaxBirthdaysPerRun}" is re... | Review and address | 10 |
| 170 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_OrchestratorFolderName}" i... | Review and address | 10 |
| 171 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailSubjectTemplate}" is ... | Review and address | 10 |
| 172 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailPreferenceLabels}" is... | Review and address | 10 |
| 173 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_Gmail_FromConnectionName}"... | Review and address | 10 |
| 174 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_SkipIfAmbiguousContactMatc... | Review and address | 10 |
| 175 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_LogMaskEmails}" is referen... | Review and address | 10 |
| 176 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_QueueItemDeferMinutes_OnRa... | Review and address | 10 |
| 177 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_Temperature}" is ref... | Review and address | 10 |
| 178 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_MaxChars}" is refere... | Review and address | 10 |

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
| Data Service | Required |

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
| 8 | `UiPath.Database.Activities` |

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

No GetCredential/GetAsset/SetCredential/SetAsset activities detected.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 0 aligned, 15 SDD-only, 2 XAML-only

> **Warning:** 15 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 2 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

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
| 15 | `BGV20_BirthdayGreetings_Transactions` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: One transaction per birthday person (from Google Calendar 'Birthdays') to enforce exactly one email per person, enable retries, and provide auditability. | — | — |
| 16 | `TODO: implement this expression` | queue | **XAML Only** | — | `Process.xaml` | 138 |
| 17 | `[in_QueueName]` | queue | **XAML Only** | — | `GetTransactionData.xaml` | 64 |

## 9. Queue Management

**Pattern:** Transactional (Dispatcher/Performer)

### Queues to Provision

| # | Queue Name | Activities | Unique Reference | Auto Retry | SLA | Action |
|---|-----------|------------|-----------------|------------|-----|--------|
| 1 | `TODO: implement this expression` | AddQueueItem | Recommended | Yes (3x) | — | Create in Orchestrator |
| 2 | `[in_QueueName]` | GetTransactionItem | Recommended | Yes (3x) | — | Verify exists |

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

**Coverage:** 6/11 high-risk activities inside TryCatch (55%)

### Files Without TryCatch

- `Dispatcher.xaml`
- `ContactResolver.xaml`
- `MessageGenerator.xaml`
- `EmailSender.xaml`
- `Performer.xaml`
- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `KillAllProcesses.xaml`
- `{type:literal,value:TransactionPersistence.xaml}`
- `AgentInvocation_Stub.xaml`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}`

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
| placeholder-value | warning | 4 | Contains 21 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] |
| undeclared-asset | warning | 12 | Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is referenced in XAML but not declared in orchestrator artifacts |
| invalid-activity-property | warning | 6 | Line 258: property "Condition" is not a known property of ui:ShouldRetry |
| invalid-type-argument | warning | 1 | Line 76: x:TypeArguments="UiPath.Persistence.Activities.FormTask" may not be a valid .NET type |
| hardcoded-retry-interval | warning | 8 | Line 285: retry interval hardcoded as "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:30&quot;}" — ... |
| hardcoded-asset-name | warning | 27 | Line 73: asset name "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}" is ... |
| hardcoded-retry-count | warning | 4 | Line 246: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| COMPLEX_EXPRESSION_PASSTHROUGH | warning | 2 | Line 64: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in... |
| EXPRESSION_SYNTAX | warning | 2 | Line 76: Unbalanced parentheses: 2 open vs 3 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imba... |
| BARE_TOKEN_QUOTED | warning | 19 | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quot... |
| RETRY_INTERVAL_DEFAULTED | warning | 4 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Queues | Create queue: `TODO: implement this expression` | Yes |
| 5 | Queues | Create queue: `[in_QueueName]` | Yes |
| 6 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 7 | Testing | Run smoke test in target environment | Yes |
| 8 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 9 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 10 | Governance | Peer code review completed | Yes |
| 11 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 12 | Governance | Business process owner validation obtained | Yes |
| 13 | Governance | CoE approval obtained | Yes |
| 14 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Not Ready — 30/50 (19%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 8/10 | No credential/asset activities found despite Orchestrator usage |
| Exception Handling | 4/10 | 55% coverage — consider wrapping remaining activities; 11 file(s) with no TryCatch blocks |
| Queue Management | 8/10 | 2 hardcoded queue name(s) — externalize to config |
| Build Quality | 0/10 | 89 quality warnings — significant remediation needed; 89 remediations — stub replacements need developer attention; 11/17 workflow(s) are Studio-loadable (6 blocked — 35% not loadable) |
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
| Post-emission (quality gate) | 178 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "GetTransactionData.xaml",
    "SetTransactionStatus.xaml",
    "CloseAllApplications.xaml",
    "{type:literal,value:TransactionPersistence.xaml}",
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
      "file": "{type:literal,value:TransactionPersistence.xaml}",
      "description": "Stripped 1 placeholder token(s) from {type:literal,value:TransactionPersistence.xaml}",
      "developerAction": "Review {type:literal,value:TransactionPersistence.xaml} for Comment elements marking where placeholder activities were removed",
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
      "file": "Dispatcher.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "Dispatcher.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "Dispatcher.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "Dispatcher.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "Dispatcher.xaml",
      "description": "Catalog (fallback): Moved ForEach.Values from attribute to child-element in Dispatcher.xaml"
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 331: Activity \"GoogleSheetsApplicationScope\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GoogleSheetsApplicationScope\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 61: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 121: Activity \"GmailGetMessages\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GmailGetMessages\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 175: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 202: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 264: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 266: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 279: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 292: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 317: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 330: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 194: Activity \"GmailSendMessage\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GmailSendMessage\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 419: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 479: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 66: Undeclared variable \"N\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 279: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 279: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 381: Undeclared variable \"Summary\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 484: Undeclared variable \"__\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 484: Undeclared variable \"_\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"FullName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"RunDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"RunId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"CalendarName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"EnqueuedAtUtc\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 488: Undeclared variable \"o\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"ChatGPT\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"OpenAI\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"robot\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"automation\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"script\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"html\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 94: Undeclared variable \"RecipientName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 94: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 94: Undeclared variable \"DateLocal\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 94: Undeclared variable \"none\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 210: Undeclared variable \"choices\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 210: Undeclared variable \"message\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 210: Undeclared variable \"content\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 299: Undeclared variable \"Prohibited\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 299: Undeclared variable \"content\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 299: Undeclared variable \"marker\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 299: Undeclared variable \"detected\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 80: Undeclared variable \"unknown\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 80: Undeclared variable \"domain\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"unauthorized\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"invalid_grant\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"token\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"expired\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"credentials\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 238: Undeclared variable \"authentication\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 66: Undeclared variable \"PreSend\" in expression: {&quot;type&quot;:&quot;expression&quot;,&quot;left&quot;:&q... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 70: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 70: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 74: Undeclared variable \"none\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 92: Undeclared variable \"RunDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 92: Undeclared variable \"eq\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 92: Undeclared variable \"Outcome\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 92: Undeclared variable \"Sent\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 227: Undeclared variable \"o\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"TransactionId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"RunDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"FullName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"CalendarEventId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"SelectedEmailLabel\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"SelectedEmailAddress\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"GenerationModel\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"EmailSubject\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"EmailSent\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"SentAt\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"Outcome\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"ErrorType\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"ErrorMessage\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "TransactionPersistence.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 351: Undeclared variable \"RunId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in TransactionPersistence.xaml — estimated 15 min",
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
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Dispatcher.xaml — move attribute to child-element or vice versa per UiPath catalog",
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
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in ContactResolver.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in MessageGenerator.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in EmailSender.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "Performer.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in Performer.xaml — ensure proper nesting and closing tags",
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
      "file": "{type:literal,value:TransactionPersistence.xaml}",
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
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}",
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
      "detail": "Asset \"{type:literal,value:BGV20_OrchestratorFolderName}\" is referenced in XAML but not declared in orchestrator artifacts",
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
      "detail": "Asset \"{type:literal,value:BGV20_Gmail_FromConnectionName}\" is referenced in XAML but not declared in orchestrator artifacts",
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
      "detail": "Asset \"{type:literal,value:BGV20_LogMaskEmails}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_GenAI_Temperature}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_GenAI_MaxChars}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "EmailSender.xaml",
      "detail": "Line 258: property \"Condition\" is not a known property of ui:ShouldRetry",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 577: property \"in_Mode\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 577: property \"in_RunDate\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 577: property \"in_FullName\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 577: property \"in_QueueItemId\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 577: property \"out_IsDuplicate\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "Process.xaml",
      "detail": "Line 76: x:TypeArguments=\"UiPath.Persistence.Activities.FormTask\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 285: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:30&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 73: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 112: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 151: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_MaxBirthdaysPerRun&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 190: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_OrchestratorFolderName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ContactResolver.xaml",
      "detail": "Line 70: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "MessageGenerator.xaml",
      "detail": "Line 104: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:15&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EmailSender.xaml",
      "detail": "Line 86: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:10&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 65: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailSubjectTemplate&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 104: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailPreferenceLabels&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 143: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 182: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_Gmail_FromConnectionName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 221: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_SkipIfAmbiguousContactMatch&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 260: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_LogMaskEmails&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 299: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 338: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_Temperature&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 377: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_MaxChars&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
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
      "file": "ContactResolver.xaml",
      "detail": "Line 64: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;InPreference...",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "MessageGenerator.xaml",
      "detail": "Line 250: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(rawGenera...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "EmailSender.xaml",
      "detail": "Line 76: Unbalanced parentheses: 2 open vs 3 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imbalance near position 227, fragment: \"c)(1), InRecipientEmail)&quot;}\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(InMaskEma...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "TransactionPersistence.xaml",
      "detail": "Line 74: Unbalanced parentheses: 2 open vs 3 close — removed 1 extra closing paren(s) | max nesting depth: 2, first imbalance near position 251, fragment: \")) &amp; \\                    )&quot;}\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;If(String.Is...",
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
  "totalEstimatedEffortMinutes": 1335,
  "studioCompatibility": [
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
      "file": "ContactResolver.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "MessageGenerator.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "EmailSender.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "TransactionPersistence.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Performer.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
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
      "file": "{type:literal,value:TransactionPersistence.xaml}",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "AgentInvocation_Stub.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;TransactionPersistence.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    }
  ],
  "emissionGateViolations": {
    "totalViolations": 23,
    "stubbed": 0,
    "corrected": 23,
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
        "file": "{type:literal,value:TransactionPersistence.xaml}",
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
