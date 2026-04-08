# Developer Handoff Guide

**Project:** BirthdayGreetingsV7
**Generated:** 2026-03-30
**Generation Mode:** Baseline Openable (minimal, deterministic)
**Deployment Readiness:** Not Ready (39%)

**Total Estimated Effort: ~135 minutes (2.3 hours)**
**Remediations:** 11 total (0 property, 2 activity, 0 sequence, 8 structural-leaf, 1 workflow)
**Auto-Repairs:** 5
**Quality Warnings:** 26

---

## 1. Completed Work

The following 5 workflow(s) were fully generated without any stub replacements or remediation:

- `Main.xaml`
- `Dispatcher.xaml`
- `Performer.xaml`
- `ContactResolver.xaml`
- `GenerateAndValidateMessage.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `SendGreetingOrNotify.xaml` | Structurally invalid (stub) |
| 2 | `InitAllSettings.xaml` | Generated with Remediations |
| 3 | `Main.xaml` | Fully Generated |
| 4 | `Dispatcher.xaml` | Fully Generated |
| 5 | `Performer.xaml` | Fully Generated |
| 6 | `ContactResolver.xaml` | Fully Generated |
| 7 | `GenerateAndValidateMessage.xaml` | Fully Generated |

### Studio Compatibility

| # | Workflow | Compatibility | Blockers |
|---|----------|--------------|----------|
| 1 | `SendGreetingOrNotify.xaml` | Structurally invalid — requires fixes | [STUB_WORKFLOW_GENERATOR_FAILURE] Workflow was replaced with a stub due to ge... |
| 2 | `InitAllSettings.xaml` | Studio-openable | — |
| 3 | `Main.xaml` | Studio-openable | — |
| 4 | `Dispatcher.xaml` | Studio-openable | — |
| 5 | `Performer.xaml` | Studio-openable | — |
| 6 | `ContactResolver.xaml` | Studio-openable | — |
| 7 | `GenerateAndValidateMessage.xaml` | Studio-openable | — |

**Summary:** 6 clean, 0 with warnings, 1 blocked

> **⚠ 1 workflow(s) have structural defects that will prevent Studio from loading or executing them.** Address the blockers listed above before importing into Studio.

## 2. AI-Resolved with Smart Defaults

The following 5 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_LOG_LEVEL_NORMALIZE` | `SendGreetingOrNotify.xaml` | Normalised LogMessage Level="Information" → "Info" in SendGreetingOrNotify.xaml | undefined |
| 2 | `REPAIR_LOG_LEVEL_NORMALIZE` | `SendGreetingOrNotify.xaml` | Normalised LogMessage Level="Warning" → "Warn" in SendGreetingOrNotify.xaml | undefined |
| 3 | `REPAIR_GENERIC` | `unknown` | Structural preservation: SendGreetingOrNotify.xaml preserved unchanged — XML is valid but blockin... | undefined |
| 4 | `REPAIR_GENERIC` | `unknown` | Structural preservation: InitAllSettings.xaml preserved unchanged — XML is valid but blocking iss... | undefined |
| 5 | `REPAIR_GENERIC` | `unknown` | Skipped full-package stub escalation — structural-preservation stubs already cover affected files | undefined |

## 3. Manual Action Required

### Activity-Level Stubs (2)

Entire activities were replaced with TODO stubs. The surrounding workflow structure is preserved.

| # | File | Activity | Code | Developer Action | Est. Minutes |
|---|------|----------|------|-----------------|-------------|
| 1 | `SendGreetingOrNotify.xaml` | Branch: Safe → Send Greeting | Flagged/Error → Notify | `STUB_ACTIVITY_UNKNOWN` | Manually implement "Branch: Safe → Send Greeting \| Flagged/Error → Notify" ac... | 15 |
| 2 | `SendGreetingOrNotify.xaml` | [FLAGGED] Compose internal notification email body string | `STUB_ACTIVITY_UNKNOWN` | Manually implement "[FLAGGED] Compose internal notification email body string... | 15 |

### Structural-Leaf Stubs (8)

Individual leaf activities were stubbed while preserving the workflow skeleton (sequences, branches, try/catch, loops, invocations).

| # | File | Activity | Original Tag | Code | Developer Action | Est. Minutes |
|---|------|----------|-------------|------|-----------------|-------------|
| 1 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix UNDECLARED_VARIABLE issue in SendGreetingOrNotify.xaml — workf... | 15 |
| 2 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow s... | 5 |
| 3 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix CATALOG_STRUCTURAL_VIOLATION issue in SendGreetingOrNotify.xam... | 15 |
| 4 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix CATALOG_STRUCTURAL_VIOLATION issue in SendGreetingOrNotify.xam... | 15 |
| 5 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow s... | 5 |
| 6 | `SendGreetingOrNotify.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow s... | 5 |
| 7 | `InitAllSettings.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix CATALOG_STRUCTURAL_VIOLATION issue in InitAllSettings.xaml — w... | 15 |
| 8 | `InitAllSettings.xaml` | — | `—` | `STUB_STRUCTURAL_LEAF` | Review and fix CATALOG_STRUCTURAL_VIOLATION issue in InitAllSettings.xaml — w... | 15 |

#### Structural Preservation Metrics

| File | Total Activities | Preserved | Stubbed | Preservation Rate | Preserved Structures |
|------|-----------------|-----------|---------|-------------------|---------------------|
| `SendGreetingOrNotify.xaml` | 106 | 106 | 0 | 100% | Activity, Sequence (SendGreetingOrNotify), Sequence.Variables... (+49) |
| `InitAllSettings.xaml` | 79 | 79 | 0 | 100% | Activity, Sequence (Initialize All Settings), Sequence.Variables... (+6) |

### Workflow-Level Stubs (1)

Entire workflows were replaced with Studio-openable stubs (XAML was not parseable for structural preservation).

| # | File | Code | Developer Action | Est. Minutes |
|---|------|------|-----------------|-------------|
| 1 | `SendGreetingOrNotify.xaml` | `STUB_WORKFLOW_BLOCKING` | Fix XML structure in SendGreetingOrNotify.xaml — ensure proper nesting and cl... | 15 |

### Quality Warnings (26)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 133: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 2 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 136: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 3 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 188: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 4 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 311: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 5 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 314: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 6 | `SendGreetingOrNotify.xaml` | hardcoded-retry-count | Line 363: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 7 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 133: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 8 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 136: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 9 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 188: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 10 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 311: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 11 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 314: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 12 | `SendGreetingOrNotify.xaml` | hardcoded-retry-interval | Line 363: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 13 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 104: asset name "BGV7_IntegrationService_Auth" is hardcoded — consider using a Config.xlsx e... | — | undefined |
| 14 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 116: asset name "BGV7_CalendarName" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 15 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 123: asset name "BGV7_RunTimeZone" is hardcoded — consider using a Config.xlsx entry or work... | — | undefined |
| 16 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 130: asset name "BGV7_EmailFromConnectionName" is hardcoded — consider using a Config.xlsx e... | — | undefined |
| 17 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 137: asset name "BGV7_NotificationToEmail" is hardcoded — consider using a Config.xlsx entry... | — | undefined |
| 18 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 144: asset name "BGV7_EmailSubjectTemplate" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 19 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 151: asset name "BGV7_PreferredEmailLabelsCsv" is hardcoded — consider using a Config.xlsx e... | — | undefined |
| 20 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 158: asset name "BGV7_AllowWorkEmailWhenNoPreferred" is hardcoded — consider using a Config.... | — | undefined |
| 21 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 165: asset name "BGV7_GenAI_Tone" is hardcoded — consider using a Config.xlsx entry or workf... | — | undefined |
| 22 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 172: asset name "BGV7_GenAI_MaxBodyChars" is hardcoded — consider using a Config.xlsx entry ... | — | undefined |
| 23 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 179: asset name "BGV7_SafetyGate_StrictMode" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 24 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 186: asset name "BGV7_OrchestratorFolder" is hardcoded — consider using a Config.xlsx entry ... | — | undefined |
| 25 | `SendGreetingOrNotify.xaml` | CATALOG_VIOLATION | Missing required property "EndpointUrl" on uweb:HttpClient | — | undefined |
| 26 | `SendGreetingOrNotify.xaml` | CATALOG_VIOLATION | Missing required property "Method" on uweb:HttpClient | — | undefined |

**Total manual remediation effort: ~135 minutes (2.3 hours)**

## 4. Process Context (from Pipeline)

### Idea Description

Automate birthday greetings to friends and family

### PDD Summary

## 1. Executive Summary
The “birthday greetings v7” project automates the daily task of checking a dedicated Google Calendar (“Birthdays”) for birthday events and sending a personalized birthday greeting email from your Gmail account. Today, the process is manual and can be forgotten. The future-state design uses UiPath Orchestrator scheduling to run autonomously every day at 8:00 AM, reads today’s recurring birthday events from Google Calendar, looks up the corresponding contact in Google Contacts to determine the appropriate recipient email address (preferring Personal/Home when multiple exist), uses UiPath native GenAI capabilities to generate a warm/funny/sarcastic message in your voice, and sends the email via the Gmail connector configured as `ninemush@gmail.com`. If no birthday events exist, the automation ends with no action. If no contact email is found, the automation skips sending (does nothing), per the latest SME direction.

## 2. Process Scope
This PDD covers one end-to-end automated workflow that runs daily at 8:00 AM and processes birthday events occurring “today” from the Google Calendar named “Birthdays.” In scope are: reading calendar events, extracting the full name from the event title, matching that full name to a Google Contact, selecting the correct email address when multiple are present (Personal/Home preference), generating a personalized message using UiPath native GenAI, and sending the email from Gmail using Integration Service (connection: `ninemush@gmail.com`). Also in scope are basic safety checks to prevent inappropriate content from being sent and operational logging for traceability.

Out of scope for this iteration are: use of Google Photos or inserting photos into emails; any use of Google Drive; any use of OpenAI/Azure OpenAI; and any notifications via Slack, Microsoft Teams, or Twilio. Human-in-the-loop review is not required because the solution must be fully autonomous; however, platform options for future enhancements are d...

### SDD Summary

## 1. Automation Architecture Overview

### 1.1 Chosen automation pattern and rationale
**Selected pattern: Hybrid (Integration-driven RPA + native GenAI), single-process orchestrated workflow (REFramework-inspired).**

- **Why not pure RPA/UI automation:** All core interactions (Calendar, Contacts, Gmail) are API-based and already available via **Integration Service connectors**, so UI automation would add fragility and require interactive sessions.
- **Why not “Agent-only”:** The process is deterministic (schedule → read events → look up contact → send email). The only non-deterministic part is message generation and safety. Therefore, an agent is valuable **as a bounded GenAI component** (generation + safety gate), not as the end-to-end orchestrator.
- **Why Hybrid:** Combines:
  - deterministic integration steps (reliable, auditable, retryable),
  - **UiPath native GenAI** for “your voice” message generation and safety evaluation.

**[AUTOMATION_TYPE: Hybrid (Integration Service + Orchestrator Unattended + UiPath native GenAI/Agent component)]**

### 1.2 Deployment topology and execution model
- **Execution:** Fully **unattended**, background execution using one of the **11 unattended slots**. No user interaction and no attended components.
- **Triggering:** Orchestrator **time-based Trigger** scheduled daily at **08:00** tenant time zone.
- **Robots:** Prefer **Serverless / cross-platform** if enabled on tenant for connector-first automations; otherwise classic unattended VM robot is acceptable. Design avoids UI dependencies.

### 1.3 UiPath services used and why (operability-first)
- **Orchestrator:** Scheduling, assets, logs, job execution, monitoring.
- **Integration Service:** Strongly preferred over custom HTTP for Google systems (token mgmt, throttling behavior, governance). Must use:
  - Gmail connector **connection ID** `0a0d5ee1-a1e8-477a-a943-58161e6f3272` (account `ninemush@gmail.com`)
  - Google Calendar + Google Contacts connectors (available via I...

**Automation Type:** hybrid
**Rationale:** The calendar/contact/email steps are deterministic API work (best as RPA via Integration Service), while drafting a warm/funny/sarcastic message “in your voice” is generative and benefits from an AI agent with guardrails.
**Feasibility Complexity:** medium
**Effort Estimate:** 1-2 weeks

## 5. Business Process Overview

### Process Steps

| # | Step | Role | System | Type | Pain Point |
|---|------|------|--------|------|------------|
| 1 | Daily 8AM Birthday Greeting Run | System | Orchestrator Triggers | start | — |
| 2 | Get Today’s Events from “Birthdays” Calendar | System | Integration Service - Google Calendar | task | — |
| 3 | Any Birthday Events Today? | System | Integration Service - Google Calendar | decision | — |
| 4 | No Birthdays (End) | System | Orchestrator | end | — |
| 5 | For Each Birthday Event: Extract Full Name | System | Integration Service - Google Calendar | task | — |
| 6 | Find Matching Google Contact by Full Name | System | Integration Service - Google Contacts | task | — |
| 7 | Email Found for Contact? | System | Integration Service - Google Contacts | decision | — |
| 8 | Skip (No Email Found) | System | Orchestrator | task | — |
| 9 | Multiple Emails Available? | System | Integration Service - Google Contacts | decision | — |
| 10 | Select Personal/Home Email | System | Integration Service - Google Contacts | task | — |
| 11 | Use Single Email | System | Integration Service - Google Contacts | task | — |
| 12 | Generate Birthday Message in Your Voice (Warm/Funny/Sarcastic) | System | UiPath Agents (with UiPath native GenAI) | agent-task | — |
| 13 | Generate Birthday Message in Your Voice (Warm/Funny/Sarcastic) | System | UiPath Agents (with UiPath native GenAI) | agent-task | — |
| 14 | Message Safe & Appropriate to Send? | System | UiPath Agents | agent-decision | — |
| 15 | Message Safe & Appropriate to Send? | System | UiPath Agents | agent-decision | — |
| 16 | Send Birthday Email | System | Integration Service - Gmail (Connection: ninemush@gmail.com) | task | — |
| 17 | Send Birthday Email | System | Integration Service - Gmail (Connection: ninemush@gmail.com) | task | — |
| 18 | Skip Sending (Message Flagged) | System | Orchestrator | task | — |
| 19 | Skip Sending (Message Flagged) | System | Orchestrator | task | — |
| 20 | Notify You of Flagged Message | System | Integration Service - Gmail (Connection: ninemush@gmail.com) | task | — |
| 21 | Notify You of Flagged Message | System | Integration Service - Gmail (Connection: ninemush@gmail.com) | task | — |
| 22 | Greetings Run Completed (End) | System | Orchestrator | end | — |

### Target Applications / Systems

The following applications were identified from the process map and must be accessible from the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts
- UiPath Agents (with UiPath native GenAI)
- UiPath Agents
- Integration Service - Gmail (Connection: ninemush@gmail.com)

### User Roles Involved

- System

### Decision Points (Process Map Topology)

**Any Birthday Events Today?**
  - [No] → No Birthdays (End)
  - [Yes] → For Each Birthday Event: Extract Full Name

**Email Found for Contact?**
  - [No] → Skip (No Email Found)
  - [Yes] → Multiple Emails Available?

**Multiple Emails Available?**
  - [Yes] → Select Personal/Home Email
  - [No] → Use Single Email

## 6. Environment Setup

| Requirement | Value |
|---|---|
| Target Framework | Windows (required) |
| Robot Type | Unattended |
| Modern Activities | No |
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
| 2 | `UiPath.Excel.Activities` |
| 3 | `UiPath.UIAutomation.Activities` |
| 4 | `UiPath.Web.Activities` |
| 5 | `UiPath.Persistence.Activities` |
| 6 | `Newtonsoft.Json` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts
- UiPath Agents (with UiPath native GenAI)
- UiPath Agents
- Integration Service - Gmail (Connection: ninemush@gmail.com)

## 7. Credential & Asset Inventory

**Total:** 25 activities (12 hardcoded, 13 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BGV7_IntegrationService_Auth` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `BGV7_CalendarName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 2 | `BGV7_RunTimeZone` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 3 | `BGV7_EmailFromConnectionName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 4 | `BGV7_NotificationToEmail` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 5 | `BGV7_EmailSubjectTemplate` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 6 | `BGV7_PreferredEmailLabelsCsv` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 7 | `BGV7_AllowWorkEmailWhenNoPreferred` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 8 | `BGV7_GenAI_Tone` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 9 | `BGV7_GenAI_MaxBodyChars` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 10 | `BGV7_SafetyGate_StrictMode` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 11 | `BGV7_OrchestratorFolder` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `InitAllSettings.xaml` | 104 | GetCredential | `BGV7_IntegrationService_Auth` | Credential | — | Yes |
| `InitAllSettings.xaml` | 105 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 108 | GetCredential | `UNKNOWN` | Credential | — | No |
| `InitAllSettings.xaml` | 116 | GetAsset | `BGV7_CalendarName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 117 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 123 | GetAsset | `BGV7_RunTimeZone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 124 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 130 | GetAsset | `BGV7_EmailFromConnectionName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 131 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 137 | GetAsset | `BGV7_NotificationToEmail` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 138 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 144 | GetAsset | `BGV7_EmailSubjectTemplate` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 145 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 151 | GetAsset | `BGV7_PreferredEmailLabelsCsv` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 152 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 158 | GetAsset | `BGV7_AllowWorkEmailWhenNoPreferred` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 159 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 165 | GetAsset | `BGV7_GenAI_Tone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 166 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 172 | GetAsset | `BGV7_GenAI_MaxBodyChars` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 173 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 179 | GetAsset | `BGV7_SafetyGate_StrictMode` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 180 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 186 | GetAsset | `BGV7_OrchestratorFolder` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 187 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 12 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 12 aligned, 1 SDD-only, 0 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV7_CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name to query for birthday events. | `InitAllSettings.xaml` | 116 |
| 2 | `BGV7_RunTimeZone` | asset | **Aligned** | type: Text, value: America/New_York, description: Time zone context for determining 'today' and for scheduling alignment. | `InitAllSettings.xaml` | 123 |
| 3 | `BGV7_EmailFromConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used for all outbound emails (greetings + internal notifications). | `InitAllSettings.xaml` | 130 |
| 4 | `BGV7_NotificationToEmail` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Recipient email for internal notifications (e.g., flagged content). | `InitAllSettings.xaml` | 137 |
| 5 | `BGV7_EmailSubjectTemplate` | asset | **Aligned** | type: Text, value: Happy Birthday, {FullName}!, description: Subject template for birthday greeting emails. | `InitAllSettings.xaml` | 144 |
| 6 | `BGV7_PreferredEmailLabelsCsv` | asset | **Aligned** | type: Text, value: personal,home, description: Preferred Google Contact email labels in priority order (comma-separated, case-insensitive). | `InitAllSettings.xaml` | 151 |
| 7 | `BGV7_AllowWorkEmailWhenNoPreferred` | asset | **Aligned** | type: Bool, value: true, description: If true and no Personal/Home email exists, use another available email (e.g., Work). | `InitAllSettings.xaml` | 158 |
| 8 | `BGV7_GenAI_Tone` | asset | **Aligned** | type: Text, value: warm, funny, sarcastic, description: Tone guidance for generated messages. | `InitAllSettings.xaml` | 165 |
| 9 | `BGV7_GenAI_MaxBodyChars` | asset | **Aligned** | type: Integer, value: 1200, description: Upper limit for generated email body length. | `InitAllSettings.xaml` | 172 |
| 10 | `BGV7_SafetyGate_StrictMode` | asset | **Aligned** | type: Bool, value: true, description: If true, any safety flag causes send to be skipped and an internal notification to be sent. | `InitAllSettings.xaml` | 179 |
| 11 | `BGV7_OrchestratorFolder` | asset | **Aligned** | type: Text, value: Shared, description: Target Orchestrator folder for deployment (informational/standardization). | `InitAllSettings.xaml` | 186 |
| 12 | `BGV7_IntegrationService_Auth` | credential | **Aligned** | type: Credential, description: Reserved credential asset (not used directly by Integration Service connections); included to satisfy deployment standards requiring at least one credential asset. | `InitAllSettings.xaml` | 104 |
| 13 | `BGV7_BirthdayGreetings_Outbox` | queue | **SDD Only** | maxRetries: 1, uniqueReference: true, description: Queue-driven outbox for birthday greeting candidates found for 'today'. Each item represents one recipient/event to be processed (generate message, safety gate, send/skip). | — | — |

## 9. Queue Management

No queue activities detected in the package.

## 10. Exception Handling Coverage

**Coverage:** 0/25 high-risk activities inside TryCatch (0%)

### Files Without TryCatch

- `SendGreetingOrNotify.xaml`
- `InitAllSettings.xaml`
- `Main.xaml`
- `Dispatcher.xaml`
- `Performer.xaml`
- `ContactResolver.xaml`
- `GenerateAndValidateMessage.xaml`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `InitAllSettings.xaml:104` | Get BGV7_IntegrationService_Auth |
| 2 | `InitAllSettings.xaml:105` | ui:GetCredential |
| 3 | `InitAllSettings.xaml:108` | ui:GetCredential |
| 4 | `InitAllSettings.xaml:116` | Get BGV7_CalendarName |
| 5 | `InitAllSettings.xaml:117` | ui:GetAsset |
| 6 | `InitAllSettings.xaml:123` | Get BGV7_RunTimeZone |
| 7 | `InitAllSettings.xaml:124` | ui:GetAsset |
| 8 | `InitAllSettings.xaml:130` | Get BGV7_EmailFromConnectionName |
| 9 | `InitAllSettings.xaml:131` | ui:GetAsset |
| 10 | `InitAllSettings.xaml:137` | Get BGV7_NotificationToEmail |
| 11 | `InitAllSettings.xaml:138` | ui:GetAsset |
| 12 | `InitAllSettings.xaml:144` | Get BGV7_EmailSubjectTemplate |
| 13 | `InitAllSettings.xaml:145` | ui:GetAsset |
| 14 | `InitAllSettings.xaml:151` | Get BGV7_PreferredEmailLabelsCsv |
| 15 | `InitAllSettings.xaml:152` | ui:GetAsset |
| 16 | `InitAllSettings.xaml:158` | Get BGV7_AllowWorkEmailWhenNoPreferred |
| 17 | `InitAllSettings.xaml:159` | ui:GetAsset |
| 18 | `InitAllSettings.xaml:165` | Get BGV7_GenAI_Tone |
| 19 | `InitAllSettings.xaml:166` | ui:GetAsset |
| 20 | `InitAllSettings.xaml:172` | Get BGV7_GenAI_MaxBodyChars |
| 21 | `InitAllSettings.xaml:173` | ui:GetAsset |
| 22 | `InitAllSettings.xaml:179` | Get BGV7_SafetyGate_StrictMode |
| 23 | `InitAllSettings.xaml:180` | ui:GetAsset |
| 24 | `InitAllSettings.xaml:186` | Get BGV7_OrchestratorFolder |
| 25 | `InitAllSettings.xaml:187` | ui:GetAsset |

> **Recommendation:** Wrap these activities in TryCatch blocks with appropriate exception types (BusinessRuleException for data errors, System.Exception for general failures).

## 11. Trigger Configuration

Based on the process analysis, the following trigger configuration is recommended:

| # | Trigger Type | Reason | Configuration |
|---|-------------|--------|---------------|
| 1 | **Schedule** | Defined in SDD orchestrator_artifacts: BGV7_Daily_0800_Dispatcher | SDD-specified: BGV7_Daily_0800_Dispatcher | Cron: 0 0 8 ? * * * | Daily schedule at 08:00 to run dispatcher logic (read calendar, enqueue outbox items). |
| 2 | **Queue** | Defined in SDD orchestrator_artifacts: BGV7_Outbox_Performer | SDD-specified: BGV7_Outbox_Performer | Queue: BGV7_BirthdayGreetings_Outbox | Queue trigger to process outbox items (generate message, safety gate, send/skip). |

## 12. Upstream Quality Findings

The following quality warnings were produced by upstream pipeline stages (selector scoring, type validation, expression linting, etc.) and should be addressed during development:

| Code | Severity | Count | Sample Message |
|------|----------|-------|----------------|
| undefined | warning | 26 |  |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Credentials | Provision credential: `BGV7_IntegrationService_Auth` | Yes |
| 5 | Assets | Provision asset: `BGV7_CalendarName` | Yes |
| 6 | Assets | Provision asset: `BGV7_RunTimeZone` | Yes |
| 7 | Assets | Provision asset: `BGV7_EmailFromConnectionName` | Yes |
| 8 | Assets | Provision asset: `BGV7_NotificationToEmail` | Yes |
| 9 | Assets | Provision asset: `BGV7_EmailSubjectTemplate` | Yes |
| 10 | Assets | Provision asset: `BGV7_PreferredEmailLabelsCsv` | Yes |
| 11 | Assets | Provision asset: `BGV7_AllowWorkEmailWhenNoPreferred` | Yes |
| 12 | Assets | Provision asset: `BGV7_GenAI_Tone` | Yes |
| 13 | Assets | Provision asset: `BGV7_GenAI_MaxBodyChars` | Yes |
| 14 | Assets | Provision asset: `BGV7_SafetyGate_StrictMode` | Yes |
| 15 | Assets | Provision asset: `BGV7_OrchestratorFolder` | Yes |
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

**Overall: Not Ready — 27/50 (39%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 12 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 2/10 | Only 0% of high-risk activities covered by TryCatch; 7 file(s) with no TryCatch blocks |
| Queue Management | 10/10 | No queue activities — section not applicable |
| Build Quality | 0/10 | 26 quality warnings — significant remediation needed; 11 remediations — stub replacements need developer attention; 1/7 workflow(s) are stubs (14%) — structurally invalid |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

---

## 15. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "Main.xaml",
    "Dispatcher.xaml",
    "Performer.xaml",
    "ContactResolver.xaml",
    "GenerateAndValidateMessage.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_LOG_LEVEL_NORMALIZE",
      "file": "SendGreetingOrNotify.xaml",
      "description": "Normalised LogMessage Level=\"Information\" → \"Info\" in SendGreetingOrNotify.xaml"
    },
    {
      "repairCode": "REPAIR_LOG_LEVEL_NORMALIZE",
      "file": "SendGreetingOrNotify.xaml",
      "description": "Normalised LogMessage Level=\"Warning\" → \"Warn\" in SendGreetingOrNotify.xaml"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "unknown",
      "description": "Structural preservation: SendGreetingOrNotify.xaml preserved unchanged — XML is valid but blocking issues could not be mapped to specific leaf activities"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "unknown",
      "description": "Structural preservation: InitAllSettings.xaml preserved unchanged — XML is valid but blocking issues could not be mapped to specific leaf activities"
    },
    {
      "repairCode": "REPAIR_GENERIC",
      "file": "unknown",
      "description": "Skipped full-package stub escalation — structural-preservation stubs already cover affected files"
    }
  ],
  "remediations": [
    {
      "level": "activity",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "originalTag": "If",
      "originalDisplayName": "Branch: Safe → Send Greeting | Flagged/Error → Notify",
      "reason": "Line 71: Undeclared variable \"isSafeToSend\" in expression: isSafeToSend — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement \"Branch: Safe → Send Greeting | Flagged/Error → Notify\" activity in SendGreetingOrNotify.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "activity",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "originalTag": "Assign",
      "originalDisplayName": "[FLAGGED] Compose internal notification email body string",
      "reason": "Line 249: Undeclared variable \"isFlaggedPath\" in expression: isFlaggedPath — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement \"[FLAGGED] Compose internal notification email body string\" activity in SendGreetingOrNotify.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "Line 238: Undeclared variable \"isFlaggedPath\" in expression: isFlaggedPath — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Review and fix UNDECLARED_VARIABLE issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "ENUM_VIOLATION: Invalid value \"Information\" for \"Level\" on ui:LogMessage — valid values: Trace, Info, Warn, Error, Fatal. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "Property \"To\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Review and fix CATALOG_STRUCTURAL_VIOLATION issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "Property \"Value\" on Assign must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Review and fix CATALOG_STRUCTURAL_VIOLATION issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "ENUM_VIOLATION: Invalid value \"Verbose\" for \"Level\" on ui:LogMessage — valid values: Trace, Info, Warn, Error, Fatal. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "structural-leaf",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "ENUM_VIOLATION: Invalid value \"Warning\" for \"Level\" on ui:LogMessage — valid values: Trace, Info, Warn, Error, Fatal. This is a generation failure — enum violations must not be auto-corrected.",
      "classifiedCheck": "ENUM_VIOLATION",
      "developerAction": "Review and fix ENUM_VIOLATION issue in SendGreetingOrNotify.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "structural-leaf",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "Property \"WorkbookPath\" on uexcel:ExcelApplicationScope must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Review and fix CATALOG_STRUCTURAL_VIOLATION issue in InitAllSettings.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "structural-leaf",
      "file": "InitAllSettings.xaml",
      "remediationCode": "STUB_STRUCTURAL_LEAF",
      "reason": "Property \"DataTable\" on uexcel:ExcelReadRange must be a child element, not an attribute",
      "classifiedCheck": "CATALOG_STRUCTURAL_VIOLATION",
      "developerAction": "Review and fix CATALOG_STRUCTURAL_VIOLATION issue in InitAllSettings.xaml — workflow structure was preserved intact",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "workflow",
      "file": "SendGreetingOrNotify.xaml",
      "remediationCode": "STUB_WORKFLOW_BLOCKING",
      "reason": "Final validation: XAML well-formedness violations — replaced with stub",
      "classifiedCheck": "xml-wellformedness",
      "developerAction": "Fix XML structure in SendGreetingOrNotify.xaml — ensure proper nesting and closing tags",
      "estimatedEffortMinutes": 15
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 133: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 136: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 188: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 311: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 314: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 363: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 133: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 136: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 188: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 311: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 314: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Line 363: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 104: asset name \"BGV7_IntegrationService_Auth\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 116: asset name \"BGV7_CalendarName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 123: asset name \"BGV7_RunTimeZone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 130: asset name \"BGV7_EmailFromConnectionName\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 137: asset name \"BGV7_NotificationToEmail\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 144: asset name \"BGV7_EmailSubjectTemplate\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 151: asset name \"BGV7_PreferredEmailLabelsCsv\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 158: asset name \"BGV7_AllowWorkEmailWhenNoPreferred\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 165: asset name \"BGV7_GenAI_Tone\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 172: asset name \"BGV7_GenAI_MaxBodyChars\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 179: asset name \"BGV7_SafetyGate_StrictMode\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "InitAllSettings.xaml",
      "detail": "Line 186: asset name \"BGV7_OrchestratorFolder\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Missing required property \"EndpointUrl\" on uweb:HttpClient",
      "severity": "warning"
    },
    {
      "check": "CATALOG_VIOLATION",
      "file": "SendGreetingOrNotify.xaml",
      "detail": "Missing required property \"Method\" on uweb:HttpClient",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 135,
  "structuralPreservationMetrics": [
    {
      "file": "SendGreetingOrNotify.xaml",
      "totalActivities": 106,
      "preservedActivities": 106,
      "stubbedActivities": 0,
      "preservedStructures": [
        "Activity",
        "Sequence (SendGreetingOrNotify)",
        "Sequence.Variables",
        "Sequence ([THEN] Safe Send: Log branch decision and send greeting email with retry)",
        "TryCatch (Try: [SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "TryCatch.Try",
        "Sequence (Execute: [SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "TryCatch ([SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "Sequence (Try: [SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "TryCatch.Catches",
        "Catch",
        "ActivityAction",
        "Sequence (Catch: [SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "Sequence (Handle Exception: [SAFE] TryCatch: wrap full Gmail send to catch transient and auth failures)",
        "TryCatch (Safe Screenshot Capture)",
        "Sequence (Capture Screenshot)",
        "TryCatch (Try Retry: [SAFE][TRY] RetryScope: 3 attempts with exponential backoff for Gmail send)",
        "Sequence (Retry Body: [SAFE][TRY] RetryScope: 3 attempts with exponential backoff for Gmail send)",
        "Sequence (Retry Body)",
        "Sequence (Handle Retry Failure: [SAFE][TRY] RetryScope: 3 attempts with exponential backoff for Gmail send)",
        "TryCatch (Safe Screenshot on Retry Failure)",
        "Sequence ([SAFE][RETRY BODY] Sequence: track attempt, sleep backoff, then send)",
        "TryCatch (Try Retry: [SAFE][RETRY] Gmail Integration Service: Send birthday greeting email)",
        "Sequence (Retry Body: [SAFE][RETRY] Gmail Integration Service: Send birthday greeting email)",
        "Sequence (Handle Retry Failure: [SAFE][RETRY] Gmail Integration Service: Send birthday greeting email)",
        "Sequence ([ELSE] Flagged/Error Notify: log branch decision and compose notification)",
        "If ([FLAGGED] Assign resolvedOutcomeForFlagged based on SafetyStatus)",
        "If.Then",
        "Sequence (Then: [FLAGGED] Assign resolvedOutcomeForFlagged based on SafetyStatus)",
        "If.Else",
        "Sequence (Else: [FLAGGED] Assign resolvedOutcomeForFlagged based on SafetyStatus)",
        "TryCatch (Try: [FLAGGED] TryCatch: send internal notification email with retry)",
        "Sequence (Execute: [FLAGGED] TryCatch: send internal notification email with retry)",
        "TryCatch ([FLAGGED] TryCatch: send internal notification email with retry)",
        "Sequence (Try: [FLAGGED] TryCatch: send internal notification email with retry)",
        "Sequence (Catch: [FLAGGED] TryCatch: send internal notification email with retry)",
        "Sequence (Handle Exception: [FLAGGED] TryCatch: send internal notification email with retry)",
        "TryCatch (Try Retry: [FLAGGED][TRY] RetryScope: 3 attempts for notification Gmail send)",
        "Sequence (Retry Body: [FLAGGED][TRY] RetryScope: 3 attempts for notification Gmail send)",
        "Sequence (Handle Retry Failure: [FLAGGED][TRY] RetryScope: 3 attempts for notification Gmail send)",
        "TryCatch (Try Retry: [FLAGGED][RETRY BODY] Gmail Integration Service: Send flagged notification to internal address)",
        "Sequence (Retry Body: [FLAGGED][RETRY BODY] Gmail Integration Service: Send flagged notification to internal address)",
        "Sequence (Handle Retry Failure: [FLAGGED][RETRY BODY] Gmail Integration Service: Send flagged notification to internal address)",
        "TryCatch (Try: [FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "Sequence (Execute: [FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "TryCatch ([FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "Sequence (Try: [FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "Sequence (Catch: [FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "Sequence (Handle Exception: [FLAGGED] TryCatch: Create non-blocking Action Center form task for flagged review)",
        "TryCatch (Try: [FLAGGED][TRY] Persistence: Create Form Task in Action Center (non-blocking))",
        "Sequence (Execute: [FLAGGED][TRY] Persistence: Create Form Task in Action Center (non-blocking))",
        "Sequence (Handle Exception: [FLAGGED][TRY] Persistence: Create Form Task in Action Center (non-blocking))"
      ]
    },
    {
      "file": "InitAllSettings.xaml",
      "totalActivities": 79,
      "preservedActivities": 79,
      "stubbedActivities": 0,
      "preservedStructures": [
        "Activity",
        "Sequence (Initialize All Settings)",
        "Sequence.Variables",
        "ActivityAction",
        "Sequence (Read Config Sheets)",
        "ForEach (Process Settings Rows)",
        "Sequence (Process Setting Row)",
        "ForEach (Process Constants Rows)",
        "Sequence (Store Constant)"
      ]
    }
  ],
  "studioCompatibility": [
    {
      "file": "SendGreetingOrNotify.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[STUB_WORKFLOW_GENERATOR_FAILURE] Workflow was replaced with a stub due to generation/compliance failure — structurally invalid"
      ]
    },
    {
      "file": "InitAllSettings.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Main.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Dispatcher.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "Performer.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "ContactResolver.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "GenerateAndValidateMessage.xaml",
      "level": "studio-clean",
      "blockers": []
    }
  ]
}
```
