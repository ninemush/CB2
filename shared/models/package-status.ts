/**
 * Defect-Aware Package Status Model
 *
 * Terminal assessed states replace the former optimistic READY / READY_WITH_WARNINGS / FALLBACK_READY
 * statuses with a quality-truthful model. A generated artifact is not the same as a deployable artifact.
 *
 * Key semantic distinctions (must be preserved):
 * - `FAILED` = crash or unrecoverable system/process failure — the pipeline did not complete.
 * - `structurally_invalid` = the pipeline completed enough to assess artifacts, but the generated
 *   automation artifact is structurally invalid — fatal structural validation defects remain or
 *   nupkg assembly produced an unusable artifact.
 *
 * Artifact availability vs. deployability:
 * - Downloadable artifacts (package ZIP, DHG) and developer handoff output remain available across
 *   ALL terminal states. Hiding or suppressing download/DHG actions for low-quality runs is
 *   intentionally not done.
 * - Deployment readiness is a separate gate from artifact availability. Only `studio_stable`
 *   packages may be deployed to UiPath Orchestrator.
 */

export type AssessedTerminalStatus =
  | "studio_stable"
  | "openable_with_warnings"
  | "handoff_only"
  | "structurally_invalid";

export type ProcessStatus =
  | "BUILDING"
  | "FAILED"
  | "CANCELLED"
  | "PENDING"
  | "STALLED"
  | "generation_finished";

export type PackageAssessedStatus = AssessedTerminalStatus | ProcessStatus;

/**
 * Legacy persisted statuses in the DB (`completed`, `completed_with_warnings`, `blocked`, `failed`)
 * and in-memory SSE statuses (`READY`, `READY_WITH_WARNINGS`, `FALLBACK_READY`, `FAILED`).
 *
 * This mapping is applied at read/render time only — no DB writes, no migrations, no backfills.
 * `READY` and `completed` default to `handoff_only` (conservative) unless accompanied by evidence
 * of a passing final-artifact-validation report confirming studio stability.
 */
export function mapLegacyStatus(
  legacyStatus: string,
  hasPassingFinalValidation: boolean = false,
): string {
  switch (legacyStatus) {
    case "READY_WITH_WARNINGS":
    case "completed_with_warnings":
      return "openable_with_warnings";

    case "FALLBACK_READY":
    case "blocked":
      return "handoff_only";

    case "READY":
    case "completed":
      return hasPassingFinalValidation ? "studio_stable" : "handoff_only";

    case "FAILED":
    case "failed":
      return "FAILED";

    case "BUILDING":
    case "PENDING":
    case "STALLED":
    case "CANCELLED":
    case "generation_finished":
    case "studio_stable":
    case "openable_with_warnings":
    case "handoff_only":
    case "structurally_invalid":
      return legacyStatus;

    default:
      return legacyStatus;
  }
}

export function isAssessedTerminalStatus(status: string): status is AssessedTerminalStatus {
  return status === "studio_stable" ||
    status === "openable_with_warnings" ||
    status === "handoff_only" ||
    status === "structurally_invalid";
}

export function isTerminalStatus(status: string): boolean {
  return isAssessedTerminalStatus(status) || status === "FAILED" || status === "CANCELLED";
}

export interface StatusPresentation {
  shortLabel: string;
  longLabel: string;
  badgeClass: string;
  textColorClass: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  iconName: "CheckCircle2" | "AlertTriangle" | "PackageOpen" | "XCircle";
  deployEnabled: boolean;
  disabledDeployTooltip: string | null;
}

/**
 * Shared frontend status presentation map for all four terminal assessed states.
 * All frontend components that render package status must consume this map.
 * Components must use `shortLabel` or `longLabel` — they must not invent alternative wording
 * or duplicate status-to-style logic.
 */
export const STATUS_PRESENTATION: Record<AssessedTerminalStatus, StatusPresentation> = {
  studio_stable: {
    shortLabel: "Studio Stable",
    longLabel: "Studio Stable — ready to deploy",
    badgeClass: "bg-emerald-500/15 text-emerald-500 border-emerald-500/25",
    textColorClass: "text-emerald-400",
    badgeVariant: "default",
    iconName: "CheckCircle2",
    deployEnabled: true,
    disabledDeployTooltip: null,
  },
  openable_with_warnings: {
    shortLabel: "Warnings",
    longLabel: "Openable with Warnings",
    badgeClass: "bg-amber-500/15 text-amber-500 border-amber-500/25",
    textColorClass: "text-amber-400",
    badgeVariant: "secondary",
    iconName: "AlertTriangle",
    deployEnabled: false,
    disabledDeployTooltip:
      "Deployment blocked — status is \"Openable with Warnings\". Minor non-blocking issues remain.",
  },
  handoff_only: {
    shortLabel: "Handoff Only",
    longLabel: "Handoff Only — not deployment-ready",
    badgeClass: "bg-orange-500/15 text-orange-500 border-orange-500/25",
    textColorClass: "text-orange-400",
    badgeVariant: "secondary",
    iconName: "PackageOpen",
    deployEnabled: false,
    disabledDeployTooltip:
      "Deployment blocked — status is \"Handoff Only\". Package is not Studio-stable or sufficiently complete for deployment.",
  },
  structurally_invalid: {
    shortLabel: "Invalid",
    longLabel: "Structurally Invalid",
    badgeClass: "bg-red-500/15 text-red-500 border-red-500/25",
    textColorClass: "text-red-400",
    badgeVariant: "destructive",
    iconName: "XCircle",
    deployEnabled: false,
    disabledDeployTooltip:
      "Deployment blocked — status is \"Structurally Invalid\". Fatal structural validation defects remain.",
  },
};

/**
 * Get the presentation for a given status, with optional highest-severity blocker category
 * appended to the disabled deploy tooltip.
 */
export function getStatusPresentation(
  status: AssessedTerminalStatus,
  highestSeverityBlocker?: string,
): StatusPresentation {
  const base = STATUS_PRESENTATION[status];
  if (!base.disabledDeployTooltip || !highestSeverityBlocker) return base;
  return {
    ...base,
    disabledDeployTooltip: `${base.disabledDeployTooltip} Highest-severity blocker: ${highestSeverityBlocker}.`,
  };
}
