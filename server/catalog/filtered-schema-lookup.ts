import { catalogService, type ActivitySchema } from "./catalog-service";
import { WINDOWS_ONLY_PACKAGES } from "./prompt-guidance-filter-constants";

export type ActivityRejectionReason =
  | "deprecated-activity"
  | "non-emission-approved-activity"
  | "target-incompatible-activity"
  | "unknown-activity";

export interface FilteredSchemaApproved {
  status: "approved";
  schema: ActivitySchema;
}

export interface FilteredSchemaRejected {
  status: "rejected";
  reason: ActivityRejectionReason;
  activityName: string;
}

export type FilteredSchemaResult = FilteredSchemaApproved | FilteredSchemaRejected;

export interface StageLookupCounters {
  total: number;
  approved: number;
  deprecated: number;
  nonEmissionApproved: number;
  targetIncompatible: number;
  unknown: number;
}

export interface StageAdoptionEntry {
  stage: string;
  adopted: boolean;
  lookups: StageLookupCounters;
}

const PIPELINE_STAGE_MANIFEST: string[] = [
  "quality-gate",
  "deterministic-validators",
  "iterative-llm-corrector",
  "workflow-tree-assembler",
  "xaml-compliance",
  "executable-path-validator",
  "post-emission-dependency-analyzer",
];

const registeredStages = new Map<string, StageLookupCounters>();

function ensureCounters(stage: string): StageLookupCounters {
  let counters = registeredStages.get(stage);
  if (!counters) {
    counters = { total: 0, approved: 0, deprecated: 0, nonEmissionApproved: 0, targetIncompatible: 0, unknown: 0 };
    registeredStages.set(stage, counters);
  }
  return counters;
}

export function getFilteredSchema(
  tag: string,
  stage: string,
  targetFramework?: "Windows" | "Portable",
): FilteredSchemaResult {
  const counters = ensureCounters(stage);
  counters.total++;

  if (!catalogService.isLoaded()) {
    counters.unknown++;
    return { status: "rejected", reason: "unknown-activity", activityName: tag };
  }

  const schema = catalogService.getActivitySchema(tag);
  if (!schema) {
    counters.unknown++;
    return { status: "rejected", reason: "unknown-activity", activityName: tag };
  }

  if (schema.activity.isDeprecated) {
    counters.deprecated++;
    return { status: "rejected", reason: "deprecated-activity", activityName: tag };
  }

  if (!schema.activity.emissionApproved) {
    counters.nonEmissionApproved++;
    return { status: "rejected", reason: "non-emission-approved-activity", activityName: tag };
  }

  if (targetFramework === "Portable" && WINDOWS_ONLY_PACKAGES.has(schema.packageId)) {
    counters.targetIncompatible++;
    return { status: "rejected", reason: "target-incompatible-activity", activityName: tag };
  }

  counters.approved++;
  return { status: "approved", schema };
}

export function registerStage(stage: string): void {
  ensureCounters(stage);
}

export function getStageManifest(): string[] {
  return [...PIPELINE_STAGE_MANIFEST];
}

export function getAdoptionReport(): StageAdoptionEntry[] {
  return PIPELINE_STAGE_MANIFEST.map(stage => {
    const counters = registeredStages.get(stage);
    return {
      stage,
      adopted: registeredStages.has(stage),
      lookups: counters || { total: 0, approved: 0, deprecated: 0, nonEmissionApproved: 0, targetIncompatible: 0, unknown: 0 },
    };
  });
}

export function resetLookupCounters(): void {
  for (const [stage, counters] of registeredStages) {
    counters.total = 0;
    counters.approved = 0;
    counters.deprecated = 0;
    counters.nonEmissionApproved = 0;
    counters.targetIncompatible = 0;
    counters.unknown = 0;
  }
}

export function rejectionReasonToCheckName(reason: ActivityRejectionReason): string {
  return reason;
}

export function rejectionDetailMessage(reason: ActivityRejectionReason, activityName: string, lineNum?: number): string {
  const prefix = lineNum != null ? `Line ${lineNum}: ` : "";
  switch (reason) {
    case "deprecated-activity":
      return `${prefix}deprecated activity "${activityName}" — this activity exists in the catalog but is marked as deprecated`;
    case "non-emission-approved-activity":
      return `${prefix}non-emission-approved activity "${activityName}" — this activity exists in the catalog but is not approved for emission`;
    case "target-incompatible-activity":
      return `${prefix}target-incompatible activity "${activityName}" — this activity is not compatible with the target framework`;
    case "unknown-activity":
      return `${prefix}unknown activity "${activityName}" — not in known activity registry (may be hallucinated)`;
  }
}
