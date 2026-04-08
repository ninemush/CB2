# Developer Handoff Guide

**Project:** BirthdayGreetingsV12
**Generated:** 2026-03-30
**Generation Mode:** Full Implementation
**Deployment Readiness:** Not Ready (19%)

**Total Estimated Effort: ~495 minutes (8.3 hours)**
**Remediations:** 35 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 2 workflow)
**Auto-Repairs:** 60
**Quality Warnings:** 128

---

## 1. Completed Work

The following 1 workflow(s) were fully generated without any stub replacements or remediation:

- `ProcessEvent.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Main.xaml` | Structurally invalid — XML well-formedness failure in tree assembler |
| 2 | `Init.xaml` | Structurally invalid (not Studio-loadable) |
| 3 | `GetTodayBirthdays.xaml` | Structurally invalid — Compliance or quality gate failure requiring manual remediation |
| 4 | `Dispatcher.xaml` | Structurally invalid — XML well-formedness failure in tree assembler |
| 5 | `Performer.xaml` | Structurally invalid — Expression syntax errors that could not be auto-corrected |
| 6 | `Finalize.xaml` | Structurally invalid — Expression syntax errors that could not be auto-corrected |
| 7 | `BirthdayGreetingsV12.xaml` | Generated with Remediations |
| 8 | `InitAllSettings.xaml` | Generated with Remediations |
| 9 | `ProcessEvent.xaml` | Fully Generated |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Main.xaml` | Structurally invalid — not Studio-loadable | Xml Wellformedness | [XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler |
| 2 | `Init.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [undeclared-variable] Line 141: variable "str_AssetValue" is used in expressi...; [undeclared-variable] Line 199: variable "str_AssetValue" is used in expressi...; [undeclared-variable] Line 257: variable "str_AssetValue" is used in expressi... |
| 3 | `GetTodayBirthdays.xaml` | Structurally invalid — not Studio-loadable | Compliance Failure | [COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual reme... |
| 4 | `Dispatcher.xaml` | Structurally invalid — not Studio-loadable | Xml Wellformedness | [XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler |
| 5 | `Performer.xaml` | Structurally invalid — not Studio-loadable | Expression Syntax | [EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected |
| 6 | `Finalize.xaml` | Structurally invalid — not Studio-loadable | Expression Syntax | [EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected |
| 7 | `BirthdayGreetingsV12.xaml` | Openable with warnings | Unclassified | — |
| 8 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 9 | `ProcessEvent.xaml` | Openable with warnings | Unclassified | — |

**Summary:** 1 Studio-loadable, 2 with warnings, 6 not Studio-loadable

> **⚠ 6 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- XML well-formedness failure in tree assembler: 2 workflow(s)
- Unknown: 1 workflow(s)
- Compliance or quality gate failure requiring manual remediation: 1 workflow(s)
- Expression syntax errors that could not be auto-corrected: 2 workflow(s)

## 2. AI-Resolved with Smart Defaults

The following 60 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `GetTodayBirthdays.xaml` | Stripped 35 placeholder token(s) from GetTodayBirthdays.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `Performer.xaml` | Stripped 34 placeholder token(s) from Performer.xaml | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `Finalize.xaml` | Stripped 2 placeholder token(s) from Finalize.xaml | 5 |
| 4 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `Dispatcher.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml | undefined |
| 5 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `BirthdayGreetingsV12.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in BirthdayGreetingsV12.xaml | undefined |
| 6 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 7 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Username from attribute to child-element in InitAllSettings.xaml | undefined |
| 8 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Password from attribute to child-element in InitAllSettings.xaml | undefined |
| 9 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 10 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Main.xaml` | Changed variable "dt_JobStartTimeUtc" type from s:DateTime to x:Object to match Assign.To output ... | undefined |
| 11 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Main.xaml` | Changed variable "bool_JobFaulted" type from x:Boolean to x:Object to match Assign.To output type | undefined |
| 12 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Main.xaml` | Changed variable "str_FatalExceptionMessage" type from x:String to x:Object to match Assign.To ou... | undefined |
| 13 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Main.xaml` | Changed variable "str_FinalizeStatus" type from x:String to x:Object to match Assign.To output type | undefined |
| 14 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Init.xaml` | Changed variable "dt_TriggeredAtUtc" type from s:DateTime to x:Object to match Assign.To output type | undefined |
| 15 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Init.xaml` | Changed variable "str_RunId" type from x:String to x:Object to match Assign.To output type | undefined |
| 16 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Init.xaml` | Changed variable "dict_ConfigDictionary" type from scg:Dictionary(x:String, x:Object) to x:Object... | undefined |
| 17 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Init.xaml` | Changed variable "str_AssetKeyBeingLoaded" type from x:String to x:Object to match Assign.To outp... | undefined |
| 18 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Init.xaml` | Changed variable "dt_RunDateDubai" type from s:DateTime to x:Object to match Assign.To output type | undefined |
| 19 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "int_MaxConnectorRetries" type from x:Int32 to x:Object to match Assign.To outpu... | undefined |
| 20 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "int_RetryBackoffSeconds" type from x:Int32 to x:Object to match Assign.To outpu... | undefined |
| 21 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_RunDateDubai" type from x:String to x:Object to match Assign.To output type | undefined |
| 22 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "int_TotalEventCount" type from x:Int32 to x:Object to match Assign.To output type | undefined |
| 23 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_CurrentFullName" type from x:String to x:Object to match Assign.To output type | undefined |
| 24 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_CurrentEventId" type from x:String to x:Object to match Assign.To output type | undefined |
| 25 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_CurrentEventStartDubai" type from x:String to x:Object to match Assign.To o... | undefined |
| 26 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "int_FailedEnqueueCount" type from x:Int32 to x:Object to match Assign.To output... | undefined |
| 27 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_QueueItemReference" type from x:String to x:Object to match Assign.To outpu... | undefined |
| 28 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "dict_QueueItemContent" type from scg:Dictionary(x:String, x:Object) to x:Object... | undefined |
| 29 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "bool_IsDuplicateReference" type from x:Boolean to x:Object to match Assign.To o... | undefined |
| 30 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "int_SkippedDuplicateCount" type from x:Int32 to x:Object to match Assign.To out... | undefined |
| 31 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "str_EnqueueExceptionMessage" type from x:String to x:Object to match Assign.To ... | undefined |
| 32 | `REPAIR_TYPE_MISMATCH` | `Dispatcher.xaml` | No known conversion from System.Object to System.String — review the variable type or activity pr... | undefined |
| 33 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Dispatcher.xaml` | Changed variable "obj_EnqueueResult" type from x:Object to System.Collections.Generic.Dictionary`... | undefined |
| 34 | `REPAIR_TYPE_MISMATCH` | `Performer.xaml` | Object variable "obj_QueueItem" cannot be retyped to generic interface UiPath.Core.QueueItem — re... | undefined |
| 35 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "dt_FinalizationStartedAt" type from s:DateTime to x:Object to match Assign.To o... | undefined |
| 36 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "int_TotalEventsProcessed" type from x:Int32 to x:Object to match Assign.To outp... | undefined |
| 37 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "bool_HasAnyFailures" type from x:Boolean to x:Object to match Assign.To output ... | undefined |
| 38 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "bool_HasOnlySkips" type from x:Boolean to x:Object to match Assign.To output type | undefined |
| 39 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "str_RunSummaryJson" type from x:String to x:Object to match Assign.To output type | undefined |
| 40 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "str_RunSummaryFileName" type from x:String to x:Object to match Assign.To outpu... | undefined |
| 41 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "str_RunSummaryBucketPath" type from x:String to x:Object to match Assign.To out... | undefined |
| 42 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "bool_DataServiceUpdateSuccess" type from x:Boolean to x:Object to match Assign.... | undefined |
| 43 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "bool_StorageUploadSuccess" type from x:Boolean to x:Object to match Assign.To o... | undefined |
| 44 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "int_FinalizationDurationSeconds" type from x:Int32 to x:Object to match Assign.... | undefined |
| 45 | `REPAIR_TYPE_VARIABLE_CHANGE` | `Finalize.xaml` | Changed variable "str_SlaMetricsLogMessage" type from x:String to x:Object to match Assign.To out... | undefined |
| 46 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "dt_JobStartTimeUtc" type from s:DateTime to x:Object to match Assign.To output ... | undefined |
| 47 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "bool_JobFaulted" type from x:Boolean to x:Object to match Assign.To output type | undefined |
| 48 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_FatalExceptionMessage" type from x:String to x:Object to match Assign.To ou... | undefined |
| 49 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_FatalExceptionType" type from x:String to x:Object to match Assign.To outpu... | undefined |
| 50 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "bool_AnyBirthdaysToday" type from x:Boolean to x:Object to match Assign.To outp... | undefined |
| 51 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_FinalizeStatus" type from x:String to x:Object to match Assign.To output type | undefined |
| 52 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_CurrentFullName" type from x:String to x:Object to match Assign.To output type | undefined |
| 53 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_CurrentEventId" type from x:String to x:Object to match Assign.To output type | undefined |
| 54 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_CurrentEventStart" type from x:String to x:Object to match Assign.To output... | undefined |
| 55 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "str_FirstName" type from x:String to x:Object to match Assign.To output type | undefined |
| 56 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "int_EnqueuedCount" type from x:Int32 to x:Object to match Assign.To output type | undefined |
| 57 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "int_ErrorCount" type from x:Int32 to x:Object to match Assign.To output type | undefined |
| 58 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "bool_DispatcherSuccess" type from x:Boolean to x:Object to match Assign.To outp... | undefined |
| 59 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "int_JobElapsedSeconds" type from x:Int32 to x:Object to match Assign.To output ... | undefined |
| 60 | `REPAIR_TYPE_VARIABLE_CHANGE` | `BirthdayGreetingsV12.xaml` | Changed variable "bool_FinalizeSuccess" type from x:Boolean to x:Object to match Assign.To output... | undefined |

## 3. Manual Action Required

### Validation Issues — Requires Manual Attention (33)

The following issues were detected by the quality gate and require developer review. No automated remediation was applied — workflows are preserved as-generated.

| # | File | Check | Developer Action | Est. Minutes |
|---|------|-------|-----------------|-------------|
| 1 | `Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 2 | `Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 3 | `Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 4 | `Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 5 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 6 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 7 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 8 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 9 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 10 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 11 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 12 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 13 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 14 | `Init.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Init.xaml — estimated 15 min | 15 |
| 15 | `Dispatcher.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 16 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 17 | `Performer.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 18 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 19 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 20 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 21 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 22 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 23 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 24 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 25 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 26 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 27 | `BirthdayGreetingsV12.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min | 15 |
| 28 | `Performer.xaml` | `OBJECT_TO_IENUMERABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 29 | `Dispatcher.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Dispatcher.xaml — use valid enum from UiPath d... | 5 |
| 30 | `Performer.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Performer.xaml — use valid enum from UiPath do... | 5 |
| 31 | `Performer.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Performer.xaml — use valid enum from UiPath do... | 5 |
| 32 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |
| 33 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |

### Workflow-Level Stubs (2)

Entire workflows were replaced with Studio-openable stubs (XAML was not parseable for structural preservation).

| # | File | Code | Developer Action | Est. Minutes |
|---|------|------|-----------------|-------------|
| 1 | `Main.xaml` | `STUB_WORKFLOW_BLOCKING` | Fix XML structure in Main.xaml — ensure proper nesting and closing tags | 15 |
| 2 | `Dispatcher.xaml` | `STUB_WORKFLOW_BLOCKING` | Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags | 15 |

### Quality Warnings (128)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `Main.xaml` | placeholder-value | Contains 8 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 2 | `Main.xaml` | placeholder-value | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" | — | undefined |
| 3 | `Init.xaml` | placeholder-value | Contains 2 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 4 | `GetTodayBirthdays.xaml` | placeholder-value | Contains 7 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 5 | `GetTodayBirthdays.xaml` | placeholder-value | Contains 9 placeholder value(s) matching "\bPLACEHOLDER\b" | — | undefined |
| 6 | `Dispatcher.xaml` | placeholder-value | Contains 7 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 7 | `Dispatcher.xaml` | placeholder-value | Contains 11 placeholder value(s) matching "\bPLACEHOLDER\b" | — | undefined |
| 8 | `Performer.xaml` | placeholder-value | Contains 6 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 9 | `Performer.xaml` | placeholder-value | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" | — | undefined |
| 10 | `Finalize.xaml` | placeholder-value | Contains 6 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 11 | `Finalize.xaml` | placeholder-value | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" | — | undefined |
| 12 | `ProcessEvent.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 13 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.CalendarName&quot;" is referenced in XAML but not declared in orchestrator art... | — | undefined |
| 14 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.Timezone&quot;" is referenced in XAML but not declared in orchestrator artifacts | — | undefined |
| 15 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.FromGmailConnectionName&quot;" is referenced in XAML but not declared in orche... | — | undefined |
| 16 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.MaxConnectorRetries&quot;" is referenced in XAML but not declared in orchestra... | — | undefined |
| 17 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.RetryBackoffSeconds&quot;" is referenced in XAML but not declared in orchestra... | — | undefined |
| 18 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.SkipOnAmbiguousContactMatch&quot;" is referenced in XAML but not declared in o... | — | undefined |
| 19 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.PreferredEmailLabels&quot;" is referenced in XAML but not declared in orchestr... | — | undefined |
| 20 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.SendEnabled&quot;" is referenced in XAML but not declared in orchestrator arti... | — | undefined |
| 21 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.OperationsDL&quot;" is referenced in XAML but not declared in orchestrator art... | — | undefined |
| 22 | `orchestrator` | undeclared-asset | Asset "&quot;BGV12.GoogleWorkspaceCredential&quot;" is referenced in XAML but not declared in orc... | — | undefined |
| 23 | `Dispatcher.xaml` | potentially-null-dereference | Line 207: "obj_CurrentRow.Table" accessed without visible null guard in scope — verify null check... | — | undefined |
| 24 | `Dispatcher.xaml` | potentially-null-dereference | Line 215: "obj_CurrentRow.Table" accessed without visible null guard in scope — verify null check... | — | undefined |
| 25 | `Dispatcher.xaml` | potentially-null-dereference | Line 223: "obj_CurrentRow.Table" accessed without visible null guard in scope — verify null check... | — | undefined |
| 26 | `Init.xaml` | hardcoded-asset-name | Line 139: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 27 | `Init.xaml` | hardcoded-asset-name | Line 197: asset name "&quot;BGV12.Timezone&quot;" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 28 | `Init.xaml` | hardcoded-asset-name | Line 255: asset name "&quot;BGV12.FromGmailConnectionName&quot;" is hardcoded — consider using a ... | — | undefined |
| 29 | `Init.xaml` | hardcoded-asset-name | Line 313: asset name "&quot;BGV12.MaxConnectorRetries&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 30 | `Init.xaml` | hardcoded-asset-name | Line 371: asset name "&quot;BGV12.RetryBackoffSeconds&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 31 | `Init.xaml` | hardcoded-asset-name | Line 429: asset name "&quot;BGV12.SkipOnAmbiguousContactMatch&quot;" is hardcoded — consider usin... | — | undefined |
| 32 | `Init.xaml` | hardcoded-asset-name | Line 487: asset name "&quot;BGV12.PreferredEmailLabels&quot;" is hardcoded — consider using a Con... | — | undefined |
| 33 | `Init.xaml` | hardcoded-asset-name | Line 545: asset name "&quot;BGV12.SendEnabled&quot;" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 34 | `Init.xaml` | hardcoded-asset-name | Line 603: asset name "&quot;BGV12.OperationsDL&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 35 | `Init.xaml` | hardcoded-asset-name | Line 661: asset name "&quot;BGV12.GoogleWorkspaceCredential&quot;" is hardcoded — consider using ... | — | undefined |
| 36 | `GetTodayBirthdays.xaml` | hardcoded-retry-count | Line 198: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 37 | `GetTodayBirthdays.xaml` | hardcoded-retry-count | Line 208: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 38 | `GetTodayBirthdays.xaml` | hardcoded-retry-count | Line 483: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 39 | `GetTodayBirthdays.xaml` | hardcoded-retry-interval | Line 198: retry interval hardcoded as "TimeSpan.FromSeconds(retryBackoffSeconds)" — consider exte... | — | undefined |
| 40 | `GetTodayBirthdays.xaml` | hardcoded-retry-interval | Line 208: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 41 | `GetTodayBirthdays.xaml` | hardcoded-retry-interval | Line 483: retry interval hardcoded as "TimeSpan.FromSeconds(retryBackoffSeconds)" — consider exte... | — | undefined |
| 42 | `Dispatcher.xaml` | hardcoded-retry-count | Line 290: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 43 | `Dispatcher.xaml` | hardcoded-retry-count | Line 300: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 44 | `Dispatcher.xaml` | hardcoded-retry-count | Line 303: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 45 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 290: retry interval hardcoded as "TimeSpan.FromSeconds(retryBackoffSeconds)" — consider exte... | — | undefined |
| 46 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 300: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 47 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 303: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 48 | `Performer.xaml` | hardcoded-retry-count | Line 411: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 49 | `Performer.xaml` | hardcoded-retry-count | Line 421: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 50 | `Performer.xaml` | hardcoded-retry-interval | Line 411: retry interval hardcoded as "TimeSpan.FromSeconds(retryBackoffSeconds)" — consider exte... | — | undefined |
| 51 | `Performer.xaml` | hardcoded-retry-interval | Line 421: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 52 | `Finalize.xaml` | hardcoded-retry-count | Line 166: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 53 | `Finalize.xaml` | hardcoded-retry-count | Line 176: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 54 | `Finalize.xaml` | hardcoded-retry-count | Line 179: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 55 | `Finalize.xaml` | hardcoded-retry-count | Line 233: retry count hardcoded as 2 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 56 | `Finalize.xaml` | hardcoded-retry-count | Line 243: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 57 | `Finalize.xaml` | hardcoded-retry-interval | Line 166: retry interval hardcoded as "00:00:10" — consider externalizing to Config.xlsx | — | undefined |
| 58 | `Finalize.xaml` | hardcoded-retry-interval | Line 176: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 59 | `Finalize.xaml` | hardcoded-retry-interval | Line 179: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 60 | `Finalize.xaml` | hardcoded-retry-interval | Line 233: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 61 | `Finalize.xaml` | hardcoded-retry-interval | Line 243: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 62 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 107: asset name "BGV12.GoogleWorkspaceCredential" is hardcoded — consider using a Config.xls... | — | undefined |
| 63 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 119: asset name "BGV12.CalendarName" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 64 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 128: asset name "BGV12.Timezone" is hardcoded — consider using a Config.xlsx entry or workfl... | — | undefined |
| 65 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 137: asset name "BGV12.FromGmailConnectionName" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 66 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 146: asset name "BGV12.MaxConnectorRetries" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 67 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 155: asset name "BGV12.RetryBackoffSeconds" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 68 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 164: asset name "BGV12.SkipOnAmbiguousContactMatch" is hardcoded — consider using a Config.x... | — | undefined |
| 69 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 173: asset name "BGV12.PreferredEmailLabels" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 70 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 182: asset name "BGV12.SendEnabled" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 71 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 191: asset name "BGV12.OperationsDL" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 72 | `Main.xaml` | EXPRESSION_SYNTAX | Line 195: C# '+' for string concatenation should be VB.NET '&' in expression: initEx.GetType().Na... | — | undefined |
| 73 | `Main.xaml` | EXPRESSION_SYNTAX | Line 276: C# '+' for string concatenation should be VB.NET '&' in expression: getBirthdaysEx.GetT... | — | undefined |
| 74 | `Main.xaml` | EXPRESSION_SYNTAX | Line 388: C# '+' for string concatenation should be VB.NET '&' in expression: dispatcherEx.GetTyp... | — | undefined |
| 75 | `Main.xaml` | EXPRESSION_SYNTAX | Line 414: C# '+' for string concatenation should be VB.NET '&' in expression: topLevelEx.GetType(... | — | undefined |
| 76 | `Dispatcher.xaml` | EXPRESSION_SYNTAX | Line 427: C# '+' for string concatenation should be VB.NET '&' in expression: "OrchestratorHttpEx... | — | undefined |
| 77 | `Finalize.xaml` | EXPRESSION_SYNTAX | Line 88: Removed 1 extra closing parenthesis(es) in expression: String.Format(&quot;[Finalize][Ru... | — | undefined |
| 78 | `Finalize.xaml` | EXPRESSION_SYNTAX | Line 204: Removed 1 extra closing parenthesis(es) in expression: String.Format(&quot;[Finalize][R... | — | undefined |
| 79 | `Main.xaml` | TYPE_MISMATCH | Line 78: Auto-repaired — changed variable "dt_JobStartTimeUtc" type from s:DateTime to x:Object t... | — | undefined |
| 80 | `Main.xaml` | TYPE_MISMATCH | Line 183: Auto-repaired — changed variable "bool_JobFaulted" type from x:Boolean to x:Object to m... | — | undefined |
| 81 | `Main.xaml` | TYPE_MISMATCH | Line 191: Auto-repaired — changed variable "str_FatalExceptionMessage" type from x:String to x:Ob... | — | undefined |
| 82 | `Main.xaml` | TYPE_MISMATCH | Line 290: Auto-repaired — changed variable "str_FinalizeStatus" type from x:String to x:Object to... | — | undefined |
| 83 | `Init.xaml` | TYPE_MISMATCH | Line 80: Auto-repaired — changed variable "dt_TriggeredAtUtc" type from s:DateTime to x:Object to... | — | undefined |
| 84 | `Init.xaml` | TYPE_MISMATCH | Line 88: Auto-repaired — changed variable "str_RunId" type from x:String to x:Object to match Ass... | — | undefined |
| 85 | `Init.xaml` | TYPE_MISMATCH | Line 97: Auto-repaired — changed variable "dict_ConfigDictionary" type from scg:Dictionary(x:Stri... | — | undefined |
| 86 | `Init.xaml` | TYPE_MISMATCH | Line 126: Auto-repaired — changed variable "str_AssetKeyBeingLoaded" type from x:String to x:Obje... | — | undefined |
| 87 | `Init.xaml` | TYPE_MISMATCH | Line 764: Auto-repaired — changed variable "dt_RunDateDubai" type from s:DateTime to x:Object to ... | — | undefined |
| 88 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 97: Auto-repaired — changed variable "int_MaxConnectorRetries" type from x:Int32 to x:Object... | — | undefined |
| 89 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 105: Auto-repaired — changed variable "int_RetryBackoffSeconds" type from x:Int32 to x:Objec... | — | undefined |
| 90 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 113: Auto-repaired — changed variable "str_RunDateDubai" type from x:String to x:Object to m... | — | undefined |
| 91 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 121: Auto-repaired — changed variable "int_TotalEventCount" type from x:Int32 to x:Object to... | — | undefined |
| 92 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 203: Auto-repaired — changed variable "str_CurrentFullName" type from x:String to x:Object t... | — | undefined |
| 93 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 211: Auto-repaired — changed variable "str_CurrentEventId" type from x:String to x:Object to... | — | undefined |
| 94 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 219: Auto-repaired — changed variable "str_CurrentEventStartDubai" type from x:String to x:O... | — | undefined |
| 95 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 236: Auto-repaired — changed variable "int_FailedEnqueueCount" type from x:Int32 to x:Object... | — | undefined |
| 96 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 245: Auto-repaired — changed variable "str_QueueItemReference" type from x:String to x:Objec... | — | undefined |
| 97 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 254: Auto-repaired — changed variable "dict_QueueItemContent" type from scg:Dictionary(x:Str... | — | undefined |
| 98 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 283: Auto-repaired — changed variable "bool_IsDuplicateReference" type from x:Boolean to x:O... | — | undefined |
| 99 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 376: Auto-repaired — changed variable "int_SkippedDuplicateCount" type from x:Int32 to x:Obj... | — | undefined |
| 100 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 423: Auto-repaired — changed variable "str_EnqueueExceptionMessage" type from x:String to x:... | — | undefined |
| 101 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 306: Type mismatch — variable "str_QueueItemReference" (System.Object) bound to ui:AddQueueI... | — | undefined |
| 102 | `Dispatcher.xaml` | TYPE_MISMATCH | Line 306: Auto-repaired — changed variable "obj_EnqueueResult" type from x:Object to System.Colle... | — | undefined |
| 103 | `Finalize.xaml` | TYPE_MISMATCH | Line 81: Auto-repaired — changed variable "dt_FinalizationStartedAt" type from s:DateTime to x:Ob... | — | undefined |
| 104 | `Finalize.xaml` | TYPE_MISMATCH | Line 91: Auto-repaired — changed variable "int_TotalEventsProcessed" type from x:Int32 to x:Objec... | — | undefined |
| 105 | `Finalize.xaml` | TYPE_MISMATCH | Line 99: Auto-repaired — changed variable "bool_HasAnyFailures" type from x:Boolean to x:Object t... | — | undefined |
| 106 | `Finalize.xaml` | TYPE_MISMATCH | Line 107: Auto-repaired — changed variable "bool_HasOnlySkips" type from x:Boolean to x:Object to... | — | undefined |
| 107 | `Finalize.xaml` | TYPE_MISMATCH | Line 123: Auto-repaired — changed variable "str_RunSummaryJson" type from x:String to x:Object to... | — | undefined |
| 108 | `Finalize.xaml` | TYPE_MISMATCH | Line 131: Auto-repaired — changed variable "str_RunSummaryFileName" type from x:String to x:Objec... | — | undefined |
| 109 | `Finalize.xaml` | TYPE_MISMATCH | Line 139: Auto-repaired — changed variable "str_RunSummaryBucketPath" type from x:String to x:Obj... | — | undefined |
| 110 | `Finalize.xaml` | TYPE_MISMATCH | Line 196: Auto-repaired — changed variable "bool_DataServiceUpdateSuccess" type from x:Boolean to... | — | undefined |
| 111 | `Finalize.xaml` | TYPE_MISMATCH | Line 254: Auto-repaired — changed variable "bool_StorageUploadSuccess" type from x:Boolean to x:O... | — | undefined |
| 112 | `Finalize.xaml` | TYPE_MISMATCH | Line 263: Auto-repaired — changed variable "int_FinalizationDurationSeconds" type from x:Int32 to... | — | undefined |
| 113 | `Finalize.xaml` | TYPE_MISMATCH | Line 271: Auto-repaired — changed variable "str_SlaMetricsLogMessage" type from x:String to x:Obj... | — | undefined |
| 114 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 120: Auto-repaired — changed variable "dt_JobStartTimeUtc" type from s:DateTime to x:Object ... | — | undefined |
| 115 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 184: Auto-repaired — changed variable "bool_JobFaulted" type from x:Boolean to x:Object to m... | — | undefined |
| 116 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 192: Auto-repaired — changed variable "str_FatalExceptionMessage" type from x:String to x:Ob... | — | undefined |
| 117 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 200: Auto-repaired — changed variable "str_FatalExceptionType" type from x:String to x:Objec... | — | undefined |
| 118 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 241: Auto-repaired — changed variable "bool_AnyBirthdaysToday" type from x:Boolean to x:Obje... | — | undefined |
| 119 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 285: Auto-repaired — changed variable "str_FinalizeStatus" type from x:String to x:Object to... | — | undefined |
| 120 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 319: Auto-repaired — changed variable "str_CurrentFullName" type from x:String to x:Object t... | — | undefined |
| 121 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 327: Auto-repaired — changed variable "str_CurrentEventId" type from x:String to x:Object to... | — | undefined |
| 122 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 335: Auto-repaired — changed variable "str_CurrentEventStart" type from x:String to x:Object... | — | undefined |
| 123 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 343: Auto-repaired — changed variable "str_FirstName" type from x:String to x:Object to matc... | — | undefined |
| 124 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 379: Auto-repaired — changed variable "int_EnqueuedCount" type from x:Int32 to x:Object to m... | — | undefined |
| 125 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 398: Auto-repaired — changed variable "int_ErrorCount" type from x:Int32 to x:Object to matc... | — | undefined |
| 126 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 437: Auto-repaired — changed variable "bool_DispatcherSuccess" type from x:Boolean to x:Obje... | — | undefined |
| 127 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 452: Auto-repaired — changed variable "int_JobElapsedSeconds" type from x:Int32 to x:Object ... | — | undefined |
| 128 | `BirthdayGreetingsV12.xaml` | TYPE_MISMATCH | Line 494: Auto-repaired — changed variable "bool_FinalizeSuccess" type from x:Boolean to x:Object... | — | undefined |

**Total manual remediation effort: ~495 minutes (8.3 hours)**

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
| 14 | Generate Birthday Message in Your Voice (warm/funny/sarcastic) | System | UiPath GenAI Activities | agent-task | — |
| 15 | Send Birthday Email from ninemush@gmail.com | System | Integration Service - Gmail (ninemush@gmail.com) | task | — |
| 16 | Send Birthday Email from ninemush@gmail.com | System | Integration Service - Gmail (ninemush@gmail.com) | task | — |
| 17 | More Events Remaining? | System | Orchestrator | decision | — |
| 18 | End — All Birthday Emails Sent | System | Orchestrator | end | — |
| 19 | Continue Loop | System | Orchestrator | task | — |
| 20 | Loop Back to Next Event | System | Orchestrator | task | — |

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

Create a Modern Folder with at least one unattended robot assignment. Use folder-level credential stores for asset isolation.

### NuGet Dependencies

| # | Package |
|---|--------|
| 1 | `UiPath.System.Activities` |
| 2 | `UiPath.Excel.Activities` |
| 3 | `UiPath.UIAutomation.Activities` |
| 4 | `UiPath.ComplexScenarios.Activities` |
| 5 | `Newtonsoft.Json` |
| 6 | `UiPath.DataService.Activities` |
| 7 | `UiPath.Web.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts/People
- UiPath GenAI Activities
- Integration Service - Gmail (ninemush@gmail.com)

## 7. Credential & Asset Inventory

**Total:** 41 activities (20 hardcoded, 21 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BGV12.GoogleWorkspaceCredential` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `&quot;BGV12.CalendarName&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 2 | `&quot;BGV12.Timezone&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 3 | `&quot;BGV12.FromGmailConnectionName&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 4 | `&quot;BGV12.MaxConnectorRetries&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 5 | `&quot;BGV12.RetryBackoffSeconds&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 6 | `&quot;BGV12.SkipOnAmbiguousContactMatch&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 7 | `&quot;BGV12.PreferredEmailLabels&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 8 | `&quot;BGV12.SendEnabled&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 9 | `&quot;BGV12.OperationsDL&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 10 | `&quot;BGV12.GoogleWorkspaceCredential&quot;` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 11 | `BGV12.CalendarName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 12 | `BGV12.Timezone` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 13 | `BGV12.FromGmailConnectionName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 14 | `BGV12.MaxConnectorRetries` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 15 | `BGV12.RetryBackoffSeconds` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 16 | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 17 | `BGV12.PreferredEmailLabels` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 18 | `BGV12.SendEnabled` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 19 | `BGV12.OperationsDL` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `Init.xaml` | 142 | GetAsset | `&quot;BGV12.CalendarName&quot;` | Unknown | — | Yes |
| `Init.xaml` | 143 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 200 | GetAsset | `&quot;BGV12.Timezone&quot;` | Unknown | — | Yes |
| `Init.xaml` | 201 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 258 | GetAsset | `&quot;BGV12.FromGmailConnectionName&quot;` | Unknown | — | Yes |
| `Init.xaml` | 259 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 316 | GetAsset | `&quot;BGV12.MaxConnectorRetries&quot;` | Unknown | — | Yes |
| `Init.xaml` | 317 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 374 | GetAsset | `&quot;BGV12.RetryBackoffSeconds&quot;` | Unknown | — | Yes |
| `Init.xaml` | 375 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 432 | GetAsset | `&quot;BGV12.SkipOnAmbiguousContactMatch&quot;` | Unknown | — | Yes |
| `Init.xaml` | 433 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 490 | GetAsset | `&quot;BGV12.PreferredEmailLabels&quot;` | Unknown | — | Yes |
| `Init.xaml` | 491 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 548 | GetAsset | `&quot;BGV12.SendEnabled&quot;` | Unknown | — | Yes |
| `Init.xaml` | 549 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 606 | GetAsset | `&quot;BGV12.OperationsDL&quot;` | Unknown | — | Yes |
| `Init.xaml` | 607 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 664 | GetAsset | `&quot;BGV12.GoogleWorkspaceCredential&quot;` | Unknown | — | Yes |
| `Init.xaml` | 665 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 107 | GetCredential | `BGV12.GoogleWorkspaceCredential` | Credential | — | Yes |
| `InitAllSettings.xaml` | 108 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 111 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 119 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 120 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 128 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 129 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 137 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 138 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 146 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 147 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 155 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 156 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 164 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 165 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 173 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 174 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 182 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 183 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 191 | GetAsset | `BGV12.OperationsDL` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 192 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 20 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 10 aligned, 1 SDD-only, 10 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 10 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV12.CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name containing birthday events. | `InitAllSettings.xaml` | 119 |
| 2 | `BGV12.Timezone` | asset | **Aligned** | type: Text, value: Asia/Dubai, description: Authoritative timezone for 'today' evaluation and schedule alignment. | `InitAllSettings.xaml` | 128 |
| 3 | `BGV12.FromGmailConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used to send greetings. | `InitAllSettings.xaml` | 137 |
| 4 | `BGV12.MaxConnectorRetries` | asset | **Aligned** | type: Integer, value: 3, description: Max retries for transient Integration Service connector failures (Calendar/People/Gmail). | `InitAllSettings.xaml` | 146 |
| 5 | `BGV12.RetryBackoffSeconds` | asset | **Aligned** | type: Integer, value: 10, description: Backoff delay between transient retries. | `InitAllSettings.xaml` | 155 |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | asset | **Aligned** | type: Bool, value: true, description: If multiple contacts match the same name, skip to avoid mis-send; log as business exception. | `InitAllSettings.xaml` | 164 |
| 7 | `BGV12.PreferredEmailLabels` | asset | **Aligned** | type: Text, value: personal,home, description: Comma-separated preferred email labels (case-insensitive). | `InitAllSettings.xaml` | 173 |
| 8 | `BGV12.SendEnabled` | asset | **Aligned** | type: Bool, value: true, description: Master kill-switch for outbound email sending (when false, generate content but do not send). | `InitAllSettings.xaml` | 182 |
| 9 | `BGV12.OperationsDL` | asset | **Aligned** | type: Text, value: , description: Optional distribution list to receive failure notifications (left blank as PDD states no notifications). | `InitAllSettings.xaml` | 191 |
| 10 | `BGV12.GoogleWorkspaceCredential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for break-glass scenarios; primary auth is via Integration Service connections. | `InitAllSettings.xaml` | 107 |
| 11 | `&quot;BGV12.CalendarName&quot;` | asset | **XAML Only** | — | `Init.xaml` | 142 |
| 12 | `&quot;BGV12.Timezone&quot;` | asset | **XAML Only** | — | `Init.xaml` | 200 |
| 13 | `&quot;BGV12.FromGmailConnectionName&quot;` | asset | **XAML Only** | — | `Init.xaml` | 258 |
| 14 | `&quot;BGV12.MaxConnectorRetries&quot;` | asset | **XAML Only** | — | `Init.xaml` | 316 |
| 15 | `&quot;BGV12.RetryBackoffSeconds&quot;` | asset | **XAML Only** | — | `Init.xaml` | 374 |
| 16 | `&quot;BGV12.SkipOnAmbiguousContactMatch&quot;` | asset | **XAML Only** | — | `Init.xaml` | 432 |
| 17 | `&quot;BGV12.PreferredEmailLabels&quot;` | asset | **XAML Only** | — | `Init.xaml` | 490 |
| 18 | `&quot;BGV12.SendEnabled&quot;` | asset | **XAML Only** | — | `Init.xaml` | 548 |
| 19 | `&quot;BGV12.OperationsDL&quot;` | asset | **XAML Only** | — | `Init.xaml` | 606 |
| 20 | `&quot;BGV12.GoogleWorkspaceCredential&quot;` | asset | **XAML Only** | — | `Init.xaml` | 664 |
| 21 | `BirthdayGreetingsV12_EmailsToSend` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Work queue for birthday greeting email dispatch items (one per birthday event/person). Supports retry and controlled execution telemetry. | — | — |

## 9. Queue Management

**Pattern:** Queue usage (non-transactional)

### SDD-Defined Queues (Not Yet in XAML)

| # | Queue Name | Unique Reference | Max Retries | SLA | Note |
|---|-----------|-----------------|-------------|-----|------|
| 1 | `BirthdayGreetingsV12_EmailsToSend` | Yes | 2x | — | Defined in SDD but no matching XAML activity — verify implementation |

### Queue Activity Summary

| Capability | Present |
|---|---|
| Add Queue Item | No |
| Get Transaction Item | No |
| Set Transaction Status | Yes |

### Retry Policy

No queue usage detected — retry policy not applicable

### SLA Guidance

No queue-based SLA applicable.

### Dead-Letter / Failed Items Handling

No dead-letter handling applicable — process does not consume queue items.

## 10. Exception Handling Coverage

**Coverage:** 20/41 high-risk activities inside TryCatch (49%)

### Files Without TryCatch

- `Main.xaml`
- `Dispatcher.xaml`
- `InitAllSettings.xaml`
- `ProcessEvent.xaml`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `InitAllSettings.xaml:107` | Get BGV12.GoogleWorkspaceCredential |
| 2 | `InitAllSettings.xaml:108` | ui:GetCredential |
| 3 | `InitAllSettings.xaml:111` | ui:GetCredential |
| 4 | `InitAllSettings.xaml:119` | Get BGV12.CalendarName |
| 5 | `InitAllSettings.xaml:120` | ui:GetAsset |
| 6 | `InitAllSettings.xaml:128` | Get BGV12.Timezone |
| 7 | `InitAllSettings.xaml:129` | ui:GetAsset |
| 8 | `InitAllSettings.xaml:137` | Get BGV12.FromGmailConnectionName |
| 9 | `InitAllSettings.xaml:138` | ui:GetAsset |
| 10 | `InitAllSettings.xaml:146` | Get BGV12.MaxConnectorRetries |
| 11 | `InitAllSettings.xaml:147` | ui:GetAsset |
| 12 | `InitAllSettings.xaml:155` | Get BGV12.RetryBackoffSeconds |
| 13 | `InitAllSettings.xaml:156` | ui:GetAsset |
| 14 | `InitAllSettings.xaml:164` | Get BGV12.SkipOnAmbiguousContactMatch |
| 15 | `InitAllSettings.xaml:165` | ui:GetAsset |
| 16 | `InitAllSettings.xaml:173` | Get BGV12.PreferredEmailLabels |
| 17 | `InitAllSettings.xaml:174` | ui:GetAsset |
| 18 | `InitAllSettings.xaml:182` | Get BGV12.SendEnabled |
| 19 | `InitAllSettings.xaml:183` | ui:GetAsset |
| 20 | `InitAllSettings.xaml:191` | Get BGV12.OperationsDL |
| 21 | `InitAllSettings.xaml:192` | ui:GetAsset |

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
| undefined | warning | 128 |  |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Credentials | Provision credential: `BGV12.GoogleWorkspaceCredential` | Yes |
| 5 | Assets | Provision asset: `&quot;BGV12.CalendarName&quot;` | Yes |
| 6 | Assets | Provision asset: `&quot;BGV12.Timezone&quot;` | Yes |
| 7 | Assets | Provision asset: `&quot;BGV12.FromGmailConnectionName&quot;` | Yes |
| 8 | Assets | Provision asset: `&quot;BGV12.MaxConnectorRetries&quot;` | Yes |
| 9 | Assets | Provision asset: `&quot;BGV12.RetryBackoffSeconds&quot;` | Yes |
| 10 | Assets | Provision asset: `&quot;BGV12.SkipOnAmbiguousContactMatch&quot;` | Yes |
| 11 | Assets | Provision asset: `&quot;BGV12.PreferredEmailLabels&quot;` | Yes |
| 12 | Assets | Provision asset: `&quot;BGV12.SendEnabled&quot;` | Yes |
| 13 | Assets | Provision asset: `&quot;BGV12.OperationsDL&quot;` | Yes |
| 14 | Assets | Provision asset: `&quot;BGV12.GoogleWorkspaceCredential&quot;` | Yes |
| 15 | Assets | Provision asset: `BGV12.CalendarName` | Yes |
| 16 | Assets | Provision asset: `BGV12.Timezone` | Yes |
| 17 | Assets | Provision asset: `BGV12.FromGmailConnectionName` | Yes |
| 18 | Assets | Provision asset: `BGV12.MaxConnectorRetries` | Yes |
| 19 | Assets | Provision asset: `BGV12.RetryBackoffSeconds` | Yes |
| 20 | Assets | Provision asset: `BGV12.SkipOnAmbiguousContactMatch` | Yes |
| 21 | Assets | Provision asset: `BGV12.PreferredEmailLabels` | Yes |
| 22 | Assets | Provision asset: `BGV12.SendEnabled` | Yes |
| 23 | Assets | Provision asset: `BGV12.OperationsDL` | Yes |
| 24 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 25 | Testing | Run smoke test in target environment | Yes |
| 26 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 27 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 28 | Governance | Peer code review completed | Yes |
| 29 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 30 | Governance | Business process owner validation obtained | Yes |
| 31 | Governance | CoE approval obtained | Yes |
| 32 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Not Ready — 27/50 (19%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 20 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 2/10 | Only 49% of high-risk activities covered by TryCatch; 4 file(s) with no TryCatch blocks |
| Queue Management | 10/10 | Queue configuration looks good |
| Build Quality | 0/10 | 128 quality warnings — significant remediation needed; 35 remediations — stub replacements need developer attention; Entry point (Main.xaml) is stubbed — package has no runnable entry point; 3/9 workflow(s) are Studio-loadable (6 blocked — 67% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 269 |
| Valid activities | 264 |
| Unknown → Comment stubs | 4 |
| Non-catalog properties stripped | 112 |
| Enum values auto-corrected | 20 |
| Missing required props filled | 71 |
| Total issues | 164 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 207 auto-fixed, 164 total issues |
| Post-emission (quality gate) | 163 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "ProcessEvent.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "GetTodayBirthdays.xaml",
      "description": "Stripped 35 placeholder token(s) from GetTodayBirthdays.xaml",
      "developerAction": "Review GetTodayBirthdays.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Performer.xaml",
      "description": "Stripped 34 placeholder token(s) from Performer.xaml",
      "developerAction": "Review Performer.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Finalize.xaml",
      "description": "Stripped 2 placeholder token(s) from Finalize.xaml",
      "developerAction": "Review Finalize.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "Dispatcher.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in BirthdayGreetingsV12.xaml"
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
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Main.xaml",
      "description": "Changed variable \"dt_JobStartTimeUtc\" type from s:DateTime to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Main.xaml",
      "description": "Changed variable \"bool_JobFaulted\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Main.xaml",
      "description": "Changed variable \"str_FatalExceptionMessage\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Main.xaml",
      "description": "Changed variable \"str_FinalizeStatus\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Init.xaml",
      "description": "Changed variable \"dt_TriggeredAtUtc\" type from s:DateTime to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Init.xaml",
      "description": "Changed variable \"str_RunId\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Init.xaml",
      "description": "Changed variable \"dict_ConfigDictionary\" type from scg:Dictionary(x:String, x:Object) to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Init.xaml",
      "description": "Changed variable \"str_AssetKeyBeingLoaded\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Init.xaml",
      "description": "Changed variable \"dt_RunDateDubai\" type from s:DateTime to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"int_MaxConnectorRetries\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"int_RetryBackoffSeconds\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_RunDateDubai\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"int_TotalEventCount\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_CurrentFullName\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_CurrentEventId\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_CurrentEventStartDubai\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"int_FailedEnqueueCount\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_QueueItemReference\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"dict_QueueItemContent\" type from scg:Dictionary(x:String, x:Object) to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"bool_IsDuplicateReference\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"int_SkippedDuplicateCount\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"str_EnqueueExceptionMessage\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "description": "No known conversion from System.Object to System.String — review the variable type or activity property"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Dispatcher.xaml",
      "description": "Changed variable \"obj_EnqueueResult\" type from x:Object to System.Collections.Generic.Dictionary`2[System.String,System.Object] to match ui:AddQueueItem.ItemInformation input type"
    },
    {
      "repairCode": "REPAIR_TYPE_MISMATCH",
      "file": "Performer.xaml",
      "description": "Object variable \"obj_QueueItem\" cannot be retyped to generic interface UiPath.Core.QueueItem — requires a concrete collection type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"dt_FinalizationStartedAt\" type from s:DateTime to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"int_TotalEventsProcessed\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"bool_HasAnyFailures\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"bool_HasOnlySkips\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"str_RunSummaryJson\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"str_RunSummaryFileName\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"str_RunSummaryBucketPath\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"bool_DataServiceUpdateSuccess\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"bool_StorageUploadSuccess\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"int_FinalizationDurationSeconds\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "Finalize.xaml",
      "description": "Changed variable \"str_SlaMetricsLogMessage\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"dt_JobStartTimeUtc\" type from s:DateTime to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"bool_JobFaulted\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_FatalExceptionMessage\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_FatalExceptionType\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"bool_AnyBirthdaysToday\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_FinalizeStatus\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_CurrentFullName\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_CurrentEventId\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_CurrentEventStart\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"str_FirstName\" type from x:String to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"int_EnqueuedCount\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"int_ErrorCount\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"bool_DispatcherSuccess\" type from x:Boolean to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"int_JobElapsedSeconds\" type from x:Int32 to x:Object to match Assign.To output type"
    },
    {
      "repairCode": "REPAIR_TYPE_VARIABLE_CHANGE",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Changed variable \"bool_FinalizeSuccess\" type from x:Boolean to x:Object to match Assign.To output type"
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 195: Undeclared variable \"initEx\" in expression: initEx.GetType().Name + \": \" + initEx.Message — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 276: Undeclared variable \"getBirthdaysEx\" in expression: getBirthdaysEx.GetType().Name + \": \" + getBirthdaysEx.Messag... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 388: Undeclared variable \"dispatcherEx\" in expression: dispatcherEx.GetType().Name + \": \" + dispatcherEx.Message — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 414: Undeclared variable \"topLevelEx\" in expression: topLevelEx.GetType().Name + \": \" + topLevelEx.Message — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 141: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 199: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 257: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 315: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 373: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 431: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 489: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 547: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 605: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Init.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 663: Undeclared variable \"str_AssetValue\" in expression: str_AssetValue — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Init.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 306: Standalone word \"Normal\" may be an undeclared variable — should it be a string literal \"Normal\"? in expression: Normal",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 306: Undeclared variable \"Normal\" in expression: Normal — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 361: Standalone word \"Failed\" may be an undeclared variable — should it be a string literal \"Failed\"? in expression: Failed",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 361: Undeclared variable \"Failed\" in expression: Failed — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 361: Undeclared variable \"ApplicationException\" in expression: ApplicationException — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 88: String.Format() has unbalanced parentheses in expression: String.Format(&quot;[Finalize][RunId={0}] Finalization started. SentCount={1}, S...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 88: .Format() has unbalanced parentheses in expression: String.Format(&quot;[Finalize][RunId={0}] Finalization started. SentCount={1}, S...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 127: String.Join() expects 2 argument(s) but got 12 in expression: String.Format(\"{{{0}}}\", String.Join(\",\", New String() { String.Format(\"\\\"runId\\...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 204: String.Format() has unbalanced parentheses in expression: String.Format(&quot;[Finalize][RunId={0}] Data Service update outcome: Success={...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 204: .Format() has unbalanced parentheses in expression: String.Format(&quot;[Finalize][RunId={0}] Data Service update outcome: Success={...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 261: Adjacent identifiers \"upload FAILED(\" — possible missing operator or comma in expression: String.Format(&quot;[Finalize][RunId={0}] Storage Bucket upload FAILED (non-fata...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 275: String.Format() expects 2-10 argument(s) but got 13 in expression: String.Format(\"[Finalize][SLA-METRICS][RunId={0}] FinalStatus={1} | TotalEvents=...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV12.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 347: Undeclared variable \"c\" in expression: If(str_CurrentFullName.Contains(\" \"), str_CurrentFullName.Sp... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 361: Variable \"obj_QueueItem\" (System.Object) bound to ui:SetTransactionStatus.TransactionItem (expects UiPath.Core.QueueItem). Retype the variable to a concrete collection type.",
      "classifiedCheck": "OBJECT_TO_IENUMERABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"[Normal]\" for \"Priority\" on ui:AddQueueItem — valid values: Low, Normal, High. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Dispatcher.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"[Failed]\" for \"Status\" on ui:SetTransactionStatus — valid values: Successful, Failed. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Performer.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"[ApplicationException]\" for \"ErrorType\" on ui:SetTransactionStatus — valid values: Application, Business. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Performer.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"WorkbookPath\" on uexcel:ExcelApplicationScope must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in InitAllSettings.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"DataTable\" on uexcel:ExcelReadRange must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in InitAllSettings.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "Main.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in Main.xaml — ensure proper nesting and closing tags",
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
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Main.xaml",
      "detail": "Contains 8 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Main.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Init.xaml",
      "detail": "Contains 2 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Contains 9 placeholder value(s) matching \"\\bPLACEHOLDER\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 11 placeholder value(s) matching \"\\bPLACEHOLDER\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bPLACEHOLDER\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessEvent.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.CalendarName&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.Timezone&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.FromGmailConnectionName&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.MaxConnectorRetries&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.RetryBackoffSeconds&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.SkipOnAmbiguousContactMatch&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.PreferredEmailLabels&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.SendEnabled&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.OperationsDL&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"&quot;BGV12.GoogleWorkspaceCredential&quot;\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "potentially-null-dereference",
      "file": "Dispatcher.xaml",
      "detail": "Line 207: \"obj_CurrentRow.Table\" accessed without visible null guard in scope — verify null check exists in enclosing If/TryCatch",
      "severity": "warning"
    },
    {
      "check": "potentially-null-dereference",
      "file": "Dispatcher.xaml",
      "detail": "Line 215: \"obj_CurrentRow.Table\" accessed without visible null guard in scope — verify null check exists in enclosing If/TryCatch",
      "severity": "warning"
    },
    {
      "check": "potentially-null-dereference",
      "file": "Dispatcher.xaml",
      "detail": "Line 223: \"obj_CurrentRow.Table\" accessed without visible null guard in scope — verify null check exists in enclosing If/TryCatch",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 139: asset name \"&quot;BGV12.CalendarName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 197: asset name \"&quot;BGV12.Timezone&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 255: asset name \"&quot;BGV12.FromGmailConnectionName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 313: asset name \"&quot;BGV12.MaxConnectorRetries&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 371: asset name \"&quot;BGV12.RetryBackoffSeconds&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 429: asset name \"&quot;BGV12.SkipOnAmbiguousContactMatch&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 487: asset name \"&quot;BGV12.PreferredEmailLabels&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 545: asset name \"&quot;BGV12.SendEnabled&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 603: asset name \"&quot;BGV12.OperationsDL&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 661: asset name \"&quot;BGV12.GoogleWorkspaceCredential&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 198: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 208: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 483: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 198: retry interval hardcoded as \"TimeSpan.FromSeconds(retryBackoffSeconds)\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 208: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GetTodayBirthdays.xaml",
      "detail": "Line 483: retry interval hardcoded as \"TimeSpan.FromSeconds(retryBackoffSeconds)\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 290: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 300: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 303: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 290: retry interval hardcoded as \"TimeSpan.FromSeconds(retryBackoffSeconds)\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 300: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 303: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Performer.xaml",
      "detail": "Line 411: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Performer.xaml",
      "detail": "Line 421: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Performer.xaml",
      "detail": "Line 411: retry interval hardcoded as \"TimeSpan.FromSeconds(retryBackoffSeconds)\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Performer.xaml",
      "detail": "Line 421: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 166: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 176: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 179: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 233: retry count hardcoded as 2 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Finalize.xaml",
      "detail": "Line 243: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 166: retry interval hardcoded as \"00:00:10\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 176: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 179: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 233: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Finalize.xaml",
      "detail": "Line 243: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 107: asset name \"BGV12.GoogleWorkspaceCredential\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 119: asset name \"BGV12.CalendarName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 128: asset name \"BGV12.Timezone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 137: asset name \"BGV12.FromGmailConnectionName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 146: asset name \"BGV12.MaxConnectorRetries\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 155: asset name \"BGV12.RetryBackoffSeconds\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 164: asset name \"BGV12.SkipOnAmbiguousContactMatch\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 173: asset name \"BGV12.PreferredEmailLabels\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 182: asset name \"BGV12.SendEnabled\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 191: asset name \"BGV12.OperationsDL\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Main.xaml",
      "detail": "Line 195: C# '+' for string concatenation should be VB.NET '&' in expression: initEx.GetType().Name + \": \" + initEx.Message",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Main.xaml",
      "detail": "Line 276: C# '+' for string concatenation should be VB.NET '&' in expression: getBirthdaysEx.GetType().Name + \": \" + getBirthdaysEx.Message",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Main.xaml",
      "detail": "Line 388: C# '+' for string concatenation should be VB.NET '&' in expression: dispatcherEx.GetType().Name + \": \" + dispatcherEx.Message",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Main.xaml",
      "detail": "Line 414: C# '+' for string concatenation should be VB.NET '&' in expression: topLevelEx.GetType().Name + \": \" + topLevelEx.Message",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Dispatcher.xaml",
      "detail": "Line 427: C# '+' for string concatenation should be VB.NET '&' in expression: \"OrchestratorHttpException (non-409): \" + exception.Message",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Finalize.xaml",
      "detail": "Line 88: Removed 1 extra closing parenthesis(es) in expression: String.Format(&quot;[Finalize][RunId={0}] Finalization started. SentCount={1}, S...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Finalize.xaml",
      "detail": "Line 204: Removed 1 extra closing parenthesis(es) in expression: String.Format(&quot;[Finalize][RunId={0}] Data Service update outcome: Success={...",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Main.xaml",
      "detail": "Line 78: Auto-repaired — changed variable \"dt_JobStartTimeUtc\" type from s:DateTime to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Main.xaml",
      "detail": "Line 183: Auto-repaired — changed variable \"bool_JobFaulted\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Main.xaml",
      "detail": "Line 191: Auto-repaired — changed variable \"str_FatalExceptionMessage\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Main.xaml",
      "detail": "Line 290: Auto-repaired — changed variable \"str_FinalizeStatus\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Init.xaml",
      "detail": "Line 80: Auto-repaired — changed variable \"dt_TriggeredAtUtc\" type from s:DateTime to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Init.xaml",
      "detail": "Line 88: Auto-repaired — changed variable \"str_RunId\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Init.xaml",
      "detail": "Line 97: Auto-repaired — changed variable \"dict_ConfigDictionary\" type from scg:Dictionary(x:String, x:Object) to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Init.xaml",
      "detail": "Line 126: Auto-repaired — changed variable \"str_AssetKeyBeingLoaded\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Init.xaml",
      "detail": "Line 764: Auto-repaired — changed variable \"dt_RunDateDubai\" type from s:DateTime to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 97: Auto-repaired — changed variable \"int_MaxConnectorRetries\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 105: Auto-repaired — changed variable \"int_RetryBackoffSeconds\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 113: Auto-repaired — changed variable \"str_RunDateDubai\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 121: Auto-repaired — changed variable \"int_TotalEventCount\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 203: Auto-repaired — changed variable \"str_CurrentFullName\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 211: Auto-repaired — changed variable \"str_CurrentEventId\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 219: Auto-repaired — changed variable \"str_CurrentEventStartDubai\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 236: Auto-repaired — changed variable \"int_FailedEnqueueCount\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 245: Auto-repaired — changed variable \"str_QueueItemReference\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 254: Auto-repaired — changed variable \"dict_QueueItemContent\" type from scg:Dictionary(x:String, x:Object) to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 283: Auto-repaired — changed variable \"bool_IsDuplicateReference\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 376: Auto-repaired — changed variable \"int_SkippedDuplicateCount\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 423: Auto-repaired — changed variable \"str_EnqueueExceptionMessage\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 306: Type mismatch — variable \"str_QueueItemReference\" (System.Object) bound to ui:AddQueueItem.Reference (expects System.String). No known conversion from System.Object to System.String — review the variable type or activity property",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Dispatcher.xaml",
      "detail": "Line 306: Auto-repaired — changed variable \"obj_EnqueueResult\" type from x:Object to System.Collections.Generic.Dictionary`2[System.String,System.Object] to match ui:AddQueueItem.ItemInformation (System.Collections.Generic.Dictionary`2[System.String,System.Object])",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 81: Auto-repaired — changed variable \"dt_FinalizationStartedAt\" type from s:DateTime to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 91: Auto-repaired — changed variable \"int_TotalEventsProcessed\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 99: Auto-repaired — changed variable \"bool_HasAnyFailures\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 107: Auto-repaired — changed variable \"bool_HasOnlySkips\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 123: Auto-repaired — changed variable \"str_RunSummaryJson\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 131: Auto-repaired — changed variable \"str_RunSummaryFileName\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 139: Auto-repaired — changed variable \"str_RunSummaryBucketPath\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 196: Auto-repaired — changed variable \"bool_DataServiceUpdateSuccess\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 254: Auto-repaired — changed variable \"bool_StorageUploadSuccess\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 263: Auto-repaired — changed variable \"int_FinalizationDurationSeconds\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "Finalize.xaml",
      "detail": "Line 271: Auto-repaired — changed variable \"str_SlaMetricsLogMessage\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 120: Auto-repaired — changed variable \"dt_JobStartTimeUtc\" type from s:DateTime to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 184: Auto-repaired — changed variable \"bool_JobFaulted\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 192: Auto-repaired — changed variable \"str_FatalExceptionMessage\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 200: Auto-repaired — changed variable \"str_FatalExceptionType\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 241: Auto-repaired — changed variable \"bool_AnyBirthdaysToday\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 285: Auto-repaired — changed variable \"str_FinalizeStatus\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 319: Auto-repaired — changed variable \"str_CurrentFullName\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 327: Auto-repaired — changed variable \"str_CurrentEventId\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 335: Auto-repaired — changed variable \"str_CurrentEventStart\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 343: Auto-repaired — changed variable \"str_FirstName\" type from x:String to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 379: Auto-repaired — changed variable \"int_EnqueuedCount\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 398: Auto-repaired — changed variable \"int_ErrorCount\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 437: Auto-repaired — changed variable \"bool_DispatcherSuccess\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 452: Auto-repaired — changed variable \"int_JobElapsedSeconds\" type from x:Int32 to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    },
    {
      "check": "TYPE_MISMATCH",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 494: Auto-repaired — changed variable \"bool_FinalizeSuccess\" type from x:Boolean to x:Object to match Assign.To (System.Object)",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 495,
  "studioCompatibility": [
    {
      "file": "Main.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Init.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[undeclared-variable] Line 141: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 199: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 257: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 315: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 373: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 431: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 489: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 547: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 605: variable \"str_AssetValue\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 663: variable \"str_AssetValue\" is used in expression but not declared in this workflow"
      ]
    },
    {
      "file": "GetTodayBirthdays.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
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
      "file": "Performer.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected"
      ],
      "failureCategory": "expression-syntax",
      "failureSummary": "Expression syntax errors that could not be auto-corrected"
    },
    {
      "file": "Finalize.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected"
      ],
      "failureCategory": "expression-syntax",
      "failureSummary": "Expression syntax errors that could not be auto-corrected"
    },
    {
      "file": "BirthdayGreetingsV12.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "InitAllSettings.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "ProcessEvent.xaml",
      "level": "studio-warnings",
      "blockers": []
    }
  ],
  "preEmissionValidation": {
    "totalActivities": 269,
    "validActivities": 264,
    "unknownActivities": 4,
    "strippedProperties": 112,
    "enumCorrections": 20,
    "missingRequiredFilled": 71,
    "commentConversions": 4,
    "issueCount": 164
  }
}
```
