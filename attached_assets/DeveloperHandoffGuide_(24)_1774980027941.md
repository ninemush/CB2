# Developer Handoff Guide

**Project:** BirthdayGreetingsV12
**Generated:** 2026-03-31
**Generation Mode:** Full Implementation
**Deployment Readiness:** Not Ready (34%)

**Total Estimated Effort: ~580 minutes (9.7 hours)**
**Remediations:** 44 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 1 workflow)
**Auto-Repairs:** 14
**Quality Warnings:** 96

---

## 1. Completed Work

The following 10 workflow(s) were fully generated without any stub replacements or remediation:

- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `SetTransactionStatus.xaml`
- `CloseAllApplications.xaml`
- `KillAllProcesses.xaml`
- `[GetTodayBirthdays.xaml]`
- `[ContactLookup.xaml]`
- `[MessageComposer.xaml]`
- `[EmailSender.xaml]`
- `AgentInvocation_Stub.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Dispatcher.xaml` | Fully Generated |
| 2 | `Performer.xaml` | Fully Generated |
| 3 | `ContactLookup.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 355: Possible missing comma or operator between ")" and "r(" — check expression syntax in expression: CInt(obj_ParsedSearchResponse("results").Where(Function(r) r("person")("names") ...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 433: Possible missing comma or operator between ")" and "r(" — check expression syntax in expression: obj_ParsedSearchResponse("results").Where(Function(r) r("person")("names") IsNot... |
| 4 | `MessageComposer.xaml` | Fully Generated |
| 5 | `EmailSender.xaml` | Fully Generated |
| 6 | `Finalize.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 116: Unbalanced parentheses: 6 open vs 9 close (diff: -3) | max nesting depth: 1, first imbalance near position 569, fragment: "\  ,    ))) &amp;    }"" in expression: "{\"RunId\":\"" &amp; CStr(In_RunId) &amp; "\",\"Status\":\"" &amp; CStr(str_Res... |
| 7 | `BirthdayGreetingsV12.xaml` | Fully Generated |
| 8 | `Process.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 90: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No; [EXPRESSION_SYNTAX_UNFIXABLE] Line 109: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No |
| 9 | `InitAllSettings.xaml` | Fully Generated |
| 10 | `Main.xaml` | Fully Generated |
| 11 | `GetTransactionData.xaml` | Fully Generated |
| 12 | `SetTransactionStatus.xaml` | Fully Generated |
| 13 | `CloseAllApplications.xaml` | Fully Generated |
| 14 | `KillAllProcesses.xaml` | Fully Generated |
| 15 | `Init.xaml` | Fully Generated |
| 16 | `[GetTodayBirthdays.xaml].xaml` | Fully Generated |
| 17 | `[ContactLookup.xaml].xaml` | Fully Generated |
| 18 | `[MessageComposer.xaml].xaml` | Fully Generated |
| 19 | `[EmailSender.xaml].xaml` | Fully Generated |
| 20 | `AgentInvocation_Stub.xaml` | Fully Generated |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Dispatcher.xaml` | Openable with warnings | Unclassified | — |
| 2 | `Performer.xaml` | Openable with warnings | Unclassified | — |
| 3 | `ContactLookup.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 355: Possible missing comma or operator be...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 433: Possible missing comma or operator be... |
| 4 | `MessageComposer.xaml` | Openable with warnings | Unclassified | — |
| 5 | `EmailSender.xaml` | Openable with warnings | Unclassified | — |
| 6 | `Finalize.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 116: Unbalanced parentheses: 6 open vs 9 c... |
| 7 | `BirthdayGreetingsV12.xaml` | Studio-openable | — | — |
| 8 | `Process.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 90: Standalone word "No" may be an undecla...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 109: Standalone word "No" may be an undecl...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 214: Standalone word "Yes" may be an undec... |
| 9 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 10 | `Main.xaml` | Openable with warnings | Unclassified | — |
| 11 | `GetTransactionData.xaml` | Studio-openable | — | — |
| 12 | `SetTransactionStatus.xaml` | Studio-openable | — | — |
| 13 | `CloseAllApplications.xaml` | Studio-openable | — | — |
| 14 | `KillAllProcesses.xaml` | Studio-openable | — | — |
| 15 | `Init.xaml` | Openable with warnings | Unclassified | — |
| 16 | `[GetTodayBirthdays.xaml]` | Openable with warnings | Unclassified | — |
| 17 | `[ContactLookup.xaml]` | Openable with warnings | Unclassified | — |
| 18 | `[MessageComposer.xaml]` | Openable with warnings | Unclassified | — |
| 19 | `[EmailSender.xaml]` | Openable with warnings | Unclassified | — |
| 20 | `AgentInvocation_Stub.xaml` | Openable with warnings | Unclassified | — |

**Summary:** 6 Studio-loadable, 11 with warnings, 3 not Studio-loadable

> **⚠ 3 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 355: Possible missing comma or operator between ")" and "r(" — check expression syntax in expression: CInt(obj_ParsedSearchResponse("results").Where(Function(r) r("person")("names") ...; [EXPRESSION_SYNTAX_UNFIXABLE] Line 433: Possible missing comma or operator between ")" and "r(" — check expression syntax in expression: obj_ParsedSearchResponse("results").Where(Function(r) r("person")("names") IsNot...: 1 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 116: Unbalanced parentheses: 6 open vs 9 close (diff: -3) | max nesting depth: 1, first imbalance near position 569, fragment: "\  ,    ))) &amp;    }"" in expression: "{\"RunId\":\"" &amp; CStr(In_RunId) &amp; "\",\"Status\":\"" &amp; CStr(str_Res...: 1 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 90: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No; [EXPRESSION_SYNTAX_UNFIXABLE] Line 109: Standalone word "No" may be an undeclared variable — should it be a string literal "No"? in expression: No: 1 workflow(s)

## 2. AI-Resolved with Smart Defaults

The following 14 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Dispatcher.xaml` | Stripped 1 placeholder token(s) from Dispatcher.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `ContactLookup.xaml` | Stripped 1 placeholder token(s) from ContactLookup.xaml | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `MessageComposer.xaml` | Stripped 2 placeholder token(s) from MessageComposer.xaml | 5 |
| 4 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `Dispatcher.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml | undefined |
| 5 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `MessageComposer.xaml` | Catalog: Moved While.Condition from attribute to child-element in MessageComposer.xaml | undefined |
| 6 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `BirthdayGreetingsV12.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in BirthdayGreetingsV12.xaml | undefined |
| 7 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelApplicationScope.WorkbookPath from attribute to child-element in InitA... | undefined |
| 8 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings... | undefined |
| 9 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved uexcel:ExcelReadRange.DataTable from attribute to child-element in InitAllSettings... | undefined |
| 10 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 11 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Username from attribute to child-element in InitAllSettings.xaml | undefined |
| 12 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Password from attribute to child-element in InitAllSettings.xaml | undefined |
| 13 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 14 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `GetTransactionData.xaml` | Catalog: Moved ui:GetTransactionItem.TransactionItem from attribute to child-element in GetTransa... | undefined |

## 3. Manual Action Required

### Validation Issues — Requires Manual Attention (43)

The following issues were detected by the quality gate and require developer review. No automated remediation was applied — workflows are preserved as-generated.

| # | File | Check | Developer Action | Est. Minutes |
|---|------|-------|-----------------|-------------|
| 1 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 2 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 3 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 4 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 5 | `ContactLookup.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 6 | `ContactLookup.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 7 | `ContactLookup.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 8 | `ContactLookup.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 9 | `ContactLookup.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 10 | `ContactLookup.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in ContactLookup.xaml — estimated 15 min | 15 |
| 11 | `MessageComposer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in MessageComposer.xaml — estimated 15 min | 15 |
| 12 | `MessageComposer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in MessageComposer.xaml — estimated 15 min | 15 |
| 13 | `EmailSender.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 14 | `EmailSender.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 15 | `EmailSender.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 16 | `EmailSender.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EmailSender.xaml — estimated 15 min | 15 |
| 17 | `Finalize.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 18 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 19 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 20 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 21 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 22 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 23 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 24 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 25 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 26 | `BirthdayGreetingsV12.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min | 15 |
| 27 | `BirthdayGreetingsV12.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min | 15 |
| 28 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 29 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 30 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 31 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 32 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 33 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 34 | `Process.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 35 | `Process.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 36 | `Dispatcher.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Dispatcher.xaml — use valid enum from UiPath d... | 5 |
| 37 | `Performer.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Performer.xaml — use valid enum from UiPath do... | 5 |
| 38 | `Performer.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Performer.xaml — use valid enum from UiPath do... | 5 |
| 39 | `ContactLookup.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in ContactLookup.xaml — use valid enum from UiPat... | 5 |
| 40 | `EmailSender.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in EmailSender.xaml — use valid enum from UiPath ... | 5 |
| 41 | `Finalize.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Finalize.xaml — use valid enum from UiPath doc... | 5 |
| 42 | `Finalize.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Finalize.xaml — use valid enum from UiPath doc... | 5 |
| 43 | `Finalize.xaml` | `ENUM_VIOLATION` | Fix enum value for activity in Finalize.xaml — use valid enum from UiPath doc... | 5 |

### Workflow-Level Stubs (1)

Entire workflows were replaced with Studio-openable stubs (XAML was not parseable for structural preservation).

| # | File | Code | Developer Action | Est. Minutes |
|---|------|------|-----------------|-------------|
| 1 | `Main.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement Entry point. Loads Orchestrator assets into a config dictiona... | 15 |

### Developer Implementation Required (18)

These placeholders represent intentional handoff points where developer implementation is expected.

| # | File | Detail | Est. Minutes |
|---|------|--------|-------------|
| 1 | `Dispatcher.xaml` | Contains 4 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 2 | `Dispatcher.xaml` | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 3 | `Performer.xaml` | Contains 6 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 4 | `Performer.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 5 | `ContactLookup.xaml` | Contains 6 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 6 | `ContactLookup.xaml` | Contains 6 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 7 | `MessageComposer.xaml` | Contains 7 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 8 | `MessageComposer.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 9 | `EmailSender.xaml` | Contains 6 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 10 | `EmailSender.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 11 | `Finalize.xaml` | Contains 7 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 12 | `Finalize.xaml` | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 13 | `Process.xaml` | Contains 12 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 14 | `[GetTodayBirthdays.xaml]` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 15 | `[ContactLookup.xaml]` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 16 | `[MessageComposer.xaml]` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 17 | `[EmailSender.xaml]` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 18 | `AgentInvocation_Stub.xaml` | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |

### Quality Warnings (78)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `Dispatcher.xaml` | hardcoded-retry-count | Line 161: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 2 | `Dispatcher.xaml` | hardcoded-retry-count | Line 169: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 3 | `Dispatcher.xaml` | hardcoded-retry-count | Line 174: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 4 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 161: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 5 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 169: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 6 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 174: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 7 | `Dispatcher.xaml` | hardcoded-queue-name | Line 345: queue name "BirthdayGreetingsV12_EmailsToSend" is hardcoded — consider using a Config.x... | — | undefined |
| 8 | `ContactLookup.xaml` | hardcoded-retry-count | Line 143: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 9 | `ContactLookup.xaml` | hardcoded-retry-interval | Line 143: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 10 | `EmailSender.xaml` | hardcoded-retry-count | Line 139: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 11 | `EmailSender.xaml` | hardcoded-retry-count | Line 294: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 12 | `EmailSender.xaml` | hardcoded-retry-count | Line 299: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 13 | `EmailSender.xaml` | hardcoded-retry-interval | Line 139: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 14 | `EmailSender.xaml` | hardcoded-retry-interval | Line 294: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 15 | `EmailSender.xaml` | hardcoded-retry-interval | Line 299: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 16 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-count | Line 558: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 17 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-count | Line 684: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 18 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-count | Line 848: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 19 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-interval | Line 558: retry interval hardcoded as "00:00:10" — consider externalizing to Config.xlsx | — | undefined |
| 20 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-interval | Line 684: retry interval hardcoded as "00:00:10" — consider externalizing to Config.xlsx | — | undefined |
| 21 | `BirthdayGreetingsV12.xaml` | hardcoded-retry-interval | Line 848: retry interval hardcoded as "00:00:10" — consider externalizing to Config.xlsx | — | undefined |
| 22 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 169: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 23 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 211: asset name "&quot;BGV12.Timezone&quot;" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 24 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 253: asset name "&quot;BGV12.FromGmailConnectionName&quot;" is hardcoded — consider using a ... | — | undefined |
| 25 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 295: asset name "&quot;BGV12.MaxConnectorRetries&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 26 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 337: asset name "&quot;BGV12.RetryBackoffSeconds&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 27 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 379: asset name "&quot;BGV12.SkipOnAmbiguousContactMatch&quot;" is hardcoded — consider usin... | — | undefined |
| 28 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 421: asset name "&quot;BGV12.PreferredEmailLabels&quot;" is hardcoded — consider using a Con... | — | undefined |
| 29 | `BirthdayGreetingsV12.xaml` | hardcoded-asset-name | Line 463: asset name "&quot;BGV12.SendEnabled&quot;" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 30 | `Process.xaml` | hardcoded-retry-count | Line 118: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 31 | `Process.xaml` | hardcoded-retry-count | Line 164: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 32 | `Process.xaml` | hardcoded-retry-count | Line 223: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 33 | `Process.xaml` | hardcoded-retry-count | Line 269: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 34 | `Process.xaml` | hardcoded-retry-count | Line 377: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 35 | `Process.xaml` | hardcoded-retry-interval | Line 118: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 36 | `Process.xaml` | hardcoded-retry-interval | Line 164: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 37 | `Process.xaml` | hardcoded-retry-interval | Line 223: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 38 | `Process.xaml` | hardcoded-retry-interval | Line 269: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 39 | `Process.xaml` | hardcoded-retry-interval | Line 377: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 40 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 118: asset name "BGV12.GoogleWorkspaceCredential" is hardcoded — consider using a Config.xls... | — | undefined |
| 41 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 130: asset name "BGV12.CalendarName" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 42 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 139: asset name "BGV12.Timezone" is hardcoded — consider using a Config.xlsx entry or workfl... | — | undefined |
| 43 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 148: asset name "BGV12.FromGmailConnectionName" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 44 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 157: asset name "BGV12.MaxConnectorRetries" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 45 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 166: asset name "BGV12.RetryBackoffSeconds" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 46 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 175: asset name "BGV12.SkipOnAmbiguousContactMatch" is hardcoded — consider using a Config.x... | — | undefined |
| 47 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 184: asset name "BGV12.PreferredEmailLabels" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 48 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 193: asset name "BGV12.SendEnabled" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 49 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 202: asset name "BGV12.OperationsDL" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 50 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wr... | — | undefined |
| 51 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "Constants" for uexcel:ExcelReadRange.SheetName (expected String type) — w... | — | undefined |
| 52 | `KillAllProcesses.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "chrome" for ui:KillProcess.ProcessName (expected String type) — wrapped i... | — | undefined |
| 53 | `KillAllProcesses.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "iexplore" for ui:KillProcess.ProcessName (expected String type) — wrapped... | — | undefined |
| 54 | `KillAllProcesses.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "EXCEL" for ui:KillProcess.ProcessName (expected String type) — wrapped in... | — | undefined |
| 55 | `Dispatcher.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 56 | `Dispatcher.xaml` | CATALOG_VIOLATION | Missing required property "JsonString" on uweb:DeserializeJson | — | undefined |
| 57 | `Dispatcher.xaml` | CATALOG_VIOLATION | Missing required property "Result" on uweb:DeserializeJson | — | undefined |
| 58 | `Performer.xaml` | CATALOG_VIOLATION | Missing required property "Input" on ucrypt:HashText | — | undefined |
| 59 | `ContactLookup.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 60 | `ContactLookup.xaml` | CATALOG_VIOLATION | Missing required property "JsonString" on uweb:DeserializeJson | — | undefined |
| 61 | `ContactLookup.xaml` | CATALOG_VIOLATION | Missing required property "Result" on uweb:DeserializeJson | — | undefined |
| 62 | `MessageComposer.xaml` | CATALOG_VIOLATION | Missing required property "Prompt" on ugenai:UseGenAI | — | undefined |
| 63 | `MessageComposer.xaml` | CATALOG_VIOLATION | Missing required property "JsonString" on uweb:DeserializeJson | — | undefined |
| 64 | `MessageComposer.xaml` | CATALOG_VIOLATION | Missing required property "Result" on uweb:DeserializeJson | — | undefined |
| 65 | `EmailSender.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 66 | `Finalize.xaml` | CATALOG_VIOLATION | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest | — | undefined |
| 67 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 68 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 69 | `Dispatcher.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 70 | `ContactLookup.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 71 | `EmailSender.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 72 | `EmailSender.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 73 | `EmailSender.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 74 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 75 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 76 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 77 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 78 | `Process.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |

**Total manual remediation effort: ~580 minutes (9.7 hours)**

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
| 8 | `UiPath.Cryptography.Activities` |
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
| 1 | `BGV12.CalendarName` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 2 | `BGV12.Timezone` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 3 | `BGV12.FromGmailConnectionName` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 4 | `BGV12.MaxConnectorRetries` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 5 | `BGV12.RetryBackoffSeconds` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 7 | `BGV12.PreferredEmailLabels` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 8 | `BGV12.SendEnabled` | Unknown | — | `BirthdayGreetingsV12.xaml` | Create in Orchestrator before deployment |
| 9 | `BGV12.OperationsDL` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `BirthdayGreetingsV12.xaml` | 169 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 170 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 211 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 212 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 253 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 254 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 295 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 296 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 337 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 338 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 379 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 380 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 421 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 422 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV12.xaml` | 463 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `BirthdayGreetingsV12.xaml` | 464 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 120 | GetCredential | `BGV12.GoogleWorkspaceCredential` | Credential | — | Yes |
| `InitAllSettings.xaml` | 121 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 124 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 132 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 133 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 141 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 142 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 150 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 151 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 159 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 160 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 168 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 169 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 177 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 178 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 186 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 187 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 195 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 196 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 204 | GetAsset | `BGV12.OperationsDL` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 205 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 18 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 10 aligned, 1 SDD-only, 2 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 2 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV12.CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name containing birthday events. | `BirthdayGreetingsV12.xaml` | 169 |
| 2 | `BGV12.Timezone` | asset | **Aligned** | type: Text, value: Asia/Dubai, description: Authoritative timezone for 'today' evaluation and schedule alignment. | `BirthdayGreetingsV12.xaml` | 211 |
| 3 | `BGV12.FromGmailConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used to send greetings. | `BirthdayGreetingsV12.xaml` | 253 |
| 4 | `BGV12.MaxConnectorRetries` | asset | **Aligned** | type: Integer, value: 3, description: Max retries for transient Integration Service connector failures (Calendar/People/Gmail). | `BirthdayGreetingsV12.xaml` | 295 |
| 5 | `BGV12.RetryBackoffSeconds` | asset | **Aligned** | type: Integer, value: 10, description: Backoff delay between transient retries. | `BirthdayGreetingsV12.xaml` | 337 |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | asset | **Aligned** | type: Bool, value: true, description: If multiple contacts match the same name, skip to avoid mis-send; log as business exception. | `BirthdayGreetingsV12.xaml` | 379 |
| 7 | `BGV12.PreferredEmailLabels` | asset | **Aligned** | type: Text, value: personal,home, description: Comma-separated preferred email labels (case-insensitive). | `BirthdayGreetingsV12.xaml` | 421 |
| 8 | `BGV12.SendEnabled` | asset | **Aligned** | type: Bool, value: true, description: Master kill-switch for outbound email sending (when false, generate content but do not send). | `BirthdayGreetingsV12.xaml` | 463 |
| 9 | `BGV12.OperationsDL` | asset | **Aligned** | type: Text, value: , description: Optional distribution list to receive failure notifications (left blank as PDD states no notifications). | `InitAllSettings.xaml` | 204 |
| 10 | `BGV12.GoogleWorkspaceCredential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for break-glass scenarios; primary auth is via Integration Service connections. | `InitAllSettings.xaml` | 120 |
| 11 | `BirthdayGreetingsV12_EmailsToSend` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Work queue for birthday greeting email dispatch items (one per birthday event/person). Supports retry and controlled execution telemetry. | — | — |
| 12 | `&quot;BirthdayGreetingsV12_EmailsToSend&quot;` | queue | **XAML Only** | — | `Dispatcher.xaml` | 345 |
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

**Coverage:** 19/44 high-risk activities inside TryCatch (43%)

### Files Without TryCatch

- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `KillAllProcesses.xaml`
- `[GetTodayBirthdays.xaml]`
- `[ContactLookup.xaml]`
- `[MessageComposer.xaml]`
- `[EmailSender.xaml]`
- `AgentInvocation_Stub.xaml`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `InitAllSettings.xaml:120` | Get BGV12.GoogleWorkspaceCredential |
| 2 | `InitAllSettings.xaml:121` | ui:GetCredential |
| 3 | `InitAllSettings.xaml:124` | ui:GetCredential |
| 4 | `InitAllSettings.xaml:132` | Get BGV12.CalendarName |
| 5 | `InitAllSettings.xaml:133` | ui:GetAsset |
| 6 | `InitAllSettings.xaml:141` | Get BGV12.Timezone |
| 7 | `InitAllSettings.xaml:142` | ui:GetAsset |
| 8 | `InitAllSettings.xaml:150` | Get BGV12.FromGmailConnectionName |
| 9 | `InitAllSettings.xaml:151` | ui:GetAsset |
| 10 | `InitAllSettings.xaml:159` | Get BGV12.MaxConnectorRetries |
| 11 | `InitAllSettings.xaml:160` | ui:GetAsset |
| 12 | `InitAllSettings.xaml:168` | Get BGV12.RetryBackoffSeconds |
| 13 | `InitAllSettings.xaml:169` | ui:GetAsset |
| 14 | `InitAllSettings.xaml:177` | Get BGV12.SkipOnAmbiguousContactMatch |
| 15 | `InitAllSettings.xaml:178` | ui:GetAsset |
| 16 | `InitAllSettings.xaml:186` | Get BGV12.PreferredEmailLabels |
| 17 | `InitAllSettings.xaml:187` | ui:GetAsset |
| 18 | `InitAllSettings.xaml:195` | Get BGV12.SendEnabled |
| 19 | `InitAllSettings.xaml:196` | ui:GetAsset |
| 20 | `InitAllSettings.xaml:204` | Get BGV12.OperationsDL |
| 21 | `InitAllSettings.xaml:205` | ui:GetAsset |
| 22 | `GetTransactionData.xaml:63` | Get Queue Item |
| 23 | `GetTransactionData.xaml:64` | ui:GetTransactionItem |
| 24 | `SetTransactionStatus.xaml:68` | Set Success |
| 25 | `SetTransactionStatus.xaml:90` | Set Failed |

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
| placeholder-value | warning | 18 | Contains 4 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] |
| hardcoded-retry-count | warning | 15 | Line 161: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| hardcoded-retry-interval | warning | 15 | Line 161: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx |
| hardcoded-queue-name | warning | 1 | Line 345: queue name "BirthdayGreetingsV12_EmailsToSend" is hardcoded — consider using a Config.xlsx entry or workflow a... |
| hardcoded-asset-name | warning | 18 | Line 169: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx entry or workflow argu... |
| BARE_TOKEN_QUOTED | warning | 5 | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quot... |
| CATALOG_VIOLATION | warning | 12 | Missing required property "Endpoint" on uis:IntegrationServiceHTTPRequest |
| RETRY_INTERVAL_DEFAULTED | warning | 12 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

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
| Exception Handling | 2/10 | Only 43% of high-risk activities covered by TryCatch; 8 file(s) with no TryCatch blocks |
| Queue Management | 9/10 | 1 hardcoded queue name(s) — externalize to config |
| Build Quality | 0/10 | 96 quality warnings — significant remediation needed; 44 remediations — stub replacements need developer attention; 17/20 workflow(s) are Studio-loadable (3 blocked — 15% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 304 |
| Valid activities | 304 |
| Unknown → Comment stubs | 0 |
| Non-catalog properties stripped | 34 |
| Enum values auto-corrected | 0 |
| Missing required props filled | 3 |
| Total issues | 33 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 37 auto-fixed, 33 total issues |
| Post-emission (quality gate) | 140 warnings/remediations |

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
    "[GetTodayBirthdays.xaml]",
    "[ContactLookup.xaml]",
    "[MessageComposer.xaml]",
    "[EmailSender.xaml]",
    "AgentInvocation_Stub.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Dispatcher.xaml",
      "description": "Stripped 1 placeholder token(s) from Dispatcher.xaml",
      "developerAction": "Review Dispatcher.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "ContactLookup.xaml",
      "description": "Stripped 1 placeholder token(s) from ContactLookup.xaml",
      "developerAction": "Review ContactLookup.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "MessageComposer.xaml",
      "description": "Stripped 2 placeholder token(s) from MessageComposer.xaml",
      "developerAction": "Review MessageComposer.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "Dispatcher.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "MessageComposer.xaml",
      "description": "Catalog: Moved While.Condition from attribute to child-element in MessageComposer.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "BirthdayGreetingsV12.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in BirthdayGreetingsV12.xaml"
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
    }
  ],
  "remediations": [
    {
      "level": "workflow",
      "file": "Main.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — assetName.startsWith is not a function",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement Entry point. Loads Orchestrator assets into a config dictionary, initializes the Data Service run record, invokes the Dispatcher to fetch and enqueue today's birthday events, then invokes Finalize to close the run record. Wraps the full run in a top-level TryCatch to set run Status to Faulted on unhandled system exceptions.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 78: Undeclared variable \"Asia\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 78: Undeclared variable \"Dubai\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 248: Undeclared variable \"Matched\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 392: Undeclared variable \"From\" in expression: New Dictionary(Of String, Object) From {{&quot;ItemId&quot;,... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 89: Undeclared variable \"https\" in expression: https://people.googleapis.com/v1/people:searchContacts — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 89: Undeclared variable \"people\" in expression: https://people.googleapis.com/v1/people:searchContacts — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 89: Undeclared variable \"v1\" in expression: https://people.googleapis.com/v1/people:searchContacts — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 89: Undeclared variable \"searchContacts\" in expression: https://people.googleapis.com/v1/people:searchContacts — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 355: Possible missing comma or operator between \")\" and \"r(\" — check expression syntax in expression: CInt(obj_ParsedSearchResponse(\"results\").Where(Function(r) r(\"person\")(\"names\") ...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 433: Possible missing comma or operator between \")\" and \"r(\" — check expression syntax in expression: obj_ParsedSearchResponse(\"results\").Where(Function(r) r(\"person\")(\"names\") IsNot...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in ContactLookup.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageComposer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 108: Undeclared variable \"subject\" in expression: \"Write a short birthday email in my voice: warm, funny, sarc... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageComposer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageComposer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 108: Undeclared variable \"body\" in expression: \"Write a short birthday email in my voice: warm, funny, sarc... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageComposer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 253: Undeclared variable \"unauthorized\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 253: Undeclared variable \"forbidden\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 253: Undeclared variable \"invalid_grant\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 309: Undeclared variable \"Pending\" in expression: str_SendOutcomeLocal = Pending — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EmailSender.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Unbalanced parentheses: 6 open vs 9 close (diff: -3) | max nesting depth: 1, first imbalance near position 569, fragment: \"\\  ,    ))) &amp;    }\"\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"\" &amp; CStr(str_Res...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"RunId\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"Status\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"EventsFound\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"Sent\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"SkippedNoEmail\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"SkippedNotFound\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"SkippedAmbiguous\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 116: Undeclared variable \"Failed\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV12.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 72: Undeclared variable \"Asia\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV12.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 72: Undeclared variable \"Dubai\" in expression: Asia/Dubai — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in BirthdayGreetingsV12.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 84: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 84: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 103: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 103: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 208: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 208: Undeclared variable \"Yes\" in expression: Yes — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 421: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 421: Undeclared variable \"No\" in expression: No — variable is not declared in any <Variable> block in scope",
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
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;SHA256&quot;\" for \"Algorithm\" on ucrypt:HashText — valid values: SHA256, SHA384, SHA512, MD5, SHA1, RIPEMD160. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Performer.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;UTF-8&quot;\" for \"Encoding\" on ucrypt:HashText — valid values: UTF-8, Unicode, ASCII, UTF-32. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in Performer.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "ContactLookup.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;GET&quot;\" for \"Method\" on uis:IntegrationServiceHTTPRequest — valid values: GET, POST, PUT, DELETE, PATCH. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in ContactLookup.xaml — use valid enum from UiPath documentation",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "validation-finding",
      "file": "EmailSender.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;POST&quot;\" for \"Method\" on uis:IntegrationServiceHTTPRequest — valid values: GET, POST, PUT, DELETE, PATCH. No normalization match found.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Fix enum value for activity in EmailSender.xaml — use valid enum from UiPath documentation",
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
      "reason": "ENUM_VIOLATION: Invalid value \"&quot;File&quot;\" for \"PathType\" on ui:PathExists — valid values: File, Folder, Any. No normalization match found.",
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
      "detail": "Contains 4 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ContactLookup.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ContactLookup.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "MessageComposer.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "MessageComposer.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "EmailSender.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "EmailSender.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
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
      "file": "[GetTodayBirthdays.xaml]",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "[ContactLookup.xaml]",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "[MessageComposer.xaml]",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "[EmailSender.xaml]",
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
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 161: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 169: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 174: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 161: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 169: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 174: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-queue-name",
      "file": "Dispatcher.xaml",
      "detail": "Line 345: queue name \"BirthdayGreetingsV12_EmailsToSend\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ContactLookup.xaml",
      "detail": "Line 143: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ContactLookup.xaml",
      "detail": "Line 143: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EmailSender.xaml",
      "detail": "Line 139: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EmailSender.xaml",
      "detail": "Line 294: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EmailSender.xaml",
      "detail": "Line 299: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EmailSender.xaml",
      "detail": "Line 139: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EmailSender.xaml",
      "detail": "Line 294: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EmailSender.xaml",
      "detail": "Line 299: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 558: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 684: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 848: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 558: retry interval hardcoded as \"00:00:10\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 684: retry interval hardcoded as \"00:00:10\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 848: retry interval hardcoded as \"00:00:10\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 169: asset name \"&quot;BGV12.CalendarName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 211: asset name \"&quot;BGV12.Timezone&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 253: asset name \"&quot;BGV12.FromGmailConnectionName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 295: asset name \"&quot;BGV12.MaxConnectorRetries&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 337: asset name \"&quot;BGV12.RetryBackoffSeconds&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 379: asset name \"&quot;BGV12.SkipOnAmbiguousContactMatch&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 421: asset name \"&quot;BGV12.PreferredEmailLabels&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV12.xaml",
      "detail": "Line 463: asset name \"&quot;BGV12.SendEnabled&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 118: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 164: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 223: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 269: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Process.xaml",
      "detail": "Line 377: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 118: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 164: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 223: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 269: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Process.xaml",
      "detail": "Line 377: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
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
      "check": "CATALOG_VIOLATION",
      "file": "Dispatcher.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "Dispatcher.xaml",
      "detail": "Missing required property \"JsonString\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "Dispatcher.xaml",
      "detail": "Missing required property \"Result\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "Performer.xaml",
      "detail": "Missing required property \"Input\" on ucrypt:HashText",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ContactLookup.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ContactLookup.xaml",
      "detail": "Missing required property \"JsonString\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "ContactLookup.xaml",
      "detail": "Missing required property \"Result\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "MessageComposer.xaml",
      "detail": "Missing required property \"Prompt\" on ugenai:UseGenAI",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "MessageComposer.xaml",
      "detail": "Missing required property \"JsonString\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "MessageComposer.xaml",
      "detail": "Missing required property \"Result\" on uweb:DeserializeJson",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "EmailSender.xaml",
      "detail": "Missing required property \"Endpoint\" on uis:IntegrationServiceHTTPRequest",
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
      "file": "ContactLookup.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EmailSender.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EmailSender.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EmailSender.xaml",
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
  "totalEstimatedEffortMinutes": 580,
  "studioCompatibility": [
    {
      "file": "Dispatcher.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Performer.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "ContactLookup.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 355: Possible missing comma or operator between \")\" and \"r(\" — check expression syntax in expression: CInt(obj_ParsedSearchResponse(\"results\").Where(Function(r) r(\"person\")(\"names\") ...",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 433: Possible missing comma or operator between \")\" and \"r(\" — check expression syntax in expression: obj_ParsedSearchResponse(\"results\").Where(Function(r) r(\"person\")(\"names\") IsNot..."
      ]
    },
    {
      "file": "MessageComposer.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "EmailSender.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Finalize.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 116: Unbalanced parentheses: 6 open vs 9 close (diff: -3) | max nesting depth: 1, first imbalance near position 569, fragment: \"\\  ,    ))) &amp;    }\"\" in expression: \"{\\\"RunId\\\":\\\"\" &amp; CStr(In_RunId) &amp; \"\\\",\\\"Status\\\":\\\"\" &amp; CStr(str_Res..."
      ]
    },
    {
      "file": "BirthdayGreetingsV12.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Process.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 84: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 103: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 208: Standalone word \"Yes\" may be an undeclared variable — should it be a string literal \"Yes\"? in expression: Yes",
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 421: Standalone word \"No\" may be an undeclared variable — should it be a string literal \"No\"? in expression: No"
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
      "file": "Init.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "[GetTodayBirthdays.xaml]",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "[ContactLookup.xaml]",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "[MessageComposer.xaml]",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "[EmailSender.xaml]",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "AgentInvocation_Stub.xaml",
      "level": "studio-warnings",
      "blockers": []
    }
  ],
  "preEmissionValidation": {
    "totalActivities": 304,
    "validActivities": 304,
    "unknownActivities": 0,
    "strippedProperties": 34,
    "enumCorrections": 0,
    "missingRequiredFilled": 3,
    "commentConversions": 0,
    "issueCount": 33
  }
}
```
