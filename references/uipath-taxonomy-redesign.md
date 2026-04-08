# UiPath Taxonomy and Service Truthfulness Redesign

## Overview

This document provides comprehensive analysis and design for normalizing the UiPath integration taxonomy from a flat, conflated list of resources/services/capabilities/observations into a clean, hierarchical, truthful model. It complements the existing `references/uipath-endpoint-matrix.md` V2 design.

---

## 1. Impact Analysis

### 1.1 Current Taxonomy Impact Surface

The current service/capability taxonomy touches the following areas:

#### A. Connection Wizard (`client/src/pages/settings.tsx`)
- **4-step wizard**: Org/Tenant → Credentials → Scopes → Review & Connect
- `UIPATH_SCOPE_CATEGORIES` defines scope groups displayed as checkable categories (lines ~760–850)
- Scopes are organized by service (Orchestrator, Test Manager, Document Understanding, etc.) — this grouping is a **frontend-only taxonomy** that partially overlaps with MetadataService's `service-endpoints.json` but is maintained independently
- Auto-detect scopes (`/api/settings/uipath/auto-detect-scopes`) probes which scopes the External App actually has, but maps results back to the frontend-only categories

#### B. Settings / Integration Status UI (`client/src/pages/settings.tsx`, `client/src/components/integration-status-bar.tsx`)
- **IntegrationStatusBar** queries `/api/uipath/diagnostics` and displays `serviceDetails` — a `Record<string, ServiceStatusDetail>` with 18 entries (orchestrator, actionCenter, testManager, documentUnderstanding, generativeExtraction, communicationsMining, dataService, platformManagement, agents, maestro, integrationService, ixp, automationHub, automationOps, automationStore, apps, assistant, aiCenter)
- `SERVICE_LABELS` in `integration-status-bar.tsx` maps internal keys to display names — this is a **second frontend taxonomy**
- Each service shows a 4-state status (available/limited/unavailable/unknown) with confidence (official/inferred/deprecated/unknown) and reachability — this is the **old 3-axis model** that the endpoint-matrix V2 design replaces with a 5-state model
- `statusIcon()` renders colored dots/icons per status; no differentiation between "service" vs "capability" vs "observation"

#### C. Capability Discovery (`server/uipath-integration.ts::probeAllServices()`, lines 1351–1924)
- **Central probe function** that produces `UnifiedProbeResult` with boolean `flags` for 25+ capabilities
- Flags include true services (orchestrator, testManager), sub-capabilities (generativeExtraction, communicationsMining), Orchestrator features (environments, triggers, storageBuckets), and environment observations (attendedRobots, studioProjects, hasUnattendedSlots)
- All are stored as flat boolean flags — no hierarchy
- `probeServiceAvailability()` (lines 2563–2648) wraps probe results into `ServiceAvailabilityMap` with `serviceDetails` using `buildDetail()` helper — this is where the 3-axis model is assembled

#### D. PDD/SDD/TO-BE Platform Context (`server/uipath-integration.ts::getPlatformCapabilities()`, lines 1926–2160)
- Converts probe results into `PlatformCapabilityProfile` with human-readable descriptions
- `availableDescription` text block is injected into LLM prompts for document generation
- This function applies its **own taxonomy logic**: e.g., IXP + DU get combined description, agents get capability type strings, governance policies inline, attended/unattended robot landscape sections
- `confidenceNotes` section warns about inferred services — uses `svcConfidenceMap` to look up MetadataService confidence per flag
- This is a **third independent taxonomy mapping** (flag name → ServiceResourceType → confidence lookup)

#### E. Artifact Generation Decisions (`server/orchestrator/artifact-provisioner.ts`, `server/uipath-pipeline.ts`)
- `artifact-provisioner.ts` imports `probeServiceAvailability` and checks `ServiceAvailabilityMap` to decide what to provision
- At line 4115: `svcAvail = await probeServiceAvailability()` — uses boolean flags to gate provisioning of Action Center tasks, Test Manager test cases, Maestro processes, agents, etc.
- Pipeline generation in `uipath-pipeline.ts` consumes `getPlatformCapabilities()` to build prompt context

#### F. Deployment/Provisioning (`server/orchestrator/artifact-provisioner.ts`)
- Directly uses `ServiceAvailabilityMap` boolean flags to decide whether to create agent definitions, Maestro processes, test cases, etc.
- Service URL resolution goes through `metadataService.getServiceUrl()` — this is the **correct MetadataService path**
- Token acquisition uses `RESOURCE_TO_SERVICE_MAP` in `uipath-auth.ts` — another mapping layer

#### G. Diagnostics / Deep Probe (`server/uipath-routes.ts::"/api/uipath/diagnostics"`, lines 1344–1530+)
- Runs auth health check, folder access, package feed, machines, robots, Action Center, Test Manager, queues, AI Center as sequential checks
- Each check produces `{ name, status, detail, remediation }` — a **fourth ad-hoc taxonomy** of service health
- Does not reuse `probeAllServices()` — independently probes services using `orchestrator-client` functions

#### H. Status Summaries and Badges
- `probeAllServices()` produces `serviceStatusSummary` string (line 1878–1886) used in console logging
- `IntegrationStatusBar` shows counts: "X available · Y unavailable · Z limited · W unknown"
- No semantic grouping (services vs capabilities vs observations)

#### I. Chat Routes (`server/replit_integrations/chat/routes.ts`)
- Line 1034: `serviceAvailability = await probeServiceAvailability()` — uses service flags to condition chat behavior and context injection
- Passes service availability to LLM context for conversational AI features

#### J. Document Routes (`server/document-routes.ts`)
- Lines 258, 278: `getPlatformCapabilities()` called during PDD and SDD generation
- Platform profile injected into document generation prompts

### 1.2 Source-of-Truth Model Analysis

#### Where MetadataService Owns Truth ✅
1. **Service URLs**: `metadataService.getServiceUrl()` is the authoritative resolver for all 17 service endpoint URLs — correctly used by probe logic, artifact provisioner, and auth
2. **Scope definitions**: `metadataService.getServiceScopes()` provides canonical scope lists from `service-endpoints.json` — used by `uipath-auth.ts::getResourceScopesFromMetadata()`
3. **Endpoint confidence**: `metadataService.getServiceConfidence()` returns official/inferred/deprecated per ServiceResourceType — correctly consulted for confidence notes
4. **Reachability state**: `metadataService.updateServiceReachability()` / `getServiceReachability()` tracks probe-discovered reachability — correctly updated by `probeAllServices()`
5. **Token endpoint**: `metadataService.getTokenEndpoint()` — single source for Identity Server URL
6. **Resource-to-service mapping**: `RESOURCE_TO_SERVICE_MAP` in `uipath-auth.ts` maps 8 resource types (OR, TM, DU, PM, DF, PIMS, IXP, AI) to ServiceResourceType — clean and correct

#### Where the UI Bypasses MetadataService ❌
1. **Frontend scope categories**: `UIPATH_SCOPE_CATEGORIES` in `settings.tsx` is a hardcoded frontend-only taxonomy — not derived from MetadataService
2. **Service display names**: `SERVICE_LABELS` in `integration-status-bar.tsx` is a hardcoded frontend-only mapping — not derived from MetadataService
3. **Probe flag taxonomy**: `UnifiedProbeResult.flags` uses its own flat key set (25+ keys) that doesn't match MetadataService's `ServiceResourceType` (17 types)
4. **Platform capabilities mapping**: `getPlatformCapabilities()` has its own `svcConfidenceMap` (13 entries) that maps flag names to ServiceResourceType — a partial, independent mapping
5. **Diagnostics checks**: `/api/uipath/diagnostics` route independently probes services without using `probeAllServices()` or MetadataService state
6. **Flag-to-service mapping**: `flagToServiceType` record (line 1864) in `probeAllServices()` maps 25 flag names to 17 ServiceResourceTypes — yet another independent mapping, and it maps multiple flags to the same ServiceResourceType (e.g., actionCenter, environments, triggers, storageBuckets, attendedRobots, studioProjects, hasUnattendedSlots → all map to "OR")

#### Summary of Taxonomy Sources (6 independent mappings)
| # | Location | What it maps | Entries | Owned by |
|---|----------|-------------|---------|----------|
| 1 | `service-endpoints.json` / MetadataService | ServiceResourceType → URL, scopes, confidence | 17 | MetadataService ✅ |
| 2 | `RESOURCE_TO_SERVICE_MAP` in `uipath-auth.ts` | ResourceType → ServiceResourceType | 8 | Auth module |
| 3 | `UnifiedProbeResult.flags` | Flat boolean capability flags | 25+ | Probe logic |
| 4 | `flagToServiceType` in `probeAllServices()` | Flag name → ServiceResourceType | 25 | Probe logic |
| 5 | `svcConfidenceMap` in `getPlatformCapabilities()` | Flag name → ServiceResourceType | 13 | Capabilities |
| 6 | `SERVICE_LABELS` in `integration-status-bar.tsx` | Internal key → display name | 18 | Frontend |
| 7 | `UIPATH_SCOPE_CATEGORIES` in `settings.tsx` | Scope groups for wizard UI | ~10 categories | Frontend |

---

## 2. Taxonomy Confusion Analysis

### 2.1 Concept Definitions

| Concept | Definition | Example |
|---------|-----------|---------|
| **External App Resource** | A UiPath Automation Cloud resource type selectable in Admin → External Applications. Represents a backend API surface that can be granted to an OAuth app. | `UiPath.Orchestrator`, `TestManager`, `PlatformManagement` |
| **Service/Product** | A user-facing UiPath platform product with its own identity, UI, and API surface. Something a user would recognize as a distinct product they can enable/license. | Orchestrator, Test Manager, Document Understanding, Maestro |
| **Capability/Feature** | A feature or sub-capability within a parent service. Not independently licensed or provisioned — exists as part of a larger product. | Action Center (under Orchestrator), Generative Extraction (under DU/IXP), Storage Buckets (under Orchestrator) |
| **Environment Observation** | A fact about the tenant's current state. Not a service or feature — an observation about what's deployed/configured. | Attended robots exist, Studio projects deployed, unattended slots available |

### 2.2 Concrete Conflation Examples

#### IXP / Generative Extraction / Communications Mining
**Current state**: Three separate entries in `serviceDetails`: `generativeExtraction`, `communicationsMining`, and `ixp`
- `generativeExtraction` is probed via IXP endpoint (`ixp_/api/v1/projects`) using DU token — it's a **capability of the DU/IXP platform**, not a standalone service
- `communicationsMining` is probed via Reinfer endpoint (`reinfer_/api/v1/datasets`) using IXP token — it's a **capability under the IXP platform**
- `ixp` is probed separately via `reinfer_/api/v1/datasets` (line 1731) — this is the **same endpoint as Communications Mining** but shown as a separate service entry
- All three share the same OAuth scope (`Ixp.ApiAccess`)

**Confusion**: User sees three separate "services" (IXP, Generative Extraction, Communications Mining) that are really two capabilities of one platform. IXP and Communications Mining are probed via the same endpoint. The External App resource is `Ixp.ExternalService` — a single resource that maps to multiple UI entries.

#### Storage Buckets
**Current state**: `storageBuckets` boolean flag, probed via `{orchBase}/odata/Buckets?$top=1`
- This is an **Orchestrator OData endpoint** — not a separate service
- It represents a **capability within Orchestrator** (bucket storage)
- Shown as a peer entry alongside services like "Test Manager" and "AI Center"

**Confusion**: Storage Buckets is an Orchestrator feature, not a separate service. It doesn't have its own External App resource, license, or API surface. It should be nested under Orchestrator.

#### Attended Robots / Studio Projects / hasUnattendedSlots
**Current state**: `attendedRobots`, `studioProjects`, `hasUnattendedSlots` boolean flags
- These are **environment observations** — they report what's configured on the tenant
- Probed via Orchestrator OData (Sessions, Machines, Releases)
- All map to ServiceResourceType "OR" in `flagToServiceType`

**Confusion**: These are observations about the deployment environment, not services or capabilities. They're reported in the same flat structure as actual services.

#### Platform Management
**Current state**: `platformManagement` boolean flag, detected via PM token acquisition
- Maps to External App resource `PlatformManagement` and ServiceResourceType `IDENTITY`
- The Identity Server is the infrastructure that ALL services depend on — it's not a user-facing "service" in the same sense as Orchestrator or Test Manager

**Confusion**: Platform Management / Identity is infrastructure, not a user-facing product. Showing it as "available" alongside Orchestrator suggests it's a feature to use, when really it's a prerequisite for everything.

#### Agents / ConversationalAgents / Autopilot
**Current state**: Three related entries:
- `agents` flag with shotgun probe across 3 endpoints (Agent Studio, Autopilot, Orchestrator AgentDefinitions)
- `autopilot` flag detected as part of agent probe
- `agentCapabilities` sub-object with autonomous/conversational/coded booleans
- Asset prefix fallback (`Agent_*`) used as last resort

**Confusion**: 
- External App resource is `ConversationalAgents` but UI shows "Agents"
- Autopilot is shown as a separate service but is really a capability within Agents
- The shotgun probe approach conflates three different agent-related surfaces
- The asset fallback provides very weak evidence but sets `agentsAvailable = true`

#### Environments / Triggers
**Current state**: `environments` and `triggers` boolean flags, both defaulting to `true`
- Probed via Orchestrator OData (Environments, QueueTriggers, ProcessSchedules)
- Map to ServiceResourceType "OR"

**Confusion**: These are Orchestrator capabilities, not services. They default to `true` which means they're assumed available even before probing, unlike all other entries which default to `false`.

#### Action Center
**Current state**: `actionCenter` boolean flag, probed via `{orchBase}/odata/TaskCatalogs?$top=1`
- This is an Orchestrator capability (accessed via Orchestrator OData endpoints)
- Has special not-onboarded detection
- Maps to ServiceResourceType "OR" (not its own resource type)

**Confusion**: Action Center is a capability within Orchestrator (same API surface, same token) but shown as a peer service. It doesn't have its own External App resource.

### 2.3 The 15 External App Resources — Current Mapping Gaps

| # | External App Resource | Current ServiceResourceType | Current Display | Correct Classification |
|---|----------------------|---------------------------|----------------|----------------------|
| 1 | `UiPath.Orchestrator` | OR | Orchestrator | **Top-level service** |
| 2 | `TestManager` | TM | Test Manager | **Top-level service** |
| 3 | `PlatformManagement` | IDENTITY | Platform Mgmt | **Infrastructure** (not user-facing service) |
| 4 | `UiPath.DocumentUnderstanding` | DU | Document Understanding | **Top-level service** |
| 5 | `UiPath.AICenter` | AI | AI Center | **Top-level service** |
| 6 | `DataFabricOpenApi` | DF | Data Service | **Top-level service** |
| 7 | `PIMS` | PIMS | Maestro | **Top-level service** |
| 8 | `Ixp.ExternalService` | IXP | IXP / Gen. Extraction | **Capability platform** under DU (covers Gen. Extraction + Comms Mining) |
| 9 | `ConversationalAgents` | AGENTS | Agents | **Top-level service** |
| 10 | `AutomationSolutions` | — (no mapping) | — (not surfaced) | **Internal resource** — covers Automation Solutions (citizen dev) |
| 11 | `ResourceCatalogServiceApi` | — (no mapping) | — (not surfaced) | **Internal resource** — covers resource catalog/process templates |
| 12 | `StudioWebPublicS2S` | — (no mapping) | — (not surfaced) | **Internal resource** — Studio Web server-to-server API |
| 13 | `EnterpriseContextService` | — (no mapping) | — (not surfaced) | **Internal resource** — enterprise context/knowledge service |
| 14 | `Traces.Api` | — (no mapping) | — (not surfaced) | **Internal resource** — observability/tracing |
| 15 | `Relay.Service.Api` | — (no mapping) | — (not surfaced) | **Internal resource** — relay/notification service |

**Key finding**: 6 of the 15 External App resources (AutomationSolutions, ResourceCatalogServiceApi, StudioWebPublicS2S, EnterpriseContextService, Traces.Api, Relay.Service.Api) are not mapped to any ServiceResourceType. Meanwhile, the UI shows 7 additional entries (INTEGRATIONSERVICE, AUTOMATIONOPS, AUTOMATIONSTORE, APPS, ASSISTANT, AUTOPILOT, REINFER) that are NOT External App resources — they're endpoint-based services discovered via HTTP probes.

---

## 3. Truthfulness Risk Analysis

### 3.1 Status Conflation — "Available" Doesn't Mean Usable

| Scenario | What probe checks | What "available" implies | What user assumes | Truthful? |
|----------|-------------------|------------------------|-------------------|-----------|
| Token acquired for TM | `tryAcquireResourceToken("TM")` succeeds | TM scope exists in OAuth app | Test Manager is ready to use | ⚠️ Partially — token acquisition ≠ service provisioned on tenant |
| HTTP 200 from `agentstudio_` | Agent Studio endpoint responds | Agents are available | Can create agent definitions | ⚠️ Partially — 200 from gateway ≠ service genuinely available |
| HTTP 401 from `automationhub_` | `isServiceReachable()` returns true | Service exists | Automation Hub is usable | ❌ No — 401 means auth insufficient, not "available" |
| Asset prefix `Agent_*` found | OData query finds matching asset | Agents might be provisioned | Agent capability confirmed | ❌ No — asset naming convention is extremely weak evidence |
| `storageBuckets` flag set from `Buckets?$top=1` | Orchestrator has buckets configured | Buckets "service" available | There's a storage service | ⚠️ Misleading — this is just an Orchestrator feature, not a service |

### 3.2 Capabilities Shown as Peer Services

The `serviceDetails` object (sent to UI) presents all 18 entries at the same level:
```
orchestrator: available        ← True top-level service
actionCenter: available        ← Orchestrator capability
generativeExtraction: limited  ← DU/IXP capability  
storageBuckets: available      ← Orchestrator feature
attendedRobots: available      ← Environment observation
autopilot: unknown             ← Capability within Agents
```

A user seeing this cannot distinguish which items are real products vs features vs observations.

### 3.3 Unconfirmed APIs Presented Normally

10 of 17 services in `service-endpoints.json` have `confidence: "inferred"`. When probed successfully, they show as "available" in the UI with no warning. The `(inferred)` label was designed to address this but is meaningless to users.

Example: `AUTOMATIONSTORE` has `confidence: "inferred"` and its probe hits a generic root path `/api/v1/` — a false positive from a gateway redirect shows this service as "available" when it may not actually be usable.

### 3.4 Environment Observations Shown as Products

`attendedRobots`, `studioProjects`, and `hasUnattendedSlots` appear in the same status grid as Orchestrator and Test Manager. Users see "Attended Robots: available" and may think it's a product to configure, when it's simply an observation that attended robots exist.

### 3.5 Duplicated Service Entries

`ixp` and `communicationsMining` probe the same endpoint (`reinfer_/api/v1/datasets`). Additionally, `generativeExtraction` probes the IXP endpoint. A user sees three entries that represent overlapping aspects of one platform.

---

## 4. Regression Risk Analysis

### 4.1 Connection Flow
| Risk | Detail | Mitigation |
|------|--------|-----------|
| Scope auto-detection breaks | If scope categories change, auto-detect may select wrong scopes | Keep existing scope IDs stable; add new categories alongside existing ones |
| Wizard steps change | Users familiar with 4-step wizard get confused | Keep same 4 steps; only change what's displayed in scope step |
| Connection test logic changes | `testUiPathConnection()` must still work | Connection test only checks Orchestrator — no taxonomy dependency |

### 4.2 Diagnostics
| Risk | Detail | Mitigation |
|------|--------|-----------|
| `/api/uipath/diagnostics` output format changes | IntegrationStatusBar depends on `serviceDetails` shape | Version the diagnostics response; keep existing keys as aliases |
| Service check names change | Frontend hardcodes `SERVICE_LABELS` keys | Add backward-compatible aliases in response |

### 4.3 Service Verification
| Risk | Detail | Mitigation |
|------|--------|-----------|
| `probeServiceAvailability()` return shape changes | 6+ consumers depend on `ServiceAvailabilityMap` | Keep all existing boolean flags; add new hierarchical structure alongside |
| Boolean flags removed | Artifact provisioner checks `svcAvail.actionCenter`, etc. | Never remove boolean flags — deprecate and forward to new model |

### 4.4 Capability Discovery
| Risk | Detail | Mitigation |
|------|--------|-----------|
| Probe logic changes detection | Service previously detected now missed | Run old and new probe logic in parallel during migration; compare |
| New hierarchy changes probe order | Parent service probe failure blocks child capability probes | Ensure child probes can run independently of parent status |

### 4.5 PDD/SDD Prompt Context
| Risk | Detail | Mitigation |
|------|--------|-----------|
| `getPlatformCapabilities()` text changes | LLM prompts receive different service descriptions | Keep same service descriptions; only restructure grouping |
| Capability list shrinks | Fewer items in `availableDescription` → less context for LLM | No items removed — only regrouped under parent services |
| Confidence notes change format | Existing prompt templates may parse confidence notes | Keep same text format for confidence notes |

### 4.6 Deployment/Provisioning
| Risk | Detail | Mitigation |
|------|--------|-----------|
| `artifact-provisioner.ts` capability gates change | Provisioning for agents/maestro/test manager gated on flags | Keep all boolean flags functional; new hierarchy is additive |
| Service URL resolution changes | `metadataService.getServiceUrl()` API changes | No change — MetadataService URL resolution is stable |

### 4.7 Package/Artifact Generation
| Risk | Detail | Mitigation |
|------|--------|-----------|
| Pipeline context changes | `uipath-pipeline.ts` consumes capabilities for generation decisions | Keep `PlatformCapabilityProfile` interface stable; add new fields alongside |
| DHG generator breaks | `dhg-generator.ts` doesn't directly consume taxonomy — no risk | N/A |

---

## 5. Canonical Resource → Service → Capability Mapping

### 5.1 Top-Level Services (User-Facing Products)

| # | User-Facing Service | External App Resource(s) | ServiceResourceType | Display Name | Category |
|---|-------------------|------------------------|---------------------|-------------|----------|
| 1 | **Orchestrator** | `UiPath.Orchestrator` | OR | Orchestrator | Core |
| 2 | **Test Manager** | `TestManager` | TM | Test Manager | Quality |
| 3 | **Document Understanding** | `UiPath.DocumentUnderstanding` | DU | Document Understanding | AI/ML |
| 4 | **Data Service** | `DataFabricOpenApi` | DF | Data Service | Data |
| 5 | **Maestro** | `PIMS` | PIMS | Maestro | Orchestration |
| 6 | **AI Center** | `UiPath.AICenter` | AI | AI Center | AI/ML |
| 7 | **Agents** | `ConversationalAgents` | AGENTS | Agents | AI/ML |
| 8 | **Automation Hub** | — (no ext. app resource; separate OAuth) | HUB | Automation Hub | Governance |
| 9 | **Integration Service** | — (no ext. app resource; HTTP probe only) | INTEGRATIONSERVICE → IS | Integration Service | Integration |

### 5.2 Capabilities Under Parent Services

| # | Capability | Parent Service | How Detected | Current Flag | Notes |
|---|-----------|---------------|-------------|-------------|-------|
| 1 | Action Center | Orchestrator | `TaskCatalogs` OData probe | `actionCenter` | Human-in-the-loop tasks, approvals |
| 2 | Storage Buckets | Orchestrator | `Buckets` OData probe | `storageBuckets` | File storage for automations |
| 3 | Environments | Orchestrator | `Environments` OData probe | `environments` | Runtime environments |
| 4 | Triggers | Orchestrator | `QueueTriggers` + `ProcessSchedules` OData probes | `triggers` | Queue triggers and schedules |
| 5 | Generative Extraction | Document Understanding | IXP endpoint probe with DU token | `generativeExtraction` | LLM-powered extraction |
| 6 | Communications Mining | Document Understanding | Reinfer endpoint probe with IXP token | `communicationsMining` | Email/message analysis |
| 7 | Autopilot | Agents | Part of agent multi-probe | `autopilot` | Self-healing capability |
| 8 | Agent Types | Agents | Agent definition type detection | `agentCapabilities.*` | Autonomous, conversational, coded |
| 9 | ML Skills | AI Center | AI deployer skills probe | `aiCenterSkills` | Deployed ML models |
| 10 | ML Packages | AI Center | AI deployer packages probe | `aiCenterPackages` | Available ML packages |

### 5.3 Environment Observations (Not Services)

| # | Observation | Source | Current Flag | What It Tells You |
|---|------------|--------|-------------|-------------------|
| 1 | Attended Robots | Sessions/Robots OData | `attendedRobots` | Attended robots are configured on tenant |
| 2 | Unattended Slots | Sessions/Machines OData | `hasUnattendedSlots` | Unattended execution capacity exists |
| 3 | Deployed Processes | Releases OData | `studioProjects` | Existing processes are deployed |
| 4 | Serverless Runtime | Sessions OData | `serverlessDetected` | Serverless execution is available |
| 5 | Governance Policies | Automation Ops API | `governancePolicies` | Active policies constrain generation |

### 5.4 Infrastructure (Not User-Facing)

| # | Resource | ServiceResourceType | Why Not User-Facing |
|---|---------|---------------------|---------------------|
| 1 | Platform Management / Identity | IDENTITY | Prerequisites for all services; not a product users "use" |
| 2 | Automation Ops | AUTOMATIONOPS | Governance policies flow into generation context; the service itself is infrastructure |
| 3 | Automation Store | AUTOMATIONSTORE | Marketplace — useful context but not a service the app interacts with for generation |
| 4 | Apps | APPS | Low-code builder — not consumed by this application |
| 5 | Assistant | ASSISTANT | Desktop client — cloud probe is misleading |

### 5.5 Internal/Backend Resources (Not Surfaced)

| # | External App Resource | Classification | Notes |
|---|----------------------|---------------|-------|
| 1 | `AutomationSolutions` | Internal | Citizen developer solutions; not used by this app |
| 2 | `ResourceCatalogServiceApi` | Internal | Process template catalog; not used by this app |
| 3 | `StudioWebPublicS2S` | Internal | Studio Web server-to-server; not used |
| 4 | `EnterpriseContextService` | Internal | Enterprise knowledge base; could become relevant for Agents context grounding |
| 5 | `Traces.Api` | Internal | Observability/tracing; not used |
| 6 | `Relay.Service.Api` | Internal | Notification relay; not used |

### 5.6 Normalization Rules

| Rule | From | To |
|------|------|----|
| R1 | `DataFabricOpenApi` resource | "Data Service" display name |
| R2 | `PIMS` resource | "Maestro" display name |
| R3 | `ConversationalAgents` resource | "Agents" display name |
| R4 | `Ixp.ExternalService` resource | Not shown as top-level; capabilities shown under DU |
| R5 | `REINFER` service ID | "Communications Mining" under Document Understanding |
| R6 | `AUTOPILOT` service entry | Remove as standalone; show as Agents capability |
| R7 | `storageBuckets` flag | Show under "Orchestrator" capabilities section |
| R8 | `attendedRobots`, `studioProjects` | Move to "Environment" section, not services grid |
| R9 | `AUTOMATIONSTORE`, `APPS`, `ASSISTANT` | Move to secondary/collapsed "Other Services" |
| R10 | `environments`, `triggers` | Show under "Orchestrator" capabilities section |

---

## 6. Canonical Backend/Data Ownership Proposal

### 6.1 Where the Mapping Lives

The canonical resource → service → capability mapping should live **inside MetadataService** as a new data structure alongside (not replacing) the existing `service-endpoints.json` schema.

**Rationale**: MetadataService already owns service URLs, scopes, confidence, and reachability. Adding a taxonomy/hierarchy layer is a natural extension. Creating a parallel registry would violate the "no redundant registries" constraint.

### 6.2 Proposed Addition to MetadataService

```typescript
type ServiceCategory = "core" | "quality" | "ai-ml" | "data" | "orchestration" | "governance" | "integration" | "infrastructure" | "internal";

type ServiceClassification = "top-level-service" | "capability" | "observation" | "infrastructure" | "internal";

type ServiceTaxonomyEntry = {
  serviceId: string;
  displayName: string;
  classification: ServiceClassification;
  category: ServiceCategory;
  parentServiceId: string | null;
  externalAppResource: string | null;
  probeFlags: string[];
  description: string;
  userVisible: boolean;
  primaryInUI: boolean;
};
```

This would be defined as a **static taxonomy map** inside MetadataService (not in `service-endpoints.json`, since it's not tenant-specific or refresh-dependent):

```typescript
const SERVICE_TAXONOMY: ServiceTaxonomyEntry[] = [
  {
    serviceId: "OR",
    displayName: "Orchestrator",
    classification: "top-level-service",
    category: "core",
    parentServiceId: null,
    externalAppResource: "UiPath.Orchestrator",
    probeFlags: ["orchestrator"],
    description: "Queues, assets, triggers, machines, environments, processes, jobs",
    userVisible: true,
    primaryInUI: true,
  },
  {
    serviceId: "OR.ACTION_CENTER",
    displayName: "Action Center",
    classification: "capability",
    category: "core",
    parentServiceId: "OR",
    externalAppResource: null,
    probeFlags: ["actionCenter"],
    description: "Human-in-the-loop tasks, approvals, escalations",
    userVisible: true,
    primaryInUI: false,
  },
  // ... etc.
];
```

### 6.3 MetadataService API Extensions

Add to MetadataService:

```typescript
getServiceTaxonomy(): ServiceTaxonomyEntry[];
getTopLevelServices(): ServiceTaxonomyEntry[];
getCapabilitiesForService(serviceId: string): ServiceTaxonomyEntry[];
getObservations(): ServiceTaxonomyEntry[];
getServiceDisplayName(serviceId: string): string;
getServiceClassification(serviceId: string): ServiceClassification;
isUserVisible(serviceId: string): boolean;
```

### 6.4 No Redundant Registries

With this design:
- `service-endpoints.json` continues to own: URLs, scopes, confidence, reachability (per-tenant, refreshable)
- `SERVICE_TAXONOMY` (new, static in MetadataService) owns: display names, hierarchy, classification, UI visibility
- `RESOURCE_TO_SERVICE_MAP` in `uipath-auth.ts` remains unchanged (maps auth resource types to ServiceResourceType)
- Frontend `SERVICE_LABELS` and `UIPATH_SCOPE_CATEGORIES` are **derived from** MetadataService taxonomy (eliminating frontend-only mappings)

**Eliminated redundancies**:
- `SERVICE_LABELS` in `integration-status-bar.tsx` → replaced by `metadataService.getServiceDisplayName()`
- `svcConfidenceMap` in `getPlatformCapabilities()` → replaced by taxonomy lookup
- `flagToServiceType` in `probeAllServices()` → replaced by taxonomy `probeFlags` mapping

---

## 7. Status Model Design

### 7.1 Building on the 5-State Model

The 5-state model from `uipath-endpoint-matrix.md` defines states for **services**. This design extends it to **capabilities** and **observations**.

### 7.2 Status Model for Top-Level Services

| State | Label | Criteria | Icon |
|-------|-------|---------|------|
| **Available** | Available | Official endpoint known, probe succeeded, sufficient auth | ✅ Green dot |
| **Endpoint Failure** | Endpoint Failure | Official endpoint known, probe failed | ❌ Red |
| **Not Provisioned** | Not Provisioned | Probe detected service not enabled on tenant | ⛔ Gray |
| **Auth/Scope** | Insufficient Auth | Service exists but auth/scope insufficient | 🔒 Orange |
| **Unknown** | Unknown | No official docs, or probe not run | ❓ Gray |

### 7.3 Status Model for Capabilities

Capabilities inherit their parent service's base status with these overrides:

| Parent Status | Capability Probe Result | Capability Status |
|--------------|------------------------|-------------------|
| Available | Probe succeeded | ✅ Available |
| Available | Probe failed | ⚠️ Unavailable (within available parent) |
| Available | Not probed | ❓ Unknown |
| Unavailable | — | ⛔ Unavailable (parent unavailable) |
| Unknown | — | ❓ Unknown |

**Display**: Capabilities show as indented sub-items under their parent service, with their own status indicator.

### 7.4 Status Model for Observations

Observations use a simpler model — they report facts, not service health:

| State | Label | Example |
|-------|-------|---------|
| **Detected** | "3 attended robots" | Attended robots found |
| **Not Detected** | "No attended robots" | None found |
| **Unknown** | "Not checked" | Probe not yet run |

**Display**: Observations show in a separate "Environment" section with factual labels (not available/unavailable).

### 7.5 User-Facing Status Labels (No Jargon)

| Internal State | User Label | Tooltip |
|---------------|-----------|---------|
| `available` | Available | "Service is accessible and ready to use" |
| `endpoint_failure` | Not Reachable | "Service endpoint could not be reached. This may be temporary." |
| `not_provisioned` | Not Enabled | "This service is not enabled on your tenant. Contact your UiPath admin to enable it." |
| `auth_scope` | Access Denied | "Your app credentials don't have permission for this service. Add the required scopes in UiPath Admin → External Applications." |
| `unknown` | Not Verified | "This service hasn't been verified yet. Run a connection test to check availability." |

---

## 8. Connection Wizard Simplification Proposal

### 8.1 Current Wizard Analysis

The current 4-step wizard:
1. **Org & Tenant** — Essential, keep
2. **App Credentials** — Essential, keep
3. **Scopes** — Dense, confusing, often skipped because of auto-detect
4. **Review & Connect** — Essential, keep

**Problems with Step 3 (Scopes)**:
- Shows ~100 individual scope checkboxes organized by service
- Users rarely know which scopes they need
- Auto-detect exists but is buried as a fallback
- The scope list acts as an implicit service selection UI

### 8.2 Proposed Simplified Flow

#### Step 1: Organization & Tenant (unchanged)
- Same fields: org name, tenant name, connection name

#### Step 2: App Credentials (unchanged)
- Same fields: App ID, App Secret

#### Step 3: Connect & Detect (replaces old Steps 3 + 4)
- **Save credentials and immediately test connection**
- On success: automatically run scope detection + service probe
- Show results as a hierarchical service status view:
  ```
  ✅ Orchestrator
     ✅ Action Center
     ✅ Storage Buckets
     ✅ Triggers & Schedules
  ✅ Document Understanding
     ✅ Generative Extraction
     ⚠️ Communications Mining (access denied)
  ✅ Test Manager
  ❓ AI Center (not verified)
  ⛔ Maestro (not enabled)
  
  Environment:
     3 attended robots · 2 unattended slots · 12 deployed processes
  ```
- **Expandable "Advanced: Manage Scopes"** section (collapsed by default) for users who need manual scope control
- **"Re-detect Services"** button to re-run probe

#### What's Deferred
- **Folder selection** → moved to post-connection setup (already exists as separate API)
- **Detailed diagnostics** → accessible via "Run Diagnostics" button in connection management (not wizard)
- **Live ops** → shown only after connection is established and stable
- **Individual scope management** → collapsed/secondary; auto-detect handles most cases

### 8.3 Diagnostics Access

After connection is established, diagnostics remain accessible via:
1. **IntegrationStatusBar** at bottom of screen (unchanged)
2. **Connection card** in settings → "Run Diagnostics" button
3. **`/api/uipath/diagnostics`** endpoint (unchanged)

The key change: diagnostics are not part of the setup flow. They're post-connection tools for troubleshooting.

### 8.4 UI Hierarchy for Service Display

Both the wizard results view and the IntegrationStatusBar should use the same hierarchical layout:

```
Top-Level Services (collapsible)
├── Orchestrator [status]
│   ├── Action Center [status]
│   ├── Storage Buckets [status]
│   ├── Triggers [status]
│   └── Environments [status]
├── Document Understanding [status]
│   ├── Generative Extraction [status]
│   └── Communications Mining [status]
├── Test Manager [status]
├── Data Service [status]
├── Maestro [status]
├── AI Center [status]
│   └── 3 deployed ML skills
├── Agents [status]
│   ├── Autonomous [status]
│   ├── Conversational [status]
│   └── Autopilot [status]
├── Automation Hub [status]
└── Integration Service [status]

Other Services (collapsed by default)
├── Automation Ops [status]
├── Automation Store [status]
├── Apps [status]
└── Assistant [status]

Environment Observations
├── 3 attended robots
├── 2 unattended slots
├── 12 deployed processes
└── Serverless runtime: not detected
```

---

## 9. Migration / Implementation Plan

### 9.1 Impacted Files

| # | File | Change Type | Description |
|---|------|-----------|-------------|
| 1 | `server/catalog/metadata-schemas.ts` | **Modify** | Add `ServiceTaxonomyEntry` type and related types |
| 2 | `server/catalog/metadata-service.ts` | **Modify** | Add `SERVICE_TAXONOMY` static data and new API methods |
| 3 | `server/uipath-integration.ts` | **Modify** | Update `probeServiceAvailability()` to emit hierarchical `serviceDetails`; update `getPlatformCapabilities()` to use taxonomy; remove `flagToServiceType` and `svcConfidenceMap` |
| 4 | `client/src/components/integration-status-bar.tsx` | **Modify** | Replace flat grid with hierarchical service display; remove `SERVICE_LABELS` hardcoded map; consume taxonomy from API |
| 5 | `client/src/pages/settings.tsx` | **Modify** | Simplify wizard Step 3; add hierarchical service results in Step 3; update scope categories to be derived or collapsible |
| 6 | `server/uipath-routes.ts` | **Modify** | Update `/api/uipath/diagnostics` to include taxonomy-aware `serviceDetails` |
| 7 | `catalog/service-endpoints.json` | **Modify** | Remove `AUTOPILOT` entry; rename `REINFER` → `COMMS_MINING` (per endpoint-matrix V2); bump `snapshotVersion` |
| 8 | `server/uipath-auth.ts` | **Minor** | No changes needed — `RESOURCE_TO_SERVICE_MAP` stays as-is |
| 9 | `server/orchestrator/artifact-provisioner.ts` | **No change** | Continues using boolean flags from `ServiceAvailabilityMap` |
| 10 | `server/uipath-pipeline.ts` | **No change** | Continues using `PlatformCapabilityProfile` |
| 11 | `server/uipath-prompts.ts` | **No change** | Prompt templates are taxonomy-agnostic |
| 12 | `server/dhg-generator.ts` | **No change** | Does not consume taxonomy |
| 13 | `server/document-routes.ts` | **No change** | Uses `getPlatformCapabilities()` which stays backward-compatible |
| 14 | `server/replit_integrations/chat/routes.ts` | **No change** | Uses `probeServiceAvailability()` boolean flags which remain |

### 9.2 Ownership Summary

| Component | Owner |
|-----------|-------|
| Service taxonomy (hierarchy, classification, display names) | MetadataService (new static data) |
| Service endpoints (URLs, scopes, confidence, reachability) | MetadataService (existing `service-endpoints.json`) |
| Resource-to-service auth mapping | `uipath-auth.ts` (existing, unchanged) |
| Probe logic and boolean flags | `uipath-integration.ts` (existing, unchanged for compatibility) |
| Hierarchical service status | `probeServiceAvailability()` (new `serviceHierarchy` field) |
| UI display | Frontend components (consume taxonomy from API) |

### 9.3 Migration Sequence

#### Phase A: Foundation (No UI Changes, No Breaking Changes)
1. **A1**: Add `ServiceTaxonomyEntry` type to `metadata-schemas.ts`
2. **A2**: Add `SERVICE_TAXONOMY` static data and API methods to `metadata-service.ts`
3. **A3**: Add `/api/settings/uipath/taxonomy` endpoint to expose taxonomy to frontend
4. **A4**: Add `serviceHierarchy` field to `probeServiceAvailability()` return type (alongside existing flat `serviceDetails`)
5. **A5**: Update `getPlatformCapabilities()` to use taxonomy for display names and confidence lookup (output text stays same)

#### Phase B: Backend Cleanup (Non-Breaking)
6. **B1**: Remove `AUTOPILOT` from `service-endpoints.json`; track as Agents capability flag
7. **B2**: Update `SERVICE_LABELS` in `integration-status-bar.tsx` to be derived from taxonomy API (or at minimum from a shared constant)
8. **B3**: Remove `flagToServiceType` from `probeAllServices()` — replace with taxonomy lookup
9. **B4**: Remove `svcConfidenceMap` from `getPlatformCapabilities()` — replace with taxonomy lookup

#### Phase C: UI Redesign
10. **C1**: Update `IntegrationStatusBar` to display hierarchical service status (services → capabilities → observations)
11. **C2**: Simplify wizard Step 3 in `settings.tsx` (merge old Steps 3+4; collapse scope management)
12. **C3**: Add service hierarchy view to wizard connection results
13. **C4**: Update diagnostics display in settings page to use new hierarchy

#### Phase D: Status Model Migration
14. **D1**: Implement 5-state status derivation in MetadataService (per `uipath-endpoint-matrix.md` V2)
15. **D2**: Update `buildDetail()` in `probeServiceAvailability()` to emit 5-state statuses
16. **D3**: Update frontend status icons/colors for 5-state model
17. **D4**: Add capability-level and observation-level status models

### 9.4 Regression Mitigation

| Risk | Mitigation Strategy |
|------|---------------------|
| Boolean flags removed | **Never remove boolean flags.** All existing `ServiceAvailabilityMap` boolean fields remain. New hierarchical structure is additive. |
| `serviceDetails` keys change | **Keep all existing keys.** Add new `serviceHierarchy` field alongside. Old `serviceDetails` preserved for backward compatibility. |
| Display names change | **Use taxonomy `displayName` but keep existing names as defaults.** If taxonomy lookup fails, fall back to hardcoded `SERVICE_LABELS`. |
| Probe detection changes | **No probe logic changes in Phase A/B.** Same 25+ probes, same detection, same flags. Only the presentation changes. |
| `getPlatformCapabilities()` text changes | **Keep same text descriptions.** Only change how display names and confidence are looked up, not the output text format. |
| `AUTOPILOT` entry removed | **Remove from `service-endpoints.json` only after** ensuring `probeAllServices()` still sets `autopilot` flag from agent multi-probe logic (which it already does — autopilot detection is inline, not from service-endpoints). |

### 9.5 Acceptance Criteria

1. **All existing probe detections remain identical** — same services detected, same boolean flags set, same probe cache behavior
2. **All existing consumers of `ServiceAvailabilityMap` continue working** — boolean flags preserved, no breaking changes
3. **All existing consumers of `PlatformCapabilityProfile` continue working** — same text output format
4. **MetadataService owns the canonical taxonomy** — no frontend-only taxonomy mappings remain (except as fallbacks)
5. **UI displays services hierarchically** — top-level services → capabilities → observations
6. **No "(inferred)" labels appear in UI** — replaced by meaningful status labels from 5-state model
7. **Wizard Step 3 is simplified** — auto-detect is primary; manual scope management is collapsed/secondary
8. **Service display names match UiPath branding** — "Maestro" not "PIMS", "Data Service" not "DataFabricOpenApi"
9. **Observations are visually distinct from services** — environment facts shown in separate section with factual labels
10. **AUTOPILOT removed as standalone service entry** — tracked as Agents capability
11. **No redundant taxonomy registries** — `SERVICE_LABELS`, `svcConfidenceMap`, `flagToServiceType` eliminated or derived from MetadataService
12. **Diagnostics remain fully accessible** — no loss of diagnostic detail, just better organization
13. **`service-endpoints.json` `snapshotVersion` bumped** — indicates taxonomy migration completed
14. **All 15 External App resources are classified** — each mapped to service/capability/internal with rationale documented

---

## 10. Appendix: Complete Taxonomy Reference

### 10.1 Full Service Hierarchy

```
Top-Level Services
├── Orchestrator (OR)
│   ├── [cap] Action Center (human-in-the-loop tasks)
│   ├── [cap] Storage Buckets (file storage)
│   ├── [cap] Environments (runtime environments)
│   ├── [cap] Triggers (queue triggers + process schedules)
│   └── [obs] Deployed Processes (existing processes)
│
├── Document Understanding (DU)
│   ├── [cap] Generative Extraction (LLM-powered, via IXP)
│   └── [cap] Communications Mining (email/message analysis, via Reinfer)
│
├── Test Manager (TM)
│
├── Data Service (DF)
│
├── Maestro (PIMS)
│
├── AI Center (AI)
│   ├── [cap] ML Skills (deployed models)
│   └── [cap] ML Packages (available packages)
│
├── Agents (AGENTS)
│   ├── [cap] Autonomous agents
│   ├── [cap] Conversational agents
│   ├── [cap] Coded agents
│   └── [cap] Autopilot (self-healing)
│
├── Automation Hub (HUB)
│
└── Integration Service (IS)

Secondary Services (collapsed by default)
├── Automation Ops (AUTOMATIONOPS)
├── Automation Store (AUTOMATIONSTORE)
├── Apps (APPS)
└── Assistant (ASSISTANT)

Infrastructure (not shown in service grid)
└── Platform Management / Identity (IDENTITY)

Environment Observations (separate section)
├── Attended Robots: {count} detected / none detected
├── Unattended Slots: {count} available / none
├── Serverless Runtime: detected / not detected
└── Governance Policies: {count} active / none
```

### 10.2 External App Resource → Service/Capability Mapping

| # | External App Resource | → Service/Capability | Classification | UI Visibility |
|---|----------------------|---------------------|---------------|---------------|
| 1 | `UiPath.Orchestrator` | Orchestrator | Top-level service | Primary |
| 2 | `TestManager` | Test Manager | Top-level service | Primary |
| 3 | `PlatformManagement` | Identity / Platform Mgmt | Infrastructure | Hidden |
| 4 | `UiPath.DocumentUnderstanding` | Document Understanding | Top-level service | Primary |
| 5 | `UiPath.AICenter` | AI Center | Top-level service | Primary |
| 6 | `DataFabricOpenApi` | Data Service | Top-level service | Primary |
| 7 | `PIMS` | Maestro | Top-level service | Primary |
| 8 | `Ixp.ExternalService` | Generative Extraction + Communications Mining | Capabilities under DU | Under parent |
| 9 | `ConversationalAgents` | Agents | Top-level service | Primary |
| 10 | `AutomationSolutions` | (not surfaced) | Internal resource | Hidden |
| 11 | `ResourceCatalogServiceApi` | (not surfaced) | Internal resource | Hidden |
| 12 | `StudioWebPublicS2S` | (not surfaced) | Internal resource | Hidden |
| 13 | `EnterpriseContextService` | (not surfaced; future: Agents context) | Internal resource | Hidden |
| 14 | `Traces.Api` | (not surfaced) | Internal resource | Hidden |
| 15 | `Relay.Service.Api` | (not surfaced) | Internal resource | Hidden |

### 10.3 Relationship to uipath-endpoint-matrix.md V2

This document **complements** the endpoint-matrix V2 design:

| Aspect | Endpoint Matrix V2 | This Document |
|--------|-------------------|---------------|
| Focus | Endpoint/probe correctness, 5-state status model | Taxonomy hierarchy, UI truthfulness |
| Service entries | 17 service IDs with probe config | Same 17 IDs + hierarchy/classification |
| Status model | 5-state service status | 5-state + capability status + observation status |
| Schema changes | V2 `service-endpoints.json` schema | `ServiceTaxonomyEntry` in MetadataService |
| Migration | Probe logic + schema migration | UI redesign + taxonomy data + wizard simplification |
| Sequence | Implement V2 schema first | Implement after V2 schema is in place |

**Implementation order**: Endpoint-matrix V2 (schema + probes) → Taxonomy redesign (hierarchy + UI). The taxonomy redesign depends on the V2 schema being in place for proper status derivation.
