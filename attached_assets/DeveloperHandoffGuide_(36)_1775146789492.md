# Developer Handoff Guide

**Project:** BirthdayGreetingsV20
**Generated:** 2026-04-02
**Generation Mode:** Baseline Openable (minimal, deterministic)
**Deployment Readiness:** Needs Work (56%)

**19 workflows: 8 fully generated, 0 with handoff blocks, 11 workflow-level stubs**
**Total Estimated Effort: ~330 minutes (5.5 hours)**
**Remediations:** 22 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 7 workflow)
**Auto-Repairs:** 16
**Quality Warnings:** 112

---

### Per-Workflow Preservation Summary

| # | Workflow | Tier | Business Steps (SDD) | Preserved | Degraded (Handoff) | Manual | Bind Points |
|---|----------|------|-------------|-----------|-------------------|--------|-------------|
| 1 | `InitializeConfig.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 2 | `ResolveBirthdayRecipient.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 3 | `GenerateBirthdayMessage.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 4 | `ProcessTransaction.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 5 | `DispatcherMain.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 6 | `PerformerMain.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 7 | `Process.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 8 | `InitAllSettings.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 9 | `Main.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 10 | `GetTransactionData.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 11 | `SetTransactionStatus.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 12 | `CloseAllApplications.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 13 | `KillAllProcesses.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 14 | `Init.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 15 | `AgentInvocation_Stub.xaml` | Generated | 1 | 1 | 0 | 0 | 0 |
| 16 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 17 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 18 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |
| 19 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml` | Stub | 1 | 0 | 0 | 1 | 0 |

## 1. Generated Logic (ready to use)

Generated XAML that is Studio-openable and does not contain handoff blocks or workflow-level stubs. May include auto-resolved property remediations or placeholders for fine-tuning.

The following 8 workflow(s) were fully generated and are ready to use:

| # | Workflow | Status | Studio Compatibility |
|---|----------|--------|---------------------|
| 1 | `InitializeConfig.xaml` | Fully Generated | Studio-openable |
| 2 | `Process.xaml` | Generated with Placeholders | Openable with warnings |
| 3 | `Main.xaml` | Fully Generated | Openable with warnings |
| 4 | `GetTransactionData.xaml` | Fully Generated | Studio-openable |
| 5 | `SetTransactionStatus.xaml` | Fully Generated | Studio-openable |
| 6 | `CloseAllApplications.xaml` | Fully Generated | Studio-openable |
| 7 | `Init.xaml` | Fully Generated | Openable with warnings |
| 8 | `AgentInvocation_Stub.xaml` | Generated with Placeholders | Openable with warnings |

### AI-Resolved with Smart Defaults (16)

The following issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes Saved |
|---|------|------|-------------|-------------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `PerformerMain.xaml` | Stripped 1 placeholder token(s) from PerformerMain.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `Process.xaml` | Stripped 33 placeholder token(s) from Process.xaml | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `AgentInvocation_Stub.xaml` | Stripped 1 placeholder token(s) from AgentInvocation_Stub.xaml | 5 |
| 4 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 5 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 6 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 7 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 8 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 9 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 10 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 11 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 12 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 13 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 14 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 15 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |
| 16 | `REPAIR_GENERIC` | `InitializeConfig.xaml` | Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml | undefined |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `InitializeConfig.xaml` | Studio-openable | — | — |
| 2 | `ResolveBirthdayRecipient.xaml` | Studio-openable | — | — |
| 3 | `GenerateBirthdayMessage.xaml` | Studio-openable | — | — |
| 4 | `ProcessTransaction.xaml` | Studio-openable | — | — |
| 5 | `DispatcherMain.xaml` | Studio-openable | — | — |
| 6 | `PerformerMain.xaml` | Studio-openable | — | — |
| 7 | `Process.xaml` | Openable with warnings | Unclassified | — |
| 8 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 9 | `Main.xaml` | Openable with warnings | Unclassified | — |
| 10 | `GetTransactionData.xaml` | Studio-openable | — | — |
| 11 | `SetTransactionStatus.xaml` | Studio-openable | — | — |
| 12 | `CloseAllApplications.xaml` | Studio-openable | — | — |
| 13 | `KillAllProcesses.xaml` | Studio-openable | — | — |
| 14 | `Init.xaml` | Openable with warnings | Unclassified | — |
| 15 | `AgentInvocation_Stub.xaml` | Openable with warnings | Unclassified | — |
| 16 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 17 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 18 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 19 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}` | Openable with warnings | Unclassified | — |

**Summary:** 11 Studio-loadable, 8 with warnings, 0 not Studio-loadable

## 2. Handoff Blocks (business logic preserved, implementation required)

Blocks where business logic is preserved as documentation but implementation requires manual Studio work. Each entry includes the workflow file, block type, business description from the SDD (when available), expected inputs/outputs, and the developer action required.

No handoff blocks — all logic was fully generated.

## 3. Manual Work Remaining

Consolidated developer TODO list organized by workflow, with estimated effort per item.

**134 items remaining — ~1450 minutes (24.2 hours) total estimated effort**

### DispatcherMain.xaml (6 items, ~70 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 1 | High | Workflow Stub | Entire workflow `DispatcherMain.xaml` replaced with Studio-openable stub | Fix XML structure in DispatcherMain.xaml — ensure proper nesting and closing ... | 15 |
| 2 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in DispatcherMain.xaml — estimated 15 min | 15 |
| 3 | Low | Quality Warning | invalid-activity-property: Line 76: property "Arguments" is not a known prope... | Review and address | 10 |
| 4 | Low | Quality Warning | invalid-activity-property: Line 76: property "out_ConfigDictionary" is not a ... | Review and address | 10 |
| 5 | Low | Quality Warning | hardcoded-retry-count: Line 190: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 6 | Low | Quality Warning | hardcoded-retry-interval: Line 190: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |

### GenerateBirthdayMessage.xaml (5 items, ~60 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 7 | High | Workflow Stub | Entire workflow `GenerateBirthdayMessage.xaml` replaced with Studio-openable ... | Fix XML structure in GenerateBirthdayMessage.xaml — ensure proper nesting and... | 15 |
| 8 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min | 15 |
| 9 | Low | Implementation Required | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |
| 10 | Low | Quality Warning | hardcoded-retry-interval: Line 104: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 11 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 86: Complex expression (lambdas, LINQ, n... | Review and address | 10 |

### InitAllSettings.xaml (31 items, ~315 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 12 | High | Workflow Stub | Entire workflow `InitAllSettings.xaml` replaced with Studio-openable stub | Fix XML structure in InitAllSettings.xaml — ensure proper nesting and closing... | 15 |
| 13 | Low | Quality Warning | hardcoded-asset-name: Line 100: asset name "BGV20_GoogleOAuth_Credential" is ... | Review and address | 10 |
| 14 | Low | Quality Warning | hardcoded-asset-name: Line 105: asset name "BGV20_GoogleCalendar_Name" is har... | Review and address | 10 |
| 15 | Low | Quality Warning | hardcoded-asset-name: Line 114: asset name "BGV20_Gmail_FromConnectionName" i... | Review and address | 10 |
| 16 | Low | Quality Warning | hardcoded-asset-name: Line 123: asset name "BGV20_RunTimeZone" is hardcoded —... | Review and address | 10 |
| 17 | Low | Quality Warning | hardcoded-asset-name: Line 132: asset name "BGV20_EmailSubjectTemplate" is ha... | Review and address | 10 |
| 18 | Low | Quality Warning | hardcoded-asset-name: Line 141: asset name "BGV20_EmailPreferenceLabels" is h... | Review and address | 10 |
| 19 | Low | Quality Warning | hardcoded-asset-name: Line 150: asset name "BGV20_SkipIfAmbiguousContactMatch... | Review and address | 10 |
| 20 | Low | Quality Warning | hardcoded-asset-name: Line 159: asset name "BGV20_QueueItemDeferMinutes_OnRat... | Review and address | 10 |
| 21 | Low | Quality Warning | hardcoded-asset-name: Line 168: asset name "BGV20_LogMaskEmails" is hardcoded... | Review and address | 10 |
| 22 | Low | Quality Warning | hardcoded-asset-name: Line 177: asset name "BGV20_GenAI_Temperature" is hardc... | Review and address | 10 |
| 23 | Low | Quality Warning | hardcoded-asset-name: Line 186: asset name "BGV20_GenAI_MaxChars" is hardcode... | Review and address | 10 |
| 24 | Low | Quality Warning | hardcoded-asset-name: Line 195: asset name "BGV20_MaxBirthdaysPerRun" is hard... | Review and address | 10 |
| 25 | Low | Quality Warning | hardcoded-asset-name: Line 204: asset name "BGV20_BusinessSLA_SendByLocalTime... | Review and address | 10 |
| 26 | Low | Quality Warning | hardcoded-asset-name: Line 213: asset name "BGV20_OrchestratorFolderName" is ... | Review and address | 10 |
| 27 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Settings" for uexcel:ExcelReadRang... | Review and address | 10 |
| 28 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "Constants" for uexcel:ExcelReadRan... | Review and address | 10 |
| 29 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleOAuth_Credential" for ... | Review and address | 10 |
| 30 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GoogleCalendar_Name" for ui:... | Review and address | 10 |
| 31 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_Gmail_FromConnectionName" fo... | Review and address | 10 |
| 32 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_RunTimeZone" for ui:GetAsset... | Review and address | 10 |
| 33 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailSubjectTemplate" for ui... | Review and address | 10 |
| 34 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_EmailPreferenceLabels" for u... | Review and address | 10 |
| 35 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_SkipIfAmbiguousContactMatch"... | Review and address | 10 |
| 36 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_QueueItemDeferMinutes_OnRate... | Review and address | 10 |
| 37 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_LogMaskEmails" for ui:GetAss... | Review and address | 10 |
| 38 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_Temperature" for ui:Ge... | Review and address | 10 |
| 39 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_GenAI_MaxChars" for ui:GetAs... | Review and address | 10 |
| 40 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_MaxBirthdaysPerRun" for ui:G... | Review and address | 10 |
| 41 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_BusinessSLA_SendByLocalTime"... | Review and address | 10 |
| 42 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "BGV20_OrchestratorFolderName" for ... | Review and address | 10 |

### KillAllProcesses.xaml (4 items, ~45 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 43 | High | Workflow Stub | Entire workflow `KillAllProcesses.xaml` replaced with Studio-openable stub | Fix XML structure in KillAllProcesses.xaml — ensure proper nesting and closin... | 15 |
| 44 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "chrome" for ui:KillProcess.Process... | Review and address | 10 |
| 45 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "iexplore" for ui:KillProcess.Proce... | Review and address | 10 |
| 46 | Low | Quality Warning | BARE_TOKEN_QUOTED: Auto-quoted bare token "EXCEL" for ui:KillProcess.ProcessN... | Review and address | 10 |

### PerformerMain.xaml (5 items, ~55 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 47 | High | Workflow Stub | Entire workflow `PerformerMain.xaml` replaced with Studio-openable stub | Fix XML structure in PerformerMain.xaml — ensure proper nesting and closing tags | 15 |
| 48 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |
| 49 | Low | Quality Warning | invalid-activity-property: Line 69: property "Arguments" is not a known prope... | Review and address | 10 |
| 50 | Low | Quality Warning | invalid-activity-property: Line 214: property "Arguments" is not a known prop... | Review and address | 10 |
| 51 | Low | Quality Warning | invalid-activity-property: Line 253: property "Key" is not a known property o... | Review and address | 10 |

### ProcessTransaction.xaml (23 items, ~255 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 52 | High | Workflow Stub | Entire workflow `ProcessTransaction.xaml` replaced with Studio-openable stub | Fix XML structure in ProcessTransaction.xaml — ensure proper nesting and clos... | 15 |
| 53 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 54 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 55 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 56 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 57 | Low | Quality Warning | invalid-activity-property: Line 159: property "Arguments" is not a known prop... | Review and address | 10 |
| 58 | Low | Quality Warning | invalid-activity-property: Line 159: property "InFullName" is not a known pro... | Review and address | 10 |
| 59 | Low | Quality Warning | invalid-activity-property: Line 159: property "InConfig" is not a known prope... | Review and address | 10 |
| 60 | Low | Quality Warning | invalid-activity-property: Line 159: property "InQueueItemId" is not a known ... | Review and address | 10 |
| 61 | Low | Quality Warning | invalid-activity-property: Line 159: property "OutResolvedEmail" is not a kno... | Review and address | 10 |
| 62 | Low | Quality Warning | invalid-activity-property: Line 159: property "OutResolvedEmailLabel" is not ... | Review and address | 10 |
| 63 | Low | Quality Warning | invalid-activity-property: Line 159: property "OutOutcome" is not a known pro... | Review and address | 10 |
| 64 | Low | Quality Warning | invalid-activity-property: Line 159: property "OutErrorMessage" is not a know... | Review and address | 10 |
| 65 | Low | Quality Warning | invalid-activity-property: Line 301: property "InFirstName" is not a known pr... | Review and address | 10 |
| 66 | Low | Quality Warning | invalid-activity-property: Line 301: property "InFullName" is not a known pro... | Review and address | 10 |
| 67 | Low | Quality Warning | invalid-activity-property: Line 301: property "InRunDate" is not a known prop... | Review and address | 10 |
| 68 | Low | Quality Warning | invalid-activity-property: Line 301: property "InConfig" is not a known prope... | Review and address | 10 |
| 69 | Low | Quality Warning | invalid-activity-property: Line 301: property "InQueueItemId" is not a known ... | Review and address | 10 |
| 70 | Low | Quality Warning | invalid-activity-property: Line 301: property "OutEmailBody" is not a known p... | Review and address | 10 |
| 71 | Low | Quality Warning | invalid-activity-property: Line 301: property "OutErrorMessage" is not a know... | Review and address | 10 |
| 72 | Low | Quality Warning | hardcoded-retry-count: Line 443: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 73 | Low | Quality Warning | hardcoded-retry-interval: Line 395: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 74 | Low | Quality Warning | hardcoded-retry-interval: Line 443: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |

### ResolveBirthdayRecipient.xaml (7 items, ~100 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 75 | High | Workflow Stub | Entire workflow `ResolveBirthdayRecipient.xaml` replaced with Studio-openable... | Fix XML structure in ResolveBirthdayRecipient.xaml — ensure proper nesting an... | 15 |
| 76 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min | 15 |
| 77 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min | 15 |
| 78 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min | 15 |
| 79 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min | 15 |
| 80 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min | 15 |
| 81 | Low | Quality Warning | hardcoded-retry-interval: Line 100: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 82 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 83 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 84 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 85 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### AgentInvocation_Stub.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 86 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |

### Process.xaml (22 items, ~240 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 87 | Low | Validation Finding | Quality gate finding: `MISSING_REQUIRED_ACTIVITY_PROPERTY` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 88 | Low | Validation Finding | Quality gate finding: `MISSING_REQUIRED_ACTIVITY_PROPERTY` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 89 | Low | Validation Finding | Quality gate finding: `MISSING_REQUIRED_ACTIVITY_PROPERTY` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 90 | Low | Validation Finding | Quality gate finding: `MISSING_REQUIRED_ACTIVITY_PROPERTY` | Manually implement activity in Process.xaml — estimated 15 min | 15 |
| 91 | Low | Implementation Required | Contains 31 placeholder value(s) matching "\bTODO\b" [Developer Implementatio... | Implement in Studio | 10 |
| 92 | Low | Quality Warning | hardcoded-credential: Potential hardcoded credential detected (pattern: passw... | Review and address | 10 |
| 93 | Low | Quality Warning | invalid-type-argument: Line 76: x:TypeArguments="UiPath.Persistence.Activitie... | Review and address | 10 |
| 94 | Low | Quality Warning | hardcoded-retry-count: Line 246: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 95 | Low | Quality Warning | hardcoded-retry-count: Line 424: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 96 | Low | Quality Warning | hardcoded-retry-count: Line 524: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 97 | Low | Quality Warning | hardcoded-retry-count: Line 570: retry count hardcoded as 3 — consider extern... | Review and address | 10 |
| 98 | Low | Quality Warning | hardcoded-retry-interval: Line 246: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 99 | Low | Quality Warning | hardcoded-retry-interval: Line 424: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 100 | Low | Quality Warning | hardcoded-retry-interval: Line 524: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 101 | Low | Quality Warning | hardcoded-retry-interval: Line 570: retry interval hardcoded as "00:00:05" — ... | Review and address | 10 |
| 102 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 132: Standalone "Yes" corrected to "True" in expressi... | Review and address | 10 |
| 103 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 231: Standalone "Yes" corrected to "True" in expressi... | Review and address | 10 |
| 104 | Low | Quality Warning | EXPRESSION_SYNTAX: Line 509: Standalone "Yes" corrected to "True" in expressi... | Review and address | 10 |
| 105 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 106 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 107 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |
| 108 | Low | Quality Warning | RETRY_INTERVAL_DEFAULTED: Post-repair: RetryInterval defaulted to "00:00:05" ... | Review and address | 10 |

### InitializeConfig.xaml (13 items, ~130 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 109 | Low | Quality Warning | hardcoded-asset-name: Line 69: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 110 | Low | Quality Warning | hardcoded-asset-name: Line 108: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 111 | Low | Quality Warning | hardcoded-asset-name: Line 147: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 112 | Low | Quality Warning | hardcoded-asset-name: Line 186: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 113 | Low | Quality Warning | hardcoded-asset-name: Line 225: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 114 | Low | Quality Warning | hardcoded-asset-name: Line 264: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 115 | Low | Quality Warning | hardcoded-asset-name: Line 303: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 116 | Low | Quality Warning | hardcoded-asset-name: Line 342: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 117 | Low | Quality Warning | hardcoded-asset-name: Line 381: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 118 | Low | Quality Warning | hardcoded-asset-name: Line 420: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 119 | Low | Quality Warning | hardcoded-asset-name: Line 459: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 120 | Low | Quality Warning | hardcoded-asset-name: Line 498: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 121 | Low | Quality Warning | hardcoded-asset-name: Line 537: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |

### orchestrator.xaml (13 items, ~130 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 122 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is r... | Review and address | 10 |
| 123 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_Gmail_FromConnectionName}"... | Review and address | 10 |
| 124 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_RunTimeZone}" is reference... | Review and address | 10 |
| 125 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailSubjectTemplate}" is ... | Review and address | 10 |
| 126 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailPreferenceLabels}" is... | Review and address | 10 |
| 127 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_SkipIfAmbiguousContactMatc... | Review and address | 10 |
| 128 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_QueueItemDeferMinutes_OnRa... | Review and address | 10 |
| 129 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_LogMaskEmails}" is referen... | Review and address | 10 |
| 130 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_Temperature}" is ref... | Review and address | 10 |
| 131 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_MaxChars}" is refere... | Review and address | 10 |
| 132 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_MaxBirthdaysPerRun}" is re... | Review and address | 10 |
| 133 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_BusinessSLA_SendByLocalTim... | Review and address | 10 |
| 134 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_OrchestratorFolderName}" i... | Review and address | 10 |

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
| 2 | `UiPath.WebAPI.Activities` |
| 3 | `UiPath.DataService.Activities` |
| 4 | `UiPath.UIAutomation.Activities` |
| 5 | `UiPath.Mail.Activities` |
| 6 | `UiPath.Persistence.Activities` |
| 7 | `UiPath.Excel.Activities` |

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

**Total:** 13 activities (13 hardcoded, 0 variable-driven)

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `{type:literal,value:BGV20_GoogleCalendar_Name}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 2 | `{type:literal,value:BGV20_Gmail_FromConnectionName}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 3 | `{type:literal,value:BGV20_RunTimeZone}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 4 | `{type:literal,value:BGV20_EmailSubjectTemplate}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 5 | `{type:literal,value:BGV20_EmailPreferenceLabels}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 6 | `{type:literal,value:BGV20_SkipIfAmbiguousContactMatch}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 7 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 8 | `{type:literal,value:BGV20_LogMaskEmails}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 9 | `{type:literal,value:BGV20_GenAI_Temperature}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 10 | `{type:literal,value:BGV20_GenAI_MaxChars}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 11 | `{type:literal,value:BGV20_MaxBirthdaysPerRun}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 12 | `{type:literal,value:BGV20_BusinessSLA_SendByLocalTime}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |
| 13 | `{type:literal,value:BGV20_OrchestratorFolderName}` | Unknown | — | `InitializeConfig.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `InitializeConfig.xaml` | 69 | GetAsset | `{type:literal,value:BGV20_GoogleCalendar_Name}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 108 | GetAsset | `{type:literal,value:BGV20_Gmail_FromConnectionName}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 147 | GetAsset | `{type:literal,value:BGV20_RunTimeZone}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 186 | GetAsset | `{type:literal,value:BGV20_EmailSubjectTemplate}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 225 | GetAsset | `{type:literal,value:BGV20_EmailPreferenceLabels}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 264 | GetAsset | `{type:literal,value:BGV20_SkipIfAmbiguousContactMatch}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 303 | GetAsset | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 342 | GetAsset | `{type:literal,value:BGV20_LogMaskEmails}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 381 | GetAsset | `{type:literal,value:BGV20_GenAI_Temperature}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 420 | GetAsset | `{type:literal,value:BGV20_GenAI_MaxChars}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 459 | GetAsset | `{type:literal,value:BGV20_MaxBirthdaysPerRun}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 498 | GetAsset | `{type:literal,value:BGV20_BusinessSLA_SendByLocalTime}` | Unknown | — | Yes |
| `InitializeConfig.xaml` | 537 | GetAsset | `{type:literal,value:BGV20_OrchestratorFolderName}` | Unknown | — | Yes |

> **Warning:** 13 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 0 aligned, 15 SDD-only, 15 XAML-only

> **Warning:** 15 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 15 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

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
| 15 | `{type:literal,value:BGV20_GoogleCalendar_Name}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 69 |
| 16 | `{type:literal,value:BGV20_Gmail_FromConnectionName}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 108 |
| 17 | `{type:literal,value:BGV20_RunTimeZone}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 147 |
| 18 | `{type:literal,value:BGV20_EmailSubjectTemplate}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 186 |
| 19 | `{type:literal,value:BGV20_EmailPreferenceLabels}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 225 |
| 20 | `{type:literal,value:BGV20_SkipIfAmbiguousContactMatch}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 264 |
| 21 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 303 |
| 22 | `{type:literal,value:BGV20_LogMaskEmails}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 342 |
| 23 | `{type:literal,value:BGV20_GenAI_Temperature}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 381 |
| 24 | `{type:literal,value:BGV20_GenAI_MaxChars}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 420 |
| 25 | `{type:literal,value:BGV20_MaxBirthdaysPerRun}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 459 |
| 26 | `{type:literal,value:BGV20_BusinessSLA_SendByLocalTime}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 498 |
| 27 | `{type:literal,value:BGV20_OrchestratorFolderName}` | asset | **XAML Only** | — | `InitializeConfig.xaml` | 537 |
| 28 | `BGV20_BirthdayGreetings_Transactions` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: One transaction per birthday person (from Google Calendar 'Birthdays') to enforce exactly one email per person, enable retries, and provide auditability. | — | — |
| 29 | `TODO: implement this expression` | queue | **XAML Only** | — | `Process.xaml` | 138 |
| 30 | `[in_QueueName]` | queue | **XAML Only** | — | `GetTransactionData.xaml` | 62 |

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

**Coverage:** 19/25 high-risk activities inside TryCatch (76%)

### Files Without TryCatch

- `ResolveBirthdayRecipient.xaml`
- `GenerateBirthdayMessage.xaml`
- `ProcessTransaction.xaml`
- `DispatcherMain.xaml`
- `PerformerMain.xaml`
- `InitAllSettings.xaml`
- `GetTransactionData.xaml`
- `KillAllProcesses.xaml`
- `AgentInvocation_Stub.xaml`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `Process.xaml:138` | Create Queue Items (1 per birthday person) |
| 2 | `Process.xaml:515` | Send Birthday Email (post-approval) |
| 3 | `GetTransactionData.xaml:62` | Get Queue Item |
| 4 | `GetTransactionData.xaml:63` | ui:GetTransactionItem |
| 5 | `SetTransactionStatus.xaml:67` | Set Success |
| 6 | `SetTransactionStatus.xaml:89` | Set Failed |

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
| placeholder-value | warning | 8 | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] |
| hardcoded-credential | warning | 1 | Potential hardcoded credential detected (pattern: password\s*[:=]\s*["'](?!\[)[^...) |
| undeclared-asset | warning | 13 | Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is referenced in XAML but not declared in orchestrator artifacts |
| invalid-activity-property | warning | 20 | Line 159: property "Arguments" is not a known property of ui:InvokeWorkflowFile |
| invalid-type-argument | warning | 1 | Line 76: x:TypeArguments="UiPath.Persistence.Activities.FormTask" may not be a valid .NET type |
| hardcoded-asset-name | warning | 27 | Line 69: asset name "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}" is ... |
| hardcoded-retry-interval | warning | 9 | Line 100: retry interval hardcoded as "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}" — ... |
| hardcoded-retry-count | warning | 6 | Line 443: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("MaxRetryNumber")) |
| COMPLEX_EXPRESSION_PASSTHROUGH | warning | 1 | Line 86: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in... |
| EXPRESSION_SYNTAX | warning | 3 | Line 132: Standalone "Yes" corrected to "True" in expression: Yes |
| BARE_TOKEN_QUOTED | warning | 19 | Auto-quoted bare token "Settings" for uexcel:ExcelReadRange.SheetName (expected String type) — wrapped in VB string quot... |
| RETRY_INTERVAL_DEFAULTED | warning | 4 | Post-repair: RetryInterval defaulted to "00:00:05" — verify this is appropriate for the workflow context |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Assets | Provision asset: `{type:literal,value:BGV20_GoogleCalendar_Name}` | Yes |
| 5 | Assets | Provision asset: `{type:literal,value:BGV20_Gmail_FromConnectionName}` | Yes |
| 6 | Assets | Provision asset: `{type:literal,value:BGV20_RunTimeZone}` | Yes |
| 7 | Assets | Provision asset: `{type:literal,value:BGV20_EmailSubjectTemplate}` | Yes |
| 8 | Assets | Provision asset: `{type:literal,value:BGV20_EmailPreferenceLabels}` | Yes |
| 9 | Assets | Provision asset: `{type:literal,value:BGV20_SkipIfAmbiguousContactMatch}` | Yes |
| 10 | Assets | Provision asset: `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Yes |
| 11 | Assets | Provision asset: `{type:literal,value:BGV20_LogMaskEmails}` | Yes |
| 12 | Assets | Provision asset: `{type:literal,value:BGV20_GenAI_Temperature}` | Yes |
| 13 | Assets | Provision asset: `{type:literal,value:BGV20_GenAI_MaxChars}` | Yes |
| 14 | Assets | Provision asset: `{type:literal,value:BGV20_MaxBirthdaysPerRun}` | Yes |
| 15 | Assets | Provision asset: `{type:literal,value:BGV20_BusinessSLA_SendByLocalTime}` | Yes |
| 16 | Assets | Provision asset: `{type:literal,value:BGV20_OrchestratorFolderName}` | Yes |
| 17 | Queues | Create queue: `TODO: implement this expression` | Yes |
| 18 | Queues | Create queue: `[in_QueueName]` | Yes |
| 19 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 20 | Testing | Run smoke test in target environment | Yes |
| 21 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 22 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 23 | Governance | Peer code review completed | Yes |
| 24 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 25 | Governance | Business process owner validation obtained | Yes |
| 26 | Governance | CoE approval obtained | Yes |
| 27 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Needs Work — 28/50 (56%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 13 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 4/10 | 76% coverage — consider wrapping remaining activities; 13 file(s) with no TryCatch blocks |
| Queue Management | 8/10 | 2 hardcoded queue name(s) — externalize to config |
| Build Quality | 1/10 | 112 quality warnings — significant remediation needed; 22 remediations — stub replacements need developer attention |
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
| Post-emission (quality gate) | 134 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "GetTransactionData.xaml",
    "SetTransactionStatus.xaml",
    "CloseAllApplications.xaml",
    "AgentInvocation_Stub.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "PerformerMain.xaml",
      "description": "Stripped 1 placeholder token(s) from PerformerMain.xaml",
      "developerAction": "Review PerformerMain.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Process.xaml",
      "description": "Stripped 33 placeholder token(s) from Process.xaml",
      "developerAction": "Review Process.xaml for Comment elements marking where placeholder activities were removed",
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
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "InitializeConfig.xaml",
      "description": "Catalog (fallback): Moved ui:GetAsset.Value from attribute to child-element in InitializeConfig.xaml"
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 280: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 307: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 368: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 471: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 472: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ResolveBirthdayRecipient.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "GenerateBirthdayMessage.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 193: Activity \"DeserializeJSON\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:DeserializeJSON\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in GenerateBirthdayMessage.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 68: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 154: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 448: Activity \"GmailSendMessage\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GmailSendMessage\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 484: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "DispatcherMain.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 195: Activity \"GmailGetMessages\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GmailGetMessages\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in DispatcherMain.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 375: umail:SendSmtpMailMessage is missing required property \"Body\"",
      "classifiedCheck": "MISSING_REQUIRED_ACTIVITY_PROPERTY",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 429: umail:SendSmtpMailMessage is missing required property \"Body\"",
      "classifiedCheck": "MISSING_REQUIRED_ACTIVITY_PROPERTY",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 512: umail:SendSmtpMailMessage is missing required property \"Body\"",
      "classifiedCheck": "MISSING_REQUIRED_ACTIVITY_PROPERTY",
      "developerAction": "Manually implement activity in Process.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Process.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 529: umail:SendSmtpMailMessage is missing required property \"Body\"",
      "classifiedCheck": "MISSING_REQUIRED_ACTIVITY_PROPERTY",
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
      "file": "ResolveBirthdayRecipient.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in ResolveBirthdayRecipient.xaml — ensure proper nesting and closing tags",
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
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in ProcessTransaction.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "DispatcherMain.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in DispatcherMain.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "PerformerMain.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in PerformerMain.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "PerformerMain.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "hardcoded-credential",
      "file": "Process.xaml",
      "detail": "Potential hardcoded credential detected (pattern: password\\s*[:=]\\s*[\"'](?!\\[)[^...)",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "Process.xaml",
      "detail": "Contains 31 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
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
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}",
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
      "detail": "Asset \"{type:literal,value:BGV20_Gmail_FromConnectionName}\" is referenced in XAML but not declared in orchestrator artifacts",
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
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_LogMaskEmails}\" is referenced in XAML but not declared in orchestrator artifacts",
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
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_MaxBirthdaysPerRun}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_BusinessSLA_SendByLocalTime}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "undeclared-asset",
      "file": "orchestrator",
      "detail": "Asset \"{type:literal,value:BGV20_OrchestratorFolderName}\" is referenced in XAML but not declared in orchestrator artifacts",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"InFullName\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"InConfig\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"InQueueItemId\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"OutResolvedEmail\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"OutResolvedEmailLabel\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"OutOutcome\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 159: property \"OutErrorMessage\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"InFirstName\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"InFullName\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"InRunDate\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"InConfig\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"InQueueItemId\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"OutEmailBody\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 301: property \"OutErrorMessage\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "DispatcherMain.xaml",
      "detail": "Line 76: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "DispatcherMain.xaml",
      "detail": "Line 76: property \"out_ConfigDictionary\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "PerformerMain.xaml",
      "detail": "Line 69: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "PerformerMain.xaml",
      "detail": "Line 214: property \"Arguments\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "PerformerMain.xaml",
      "detail": "Line 253: property \"Key\" is not a known property of Sequence",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "Process.xaml",
      "detail": "Line 76: x:TypeArguments=\"UiPath.Persistence.Activities.FormTask\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 69: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 108: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_Gmail_FromConnectionName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 147: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 186: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailSubjectTemplate&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 225: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailPreferenceLabels&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 264: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_SkipIfAmbiguousContactMatch&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 303: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 342: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_LogMaskEmails&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 381: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_Temperature&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 420: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_MaxChars&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 459: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_MaxBirthdaysPerRun&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 498: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_BusinessSLA_SendByLocalTime&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitializeConfig.xaml",
      "detail": "Line 537: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_OrchestratorFolderName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ResolveBirthdayRecipient.xaml",
      "detail": "Line 100: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 104: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 443: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 395: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:30&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 443: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "DispatcherMain.xaml",
      "detail": "Line 190: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "DispatcherMain.xaml",
      "detail": "Line 190: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
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
      "detail": "Line 100: asset name \"BGV20_GoogleOAuth_Credential\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 105: asset name \"BGV20_GoogleCalendar_Name\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 114: asset name \"BGV20_Gmail_FromConnectionName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 123: asset name \"BGV20_RunTimeZone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 132: asset name \"BGV20_EmailSubjectTemplate\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 141: asset name \"BGV20_EmailPreferenceLabels\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 150: asset name \"BGV20_SkipIfAmbiguousContactMatch\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 159: asset name \"BGV20_QueueItemDeferMinutes_OnRateLimit\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 168: asset name \"BGV20_LogMaskEmails\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 177: asset name \"BGV20_GenAI_Temperature\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 186: asset name \"BGV20_GenAI_MaxChars\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 195: asset name \"BGV20_MaxBirthdaysPerRun\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 204: asset name \"BGV20_BusinessSLA_SendByLocalTime\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 213: asset name \"BGV20_OrchestratorFolderName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "GenerateBirthdayMessage.xaml",
      "detail": "Line 86: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;(CDbl(If(InT...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Process.xaml",
      "detail": "Line 132: Standalone \"Yes\" corrected to \"True\" in expression: Yes",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Process.xaml",
      "detail": "Line 231: Standalone \"Yes\" corrected to \"True\" in expression: Yes",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "Process.xaml",
      "detail": "Line 509: Standalone \"Yes\" corrected to \"True\" in expression: Yes",
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
  "totalEstimatedEffortMinutes": 330,
  "studioCompatibility": [
    {
      "file": "InitializeConfig.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "ResolveBirthdayRecipient.xaml",
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
      "file": "ProcessTransaction.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "DispatcherMain.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "PerformerMain.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[XML-WELLFORMEDNESS] XML well-formedness failure in tree assembler"
      ],
      "failureCategory": "xml-wellformedness",
      "failureSummary": "XML well-formedness failure in tree assembler"
    },
    {
      "file": "Process.xaml",
      "level": "studio-warnings",
      "blockers": []
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
      "file": "AgentInvocation_Stub.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ResolveBirthdayRecipient.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;GenerateBirthdayMessage.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;InitializeConfig.xaml&quot;}",
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
    "totalViolations": 33,
    "stubbed": 0,
    "corrected": 33,
    "blocked": 0,
    "degraded": 0,
    "details": [
      {
        "file": "PerformerMain.xaml",
        "line": 253,
        "type": "sentinel-expression",
        "detail": "Sentinel expression \"HANDOFF_TODO\" found and replaced with TODO stub",
        "resolution": "corrected"
      },
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
        "line": 380,
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
        "line": 380,
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
        "file": "AgentInvocation_Stub.xaml",
        "line": 55,
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
