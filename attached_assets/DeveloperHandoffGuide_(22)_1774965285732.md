# Developer Handoff Guide

**Project:** BirthdayGreetingsV12
**Generated:** 2026-03-31
**Generation Mode:** Full Implementation
**Deployment Readiness:** Not Ready (34%)

**Total Estimated Effort: ~760 minutes (12.7 hours)**
**Remediations:** 54 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 2 workflow)
**Auto-Repairs:** 12
**Quality Warnings:** 97

---

## 1. Completed Work

The following 6 workflow(s) were fully generated without any stub replacements or remediation:

- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `SetTransactionStatus.xaml`
- `CloseAllApplications.xaml`
- `KillAllProcesses.xaml`
- `AgentInvocation_Stub.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Dispatcher.xaml` | Fully Generated |
| 2 | `ProcessBirthdayEvent.xaml` | Fully Generated |
| 3 | `GenerateBirthdayMessage.xaml` | Fully Generated |
| 4 | `Finalize.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 327: String.Format() expects 2-10 argument(s) but got 11 in expression: String.Format("[Finalize] RUN COMPLETE — RunId={0} Status={1} EventsFound={2} Se... |
| 5 | `BirthdayGreetingsV12_Main.xaml` | Fully Generated |
| 6 | `Process.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 89: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No; [EXPRESSION_SYNTAX_UNFIXABLE] Line 108: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No |
| 7 | `InitAllSettings.xaml` | Fully Generated |
| 8 | `Main.xaml` | Fully Generated |
| 9 | `GetTransactionData.xaml` | Fully Generated |
| 10 | `SetTransactionStatus.xaml` | Fully Generated |
| 11 | `CloseAllApplications.xaml` | Fully Generated |
| 12 | `KillAllProcesses.xaml` | Fully Generated |
| 13 | `AgentInvocation_Stub.xaml` | Fully Generated |
| 14 | `Performer.xaml` | Structurally invalid (not Studio-loadable) |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Dispatcher.xaml` | Openable with warnings | Unclassified | — |
| 2 | `ProcessBirthdayEvent.xaml` | Openable with warnings | Unclassified | — |
| 3 | `GenerateBirthdayMessage.xaml` | Openable with warnings | Unclassified | — |
| 4 | `Finalize.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 327: String.Format() expects 2-10 argument... |
| 5 | `BirthdayGreetingsV12_Main.xaml` | Studio-openable | — | — |
| 6 | `Process.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 89: Standalone word "No" may be an undecla...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 108: Standalone word "No" may be an undecl...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 213: Standalone word "Yes" may be an undec... |
| 7 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 8 | `Main.xaml` | Studio-openable | — | — |
| 9 | `GetTransactionData.xaml` | Studio-openable | — | — |
| 10 | `SetTransactionStatus.xaml` | Studio-openable | — | — |
| 11 | `CloseAllApplications.xaml` | Studio-openable | — | — |
| 12 | `KillAllProcesses.xaml` | Studio-openable | — | — |
| 13 | `AgentInvocation_Stub.xaml` | Openable with warnings | Unclassified | — |
| 14 | `Performer.xaml` | Openable with warnings | Unclassified | — |

**Summary:** 7 Studio-loadable, 5 with warnings, 2 not Studio-loadable

> **⚠ 2 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 327: String.Format() expects 2-10 argument(s) but got 11 in expression: String.Format("[Finalize] RUN COMPLETE — RunId={0} Status={1} EventsFound={2} Se...: 1 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 89: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No; [EXPRESSION_SYNTAX_UNFIXABLE] Line 108: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No: 1 workflow(s)

## 2. AI-Resolved with Smart Defaults

The following 12 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `Dispatcher.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml | undefined |
| 2 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelApplicationScope.WorkbookPath from attribute to child-element in InitA... | undefined |
| 3 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings... | undefined |
| 4 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings... | undefined |
| 5 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 6 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Username from attribute to child-element in InitAllSettings.xaml | undefined |
| 7 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Password from attribute to child-element in InitAllSettings.xaml | undefined |
| 8 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 9 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `GetTransactionData.xaml` | Catalog: Moved ui:GetTransactionItem.TransactionItem from attribute to child-element in GetTransa... | undefined |
| 10 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "str_SummaryJson" type from x:String to UiPath.DataService.DataServiceEntity to ... | undefined |
| 11 | `REPAIR_TYPE_MISMATCH` | `Finalize.xaml` | No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the varia... | undefined |
| 12 | `REPAIR_TYPE_MISMATCH` | `Finalize.xaml` | No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the varia... | undefined |

## 3. Manual Action Required

### Validation Issues — Requires Manual Attention (52)

The following issues were detected by the quality gate and require developer review. No automated remediation was applied — workflows are preserved as-generated.

| # | File | Check | Developer Action | Est. Minutes |
|---|------|-------|-----------------|-------------|
| 1 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 2 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 3 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 4 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 5 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 6 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 7 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 8 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 9 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 10 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 11 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 12 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 13 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 14 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 15 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 16 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 17 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 18 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 19 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 20 | `ProcessBirthdayEvent.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min | 15 |
| 21 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 22 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 23 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 24 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 25 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 26 | `GenerateBirthdayMessage.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 27 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 28 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 29 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 30 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 31 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 32 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 33 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 34 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 35 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 36 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 37 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 38 | `BirthdayGreetingsV12_Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in BirthdayGreetingsV12_Main.xaml — estimated 15 min | 15 |
| 39 | `BirthdayGreetingsV12_Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in BirthdayGreetingsV12_Main.xaml — estimated 15 min | 15 |
| 40 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 41 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 42 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 43 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 44 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 45 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 46 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 47 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 48 | `Dispatcher.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Dispatcher.xaml — use valid enum from UiPath d... | 5 |
| 49 | `ProcessBirthdayEvent.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in ProcessBirthdayEvent.xaml — use valid enum fro... | 5 |
| 50 | `GenerateBirthdayMessage.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in GenerateBirthdayMessage.xaml — use valid enum ... | 5 |
| 51 | `Finalize.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Finalize.xaml — use valid enum from UiPath doc... | 5 |
| 52 | `Finalize.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Finalize.xaml — use valid enum from UiPath doc... | 5 |

### Workflow-Level Stubs (2)

Entire workflows were replaced with Studio-openable stubs (XAML was not parseable for structural preservation).

| # | File | Code | Developer Action | Est. Minutes |
|---|------|------|-----------------|-------------|
| 1 | `Main.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement Entry point. Loads Orchestrator assets into config dictionary... | 15 |
| 2 | `Performer.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement REFramework-style performer entry point. Fetches queue items ... | 15 |

### Transitive Dependency Issues (3)

Activities reference packages or types that are not declared in project.json. These may cause runtime failures.

| # | File | Check | Detail | Est. Minutes |
|---|------|-------|--------|-------------|
| 1 | `ProcessBirthdayEvent.xaml` | transitive-dependency-missing | Activity requires package "UiPath.Web.Activities" but it is not declared in project.json dependen... | 10 |
| 2 | `GenerateBirthdayMessage.xaml` | transitive-dependency-missing | Activity requires package "UiPath.GenAI.Activities" but it is not declared in project.json depend... | 10 |
| 3 | `GenerateBirthdayMessage.xaml` | transitive-dependency-missing | Activity requires package "UiPath.Web.Activities" but it is not declared in project.json dependen... | 10 |

### Developer Implementation Required (11)

These placeholders represent intentional handoff points where developer implementation is expected.

| # | File | Detail | Est. Minutes |
|---|------|--------|-------------|
| 1 | `Dispatcher.xaml` | Contains 5 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 2 | `Dispatcher.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 3 | `ProcessBirthdayEvent.xaml` | Contains 5 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 4 | `ProcessBirthdayEvent.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 5 | `GenerateBirthdayMessage.xaml` | Contains 4 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 6 | `GenerateBirthdayMessage.xaml` | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 7 | `Finalize.xaml` | Contains 6 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 8 | `Finalize.xaml` | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 9 | `Process.xaml` | Contains 12 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 10 | `AgentInvocation_Stub.xaml` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 11 | `Performer.xaml` | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |

### Quality Warnings (83)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `Dispatcher.xaml` | hardcoded-retry-count | Line 178: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 2 | `Dispatcher.xaml` | hardcoded-retry-count | Line 186: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 3 | `Dispatcher.xaml` | hardcoded-retry-count | Line 191: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 4 | `Dispatcher.xaml` | hardcoded-retry-count | Line 357: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 5 | `Dispatcher.xaml` | hardcoded-retry-count | Line 365: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 6 | `Dispatcher.xaml` | hardcoded-retry-count | Line 370: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 7 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 178: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 8 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 186: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 9 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 191: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 10 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 357: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 11 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 365: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 12 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 370: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 13 | `Dispatcher.xaml` | hardcoded-queue-name | Line 375: queue name "BirthdayGreetingsV12_EmailsToSend" is hardcoded — consider using a Config.x... | — | undefined |
| 14 | `ProcessBirthdayEvent.xaml` | hardcoded-retry-count | Line 188: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 15 | `ProcessBirthdayEvent.xaml` | hardcoded-retry-interval | Line 188: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 16 | `Finalize.xaml` | hardcoded-retry-count | Line 151: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 17 | `Finalize.xaml` | hardcoded-retry-count | Line 159: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 18 | `Finalize.xaml` | hardcoded-retry-count | Line 164: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 19 | `Finalize.xaml` | hardcoded-retry-count | Line 274: retry count hardcoded as 2 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 20 | `Finalize.xaml` | hardcoded-retry-count | Line 282: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 21 | `Finalize.xaml` | hardcoded-retry-count | Line 287: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 22 | `Finalize.xaml` | hardcoded-retry-interval | Line 151: retry interval hardcoded as "00:00:10" — consider externalizing to Config.xlsx | — | undefined |
| 23 | `Finalize.xaml` | hardcoded-retry-interval | Line 159: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 24 | `Finalize.xaml` | hardcoded-retry-interval | Line 164: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 25 | `Finalize.xaml` | hardcoded-retry-interval | Line 274: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 26 | `Finalize.xaml` | hardcoded-retry-interval | Line 282: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 27 | `Finalize.xaml` | hardcoded-retry-interval | Line 287: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 28 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 117: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 29 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 159: asset name "&quot;BGV12.Timezone&quot;" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 30 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 201: asset name "&quot;BGV12.FromGmailConnectionName&quot;" is hardcoded — consider using a ... | — | undefined |
| 31 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 243: asset name "&quot;BGV12.MaxConnectorRetries&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 32 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 285: asset name "&quot;BGV12.RetryBackoffSeconds&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 33 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 327: asset name "&quot;BGV12.SkipOnAmbiguousContactMatch&quot;" is hardcoded — consider usin... | — | undefined |
| 34 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 369: asset name "&quot;BGV12.PreferredEmailLabels&quot;" is hardcoded — consider using a Con... | — | undefined |
| 35 | `BirthdayGreetingsV12_Main.xaml` | hardcoded-asset-name | Line 411: asset name "&quot;BGV12.SendEnabled&quot;" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 36 | `Process.xaml` | hardcoded-retry-count | Line 117: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 37 | `Process.xaml` | hardcoded-retry-count | Line 163: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 38 | `Process.xaml` | hardcoded-retry-count | Line 222: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 39 | `Process.xaml` | hardcoded-retry-count | Line 268: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 40 | `Process.xaml` | hardcoded-retry-count | Line 376: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 41 | `Process.xaml` | hardcoded-retry-interval | Line 117: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 42 | `Process.xaml` | hardcoded-retry-interval | Line 163: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 43 | `Process.xaml` | hardcoded-retry-interval | Line 222: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 44 | `Process.xaml` | hardcoded-retry-interval | Line 268: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 45 | `Process.xaml` | hardcoded-retry-interval | Line 376: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 46 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 118: asset name "BGV12.GoogleWorkspaceCredential" is hardcoded — consider using a Config.xls... | — | undefined |
| 47 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 130: asset name "BGV12.CalendarName" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 48 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 139: asset name "BGV12.Timezone" is hardcoded — consider using a Config.xlsx entry or workfl... | — | undefined |
| 49 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 148: asset name "BGV12.FromGmailConnectionName" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 50 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 157: asset name "BGV12.MaxConnectorRetries" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 51 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 166: asset name "BGV12.RetryBackoffSeconds" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 52 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 175: asset name "BGV12.SkipOnAmbiguousContactMatch" is hardcoded — consider using a Config.x... | — | undefined |
| 53 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 184: asset name "BGV12.PreferredEmailLabels" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 54 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 193: asset name "BGV12.SendEnabled" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 55 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 202: asset name "BGV12.OperationsDL" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 56 | `Finalize.xaml` | TYPE_MISMATCH | Line 169: Auto-repaired — changed variable "str_SummaryJson" type from x:String to UiPath.DataSer... | — | undefined |
| 57 | `Finalize.xaml` | TYPE_MISMATCH | Line 222: Type mismatch — variable "str_SummaryJson" (UiPath.DataService.DataServiceEntity) bound... | — | undefined |
| 58 | `Finalize.xaml` | TYPE_MISMATCH | Line 296: Type mismatch — variable "str_SummaryJson" (UiPath.DataService.DataServiceEntity) bound... | — | undefined |
| 59 | `Dispatcher.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 60 | `ProcessBirthdayEvent.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 61 | `ProcessBirthdayEvent.xaml` | CATALOG_VIOLATION | Missing required property "JsonString" on uweb:DeserializeJson | — | undefined |
| 62 | `ProcessBirthdayEvent.xaml` | CATALOG_VIOLATION | Missing required property "Result" on uweb:DeserializeJson | — | undefined |
| 63 | `GenerateBirthdayMessage.xaml` | CATALOG_VIOLATION | Missing required property "Prompt" on ugenai:UseGenAI | — | undefined |
| 64 | `GenerateBirthdayMessage.xaml` | CATALOG_VIOLATION | Missing required property "JsonString" on uweb:DeserializeJson | — | undefined |
| 65 | `GenerateBirthdayMessage.xaml` | CATALOG_VIOLATION | Missing required property "Result" on uweb:DeserializeJson | — | undefined |
| 66 | `Finalize.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 67 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 68 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 69 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 70 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 71 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 72 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 73 | `ProcessBirthdayEvent.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 74 | `Finalize.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 75 | `Finalize.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 76 | `Finalize.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 77 | `Finalize.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 78 | `Finalize.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 79 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 80 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 81 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 82 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 83 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |

**Total manual remediation effort: ~760 minutes (12.7 hours)**

## 4. Process Context (from Pipeline)

### Idea Description

Automate birthday greetings to friends and family

### PDD Summary

## 1. Executive Summary
The “birthday greetings v12” automation will send birthday greeting emails every day at 8:00 AM Dubai time on your behalf. The birthdays are maintained in a dedicated Google Calendar named “Birthdays”, where each event contains the person’s full name. The automation will retrieve today’s birthday events from that calendar, look up each person in Google Contacts, select the preferred email address (Personal/Home; in practice the SME confirmed one email per person), generate a warm, funny, sarcastic message in your voice using UiPath’s native GenAI capabilities, and send the email from the Gmail account connected in Integration Service as **ninemush@gmail.com**. The solution is designed for fully unattended, autonomous execution using UiPath Orchestrator triggers and Integration Service connectors (no Google Drive, no Slack/Teams/Twilio, and no external OpenAI usage).

## 2. Process Scope
This PDD covers a single daily process: sending birthday greetings by email for people whose birthdays fall “today” in the Dubai timezone. The scope begins with a scheduled 8:00 AM trigger and ends when all greetings for that day have been sent or skipped according to rules.

In scope are: reading events from the Google Calendar “Birthdays”; extracting the full name from the event; searching Google Contacts/People for the corresponding contact; selecting the appropriate email address label (Personal/Home preferred; SME confirmed one email per person); generating the email text in your voice (warm, funny, sarcastic) using UiPath GenAI Activities; and sending the email via Gmail from **ninemush@gmail.com**.

Out of scope for this iteration are: using Google Photos or any photos in messages, any “relationship” personalization sourced from the calendar (relationship is not stored), any notifications via Slack/Teams/Twilio, any use of Google Drive, and any use of external OpenAI/Azure OpenAI connectors.

## 3. As-Is Process Description

![As-Is Process Map](/api/id...

### SDD Summary

## 1. Automation Architecture Overview

### 1.1 Chosen automation approach and rationale
**[AUTOMATION_TYPE: HYBRID]**

- **RPA (deterministic integration + orchestration):** Reading Google Calendar events, looking up Google Contacts, and sending email are deterministic API operations. These are best implemented as an unattended Orchestrator process using **Integration Service connectors** (more reliable and supportable than UI automation; avoids custom HTTP per requirement).
- **GenAI (content generation):** The “warm, funny, sarcastic in my voice” message is non-deterministic content creation and is best handled via **UiPath GenAI Activities** (native, approved; explicitly not using OpenAI/Azure OpenAI).
- **No human-in-the-loop:** SME rule is “if no email is found, don’t do anything,” and “no forgot scenario when there are no birthdays.” Therefore **Action Center / Maestro user tasks are not on the critical path**. We still design for operability and future extensibility (e.g., optional approval later).

### 1.2 High-level architecture (platform services used)
- **Orchestrator**
  - Hosts the package and process **BirthdayGreetingsV12** (unique name; avoids conflicts with V3/V6/V8/V3GenAI already deployed).
  - Runs unattended jobs on the available **11 unattended slots**.
  - Central logging, retries, alerting hooks, and job history/audit trail.
- **Triggers**
  - **Time-based schedule**: daily 08:00 **Asia/Dubai**.
- **Integration Service**
  - **Google Calendar connector**: read events from calendar named **“Birthdays”** for “today” in Dubai timezone.
  - **Google Contacts/People connector**: look up by full name; retrieve email addresses and labels; select **Personal/Home preferred**.
  - **Gmail connector**: send email via connection **ninemush@gmail.com**.
- **UiPath GenAI Activities**
  - Generate subject/body in “your voice” with constraints/guardrails.
- **Data Service**
  - Persist run-level and per-recipient outcomes (sent/skipped/errors) for auditabil...

**Automation Type:** hybrid
**Rationale:** The Calendar/Contacts/Gmail interactions are structured and best handled via Integration Service (RPA-style), while drafting “in your voice” is generative and judgment-based, best handled by a GenAI/Agent component.
**Feasibility Complexity:** medium
**Effort Estimate:** 3-5 days

## 5. Business Process Overview

### Process Steps

| # | Step | Role | System | Type | Pain Point |
|---|------|------|--------|------|------------|
| 1 | 8:00 AM Dubai Time Trigger | System | Orchestrator Triggers | start | — |
| 2 | Get Today’s Birthday Events (Birthdays calendar) | System | Integration Service - Google Calendar | task | — |
| 3 | Any Birthdays Today? | System | Orchestrator | decision | — |
| 4 | End — No Birthdays to Send | System | Orchestrator | end | — |
| 5 | Process Each Birthday Event | System | Orchestrator | task | — |
| 6 | Lookup Contact by Full Name | System | Integration Service - Google Contacts/People | task | — |
| 7 | Email Available? | System | Integration Service - Google Contacts/People | decision | — |
| 8 | Skip Person (No Email Found) | System | Orchestrator | task | — |
| 9 | Select Preferred Email (Personal/Home) | System | Integration Service - Google Contacts/People | task | — |
| 10 | Multiple Emails Present? | System | Orchestrator | decision | — |
| 11 | Choose Personal Email | System | Integration Service - Google Contacts/People | task | — |
| 12 | Use Only Available Email | System | Integration Service - Google Contacts/People | task | — |
| 13 | Generate Birthday Message in Your Voice (warm/funny/sarcastic) | System | UiPath GenAI Activities | agent-task | — |
| 14 | Send Birthday Email from ninemush@gmail.com | System | Integration Service - Gmail (ninemush@gmail.com) | task | — |
| 15 | More Events Remaining? | System | Orchestrator | decision | — |
| 16 | End — All Birthday Emails Sent | System | Orchestrator | end | — |
| 17 | Continue Loop | System | Orchestrator | task | — |
| 18 | Loop Back to Next Event | System | Orchestrator | task | — |

### Target Applications / Systems

The following applications were identified from the process map and must be accessible from the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts/People
- UiPath GenAI Activities
- Integration Service - Gmail (ninemush@gmail.com)

### User Roles Involved

- System

### Decision Points (Process Map Topology)

**Any Birthdays Today?**
  - [No] → End — No Birthdays to Send
  - [Yes] → Process Each Birthday Event

**Email Available?**
  - [No] → Skip Person (No Email Found)
  - [Yes] → Select Preferred Email (Personal/Home)

**Multiple Emails Present?**
  - [Yes] → Choose Personal Email
  - [No] → Use Only Available Email

**More Events Remaining?**
  - [No] → End — All Birthday Emails Sent
  - [Yes] → Continue Loop

## 6. Environment Setup

| Requirement | Value |
|---|---|
| Target Framework | Windows (required) |
| Robot Type | Unattended |
| Modern Activities | No |
| Studio Version | 25.10.0 |
| Orchestrator Connection | Required |
| Machine Template | Standard |
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
| 4 | `UiPath.DataService.Activities` |
| 5 | `UiPath.IntegrationService.Activities` |
| 6 | `UiPath.WebAPI.Activities` |
| 7 | `Newtonsoft.Json` |
| 8 | `UiPath.ComplexScenarios.Activities` |
| 9 | `UiPath.Mail.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts/People
- UiPath GenAI Activities
- Integration Service - Gmail (ninemush@gmail.com)

## 7. Credential & Asset Inventory

**Total:** 37 activities (18 hardcoded, 19 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BGV12.GoogleWorkspaceCredential` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `BGV12.CalendarName` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 2 | `BGV12.Timezone` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 3 | `BGV12.FromGmailConnectionName` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 4 | `BGV12.MaxConnectorRetries` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 5 | `BGV12.RetryBackoffSeconds` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 7 | `BGV12.PreferredEmailLabels` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 8 | `BGV12.SendEnabled` | Unknown | — | `BirthdayGreetingsV12_Main.xaml` | Create in Orchestrator before deployment |
| 9 | `BGV12.OperationsDL` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `BirthdayGreetingsV12_Main.xaml` | 117 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 118 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 159 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 160 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 201 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 202 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 243 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 244 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 285 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 286 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 327 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 328 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 369 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 370 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12_Main.xaml` | 411 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `BirthdayGreetingsV12_Main.xaml` | 412 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 121 | GetCredential | `BGV12.GoogleWorkspaceCredential` | Credential | — | Yes |
| `InitAllSettings.xaml` | 122 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 125 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 133 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 134 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 142 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 143 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 151 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 152 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 160 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 161 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 169 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 170 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 178 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 179 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 187 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 188 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 196 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 197 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 205 | GetAsset | `BGV12.OperationsDL` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 206 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 18 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 10 aligned, 1 SDD-only, 2 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 2 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV12.CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name containing birthday events. | `BirthdayGreetingsV12_Main.xaml` | 117 |
| 2 | `BGV12.Timezone` | asset | **Aligned** | type: Text, value: Asia/Dubai, description: Authoritative timezone for 'today' evaluation and schedule alignment. | `BirthdayGreetingsV12_Main.xaml` | 159 |
| 3 | `BGV12.FromGmailConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used to send greetings. | `BirthdayGreetingsV12_Main.xaml` | 201 |
| 4 | `BGV12.MaxConnectorRetries` | asset | **Aligned** | type: Integer, value: 3, description: Max retries for transient Integration Service connector failures (Calendar/People/Gmail). | `BirthdayGreetingsV12_Main.xaml` | 243 |
| 5 | `BGV12.RetryBackoffSeconds` | asset | **Aligned** | type: Integer, value: 10, description: Backoff delay between transient retries. | `BirthdayGreetingsV12_Main.xaml` | 285 |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | asset | **Aligned** | type: Bool, value: true, description: If multiple contacts match the same name, skip to avoid mis-send; log as business exception. | `BirthdayGreetingsV12_Main.xaml` | 327 |
| 7 | `BGV12.PreferredEmailLabels` | asset | **Aligned** | type: Text, value: personal,home, description: Comma-separated preferred email labels (case-insensitive). | `BirthdayGreetingsV12_Main.xaml` | 369 |
| 8 | `BGV12.SendEnabled` | asset | **Aligned** | type: Bool, value: true, description: Master kill-switch for outbound email sending (when false, generate content but do not send). | `BirthdayGreetingsV12_Main.xaml` | 411 |
| 9 | `BGV12.OperationsDL` | asset | **Aligned** | type: Text, value: , description: Optional distribution list to receive failure notifications (left blank as PDD states no notifications). | `InitAllSettings.xaml` | 205 |
| 10 | `BGV12.GoogleWorkspaceCredential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for break-glass scenarios; primary auth is via Integration Service connections. | `InitAllSettings.xaml` | 121 |
| 11 | `BirthdayGreetingsV12_EmailsToSend` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Work queue for birthday greeting email dispatch items (one per birthday event/person). Supports retry and controlled execution telemetry. | — | — |
| 12 | `&quot;BirthdayGreetingsV12_EmailsToSend&quot;` | queue | **XAML Only** | — | `Dispatcher.xaml` | 377 |
| 13 | `[in_QueueName]` | queue | **XAML Only** | — | `GetTransactionData.xaml` | 63 |

## 9. Queue Management

**Pattern:** Transactional (Dispatcher/Performer)

### Queues to Provision

| # | Queue Name | Activities | Unique Reference | Auto Retry | SLA | Action |
|---|-----------|------------|-----------------|------------|-----|--------|
| 1 | `&quot;BirthdayGreetingsV12_EmailsToSend&quot;` | AddQueueItem | Recommended | Yes (3x) | — | Create in Orchestrator |
| 2 | `[in_QueueName]` | GetTransactionItem | Recommended | Yes (3x) | — | Verify exists |

### SDD-Defined Queues (Not Yet in XAML)

| # | Queue Name | Unique Reference | Max Retries | SLA | Note |
|---|-----------|-----------------|-------------|-----|------|
| 1 | `BirthdayGreetingsV12_EmailsToSend` | Yes | 2x | — | Defined in SDD but no matching XAML activity — verify implementation |

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

**Coverage:** 18/44 high-risk activities inside TryCatch (41%)

### Files Without TryCatch

- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `KillAllProcesses.xaml`
- `AgentInvocation_Stub.xaml`
- `Performer.xaml`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `Dispatcher.xaml:377` | Add queue item to BirthdayGreetingsV12_EmailsToSend with event metadata |
| 2 | `InitAllSettings.xaml:121` | Get BGV12.GoogleWorkspaceCredential |
| 3 | `InitAllSettings.xaml:122` | ui:GetCredential |
| 4 | `InitAllSettings.xaml:125` | ui:GetCredential |
| 5 | `InitAllSettings.xaml:133` | Get BGV12.CalendarName |
| 6 | `InitAllSettings.xaml:134` | ui:GetAsset |
| 7 | `InitAllSettings.xaml:142` | Get BGV12.Timezone |
| 8 | `InitAllSettings.xaml:143` | ui:GetAsset |
| 9 | `InitAllSettings.xaml:151` | Get BGV12.FromGmailConnectionName |
| 10 | `InitAllSettings.xaml:152` | ui:GetAsset |
| 11 | `InitAllSettings.xaml:160` | Get BGV12.MaxConnectorRetries |
| 12 | `InitAllSettings.xaml:161` | ui:GetAsset |
| 13 | `InitAllSettings.xaml:169` | Get BGV12.RetryBackoffSeconds |
| 14 | `InitAllSettings.xaml:170` | ui:GetAsset |
| 15 | `InitAllSettings.xaml:178` | Get BGV12.SkipOnAmbiguousContactMatch |
| 16 | `InitAllSettings.xaml:179` | ui:GetAsset |
| 17 | `InitAllSettings.xaml:187` | Get BGV12.PreferredEmailLabels |
| 18 | `InitAllSettings.xaml:188` | ui:GetAsset |
| 19 | `InitAllSettings.xaml:196` | Get BGV12.SendEnabled |
| 20 | `InitAllSettings.xaml:197` | ui:GetAsset |
| 21 | `InitAllSettings.xaml:205` | Get BGV12.OperationsDL |
| 22 | `InitAllSettings.xaml:206` | ui:GetAsset |
| 23 | `GetTransactionData.xaml:63` | Get Queue Item |
| 24 | `GetTransactionData.xaml:64` | ui:GetTransactionItem |
| 25 | `SetTransactionStatus.xaml:68` | Set Success |
| 26 | `SetTransactionStatus.xaml:90` | Set Failed |

> **Recommendation:** Wrap these activities in TryCatch blocks with appropriate exception types (BusinessRuleException for data errors, System.Exception for general failures).

## 11. Trigger Configuration

Based on the process analysis, the following trigger configuration is recommended:

| # | Trigger Type | Reason | Configuration |
|---|-------------|--------|---------------|
| 1 | **Schedule** | Defined in SDD orchestrator_artifacts: BGV12_DailyDispatcher_0800_Dubai | SDD-specified: BGV12_DailyDispatcher_0800_Dubai | Cron: 0 0 8 ? * * * | Daily 08:00 Dubai-time dispatcher schedule to fetch today's birthdays and enqueue items. |
| 2 | **Queue** | Defined in SDD orchestrator_artifacts: BGV12_QueuePerformer_EmailsToSend | SDD-specified: BGV12_QueuePerformer_EmailsToSend | Queue: BirthdayGreetingsV12_EmailsToSend | Queue trigger to run performer jobs for each birthday greeting item. |

## 12. Upstream Quality Findings

The following quality warnings were produced by upstream pipeline stages (selector scoring, type validation, expression linting, etc.) and should be addressed during development:

| Code | Severity | Count | Sample Message |
|------|----------|-------|----------------|
| placeholder-value | warning | 11 | Contains 5 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] |
| hardcoded-retry-count | warning | 18 | Line 178: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| hardcoded-retry-interval | warning | 18 | Line 178: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx |
| hardcoded-queue-name | warning | 1 | Line 375: queue name "BirthdayGreetingsV12_EmailsToSend" is hardcoded — consider using a Config.xlsx entry or workflow a... |
| hardcoded-asset-name | warning | 18 | Line 117: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx entry or workflow argu... |
| TYPE_MISMATCH | warning | 3 | Line 169: Auto-repaired — changed variable "str_SummaryJson" type from x:String to UiPath.DataService.DataServiceEntity ... |
| transitive-dependency-missing | warning | 3 | Activity requires package "UiPath.Web.Activities" but it is not declared in project.json dependencies |
| CATALOG_VIOLATION | warning | 8 | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest |
| RETRY_INTERVAL_DEFAULTED | warning | 17 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Credentials | Provision credential: `BGV12.GoogleWorkspaceCredential` | Yes |
| 5 | Assets | Provision asset: `BGV12.CalendarName` | Yes |
| 6 | Assets | Provision asset: `BGV12.Timezone` | Yes |
| 7 | Assets | Provision asset: `BGV12.FromGmailConnectionName` | Yes |
| 8 | Assets | Provision asset: `BGV12.MaxConnectorRetries` | Yes |
| 9 | Assets | Provision asset: `BGV12.RetryBackoffSeconds` | Yes |
| 10 | Assets | Provision asset: `BGV12.SkipOnAmbiguousContactMatch` | Yes |
| 11 | Assets | Provision asset: `BGV12.PreferredEmailLabels` | Yes |
| 12 | Assets | Provision asset: `BGV12.SendEnabled` | Yes |
| 13 | Assets | Provision asset: `BGV12.OperationsDL` | Yes |
| 14 | Queues | Create queue: `&quot;BirthdayGreetingsV12_EmailsToSend&quot;` | Yes |
| 15 | Queues | Create queue: `[in_QueueName]` | Yes |
| 16 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 17 | Testing | Run smoke test in target environment | Yes |
| 18 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 19 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 20 | Governance | Peer code review completed | Yes |
| 21 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 22 | Governance | Business process owner validation obtained | Yes |
| 23 | Governance | CoE approval obtained | Yes |
| 24 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Not Ready — 26/50 (34%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 18 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 2/10 | Only 41% of high-risk activities covered by TryCatch; 5 file(s) with no TryCatch blocks |
| Queue Management | 9/10 | 1 hardcoded queue name(s) — externalize to config |
| Build Quality | 0/10 | 97 quality warnings — significant remediation needed; 54 remediations — stub replacements need developer attention; 12/14 workflow(s) are Studio-loadable (2 blocked — 14% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 233 |
| Valid activities | 233 |
| Unknown → Comment stubs | 0 |
| Non-catalog properties stripped | 45 |
| Enum values auto-corrected | 0 |
| Missing required props filled | 1 |
| Total issues | 43 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 46 auto-fixed, 43 total issues |
| Post-emission (quality gate) | 151 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "InitAllSettings.xaml",
    "GetTransactionData.xaml",
    "SetTransactionStatus.xaml",
    "CloseAllApplications.xaml",
    "KillAllProcesses.xaml",
    "AgentInvocation_Stub.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "Dispatcher.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved uexcel:ExcelApplicationScope.WorkbookPath from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved ui:GetCredential.Username from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved ui:GetCredential.Password from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "InitAllSettings.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "GetTransactionData.xaml",
      "description": "Catalog: Moved ui:GetTransactionItem.TransactionItem from attribute to child-element in GetTransactionData.xaml"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"str_SummaryJson\" type from x:String to UiPath.DataService.DataServiceEntity to match uds:UpdateEntity.Entity output type"
    },
    {
      "repairCode": "REPAIR_TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "description": "No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the variable type or activity property"
    },
    {
      "repairCode": "REPAIR_TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "description": "No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the variable type or activity property"
    }
  ],
  "remediations": [
    {
      "level": "workflow",
      "file": "Main.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — assetName.startsWith is not a function",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement Entry point. Loads Orchestrator assets into config dictionary, initialises the Data Service run record, invokes the Dispatcher to fetch and enqueue today's birthday events, then invokes Finalize to close out the run record. Wraps the full orchestration in a top-level TryCatch that sets run status to Faulted on unrecoverable system exceptions.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "Performer.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — assetName.startsWith is not a function",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement REFramework-style performer entry point. Fetches queue items from BirthdayGreetingsV12_EmailsToSend one at a time in a loop. For each item invokes ProcessBirthdayEvent. Handles ApplicationException (marks item Failed with retry) vs BusinessRuleException (marks item as no-action success). Aggregates sent/skipped/failed counts. Designed to run as a separate Orchestrator process triggered by the queue trigger.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 83: Undeclared variable \"Asia\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 83: Undeclared variable \"Dubai\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"https\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"www\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"calendar\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"v3\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"calendars\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"primary\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 100: Undeclared variable \"events\" in expression: https://www.googleapis.com/calendar/v3/calendars/primary/eve... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 346: Undeclared variable \"From\" in expression: New Dictionary(Of String, Object) From {{\"EventId\", str_Curr... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 252: Undeclared variable \"Result\" in expression: REVIEW_REQUIRED: Result — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 426: Undeclared variable \"emails\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 426: Undeclared variable \"lbl\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 426: Undeclared variable \"e\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 426: Undeclared variable \"label\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 476: Undeclared variable \"emails\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 476: Undeclared variable \"e\" in expression: Function() As String\n  Dim emails = CType(obj_EmailAddresses... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 492: Undeclared variable \"parts\" in expression: Function() As String\n  If String.IsNullOrEmpty(str_SelectedE... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 492: Undeclared variable \"domain\" in expression: Function() As String\n  If String.IsNullOrEmpty(str_SelectedE... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 492: Undeclared variable \"masked\" in expression: Function() As String\n  If String.IsNullOrEmpty(str_SelectedE... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessBirthdayEvent.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 120: Undeclared variable \"subject\" in expression: \"Write a short birthday email in my voice: warm, funny, sarc... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 120: Undeclared variable \"body\" in expression: \"Write a short birthday email in my voice: warm, funny, sarc... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 187: Undeclared variable \"Result\" in expression: REVIEW_REQUIRED: Result — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 288: Undeclared variable \"subject\" in expression: \"IMPORTANT: Your previous response was invalid. You MUST out... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 288: Undeclared variable \"body\" in expression: \"IMPORTANT: Your previous response was invalid. You MUST out... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 363: Undeclared variable \"Result\" in expression: REVIEW_REQUIRED: Result — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"RunId\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"Status\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"EventsFoundCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"SentCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"SkippedNoEmailCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"SkippedContactNotFoundCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"SkippedAmbiguousMatchCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"FailedCount\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"FinalizedAtUtc\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 128: Undeclared variable \"o\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(in_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 327: String.Format() expects 2-10 argument(s) but got 11 in expression: String.Format(\"[Finalize] RUN COMPLETE — RunId={0} Status={1} EventsFound={2} Se...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Undeclared variable \"Asia\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in BirthdayGreetingsV12_Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 69: Undeclared variable \"Dubai\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in BirthdayGreetingsV12_Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 83: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 83: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 102: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 102: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 207: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 207: Undeclared variable \"Yes\" in expression: Yes — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 420: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 420: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;GET&quot;\" for \"Method\" on uis:IntegrationServiceHTTPRequest — valid values: GET, POST, PUT, DELETE, PATCH. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Dispatcher.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "ProcessBirthdayEvent.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;GET&quot;\" for \"Method\" on uis:IntegrationServiceHTTPRequest — valid values: GET, POST, PUT, DELETE, PATCH. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in ProcessBirthdayEvent.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"[If(bool_IsResponseValid, &quot;Info&quot;, &quot;Warn&quot;)]\" for \"Level\" on ui:LogMessage — valid values: Trace, Info, Warn, Error, Fatal. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in GenerateBirthdayMessage.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;UTF8&quot;\" for \"Encoding\" on ui:WriteTextFile — valid values: UTF8, Unicode, ASCII, Default. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Finalize.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;POST&quot;\" for \"Method\" on uis:IntegrationServiceHTTPRequest — valid values: GET, POST, PUT, DELETE, PATCH. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Finalize.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Process.xaml",
      "detail": "Contains 12 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
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
      "file": "Performer.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 178: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 186: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 191: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 357: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 365: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 370: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 178: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 186: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 191: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 357: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 365: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 370: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-queue-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 375: queue name \"BirthdayGreetingsV12_EmailsToSend\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Line 188: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Line 188: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 151: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 159: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 164: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 274: retry count hardcoded as 2 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 282: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 287: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 151: retry interval hardcoded as \"00:00:10\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 159: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 164: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 274: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 282: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 287: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 117: asset name \"&quot;BGV12.CalendarName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 159: asset name \"&quot;BGV12.Timezone&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 201: asset name \"&quot;BGV12.FromGmailConnectionName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 243: asset name \"&quot;BGV12.MaxConnectorRetries&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 285: asset name \"&quot;BGV12.RetryBackoffSeconds&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 327: asset name \"&quot;BGV12.SkipOnAmbiguousContactMatch&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 369: asset name \"&quot;BGV12.PreferredEmailLabels&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12_Main.xaml",
      "detail": "Line 411: asset name \"&quot;BGV12.SendEnabled&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 117: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 163: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 222: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 268: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 376: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 117: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 163: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 222: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 268: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 376: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 118: asset name \"BGV12.GoogleWorkspaceCredential\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 130: asset name \"BGV12.CalendarName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 139: asset name \"BGV12.Timezone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 148: asset name \"BGV12.FromGmailConnectionName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 157: asset name \"BGV12.MaxConnectorRetries\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 166: asset name \"BGV12.RetryBackoffSeconds\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 175: asset name \"BGV12.SkipOnAmbiguousContactMatch\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 184: asset name \"BGV12.PreferredEmailLabels\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 193: asset name \"BGV12.SendEnabled\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 202: asset name \"BGV12.OperationsDL\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 169: Auto-repaired — changed variable \"str_SummaryJson\" type from x:String to UiPath.DataService.DataServiceEntity to match uds:UpdateEntity.Entity (UiPath.DataService.DataServiceEntity)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 222: Type mismatch — variable \"str_SummaryJson\" (UiPath.DataService.DataServiceEntity) bound to ui:WriteTextFile.Text (expects System.String). No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the variable type or activity property",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 296: Type mismatch — variable \"str_SummaryJson\" (UiPath.DataService.DataServiceEntity) bound to uis:IntegrationServiceHTTPRequest.Body (expects System.String). No known conversion from UiPath.DataService.DataServiceEntity to System.String — review the variable type or activity property",
      "severity": "warning"
    },
    {
      "check": "transitive-dependency-missing",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Activity requires package \"UiPath.Web.Activities\" but it is not declared in project.json dependencies",
      "severity": "warning"
    },
    {
      "check": "transitive-dependency-missing",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Activity requires package \"UiPath.GenAI.Activities\" but it is not declared in project.json dependencies",
      "severity": "warning"
    },
    {
      "check": "transitive-dependency-missing",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Activity requires package \"UiPath.Web.Activities\" but it is not declared in project.json dependencies",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "Dispatcher.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Missing required property \"JsonString\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Missing required property \"Result\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Missing required property \"Prompt\" on ugenai:UseGenAI",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Missing required property \"JsonString\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Missing required property \"Result\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "Finalize.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Dispatcher.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "ProcessBirthdayEvent.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Finalize.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Finalize.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Finalize.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Finalize.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "Finalize.xaml",
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
  "totalEstimatedEffortMinutes": 760,
  "studioCompatibility": [
    {
      "file": "Dispatcher.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "ProcessBirthdayEvent.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "GenerateBirthdayMessage.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Finalize.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 327: String.Format() expects 2-10 argument(s) but got 11 in expression: String.Format(\"[Finalize] RUN COMPLETE — RunId={0} Status={1} EventsFound={2} Se..."
      ]
    },
    {
      "file": "BirthdayGreetingsV12_Main.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Process.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 83: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 102: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 207: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 420: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No"
      ]
    },
    {
      "file": "InitAllSettings.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Main.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[GENERATION-FAILURE] Workflow generation failed — LLM output could not be parsed into valid XAML"
      ],
      "failureCategory": "generation-failure",
      "failureSummary": "Workflow generation failed — LLM output could not be parsed into valid XAML"
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
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "AgentInvocation_Stub.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Performer.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[GENERATION-FAILURE] Workflow generation failed — LLM output could not be parsed into valid XAML"
      ],
      "failureCategory": "generation-failure",
      "failureSummary": "Workflow generation failed — LLM output could not be parsed into valid XAML"
    }
  ],
  "preEmissionValidation": {
    "totalActivities": 233,
    "validActivities": 233,
    "unknownActivities": 0,
    "strippedProperties": 45,
    "enumCorrections": 0,
    "missingRequiredFilled": 1,
    "commentConversions": 0,
    "issueCount": 43
  }
}
```
