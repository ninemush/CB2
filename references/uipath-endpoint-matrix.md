# UiPath Endpoint/Version Matrix and Status Model Redesign

## Overview

This document replaces the vague "inferred" service endpoint assumptions with an explicit, official UiPath service endpoint/version matrix. It defines a new 5-state status model, schema redesign, migration plan, and service mapping recommendations.

**Current state**: 17 services in `service-endpoints.json`. Of these, 7 are marked `confidence: "official"` (OR, TM, DU, DF, PIMS, HUB, IDENTITY) and 10 are marked `confidence: "inferred"` (IXP, REINFER, AI, INTEGRATIONSERVICE, AUTOMATIONOPS, AUTOMATIONSTORE, APPS, ASSISTANT, AGENTS, AUTOPILOT). The UI surfaces "(inferred)" labels that are meaningless to users.

---

## Phase 1 — Official Endpoint/Version Matrix

### Confirmation Methodology

**Strict confirmation rule**: A service is "officially confirmed" only if there is real UiPath public documentation or API reference for the Automation Cloud endpoint pattern. Services discovered operationally (trial-and-error, network inspection, working-in-practice) but lacking official documentation are classified as "unconfirmed."

**Two independent questions per service**:
- `official_endpoint_known` — Is there a documented, official endpoint pattern for this service on Automation Cloud?
- `tenant_service_available` — Is this service actually provisioned/enabled/licensed on a given tenant?

These are strictly separate; knowing an endpoint pattern exists does not mean the tenant has the service.

### Endpoint/Version Matrix

| # | Service ID | Display Name | official_endpoint_known | Endpoint Root Pattern | Versioning Model | API Base Path | Current `service-endpoints.json` Accuracy | Recommended Probe Path | Expected Probe Success | How to Determine `tenant_service_available` | Doc Source |
|---|-----------|-------------|------------------------|----------------------|-----------------|--------------|------------------------------------------|----------------------|----------------------|-------------------------------------------|-----------|
| 1 | **OR** | Orchestrator | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/orchestrator_` | OData (no explicit version in path; OData conventions) | `/odata` | ✅ Correct | `/odata/Folders?$top=1` | HTTP 200 with JSON `value` array | Probe succeeds with valid token; 401/403 = exists but auth issue | [UiPath Orchestrator API Guide](https://docs.uipath.com/orchestrator/automation-cloud/latest/api-guide/) |
| 2 | **TM** | Test Manager | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/testmanager_` | REST `/api` | `/api` | ✅ Correct (alternates `tmapi_` and `testmanager` also listed — accurate historically) | `/api/v3/test-cases?$top=1` or token acquisition for `TM` resource | HTTP 200 or successful TM token | TM-scoped token acquisition succeeds (`tryAcquireResourceToken("TM")`) | [UiPath Test Manager API](https://docs.uipath.com/test-suite/automation-cloud/latest/api-guide/) |
| 3 | **DU** | Document Understanding | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/du_` | REST `/api` with query param `?api-version=1` | `/api` | ✅ Correct (alternate `documentunderstanding_` also listed — accurate) | `/api/framework/projects?api-version=1` | HTTP 200 with JSON project list | DU-scoped token acquisition + probe response check | [UiPath Document Understanding API](https://docs.uipath.com/document-understanding/automation-cloud/latest/api-guide/) |
| 4 | **DF** | Data Service (Data Fabric) | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/dataservice_` | REST `/api` | `/api` | ✅ Correct | `/api/EntityService/Entity` | HTTP 200 or 401 (service exists) | DF token acquisition + entity probe; fallback to Swagger check | [UiPath Data Service API](https://docs.uipath.com/data-service/automation-cloud/latest/api-guide/) |
| 5 | **PIMS** | Maestro (Process & Intent Mining) | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/maestro_` | REST `/api/v1` | `/api` | ⚠️ `apiBasePath` is `/api` but probe uses `/api/v1/` — minor inconsistency | `/api/v1/` | HTTP 200/3xx (redirect = exists) | PIMS token acquisition or HTTP probe succeeds | [UiPath Maestro](https://docs.uipath.com/maestro/automation-cloud/latest/) |
| 6 | **HUB** | Automation Hub | **Yes** | `https://cloud.uipath.com/{org}/{tenant}/automationhub_` | REST `/api/v1` | `/api/v1` | ✅ Correct | `/api/v1/ideas?$top=1` | HTTP 200/401/403 (service exists) | Probe response; separate OAuth token required | [UiPath Automation Hub API](https://docs.uipath.com/automation-hub/automation-cloud/latest/api-guide/) |
| 7 | **IDENTITY** | Identity Server / Platform Management | **Yes** | `https://cloud.uipath.com/identity_` | OIDC/OAuth2 `/connect` | `/connect` | ✅ Correct | `/connect/.well-known/openid-configuration` | HTTP 200 with OIDC discovery JSON | Always available if UiPath Cloud is reachable | [UiPath Identity Server](https://docs.uipath.com/automation-cloud/automation-cloud/latest/api-guide/authenticating/) |
| 8 | **IXP** | IXP (Intelligent Document Processing / Generative Extraction) | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/ixp_` | REST `/api/v1` | `/api` | ⚠️ `apiBasePath` is `/api` but code probes `/api/v1/projects` | `/api/v1/projects` | HTTP 200 with JSON (non-HTML, no errorCode) | DU-scoped token + probe; service may be part of DU platform | No official public API docs found for standalone IXP endpoint |
| 9 | **REINFER** | Communications Mining (Reinfer) | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/reinfer_` | REST `/api/v1` | `/api/v1` | ✅ Pattern matches code usage | `/api/v1/datasets` | HTTP 200 with JSON (non-HTML, no errorCode) | IXP-scoped token + probe | No official standalone API docs; historically "Re:infer" acquisition |
| 10 | **AI** | AI Center | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/aifabric_` | REST versioned sub-paths (`/ai-deployer/v1/`) | `/api` | ⚠️ `apiBasePath` is `/api` but actual probe hits `/ai-deployer/v1/projects` — different sub-service path | `/ai-deployer/v1/projects?$top=1` | HTTP 200/401/403 | AI-scoped token acquisition + deployer probe | UiPath AI Center exists but public API docs for `aifabric_` cloud endpoint pattern are limited |
| 11 | **INTEGRATIONSERVICE** | Integration Service | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/integrationservice_` | REST `/api` | `/api` | ⚠️ Endpoint slug and path plausible but not officially documented | `/api/Connections?$top=1` | HTTP 200/401/403 | HTTP probe with redirect handling | No official public API reference for cloud endpoint pattern |
| 12 | **AUTOMATIONOPS** | Automation Ops (Governance) | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/automationops_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible but not officially documented | `/api/v1/policies?$top=1` | HTTP 200/401/403 | PM-scoped token + HTTP probe | No official public API reference found |
| 13 | **AUTOMATIONSTORE** | Automation Store (Marketplace) | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/automationstore_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible but not officially documented | `/api/v1/` | HTTP 200/3xx | HTTP probe | No official public API reference found |
| 14 | **APPS** | UiPath Apps | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/apps_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible but not officially documented | `/api/v1/apps?$top=1` | HTTP 200/401/403 | HTTP probe | No official public API reference found |
| 15 | **ASSISTANT** | UiPath Assistant (Cloud) | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/assistant_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible but not officially documented | `/api/v1/` | HTTP 200/3xx | HTTP probe | No official public API reference found; Assistant is primarily a desktop client |
| 16 | **AGENTS** | Agent Studio / Agent Builder | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/agentstudio_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible; code also probes Orchestrator `AgentDefinitions` OData | `/api/v1/agents?$top=1` | HTTP 200 with JSON | HTTP probe; fallback to Orchestrator `Assets` prefix match (very weak) | No official public API reference found; Agent Builder is new/evolving |
| 17 | **AUTOPILOT** | Autopilot | **No** — unconfirmed | `https://cloud.uipath.com/{org}/{tenant}/autopilot_` | REST `/api/v1` | `/api/v1` | ⚠️ Endpoint pattern plausible but not officially documented | `/api/v1/agents?$top=1` | HTTP 200 | HTTP probe | No official public API reference found; Autopilot is a feature, not a standalone service |

### Documented Scopes per Service

| # | Service ID | Documented Scopes | Scope Source |
|---|-----------|-------------------|-------------|
| 1 | **OR** | `OR.Default`, `OR.Administration`, `OR.Execution`, `OR.Queues`, `OR.Queues.Read`, `OR.Queues.Write`, `OR.Processes`, `OR.Folders`, `OR.Folders.Read`, `OR.Jobs`, `OR.Jobs.Read`, `OR.Jobs.Write`, `OR.Triggers`, `OR.Triggers.Read`, `OR.Triggers.Write`, `OR.Robots`, `OR.Robots.Read`, `OR.Machines`, `OR.Assets`, `OR.Assets.Read`, `OR.Assets.Write`, `OR.TestSets`, `OR.TestSets.Read`, `OR.TestSets.Write`, `OR.TestSetExecutions`, `OR.TestSetExecutions.Read`, `OR.TestSetExecutions.Write`, `OR.TestDataQueues`, `OR.TestDataQueues.Read`, `OR.Tasks`, `OR.Tasks.Read`, `OR.Tasks.Write` | [UiPath Orchestrator API Guide — scopes](https://docs.uipath.com/orchestrator/automation-cloud/latest/api-guide/); current `service-endpoints.json` matches |
| 2 | **TM** | `TM.TestCases`, `TM.TestCases.Read`, `TM.TestCases.Write`, `TM.TestSets`, `TM.TestSets.Read`, `TM.TestSets.Write`, `TM.TestExecutions`, `TM.TestExecutions.Read`, `TM.TestExecutions.Write`, `TM.Requirements`, `TM.Requirements.Read`, `TM.Requirements.Write`, `TM.Projects`, `TM.Projects.Read`, `TM.Projects.Write`, `TM.Users.Read` | [UiPath Test Manager API Guide](https://docs.uipath.com/test-suite/automation-cloud/latest/api-guide/); current `service-endpoints.json` matches |
| 3 | **DU** | `Du.Classification.Api`, `Du.DataDeletion.Api`, `Du.Digitization.Api`, `Du.DocumentManager.Document`, `Du.Extraction.Api`, `Du.Validation.Api` | [UiPath Document Understanding API](https://docs.uipath.com/document-understanding/automation-cloud/latest/api-guide/); current `service-endpoints.json` matches |
| 4 | **DF** | `DataFabric.Schema.Read`, `DataFabric.Data.Read`, `DataFabric.Data.Write` | [UiPath Data Service API](https://docs.uipath.com/data-service/automation-cloud/latest/api-guide/); current `service-endpoints.json` matches |
| 5 | **PIMS** | `PIMS.Default`, `PIMS.Read`, `PIMS.Write`, `PIMS.Process`, `PIMS.Process.Read`, `PIMS.Process.Write`, `PIMS.Execution`, `PIMS.Execution.Read` | [UiPath Maestro docs](https://docs.uipath.com/maestro/automation-cloud/latest/); current `service-endpoints.json` matches |
| 6 | **HUB** | None in `service-endpoints.json` (empty array). Automation Hub uses a separate dedicated OAuth token, not organization-level scopes. | [Automation Hub API Guide](https://docs.uipath.com/automation-hub/automation-cloud/latest/api-guide/); separate auth flow — no scopes needed in org token |
| 7 | **IDENTITY** | `PM.Security`, `PM.AuthSetting`, `PM.OAuthApp`, `PM.RobotAccount`, `PM.RobotAccount.Read`, `PM.RobotAccount.Write` | [UiPath Identity docs](https://docs.uipath.com/automation-cloud/automation-cloud/latest/api-guide/authenticating/); current `service-endpoints.json` matches |
| 8 | **IXP** | `Ixp.ApiAccess` | Not publicly documented; scope name discovered operationally |
| 9 | **REINFER** | `Ixp.ApiAccess` (same as IXP — shared platform scope) | Not publicly documented; scope name discovered operationally |
| 10 | **AI** | `AI.Deployer.Read`, `AI.Deployer.Write`, `AI.Trainer.Read`, `AI.Trainer.Write`, `AI.Helper.Read` | Not publicly documented for cloud endpoint; scope names discovered operationally |
| 11 | **INTEGRATIONSERVICE** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 12 | **AUTOMATIONOPS** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 13 | **AUTOMATIONSTORE** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 14 | **APPS** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 15 | **ASSISTANT** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 16 | **AGENTS** | None (empty array in `service-endpoints.json`) | Not publicly documented |
| 17 | **AUTOPILOT** | None (empty array in `service-endpoints.json`) | Not publicly documented |

### Probe Audit — Current Logic vs. Correct Behavior

This table audits every service's current probe implementation in `probeAllServices()` (server/uipath-integration.ts lines 1349–1810) against the matrix above. It documents whether the current probe hits the correct endpoint, uses the correct auth model, interprets responses correctly, and flags mismatches.

| # | Service ID | Current Probe URL Used | Current Auth Model | Current Response Interpretation | Correct per Matrix? | Mismatches / Issues |
|---|-----------|----------------------|-------------------|-------------------------------|---------------------|---------------------|
| 1 | **OR** | `{orchBase}/odata/Folders?$top=1` | Bearer org token via `getHeaders()` | `res.ok` → orchestrator available | ✅ Correct | None. Probe URL, auth, and interpretation all match official docs. |
| 2 | **OR** (Action Center sub-probe) | `{orchBase}/odata/TaskCatalogs?$top=1` | Bearer org token | Complex: checks for HTML, JSON error codes, "not onboarded" text; 401/403 → available(limited) | ⚠️ Partially correct | **Issue**: 401/403 treated as "available" (line 1452) — should be "exists but auth insufficient." The not-onboarded detection is correct and maps to "Not Provisioned" in V2. |
| 3 | **TM** | No direct HTTP probe — uses `tryAcquireResourceToken("TM")` | Resource token acquisition | `tmResult.value.ok` → TM available | ✅ Correct | Token acquisition is the right probe for TM. If token fails, TM is unavailable (auth/scope or not provisioned). |
| 4 | **DU** | `{duServiceUrl}/api/framework/projects?api-version=1` | DU resource token via `getDuToken()` + folder header | `duRes.ok` → DU available; `403` → limited | ✅ Correct | Probe URL matches official docs. Auth model correct. 403 handling could be more specific (auth/scope vs. not provisioned). |
| 5 | **DU** (Gen Extraction sub-probe via IXP) | `{ixpServiceUrl}/api/v1/projects` | DU token (reused from DU probe) | Complex: checks non-HTML, valid JSON, no errorCode → genExtraction available | ⚠️ Issue | **Mismatch**: Uses DU token to probe IXP endpoint — works operationally but conflates DU and IXP auth. In V2, IXP should have its own probe config with `probeAuthModel: "bearer-resource-token"` and `probeResourceType: "IXP"`. |
| 6 | **REINFER** (Communications Mining) | `{reinferUrl}/api/v1/datasets` | IXP resource token via `getIxpToken()` | Non-HTML, valid JSON, no errorCode → comms mining available | ✅ Correct | Probe URL and auth are consistent. Reinfer uses IXP-scoped token which is correct (shared platform). |
| 7 | **AI** | `{aiServiceUrl}/ai-deployer/v1/projects?$top=1` | AI resource token via `getAiToken()` | `isServiceReachable(aiProbe)` (200/401/403/3xx → reachable) | ⚠️ Issue | **Mismatch**: `apiBasePath` in JSON is `/api` but actual probe path is `/ai-deployer/v1/projects` — this is a sub-service path, not under `/api`. V2 should set `apiBasePath: ""` or use `versioningModel: "sub-service-path"`. Auth model is correct. |
| 8 | **DF** | `{dfServiceUrl}/api/EntityService/Entity` | DF resource token (tried first), then org token for probe | `ok` or `401` → available; fallback to Swagger check | ✅ Correct | Probe URL matches official docs. Auth model (resource token first, then bearer) is correct. Swagger fallback is a reasonable secondary check. |
| 9 | **PIMS** (Maestro) | `{pimsUrl}/api/v1/` | Bearer org token | `isServiceReachable(maestroProbe)` OR `pimsResult.ok` (PIMS token) | ⚠️ Minor issue | **Mismatch**: `apiBasePath` in JSON is `/api` but probe hits `/api/v1/`. Dual-path probe (HTTP + token) is reasonable but redundant. V2 should standardize. |
| 10 | **IDENTITY** (PM) | No direct HTTP probe — uses `tryAcquireResourceToken("PM")` | Resource token acquisition | `pmResult.value.ok` → PM available | ✅ Correct | Token acquisition is appropriate for Identity/PM service. |
| 11 | **INTEGRATIONSERVICE** | `{isUrl}/api/Connections?$top=1` with `redirect: "manual"` | Bearer org token | `isServiceReachable()` (200/401/403/3xx) | ⚠️ Unverifiable | **Issue**: Endpoint pattern not officially documented. Probe path is plausible but cannot be verified against docs. Response interpretation assumes standard HTTP semantics which is reasonable. |
| 12 | **HUB** | `{hubUrl}/api/v1/ideas?$top=1` with `redirect: "manual"` | Bearer org token (NOT Automation Hub's separate OAuth) | `isServiceReachable()` | ⚠️ Issue | **Mismatch**: Automation Hub requires its own OAuth token (separate from org token). Probing with org token will likely get 401 which `isServiceReachable()` treats as "reachable" — this is coincidentally correct (service exists) but for the wrong reason. V2 should use `probeAuthModel: "separate-oauth"`. |
| 13 | **AUTOMATIONOPS** | `{aopsUrl}/api/v1/policies?$top=1` with `redirect: "manual"` | PM-scoped token via `getPmToken()` | `isServiceReachable()` | ⚠️ Partially correct | Auth model uses PM token which is plausible (governance is part of platform management). Endpoint not officially documented. |
| 14 | **AUTOMATIONSTORE** | `{astoreUrl}/api/v1/` with `redirect: "manual"` | Bearer org token | `isServiceReachable()` | ⚠️ Unverifiable | Endpoint not officially documented. Generic root path probe is weak — may get false positive from a redirect or generic landing page. |
| 15 | **APPS** | `{appsUrl}/api/v1/apps?$top=1` with `redirect: "manual"` | Bearer org token | `isServiceReachable()` | ⚠️ Unverifiable | Endpoint not officially documented. Probe path is specific which is good, but auth model may be wrong. |
| 16 | **ASSISTANT** | `{assistantUrl}/api/v1/` with `redirect: "manual"` | Bearer org token | `isServiceReachable()` | ⚠️ Unverifiable | Endpoint not officially documented. Generic root path probe is weak. Assistant is primarily desktop — cloud API may not exist in the expected form. |
| 17 | **AGENTS** | Three endpoints tried: `{agentsServiceUrl}/api/v1/agents?$top=1`, `{autopilotServiceUrl}/api/v1/agents?$top=1`, `{orchBase}/odata/AgentDefinitions?$top=1` | Bearer org token for all three | First success → agents available; fallback to `Assets?$filter=startswith(Name,'Agent_')` | ⚠️ Issue | **Multi-endpoint shotgun approach**: tries 3 different URLs with the same token. If any returns 200, agents are "available." This is operationally pragmatic but not principled — it conflates Agent Studio, Autopilot, and Orchestrator Agent support. V2 should have separate probe configs for AGENTS and remove AUTOPILOT as a standalone entry. **Asset prefix fallback** (line 1669) is very weak evidence — an asset named "Agent_Config" doesn't mean Agents are available. V2 should remove this fallback. |
| 18 | **AUTOPILOT** | Same as AGENTS (probed together, line 1649) | Bearer org token | Part of agents multi-probe | ⚠️ Issue | Not a standalone service — should be merged into AGENTS per Phase 5 recommendation. |

#### Key Probe Audit Findings

1. **apiBasePath inconsistencies**: AI (`/api` vs `/ai-deployer/v1/`), PIMS (`/api` vs `/api/v1/`), IXP (`/api` vs `/api/v1/`). V2 schema must align `apiBasePath` with actual probe paths or use `probePath` as the authoritative path.
2. **Auth model mismatches**: HUB probed with org token instead of its separate OAuth; IXP generative extraction probed with DU token instead of IXP token. V2 `probeAuthModel` and `probeResourceType` fields fix this.
3. **Weak detection**: AGENTS asset prefix fallback and generic root path probes for AUTOMATIONSTORE/ASSISTANT provide low-confidence evidence. V2 should flag these with appropriate `notProvisionedDetectors` or skip them.
4. **Response interpretation gaps**: Most services use `isServiceReachable()` which treats 401/403 as "reachable" — this conflates "service exists" with "service is usable." V2's explicit `probeSuccessCriteria.acceptableStatuses` and per-service `notProvisionedDetectors` fix this.

### Summary of Confirmation Status

**Officially Confirmed (7 services)**:
1. **OR** — Orchestrator
2. **TM** — Test Manager
3. **DU** — Document Understanding
4. **DF** — Data Service
5. **PIMS** — Maestro
6. **HUB** — Automation Hub
7. **IDENTITY** — Identity Server

**Unconfirmed (10 services)** — operationally known but no official public API docs for the cloud endpoint pattern:
1. **IXP** — may be part of DU platform, not a separate standalone service
2. **REINFER** — historically Re:infer; may be subsumed into Communications Mining under IXP
3. **AI** — AI Center/AI Fabric; cloud endpoint pattern `aifabric_` is operationally known
4. **INTEGRATIONSERVICE** — plausible but undocumented
5. **AUTOMATIONOPS** — plausible but undocumented
6. **AUTOMATIONSTORE** — plausible but undocumented
7. **APPS** — plausible but undocumented
8. **ASSISTANT** — plausible but undocumented; primarily a desktop client
9. **AGENTS** — Agent Builder/Studio; very new, API evolving
10. **AUTOPILOT** — feature-level, not a standalone service API

---

## Phase 2 — Status Model Redesign

### Current Model (3-axis — being replaced)

The current model uses three independent axes that create a confusing cross-product:
- `status`: `"available" | "limited" | "unavailable" | "unknown"`
- `confidence`: `"official" | "inferred" | "deprecated" | "unknown"`
- `reachable`: `"reachable" | "limited" | "unreachable" | "unknown"`

This creates states like "available + inferred + limited" which is meaningless to users. The UI shows "(inferred)" labels that convey no actionable information.

### New 5-State User-Facing Model

| State | Label | Description | Icon/Color Suggestion |
|-------|-------|-------------|----------------------|
| **Available** | Available | Official endpoint known, probe succeeded, sufficient auth/scope | ✅ Green |
| **Unavailable (Endpoint Failure)** | Endpoint Failure | Official endpoint known, probe failed (wrong path, broken, deprecated, unreachable) | ❌ Red |
| **Unavailable (Not Provisioned)** | Not Provisioned | Official endpoint known, probe confirms the tenant does not have the service enabled/provisioned/licensed | ⛔ Gray/Red |
| **Unavailable (Auth/Scope)** | Insufficient Auth | Official endpoint known, service exists but auth/scope is insufficient | 🔒 Orange |
| **Unknown** | Unknown | Official endpoint not yet confirmed from docs, probe not yet run, or evidence incomplete | ❓ Gray |

### Validation of the 5-State Model

The proposed model is **validated as the best user-facing model** with the following strict rules:

**Hard rule**: If `official_endpoint_known === false`, the user-facing status is always **Unknown**, regardless of probe results. Operational probe success for unconfirmed endpoints is recorded in internal evidence fields (for diagnostics and debugging) but never surfaces as "Available" to the user. This prevents false confidence in undocumented endpoints.

**Rationale**: A service with no official docs could be responding today but break tomorrow with no migration path. Presenting it as "Available" would be misleading. The UI must show "Unknown" with a tooltip explaining "No official endpoint documentation exists; operational probe data available in diagnostics."

### State Derivation Logic

The 5-state UI status is derived from internal evidence fields:

```
if (probe_not_run OR evidence_incomplete):
    → Unknown

if (NOT official_endpoint_known):
    → Unknown
    (regardless of probe result; probe evidence stored internally only)

if (official_endpoint_known):
    if (service_not_onboarded_response):
        → Unavailable (Not Provisioned)
    elif (probe_http_status == 200 AND response_valid):
        → Available
    elif (probe_http_status == 401 OR probe_http_status == 403):
        if (token_acquisition_failed OR scope_insufficient):
            → Unavailable (Auth/Scope)
        else:
            → Unavailable (Auth/Scope)
    elif (probe_http_status == 404 OR probe_http_status >= 500):
        → Unavailable (Endpoint Failure)
    elif (probe_returned_html OR probe_timeout):
        → Unavailable (Endpoint Failure)
    else:
        → Unknown
```

### Mapping from Current 3-Axis to New 5-State

| Current `status` | Current `confidence` | Current `reachable` | → New State |
|---|---|---|---|
| available | official | reachable | Available |
| available | official | limited | Unavailable (Auth/Scope) |
| available | inferred | reachable | **Unknown** (no official docs → always Unknown) |
| available | inferred | limited | **Unknown** (no official docs → always Unknown) |
| limited | official | limited | Unavailable (Auth/Scope) |
| limited | inferred | * | **Unknown** (no official docs → always Unknown) |
| unavailable | official | unreachable | Unavailable (Endpoint Failure) |
| unavailable | official | reachable | Unavailable (Not Provisioned) — service reachable but not onboarded |
| unavailable | inferred | * | **Unknown** (no official docs → always Unknown) |
| unknown | * | unknown | Unknown |
| * | deprecated | * | Unavailable (Endpoint Failure) with deprecation note |

### Rich Internal Evidence Fields

Even though the UI shows only 5 states, the internal schema preserves detailed evidence:

```typescript
type ProbeEvidence = {
  probeTimestamp: string;           // ISO 8601 when probe was last run
  probeHttpStatus: number | null;   // Raw HTTP status code from probe
  probeLatencyMs: number | null;    // Probe round-trip time
  probeResponseSummary: string;     // First 200 chars of response body (redacted if sensitive)
  probeError: string | null;        // Error message if probe failed (timeout, DNS, etc.)
  probeEndpointUsed: string;        // Which URL template was actually tried (primary vs alternate)
  probeMethod: string;              // HTTP method used (GET, HEAD, etc.)
};

type AuthEvidence = {
  tokenAcquisitionAttempted: boolean;
  tokenAcquisitionSucceeded: boolean;
  tokenResourceType: string;         // e.g. "TM", "DU", "IXP"
  scopesRequested: string[];
  scopesGranted: string[];
  scopeFailureReason: string | null;
};

type DocumentationStatus = {
  officialEndpointKnown: boolean;
  confirmationSource: string | null;  // URL to official docs, or null
  confirmationDate: string | null;    // When it was last verified against docs
  notes: string | null;               // Any caveats or special considerations
};
```

---

## Phase 3 — MetadataService Schema Design

### Updated `service-endpoints.json` Schema

Each service entry in `service-endpoints.json` should contain:

```typescript
const serviceEndpointEntrySchemaV2 = z.object({
  // --- Endpoint Configuration (static, rarely changes) ---
  urlTemplate: z.string(),
  alternateUrlTemplates: z.array(z.string()).optional(),
  apiBasePath: z.string(),
  versioningModel: z.enum(["odata", "rest-path", "query-param", "sub-service-path"]),
  scopes: z.array(z.string()),
  parentService: z.string().nullable().optional(),  // For sub-capabilities: e.g. IXP.parentService = "DU"

  // --- Documentation Status (manually maintained, updated during audits) ---
  officialEndpointKnown: z.boolean(),
  documentationSource: z.string().nullable(),   // URL to official docs or null
  documentationVerifiedAt: z.string().datetime().nullable(),
  documentationNotes: z.string().nullable(),

  // --- Probe Configuration (static, defines how to probe) ---
  probePath: z.string(),                        // e.g. "/odata/Folders?$top=1"
  probeMethod: z.enum(["GET", "HEAD"]).default("GET"),
  probeAuthModel: z.enum([
    "bearer-org-token",       // Use main org-level bearer token
    "bearer-resource-token",  // Acquire resource-specific token first (e.g. TM, DU)
    "separate-oauth",         // Requires separate OAuth flow (e.g. Automation Hub)
    "none",                   // No auth needed for probe
  ]),
  probeResourceType: z.string().nullable(),      // For resource-token auth: which resource to acquire
  probeSuccessCriteria: z.object({
    acceptableStatuses: z.array(z.number()),      // e.g. [200, 401, 403]
    rejectHtmlResponse: z.boolean().default(true),
    rejectErrorCodes: z.boolean().default(true),   // Reject if response contains errorCode/odata.error
  }),
  notProvisionedDetectors: z.array(z.discriminatedUnion("type", [
    z.object({ type: z.literal("http_status"), status: z.number() }),
    z.object({ type: z.literal("response_contains"), pattern: z.string() }),
  ])).optional(),                                  // Per-service rules for detecting "not provisioned on tenant"

  // --- Probe Results (dynamic, updated after each probe run) ---
  lastProbeResult: z.object({
    timestamp: z.string().datetime(),
    httpStatus: z.number().nullable(),
    latencyMs: z.number().nullable(),
    responseSummary: z.string(),
    error: z.string().nullable(),
    endpointUsed: z.string(),
    method: z.string(),
  }).nullable(),

  // --- Auth Evidence (dynamic, updated after each probe) ---
  lastAuthResult: z.object({
    tokenAcquisitionAttempted: z.boolean(),
    tokenAcquisitionSucceeded: z.boolean(),
    tokenResourceType: z.string(),
    scopesRequested: z.array(z.string()),
    scopesGranted: z.array(z.string()),
    scopeFailureReason: z.string().nullable(),
  }).nullable(),

  // --- Derived Status (computed, not stored — derived at read time) ---
  // The 5-state status is NOT stored in the JSON. It is derived by
  // MetadataService from the evidence fields above. This prevents
  // stale status from persisting when evidence changes.

  // --- Legacy fields (to be removed after migration) ---
  // confidence: REMOVED — replaced by officialEndpointKnown
  // reachabilityStatus: REMOVED — replaced by lastProbeResult + derivation
  // lastVerifiedAt: REMOVED — split into documentationVerifiedAt + lastProbeResult.timestamp
  // verificationSource: REMOVED — replaced by documentationSource
});
```

### Status Derivation in MetadataService

MetadataService becomes the single source of truth. It exposes a method that uses per-service classification rules from the V2 schema:

```typescript
getServiceStatus(resourceType: ServiceResourceType): UserFacingStatus {
  const entry = this.serviceEndpoints.endpoints[resourceType];
  if (!entry) return "unknown";

  // === HARD GATE: unconfirmed endpoints always → Unknown ===
  // Probe evidence is still recorded internally for diagnostics,
  // but the user-facing status must be Unknown if we don't have
  // official documentation for the endpoint pattern.
  if (!entry.officialEndpointKnown) return "unknown";

  const probe = entry.lastProbeResult;
  const auth = entry.lastAuthResult;
  const criteria = entry.probeSuccessCriteria;

  // No probe run yet
  if (!probe) return "unknown";

  // Probe errored (timeout, DNS failure, etc.)
  if (probe.error) return "unavailable_endpoint_failure";

  // Check HTTP status
  if (probe.httpStatus === null) return "unknown";

  // --- Not-provisioned detection (per-service rules) ---
  // Check if the response matches known "not provisioned" patterns.
  // These are service-specific: some services return 200 with an error body
  // (e.g., "not onboarded"), others return 404 when not provisioned vs
  // when the endpoint itself is wrong.
  if (entry.notProvisionedDetectors) {
    for (const detector of entry.notProvisionedDetectors) {
      if (detector.type === "http_status" && probe.httpStatus === detector.status) {
        return "unavailable_not_provisioned";
      }
      if (detector.type === "response_contains" && probe.responseSummary.includes(detector.pattern)) {
        return "unavailable_not_provisioned";
      }
    }
  }

  // --- Endpoint failure (hard failures) ---
  if (probe.httpStatus >= 500)
    return "unavailable_endpoint_failure";

  // 404 interpretation depends on service configuration:
  // Some services return 404 when not provisioned (→ not_provisioned),
  // others when the endpoint pattern is wrong (→ endpoint_failure).
  // Default to endpoint_failure unless a notProvisionedDetector matched above.
  if (probe.httpStatus === 404)
    return "unavailable_endpoint_failure";

  // --- Auth/scope classification ---
  // 401/403 handling is service-specific via probeSuccessCriteria.
  if (probe.httpStatus === 401 || probe.httpStatus === 403) {
    // If the service's success criteria include 401/403 as "acceptable"
    // (meaning "service exists, reachable, just need better auth"),
    // treat as available with auth limitation.
    if (criteria.acceptableStatuses.includes(probe.httpStatus)) {
      // Service exists and is provisioned, but auth is insufficient.
      // This is "available" from a provisioning perspective but
      // "auth/scope" issue from a usability perspective.
      if (auth && !auth.tokenAcquisitionSucceeded)
        return "unavailable_auth_scope";
      // Token acquired but scopes insufficient
      return "unavailable_auth_scope";
    }
    // If 401/403 is NOT in acceptable statuses, it means
    // we can't determine if the service exists at all
    return "unknown";
  }

  // --- Success ---
  if (probe.httpStatus >= 200 && probe.httpStatus < 300) {
    // Additional check: reject HTML responses and error codes
    if (criteria.rejectHtmlResponse && probe.responseSummary.startsWith("<")) {
      return "unavailable_endpoint_failure";
    }
    if (criteria.rejectErrorCodes && (
      probe.responseSummary.includes('"errorCode"') ||
      probe.responseSummary.includes('"odata.error"') ||
      probe.responseSummary.includes('"not onboarded"')
    )) {
      return "unavailable_not_provisioned";
    }
    return "available";
  }

  // --- Redirect — treat as available (service exists) ---
  if (probe.httpStatus >= 300 && probe.httpStatus < 400)
    return "available";

  return "unknown";
}
```

### Not-Provisioned Detection Rules (Per-Service)

Different services signal "not provisioned on this tenant" in different ways. The V2 schema includes per-service `notProvisionedDetectors`:

| Service | Not-Provisioned Signal | Detector Config |
|---------|----------------------|-----------------|
| OR (Action Center sub-probe) | HTTP 200 with `"not onboarded"` in response body | `{ type: "response_contains", pattern: "not onboarded" }` |
| TM | Token acquisition fails with specific error | Handled via `lastAuthResult.scopeFailureReason` |
| DU | DU token acquired but probe returns 404 | `{ type: "http_status", status: 404 }` |
| IXP | HTTP 200 but response is HTML (not JSON) | `{ type: "response_contains", pattern: "<html" }` |
| REINFER | HTTP 200 but response contains errorCode | `{ type: "response_contains", pattern: "errorCode" }` |
| HUB | Separate OAuth token required; 401 without token = exists | Use `acceptableStatuses: [401, 403]` |
| Unconfirmed services | 404 likely means not provisioned (not wrong endpoint) | `{ type: "http_status", status: 404 }` — but with low confidence |

This ensures all 5 states are reachable:
- **Available**: probe returns 200 with valid JSON
- **Unavailable (Endpoint Failure)**: probe returns 500+, timeout, or DNS failure
- **Unavailable (Not Provisioned)**: probe returns 200 with "not onboarded" body, or 404 with not-provisioned detector
- **Unavailable (Auth/Scope)**: probe returns 401/403 and token acquisition failed or scopes insufficient
- **Unknown**: no probe run, ambiguous response, or `officialEndpointKnown === false`

### How the UI Consumes Status

The UI calls a single API endpoint that returns per-service status:

```typescript
type ServiceStatusResponse = {
  serviceId: string;
  displayName: string;
  userFacingStatus: "available" | "unavailable_endpoint_failure" | "unavailable_not_provisioned" | "unavailable_auth_scope" | "unknown";
  officialEndpointKnown: boolean;  // For tooltip/detail annotation
  lastProbeTimestamp: string | null;
  evidence: string;                 // Human-readable summary for tooltip
};
```

No more "(inferred)" labels. Instead:
- If `officialEndpointKnown === false`, status is always "unknown" — the tooltip shows "No official endpoint documentation exists for this service. Operational probe data is available in diagnostics but cannot confirm availability."
- If `officialEndpointKnown === true` and status is "available", the tooltip shows the probe evidence summary (e.g., "Probe succeeded: HTTP 200 from /odata/Folders at 2026-03-21T06:27:36Z")
- If status is any "unavailable" variant, the tooltip explains why (e.g., "Service not provisioned on this tenant" or "Auth scope insufficient: missing OR.Queues scope")

### Single Source of Truth Guarantee

MetadataService owns all service endpoint data. The following rules apply:
1. No other module may define service URL patterns (except `getHardcodedServiceUrl()` as emergency fallback, which is clearly documented as such).
2. All probe results are persisted to `service-endpoints.json` via MetadataService.
3. All status queries go through MetadataService's `getServiceStatus()` method.
4. The hardcoded fallback map in `getHardcodedServiceUrl()` must be kept in sync with `service-endpoints.json` entries but is only used when JSON loading fails.

---

## Phase 4 — Migration / Impact Analysis

### Impacted Files and Modules

| File | Impact | Description |
|------|--------|-------------|
| `catalog/service-endpoints.json` | **Major** | Schema changes: add new fields, remove `confidence`/`reachabilityStatus`/`verificationSource`/`lastVerifiedAt`, add probe config + evidence fields |
| `server/catalog/metadata-schemas.ts` | **Major** | Rewrite `serviceEndpointEntrySchema` to V2 schema; add `UserFacingStatus` type; update `ServiceResourceType` |
| `server/catalog/metadata-service.ts` | **Major** | Add `getServiceStatus()` derivation method; remove `getServiceConfidence()`/`getServiceReachability()`; add probe result persistence; update `updateServiceReachability()` → `recordProbeResult()` |
| `server/catalog/metadata-refresher.ts` | **Major** | Rewrite `refreshIntegration()` to use new probe config from schema (probe path, method, auth model, success criteria); record rich evidence |
| `server/uipath-integration.ts` | **Major** | Rewrite `probeAllServices()` to use MetadataService probe config; rewrite `probeServiceAvailability()` to use new status model; update `ServiceStatusDetail` type; remove `confidence`/`reachable` axes from `ServiceAvailabilityMap.serviceDetails` |
| `server/uipath-auth.ts` | **Minor** | No schema changes needed; `getTestManagerBaseUrl()` etc. continue to call `metadataService.getServiceUrl()` |
| `server/automation-hub.ts` | **Minor** | No changes needed; uses `metadataService.getServiceUrl("HUB", ...)` which remains stable |
| `server/orchestrator-client.ts` | **Minor** | No direct dependency on service status model |
| `server/uipath-routes.ts` | **Moderate** | Update diagnostics endpoint to return new status model instead of old `serviceDetails` format |
| `server/orchestrator/artifact-provisioner.ts` | **Moderate** | Update `SERVICE_LABELS` usage and status checks from old `detail.status`/`detail.confidence` to new `userFacingStatus` |
| `server/replit_integrations/chat/routes.ts` | **Minor** | Update agent confidence check from `agentDetail?.confidence === "inferred"` to use new evidence model |
| `client/src/components/integration-status-bar.tsx` | **Major** | Remove `confidence`/`reachable` axes from `ServiceStatusDetail`; update rendering to use 5-state model; remove "(inferred)" label logic; add tooltip with evidence |

### Impacted Flows

| Flow | How It's Affected |
|------|-------------------|
| **Connection Test** | Uses `probeAllServices()` → must emit new evidence format |
| **Diagnostics Deep Probe** | Reads `serviceDetails` from `probeServiceAvailability()` → new response shape |
| **Capability Discovery** | `getPlatformCapabilities()` reads probe flags → unchanged (flags remain boolean), but evidence changes |
| **TO-BE/PDD/SDD Platform Context** | Reads `PlatformCapabilityProfile` → unchanged interface, but descriptions may reference new status |
| **Artifact Generation Decisions** | Reads `ServiceAvailabilityMap` → minor changes to `serviceDetails` sub-type |
| **Deployment/Provisioning** | Reads `serviceDetails` status → update from `detail.status === "limited"` etc. to new states |
| **UI Status Display** | Complete rewrite of status rendering in `integration-status-bar.tsx` |

### Migration Sequence

1. **Step 1 — Schema**: Update `metadata-schemas.ts` with V2 schema. Keep V1 schema temporarily for migration validation.
2. **Step 2 — Data Migration**: Write a one-time migration in `metadata-refresher.ts` that reads V1 `service-endpoints.json` and writes V2 format, mapping old fields to new fields.
3. **Step 3 — MetadataService**: Update `metadata-service.ts` to use V2 schema, add `getServiceStatus()`, remove deprecated methods.
4. **Step 4 — Probe Logic**: Update `refreshIntegration()` in `metadata-refresher.ts` to use probe config from V2 entries.
5. **Step 5 — Integration Probe**: Update `probeAllServices()` and `probeServiceAvailability()` in `uipath-integration.ts`.
6. **Step 6 — Routes**: Update `uipath-routes.ts` diagnostics endpoint.
7. **Step 7 — UI**: Update `integration-status-bar.tsx` to render 5-state model.
8. **Step 8 — Consumers**: Update `artifact-provisioner.ts` and `chat/routes.ts`.
9. **Step 9 — Cleanup**: Remove V1 schema, remove deprecated methods, remove "(inferred)" logic.

### Regression Risks and Mitigation

| Risk | Mitigation |
|------|-----------|
| Breaking `service-endpoints.json` parsing during migration | Keep V1 parsing as fallback; auto-detect schema version via `snapshotVersion` |
| Probe results changing due to new success criteria | Run both old and new probe logic in parallel during migration; compare results |
| UI showing wrong status during transition | Deploy backend changes first; UI changes last; old UI can consume new format with adapter |
| Loss of probe history | V2 stores richer evidence; old reachability data is preserved in migration as initial probe result |
| `probeAllServices()` callers breaking | `ServiceAvailabilityMap` boolean flags remain unchanged; only `serviceDetails` sub-object changes |

### Acceptance Criteria for Migration

1. All 17 services have V2 entries in `service-endpoints.json` with correct probe config.
2. `getServiceStatus()` returns correct 5-state status for all services based on probe evidence.
3. No "(inferred)" labels appear in the UI.
4. UI shows 5-state status with appropriate icons/colors and informative tooltips.
5. `probeServiceAvailability()` returns `serviceDetails` with new `userFacingStatus` field.
6. All existing probe logic continues to detect the same services as before (no regressions).
7. Rich probe evidence is persisted and queryable via diagnostics endpoint.
8. `snapshotVersion` bumped to `"2.0.0"` to indicate schema migration.
9. `getHardcodedServiceUrl()` fallback map stays in sync with `service-endpoints.json`.
10. No parallel registries or hardcoded service roots exist outside MetadataService (except documented emergency fallback).

---

## Phase 5 — Service Mapping Recommendations

### Per-Service Recommendations

| # | Service ID | Recommendation | Rationale |
|---|-----------|---------------|-----------|
| 1 | **OR** | **Keep as-is** | Correct, well-documented, well-scoped |
| 2 | **TM** | **Keep as-is** | Correct; alternate URL templates are accurate historical variants |
| 3 | **DU** | **Keep as-is** | Correct; alternate `documentunderstanding_` is accurate |
| 4 | **DF** | **Keep as-is** | Correct and well-scoped |
| 5 | **PIMS** | **Keep as-is** (minor fix: align `apiBasePath` to `/api/v1` since that's what probe uses) | Functionally correct; minor path inconsistency to fix |
| 6 | **HUB** | **Keep as-is** | Correct |
| 7 | **IDENTITY** | **Keep as-is** | Correct |
| 8 | **IXP** | **Keep as `IXP`** with mandatory annotation as DU sub-capability | IXP overlaps with DU: it is probed using DU-scoped tokens and represents "generative extraction" within the Document Understanding platform. It is NOT a standalone service. **Decision**: Keep the service ID as `IXP` (changing it would break too many references), but set `parentService: "DU"` in V2 schema and annotate documentation as "IXP Generative Extraction — sub-capability of Document Understanding." |
| 9 | **REINFER** | **Rename** → `COMMS_MINING` | "Reinfer" is the legacy acquisition name. UiPath has rebranded this as "Communications Mining." The service ID should match current UiPath branding. The endpoint slug `reinfer_` in the URL is correct (UiPath hasn't changed the slug), but the service ID in our system should be `COMMS_MINING` for clarity. **Important**: IXP and REINFER currently share the same scope (`Ixp.ApiAccess`), confirming they are part of the same platform. Consider documenting both as sub-capabilities of a single "IXP Platform" with different API endpoints. |
| 10 | **AI** | **Keep as-is** (fix `apiBasePath`) | Service ID is clear. However, `apiBasePath` should be updated to reflect that the actual API paths are under `/ai-deployer/v1/` and `/ai-trainer/v1/`, not just `/api`. Consider changing `apiBasePath` to empty string and relying on `probePath` for the actual path. |
| 11 | **INTEGRATIONSERVICE** | **Rename** → `IS` | Current name is unnecessarily long. **Decision**: rename to `IS` (2 chars, consistent with OR/TM/DU/DF abbreviation style). Keep the endpoint slug `integrationservice_` unchanged. |
| 12 | **AUTOMATIONOPS** | **Keep as-is** | Name matches UiPath branding. Consider shortening to `AOPS` for convenience but not required. |
| 13 | **AUTOMATIONSTORE** | **Keep as-is** | Name matches UiPath branding. Consider shortening to `ASTORE` but not required. |
| 14 | **APPS** | **Keep as-is** | Clear and concise |
| 15 | **ASSISTANT** | **Keep as-is** but annotate | Assistant is primarily a desktop application. The cloud endpoint may only serve configuration/registration, not full API functionality. Annotate that probe results may be misleading — "reachable" doesn't mean "full API available." |
| 16 | **AGENTS** | **Keep as-is** but review slug | The endpoint slug `agentstudio_` may not be stable (Agent Builder/Studio is rapidly evolving). Monitor for endpoint changes. The code already probes multiple endpoints (`agentstudio_`, `autopilot_`, Orchestrator `AgentDefinitions`) which is appropriate for an evolving service. |
| 17 | **AUTOPILOT** | **Remove** or **merge into AGENTS** | Autopilot is not a standalone service — it's a feature within the Agent platform. The codebase already probes Autopilot as part of Agent discovery (lines 1637-1665 in `uipath-integration.ts`). The separate `AUTOPILOT` entry in `service-endpoints.json` creates confusion. **Recommendation**: Remove `AUTOPILOT` as a separate service entry. Track Autopilot capability as a boolean flag within the AGENTS service entry (similar to how `agentCapabilities.autonomous/conversational/coded` already works). |

### IXP / REINFER Deep Analysis

The IXP and REINFER entries deserve special attention:

**Current state**:
- `IXP` — service ID `IXP`, scope `Ixp.ApiAccess`, endpoint `ixp_`, probed for "generative extraction" via `/api/v1/projects`
- `REINFER` — service ID `REINFER`, scope `Ixp.ApiAccess` (SAME scope), endpoint `reinfer_`, probed for "communications mining" via `/api/v1/datasets`

**Analysis**:
- Both services use the same OAuth scope (`Ixp.ApiAccess`), confirming they are part of the same IXP platform.
- In UiPath's architecture, "IXP" is the platform that encompasses both Document Understanding AI capabilities (generative extraction) and Communications Mining (formerly Re:infer).
- The codebase correctly uses DU-scoped tokens for IXP generative extraction probes and IXP-scoped tokens for Communications Mining probes — but the token types are similar.

**Decision** (locked for implementation):
1. Rename `REINFER` → `COMMS_MINING` (matches UiPath's current branding). URL slug remains `reinfer_`.
2. Keep `IXP` as service ID, annotate as "IXP / Generative Extraction" — a sub-capability of DU platform. Set `parentService: "DU"` in V2 schema.
3. In V2 schema, add optional `parentService: z.string().nullable()` field. Set `IXP.parentService = "DU"` and `COMMS_MINING.parentService = "DU"` (both are part of the broader Document Understanding / IXP platform).
4. Do NOT create a single `IXP_PLATFORM` meta-entry — keep IXP and COMMS_MINING as separate entries with parentService references. This is simpler and avoids schema complexity.

---

## Report-Back Summary

### 1. Officially Confirmed vs Unconfirmed Services

**Officially confirmed (7/17)**:
- OR (Orchestrator), TM (Test Manager), DU (Document Understanding), DF (Data Service), PIMS (Maestro), HUB (Automation Hub), IDENTITY (Identity Server)

**Unconfirmed (10/17)**:
- IXP, REINFER, AI, INTEGRATIONSERVICE, AUTOMATIONOPS, AUTOMATIONSTORE, APPS, ASSISTANT, AGENTS, AUTOPILOT

### 2. Entries Needing Rename/Split/Remove

| Service | Action | New Name / Change |
|---------|--------|----------|
| REINFER | **Rename** | → `COMMS_MINING` (URL slug `reinfer_` unchanged) |
| IXP | **Annotate** | Keep as `IXP`, add `parentService: "DU"` |
| AUTOPILOT | **Remove** | Merge into AGENTS as capability flag |
| INTEGRATIONSERVICE | **Rename** | → `IS` (URL slug `integrationservice_` unchanged) |
| PIMS | **Fix** apiBasePath | `/api` → `/api/v1` |
| AI | **Fix** apiBasePath | `/api` → `""` (actual paths are sub-service specific) |

### 3. 5-State Model Validation

The proposed 5-state model **stands as the best user-facing model** with a strict enforcement rule:
- If `officialEndpointKnown === false`, the user-facing status is always **Unknown** — probe evidence is stored internally but never promotes an unconfirmed endpoint to "Available."
- No "(inferred available)" states survive. The word "inferred" does not appear in the UI.

The 5 states are:
1. **Available** — official endpoint known AND probe succeeded
2. **Unavailable (Endpoint Failure)** — official endpoint known, probe failed at network/HTTP level
3. **Unavailable (Not Provisioned)** — official endpoint known, service not enabled on tenant (detected via per-service notProvisionedDetectors)
4. **Unavailable (Auth/Scope)** — official endpoint known, auth or scope insufficient
5. **Unknown** — no official docs, no probe data, or insufficient evidence

### 4. Recommended Next Implementation Task

The next implementation task after this design document should be:

**"Implement V2 service-endpoints.json schema and MetadataService status derivation"**

Scope:
1. Implement V2 schema in `metadata-schemas.ts`
2. Write migration logic to convert V1 → V2 `service-endpoints.json`
3. Add `getServiceStatus()` derivation method to MetadataService
4. Update `refreshIntegration()` to use new probe config and record rich evidence
5. Bump `snapshotVersion` to `"2.0.0"`

This is the foundation task. All subsequent changes (probe logic rewrite, UI rewrite, consumer updates) depend on the V2 schema being in place.

After that:
- Task 2: Rewrite `probeAllServices()` to use MetadataService probe config and record evidence
- Task 3: Update UI to use 5-state model and remove "(inferred)" labels
- Task 4: Update consumers (artifact-provisioner, chat routes) and rename services (REINFER → COMMS_MINING, remove AUTOPILOT)
