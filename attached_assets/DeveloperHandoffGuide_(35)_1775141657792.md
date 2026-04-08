# Developer Handoff Guide

**Project:** BirthdayGreetingsV20
**Generated:** 2026-04-02
**Generation Mode:** Baseline Openable (minimal, deterministic)
**Deployment Readiness:** Not Ready (19%)

**12 workflows: 1 fully generated, 1 with handoff blocks, 10 workflow-level stubs**
**Total Estimated Effort: ~1390 minutes (23.2 hours)**
**Remediations:** 128 total (0 property, 53 activity, 0 sequence, 0 structural-leaf, 5 workflow)
**Auto-Repairs:** 1
**Quality Warnings:** 61

---

### Per-Workflow Preservation Summary

| # | Workflow | Tier | Business Steps (SDD) | Preserved | Degraded (Handoff) | Manual | Bind Points |
|---|----------|------|-------------|-----------|-------------------|--------|-------------|
| 1 | `Main.xaml` | Stub | 2 | 0 | 1 | 2 | 0 |
| 2 | `Dispatcher.xaml` | Stub | 2 | 0 | 18 | 2 | 0 |
| 3 | `Performer.xaml` | Handoff | 2 | 0 | 3 | 3 | 0 |
| 4 | `ProcessTransaction.xaml` | Stub | 2 | 0 | 11 | 2 | 0 |
| 5 | `ContactResolver.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |
| 6 | `MessageGenerator.xaml` | Stub | 2 | 0 | 20 | 2 | 0 |
| 7 | `InitAllSettings.xaml` | Generated | 2 | 2 | 0 | 0 | 0 |
| 8 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |
| 9 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |
| 10 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |
| 11 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |
| 12 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}.xaml` | Stub | 2 | 0 | 0 | 2 | 0 |

## 1. Generated Logic (ready to use)

Generated XAML that is Studio-openable and does not contain handoff blocks or workflow-level stubs. May include auto-resolved property remediations or placeholders for fine-tuning.

The following 1 workflow(s) were fully generated and are ready to use:

| # | Workflow | Status | Studio Compatibility |
|---|----------|--------|---------------------|
| 1 | `InitAllSettings.xaml` | Fully Generated | Studio-openable |

### AI-Resolved with Smart Defaults (1)

The following issue(s) were automatically corrected during the build pipeline. **No developer action required.**

| # | Code | File | Description | Est. Minutes Saved |
|---|------|------|-------------|-------------------|
| 1 | `REPAIR_PLACEHOLDER_CLEANUP` | `Main.xaml` | Stripped 1 placeholder token(s) from Main.xaml | 5 |

### Studio Compatibility

| # | Workflow | Compatibility | Failure Category | Blockers |
|---|----------|--------------|-----------------|----------|
| 1 | `Main.xaml` | Openable with warnings | Unclassified | — |
| 2 | `Dispatcher.xaml` | Openable with warnings | Unclassified | — |
| 3 | `Performer.xaml` | Openable with warnings | Unclassified | — |
| 4 | `ProcessTransaction.xaml` | Openable with warnings | Unclassified | — |
| 5 | `ContactResolver.xaml` | Openable with warnings | Unclassified | — |
| 6 | `MessageGenerator.xaml` | Openable with warnings | Unclassified | — |
| 7 | `InitAllSettings.xaml` | Studio-openable | — | — |
| 8 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 9 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 10 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 11 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}` | Openable with warnings | Unclassified | — |
| 12 | `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}` | Openable with warnings | Unclassified | — |

**Summary:** 1 Studio-loadable, 11 with warnings, 0 not Studio-loadable

## 2. Handoff Blocks (business logic preserved, implementation required)

Blocks where business logic is preserved as documentation but implementation requires manual Studio work. Each entry includes the workflow file, block type, business description from the SDD (when available), expected inputs/outputs, and the developer action required.

**53 handoff block(s) requiring manual implementation**

#### 1. `Main.xaml` — — (activity)

- **Workflow File:** `Main.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Dispatcher" in Main.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 2. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_GoogleCalendar_Name" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 3. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Birthdays" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 4. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_RunTimeZone" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 5. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "America" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 6. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "New_York" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 7. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_MaxBirthdaysPerRun" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 8. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "yyyy" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 9. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "dd" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 10. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Summary" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 11. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Id" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 12. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "_" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 13. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "A" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 14. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "FullName" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 15. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "EventId" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 16. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "EventStartDate" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 17. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "RunDate" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 18. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "RunId" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 19. `Dispatcher.xaml` — — (activity)

- **Workflow File:** `Dispatcher.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "CalendarName" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 20. `Performer.xaml` — — (activity)

- **Workflow File:** `Performer.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "FullName" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 21. `Performer.xaml` — — (activity)

- **Workflow File:** `Performer.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "UnknownPerson" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 22. `Performer.xaml` — — (activity)

- **Workflow File:** `Performer.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "NoReference" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 23. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "yyyy" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 24. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "dd" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 25. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "d" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 26. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "yyyy" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 27. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_LogMaskEmails" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 28. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_EmailSubjectTemplate" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 29. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Happy" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 30. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Birthday" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 31. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "FirstName" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 32. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_Gmail_FromConnectionName" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 33. `ProcessTransaction.xaml` — — (activity)

- **Workflow File:** `ProcessTransaction.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "FirstName" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 34. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_GenAI_MaxChars" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 35. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "BGV20_GenAI_Temperature" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 36. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "RecipientName" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 37. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "FirstName" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 38. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "DateLocal" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 39. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "Notes" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 40. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "automation" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 41. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "robot" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 42. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "artificial" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 43. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "intelligence" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 44. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "ai" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 45. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "generated" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 46. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "by" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 47. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "hate" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 48. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "kill" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 49. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "racist" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 50. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "explicit" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 51. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "discriminat" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 52. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "GenAI" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

#### 53. `MessageGenerator.xaml` — — (activity)

- **Workflow File:** `MessageGenerator.xaml`
- **Block Type:** activity
- **Business Description (SDD):** —
- **Business Rule:** —
- **Expected Inputs:** —
- **Expected Outputs:** —
- **Contained Activities:** —
- **Remediation Code:** `UNDECLARED_VARIABLE_MANUAL`
- **Developer Action:** Declare variable "connection" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...
- **Estimated Effort:** 5 minutes

## 3. Manual Work Remaining

Consolidated developer TODO list organized by workflow, with estimated effort per item.

**189 items remaining — ~2000 minutes (33.3 hours) total estimated effort**

### ContactResolver.xaml (15 items, ~200 min)

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
| 11 | Low | Quality Warning | hardcoded-retry-interval: Line 216: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 12 | Low | Quality Warning | hardcoded-asset-name: Line 77: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 13 | Low | Quality Warning | hardcoded-asset-name: Line 133: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 14 | Low | Quality Warning | hardcoded-asset-name: Line 172: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 15 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 210: Complex expression (lambdas, LINQ, ... | Review and address | 10 |

### Dispatcher.xaml (40 items, ~410 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 16 | High | Workflow Stub | Entire workflow `Dispatcher.xaml` replaced with Studio-openable stub | Fix XML structure in Dispatcher.xaml — ensure proper nesting and closing tags | 15 |
| 17 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_GoogleCalendar_Name" in Dispatcher.xaml with the appr... | 5 |
| 18 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Birthdays" in Dispatcher.xaml with the appropriate type. Ex... | 5 |
| 19 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_RunTimeZone" in Dispatcher.xaml with the appropriate ... | 5 |
| 20 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "America" in Dispatcher.xaml with the appropriate type. Expr... | 5 |
| 21 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "New_York" in Dispatcher.xaml with the appropriate type. Exp... | 5 |
| 22 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_MaxBirthdaysPerRun" in Dispatcher.xaml with the appro... | 5 |
| 23 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "yyyy" in Dispatcher.xaml with the appropriate type. Express... | 5 |
| 24 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "dd" in Dispatcher.xaml with the appropriate type. Expressio... | 5 |
| 25 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Summary" in Dispatcher.xaml with the appropriate type. Expr... | 5 |
| 26 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Id" in Dispatcher.xaml with the appropriate type. Expressio... | 5 |
| 27 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "_" in Dispatcher.xaml with the appropriate type. Expression... | 5 |
| 28 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "A" in Dispatcher.xaml with the appropriate type. Expression... | 5 |
| 29 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "FullName" in Dispatcher.xaml with the appropriate type. Exp... | 5 |
| 30 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "EventId" in Dispatcher.xaml with the appropriate type. Expr... | 5 |
| 31 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "EventStartDate" in Dispatcher.xaml with the appropriate typ... | 5 |
| 32 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "RunDate" in Dispatcher.xaml with the appropriate type. Expr... | 5 |
| 33 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "RunId" in Dispatcher.xaml with the appropriate type. Expres... | 5 |
| 34 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "CalendarName" in Dispatcher.xaml with the appropriate type.... | 5 |
| 35 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 36 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 37 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 38 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 39 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 40 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 41 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 42 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 43 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 44 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 45 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 46 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 47 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 48 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 49 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 50 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 51 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 52 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 53 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Dispatcher.xaml — estimated 15 min | 15 |
| 54 | Low | Quality Warning | hardcoded-retry-interval: Line 135: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |
| 55 | Low | Quality Warning | COMPLEX_EXPRESSION_PASSTHROUGH: Line 408: Complex expression (lambdas, LINQ, ... | Review and address | 10 |

### Main.xaml (18 items, ~185 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 56 | High | Workflow Stub | Entire workflow `Main.xaml` replaced with Studio-openable stub | Fix XML structure in Main.xaml — ensure proper nesting and closing tags | 15 |
| 57 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Dispatcher" in Main.xaml with the appropriate type. Express... | 5 |
| 58 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Main.xaml — estimated 15 min | 15 |
| 59 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation... | Implement in Studio | 10 |
| 60 | Low | Quality Warning | invalid-activity-property: Line 640: property "Key" is not a known property o... | Review and address | 10 |
| 61 | Low | Quality Warning | hardcoded-asset-name: Line 77: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |
| 62 | Low | Quality Warning | hardcoded-asset-name: Line 120: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 63 | Low | Quality Warning | hardcoded-asset-name: Line 163: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 64 | Low | Quality Warning | hardcoded-asset-name: Line 206: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 65 | Low | Quality Warning | hardcoded-asset-name: Line 249: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 66 | Low | Quality Warning | hardcoded-asset-name: Line 292: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 67 | Low | Quality Warning | hardcoded-asset-name: Line 335: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 68 | Low | Quality Warning | hardcoded-asset-name: Line 378: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 69 | Low | Quality Warning | hardcoded-asset-name: Line 421: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 70 | Low | Quality Warning | hardcoded-asset-name: Line 464: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 71 | Low | Quality Warning | hardcoded-asset-name: Line 507: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 72 | Low | Quality Warning | hardcoded-asset-name: Line 550: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |
| 73 | Low | Quality Warning | hardcoded-asset-name: Line 593: asset name "{&quot;type&quot;:&quot;literal&q... | Review and address | 10 |

### MessageGenerator.xaml (43 items, ~445 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 74 | High | Workflow Stub | Entire workflow `MessageGenerator.xaml` replaced with Studio-openable stub | Fix XML structure in MessageGenerator.xaml — ensure proper nesting and closin... | 15 |
| 75 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_GenAI_MaxChars" in MessageGenerator.xaml with the app... | 5 |
| 76 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_GenAI_Temperature" in MessageGenerator.xaml with the ... | 5 |
| 77 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "RecipientName" in MessageGenerator.xaml with the appropriat... | 5 |
| 78 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "FirstName" in MessageGenerator.xaml with the appropriate ty... | 5 |
| 79 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "DateLocal" in MessageGenerator.xaml with the appropriate ty... | 5 |
| 80 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Notes" in MessageGenerator.xaml with the appropriate type. ... | 5 |
| 81 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "automation" in MessageGenerator.xaml with the appropriate t... | 5 |
| 82 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "robot" in MessageGenerator.xaml with the appropriate type. ... | 5 |
| 83 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "artificial" in MessageGenerator.xaml with the appropriate t... | 5 |
| 84 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "intelligence" in MessageGenerator.xaml with the appropriate... | 5 |
| 85 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "ai" in MessageGenerator.xaml with the appropriate type. Exp... | 5 |
| 86 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "generated" in MessageGenerator.xaml with the appropriate ty... | 5 |
| 87 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "by" in MessageGenerator.xaml with the appropriate type. Exp... | 5 |
| 88 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "hate" in MessageGenerator.xaml with the appropriate type. E... | 5 |
| 89 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "kill" in MessageGenerator.xaml with the appropriate type. E... | 5 |
| 90 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "racist" in MessageGenerator.xaml with the appropriate type.... | 5 |
| 91 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "explicit" in MessageGenerator.xaml with the appropriate typ... | 5 |
| 92 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "discriminat" in MessageGenerator.xaml with the appropriate ... | 5 |
| 93 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "GenAI" in MessageGenerator.xaml with the appropriate type. ... | 5 |
| 94 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "connection" in MessageGenerator.xaml with the appropriate t... | 5 |
| 95 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 96 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 97 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 98 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 99 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 100 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 101 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 102 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 103 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 104 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 105 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 106 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 107 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 108 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 109 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 110 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 111 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 112 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 113 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 114 | Low | Validation Finding | Quality gate finding: `EXPRESSION_SYNTAX_UNFIXABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 115 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |
| 116 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in MessageGenerator.xaml — estimated 15 min | 15 |

### ProcessTransaction.xaml (27 items, ~290 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 117 | High | Workflow Stub | Entire workflow `ProcessTransaction.xaml` replaced with Studio-openable stub | Fix XML structure in ProcessTransaction.xaml — ensure proper nesting and clos... | 15 |
| 118 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "yyyy" in ProcessTransaction.xaml with the appropriate type.... | 5 |
| 119 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "dd" in ProcessTransaction.xaml with the appropriate type. E... | 5 |
| 120 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "d" in ProcessTransaction.xaml with the appropriate type. Ex... | 5 |
| 121 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "yyyy" in ProcessTransaction.xaml with the appropriate type.... | 5 |
| 122 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_LogMaskEmails" in ProcessTransaction.xaml with the ap... | 5 |
| 123 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_EmailSubjectTemplate" in ProcessTransaction.xaml with... | 5 |
| 124 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Happy" in ProcessTransaction.xaml with the appropriate type... | 5 |
| 125 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "Birthday" in ProcessTransaction.xaml with the appropriate t... | 5 |
| 126 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "FirstName" in ProcessTransaction.xaml with the appropriate ... | 5 |
| 127 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "BGV20_Gmail_FromConnectionName" in ProcessTransaction.xaml ... | 5 |
| 128 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "FirstName" in ProcessTransaction.xaml with the appropriate ... | 5 |
| 129 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 130 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 131 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 132 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 133 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 134 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 135 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 136 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 137 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 138 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 139 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 140 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 141 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 142 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in ProcessTransaction.xaml — estimated 15 min | 15 |
| 143 | Low | Quality Warning | hardcoded-retry-interval: Line 361: retry interval hardcoded as "{&quot;type&... | Review and address | 10 |

### Performer.xaml (14 items, ~150 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 144 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "FullName" in Performer.xaml with the appropriate type. Expr... | 5 |
| 145 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "UnknownPerson" in Performer.xaml with the appropriate type.... | 5 |
| 146 | Medium | Activity Stub | Activity "unknown" stubbed | Declare variable "NoReference" in Performer.xaml with the appropriate type. E... | 5 |
| 147 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 148 | Low | Validation Finding | Quality gate finding: `unprefixed-activity` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 149 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 150 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 151 | Low | Validation Finding | Quality gate finding: `UNDECLARED_VARIABLE` | Manually implement activity in Performer.xaml — estimated 15 min | 15 |
| 152 | Low | Quality Warning | invalid-activity-property: Line 183: property "Arguments_Config" is not a kno... | Review and address | 10 |
| 153 | Low | Quality Warning | invalid-activity-property: Line 183: property "Arguments_RunId" is not a know... | Review and address | 10 |
| 154 | Low | Quality Warning | invalid-activity-property: Line 183: property "Arguments_TransactionItem" is ... | Review and address | 10 |
| 155 | Low | Quality Warning | invalid-activity-property: Line 234: property "Output" is not a known propert... | Review and address | 10 |
| 156 | Low | Quality Warning | invalid-activity-property: Line 282: property "Output" is not a known propert... | Review and address | 10 |
| 157 | Low | Quality Warning | hardcoded-asset-name: Line 68: asset name "{&quot;type&quot;:&quot;literal&qu... | Review and address | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 158 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 159 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 160 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 161 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### {&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}.xaml (1 item, ~10 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 162 | Low | Implementation Required | Contains 1 placeholder value(s) matching "\bPLACEHOLDER\b" [Developer Impleme... | Implement in Studio | 10 |

### InitAllSettings.xaml (14 items, ~140 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 163 | Low | Quality Warning | hardcoded-asset-name: Line 100: asset name "BGV20_GoogleOAuth_Credential" is ... | Review and address | 10 |
| 164 | Low | Quality Warning | hardcoded-asset-name: Line 105: asset name "BGV20_GoogleCalendar_Name" is har... | Review and address | 10 |
| 165 | Low | Quality Warning | hardcoded-asset-name: Line 114: asset name "BGV20_Gmail_FromConnectionName" i... | Review and address | 10 |
| 166 | Low | Quality Warning | hardcoded-asset-name: Line 123: asset name "BGV20_RunTimeZone" is hardcoded —... | Review and address | 10 |
| 167 | Low | Quality Warning | hardcoded-asset-name: Line 132: asset name "BGV20_EmailSubjectTemplate" is ha... | Review and address | 10 |
| 168 | Low | Quality Warning | hardcoded-asset-name: Line 141: asset name "BGV20_EmailPreferenceLabels" is h... | Review and address | 10 |
| 169 | Low | Quality Warning | hardcoded-asset-name: Line 150: asset name "BGV20_SkipIfAmbiguousContactMatch... | Review and address | 10 |
| 170 | Low | Quality Warning | hardcoded-asset-name: Line 159: asset name "BGV20_QueueItemDeferMinutes_OnRat... | Review and address | 10 |
| 171 | Low | Quality Warning | hardcoded-asset-name: Line 168: asset name "BGV20_LogMaskEmails" is hardcoded... | Review and address | 10 |
| 172 | Low | Quality Warning | hardcoded-asset-name: Line 177: asset name "BGV20_GenAI_Temperature" is hardc... | Review and address | 10 |
| 173 | Low | Quality Warning | hardcoded-asset-name: Line 186: asset name "BGV20_GenAI_MaxChars" is hardcode... | Review and address | 10 |
| 174 | Low | Quality Warning | hardcoded-asset-name: Line 195: asset name "BGV20_MaxBirthdaysPerRun" is hard... | Review and address | 10 |
| 175 | Low | Quality Warning | hardcoded-asset-name: Line 204: asset name "BGV20_BusinessSLA_SendByLocalTime... | Review and address | 10 |
| 176 | Low | Quality Warning | hardcoded-asset-name: Line 213: asset name "BGV20_OrchestratorFolderName" is ... | Review and address | 10 |

### orchestrator.xaml (13 items, ~130 min)

| # | Priority | Category | Description | Developer Action | Est. Minutes |
|---|----------|----------|-------------|-----------------|-------------|
| 177 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is r... | Review and address | 10 |
| 178 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_Gmail_FromConnectionName}"... | Review and address | 10 |
| 179 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_RunTimeZone}" is reference... | Review and address | 10 |
| 180 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailSubjectTemplate}" is ... | Review and address | 10 |
| 181 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_EmailPreferenceLabels}" is... | Review and address | 10 |
| 182 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_SkipIfAmbiguousContactMatc... | Review and address | 10 |
| 183 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_QueueItemDeferMinutes_OnRa... | Review and address | 10 |
| 184 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_LogMaskEmails}" is referen... | Review and address | 10 |
| 185 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_Temperature}" is ref... | Review and address | 10 |
| 186 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_GenAI_MaxChars}" is refere... | Review and address | 10 |
| 187 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_MaxBirthdaysPerRun}" is re... | Review and address | 10 |
| 188 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_BusinessSLA_SendByLocalTim... | Review and address | 10 |
| 189 | Low | Quality Warning | undeclared-asset: Asset "{type:literal,value:BGV20_OrchestratorFolderName}" i... | Review and address | 10 |

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
| 2 | `UiPath.DataService.Activities` |
| 3 | `UiPath.UIAutomation.Activities` |
| 4 | `UiPath.Excel.Activities` |

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

**Total:** 28 activities (15 hardcoded, 13 variable-driven)

### Orchestrator Credentials to Provision

| # | Credential Name | Type | Consuming Activity | File | Action |
|---|----------------|------|-------------------|------|--------|
| 1 | `BGV20_GoogleOAuth_Credential` | Credential | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Orchestrator Assets to Provision

| # | Asset Name | Value Type | Consuming Activity | File | Action |
|---|-----------|-----------|-------------------|------|--------|
| 1 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | `Performer.xaml` | Create in Orchestrator before deployment |
| 2 | `BGV20_GoogleCalendar_Name` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 3 | `BGV20_Gmail_FromConnectionName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 4 | `BGV20_RunTimeZone` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 5 | `BGV20_EmailSubjectTemplate` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 6 | `BGV20_EmailPreferenceLabels` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 7 | `BGV20_SkipIfAmbiguousContactMatch` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 8 | `BGV20_QueueItemDeferMinutes_OnRateLimit` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 9 | `BGV20_LogMaskEmails` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 10 | `BGV20_GenAI_Temperature` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 11 | `BGV20_GenAI_MaxChars` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 12 | `BGV20_MaxBirthdaysPerRun` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 13 | `BGV20_BusinessSLA_SendByLocalTime` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |
| 14 | `BGV20_OrchestratorFolderName` | Unknown | — | `InitAllSettings.xaml` | Create in Orchestrator before deployment |

### Detailed Usage Map

| File | Line | Activity | Asset/Credential | Type | Variable | Hardcoded |
|------|------|----------|-----------------|------|----------|----------|
| `Performer.xaml` | 68 | GetAsset | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 100 | GetCredential | `BGV20_GoogleOAuth_Credential` | Credential | — | Yes |
| `InitAllSettings.xaml` | 105 | GetAsset | `BGV20_GoogleCalendar_Name` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 106 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 114 | GetAsset | `BGV20_Gmail_FromConnectionName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 115 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 123 | GetAsset | `BGV20_RunTimeZone` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 124 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 132 | GetAsset | `BGV20_EmailSubjectTemplate` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 133 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 141 | GetAsset | `BGV20_EmailPreferenceLabels` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 142 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 150 | GetAsset | `BGV20_SkipIfAmbiguousContactMatch` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 151 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 159 | GetAsset | `BGV20_QueueItemDeferMinutes_OnRateLimit` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 160 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 168 | GetAsset | `BGV20_LogMaskEmails` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 169 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 177 | GetAsset | `BGV20_GenAI_Temperature` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 178 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 186 | GetAsset | `BGV20_GenAI_MaxChars` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 187 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 195 | GetAsset | `BGV20_MaxBirthdaysPerRun` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 196 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 204 | GetAsset | `BGV20_BusinessSLA_SendByLocalTime` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 205 | GetAsset | `UNKNOWN` | Unknown | — | No |
| `InitAllSettings.xaml` | 213 | GetAsset | `BGV20_OrchestratorFolderName` | Unknown | — | Yes |
| `InitAllSettings.xaml` | 214 | GetAsset | `UNKNOWN` | Unknown | — | No |

> **Warning:** 15 asset/credential name(s) are hardcoded. Consider externalizing to Orchestrator Config assets for environment portability.

## 8. SDD × XAML Artifact Reconciliation

**Summary:** 14 aligned, 1 SDD-only, 1 XAML-only

> **Warning:** 1 artifact(s) declared in the SDD were not found in the generated XAML. These must be provisioned in Orchestrator but are not referenced in code — verify the SDD spec or add the corresponding activities.

> **Warning:** 1 artifact(s) found in XAML are not declared in the SDD. Update the SDD orchestrator_artifacts block to include these, or the deployment manifest will be incomplete.

| # | Name | Type | Status | SDD Config | XAML File | XAML Line |
|---|------|------|--------|-----------|----------|----------|
| 1 | `BGV20_GoogleCalendar_Name` | asset | **Aligned** | type: Text, value: Birthdays, description: Target Google Calendar name to read birthday events from. | `InitAllSettings.xaml` | 105 |
| 2 | `BGV20_Gmail_FromConnectionName` | asset | **Aligned** | type: Text, value: ninemush@gmail.com, description: Integration Service Gmail connection name used as the sender identity. | `InitAllSettings.xaml` | 114 |
| 3 | `BGV20_RunTimeZone` | asset | **Aligned** | type: Text, value: America/New_York, description: Time zone used to compute 'today' for calendar queries and to align the 8:00 AM schedule. | `InitAllSettings.xaml` | 123 |
| 4 | `BGV20_EmailSubjectTemplate` | asset | **Aligned** | type: Text, value: Happy Birthday, {FirstName}!, description: Email subject template. Workflow replaces tokens using contact/event-derived data. | `InitAllSettings.xaml` | 132 |
| 5 | `BGV20_EmailPreferenceLabels` | asset | **Aligned** | type: Text, value: home,personal, description: Comma-separated preferred Google Contacts email labels (case-insensitive). | `InitAllSettings.xaml` | 141 |
| 6 | `BGV20_SkipIfAmbiguousContactMatch` | asset | **Aligned** | type: Bool, value: true, description: If multiple Google Contacts match the same full name, skip sending to avoid wrong recipient. If false, use deterministic first exact match and log ambiguity. | `InitAllSettings.xaml` | 150 |
| 7 | `BGV20_QueueItemDeferMinutes_OnRateLimit` | asset | **Aligned** | type: Integer, value: 15, description: If rate limits/transient connector errors occur, defer queue item by N minutes before retry. | `InitAllSettings.xaml` | 159 |
| 8 | `BGV20_LogMaskEmails` | asset | **Aligned** | type: Bool, value: true, description: Mask recipient emails in logs to reduce PII exposure while preserving traceability. | `InitAllSettings.xaml` | 168 |
| 9 | `BGV20_GenAI_Temperature` | asset | **Aligned** | type: Integer, value: 30, description: GenAI creativity control expressed as an integer percent (0-100). Workflow maps to model temperature (e.g., 0.30). | `InitAllSettings.xaml` | 177 |
| 10 | `BGV20_GenAI_MaxChars` | asset | **Aligned** | type: Integer, value: 1200, description: Maximum characters for generated email body to keep messages concise and reduce quota risk. | `InitAllSettings.xaml` | 186 |
| 11 | `BGV20_MaxBirthdaysPerRun` | asset | **Aligned** | type: Integer, value: 50, description: Safety cap to prevent runaway runs if the calendar query returns unexpected results. | `InitAllSettings.xaml` | 195 |
| 12 | `BGV20_BusinessSLA_SendByLocalTime` | asset | **Aligned** | type: Text, value: 09:00, description: Operational SLA target: all greetings should be sent by this local time on the run day (best-effort; monitoring/alerts should key off this). | `InitAllSettings.xaml` | 204 |
| 13 | `BGV20_OrchestratorFolderName` | asset | **Aligned** | type: Text, value: BirthdayGreetings, description: Target Orchestrator folder name where processes/queues/triggers are deployed (used for operator clarity). | `InitAllSettings.xaml` | 213 |
| 14 | `BGV20_GoogleOAuth_Credential` | credential | **Aligned** | type: Credential, description: Reserved credential asset for Google OAuth/client secrets if a non-Integration-Service fallback is ever required (not used when Integration Service connections are healthy). | `InitAllSettings.xaml` | 100 |
| 15 | `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | asset | **XAML Only** | — | `Performer.xaml` | 68 |
| 16 | `BGV20_BirthdayGreetings_Transactions` | queue | **SDD Only** | maxRetries: 2, uniqueReference: true, description: One transaction per birthday person (from Google Calendar 'Birthdays') to enforce exactly one email per person, enable retries, and provide auditability. | — | — |

## 9. Queue Management

**Pattern:** Queue usage (non-transactional)

### SDD-Defined Queues (Not Yet in XAML)

| # | Queue Name | Unique Reference | Max Retries | SLA | Note |
|---|-----------|-----------------|-------------|-----|------|
| 1 | `BGV20_BirthdayGreetings_Transactions` | Yes | 2x | — | Defined in SDD but no matching XAML activity — verify implementation |

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

**Coverage:** 3/30 high-risk activities inside TryCatch (10%)

### Files Without TryCatch

- `Main.xaml`
- `Dispatcher.xaml`
- `ProcessTransaction.xaml`
- `ContactResolver.xaml`
- `MessageGenerator.xaml`
- `InitAllSettings.xaml`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ProcessTransaction.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}`
- `{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}`

### Uncovered High-Risk Activities

| # | Location | Activity |
|---|----------|----------|
| 1 | `InitAllSettings.xaml:100` | Get BGV20_GoogleOAuth_Credential |
| 2 | `InitAllSettings.xaml:105` | Get BGV20_GoogleCalendar_Name |
| 3 | `InitAllSettings.xaml:106` | ui:GetAsset |
| 4 | `InitAllSettings.xaml:114` | Get BGV20_Gmail_FromConnectionName |
| 5 | `InitAllSettings.xaml:115` | ui:GetAsset |
| 6 | `InitAllSettings.xaml:123` | Get BGV20_RunTimeZone |
| 7 | `InitAllSettings.xaml:124` | ui:GetAsset |
| 8 | `InitAllSettings.xaml:132` | Get BGV20_EmailSubjectTemplate |
| 9 | `InitAllSettings.xaml:133` | ui:GetAsset |
| 10 | `InitAllSettings.xaml:141` | Get BGV20_EmailPreferenceLabels |
| 11 | `InitAllSettings.xaml:142` | ui:GetAsset |
| 12 | `InitAllSettings.xaml:150` | Get BGV20_SkipIfAmbiguousContactMatch |
| 13 | `InitAllSettings.xaml:151` | ui:GetAsset |
| 14 | `InitAllSettings.xaml:159` | Get BGV20_QueueItemDeferMinutes_OnRateLimit |
| 15 | `InitAllSettings.xaml:160` | ui:GetAsset |
| 16 | `InitAllSettings.xaml:168` | Get BGV20_LogMaskEmails |
| 17 | `InitAllSettings.xaml:169` | ui:GetAsset |
| 18 | `InitAllSettings.xaml:177` | Get BGV20_GenAI_Temperature |
| 19 | `InitAllSettings.xaml:178` | ui:GetAsset |
| 20 | `InitAllSettings.xaml:186` | Get BGV20_GenAI_MaxChars |
| 21 | `InitAllSettings.xaml:187` | ui:GetAsset |
| 22 | `InitAllSettings.xaml:195` | Get BGV20_MaxBirthdaysPerRun |
| 23 | `InitAllSettings.xaml:196` | ui:GetAsset |
| 24 | `InitAllSettings.xaml:204` | Get BGV20_BusinessSLA_SendByLocalTime |
| 25 | `InitAllSettings.xaml:205` | ui:GetAsset |
| 26 | `InitAllSettings.xaml:213` | Get BGV20_OrchestratorFolderName |
| 27 | `InitAllSettings.xaml:214` | ui:GetAsset |

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
| placeholder-value | warning | 6 | Contains 1 placeholder value(s) matching "\bTODO\b" [Developer Implementation Required] |
| undeclared-asset | warning | 13 | Asset "{type:literal,value:BGV20_GoogleCalendar_Name}" is referenced in XAML but not declared in orchestrator artifacts |
| invalid-activity-property | warning | 6 | Line 640: property "Key" is not a known property of Sequence |
| hardcoded-asset-name | warning | 31 | Line 77: asset name "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}" is ... |
| hardcoded-retry-interval | warning | 3 | Line 135: retry interval hardcoded as "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}" — ... |
| COMPLEX_EXPRESSION_PASSTHROUGH | warning | 2 | Line 408: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption i... |

## 13. Pre-Deployment Checklist

| # | Category | Task | Required |
|---|----------|------|----------|
| 1 | Deployment | Publish package to Orchestrator feed | Yes |
| 2 | Deployment | Create Process in target folder | Yes |
| 3 | Environment | Verify Orchestrator connection from robot | Yes |
| 4 | Credentials | Provision credential: `BGV20_GoogleOAuth_Credential` | Yes |
| 5 | Assets | Provision asset: `{type:literal,value:BGV20_QueueItemDeferMinutes_OnRateLimit}` | Yes |
| 6 | Assets | Provision asset: `BGV20_GoogleCalendar_Name` | Yes |
| 7 | Assets | Provision asset: `BGV20_Gmail_FromConnectionName` | Yes |
| 8 | Assets | Provision asset: `BGV20_RunTimeZone` | Yes |
| 9 | Assets | Provision asset: `BGV20_EmailSubjectTemplate` | Yes |
| 10 | Assets | Provision asset: `BGV20_EmailPreferenceLabels` | Yes |
| 11 | Assets | Provision asset: `BGV20_SkipIfAmbiguousContactMatch` | Yes |
| 12 | Assets | Provision asset: `BGV20_QueueItemDeferMinutes_OnRateLimit` | Yes |
| 13 | Assets | Provision asset: `BGV20_LogMaskEmails` | Yes |
| 14 | Assets | Provision asset: `BGV20_GenAI_Temperature` | Yes |
| 15 | Assets | Provision asset: `BGV20_GenAI_MaxChars` | Yes |
| 16 | Assets | Provision asset: `BGV20_MaxBirthdaysPerRun` | Yes |
| 17 | Assets | Provision asset: `BGV20_BusinessSLA_SendByLocalTime` | Yes |
| 18 | Assets | Provision asset: `BGV20_OrchestratorFolderName` | Yes |
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

**Overall: Not Ready — 27/50 (19%)**

| Section | Score | Notes |
|---------|-------|-------|
| Credentials & Assets | 5/10 | 15 hardcoded asset name(s) — use Orchestrator assets/config |
| Exception Handling | 2/10 | Only 10% of high-risk activities covered by TryCatch; 11 file(s) with no TryCatch blocks |
| Queue Management | 10/10 | Queue configuration looks good |
| Build Quality | 0/10 | 61 quality warnings — significant remediation needed; 128 remediations — stub replacements need developer attention; Entry point (Main.xaml) is stubbed — package has no runnable entry point |
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
| Post-emission (quality gate) | 189 warnings/remediations |

---

## 16. Structured Report (JSON)

The following JSON appendix contains the full pipeline outcome report for programmatic consumption:

```json
{
  "fullyGeneratedFiles": [
    "InitAllSettings.xaml"
  ],
  "autoRepairs": [
    {
      "repairCode": "REPAIR_PLACEHOLDER_CLEANUP",
      "file": "Main.xaml",
      "description": "Stripped 1 placeholder token(s) from Main.xaml",
      "developerAction": "Review Main.xaml for Comment elements marking where placeholder activities were removed",
      "estimatedEffortMinutes": 5
    }
  ],
  "remediations": [
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 179: Activity \"GetEvents\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GetEvents\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 114: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 118: Activity \"GetQueueItem\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GetQueueItem\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 157: Activity \"InsertEntity\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:InsertEntity\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 405: Activity \"SendEmail\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:SendEmail\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 450: Activity \"InsertEntity\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:InsertEntity\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 73: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 261: Activity \"SearchContacts\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:SearchContacts\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 315: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 341: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 372: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 373: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 386: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 399: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ContactResolver.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Activity \"MultipleAssign\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:MultipleAssign\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in ContactResolver.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 161: Activity \"GenerateText\" has no namespace prefix — Studio will fail to resolve it. Expected a prefix like \"ui:GenerateText\"",
      "classifiedCheck": "unprefixed-activity",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Main.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 67: Undeclared variable \"Dispatcher\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Main.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 67: Undeclared variable \"BGV20_GoogleCalendar_Name\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 67: Undeclared variable \"Birthdays\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"BGV20_RunTimeZone\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"America\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 71: Undeclared variable \"New_York\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 75: Undeclared variable \"BGV20_MaxBirthdaysPerRun\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 129: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 129: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 301: Undeclared variable \"Summary\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 343: Undeclared variable \"Id\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 408: Undeclared variable \"_\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 408: Undeclared variable \"A\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"FullName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"EventId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"EventStartDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"RunDate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"RunId\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Dispatcher.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 412: Undeclared variable \"CalendarName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Dispatcher.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 173: Undeclared variable \"FullName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 173: Undeclared variable \"UnknownPerson\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "Performer.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 177: Undeclared variable \"NoReference\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in Performer.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 70: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 70: Undeclared variable \"dd\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 74: Undeclared variable \"d\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 74: Undeclared variable \"yyyy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 82: Undeclared variable \"BGV20_LogMaskEmails\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 86: Undeclared variable \"BGV20_EmailSubjectTemplate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 86: Undeclared variable \"Happy\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 86: Undeclared variable \"Birthday\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 86: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 90: Undeclared variable \"BGV20_Gmail_FromConnectionName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 355: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in ProcessTransaction.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 66: Undeclared variable \"BGV20_GenAI_MaxChars\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 108: Undeclared variable \"BGV20_GenAI_Temperature\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 155: Undeclared variable \"RecipientName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 155: Undeclared variable \"FirstName\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 155: Undeclared variable \"DateLocal\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 155: Undeclared variable \"Notes\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"automation\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"robot\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"artificial\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"intelligence\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"ai\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"generated\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 286: Undeclared variable \"by\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 290: Undeclared variable \"hate\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 290: Undeclared variable \"kill\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 290: Undeclared variable \"racist\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 290: Undeclared variable \"explicit\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 290: Undeclared variable \"discriminat\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 377: Adjacent identifiers \"GenAI Activities(\" — possible missing operator or comma in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;\\&quot;UiPat...",
      "classifiedCheck": "EXPRESSION_SYNTAX_UNFIXABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 377: Undeclared variable \"GenAI\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
      "estimatedEffortMinutes": 15
    },
    {
      "level": "validation-finding",
      "file": "MessageGenerator.xaml",
      "remediationCode": "STUB_ACTIVITY_UNKNOWN",
      "reason": "Line 377: Undeclared variable \"connection\" in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot... — variable is not declared in any <Variable> block in scope",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Manually implement activity in MessageGenerator.xaml — estimated 15 min",
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
      "level": "activity",
      "file": "Main.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Dispatcher\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Dispatcher\" in Main.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_GoogleCalendar_Name\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_GoogleCalendar_Name\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Birthdays\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Birthdays\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_RunTimeZone\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_RunTimeZone\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"America\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"America\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"New_York\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"New_York\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_MaxBirthdaysPerRun\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_MaxBirthdaysPerRun\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"yyyy\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"yyyy\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"dd\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"dd\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Summary\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Summary\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Id\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Id\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"_\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"_\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"A\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"A\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"FullName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"FullName\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"EventId\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"EventId\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"EventStartDate\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"EventStartDate\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"RunDate\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"RunDate\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"RunId\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"RunId\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Dispatcher.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"CalendarName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"CalendarName\" in Dispatcher.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Performer.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"FullName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"FullName\" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Performer.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"UnknownPerson\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"UnknownPerson\" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "Performer.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"NoReference\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"NoReference\" in Performer.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"yyyy\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"yyyy\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"dd\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"dd\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"d\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"d\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"yyyy\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"yyyy\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_LogMaskEmails\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_LogMaskEmails\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_EmailSubjectTemplate\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_EmailSubjectTemplate\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Happy\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Happy\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Birthday\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Birthday\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"FirstName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"FirstName\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_Gmail_FromConnectionName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_Gmail_FromConnectionName\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "ProcessTransaction.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"FirstName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"FirstName\" in ProcessTransaction.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_GenAI_MaxChars\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_GenAI_MaxChars\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"BGV20_GenAI_Temperature\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"BGV20_GenAI_Temperature\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"RecipientName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"RecipientName\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"FirstName\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"FirstName\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"DateLocal\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"DateLocal\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"Notes\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"Notes\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"automation\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"automation\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"robot\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"robot\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"artificial\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"artificial\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"intelligence\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"intelligence\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"ai\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"ai\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"generated\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"generated\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"by\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"by\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"hate\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"hate\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"kill\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"kill\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"racist\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"racist\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"explicit\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"explicit\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"discriminat\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"discriminat\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"GenAI\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"GenAI\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    },
    {
      "level": "activity",
      "file": "MessageGenerator.xaml",
      "remediationCode": "UNDECLARED_VARIABLE_MANUAL",
      "reason": "Undeclared variable \"connection\" — type cannot be auto-inferred (no recognized naming prefix)",
      "classifiedCheck": "UNDECLARED_VARIABLE",
      "developerAction": "Declare variable \"connection\" in MessageGenerator.xaml with the appropriate type. Expression context: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot...",
      "estimatedEffortMinutes": 5
    }
  ],
  "propertyRemediations": [],
  "downgradeEvents": [],
  "qualityWarnings": [
    {
      "check": "placeholder-value",
      "file": "Main.xaml",
      "detail": "Contains 1 placeholder value(s) matching \"\\bTODO\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}",
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
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}",
      "detail": "Contains 1 placeholder value(s) matching \"\\bPLACEHOLDER\\b\" [Developer Implementation Required]",
      "severity": "warning",
      "stubCategory": "handoff"
    },
    {
      "check": "placeholder-value",
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}",
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
      "file": "Main.xaml",
      "detail": "Line 640: property \"Key\" is not a known property of Sequence",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 183: property \"Arguments_Config\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 183: property \"Arguments_RunId\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 183: property \"Arguments_TransactionItem\" is not a known property of ui:InvokeWorkflowFile",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 234: property \"Output\" is not a known property of ui:SetTransactionStatus",
      "severity": "warning"
    },
    {
      "check": "invalid-activity-property",
      "file": "Performer.xaml",
      "detail": "Line 282: property \"Output\" is not a known property of ui:SetTransactionStatus",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 77: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GoogleCalendar_Name&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 120: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_Gmail_FromConnectionName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 163: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_RunTimeZone&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 206: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailSubjectTemplate&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 249: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailPreferenceLabels&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 292: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_SkipIfAmbiguousContactMatch&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 335: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 378: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_LogMaskEmails&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 421: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_Temperature&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 464: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_GenAI_MaxChars&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 507: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_MaxBirthdaysPerRun&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 550: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_BusinessSLA_SendByLocalTime&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Main.xaml",
      "detail": "Line 593: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_OrchestratorFolderName&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "Dispatcher.xaml",
      "detail": "Line 135: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "Performer.xaml",
      "detail": "Line 68: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_QueueItemDeferMinutes_OnRateLimit&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ProcessTransaction.xaml",
      "detail": "Line 361: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:30&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-retry-interval",
      "file": "ContactResolver.xaml",
      "detail": "Line 216: retry interval hardcoded as \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;00:00:05&quot;}\" — consider externalizing to Config.xlsx",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "ContactResolver.xaml",
      "detail": "Line 77: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_EmailPreferenceLabels&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "ContactResolver.xaml",
      "detail": "Line 133: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_SkipIfAmbiguousContactMatch&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
      "severity": "warning"
    },
    {
      "check": "hardcoded-asset-name",
      "file": "ContactResolver.xaml",
      "detail": "Line 172: asset name \"{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;BGV20_LogMaskEmails&quot;}\" is hardcoded — consider using a Config.xlsx entry or workflow argument",
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
      "file": "Dispatcher.xaml",
      "detail": "Line 408: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;runDateStrin...",
      "severity": "warning"
    },
    {
      "check": "COMPLEX_EXPRESSION_PASSTHROUGH",
      "file": "ContactResolver.xaml",
      "detail": "Line 210: Complex expression (lambdas, LINQ, nested calls, or 3+ operators) — emitting as-is to avoid regex corruption in expression: {&quot;type&quot;:&quot;vb_expression&quot;,&quot;value&quot;:&quot;preferenceLa...",
      "severity": "warning"
    }
  ],
  "totalEstimatedEffortMinutes": 1390,
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
      "level": "studio-warnings",
      "blockers": []
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
      "file": "InitAllSettings.xaml",
      "level": "studio-clean",
      "blockers": []
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Dispatcher.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Performer.xaml&quot;}",
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
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;ContactResolver.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    },
    {
      "file": "{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;MessageGenerator.xaml&quot;}",
      "level": "studio-blocked",
      "blockers": [
        "[COMPLIANCE-FAILURE] Compliance or quality gate failure requiring manual remediation"
      ],
      "failureCategory": "compliance-failure",
      "failureSummary": "Compliance or quality gate failure requiring manual remediation"
    }
  ],
  "emissionGateViolations": {
    "totalViolations": 1,
    "stubbed": 0,
    "corrected": 1,
    "blocked": 0,
    "degraded": 0,
    "details": [
      {
        "file": "Main.xaml",
        "line": 640,
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
