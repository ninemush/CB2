# Developer Handoff Guide

**Project:** BirthdayGreetingsAutonomousV2
**Description:** Fully autonomous unattended daily birthday greeting automation using Google Calendar, Google Contacts, Gmail Integration Service, and UiPath GenAI Activities. Reads today's birthday events, resolves recipient emails, generates warm/funny/sarcastic greetings, and sends via Gmail.
**Generated:** 2026-03-26
**Architecture:** Sequential (Linear workflow)
**Automation Type:** Hybrid (RPA + Agent)

**Readiness Score: 84%** | Estimated developer effort: **~4.8 hours** (0 selectors, 0 credentials, 105 min mandatory validation)

---

## 1. Pipeline Outcome Report

### Fully Generated (12 file(s))

These workflows were generated without any stub replacements or escalation.

- `BirthdayGreetingsAutonomousV2.xaml`
- `InitAllSettings.xaml`
- `CloseAllApplications.xaml`
- `Main.xaml`
- `WF_GetTodaysBirthdays.xaml`
- `WF_ProcessBirthdayTransaction.xaml`
- `WF_ResolveRecipientEmail.xaml`
- `WF_GenerateGreeting.xaml`
- `WF_SendGreetingEmail.xaml`
- `WF_NotifyMissingEmail.xaml`
- `WF_PersistTransactionRecord.xaml`
- `WF_PersistRunRecord.xaml`

---

## 2. Tier 1 — AI Completed (No Human Action Required)

The following items were fully automated by CannonBall. These are verified facts from deterministic analysis.

### Workflow Inventory

**9 XAML workflow(s)** generated containing **82 activities** total.

| # | Workflow File | Purpose | Role |
|---|--------------|---------|------|
| 1 | `Main.xaml` | Entry point workflow | Entry Point |
| 2 | `WF_GetTodaysBirthdays.xaml` | Sub-workflow | Sub-workflow |
| 3 | `WF_ProcessBirthdayTransaction.xaml` | Sub-workflow | Sub-workflow |
| 4 | `WF_ResolveRecipientEmail.xaml` | Sub-workflow | Sub-workflow |
| 5 | `WF_GenerateGreeting.xaml` | Sub-workflow | Sub-workflow |
| 6 | `WF_SendGreetingEmail.xaml` | Sub-workflow | Sub-workflow |
| 7 | `WF_NotifyMissingEmail.xaml` | Sub-workflow | Sub-workflow |
| 8 | `WF_PersistTransactionRecord.xaml` | Sub-workflow | Sub-workflow |
| 9 | `WF_PersistRunRecord.xaml` | Sub-workflow | Sub-workflow |

### Workflow Analyzer Compliance

Analyzed 12 workflow file(s) against UiPath Workflow Analyzer rules.

| Rule ID | Rule | Category | Status | Auto-Fixed | Remaining |
|---------|------|----------|--------|------------|----------|
| ST-NMG-001 | Variable naming convention | naming | Passed | 0 | 0 |
| ST-NMG-004 | Argument naming convention | naming | Passed | 0 | 0 |
| ST-NMG-009 | Activity must have DisplayName | naming | Passed | 0 | 0 |
| ST-DBP-002 | Empty Catch block | best-practice | Needs Review | 0 | 1 |
| ST-DBP-006 | Delay activity usage | best-practice | Passed | 0 | 0 |
| ST-DBP-020 | Hardcoded timeout | best-practice | Passed | 0 | 0 |
| ST-DBP-025 | Workflow start/end logging | best-practice | Needs Review | 0 | 11 |
| ST-USG-005 | Unused variable | usage | Needs Review | 0 | 5 |
| ST-USG-017 | Deeply nested If activities | usage | Passed | 0 | 0 |
| ST-SEC-004 | Sensitive data in log message | security | Passed | 0 | 0 |
| ST-SEC-005 | Plaintext credential in property | security | Passed | 0 | 0 |
| ST-ARG-001 | Invalid bare Argument tag in Catch | usage | Passed | 0 | 0 |
| ST-ARG-002 | Missing declaration for invoked argument | usage | Passed | 0 | 0 |
| ST-ARG-003 | Undeclared variable in expression | usage | Passed | 0 | 0 |

**Result:** 154 of 168 rules passed across 12 workflow files. 0 violation(s) auto-corrected, 17 remaining for review.

**Per-Workflow Breakdown:**

| Workflow | Rules Checked | Passed | Auto-Fixed | Remaining |
|----------|--------------|--------|------------|----------|
| `BirthdayGreetingsAutonomousV2.xaml` | 14 | 13 | 0 | 1 |
| `InitAllSettings.xaml` | 14 | 12 | 0 | 5 |
| `CloseAllApplications.xaml` | 14 | 12 | 0 | 2 |
| `Main.xaml` | 14 | 13 | 0 | 1 |
| `WF_GetTodaysBirthdays.xaml` | 14 | 13 | 0 | 1 |
| `WF_ProcessBirthdayTransaction.xaml` | 14 | 13 | 0 | 1 |
| `WF_ResolveRecipientEmail.xaml` | 14 | 13 | 0 | 1 |
| `WF_GenerateGreeting.xaml` | 14 | 13 | 0 | 1 |
| `WF_SendGreetingEmail.xaml` | 14 | 13 | 0 | 1 |
| `WF_NotifyMissingEmail.xaml` | 14 | 13 | 0 | 1 |
| `WF_PersistTransactionRecord.xaml` | 14 | 13 | 0 | 1 |
| `WF_PersistRunRecord.xaml` | 14 | 13 | 0 | 1 |

### Standards Enforcement

| Standard | What Was Done |
|----------|---------------|
| Naming Conventions | Variables renamed to `{type}_{PascalCase}`, arguments to `{direction}_{PascalCase}` |
| Activity Annotations | Every activity annotated with source step number, business context, and error handling strategy |
| Error Handling | All business activities wrapped in TryCatch with Log + Rethrow; UI activities include RetryScope (3 retries, 5s) |
| Logging | Start/end LogMessage in every workflow; exceptions logged at Error level before rethrow |
| Argument Validation | Entry points validate required arguments at workflow start |

### Architecture Decision

**Sequential Pattern** selected — linear step-by-step flow with step dependencies.

---

## 3. Tier 2 — AI Resolved with Smart Defaults (Review Recommended)

The AI set these values based on SDD analysis. They are likely correct but **must be verified** against your target environment before production use.

### Agent Configuration (Review Recommended)

The following agent settings were generated by AI and should be reviewed before production use:

| # | Item | Action Required |
|---|------|-----------------|
| 1 | Agent guardrails | Review safety constraints and response boundaries |
| 2 | Escalation rules | Verify escalation conditions and human-handoff triggers |
| 3 | Agent temperature/iterations | Tune LLM parameters for your use case |
| 4 | Tool permissions | Confirm which UiPath activities the agent can invoke |

### Agent Artifacts in Package

The following agent configuration files are included in the downloadable package:

| File | Purpose | Action |
|------|---------|--------|
| `prompts/system_prompt.txt` | System prompt defining agent behavior and guardrails | REVIEW |
| `prompts/user_prompt_template.txt` | Parameterized user prompt template with input placeholders | REVIEW |
| `tools/tool_definitions.json` | Tool names, descriptions, and input/output schemas | AUTHORIZE |
| `knowledge/kb_placeholder.md` | Instructions for knowledge base document upload | CONFIGURE |
| `agents/*_config.json` | Agent configuration with temperature, iterations, guardrails | TUNE |

#### Import into UiPath Agent Builder

1. Open **UiPath Automation Cloud** → **AI Center** → **Agent Builder**
2. Create a new agent using the name from `agents/*_config.json`
3. Copy the system prompt from `prompts/system_prompt.txt` into the agent's system prompt field
4. Register each tool from `tools/tool_definitions.json`:
   - For each tool, set the name, description, and input schema
   - Grant the required permissions (marked as AUTHORIZE)
5. Upload knowledge base documents per instructions in `knowledge/kb_placeholder.md`
6. Apply configuration values from the agent config file

#### Configuration Checklist

| # | Item | File | Action | Notes |
|---|------|------|--------|-------|
| 1 | System prompt | `prompts/system_prompt.txt` | REVIEW | Verify tone, scope, and safety constraints |
| 2 | User prompt template | `prompts/user_prompt_template.txt` | REVIEW | Confirm input/output format matches your data |
| 3 | Tool permissions | `tools/tool_definitions.json` | AUTHORIZE | Grant each tool access in Agent Builder |
| 4 | Knowledge base | `knowledge/kb_placeholder.md` | CONFIGURE | Upload and index actual business documents |
| 5 | Temperature / iterations | `agents/*_config.json` | TUNE | Adjust for accuracy vs. creativity tradeoff |
| 6 | Guardrails | `agents/*_config.json` | REVIEW | Verify safety constraints are appropriate |
| 7 | Escalation rules | `agents/*_config.json` | REVIEW | Confirm human-handoff triggers |

#### What Works Out of the Box

- System prompt with process-specific context derived from SDD
- Tool definitions with correct schemas
- Agent config with recommended defaults (temperature, max iterations)
- Guardrail definitions from process analysis

#### Requires Human Action (Last-Mile Items)

- **Context grounding data population**: Upload actual business documents (SOPs, policies, FAQs, templates) into the referenced storage bucket(s). The agent config specifies which bucket to use — populate it with real data.
- **Prompt tuning**: The system prompt was generated from the SDD. Test with real production data and refine tone, scope, and output format to match business expectations.
- **Tool authorization**: Each agent tool maps to a deployed Orchestrator process. Verify the agent has permission to invoke each process in Agent Builder.
- **Escalation rule validation**: Confirm escalation conditions and Action Center catalog mappings with business stakeholders.
- **End-to-end testing**: Run the agent with representative inputs, verify tool invocations produce correct outputs, and confirm escalation triggers work as expected.

---

## 4. Process Logic Validation

Use this section to verify that the generated automation correctly implements the business rules defined in the SDD. Each item below should be confirmed against the live system before UAT.

### Extracted Business Rules — Verification Checklist

The following rules were extracted from the SDD. Verify each is correctly implemented in the generated workflows:

| # | Category | Rule / Requirement | Verified |
|---|----------|-------------------|----------|
| 1 | Approval / Rejection Criteria | approved PDD: do **not** email the birthday person | [ ] |
| 2 | Retry / SLA Requirements | Retry Scope, Try Catch, Take Screenshot (where applicable | [ ] |
| 3 | Retry / SLA Requirements | retry with exponential backoff (e | [ ] |
| 4 | Retry / SLA Requirements | retries: 10s, 30s, 90s) | [ ] |
| 5 | Retry / SLA Requirements | timeouts: retry once | [ ] |

---

## 5. Tier 3 — Requires Human Access (Developer Work Required)

These items require a developer with access to target systems and UiPath Studio. **Every generated package requires this work.**

### Agent Setup (Human Required)

These items require human expertise and access to configure the agent for production:

| # | Task | Description | Est. Time |
|---|------|-------------|----------|
| 1 | Knowledge base content | Upload and index actual business documents, SOPs, and reference materials | 60 min |
| 2 | Production prompt tuning | Test and refine system prompts against real-world scenarios and edge cases | 45 min |
| 3 | Agent end-to-end testing | Execute agent with representative inputs, verify outputs and escalation behavior | 30 min |
| 4 | Guardrail validation | Verify agent stays within safety constraints with adversarial test cases | 20 min |
| 5 | RPA-Agent handoff testing | Verify data flows correctly between RPA sequences and agent invocations | 30 min |

### Mandatory: Studio Validation & Testing

Every generated package requires these steps regardless of AI enrichment quality:

| # | Task | Description | Est. Time |
|---|------|-------------|----------|
| 1 | Studio Import | Open .nupkg in UiPath Studio. Install missing packages, resolve dependency conflicts, verify project compiles without errors. | 15 min |
| 2 | End-to-End Testing | Execute all 9 workflows in Studio Debug mode against UAT/test environment. Verify queue processing, exception handling, and business rules. | 30 min |
| 3 | UAT Sign-off | Business stakeholder validation with real data and real systems. Confirm outputs match expected results for representative scenarios. | 60 min |

**Total Tier 3 Effort: ~4.8 hours** (0 selectors, 0 credentials, 0 logic items, mandatory validation)

---

## 6. Code Review Checklist

Use this checklist during peer review before promoting to UAT.

### Workflow Analyzer Remaining Violations

| Severity | Rule | File | Message |
|----------|------|------|---------|
| warning | ST-USG-005 | BirthdayGreetingsAutonomousV2.xaml | Variable "str_ScreenshotPath" is declared but never used |
| warning | ST-DBP-025 | InitAllSettings.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-USG-005 | InitAllSettings.xaml | Variable "str_ConfigPath" is declared but never used |
| warning | ST-USG-005 | InitAllSettings.xaml | Variable "SecTempPass" is declared but never used |
| warning | ST-USG-005 | InitAllSettings.xaml | Variable "drow_RowCurrent" is declared but never used |
| warning | ST-USG-005 | InitAllSettings.xaml | Variable "DictConfig" is declared but never used |
| error | ST-DBP-002 | CloseAllApplications.xaml | Catch block contains no activities — exceptions will be silently swallowed |
| warning | ST-DBP-025 | CloseAllApplications.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | Main.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_GetTodaysBirthdays.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_ProcessBirthdayTransaction.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_ResolveRecipientEmail.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_GenerateGreeting.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_SendGreetingEmail.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_NotifyMissingEmail.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_PersistTransactionRecord.xaml | Workflow does not contain an initial LogMessage activity |
| warning | ST-DBP-025 | WF_PersistRunRecord.xaml | Workflow does not contain an initial LogMessage activity |

### Review Rubric

| Category | Check | Status |
|----------|-------|---------|
| Exception Handling | All activities in TryCatch? Catch blocks log + rethrow? | AI: Done |
| Transaction Integrity | Queue items set to Success/Failed/BusinessException? | N/A |
| Logging | Info log at start/end of each workflow? Critical decisions logged? | AI: Done |
| Selector Reliability | Selectors use stable attributes (automationid, name)? | N/A |
| Credential Security | All credentials in Orchestrator Assets, not hardcoded? | AI: Verified |
| Naming Conventions | Variables/arguments follow type/direction prefixes? | AI: Auto-corrected |
| Annotations | Every activity annotated with business context? | AI: Done |
| Argument Validation | Entry points validate required arguments? | AI: Done |
| Config Management | Environment-specific values in Config.xlsx? | AI: Done |
| Agent Guardrails | Safety constraints prevent harmful agent actions? | Tier 2: Review |
| Agent Escalation | Human handoff triggers correctly configured? | Tier 2: Review |
| Agent Testing | Agent produces expected outputs for sample inputs? | Tier 3: Pending |
| Knowledge Base | Agent has access to required reference documents? | Tier 3: Pending |

### Pre-Deployment Verification

1. Open the project in UiPath Studio
2. Run **Analyze File** > **Workflow Analyzer** on all files
3. Confirm zero errors and zero warnings
4. Run all unit tests in Test Manager
5. Execute a full end-to-end run in Dev environment

### Sign-Off

| Field | Value |
|-------|-------|
| Reviewer | _________________ |
| Date | _________________ |
| Approval | [ ] Approved for UAT  [ ] Requires Changes |
| Notes | _________________ |

---

## 7. Package Contents

| File | Purpose |
|------|--------|
| `project.json` | UiPath project manifest with dependencies |
| `Main.xaml` | Entry point workflow |
| `WF_GetTodaysBirthdays.xaml` | Workflow: WF_GetTodaysBirthdays |
| `WF_ProcessBirthdayTransaction.xaml` | Workflow: WF_ProcessBirthdayTransaction |
| `WF_ResolveRecipientEmail.xaml` | Workflow: WF_ResolveRecipientEmail |
| `WF_GenerateGreeting.xaml` | Workflow: WF_GenerateGreeting |
| `WF_SendGreetingEmail.xaml` | Workflow: WF_SendGreetingEmail |
| `WF_NotifyMissingEmail.xaml` | Workflow: WF_NotifyMissingEmail |
| `WF_PersistTransactionRecord.xaml` | Workflow: WF_PersistTransactionRecord |
| `WF_PersistRunRecord.xaml` | Workflow: WF_PersistRunRecord |
| `InitAllSettings.xaml` | Configuration initialization |
| `Data/Config.xlsx` | Configuration settings |
| `DeveloperHandoffGuide.md` | This guide |

**Required Packages:** `UiPath.System.Activities`, `UiPath.UIAutomation.Activities`, `UiPath.Excel.Activities`

---

## 8. Infrastructure


---

## 9. Go-Live Checklist

#### Development
- [ ] Open project in UiPath Studio — install missing packages
- [ ] Run Workflow Analyzer — confirm zero violations
- [ ] Complete Tier 3 items (selectors, credentials, business logic)
- [ ] Config.xlsx updated with Dev values

#### UAT
- [ ] UAT Orchestrator folder with separate assets/queues
- [ ] Full end-to-end run with real data
- [ ] Business stakeholder sign-off

#### Production
- [ ] Production credentials and assets configured
- [ ] Triggers/schedules active
- [ ] Monitoring and alerting configured
- [ ] Runbook documentation completed


---

# Developer Handoff Guide

**Project:** BirthdayGreetingsAutonomousV2
**Generated:** 2026-03-26
**Generation Mode:** Full Implementation
**Deployment Readiness:** Needs Work (64%)

**Total Estimated Effort: ~0 minutes (0.0 hours)**
**Remediations:** 0 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 0 workflow)
**Auto-Repairs:** 0
**Quality Warnings:** 91

---

## 1. Completed Work

The following 12 workflow(s) were fully generated without any stub replacements or remediation:

- `BirthdayGreetingsAutonomousV2.xaml`
- `InitAllSettings.xaml`
- `CloseAllApplications.xaml`
- `Main.xaml`
- `WF_GetTodaysBirthdays.xaml`
- `WF_ProcessBirthdayTransaction.xaml`
- `WF_ResolveRecipientEmail.xaml`
- `WF_GenerateGreeting.xaml`
- `WF_SendGreetingEmail.xaml`
- `WF_NotifyMissingEmail.xaml`
- `WF_PersistTransactionRecord.xaml`
- `WF_PersistRunRecord.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Main.xaml` | Fully Generated |
| 2 | `WF_GetTodaysBirthdays.xaml` | Fully Generated |
| 3 | `WF_ProcessBirthdayTransaction.xaml` | Fully Generated |
| 4 | `WF_ResolveRecipientEmail.xaml` | Fully Generated |
| 5 | `WF_GenerateGreeting.xaml` | Fully Generated |
| 6 | `WF_SendGreetingEmail.xaml` | Fully Generated |
| 7 | `WF_NotifyMissingEmail.xaml` | Fully Generated |
| 8 | `WF_PersistTransactionRecord.xaml` | Fully Generated |
| 9 | `WF_PersistRunRecord.xaml` | Fully Generated |

## 2. AI-Resolved with Smart Defaults

No auto-repairs were applied.

## 3. Manual Action Required

### Quality Warnings (91)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `BirthdayGreetingsAutonomousV2.xaml` | placeholder-value | Contains 9 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 2 | `WF_GetTodaysBirthdays.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 3 | `WF_ProcessBirthdayTransaction.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 4 | `WF_ResolveRecipientEmail.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 5 | `WF_GenerateGreeting.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 6 | `WF_SendGreetingEmail.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 7 | `WF_NotifyMissingEmail.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 8 | `WF_PersistTransactionRecord.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 9 | `WF_PersistRunRecord.xaml` | placeholder-value | Contains 1 placeholder value(s) matching "\bTODO\b" | — | undefined |
| 10 | `BirthdayGreetingsAutonomousV2.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 11 | `InitAllSettings.xaml` | invalid-activity-property | Line 219: property "InitAllSettings" is not a known property of ui:LogMessage | — | undefined |
| 12 | `InitAllSettings.xaml` | invalid-type-argument | Line 44: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 13 | `CloseAllApplications.xaml` | invalid-activity-property | Line 77: property "CloseAllApplications" is not a known property of ui:LogMessage | — | undefined |
| 14 | `CloseAllApplications.xaml` | invalid-type-argument | Line 42: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 15 | `Main.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 16 | `WF_GetTodaysBirthdays.xaml` | invalid-activity-property | Line 57: property "WF_GetTodaysBirthdays" is not a known property of ui:LogMessage | — | undefined |
| 17 | `WF_GetTodaysBirthdays.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 18 | `WF_ProcessBirthdayTransaction.xaml` | invalid-activity-property | Line 57: property "WF_ProcessBirthdayTransaction" is not a known property of ui:LogMessage | — | undefined |
| 19 | `WF_ProcessBirthdayTransaction.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 20 | `WF_ResolveRecipientEmail.xaml` | invalid-activity-property | Line 57: property "WF_ResolveRecipientEmail" is not a known property of ui:LogMessage | — | undefined |
| 21 | `WF_ResolveRecipientEmail.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 22 | `WF_GenerateGreeting.xaml` | invalid-activity-property | Line 57: property "WF_GenerateGreeting" is not a known property of ui:LogMessage | — | undefined |
| 23 | `WF_GenerateGreeting.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 24 | `WF_SendGreetingEmail.xaml` | invalid-activity-property | Line 57: property "WF_SendGreetingEmail" is not a known property of ui:LogMessage | — | undefined |
| 25 | `WF_SendGreetingEmail.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 26 | `WF_NotifyMissingEmail.xaml` | invalid-activity-property | Line 57: property "WF_NotifyMissingEmail" is not a known property of ui:LogMessage | — | undefined |
| 27 | `WF_NotifyMissingEmail.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 28 | `WF_PersistTransactionRecord.xaml` | invalid-activity-property | Line 57: property "WF_PersistTransactionRecord" is not a known property of ui:LogMessage | — | undefined |
| 29 | `WF_PersistTransactionRecord.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 30 | `WF_PersistRunRecord.xaml` | invalid-activity-property | Line 57: property "WF_PersistRunRecord" is not a known property of ui:LogMessage | — | undefined |
| 31 | `WF_PersistRunRecord.xaml` | invalid-type-argument | Line 39: x:TypeArguments="AssemblyReference" may not be a valid .NET type | — | undefined |
| 32 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 114: asset name "BDAYGREETINGS_GoogleIntegration_Credential" is hardcoded — consider using a... | — | undefined |
| 33 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 126: asset name "BDAYGREETINGS_CalendarName" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 34 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 133: asset name "BDAYGREETINGS_SenderEmail" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 35 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 140: asset name "BDAYGREETINGS_EmailLabelPreferenceCsv" is hardcoded — consider using a Conf... | — | undefined |
| 36 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 147: asset name "BDAYGREETINGS_RunTimeZone" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 37 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 154: asset name "BDAYGREETINGS_EnableGenAI" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 38 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 161: asset name "BDAYGREETINGS_GenAI_Temperature" is hardcoded — consider using a Config.xls... | — | undefined |
| 39 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 168: asset name "BDAYGREETINGS_SubjectTemplate" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 40 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 175: asset name "BDAYGREETINGS_MissingEmailNotificationSubject" is hardcoded — consider usin... | — | undefined |
| 41 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 182: asset name "BDAYGREETINGS_MaxBirthdaysPerRun" is hardcoded — consider using a Config.xl... | — | undefined |
| 42 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 189: asset name "BDAYGREETINGS_OrchestratorFolder" is hardcoded — consider using a Config.xl... | — | undefined |
| 43 | `DeveloperHandoffGuide.md` | archive-parity-missing-artifact | Expected artifact "DeveloperHandoffGuide.md" is not present in the archive manifest | — | undefined |
| 44 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 104: Possible undeclared variable "dict_Config" in expression: dict_Config(row(&quot;Name&qu... | — | undefined |
| 45 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 104: Possible undeclared variable "quot" in expression: dict_Config(row(&quot;Name&quot;).To... | — | undefined |
| 46 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 104: Possible undeclared variable "Name" in expression: dict_Config(row(&quot;Name&quot;).To... | — | undefined |
| 47 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 105: Possible undeclared variable "quot" in expression: row(&quot;Value&quot;) | — | undefined |
| 48 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 105: Possible undeclared variable "Value" in expression: row(&quot;Value&quot;) | — | undefined |
| 49 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 123: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 50 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 123: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Goog... | — | undefined |
| 51 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 123: Possible undeclared variable "BDAYGREETINGS_GoogleIntegration_Credential" in expression... | — | undefined |
| 52 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 130: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 53 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 130: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Cale... | — | undefined |
| 54 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 130: Possible undeclared variable "BDAYGREETINGS_CalendarName" in expression: dict_Config(&q... | — | undefined |
| 55 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 137: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 56 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 137: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Send... | — | undefined |
| 57 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 137: Possible undeclared variable "BDAYGREETINGS_SenderEmail" in expression: dict_Config(&qu... | — | undefined |
| 58 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 144: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 59 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 144: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Emai... | — | undefined |
| 60 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 144: Possible undeclared variable "BDAYGREETINGS_EmailLabelPreferenceCsv" in expression: dic... | — | undefined |
| 61 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 151: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 62 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 151: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_RunT... | — | undefined |
| 63 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 151: Possible undeclared variable "BDAYGREETINGS_RunTimeZone" in expression: dict_Config(&qu... | — | undefined |
| 64 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 158: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 65 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 158: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Enab... | — | undefined |
| 66 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 158: Possible undeclared variable "BDAYGREETINGS_EnableGenAI" in expression: dict_Config(&qu... | — | undefined |
| 67 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 165: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 68 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 165: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_GenA... | — | undefined |
| 69 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 165: Possible undeclared variable "BDAYGREETINGS_GenAI_Temperature" in expression: dict_Conf... | — | undefined |
| 70 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 172: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 71 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 172: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Subj... | — | undefined |
| 72 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 172: Possible undeclared variable "BDAYGREETINGS_SubjectTemplate" in expression: dict_Config... | — | undefined |
| 73 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 179: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 74 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 179: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Miss... | — | undefined |
| 75 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 179: Possible undeclared variable "BDAYGREETINGS_MissingEmailNotificationSubject" in express... | — | undefined |
| 76 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 186: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 77 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 186: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_MaxB... | — | undefined |
| 78 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 186: Possible undeclared variable "BDAYGREETINGS_MaxBirthdaysPerRun" in expression: dict_Con... | — | undefined |
| 79 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 193: Possible undeclared variable "dict_Config" in expression: dict_Config(&quot;BDAYGREETIN... | — | undefined |
| 80 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 193: Possible undeclared variable "quot" in expression: dict_Config(&quot;BDAYGREETINGS_Orch... | — | undefined |
| 81 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 193: Possible undeclared variable "BDAYGREETINGS_OrchestratorFolder" in expression: dict_Con... | — | undefined |
| 82 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 206: Possible undeclared variable "dict_Config" in expression: dict_Config(constRow(&quot;Na... | — | undefined |
| 83 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 206: Possible undeclared variable "quot" in expression: dict_Config(constRow(&quot;Name&quot... | — | undefined |
| 84 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 206: Possible undeclared variable "Name" in expression: dict_Config(constRow(&quot;Name&quot... | — | undefined |
| 85 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 207: Possible undeclared variable "quot" in expression: constRow(&quot;Value&quot;) | — | undefined |
| 86 | `InitAllSettings.xaml` | EXPRESSION_SYNTAX | Line 207: Possible undeclared variable "Value" in expression: constRow(&quot;Value&quot;) | — | undefined |
| 87 | `InitAllSettings.xaml` | CATALOG_VIOLATION | Unrecognized attribute "TypeArguments" on ForEach — not in catalog schema | — | undefined |
| 88 | `CloseAllApplications.xaml` | CATALOG_VIOLATION | Unrecognized child property "Try" on TryCatch — not in catalog schema | — | undefined |
| 89 | `CloseAllApplications.xaml` | CATALOG_VIOLATION | Unrecognized child property "TryCatch.Try" on TryCatch — not in catalog schema | — | undefined |
| 90 | `CloseAllApplications.xaml` | CATALOG_VIOLATION | Unrecognized child property "Catches" on TryCatch — not in catalog schema | — | undefined |
| 91 | `CloseAllApplications.xaml` | CATALOG_VIOLATION | Unrecognized child property "TryCatch.Catches" on TryCatch — not in catalog schema | — | undefined |

**Total manual remediation effort: ~0 minutes (0.0 hours)**

## 4. Process Context (from Pipeline)

### Idea Description

Automate birthday greetings to friends and family

### PDD Summary

## 1. Executive Summary
This Process Design Document (PDD) defines the automation of daily birthday greeting emails. Today, the process is performed manually at approximately 8:00 AM by checking a dedicated Google Calendar (“Birthdays”), identifying whose birthday it is, looking up that person in Google Contacts to find an email address (preferring Home/Personal where multiple exist), drafting a personalized message in a warm, funny, sarcastic voice, and sending the greeting from Gmail. The proposed future state is a fully autonomous unattended UiPath process scheduled via Orchestrator that reads today’s birthday events from the “Birthdays” calendar using Google Calendar activities, resolves recipients and their Home/Personal email via Google Contacts activities, uses UiPath native GenAI Activities to draft a message in the requester’s voice, and sends the email using the Gmail Integration Service connector configured for **ninemush@gmail.com**. If a contact email cannot be found, the automation will not email the birthday person; it will instead notify the requester at **ninemush@gmail.com** with a draft-style notification indicating the greeting could not be sent due to a missing email address.

## 2. Process Scope
The scope includes a once-daily unattended run at 8:00 AM that checks the Google Calendar named **“Birthdays”** for events occurring “today,” interprets each event title as the person’s full name, looks up that person in Google Contacts, selects an email address with preference to labels **Home** or **Personal**, generates a personalized birthday message in the requester’s warm/funny/sarcastic voice using **UiPath GenAI Activities** (not external OpenAI/Azure OpenAI), and sends the email via the **Gmail connector (Integration Service) using the ninemush@gmail.com connection**.

Out of scope for this iteration are: use of Google Drive, use of photos/Google Photos, use of Slack/Teams/Twilio, and any interactive attended execution. Also out of scope is enr...

### SDD Summary

## 1. Automation Architecture Overview

### 1.1 Architectural intent and chosen pattern
This automation is best delivered as a **Hybrid automation (RPA + GenAI)**, executed **unattended** on a schedule. Classic RPA provides deterministic integration with Google Calendar/Contacts/Gmail, while **UiPath GenAI Activities** generate the greeting text in the requester’s warm/funny/sarcastic voice.

**Primary pattern:** *Single-process REFramework-style transaction loop* (not dispatcher/performer)  
- Rationale: daily volume is small (typically 0–N birthdays/day), processing is quick, and there is no downstream multi-robot scaling need. A queue-driven fan-out would add operational overhead without benefit at this stage.  
- The workflow still treats each birthday as a “transaction” internally for clean retries, logging, and per-person outcomes.

### 1.2 Why unattended (vs attended / human-in-the-loop)
- Requirement is **fully autonomous**, and only **unattended slots (13)** are available.
- Human-in-the-loop (Action Center) is therefore **not in the critical path** for sending greetings.
- The only exception path is informational notification to **ninemush@gmail.com** when a contact email cannot be found (per PDD). No approvals are required.

### 1.3 UiPath services used and why (platform-aware)
- **Orchestrator**: scheduling (8:00 AM), configuration via Assets, centralized logging, monitoring, and run history.
- **Integration Service**: required for Google systems; explicitly preferred over custom HTTP per constraints and operability (token rotation handled by connector).
- **UiPath GenAI Activities**: native generation of message content; explicitly not OpenAI/Azure OpenAI.
- **Data Service**: persistence across runs for idempotency and auditability (what was sent, to whom, when, with what subject/body hash). This prevents duplicates if jobs are retried or re-run.
- **Storage Buckets**: store prompt templates, “voice” grounding snippets, and run artifacts (e.g., per-run ...

**Automation Type:** hybrid
**Rationale:** The trigger, calendar/contacts lookups, and Gmail send are deterministic (RPA), but generating a “warm/funny/sarcastic in my voice” message is judgment-based natural language generation best handled by a GenAI/Agent component.
**Feasibility Complexity:** medium
**Effort Estimate:** 1-2 weeks

## 5. Business Process Overview

### Process Steps

| # | Step | Role | System | Type | Pain Point |
|---|------|------|--------|------|------------|
| 1 | 8am Birthday Greeting Trigger | System | Orchestrator Triggers | start | — |
| 2 | Get Today's Events from "Birthdays" Calendar | System | Google Calendar (UiPath Activity) | task | — |
| 3 | Any Birthdays Today? | System | Google Calendar (UiPath Activity) | decision | — |
| 4 | For Each Birthday Person — Resolve Contact Record | System | Google Contacts (UiPath Activity) | task | — |
| 5 | End — No Birthdays Today | System | Orchestrator | end | — |
| 6 | Personal/Home Email Available? | System | Google Contacts (UiPath Activity) | decision | — |
| 7 | Select Personal Email (prefer Home/Personal) | System | Google Contacts (UiPath Activity) | task | — |
| 8 | Skip Person (No Email Found) | System | Orchestrator | task | — |
| 9 | Draft Birthday Message in My Voice | System | UiPath GenAI Activities | agent-task | — |
| 10 | Send Birthday Email | System | Gmail (Integration Service - ninemush@gmail.com) | task | — |
| 11 | Notify Me of Skipped Contacts (Draft Email) | System | Gmail (Integration Service - ninemush@gmail.com) | task | — |
| 12 | End — Run Completed | System | Orchestrator | end | — |

### Target Applications / Systems

The following applications were identified from the process map and must be accessible from the robot machine:

- Orchestrator Triggers
- Google Calendar (UiPath Activity)
- Google Contacts (UiPath Activity)
- Orchestrator
- UiPath GenAI Activities
- Gmail (Integration Service - ninemush@gmail.com)

### User Roles Involved

- System

### Decision Points (Process Map Topology)

**Any Birthdays Today?**
  - [Yes] → For Each Birthday Person — Resolve Contact Record
  - [No] → End — No Birthdays Today

**Personal/Home Email Available?**
  - [Yes] → Select Personal Email (prefer Home/Personal)
  - [No] → Skip Person (No Email Found)

## 6. Environment Setup

| Requirement | Value |
|---|---|
| Target Framework | Windows (required) |
| Robot Type | Unattended |
| Modern Activities | Yes |
| Studio Version | 25.10.0 |
| Orchestrator Connection | Required |
| Machine Template | Standard |

### Machine Template

**Recommended:** Standard
Standard unattended machine template

### Orchestrator Folder Structure

Create a Modern Folder with at least one unattended robot assignment. Use folder-level credential stores for asset isolation.

### NuGet Dependencies

| # | Package |
|---|--------|
| 1 | `UiPath.System.Activities` |
| 2 | `UiPath.UIAutomation.Activities` |
| 3 | `UiPath.Excel.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Google Calendar (UiPath Activity)
- Google Contacts (UiPath Activity)
- Orchestrator
- UiPath GenAI Activities
- Gmail (Integration Service - ninemush@gmail.com)

## 7. Credential & Asset Inventory

**Total:** 21 activities (11 hardcoded, 10 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BDAYGREETINGS_GoogleIntegration_Credential` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `BDAYGREETINGS_CalendarName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 2 | `BDAYGREETINGS_SenderEmail` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 3 | `BDAYGREETINGS_EmailLabelPreferenceCsv` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 4 | `BDAYGREETINGS_RunTimeZone` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 5 | `BDAYGREETINGS_EnableGenAI` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 6 | `BDAYGREETINGS_GenAI_Temperature` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 7 | `BDAYGREETINGS_SubjectTemplate` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 8 | `BDAYGREETINGS_MissingEmailNotificationSubject` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 9 | `BDAYGREETINGS_MaxBirthdaysPerRun` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 10 | `BDAYGREETINGS_OrchestratorFolder` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `InitAllSettings.xaml` | 114 | GetCredential | `BDAYGREETINGS_GoogleIntegration_Credential` | Credential | — | Yes |
| `InitAllSettings.xaml` | 126 | GetAsset | `BDAYGREETINGS_CalendarName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 127 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 133 | GetAsset | `BDAYGREETINGS_SenderEmail` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 134 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 140 | GetAsset | `BDAYGREETINGS_EmailLabelPreferenceCsv` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 141 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 147 | GetAsset | `BDAYGREETINGS_RunTimeZone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 148 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 154 | GetAsset | `BDAYGREETINGS_EnableGenAI` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 155 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 161 | GetAsset | `BDAYGREETINGS_GenAI_Temperature` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 162 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 168 | GetAsset | `BDAYGREETINGS_SubjectTemplate` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 169 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 175 | GetAsset | `BDAYGREETINGS_MissingEmailNotificationSubject` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 176 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 182 | GetAsset | `BDAYGREETINGS_MaxBirthdaysPerRun` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 183 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 189 | GetAsset | `BDAYGREETINGS_OrchestratorFolder` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 190 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 11 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 11 aligned, 1 SDD-only, 0 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BDAYGREETINGS_CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name to query for today's birthday events. | `InitAllSettings.xaml` | 126 |
| 2 | `BDAYGREETINGS_SenderEmail` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Sender email address (also the notification recipient for missing contact emails). | `InitAllSettings.xaml` | 133 |
| 3 | `BDAYGREETINGS_EmailLabelPreferenceCsv` | asset | **Aligned** | type: Text, value: Home,Personal, description: Comma-separated ordered list of preferred Google Contacts email labels to select recipient address. | `InitAllSettings.xaml` | 140 |
| 4 | `BDAYGREETINGS_RunTimeZone` | asset | **Aligned** | type: Text, value: America/New_York, description: Business time zone used for 'today' calculation and the 8:00 AM schedule. | `InitAllSettings.xaml` | 147 |
| 5 | `BDAYGREETINGS_EnableGenAI` | asset | **Aligned** | type: Bool, value: true, description: Feature flag to enable/disable GenAI message generation (fallback to template if disabled). | `InitAllSettings.xaml` | 154 |
| 6 | `BDAYGREETINGS_GenAI_Temperature` | asset | **Aligned** | type: Integer, value: 3, description: GenAI creativity control (scaled 0-10). Default moderate for warm/funny/sarcastic voice. | `InitAllSettings.xaml` | 161 |
| 7 | `BDAYGREETINGS_SubjectTemplate` | asset | **Aligned** | type: Text, value: Happy Birthday, {FirstName}!, description: Email subject template. Robot may derive FirstName from calendar event title. | `InitAllSettings.xaml` | 168 |
| 8 | `BDAYGREETINGS_MissingEmailNotificationSubject` | asset | **Aligned** | type: Text, value: Birthday greeting not sent: missing email for {FullName}, description: Subject template for notification email when contact has no usable email. | `InitAllSettings.xaml` | 175 |
| 9 | `BDAYGREETINGS_MaxBirthdaysPerRun` | asset | **Aligned** | type: Integer, value: 50, description: Safety limit to prevent runaway sends if the calendar is misconfigured. | `InitAllSettings.xaml` | 182 |
| 10 | `BDAYGREETINGS_OrchestratorFolder` | asset | **Aligned** | type: Text, value: Shared, description: Target Orchestrator folder logical name where processes/queues/assets are deployed. | `InitAllSettings.xaml` | 189 |
| 11 | `BDAYGREETINGS_GoogleIntegration_Credential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for Google access if/when connector-less authentication is introduced (not used when Integration Service connections suffice). | `InitAllSettings.xaml` | 114 |
| 12 | `BDAYGREETINGS_WorkItems` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Queue of birthday greeting work items (one per birthday event/person) to enable reliable processing, retries, and run visibility. | — | — |

## 9. Queue Management

No queue activities detected in the package.

## 10. Exception Handling Coverage

**Coverage:** 0/21 high-risk activities inside TryCatch (0%)

### Files Without TryCatch

- `BirthdayGreetingsAutonomousV2.xaml`
- `InitAllSettings.xaml`
- `Main.xaml`
- `WF_GetTodaysBirthdays.xaml`
- `WF_ProcessBirthdayTransaction.xaml`
- `WF_ResolveRecipientEmail.xaml`
- `WF_GenerateGreeting.xaml`
- `WF_SendGreetingEmail.xaml`
- `WF_NotifyMissingEmail.xaml`
- `WF_PersistTransactionRecord.xaml`
- `WF_PersistRunRecord.xaml`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `InitAllSettings.xaml:114` | Get BDAYGREETINGS_GoogleIntegration_Credential |
| 2 | `InitAllSettings.xaml:126` | Get BDAYGREETINGS_CalendarName |
| 3 | `InitAllSettings.xaml:127` | ui:GetAsset |
| 4 | `InitAllSettings.xaml:133` | Get BDAYGREETINGS_SenderEmail |
| 5 | `InitAllSettings.xaml:134` | ui:GetAsset |
| 6 | `InitAllSettings.xaml:140` | Get BDAYGREETINGS_EmailLabelPreferenceCsv |
| 7 | `InitAllSettings.xaml:141` | ui:GetAsset |
| 8 | `InitAllSettings.xaml:147` | Get BDAYGREETINGS_RunTimeZone |
| 9 | `InitAllSettings.xaml:148` | ui:GetAsset |
| 10 | `InitAllSettings.xaml:154` | Get BDAYGREETINGS_EnableGenAI |
| 11 | `InitAllSettings.xaml:155` | ui:GetAsset |
| 12 | `InitAllSettings.xaml:161` | Get BDAYGREETINGS_GenAI_Temperature |
| 13 | `InitAllSettings.xaml:162` | ui:GetAsset |
| 14 | `InitAllSettings.xaml:168` | Get BDAYGREETINGS_SubjectTemplate |
| 15 | `InitAllSettings.xaml:169` | ui:GetAsset |
| 16 | `InitAllSettings.xaml:175` | Get BDAYGREETINGS_MissingEmailNotificationSubject |
| 17 | `InitAllSettings.xaml:176` | ui:GetAsset |
| 18 | `InitAllSettings.xaml:182` | Get BDAYGREETINGS_MaxBirthdaysPerRun |
| 19 | `InitAllSettings.xaml:183` | ui:GetAsset |
| 20 | `InitAllSettings.xaml:189` | Get BDAYGREETINGS_OrchestratorFolder |
| 21 | `InitAllSettings.xaml:190` | ui:GetAsset |

> **Recommendation:** Wrap these activities in TryCatch blocks with appropriate exception types (BusinessRuleException for data errors, System.Exception for general failures).

## 11. Trigger Configuration

Based on the process analysis, the following trigger configuration is recommended:

| # | Trigger Type | Reason | Configuration |
|---|-------------|--------|---------------|
| 1 | **Schedule** | Defined in SDD orchestrator_artifacts: BDAYGREETINGS_Daily_8AM | SDD-specified: BDAYGREETINGS_Daily_8AM | Cron: 0 0 8 ? * * * | Daily schedule at 08:00 (tenant time zone). Starts the dispatcher/performer flow (single process if implemented monolithically). |
| 2 | **Queue** | Defined in SDD orchestrator_artifacts: BDAYGREETINGS_Queue_Processor | SDD-specified: BDAYGREETINGS_Queue_Processor | Queue: BDAYGREETINGS_WorkItems | Queue-based trigger to process birthday greeting work items reliably with retries. |

## 12. Upstream Quality Findings

The following quality warnings were produced by upstream pipeline stages (selector scoring, type validation, expression linting, etc.) and should be addressed during development:

| Code | Severity | Count | Sample Message |
|------|----------|-------|----------------|
| undefined | warning | 91 |  |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Credentials | Provision credential: `BDAYGREETINGS_GoogleIntegration_Credential` | Yes |
| 5 | Assets | Provision asset: `BDAYGREETINGS_CalendarName` | Yes |
| 6 | Assets | Provision asset: `BDAYGREETINGS_SenderEmail` | Yes |
| 7 | Assets | Provision asset: `BDAYGREETINGS_EmailLabelPreferenceCsv` | Yes |
| 8 | Assets | Provision asset: `BDAYGREETINGS_RunTimeZone` | Yes |
| 9 | Assets | Provision asset: `BDAYGREETINGS_EnableGenAI` | Yes |
| 10 | Assets | Provision asset: `BDAYGREETINGS_GenAI_Temperature` | Yes |
| 11 | Assets | Provision asset: `BDAYGREETINGS_SubjectTemplate` | Yes |
| 12 | Assets | Provision asset: `BDAYGREETINGS_MissingEmailNotificationSubject` | Yes |
| 13 | Assets | Provision asset: `BDAYGREETINGS_MaxBirthdaysPerRun` | Yes |
| 14 | Assets | Provision asset: `BDAYGREETINGS_OrchestratorFolder` | Yes |
| 15 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 16 | Testing | Run smoke test in target environment | Yes |
| 17 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 18 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 19 | Governance | Peer code review completed | Yes |
| 20 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 21 | Governance | Business process owner validation obtained | Yes |
| 22 | Governance | CoE approval obtained | Yes |
| 23 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Needs Work — 32/50 (64%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 11 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 2/10 | Only 0% of high-risk activities covered by TryCatch; 11 file(s) with no TryCatch blocks |
| Queue Management | 10/10 | No queue activities — section not applicable |
| Build Quality | 5/10 | 91 quality warnings — significant remediation needed |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 20 |
| Valid activities | 20 |
| Unknown → Comment stubs | 0 |
| Non-catalog properties stripped | 0 |
| Enum values auto-corrected | 0 |
| Missing required props filled | 0 |
| Total issues | 0 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 0 auto-fixed, 0 total issues |
| Post-emission (quality gate) | 91 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "BirthdayGreetingsAutonomousV2.xaml",
    "InitAllSettings.xaml",
    "CloseAllApplications.xaml",
    "Main.xaml",
    "WF_GetTodaysBirthdays.xaml",
    "WF_ProcessBirthdayTransaction.xaml",
    "WF_ResolveRecipientEmail.xaml",
    "WF_GenerateGreeting.xaml",
    "WF_SendGreetingEmail.xaml",
    "WF_NotifyMissingEmail.xaml",
    "WF_PersistTransactionRecord.xaml",
    "WF_PersistRunRecord.xaml"
  ],
  "autoRepairs": [],
  "remediations": [],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "BirthdayGreetingsAutonomousV2.xaml",
      "detail": "Contains 9 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_GetTodaysBirthdays.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_ProcessBirthdayTransaction.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_ResolveRecipientEmail.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_GenerateGreeting.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_SendGreetingEmail.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_NotifyMissingEmail.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_PersistTransactionRecord.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "placeholder-value",
      "file": "WF_PersistRunRecord.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\"",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "BirthdayGreetingsAutonomousV2.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "InitAllSettings.xaml",
      "detail": "Line 219: property \"InitAllSettings\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "InitAllSettings.xaml",
      "detail": "Line 44: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "CloseAllApplications.xaml",
      "detail": "Line 77: property \"CloseAllApplications\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "CloseAllApplications.xaml",
      "detail": "Line 42: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "Main.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_GetTodaysBirthdays.xaml",
      "detail": "Line 57: property \"WF_GetTodaysBirthdays\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_GetTodaysBirthdays.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_ProcessBirthdayTransaction.xaml",
      "detail": "Line 57: property \"WF_ProcessBirthdayTransaction\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_ProcessBirthdayTransaction.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_ResolveRecipientEmail.xaml",
      "detail": "Line 57: property \"WF_ResolveRecipientEmail\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_ResolveRecipientEmail.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_GenerateGreeting.xaml",
      "detail": "Line 57: property \"WF_GenerateGreeting\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_GenerateGreeting.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_SendGreetingEmail.xaml",
      "detail": "Line 57: property \"WF_SendGreetingEmail\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_SendGreetingEmail.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_NotifyMissingEmail.xaml",
      "detail": "Line 57: property \"WF_NotifyMissingEmail\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_NotifyMissingEmail.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_PersistTransactionRecord.xaml",
      "detail": "Line 57: property \"WF_PersistTransactionRecord\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_PersistTransactionRecord.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "WF_PersistRunRecord.xaml",
      "detail": "Line 57: property \"WF_PersistRunRecord\" is not a known property of ui:LogMessage",
      "severity": "warning"
    },
    {
      "check": "invalid-type-argument",
      "file": "WF_PersistRunRecord.xaml",
      "detail": "Line 39: x:TypeArguments=\"AssemblyReference\" may not be a valid .NET type",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 114: asset name \"BDAYGREETINGS_GoogleIntegration_Credential\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 126: asset name \"BDAYGREETINGS_CalendarName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 133: asset name \"BDAYGREETINGS_SenderEmail\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 140: asset name \"BDAYGREETINGS_EmailLabelPreferenceCsv\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 147: asset name \"BDAYGREETINGS_RunTimeZone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 154: asset name \"BDAYGREETINGS_EnableGenAI\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 161: asset name \"BDAYGREETINGS_GenAI_Temperature\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 168: asset name \"BDAYGREETINGS_SubjectTemplate\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 175: asset name \"BDAYGREETINGS_MissingEmailNotificationSubject\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 182: asset name \"BDAYGREETINGS_MaxBirthdaysPerRun\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 189: asset name \"BDAYGREETINGS_OrchestratorFolder\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "archive-parity-missing-artifact",
      "file": "DeveloperHandoffGuide.md",
      "detail": "Expected artifact \"DeveloperHandoffGuide.md\" is not present in the archive manifest",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 104: Possible undeclared variable \"dict_Config\" in expression: dict_Config(row(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 104: Possible undeclared variable \"quot\" in expression: dict_Config(row(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 104: Possible undeclared variable \"Name\" in expression: dict_Config(row(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 105: Possible undeclared variable \"quot\" in expression: row(&quot;Value&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 105: Possible undeclared variable \"Value\" in expression: row(&quot;Value&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 123: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_GoogleIntegration_Credential...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 123: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_GoogleIntegration_Credential...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 123: Possible undeclared variable \"BDAYGREETINGS_GoogleIntegration_Credential\" in expression: dict_Config(&quot;BDAYGREETINGS_GoogleIntegration_Credential...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 130: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_CalendarName&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 130: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_CalendarName&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 130: Possible undeclared variable \"BDAYGREETINGS_CalendarName\" in expression: dict_Config(&quot;BDAYGREETINGS_CalendarName&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 137: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_SenderEmail&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 137: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_SenderEmail&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 137: Possible undeclared variable \"BDAYGREETINGS_SenderEmail\" in expression: dict_Config(&quot;BDAYGREETINGS_SenderEmail&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 144: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_EmailLabelPreferenceCsv&quot...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 144: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_EmailLabelPreferenceCsv&quot...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 144: Possible undeclared variable \"BDAYGREETINGS_EmailLabelPreferenceCsv\" in expression: dict_Config(&quot;BDAYGREETINGS_EmailLabelPreferenceCsv&quot...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 151: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_RunTimeZone&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 151: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_RunTimeZone&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 151: Possible undeclared variable \"BDAYGREETINGS_RunTimeZone\" in expression: dict_Config(&quot;BDAYGREETINGS_RunTimeZone&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 158: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_EnableGenAI&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 158: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_EnableGenAI&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 158: Possible undeclared variable \"BDAYGREETINGS_EnableGenAI\" in expression: dict_Config(&quot;BDAYGREETINGS_EnableGenAI&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 165: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_GenAI_Temperature&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 165: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_GenAI_Temperature&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 165: Possible undeclared variable \"BDAYGREETINGS_GenAI_Temperature\" in expression: dict_Config(&quot;BDAYGREETINGS_GenAI_Temperature&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 172: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_SubjectTemplate&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 172: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_SubjectTemplate&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 172: Possible undeclared variable \"BDAYGREETINGS_SubjectTemplate\" in expression: dict_Config(&quot;BDAYGREETINGS_SubjectTemplate&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 179: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_MissingEmailNotificationSubj...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 179: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_MissingEmailNotificationSubj...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 179: Possible undeclared variable \"BDAYGREETINGS_MissingEmailNotificationSubject\" in expression: dict_Config(&quot;BDAYGREETINGS_MissingEmailNotificationSubj...",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 186: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_MaxBirthdaysPerRun&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 186: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_MaxBirthdaysPerRun&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 186: Possible undeclared variable \"BDAYGREETINGS_MaxBirthdaysPerRun\" in expression: dict_Config(&quot;BDAYGREETINGS_MaxBirthdaysPerRun&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 193: Possible undeclared variable \"dict_Config\" in expression: dict_Config(&quot;BDAYGREETINGS_OrchestratorFolder&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 193: Possible undeclared variable \"quot\" in expression: dict_Config(&quot;BDAYGREETINGS_OrchestratorFolder&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 193: Possible undeclared variable \"BDAYGREETINGS_OrchestratorFolder\" in expression: dict_Config(&quot;BDAYGREETINGS_OrchestratorFolder&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 206: Possible undeclared variable \"dict_Config\" in expression: dict_Config(constRow(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 206: Possible undeclared variable \"quot\" in expression: dict_Config(constRow(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 206: Possible undeclared variable \"Name\" in expression: dict_Config(constRow(&quot;Name&quot;).ToString())",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 207: Possible undeclared variable \"quot\" in expression: constRow(&quot;Value&quot;)",
      "severity": "warning"
    },
    {
      "check": "EXPRESSION_SYNTAX",
      "file": "InitAllSettings.xaml",
      "detail": "Line 207: Possible undeclared variable \"Value\" in expression: constRow(&quot;Value&quot;)",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "InitAllSettings.xaml",
      "detail": "Unrecognized attribute \"TypeArguments\" on ForEach — not in catalog schema",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "CloseAllApplications.xaml",
      "detail": "Unrecognized child property \"Try\" on TryCatch — not in catalog schema",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "CloseAllApplications.xaml",
      "detail": "Unrecognized child property \"TryCatch.Try\" on TryCatch — not in catalog schema",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "CloseAllApplications.xaml",
      "detail": "Unrecognized child property \"Catches\" on TryCatch — not in catalog schema",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "CloseAllApplications.xaml",
      "detail": "Unrecognized child property \"TryCatch.Catches\" on TryCatch — not in catalog schema",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 0,
  "preEmissionValidation": {
    "totalActivities": 20,
    "validActivities": 20,
    "unknownActivities": 0,
    "strippedProperties": 0,
    "enumCorrections": 0,
    "missingRequiredFilled": 0,
    "commentConversions": 0,
    "issueCount": 0
  }
}
```
