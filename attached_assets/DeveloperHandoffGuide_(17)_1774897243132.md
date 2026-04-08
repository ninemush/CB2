# Developer Handoff Guide

**Project:** BirthdayGreetingsV12
**Generated:** 2026-03-30
**Generation Mode:** Full Implementation
**Deployment Readiness:** Not Ready (15%)

**Total Estimated Effort: ~105 minutes (1.8 hours)**
**Remediations:** 7 total (0 property, 0 activity, 0 sequence, 0 structural-leaf, 0 workflow)
**Auto-Repairs:** 9
**Quality Warnings:** 43

---

## 1. Completed Work

The following 3 workflow(s) were fully generated without any stub replacements or remediation:

- `Init.xaml`
- `Performer.xaml`
- `BirthdayGreetingsV12.xaml`

### Workflow Inventory

| # | Workflow | Status |
|---|----------|--------|
| 1 | `Main.xaml` | Structurally invalid (not Studio-loadable) |
| 2 | `Init.xaml` | Fully Generated |
| 3 | `Dispatcher.xaml` | Structurally invalid — Expression syntax errors that could not be auto-corrected |
| 4 | `Performer.xaml` | Fully Generated |
| 5 | `ProcessEvent.xaml` | Structurally invalid — Compliance or quality gate failure requiring manual remediation |
| 6 | `Finalize.xaml` | Structurally invalid (not Studio-loadable) |
| 7 | `BirthdayGreetingsV12.xaml` | Fully Generated |
| 8 | `InitAllSettings.xaml` | Generated with Remediations |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Main.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [undeclared-variable] Line 100: variable "in_Mode" is used in expression but ...; [undeclared-variable] Line 100: variable "in_Mode" is used in expression but ... |
| 2 | `Init.xaml` | Openable with warnings | Unclassified | — |
| 3 | `Dispatcher.xaml` | Structurally invalid — not Studio-loadable | Expression Syntax | [EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected |
| 4 | `Performer.xaml` | Openable with warnings | Unclassified | — |
| 5 | `ProcessEvent.xaml` | Structurally invalid — not Studio-loadable | Compliance Failure | [COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual reme... |
| 6 | `Finalize.xaml` | Structurally invalid — not Studio-loadable | Unclassified | [undeclared-variable] Line 98: variable "in_SentCount" is used in expression ...; [undeclared-variable] Line 98: variable "in_SkippedNoEmailCount" is used in e...; [undeclared-variable] Line 98: variable "in_SkippedContactNotFoundCount" is u... |
| 7 | `BirthdayGreetingsV12.xaml` | Studio-openable | — | — |
| 8 | `InitAllSettings.xaml` | Studio-openable | — | — |

**Summary:** 2 Studio-loadable, 2 with warnings, 4 not Studio-loadable

> **⚠ 4 workflow(s) are not Studio-loadable** — they will fail to open in UiPath Studio. Address the blockers listed above before importing.

**Blocked by category:**
- Unknown: 2 workflow(s)
- Expression syntax errors that could not be auto-corrected: 1 workflow(s)
- Compliance or quality gate failure requiring manual remediation: 1 workflow(s)

## 2. AI-Resolved with Smart Defaults

The following 9 issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes |
|---|------|------|-------------|-------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Init.xaml` | Stripped 30 placeholder token(s) from Init.xaml | 5 |
| 2 | `REPAIR_PLACEHOLDER_CLEANUP` | `Performer.xaml` | Stripped 2 placeholder token(s) from Performer.xaml | 5 |
| 3 | `REPAIR_PLACEHOLDER_CLEANUP` | `ProcessEvent.xaml` | Stripped 37 placeholder token(s) from ProcessEvent.xaml | 5 |
| 4 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `Dispatcher.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml | undefined |
| 5 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `Performer.xaml` | Catalog: Moved While.Condition from attribute to child-element in Performer.xaml | undefined |
| 6 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |
| 7 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Username from attribute to child-element in InitAllSettings.xaml | undefined |
| 8 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ui:GetCredential.Password from attribute to child-element in InitAllSettings.xaml | undefined |
| 9 | `REPAIR_CATALOG_PROPERTY_SYNTAX` | `InitAllSettings.xaml` | Catalog: Moved ForEach.Values from attribute to child-element in InitAllSettings.xaml | undefined |

## 3. Manual Action Required

### Validation Issues — Requires Manual Attention (7)

The following issues were detected by the quality gate and require developer review. No automated remediation was applied — workflows are preserved as-generated.

| # | File | Check | Developer Action | Est. Minutes |
|---|------|-------|-----------------|-------------|
| 1 | `Dispatcher.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 2 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 3 | `Dispatcher.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 4 | `Dispatcher.xaml` | `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 5 | `Finalize.xaml` | `UNDECLARED_VARIABLE` | Manually implement activity in Finalize.xaml — estimated 15 min | 15 |
| 6 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |
| 7 | `InitAllSettings.xaml` | `CATALOG_STRUCTURAL_VIOLATION` | Fix property syntax for activity in InitAllSettings.xaml — move attribute to ... | 15 |

### Developer Implementation Required (12)

These placeholders represent intentional handoff points where developer implementation is expected.

| # | File | Detail | Est. Minutes |
|---|------|--------|-------------|
| 1 | `Main.xaml` | Contains 6 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 2 | `Main.xaml` | Contains 8 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 3 | `Init.xaml` | Contains 8 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 4 | `Init.xaml` | Contains 6 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 5 | `Dispatcher.xaml` | Contains 8 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 6 | `Dispatcher.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 7 | `Performer.xaml` | Contains 10 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 8 | `Performer.xaml` | Contains 7 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 9 | `ProcessEvent.xaml` | Contains 7 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 10 | `ProcessEvent.xaml` | Contains 5 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |
| 11 | `Finalize.xaml` | Contains 3 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] | 10 |
| 12 | `Finalize.xaml` | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Implementation Required] | 10 |

### Quality Warnings (31)

| # | File | Check | Detail | Developer Action | Est. Minutes |
|---|------|-------|--------|-----------------|-------------|
| 1 | `Init.xaml` | hardcoded-asset-name | Line 138: asset name "&quot;BGV12.CalendarName&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 2 | `Init.xaml` | hardcoded-asset-name | Line 188: asset name "&quot;BGV12.Timezone&quot;" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 3 | `Init.xaml` | hardcoded-asset-name | Line 238: asset name "&quot;BGV12.FromGmailConnectionName&quot;" is hardcoded — consider using a ... | — | undefined |
| 4 | `Init.xaml` | hardcoded-asset-name | Line 288: asset name "&quot;BGV12.MaxConnectorRetries&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 5 | `Init.xaml` | hardcoded-asset-name | Line 338: asset name "&quot;BGV12.RetryBackoffSeconds&quot;" is hardcoded — consider using a Conf... | — | undefined |
| 6 | `Init.xaml` | hardcoded-asset-name | Line 388: asset name "&quot;BGV12.SkipOnAmbiguousContactMatch&quot;" is hardcoded — consider usin... | — | undefined |
| 7 | `Init.xaml` | hardcoded-asset-name | Line 438: asset name "&quot;BGV12.PreferredEmailLabels&quot;" is hardcoded — consider using a Con... | — | undefined |
| 8 | `Init.xaml` | hardcoded-asset-name | Line 488: asset name "&quot;BGV12.SendEnabled&quot;" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 9 | `Init.xaml` | hardcoded-asset-name | Line 538: asset name "&quot;BGV12.OperationsDL&quot;" is hardcoded — consider using a Config.xlsx... | — | undefined |
| 10 | `Dispatcher.xaml` | hardcoded-retry-count | Line 162: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 11 | `Dispatcher.xaml` | hardcoded-retry-count | Line 170: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 12 | `Dispatcher.xaml` | hardcoded-retry-count | Line 221: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 13 | `Dispatcher.xaml` | hardcoded-retry-count | Line 229: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 14 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 162: retry interval hardcoded as "retryIntervalTs" — consider externalizing to Config.xlsx | — | undefined |
| 15 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 170: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 16 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 221: retry interval hardcoded as "retryIntervalTs" — consider externalizing to Config.xlsx | — | undefined |
| 17 | `Dispatcher.xaml` | hardcoded-retry-interval | Line 229: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 18 | `ProcessEvent.xaml` | hardcoded-retry-count | Line 192: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 19 | `ProcessEvent.xaml` | hardcoded-retry-count | Line 200: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config("Ma... | — | undefined |
| 20 | `ProcessEvent.xaml` | hardcoded-retry-interval | Line 192: retry interval hardcoded as "TimeSpan.FromSeconds(retryBackoffSeconds)" — consider exte... | — | undefined |
| 21 | `ProcessEvent.xaml` | hardcoded-retry-interval | Line 200: retry interval hardcoded as "00:00:05" — consider externalizing to Config.xlsx | — | undefined |
| 22 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 107: asset name "BGV12.GoogleWorkspaceCredential" is hardcoded — consider using a Config.xls... | — | undefined |
| 23 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 119: asset name "BGV12.CalendarName" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |
| 24 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 128: asset name "BGV12.Timezone" is hardcoded — consider using a Config.xlsx entry or workfl... | — | undefined |
| 25 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 137: asset name "BGV12.FromGmailConnectionName" is hardcoded — consider using a Config.xlsx ... | — | undefined |
| 26 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 146: asset name "BGV12.MaxConnectorRetries" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 27 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 155: asset name "BGV12.RetryBackoffSeconds" is hardcoded — consider using a Config.xlsx entr... | — | undefined |
| 28 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 164: asset name "BGV12.SkipOnAmbiguousContactMatch" is hardcoded — consider using a Config.x... | — | undefined |
| 29 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 173: asset name "BGV12.PreferredEmailLabels" is hardcoded — consider using a Config.xlsx ent... | — | undefined |
| 30 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 182: asset name "BGV12.SendEnabled" is hardcoded — consider using a Config.xlsx entry or wor... | — | undefined |
| 31 | `InitAllSettings.xaml` | hardcoded-asset-name | Line 191: asset name "BGV12.OperationsDL" is hardcoded — consider using a Config.xlsx entry or wo... | — | undefined |

**Total manual remediation effort: ~105 minutes (1.8 hours)**

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

Create a Modern Folder with at least one unattended robot assignment. Use folder-level credential stores for asset isolation.

### NuGet Dependencies

| # | Package |
|---|--------|
| 1 | `UiPath.System.Activities` |
| 2 | `UiPath.Excel.Activities` |
| 3 | `UiPath.UIAutomation.Activities` |
| 4 | `Newtonsoft.Json` |
| 5 | `UiPath.Web.Activities` |

### Target Applications (from Process Map)

The following applications were identified from the business process map. Ensure network connectivity and access credentials are configured on the robot machine:

- Orchestrator Triggers
- Integration Service - Google Calendar
- Orchestrator
- Integration Service - Google Contacts/People
- UiPath GenAI Activities
- Integration Service - Gmail (ninemush@gmail.com)

## 7. Credential & Asset Inventory

**Total:** 39 activities (19 hardcoded, 20 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BGV12.GoogleWorkspaceCredential` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `BGV12.CalendarName` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 2 | `BGV12.Timezone` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 3 | `BGV12.FromGmailConnectionName` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 4 | `BGV12.MaxConnectorRetries` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 5 | `BGV12.RetryBackoffSeconds` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 7 | `BGV12.PreferredEmailLabels` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 8 | `BGV12.SendEnabled` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |
| 9 | `BGV12.OperationsDL` | Unknown | — | `Init.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `Init.xaml` | 140 | GetAsset | `BGV12.CalendarName` | Unknown | — | Yes |
| `Init.xaml` | 141 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 190 | GetAsset | `BGV12.Timezone` | Unknown | — | Yes |
| `Init.xaml` | 191 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 240 | GetAsset | `BGV12.FromGmailConnectionName` | Unknown | — | Yes |
| `Init.xaml` | 241 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 290 | GetAsset | `BGV12.MaxConnectorRetries` | Unknown | — | Yes |
| `Init.xaml` | 291 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 340 | GetAsset | `BGV12.RetryBackoffSeconds` | Unknown | — | Yes |
| `Init.xaml` | 341 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 390 | GetAsset | `BGV12.SkipOnAmbiguousContactMatch` | Unknown | — | Yes |
| `Init.xaml` | 391 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 440 | GetAsset | `BGV12.PreferredEmailLabels` | Unknown | — | Yes |
| `Init.xaml` | 441 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 490 | GetAsset | `BGV12.SendEnabled` | Unknown | — | Yes |
| `Init.xaml` | 491 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `Init.xaml` | 540 | GetAsset | `BGV12.OperationsDL` | Unknown | — | Yes |
| `Init.xaml` | 541 | GetAsset | `UNKNOWN` | Unknown | — | No |
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

> **Warning:** 19 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 10 aligned, 1 SDD-only, 0 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV12.CalendarName` | asset | **Aligned** | type: Text, value: Birthdays, description: Google Calendar name containing birthday events. | `Init.xaml` | 140 |
| 2 | `BGV12.Timezone` | asset | **Aligned** | type: Text, value: Asia/Dubai, description: Authoritative timezone for 'today' evaluation and schedule alignment. | `Init.xaml` | 190 |
| 3 | `BGV12.FromGmailConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used to send greetings. | `Init.xaml` | 240 |
| 4 | `BGV12.MaxConnectorRetries` | asset | **Aligned** | type: Integer, value: 3, description: Max retries for transient Integration Service connector failures (Calendar/People/Gmail). | `Init.xaml` | 290 |
| 5 | `BGV12.RetryBackoffSeconds` | asset | **Aligned** | type: Integer, value: 10, description: Backoff delay between transient retries. | `Init.xaml` | 340 |
| 6 | `BGV12.SkipOnAmbiguousContactMatch` | asset | **Aligned** | type: Bool, value: true, description: If multiple contacts match the same name, skip to avoid mis-send; log as business exception. | `Init.xaml` | 390 |
| 7 | `BGV12.PreferredEmailLabels` | asset | **Aligned** | type: Text, value: personal,home, description: Comma-separated preferred email labels (case-insensitive). | `Init.xaml` | 440 |
| 8 | `BGV12.SendEnabled` | asset | **Aligned** | type: Bool, value: true, description: Master kill-switch for outbound email sending (when false, generate content but do not send). | `Init.xaml` | 490 |
| 9 | `BGV12.OperationsDL` | asset | **Aligned** | type: Text, value: , description: Optional distribution list to receive failure notifications (left blank as PDD states no notifications). | `Init.xaml` | 540 |
| 10 | `BGV12.GoogleWorkspaceCredential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for break-glass scenarios; primary auth is via Integration Service connections. | `InitAllSettings.xaml` | 107 |
| 11 | `BirthdayGreetingsV12_EmailsToSend` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: Work queue for birthday greeting email dispatch items (one per birthday event/person). Supports retry and controlled execution telemetry. | — | — |

## 9. Queue Management

No queue activities detected in the package.

## 10. Exception Handling Coverage

**Coverage:** 18/39 high-risk activities inside TryCatch (46%)

### Files Without TryCatch

- `InitAllSettings.xaml`

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
| undefined | warning | 43 |  |

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
| 14 | Trigger | Configure trigger (schedule/queue/API) | Yes |
| 15 | Testing | Run smoke test in target environment | Yes |
| 16 | Monitoring | Verify logging output in Orchestrator | Recommended |
| 17 | Governance | UAT test execution completed and sign-off obtained | Yes |
| 18 | Governance | Peer code review completed | Yes |
| 19 | Governance | All quality gate warnings addressed or risk-accepted | Yes |
| 20 | Governance | Business process owner validation obtained | Yes |
| 21 | Governance | CoE approval obtained | Yes |
| 22 | Governance | Production readiness assessment completed (monitoring, alerting, rollback plan documented) | Yes |

## 14. Deployment Readiness Score

**Overall: Not Ready — 29/50 (15%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 19 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 4/10 | Only 46% of high-risk activities covered by TryCatch; 1 file(s) with no TryCatch blocks |
| Queue Management | 10/10 | No queue activities — section not applicable |
| Build Quality | 0/10 | 43 quality warnings — significant remediation needed; 7 remediations — stub replacements need developer attention; 4/8 workflow(s) are Studio-loadable (4 blocked — 50% not loadable) |
| Environment Setup | 10/10 | Environment requirements are straightforward |

> **Action Required:** Address the items above before deploying to production. Focus on sections with the lowest scores first.

## 15. Pre-emission Spec Validation

Validation was performed on the WorkflowSpec tree before XAML assembly. Issues caught at this stage are cheaper to fix than post-emission quality gate findings.

| Metric | Count |
|---|---|
| Total activities checked | 193 |
| Valid activities | 189 |
| Unknown → Comment stubs | 4 |
| Non-catalog properties stripped | 87 |
| Enum values auto-corrected | 25 |
| Missing required props filled | 69 |
| Total issues | 147 |

### Pre-emission vs Post-emission

| Stage | Issues Caught/Fixed |
|---|---|
| Pre-emission (spec validation) | 185 auto-fixed, 147 total issues |
| Post-emission (quality gate) | 50 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "Init.xaml",
    "Performer.xaml",
    "BirthdayGreetingsV12.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Init.xaml",
      "description": "Stripped 30 placeholder token(s) from Init.xaml",
      "developerAction": "Review Init.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Performer.xaml",
      "description": "Stripped 2 placeholder token(s) from Performer.xaml",
      "developerAction": "Review Performer.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "ProcessEvent.xaml",
      "description": "Stripped 37 placeholder token(s) from ProcessEvent.xaml",
      "developerAction": "Review ProcessEvent.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "Dispatcher.xaml",
      "description": "Catalog: Moved ForEach.Values from attribute to child-element in Dispatcher.xaml"
    },
    {
      "repairCode": "REPAIR_CATALOG_PROPERTY_SYNTAX",
      "file": "Performer.xaml",
      "description": "Catalog: Moved While.Condition from attribute to child-element in Performer.xaml"
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
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 123: String.Format() expects 2-10 argument(s) but got 12 in expression: String.Format(&quot;[BGV12][Dispatcher] Starting. RunId={0}, TodayDubai={1}, Cal...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 183: Undeclared variable \"Dynamic\" in expression: DirectCast(obj_CalendarListRaw, System.Collections.Generic.I... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 183: Undeclared variable \"c\" in expression: DirectCast(obj_CalendarListRaw, System.Collections.Generic.I... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 270: Adjacent identifiers \"for today(\" — possible missing operator or comma in expression: String.Format(&quot;[BGV12][Dispatcher] No birthday events found for today ({0})...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Finalize.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 114: Undeclared variable \"From\" in expression: Newtonsoft.Json.JsonConvert.SerializeObject(New Dictionary(O... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Finalize.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
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
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Main.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Main.xaml",
      "detail": "Contains 8 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Init.xaml",
      "detail": "Contains 8 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Init.xaml",
      "detail": "Contains 6 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Dispatcher.xaml",
      "detail": "Contains 8 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
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
      "file": "Performer.xaml",
      "detail": "Contains 10 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Performer.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessEvent.xaml",
      "detail": "Contains 7 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "ProcessEvent.xaml",
      "detail": "Contains 5 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 3 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "Finalize.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 138: asset name \"&quot;BGV12.CalendarName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 188: asset name \"&quot;BGV12.Timezone&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 238: asset name \"&quot;BGV12.FromGmailConnectionName&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 288: asset name \"&quot;BGV12.MaxConnectorRetries&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 338: asset name \"&quot;BGV12.RetryBackoffSeconds&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 388: asset name \"&quot;BGV12.SkipOnAmbiguousContactMatch&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 438: asset name \"&quot;BGV12.PreferredEmailLabels&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 488: asset name \"&quot;BGV12.SendEnabled&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Init.xaml",
      "detail": "Line 538: asset name \"&quot;BGV12.OperationsDL&quot;\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 162: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 170: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 221: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "Dispatcher.xaml",
      "detail": "Line 229: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 162: retry interval hardcoded as \"retryIntervalTs\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 170: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 221: retry interval hardcoded as \"retryIntervalTs\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 229: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessEvent.xaml",
      "detail": "Line 192: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-count",
      "file": "ProcessEvent.xaml",
      "detail": "Line 200: retry count hardcoded as 3 — consider externalizing to Config.xlsx (e.g., in_Config(\"MaxRetryNumber\"))",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessEvent.xaml",
      "detail": "Line 192: retry interval hardcoded as \"TimeSpan.FromSeconds(retryBackoffSeconds)\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessEvent.xaml",
      "detail": "Line 200: retry interval hardcoded as \"00:00:05\" — consider externalizing to Config.xlsx",
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
    }
  ],
  "totalEstimatedEffortMinutes": 105,
  "studioCompatibility": [
    {
      "file": "Main.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[undeclared-variable] Line 100: variable \"in_Mode\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 100: variable \"in_Mode\" is used in expression but not declared in this workflow"
      ]
    },
    {
      "file": "Init.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "Dispatcher.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[EXPRESSION-SYNTAX] Expression syntax errors that could not be auto-corrected"
      ],
      "failureCategory": "expression-syntax",
      "failureSummary": "Expression syntax errors that could not be auto-corrected"
    },
    {
      "file": "Performer.xaml",
      "level": "studio-warnings",
      "blockers": []
    },
    {
      "file": "ProcessEvent.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "Finalize.xaml",
      "level": "studio-blocked",
      "blockers": [
        "[undeclared-variable] Line 98: variable \"in_SentCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 98: variable \"in_SkippedNoEmailCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 98: variable \"in_SkippedContactNotFoundCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 98: variable \"in_SkippedAmbiguousCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 98: variable \"in_FailedCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_RunId\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_SentCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_SkippedNoEmailCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_SkippedContactNotFoundCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_SkippedAmbiguousCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_FailedCount\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 114: variable \"in_JobFaulted\" is used in expression but not declared in this workflow",
        "[undeclared-variable] Line 122: variable \"in_RunId\" is used in expression but not declared in this workflow"
      ]
    },
    {
      "file": "BirthdayGreetingsV12.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "InitAllSettings.xaml",
      "level": "studio-clean",
      "blockers": []
    }
  ],
  "preEmissionValidation": {
    "totalActivities": 193,
    "validActivities": 189,
    "unknownActivities": 4,
    "strippedProperties": 87,
    "enumCorrections": 25,
    "missingRequiredFilled": 69,
    "commentConversions": 4,
    "issueCount": 147
  }
}
```
