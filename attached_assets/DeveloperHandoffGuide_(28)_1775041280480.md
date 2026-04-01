# Developer Handoff Guide

**Project:** BirthdayGreetingsV13
**Generated:** 2026-04-01
**Generation Mode:** Full Implementation
**Deployment Readiness:** Not Ready (19%)

**Total Estimated Effort: ~1080 minutes (18.0 hours)**
**Remediations:** 72 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 4 workflow)
**Auto-Repairs:** 16
**Quality Warnings:** 49

---

## 1. Completed Work

The following 2 workflow(s) were fully generated without any stub replacements or remediation:

- `BDAY_V13_Dispatcher.xaml`
- `BDAY_V13_Performer.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Main.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 281: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: "[Main] FATAL UNHANDLED EXCEPTION — Mode='" &amp; str_ModeValue &amp; "' | Start... |
| 2 | `Performer.xaml` | Fully Generated |
| 3 | `ProcessTransaction.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 221: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: If(InConfig.ContainsKey("BDAY_V13_DryRunOverrideToEmail") AndAlso InConfig("BDAY... |
| 4 | `EndProcess.xaml` | Structurally invalid — [EXPRESSION_SYNTAX_UNFIXABLE] Line 249: String.Format() has unbalanced parentheses in expression: "HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayGreetingsV13 Daily Ru... |
| 5 | `BirthdayGreetingsV13.xaml` | Fully Generated |
| 6 | `InitAllSettings.xaml` | Structurally invalid (not Studio-loadable) |
| 7 | `BDAY_V13_Dispatcher.xaml` | Fully Generated |
| 8 | `BDAY_V13_Performer.xaml` | Fully Generated |
| 9 | `InitializeConfig.xaml` | Structurally invalid (not Studio-loadable) |
| 10 | `GenerateAndValidateGreeting.xaml` | Structurally invalid (not Studio-loadable) |
| 11 | `Dispatcher.xaml` | Structurally invalid (not Studio-loadable) |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Main.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 281: Complex expression (lambdas, LINQ, ne... |
| 2 | `Performer.xaml` | Openable with warnings | Unclassified | — |
| 3 | `ProcessTransaction.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 221: Complex expression (lambdas, LINQ, ne... |
| 4 | `EndProcess.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [EXPRESSION_SYNTAX_UNFIXABLE] Line 249: String.Format() has unbalanced parent... |
| 5 | `BirthdayGreetingsV13.xaml` | Studio-openable | — | — |
| 6 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 7 | `BDAY_V13_Dispatcher.xaml` | Studio-openable | — | — |
| 8 | `BDAY_V13_Performer.xaml` | Studio-openable | — | — |
| 9 | `InitializeConfig.xaml` | Openable with warnings | Unclassified | — |
| 10 | `GenerateAndValidateGreeting.xaml` | Openable with warnings | Unclassified | — |
| 11 | `Dispatcher.xaml` | Openable with warnings | Unclassified | — |

**Summary:** 4 Studio-loadable, 4 with warnings, 3 not Studio-loadable

> **⚠ 3 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 281: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: "[Main] FATAL UNHANDLED EXCEPTION — Mode='" &amp; str_ModeValue &amp; "' | Start...: 1 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 221: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: If(InConfig.ContainsKey("BDAY_V13_DryRunOverrideToEmail") AndAlso InConfig("BDAY...: 1 workflow(s)
- [EXPRESSION_SYNTAX_UNFIXABLE] Line 249: String.Format() has unbalanced parentheses in expression: "HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayGreetingsV13 Daily Ru...: 1 workflow(s)

## 2. AI-Resolved with Smart Defaults

The following 16 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Main.xaml` | Stripped 1 placeholder token(s) from Main.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `Performer.xaml` | Stripped 7 placeholder token(s) from Performer.xaml | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `ProcessTransaction.xaml` | Stripped 5 placeholder token(s) from ProcessTransaction.xaml | 5 |
| 4 | `REPAIR_PLACEHOLDER_CLEANUP` | `EndProcess.xaml` | Stripped 6 placeholder token(s) from EndProcess.xaml | 5 |
| 5 | `REPAIR_PLACEHOLDER_CLEANUP` | `BDAY_V13_Dispatcher.xaml` | Stripped 1 placeholder token(s) from BDAY_V13_Dispatcher.xaml | 5 |
| 6 | `REPAIR_PLACEHOLDER_CLEANUP` | `BDAY_V13_Performer.xaml` | Stripped 1 placeholder token(s) from BDAY_V13_Performer.xaml | 5 |
| 7 | `REPAIR_GENERIC` | `Performer.xaml` | Catalog (DOM): move-to-child-element While.Condition in Performer.xaml | undefined |
| 8 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element uexcel:ExcelApplicationScope.WorkbookPath in InitAllSettings... | undefined |
| 9 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element uexcel:ExcelReadRange.DataTable in InitAllSettings.xaml | undefined |
| 10 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element uexcel:ExcelReadRange.DataTable in InitAllSettings.xaml | undefined |
| 11 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ForEach.Values in InitAllSettings.xaml | undefined |
| 12 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ui:GetCredential.Username in InitAllSettings.xaml | undefined |
| 13 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ui:GetCredential.Password in InitAllSettings.xaml | undefined |
| 14 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ui:GetCredential.Username in InitAllSettings.xaml | undefined |
| 15 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ui:GetCredential.Password in InitAllSettings.xaml | undefined |
| 16 | `REPAIR_GENERIC` | `InitAllSettings.xaml` | Catalog (DOM): move-to-child-element ForEach.Values in InitAllSettings.xaml | undefined |

## 3. Manual Action Required

### Validation Issues — Requires Manual Attention (68)

The following issues were detected by the quality gate and require developer review. No automated remediation was applied — workflows are preserved as-generated.

| # | File | Check | Developer Action | Est. Minutes |
|---|------|-------|-----------------|-------------|
| 1 | `Main.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 2 | `Main.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 3 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 4 | `Performer.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 5 | `ProcessTransaction.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 6 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 7 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 8 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 9 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 10 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 11 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 12 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 13 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 14 | `EndProcess.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 15 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 16 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 17 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 18 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 19 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 20 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 21 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 22 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 23 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 24 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 25 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 26 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 27 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 28 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 29 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 30 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 31 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 32 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 33 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 34 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 35 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 36 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 37 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 38 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 39 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 40 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 41 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 42 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 43 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 44 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 45 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 46 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 47 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 48 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 49 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 50 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 51 | `EndProcess.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in EndProcess.xaml — estimated 15 min | 15 |
| 52 | `Main.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Main.xaml — move attribute to child-eleme... | 15 |
| 53 | `Main.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Main.xaml — move attribute to child-eleme... | 15 |
| 54 | `Main.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Main.xaml — move attribute to child-eleme... | 15 |
| 55 | `Main.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Main.xaml — move attribute to child-eleme... | 15 |
| 56 | `Performer.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Performer.xaml — move attribute to child-... | 15 |
| 57 | `Performer.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in Performer.xaml — move attribute to child-... | 15 |
| 58 | `ProcessTransaction.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in ProcessTransaction.xaml — move attribute ... | 15 |
| 59 | `ProcessTransaction.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in ProcessTransaction.xaml — move attribute ... | 15 |
| 60 | `EndProcess.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in EndProcess.xaml — move attribute to child... | 15 |
| 61 | `EndProcess.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in EndProcess.xaml — move attribute to child... | 15 |
| 62 | `EndProcess.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in EndProcess.xaml — move attribute to child... | 15 |
| 63 | `EndProcess.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in EndProcess.xaml — move attribute to child... | 15 |
| 64 | `BirthdayGreetingsV13.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribut... | 15 |
| 65 | `BirthdayGreetingsV13.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribut... | 15 |
| 66 | `BirthdayGreetingsV13.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribut... | 15 |
| 67 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |
| 68 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |

### Workflow-Level Stubs (4)

Entire workflows were replaced with Studio-openable stubs (XAML was not parseable for structural preservation).

| # | File | Code | Developer Action | Est. Minutes |
|---|------|------|-----------------|-------------|
| 1 | `InitializeConfig.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement Loads all Orchestrator Assets into a configuration dictionary... | 15 |
| 2 | `GenerateAndValidateGreeting.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement Accepts recipient context and produces a final policy-complia... | 15 |
| 3 | `Dispatcher.xaml` | `STUB_WORKFLOW_GENERATOR_FAILURE` | TODO: Implement Entry workflow for the Dispatcher process. Initializes config... | 15 |
| 4 | `InitAllSettings.xaml` | `STUB_WORKFLOW_BLOCKING` | Fix XML structure in InitAllSettings.xaml — ensure proper nesting and closing... | 15 |

### Developer Implementation Required (6)

These placeholders represent intentional handoff points where developer implementation is expected.

| # | File | Detail | Est. Minutes |
|---|------|--------|-------------|
| 1 | `Performer.xaml` | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 2 | `ProcessTransaction.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 3 | `EndProcess.xaml` | Contains 4 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 4 | `InitializeConfig.xaml` | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 5 | `GenerateAndValidateGreeting.xaml` | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 6 | `Dispatcher.xaml` | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |

### Quality Warnings (43)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `Main.xaml` | hardcoded-asset-name | Line 105: asset name "&quot;BDAY_V13_Mode&quot;" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 2 | `Performer.xaml` | hardcoded-queue-name | Line 543: queue name "BDAY_V13_BirthdayItems" is hardcoded — consider using a Config.xlsx entry o... | — | undefined |
| 3 | `ProcessTransaction.xaml` | hardcoded-retry-count | Line 232: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 4 | `ProcessTransaction.xaml` | hardcoded-retry-interval | Line 232: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 5 | `EndProcess.xaml` | hardcoded-retry-count | Line 176: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 6 | `EndProcess.xaml` | hardcoded-retry-count | Line 181: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 7 | `EndProcess.xaml` | hardcoded-retry-count | Line 273: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 8 | `EndProcess.xaml` | hardcoded-retry-count | Line 278: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 9 | `EndProcess.xaml` | hardcoded-retry-interval | Line 176: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 10 | `EndProcess.xaml` | hardcoded-retry-interval | Line 181: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 11 | `EndProcess.xaml` | hardcoded-retry-interval | Line 273: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 12 | `EndProcess.xaml` | hardcoded-retry-interval | Line 278: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 13 | `BirthdayGreetingsV13.xaml` | hardcoded-asset-name | Line 81: asset name "&quot;BDAY_V13_Mode&quot;" is hardcoded — consider using a Config.xlsx entry... | — | undefined |
| 14 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 286: asset name "BDAY_V13_GoogleWorkspace_OAuthClientSecret" is hardcoded — consider using a... | — | undefined |
| 15 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 312: asset name "BDAY_V13_GoogleWorkspace_RefreshToken" is hardcoded — consider using a Conf... | — | undefined |
| 16 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 338: asset name "BDAY_V13_Mode" is hardcoded — consider using a Config.xlsx entry or workflo... | — | undefined |
| 17 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 369: asset name "BDAY_V13_TimeZone" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 18 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 400: asset name "BDAY_V13_DailySlaCutoffLocalTime" is hardcoded — consider using a Config.xl... | — | undefined |
| 19 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 431: asset name "BDAY_V13_JobDurationAlertThresholdMinutes" is hardcoded — consider using a ... | — | undefined |
| 20 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 462: asset name "BDAY_V13_MaxQueueRetries" is hardcoded — consider using a Config.xlsx entry... | — | undefined |
| 21 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 493: asset name "BDAY_V13_DryRun" is hardcoded — consider using a Config.xlsx entry or workf... | — | undefined |
| 22 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 524: asset name "BDAY_V13_DryRunOverrideToEmail" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 23 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 555: asset name "BDAY_V13_BannedTopicsWords" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 24 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 586: asset name "BDAY_V13_GoogleWorkspace_OAuthClientId" is hardcoded — consider using a Con... | — | undefined |
| 25 | `EndProcess.xaml` | EXPRESSION_SYNTAX | Line 249: Unbalanced parentheses: 3 open vs 4 close — removed 1 extra closing paren(s) \| max nest... | — | undefined |
| 26 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wr... | — | undefined |
| 27 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "Constants" for uexcel:ExcelReadRange.SheetName (expected String type) — w... | — | undefined |
| 28 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_GoogleWorkspace_OAuthClientSecret" for ui:GetCredential.AssetNam... | — | undefined |
| 29 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_GoogleWorkspace_RefreshToken" for ui:GetCredential.AssetName (ex... | — | undefined |
| 30 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_Mode" for ui:GetAsset.AssetName (expected String type) — wrapped... | — | undefined |
| 31 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_TimeZone" for ui:GetAsset.AssetName (expected String type) — wra... | — | undefined |
| 32 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_DailySlaCutoffLocalTime" for ui:GetAsset.AssetName (expected Str... | — | undefined |
| 33 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_JobDurationAlertThresholdMinutes" for ui:GetAsset.AssetName (exp... | — | undefined |
| 34 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_MaxQueueRetries" for ui:GetAsset.AssetName (expected String type... | — | undefined |
| 35 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_DryRun" for ui:GetAsset.AssetName (expected String type) — wrapp... | — | undefined |
| 36 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_DryRunOverrideToEmail" for ui:GetAsset.AssetName (expected Strin... | — | undefined |
| 37 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_BannedTopicsWords" for ui:GetAsset.AssetName (expected String ty... | — | undefined |
| 38 | `InitAllSettings.xaml` | BARE_TOKEN_QUOTED | Auto-quoted bare token "BDAY_V13_GoogleWorkspace_OAuthClientId" for ui:GetAsset.AssetName (expect... | — | undefined |
| 39 | `ProcessTransaction.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 40 | `EndProcess.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 41 | `EndProcess.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 42 | `EndProcess.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |
| 43 | `EndProcess.xaml` | RETRY_INTERVAL_DEFAULTED | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow ... | — | undefined |

**Total manual remediation effort: ~1080 minutes (18.0 hours)**

## 4. Process Context (from Pipeline)

### Idea Description

Automate birthday greetings to friends and family

### PDD Summary

## 1. Executive Summary
The “birthday greetings v13” project will automate the daily task of sending personalized birthday greeting emails. Today, the process is performed manually: at roughly 8:00 AM you check the dedicated Google Calendar named “Birthdays,” look up the person in Google Contacts, choose the correct email address (preferring the “personal” label), write a warm/funny/sarcastic message in your voice, and send it from your Gmail account. Because the task is repetitive and time-dependent, it is sometimes forgotten.

The future-state solution will run fully autonomously on unattended robots. At 8:00 AM daily, the automation will retrieve birthday events from the Google Calendar “Birthdays,” look up matching contacts in Google Contacts, select the preferred email (personal, otherwise home), generate a personalized message in your voice using UiPath’s native GenAI Activities, and send one email per person through the Gmail Integration Service connector configured for **ninemush@gmail.com**. If no birthday exists that day, the run ends. If no email address is found for a contact, the automation will take no action (per SME decision).

[AUTOMATION_TYPE: HYBRID (RPA + GenAI)]


## 2. Process Scope
This PDD covers an unattended, scheduled automation that executes daily at 8:00 AM to send birthday greeting emails for contacts whose birthdays appear on the Google Calendar named “Birthdays.” The automation includes: reading calendar events for “today” (capturing both all-day and timed birthday entries), resolving recipient email addresses via Google Contacts with a deterministic preference rule (personal → home), generating an AI-authored greeting in your warm/funny/sarcastic voice, and sending the email from **ninemush@gmail.com** using UiPath Integration Service’s Gmail connector.

Out of scope for this iteration are: attaching or selecting photos from Google Photos; using Google Drive; using third-party model providers such as OpenAI/Azure OpenAI; and sending ...

### SDD Summary

## 1. Automation Architecture Overview

### 1.1 Chosen automation pattern and rationale
**Selected pattern:** **Queue-driven Dispatcher–Performer + REFramework-style transaction processing**, with **Hybrid (RPA + GenAI)** content generation.

**Why this pattern fits**
- **Fan-out & isolation:** One birthday event = one queue item. A failure to send to one person does not block others.
- **Operability:** Orchestrator Queue provides built-in **retries, per-item status, analytics, and audit trail**.
- **Time-based trigger:** A daily 8:00 AM scheduled run is deterministic and does not require any user presence → **unattended** is optimal.

**Why not Agents/Maestro/Action Center in the critical path (for v13)**
- You explicitly require **fully autonomous** behavior and you chose **A: do nothing if no email found**. There is no business decision requiring human validation.
- **Agents** can add value for “memory” / richer personalization later, but they introduce an additional runtime component and governance surface. We will keep agent capability **optional and non-blocking** (see §8).
- **Maestro** is best when there are multi-step workflows with human tasks/case state; here the process is a short scheduled batch. Orchestrator trigger + queue is simpler, cheaper to operate, and easier to reason about.
- **Action Center** would only be needed if we add approval/review of AI content; you stated we should send autonomously and just apply a safety check.

### 1.2 Deployment topology
- **Execution:** Cloud Orchestrator → **Unattended robots** (12 slots available). No attended components.
- **Connectivity:** All integrations are API-based via **UiPath Integration Service connector for Gmail** (must use) and **Google Workspace activity pack** for Calendar/Contacts (per PDD).
- **Robot type:** Background unattended; no UI automation required (calendar/contacts/email via APIs), so it is resilient and low-maintenance.

### 1.3 UiPath services used and how
- **Orchestrator**
  - Sc...

**Automation Type:** hybrid
**Rationale:** The flow is largely deterministic (date-based lookup, contact email selection, send email), but generating a “warm/funny/sarcastic in my voice” message is judgment-heavy natural language generation best handled by an agent/GenAI step.
**Feasibility Complexity:** medium
**Effort Estimate:** 1-2 weeks

## 5. Business Process Overview

### Process Steps

| # | Step | Role | System | Type | Pain Point |
|---|------|------|--------|------|------------|
| 1 | Scheduled Birthday Run (8:00 AM Daily) | System | Orchestrator Triggers | start | — |
| 2 | Get Today's Birthday Events (Birthdays calendar) | System | Google Workspace Activities | task | — |
| 3 | Any Birthdays Today? | System | Google Workspace Activities | decision | — |
| 4 | End (No Birthdays Today) | System | Orchestrator | end | — |
| 5 | Create Birthday Work Items | System | Orchestrator Queue | task | — |
| 6 | Dequeue Birthday Work Item | System | Orchestrator Queue | task | — |
| 7 | Look Up Contact Emails in Google Contacts | System | Google Workspace Activities | task | — |
| 8 | Email Found for Contact? | System | Google Workspace Activities | decision | — |
| 9 | Get Preferred Email (prefer label = personal; else home) | System | Google Workspace Activities | task | — |
| 10 | Skip (No Email Found) | System | Orchestrator | task | — |
| 11 | Draft Birthday Message in My Voice | System | UiPath GenAI Activities | agent-task | — |
| 12 | Content Safety / Policy Check (no sensitive or risky content) | System | UiPath GenAI Activities | decision | — |
| 13 | Send Birthday Email | System | Gmail (Integration Service: ninemush@gmail.com) | task | — |
| 14 | Send Safer Birthday Email (toned down) | System | Gmail (Integration Service: ninemush@gmail.com) | task | — |
| 15 | Record Sent Outcome | System | Data Service | task | — |
| 16 | Record Sent Outcome | System | Data Service | task | — |
| 17 | More Birthday Items in Queue? | System | Orchestrator Queue | decision | — |
| 18 | More Birthday Items in Queue? | System | Orchestrator Queue | decision | — |
| 19 | Dequeue Next Item | System | Orchestrator Queue | task | — |
| 20 | End (Run Complete) | System | Orchestrator | end | — |
| 21 | Dequeue Next Item | System | Orchestrator Queue | task | — |
| 22 | Loop Back to Contact Lookup | System | Orchestrator | task | — |
| 23 | Loop Back to Contact Lookup | System | Orchestrator | task | — |
| 24 | Look Up Contact Emails in Google Contacts | System | Google Workspace Activities | task | — |
| 25 | Look Up Contact Emails in Google Contacts | System | Google Workspace Activities | task | — |

### Target Applications / Systems

The following applications were identified from the process map and must be accessible from the robot machine:

- Orchestrator Triggers
- Google Workspace Activities
- Orchestrator
- Orchestrator Queue
- UiPath GenAI Activities
- Gmail (Integration Service: ninemush@gmail.com)
- Data Service

### User Roles Involved

- System

### Decision Points (Process Map Topology)

**Any Birthdays Today?**
  - [No] → End (No Birthdays Today)
  - [Yes] → Create Birthday Work Items

**Email Found for Contact?**
  - [Yes] → Get Preferred Email (prefer label = personal; else home)
  - [No] → Skip (No Email Found)

**Content Safety / Policy Check (no sensitive or risky content)**
  - [Pass] → Send Birthday Email
  - [Fail] → Send Safer Birthday Email (toned down)

**More Birthday Items in Queue?**
  - [Yes] → Dequeue Next Item
  - [No] → End (Run Complete)

**More Birthday Items in Queue?**
  - [Yes] → Dequeue Next Item
  - [No] → End (Run Complete)

## 6. Environment Setup

| Requirement | Value |
|---|---|
| Target Framework | Windows or Portable |
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
| 4 | `UiPath.IntegrationService.Activities` |
| 5 | `UiPath.GSuite.Activities` |
| 6 | `UiPath.DataService.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Google Workspace Activities
- Orchestrator
- Orchestrator Queue
- UiPath GenAI Activities
- Gmail (Integration Service: ninemush@gmail.com)
- Data Service

## 7. Credential & Asset Inventory

**Total:** 4 activities (2 hardcoded, 2 variable-driven)

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `BDAY_V13_Mode` | Unknown | — | `Main.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `Main.xaml` | 105 | GetAsset | `BDAY_V13_Mode` | Unknown | — | Yes |
| `Main.xaml` | 106 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `BirthdayGreetingsV13.xaml` | 81 | GetAsset | `BDAY_V13_Mode` | Unknown | — | Yes |
| `BirthdayGreetingsV13.xaml` | 82 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 2 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 1 aligned, 11 SDD-only, 1 XAML-only

> **Warning:** 11 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 1 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BDAY_V13_Mode` | asset | **Aligned** | type: Text, value: , description: Controls execution mode for Main.xaml (Dispatcher or Performer). | `Main.xaml` | 105 |
| 2 | `BDAY_V13_TimeZone` | asset | **SDD Only** | type: Text, value: , description: Local timezone used to compute start/end-of-day birthday window and SLA timings. | — | — |
| 3 | `BDAY_V13_DailySlaCutoffLocalTime` | asset | **SDD Only** | type: Text, value: 08:10, description: Daily SLA target time by which all 'today' birthdays should be processed (local time). | — | — |
| 4 | `BDAY_V13_JobDurationAlertThresholdMinutes` | asset | **SDD Only** | type: Integer, value: , description: Threshold (minutes) to alert on 'stuck' run when job duration exceeds this value. | — | — |
| 5 | `BDAY_V13_MaxQueueRetries` | asset | **SDD Only** | type: Integer, value: 2, description: Configurable retry count for transient/system exceptions during Performer processing. | — | — |
| 6 | `BDAY_V13_DryRun` | asset | **SDD Only** | type: Bool, value: , description: If true, do not send to actual recipients; send all emails to monitoring address only (used for UAT/dry-run). | — | — |
| 7 | `BDAY_V13_DryRunOverrideToEmail` | asset | **SDD Only** | type: Text, value: ninemush@gmail.com, description: Recipient override address when DryRun=true. | — | — |
| 8 | `BDAY_V13_BannedTopicsWords` | asset | **SDD Only** | type: Text, value: , description: Hard filter list for banned topics/words used as an additional guardrail for GenAI output. | — | — |
| 9 | `BDAY_V13_GoogleWorkspace_OAuthClientId` | asset | **SDD Only** | type: Text, value: , description: OAuth client id used by UiPath.GSuite.Activities for Calendar/Contacts API authentication. | — | — |
| 10 | `BDAY_V13_GoogleWorkspace_OAuthClientSecret` | credential | **SDD Only** | type: Credential, description: OAuth client secret (and related secret material) used by UiPath.GSuite.Activities authentication. | — | — |
| 11 | `BDAY_V13_GoogleWorkspace_RefreshToken` | credential | **SDD Only** | type: Credential, description: Refresh token/secret material for unattended Google Workspace API access (Calendar/Contacts) via activity pack. | — | — |
| 12 | `BDAY_V13_BirthdayItems` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Queue-driven transaction store for one birthday greeting per recipient (Dispatcher enqueues; Performer processes with REFramework-style retries/status). Reference format: yyyyMMdd|FullName; SpecificContent includes FullName, EventId, EventStartUtc/Local, CalendarId. | — | — |
| 13 | `&quot;BDAY_V13_BirthdayItems&quot;` | queue | **XAML Only** | — | `Performer.xaml` | 543 |

## 9. Queue Management

**Pattern:** Queue usage (non-transactional)

### Queues to Provision

| # | Queue Name | Activities | Unique Reference | Auto Retry | SLA | Action |
|---|-----------|------------|-----------------|------------|-----|--------|
| 1 | `&quot;BDAY_V13_BirthdayItems&quot;` | GetTransactionItem | Optional | No | — | Create in Orchestrator |

### SDD-Defined Queues (Not Yet in XAML)

| # | Queue Name | Unique Reference | Max Retries | SLA | Note |
|---|-----------|-----------------|-------------|-----|------|
| 1 | `BDAY_V13_BirthdayItems` | Yes | 2x | — | Defined in SDD but no matching XAML activity — verify implementation |

### Queue Activity Summary

| Capability | Present |
|---|---|
| Add Queue Item | No |
| Get Transaction Item | Yes |
| Set Transaction Status | No |

### Retry Policy

No queue usage detected — retry policy not applicable

### SLA Guidance

No queue-based SLA applicable.

### Dead-Letter / Failed Items Handling

No dead-letter handling applicable — process does not consume queue items.

## 10. Exception Handling Coverage

**Coverage:** 6/6 high-risk activities inside TryCatch (100%)

### Files Without TryCatch

- `InitAllSettings.xaml`
- `BDAY_V13_Dispatcher.xaml`
- `BDAY_V13_Performer.xaml`
- `InitializeConfig.xaml`
- `GenerateAndValidateGreeting.xaml`
- `Dispatcher.xaml`

## 11. Trigger Configuration

Based on the process analysis, the following trigger configuration is recommended:

| # | Trigger Type | Reason | Configuration |
|---|-------------|--------|---------------|
| 1 | **Schedule** | Defined in SDD orchestrator_artifacts: TRG_BDAY_V13_Dispatcher_Daily_0800 | SDD-specified: TRG_BDAY_V13_Dispatcher_Daily_0800 | Cron: 0 0 8 * * ? | Daily schedule trigger to run Dispatcher at 08:00 local time to enqueue today's birthday items. |
| 2 | **Queue** | Defined in SDD orchestrator_artifacts: TRG_BDAY_V13_Performer_QueueScale_Optional | SDD-specified: TRG_BDAY_V13_Performer_QueueScale_Optional | Queue: BDAY_V13_BirthdayItems | Optional queue trigger to auto-start Performer jobs when queue volume grows; not required at low volume. |

## 12. Upstream Quality Findings

The following quality warnings were produced by upstream pipeline stages (selector scoring, type validation, expression linting, etc.) and should be addressed during development:

| Code | Severity | Count | Sample Message |
|------|----------|-------|----------------|
| placeholder-value | warning | 6 | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] |
| hardcoded-asset-name | warning | 13 | Line 105: asset name "&quot;BDAY_V13_Mode&quot;" is hardcoded — consider using a Config.xlsx entry or workflow argument |
| hardcoded-queue-name | warning | 1 | Line 543: queue name "BDAY_V13_BirthdayItems" is hardcoded — consider using a Config.xlsx entry or workflow argument |
| hardcoded-retry-count | warning | 5 | Line 232: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| hardcoded-retry-interval | warning | 5 | Line 232: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx |
| EXPRESSION_SYNTAX | warning | 1 | Line 249: Unbalanced parentheses: 3 open vs 4 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imb... |
| BARE_TOKEN_QUOTED | warning | 13 | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quot... |
| RETRY_INTERVAL_DEFAULTED | warning | 5 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Assets | Provision asset: `BDAY_V13_Mode` | Yes |
| 5 | Queues | Create queue: `&quot;BDAY_V13_BirthdayItems&quot;` | Yes |
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

**Overall: Not Ready — 27/50 (19%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 6/10 | 2 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 7/10 | 6 file(s) with no TryCatch blocks |
| Queue Management | 4/10 | GetTransactionItem found without SetTransactionStatus — incomplete transaction handling; 1 hardcoded queue name(s) — externalize to config |
| Build Quality | 0/10 | 49 quality warnings — significant remediation needed; 72 remediations — stub replacements need developer attention; Entry point (Main.xaml) is stubbed — package has no runnable entry point; 8/11 workflow(s) are Studio-loadable (3 blocked — 27% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 238 |
| Valid activities | 238 |
| Unknown → Comment stubs | 0 |
| Non-catalog properties stripped | 14 |
| Enum values auto-corrected | 0 |
| Missing required props filled | 1 |
| Total issues | 12 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 15 auto-fixed, 12 total issues |
| Post-emission (quality gate) | 121 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "BDAY_V13_Dispatcher.xaml",
    "BDAY_V13_Performer.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Main.xaml",
      "description": "Stripped 1 placeholder token(s) from Main.xaml",
      "developerAction": "Review Main.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Performer.xaml",
      "description": "Stripped 7 placeholder token(s) from Performer.xaml",
      "developerAction": "Review Performer.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "ProcessTransaction.xaml",
      "description": "Stripped 5 placeholder token(s) from ProcessTransaction.xaml",
      "developerAction": "Review ProcessTransaction.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "EndProcess.xaml",
      "description": "Stripped 6 placeholder token(s) from EndProcess.xaml",
      "developerAction": "Review EndProcess.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "BDAY_V13_Dispatcher.xaml",
      "description": "Stripped 1 placeholder token(s) from BDAY_V13_Dispatcher.xaml",
      "developerAction": "Review BDAY_V13_Dispatcher.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "BDAY_V13_Performer.xaml",
      "description": "Stripped 1 placeholder token(s) from BDAY_V13_Performer.xaml",
      "developerAction": "Review BDAY_V13_Performer.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "Performer.xaml",
      "description": "Catalog (DOM): move-to-child-element While.Condition in Performer.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element uexcel:ExcelApplicationScope.WorkbookPath in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element uexcel:ExcelReadRange.DataTable in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element uexcel:ExcelReadRange.DataTable in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ForEach.Values in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ui:GetCredential.Username in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ui:GetCredential.Password in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ui:GetCredential.Username in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ui:GetCredential.Password in InitAllSettings.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitAllSettings.xaml",
      "description": "Catalog (DOM): move-to-child-element ForEach.Values in InitAllSettings.xaml"
    }
  ],
  "remediations": [
    {
      "level": "workflow",
      "file": "InitializeConfig.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — usernameVar.replace is not a function",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement Loads all Orchestrator Assets into a configuration dictionary, validates required keys are present and non-empty, validates Integration Service connection availability for Gmail and GenAI, and returns the populated config dictionary to the caller. Called by both Dispatcher and Performer entry workflows to avoid duplication of config-loading logic.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "GenerateAndValidateGreeting.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — PLACEHOLDER sentinel \"PLACEHOLDER_System_Object\" cannot be emitted — resolve to a valid default or emit a blocking diagnostic",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement Accepts recipient context and produces a final policy-compliant birthday greeting. Calls GenAI Activities to generate an initial warm/funny/sarcastic message, then runs a second GenAI pass for content safety and policy validation against the rubric (no insults, no protected attributes, no sensitive topics, no harassment, no adult content). If the first pass fails, requests a toned-down rewrite (up to 2 attempts). Returns the final approved message body and a flag indicating whether a rewrite was needed. Inline TryCatch handles GenAI API timeouts and rate-limit errors with RetryScope. Called by both the happy-path send step and the policy-fail rewrite path in Performer, making it a genuine shared utility.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_WORKFLOW_GENERATOR_FAILURE",
      "reason": "Compliance transform failed — Tree assembly failed — usernameVar.replace is not a function",
      "classifiedCheck": "compliance-crash",
      "developerAction": "TODO: Implement Entry workflow for the Dispatcher process. Initializes config via InvokeWorkflow, computes today's date window in the configured timezone, queries the Google Calendar 'Birthdays' for all events (all-day and timed) within the window using UiPath.GSuite.Activities, de-duplicates by EventId then FullName+Date, adds one Orchestrator Queue item per unique person to BDAY_V13_BirthdayItems (Reference=yyyyMMdd|FullName; SpecificContent includes FullName, EventId, EventStartUtc, CalendarId), and creates a BirthdayGreetingRun record in Data Service. If no birthdays found, ends cleanly with a run record showing count=0. Inline TryCatch handles Google API auth failures, token expiry, and transient timeouts with RetryScope.",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 281: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: \"[Main] FATAL UNHANDLED EXCEPTION — Mode='\" &amp; str_ModeValue &amp; \"' | Start...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 281: Undeclared variable \"ex\" in expression: \"[Main] FATAL UNHANDLED EXCEPTION — Mode='\" &amp; str_ModeVa... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 946: Undeclared variable \"Sent\" in expression: str_TransactionOutcome = Sent — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 1015: Undeclared variable \"Skipped_NoEmail\" in expression: str_TransactionOutcome = Skipped_NoEmail — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 221: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: If(InConfig.ContainsKey(\"BDAY_V13_DryRunOverrideToEmail\") AndAlso InConfig(\"BDAY...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 79: Undeclared variable \"EndProcess\" in expression: EndProcess — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 92: Undeclared variable \"InRunStatus\" in expression: InRunStatus = &quot;Faulted&quot; — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 107: Undeclared variable \"InFailedCount\" in expression: InFailedCount &gt; 0 — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 152: Undeclared variable \"InRunId\" in expression: New Dictionary(Of String, Object) From {{\"RunId\", InRunId}, ... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 152: Undeclared variable \"InSentCount\" in expression: New Dictionary(Of String, Object) From {{\"RunId\", InRunId}, ... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 152: Undeclared variable \"InSkippedCount\" in expression: New Dictionary(Of String, Object) From {{\"RunId\", InRunId}, ... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 152: Undeclared variable \"InFailedCount\" in expression: New Dictionary(Of String, Object) From {{\"RunId\", InRunId}, ... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 202: Undeclared variable \"InFailedCount\" in expression: InFailedCount &gt; 0 OrElse str_StrRunStatus = \"Faulted\" OrE... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: String.Format() has unbalanced parentheses in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayGreetingsV13 Daily Ru...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"BirthdayGreetingsV13\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Daily\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Run\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Summary\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"RunId\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Status\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"EndUtc\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Sent\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Skipped\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"no\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"email\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"found\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Failed\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Please\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"review\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Orchestrator\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"BDAY_V13_BirthdayItems\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Data\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Service\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"BirthdayGreetingAttempt\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"records\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"failed\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"items\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"screenshots\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"are\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"available\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Storage\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"Bucket\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"bday\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"v13\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"artifacts\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"under\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"errors\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"yyyy\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"dd\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"mm\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 249: Undeclared variable \"ss\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayG... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in EndProcess.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Main.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Main.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Expression\" on Switch must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Main.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Exception\" on Throw must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Main.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Performer.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in Performer.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in ProcessTransaction.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in ProcessTransaction.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in EndProcess.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in EndProcess.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"EntityObject\" on uds:UpdateEntity must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in EndProcess.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "EndProcess.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Endpoint\" on uis:IntegrationServiceHTTPRequest must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in EndProcess.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV13.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV13.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "BirthdayGreetingsV13.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Exception\" on Throw must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in BirthdayGreetingsV13.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in InitAllSettings.xaml — move attribute to child-element or vice versa per UiPath catalog",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_ACTIVITY_CATALOG_VIOLATION",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Fix property syntax for activity in InitAllSettings.xaml — move attribute to child-element or vice versa per UiPath catalog",
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
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessTransaction.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "EndProcess.xaml",
      "detail": "Contains 4 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "InitializeConfig.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "GenerateAndValidateGreeting.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 105: asset name \"&quot;BDAY_V13_Mode&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-queue-name",
      "file": "Performer.xaml",
      "detail": "Line 543: queue name \"BDAY_V13_BirthdayItems\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 232: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 232: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EndProcess.xaml",
      "detail": "Line 176: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EndProcess.xaml",
      "detail": "Line 181: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EndProcess.xaml",
      "detail": "Line 273: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "EndProcess.xaml",
      "detail": "Line 278: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EndProcess.xaml",
      "detail": "Line 176: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EndProcess.xaml",
      "detail": "Line 181: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EndProcess.xaml",
      "detail": "Line 273: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "EndProcess.xaml",
      "detail": "Line 278: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "BirthdayGreetingsV13.xaml",
      "detail": "Line 81: asset name \"&quot;BDAY_V13_Mode&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 286: asset name \"BDAY_V13_GoogleWorkspace_OAuthClientSecret\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 312: asset name \"BDAY_V13_GoogleWorkspace_RefreshToken\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 338: asset name \"BDAY_V13_Mode\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 369: asset name \"BDAY_V13_TimeZone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 400: asset name \"BDAY_V13_DailySlaCutoffLocalTime\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 431: asset name \"BDAY_V13_JobDurationAlertThresholdMinutes\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 462: asset name \"BDAY_V13_MaxQueueRetries\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 493: asset name \"BDAY_V13_DryRun\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 524: asset name \"BDAY_V13_DryRunOverrideToEmail\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 555: asset name \"BDAY_V13_BannedTopicsWords\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 586: asset name \"BDAY_V13_GoogleWorkspace_OAuthClientId\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "EndProcess.xaml",
      "detail": "Line 249: Unbalanced parentheses: 3 open vs 4 close — removed 1 extra closing paren(s) | max nesting depth: 1, first imbalance near position 625, fragment: \"oString(), Environment.NewLine)\" in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayGreetingsV13 Daily Ru...",
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
      "detail": "Auto-quoted bare token \"BDAY_V13_GoogleWorkspace_OAuthClientSecret\" for ui:GetCredential.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_GoogleWorkspace_RefreshToken\" for ui:GetCredential.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_Mode\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_TimeZone\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_DailySlaCutoffLocalTime\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_JobDurationAlertThresholdMinutes\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_MaxQueueRetries\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_DryRun\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_DryRunOverrideToEmail\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_BannedTopicsWords\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "BARE_TOKEN_QUOTED",
      "file": "InitAllSettings.xaml",
      "detail": "Auto-quoted bare token \"BDAY_V13_GoogleWorkspace_OAuthClientId\" for ui:GetAsset.AssetName (expected String type) — wrapped in VB string quotes",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "ProcessTransaction.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EndProcess.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EndProcess.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EndProcess.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    },
    {
      "check": "RETRY_INTERVAL_DEFAULTED",
      "file": "EndProcess.xaml",
      "detail": "Post-repair: RetryInterval defaulted to \"00:00:05\" — verify this is appropriate for the workflow context",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 1080,
  "studioCompatibility": [
    {
      "file": "Main.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 281: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: \"[Main] FATAL UNHANDLED EXCEPTION — Mode='\" &amp; str_ModeValue &amp; \"' | Start...",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"To\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Value\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Expression\" on Switch must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Exception\" on Throw must be a child element, not an attribute"
      ]
    },
    {
      "file": "Performer.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"To\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Value\" on Assign must be a child element, not an attribute"
      ]
    },
    {
      "file": "ProcessTransaction.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 221: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: If(InConfig.ContainsKey(\"BDAY_V13_DryRunOverrideToEmail\") AndAlso InConfig(\"BDAY...",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"To\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Value\" on Assign must be a child element, not an attribute"
      ]
    },
    {
      "file": "EndProcess.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION_SYNTAX_UNFIXABLE] Line 249: String.Format() has unbalanced parentheses in expression: \"HANDOFF_STRING_FORMAT_UNSAFE: String.Format(&quot;BirthdayGreetingsV13 Daily Ru...",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"To\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Value\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"EntityObject\" on uds:UpdateEntity must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Endpoint\" on uis:IntegrationServiceHTTPRequest must be a child element, not an attribute"
      ]
    },
    {
      "file": "BirthdayGreetingsV13.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"To\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Value\" on Assign must be a child element, not an attribute",
        "[CATALOG_STRUCTURAL_VIOLATION] Property \"Exception\" on Throw must be a child element, not an attribute"
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
      "file": "BDAY_V13_Dispatcher.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "BDAY_V13_Performer.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "InitializeConfig.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[GENERATION-FAILURE] Workflow generation failed — LLM output could not be parsed into valid XAML"
      ],
      "failureCategory": "generation-failure",
      "failureSummary": "Workflow generation failed — LLM output could not be parsed into valid XAML"
    },
    {
      "file": "GenerateAndValidateGreeting.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[GENERATION-FAILURE] Workflow generation failed — LLM output could not be parsed into valid XAML"
      ],
      "failureCategory": "generation-failure",
      "failureSummary": "Workflow generation failed — LLM output could not be parsed into valid XAML"
    },
    {
      "file": "Dispatcher.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[GENERATION-FAILURE] Workflow generation failed — LLM output could not be parsed into valid XAML"
      ],
      "failureCategory": "generation-failure",
      "failureSummary": "Workflow generation failed — LLM output could not be parsed into valid XAML"
    }
  ],
  "preEmissionValidation": {
    "totalActivities": 238,
    "validActivities": 238,
    "unknownActivities": 0,
    "strippedProperties": 14,
    "enumCorrections": 0,
    "missingRequiredFilled": 1,
    "commentConversions": 0,
    "issueCount": 12
  }
}
```
