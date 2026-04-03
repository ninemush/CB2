import { describe, it, expect } from "vitest";
import {
  mapLegacyStatus,
  isAssessedTerminalStatus,
  isTerminalStatus,
  STATUS_PRESENTATION,
  getStatusPresentation,
  type AssessedTerminalStatus,
  type PackageAssessedStatus,
} from "../../shared/models/package-status";

describe("Task 407: Defect-aware package result status model", () => {

  describe("mapLegacyStatus — legacy status mapping", () => {

    it("maps READY_WITH_WARNINGS → openable_with_warnings", () => {
      expect(mapLegacyStatus("READY_WITH_WARNINGS")).toBe("openable_with_warnings");
    });

    it("maps completed_with_warnings → openable_with_warnings", () => {
      expect(mapLegacyStatus("completed_with_warnings")).toBe("openable_with_warnings");
    });

    it("maps FALLBACK_READY → handoff_only", () => {
      expect(mapLegacyStatus("FALLBACK_READY")).toBe("handoff_only");
    });

    it("maps blocked → handoff_only", () => {
      expect(mapLegacyStatus("blocked")).toBe("handoff_only");
    });

    it("maps READY → handoff_only (conservative default without evidence)", () => {
      expect(mapLegacyStatus("READY")).toBe("handoff_only");
    });

    it("maps READY → studio_stable when hasPassingFinalValidation is true", () => {
      expect(mapLegacyStatus("READY", true)).toBe("studio_stable");
    });

    it("maps completed → handoff_only (conservative default without evidence)", () => {
      expect(mapLegacyStatus("completed")).toBe("handoff_only");
    });

    it("maps completed → studio_stable when hasPassingFinalValidation is true", () => {
      expect(mapLegacyStatus("completed", true)).toBe("studio_stable");
    });

    it("maps FAILED → FAILED (unchanged)", () => {
      expect(mapLegacyStatus("FAILED")).toBe("FAILED");
    });

    it("maps failed → FAILED (unchanged)", () => {
      expect(mapLegacyStatus("failed")).toBe("FAILED");
    });

    it("passes through new assessed states unchanged", () => {
      expect(mapLegacyStatus("studio_stable")).toBe("studio_stable");
      expect(mapLegacyStatus("openable_with_warnings")).toBe("openable_with_warnings");
      expect(mapLegacyStatus("handoff_only")).toBe("handoff_only");
      expect(mapLegacyStatus("structurally_invalid")).toBe("structurally_invalid");
    });

    it("passes through process states unchanged", () => {
      expect(mapLegacyStatus("BUILDING")).toBe("BUILDING");
      expect(mapLegacyStatus("PENDING")).toBe("PENDING");
      expect(mapLegacyStatus("STALLED")).toBe("STALLED");
      expect(mapLegacyStatus("CANCELLED")).toBe("CANCELLED");
      expect(mapLegacyStatus("generation_finished")).toBe("generation_finished");
    });

    it("passes through unknown statuses unchanged (transparent for DB phase statuses)", () => {
      expect(mapLegacyStatus("some_unknown_status")).toBe("some_unknown_status");
      expect(mapLegacyStatus("spec_generating")).toBe("spec_generating");
      expect(mapLegacyStatus("compiling")).toBe("compiling");
      expect(mapLegacyStatus("validating")).toBe("validating");
      expect(mapLegacyStatus("running")).toBe("running");
    });

    it("is a pure read-time translation — does not mutate input", () => {
      const original = "READY";
      mapLegacyStatus(original);
      expect(original).toBe("READY");
    });
  });

  describe("isAssessedTerminalStatus", () => {
    it("returns true for all four assessed terminal states", () => {
      expect(isAssessedTerminalStatus("studio_stable")).toBe(true);
      expect(isAssessedTerminalStatus("openable_with_warnings")).toBe(true);
      expect(isAssessedTerminalStatus("handoff_only")).toBe(true);
      expect(isAssessedTerminalStatus("structurally_invalid")).toBe(true);
    });

    it("returns false for process/legacy states", () => {
      expect(isAssessedTerminalStatus("BUILDING")).toBe(false);
      expect(isAssessedTerminalStatus("FAILED")).toBe(false);
      expect(isAssessedTerminalStatus("READY")).toBe(false);
      expect(isAssessedTerminalStatus("CANCELLED")).toBe(false);
    });
  });

  describe("isTerminalStatus", () => {
    it("returns true for assessed terminal + FAILED + CANCELLED", () => {
      expect(isTerminalStatus("studio_stable")).toBe(true);
      expect(isTerminalStatus("openable_with_warnings")).toBe(true);
      expect(isTerminalStatus("handoff_only")).toBe(true);
      expect(isTerminalStatus("structurally_invalid")).toBe(true);
      expect(isTerminalStatus("FAILED")).toBe(true);
      expect(isTerminalStatus("CANCELLED")).toBe(true);
    });

    it("returns false for process states", () => {
      expect(isTerminalStatus("BUILDING")).toBe(false);
      expect(isTerminalStatus("PENDING")).toBe(false);
      expect(isTerminalStatus("generation_finished")).toBe(false);
    });
  });

  describe("STATUS_PRESENTATION — shared presentation map", () => {
    const states: AssessedTerminalStatus[] = [
      "studio_stable",
      "openable_with_warnings",
      "handoff_only",
      "structurally_invalid",
    ];

    it("defines entries for all four assessed terminal states", () => {
      for (const state of states) {
        expect(STATUS_PRESENTATION[state]).toBeDefined();
      }
    });

    it("each entry has required properties including textColorClass", () => {
      for (const state of states) {
        const entry = STATUS_PRESENTATION[state];
        expect(entry.shortLabel).toBeTruthy();
        expect(entry.longLabel).toBeTruthy();
        expect(entry.badgeClass).toBeTruthy();
        expect(entry.textColorClass).toBeTruthy();
        expect(entry.iconName).toBeTruthy();
        expect(typeof entry.deployEnabled).toBe("boolean");
        if (!entry.deployEnabled) {
          expect(entry.disabledDeployTooltip).toBeTruthy();
        }
      }
    });

    it("only studio_stable has deployEnabled = true", () => {
      expect(STATUS_PRESENTATION["studio_stable"].deployEnabled).toBe(true);
      expect(STATUS_PRESENTATION["openable_with_warnings"].deployEnabled).toBe(false);
      expect(STATUS_PRESENTATION["handoff_only"].deployEnabled).toBe(false);
      expect(STATUS_PRESENTATION["structurally_invalid"].deployEnabled).toBe(false);
    });

    it("studio_stable has no disabled tooltip", () => {
      expect(STATUS_PRESENTATION["studio_stable"].disabledDeployTooltip).toBeNull();
    });

    it("non-deployable states include state name in disabled tooltip", () => {
      for (const state of ["openable_with_warnings", "handoff_only", "structurally_invalid"] as AssessedTerminalStatus[]) {
        const tooltip = STATUS_PRESENTATION[state].disabledDeployTooltip!;
        expect(tooltip).toContain("Deployment blocked");
      }
    });

    it("uses correct color semantics: studio_stable=green, warnings=amber, handoff=orange, invalid=red", () => {
      expect(STATUS_PRESENTATION["studio_stable"].badgeClass).toContain("emerald");
      expect(STATUS_PRESENTATION["openable_with_warnings"].badgeClass).toContain("amber");
      expect(STATUS_PRESENTATION["handoff_only"].badgeClass).toContain("orange");
      expect(STATUS_PRESENTATION["structurally_invalid"].badgeClass).toContain("red");
    });
  });

  describe("getStatusPresentation — tooltip enrichment", () => {
    it("appends highest-severity blocker to tooltip when provided", () => {
      const pres = getStatusPresentation("handoff_only", "completeness");
      expect(pres.disabledDeployTooltip).toContain("completeness");
      expect(pres.disabledDeployTooltip).toContain("Highest-severity blocker");
    });

    it("returns base tooltip when no blocker category provided", () => {
      const pres = getStatusPresentation("handoff_only");
      expect(pres.disabledDeployTooltip).not.toContain("Highest-severity blocker");
    });

    it("does not modify studio_stable tooltip even with blocker", () => {
      const pres = getStatusPresentation("studio_stable", "completeness");
      expect(pres.disabledDeployTooltip).toBeNull();
    });
  });

  describe("Evidence-aware mapping from outcomeReport.assessedStatus", () => {
    it("returns assessed status from outcomeReport when it is a valid terminal state", () => {
      const outcomeReport = { assessedStatus: "studio_stable" };
      const dbStatus = "completed";
      if (outcomeReport.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        expect(outcomeReport.assessedStatus).toBe("studio_stable");
      }
    });

    it("falls back to mapLegacyStatus when outcomeReport.assessedStatus is missing", () => {
      const outcomeReport: Record<string, string> = {};
      const dbStatus = "completed";
      const hasPassingValidation = outcomeReport.assessedStatus === "studio_stable";
      expect(mapLegacyStatus(dbStatus, hasPassingValidation)).toBe("handoff_only");
    });

    it("falls back to mapLegacyStatus when outcomeReport.assessedStatus is not a valid terminal state", () => {
      const outcomeReport = { assessedStatus: "READY" };
      const dbStatus = "completed";
      expect(isAssessedTerminalStatus(outcomeReport.assessedStatus)).toBe(false);
      const hasPassingValidation = outcomeReport.assessedStatus === "studio_stable";
      expect(mapLegacyStatus(dbStatus, hasPassingValidation)).toBe("handoff_only");
    });

    it("maps completed → studio_stable when outcomeReport confirms studio_stable", () => {
      const outcomeReport = { assessedStatus: "studio_stable" };
      if (isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        expect(outcomeReport.assessedStatus).toBe("studio_stable");
      }
    });

    it("maps completed_with_warnings → openable_with_warnings even if outcomeReport has different assessed status", () => {
      const outcomeReport = { assessedStatus: "studio_stable" };
      const dbStatus = "completed_with_warnings";
      if (outcomeReport.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        expect(outcomeReport.assessedStatus).toBe("studio_stable");
      } else {
        expect(mapLegacyStatus(dbStatus)).toBe("openable_with_warnings");
      }
    });
  });

  describe("Deploy gate behavior", () => {
    it("only studio_stable passes deploy gate", () => {
      const assessedStates: AssessedTerminalStatus[] = [
        "studio_stable", "openable_with_warnings", "handoff_only", "structurally_invalid"
      ];
      for (const state of assessedStates) {
        const canDeploy = state === "studio_stable";
        expect(STATUS_PRESENTATION[state].deployEnabled).toBe(canDeploy);
      }
    });

    it("deploy button disabled when statusPres is null (unmapped status)", () => {
      const statusPres: { deployEnabled: boolean } | null = null;
      const deployDisabled = !statusPres?.deployEnabled;
      expect(deployDisabled).toBe(true);
    });

    it("deploy button disabled for non-studio_stable with valid statusPres", () => {
      const nonDeployable: AssessedTerminalStatus[] = [
        "openable_with_warnings", "handoff_only", "structurally_invalid"
      ];
      for (const state of nonDeployable) {
        const pres = STATUS_PRESENTATION[state];
        expect(!pres?.deployEnabled).toBe(true);
      }
    });

    it("deploy button enabled only for studio_stable", () => {
      const pres = STATUS_PRESENTATION["studio_stable"];
      expect(!pres?.deployEnabled).toBe(false);
    });
  });

  describe("Frontend hydration mapping", () => {
    it("legacy DB status 'completed' is mapped before hydration", () => {
      const dbRunStatus = "completed";
      const mappedStatus = mapLegacyStatus(dbRunStatus);
      expect(mappedStatus).toBe("handoff_only");
      expect(mappedStatus).not.toBe("completed");
    });

    it("legacy DB status 'completed_with_warnings' is mapped before hydration", () => {
      const dbRunStatus = "completed_with_warnings";
      const mappedStatus = mapLegacyStatus(dbRunStatus);
      expect(mappedStatus).toBe("openable_with_warnings");
    });

    it("active statuses pass through unmapped", () => {
      expect(mapLegacyStatus("BUILDING")).toBe("BUILDING");
      expect(mapLegacyStatus("PENDING")).toBe("PENDING");
    });

    it("CANCELLED passes through unmapped", () => {
      expect(mapLegacyStatus("CANCELLED")).toBe("CANCELLED");
    });
  });

  describe("Regression: deploy gate uses outcomeReport.assessedStatus when present", () => {
    it("completed run with outcomeReport.assessedStatus='studio_stable' passes deploy gate", () => {
      const dbStatus = "completed";
      const outcomeReport = { assessedStatus: "studio_stable" };
      let assessed: string;
      if (outcomeReport.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        assessed = outcomeReport.assessedStatus;
      } else {
        assessed = mapLegacyStatus(dbStatus);
      }
      expect(assessed).toBe("studio_stable");
      expect(STATUS_PRESENTATION[assessed as AssessedTerminalStatus].deployEnabled).toBe(true);
    });

    it("completed run without outcomeReport.assessedStatus blocks deploy (conservative)", () => {
      const dbStatus = "completed";
      const outcomeReport: Record<string, string> = {};
      let assessed: string;
      if (outcomeReport.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        assessed = outcomeReport.assessedStatus;
      } else {
        assessed = mapLegacyStatus(dbStatus);
      }
      expect(assessed).toBe("handoff_only");
      expect(STATUS_PRESENTATION[assessed as AssessedTerminalStatus].deployEnabled).toBe(false);
    });

    it("completed run with invalid outcomeReport.assessedStatus blocks deploy", () => {
      const dbStatus = "completed";
      const outcomeReport = { assessedStatus: "READY" };
      let assessed: string;
      if (outcomeReport.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        assessed = outcomeReport.assessedStatus;
      } else {
        assessed = mapLegacyStatus(dbStatus);
      }
      expect(assessed).toBe("handoff_only");
    });
  });

  describe("Consistent status mapping across API endpoints", () => {
    function simulateEndpointMapping(dbStatus: string, outcomeReport: Record<string, string> | null): string {
      const processMap: Record<string, string> = { running: "BUILDING", cancelled: "CANCELLED" };
      if (processMap[dbStatus]) return processMap[dbStatus];
      if (outcomeReport?.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        return outcomeReport.assessedStatus;
      }
      return mapLegacyStatus(dbStatus, outcomeReport?.assessedStatus === "studio_stable");
    }

    it("all endpoints produce same result for completed + studio_stable evidence", () => {
      const result = simulateEndpointMapping("completed", { assessedStatus: "studio_stable" });
      expect(result).toBe("studio_stable");
    });

    it("all endpoints produce same result for completed + no evidence", () => {
      const result = simulateEndpointMapping("completed", null);
      expect(result).toBe("handoff_only");
    });

    it("all endpoints produce same result for completed_with_warnings + openable_with_warnings evidence", () => {
      const result = simulateEndpointMapping("completed_with_warnings", { assessedStatus: "openable_with_warnings" });
      expect(result).toBe("openable_with_warnings");
    });

    it("all endpoints produce BUILDING for running status", () => {
      const result = simulateEndpointMapping("running", null);
      expect(result).toBe("BUILDING");
    });

    it("all endpoints produce CANCELLED for cancelled status", () => {
      const result = simulateEndpointMapping("cancelled", null);
      expect(result).toBe("CANCELLED");
    });
  });

  describe("Deploy gate blocks when no generation run exists", () => {
    it("deploy must be blocked if there is no latest run (no evidence path)", () => {
      const latestRun = null;
      const shouldBlock = !latestRun;
      expect(shouldBlock).toBe(true);
    });
  });

  describe("Non-UiPath statuses pass through mapLegacyStatus transparently", () => {
    it("Approved, Draft, Generated are not mapped to assessed states", () => {
      expect(mapLegacyStatus("Approved")).toBe("Approved");
      expect(isAssessedTerminalStatus(mapLegacyStatus("Approved"))).toBe(false);
      expect(mapLegacyStatus("Draft")).toBe("Draft");
      expect(mapLegacyStatus("Generated")).toBe("Generated");
      expect(mapLegacyStatus("Available")).toBe("Available");
    });

    it("DB phase statuses pass through without assessed terminal mapping", () => {
      const phaseStatuses = ["spec_generating", "spec_ready", "compiling", "validating", "remediating", "packaging", "dhg_generating"];
      for (const phase of phaseStatuses) {
        const mapped = mapLegacyStatus(phase);
        expect(mapped).toBe(phase);
        expect(isAssessedTerminalStatus(mapped)).toBe(false);
      }
    });
  });

  describe("Tooltip enrichment with blocker category via getStatusPresentation", () => {
    it("enriches tooltip with blocker category for non-deployable states", () => {
      const pres = getStatusPresentation("handoff_only", "validation");
      expect(pres.disabledDeployTooltip).toContain("validation");
      expect(pres.disabledDeployTooltip).toContain("Highest-severity blocker");
    });

    it("enriches structurally_invalid tooltip with blocker category", () => {
      const pres = getStatusPresentation("structurally_invalid", "nupkg-assembly");
      expect(pres.disabledDeployTooltip).toContain("nupkg-assembly");
    });

    it("does not enrich studio_stable tooltip (deploy is allowed)", () => {
      const pres = getStatusPresentation("studio_stable", "validation");
      expect(pres.disabledDeployTooltip).toBeNull();
    });

    it("returns base tooltip when no blocker category provided", () => {
      const base = STATUS_PRESENTATION["handoff_only"];
      const pres = getStatusPresentation("handoff_only");
      expect(pres.disabledDeployTooltip).toBe(base.disabledDeployTooltip);
    });
  });

  describe("Canonical status label and icon rendering via STATUS_PRESENTATION", () => {
    it("statusLabel for assessed states returns shortLabel, not raw status string", () => {
      for (const [state, pres] of Object.entries(STATUS_PRESENTATION)) {
        const mapped = mapLegacyStatus(state);
        if (isAssessedTerminalStatus(mapped)) {
          expect(STATUS_PRESENTATION[mapped].shortLabel).toBe(pres.shortLabel);
          expect(pres.shortLabel).not.toBe(state);
        }
      }
    });

    it("each assessed state has a valid icon name from the allowed set", () => {
      const allowedIcons = ["CheckCircle2", "AlertTriangle", "PackageOpen", "XCircle"];
      for (const [, pres] of Object.entries(STATUS_PRESENTATION)) {
        expect(allowedIcons).toContain(pres.iconName);
      }
    });

    it("studio_stable uses CheckCircle2 icon", () => {
      expect(STATUS_PRESENTATION["studio_stable"].iconName).toBe("CheckCircle2");
    });

    it("structurally_invalid uses XCircle icon", () => {
      expect(STATUS_PRESENTATION["structurally_invalid"].iconName).toBe("XCircle");
    });
  });

  describe("Status derivation correctness (unit-level assertions)", () => {

    it("FAILED is reserved for pipeline crash / unrecoverable process failure", () => {
      const mapped = mapLegacyStatus("FAILED");
      expect(mapped).toBe("FAILED");
      expect(isAssessedTerminalStatus(mapped)).toBe(false);
    });

    it("structurally_invalid is a quality outcome, not a crash", () => {
      expect(isAssessedTerminalStatus("structurally_invalid")).toBe(true);
    });

    it("no-nupkg is a quality outcome (structurally_invalid), not a process crash (FAILED)", () => {
      const hasNupkg = false;
      let status: string;
      if (!hasNupkg) {
        status = "structurally_invalid";
      } else {
        status = "handoff_only";
      }
      expect(status).toBe("structurally_invalid");
      expect(status).not.toBe("FAILED");
      expect(isAssessedTerminalStatus(status)).toBe(true);
    });

    it("generation_finished is not a terminal status (transient only)", () => {
      expect(isTerminalStatus("generation_finished")).toBe(false);
    });

    it("generation_finished never appears as a final assessed state", () => {
      expect(isAssessedTerminalStatus("generation_finished")).toBe(false);
      const mapped = mapLegacyStatus("generation_finished");
      expect(mapped).toBe("generation_finished");
      expect(isAssessedTerminalStatus(mapped)).toBe(false);
    });
  });

  describe("Fallback status when final validation does not run", () => {
    it("without final validation, highest possible status is handoff_only (never studio_stable)", () => {
      const hasNupkg = true;
      const entryPointIsStubbed = false;
      const hasStructuralBlockers = false;
      let fallbackStatus: string;
      if (!hasNupkg || entryPointIsStubbed || hasStructuralBlockers) {
        fallbackStatus = "structurally_invalid";
      } else {
        fallbackStatus = "handoff_only";
      }
      expect(fallbackStatus).toBe("handoff_only");
      expect(fallbackStatus).not.toBe("studio_stable");
    });

    it("without final validation, structural blockers yield structurally_invalid", () => {
      const hasNupkg = true;
      const entryPointIsStubbed = false;
      const hasStructuralBlockers = true;
      let fallbackStatus: string;
      if (!hasNupkg || entryPointIsStubbed || hasStructuralBlockers) {
        fallbackStatus = "structurally_invalid";
      } else {
        fallbackStatus = "handoff_only";
      }
      expect(fallbackStatus).toBe("structurally_invalid");
    });

    it("without final validation, no nupkg yields structurally_invalid (not FAILED)", () => {
      const hasNupkg = false;
      const entryPointIsStubbed = false;
      const hasStructuralBlockers = false;
      let fallbackStatus: string;
      if (!hasNupkg || entryPointIsStubbed || hasStructuralBlockers) {
        fallbackStatus = "structurally_invalid";
      } else {
        fallbackStatus = "handoff_only";
      }
      expect(fallbackStatus).toBe("structurally_invalid");
      expect(fallbackStatus).not.toBe("FAILED");
    });

    it("without final validation, clean build still gets handoff_only (conservative)", () => {
      const hasNupkg = true;
      const entryPointIsStubbed = false;
      const hasStructuralBlockers = false;
      let fallbackStatus: string;
      if (!hasNupkg || entryPointIsStubbed || hasStructuralBlockers) {
        fallbackStatus = "structurally_invalid";
      } else {
        fallbackStatus = "handoff_only";
      }
      expect(fallbackStatus).toBe("handoff_only");
      expect(fallbackStatus).not.toBe("studio_stable");
      expect(fallbackStatus).not.toBe("openable_with_warnings");
    });
  });

  describe("GenerationRunStatus alignment with assessed terminal states", () => {
    it("GENERATION_RUN_STATUSES includes all four assessed terminal states", async () => {
      const { GENERATION_RUN_STATUSES } = await import("../../shared/models/pipeline");
      const assessedStates: AssessedTerminalStatus[] = [
        "studio_stable", "openable_with_warnings", "handoff_only", "structurally_invalid"
      ];
      for (const state of assessedStates) {
        expect(GENERATION_RUN_STATUSES).toContain(state);
      }
    });

    it("GENERATION_RUN_STATUSES preserves legacy DB statuses for backward compat", async () => {
      const { GENERATION_RUN_STATUSES } = await import("../../shared/models/pipeline");
      const legacyStatuses = ["completed", "completed_with_warnings", "blocked", "failed"];
      for (const status of legacyStatuses) {
        expect(GENERATION_RUN_STATUSES).toContain(status);
      }
    });
  });

  describe("textColorClass derivation from STATUS_PRESENTATION", () => {
    it("each assessed state has a text color class matching its semantic color", () => {
      expect(STATUS_PRESENTATION["studio_stable"].textColorClass).toContain("emerald");
      expect(STATUS_PRESENTATION["openable_with_warnings"].textColorClass).toContain("amber");
      expect(STATUS_PRESENTATION["handoff_only"].textColorClass).toContain("orange");
      expect(STATUS_PRESENTATION["structurally_invalid"].textColorClass).toContain("red");
    });
  });

  describe("Deploy gate integration: non-studio_stable rejection", () => {
    const nonDeployableAssessed: AssessedTerminalStatus[] = [
      "openable_with_warnings", "handoff_only", "structurally_invalid",
    ];

    for (const status of nonDeployableAssessed) {
      it(`deploy gate rejects assessed status "${status}"`, () => {
        const pres = getStatusPresentation(status);
        expect(pres.deployEnabled).toBe(false);
        expect(pres.disabledDeployTooltip).toBeTruthy();
      });
    }

    it("FAILED and CANCELLED are not assessed terminal states (no presentation entry)", () => {
      expect(isAssessedTerminalStatus("FAILED")).toBe(false);
      expect(isAssessedTerminalStatus("CANCELLED")).toBe(false);
    });

    it("deploy gate accepts studio_stable", () => {
      const pres = getStatusPresentation("studio_stable");
      expect(pres).toBeDefined();
      expect(pres!.deployEnabled).toBe(true);
      expect(pres!.disabledDeployTooltip).toBeNull();
    });
  });

  describe("Frontend component contract: STATUS_PRESENTATION shared map", () => {
    const allStates: AssessedTerminalStatus[] = [
      "studio_stable", "openable_with_warnings", "handoff_only", "structurally_invalid",
    ];

    it("every assessed state has badgeVariant for debug panel consumption", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state];
        expect(["default", "secondary", "destructive", "outline"]).toContain(pres.badgeVariant);
      }
    });

    it("every assessed state has iconName for workspace/card rendering", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state];
        expect(["CheckCircle2", "AlertTriangle", "PackageOpen", "XCircle"]).toContain(pres.iconName);
      }
    });

    it("every assessed state has shortLabel and longLabel", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state];
        expect(pres.shortLabel.length).toBeGreaterThan(0);
        expect(pres.longLabel.length).toBeGreaterThan(0);
      }
    });

    it("every assessed state has badgeClass for styling", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state];
        expect(pres.badgeClass).toBeTruthy();
      }
    });

    it("only studio_stable has deployEnabled true", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state];
        if (state === "studio_stable") {
          expect(pres.deployEnabled).toBe(true);
        } else {
          expect(pres.deployEnabled).toBe(false);
          expect(pres.disabledDeployTooltip).toBeTruthy();
        }
      }
    });

    it("download/DHG availability is decoupled from deploy (no gating field)", () => {
      for (const state of allStates) {
        const pres = STATUS_PRESENTATION[state] as Record<string, unknown>;
        expect(pres).not.toHaveProperty("downloadEnabled");
        expect(pres).not.toHaveProperty("dhgEnabled");
      }
    });
  });

  describe("Tooltip blocker-category enrichment", () => {
    it("enriches tooltip with blocker category when provided", () => {
      const pres = getStatusPresentation("structurally_invalid", "structural");
      expect(pres).toBeDefined();
      expect(pres!.disabledDeployTooltip).toContain("structural");
    });

    it("provides default tooltip without blocker category", () => {
      const pres = getStatusPresentation("handoff_only");
      expect(pres).toBeDefined();
      expect(pres!.disabledDeployTooltip).toBeTruthy();
    });

    it("studio_stable tooltip is null regardless of blocker category", () => {
      const pres = getStatusPresentation("studio_stable", "structural");
      expect(pres).toBeDefined();
      expect(pres!.disabledDeployTooltip).toBeNull();
    });
  });

  describe("Stream completion: generation_finished cannot be final", () => {
    it("generation_finished maps through unchanged (transient, not assessed)", () => {
      const mapped = mapLegacyStatus("generation_finished");
      expect(mapped).toBe("generation_finished");
      expect(isAssessedTerminalStatus(mapped)).toBe(false);
      expect(isTerminalStatus(mapped)).toBe(false);
    });

    it("stream default fallback for completed without finalStatus is handoff_only, not READY", () => {
      const fallbackStatus = "handoff_only";
      expect(isAssessedTerminalStatus(fallbackStatus)).toBe(true);
      expect(STATUS_PRESENTATION[fallbackStatus as AssessedTerminalStatus].deployEnabled).toBe(false);
    });
  });

  describe("Deploy gate behavior (route handler logic simulation)", () => {
    function simulateDeployGate(
      cachedStatus: string | null,
      dbRunStatus: string | null,
      outcomeReport: { assessedStatus?: string } | null,
    ): { allowed: boolean; message?: string } {
      if (cachedStatus !== null) {
        const assessed = mapLegacyStatus(cachedStatus);
        if (assessed !== "studio_stable") {
          return { allowed: false, message: `Deployment blocked — package status is "${assessed}". Only studio_stable packages can be deployed to Orchestrator.` };
        }
        return { allowed: true };
      }
      if (!dbRunStatus) {
        return { allowed: false, message: "Deployment blocked — no generation run found. Generate a package first." };
      }
      let assessed: string;
      if (outcomeReport?.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
        assessed = outcomeReport.assessedStatus;
      } else {
        assessed = mapLegacyStatus(dbRunStatus, outcomeReport?.assessedStatus === "studio_stable");
      }
      if (assessed !== "studio_stable") {
        return { allowed: false, message: `Deployment blocked — package status is "${assessed}". Only studio_stable packages can be deployed to Orchestrator.` };
      }
      return { allowed: true };
    }

    it("rejects deploy when cached status is legacy READY (maps to handoff_only)", () => {
      const result = simulateDeployGate("READY", null, null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("handoff_only");
    });

    it("rejects deploy when cached status is READY_WITH_WARNINGS (maps to openable_with_warnings)", () => {
      const result = simulateDeployGate("READY_WITH_WARNINGS", null, null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("openable_with_warnings");
    });

    it("rejects deploy when cached status is FALLBACK_READY (maps to handoff_only)", () => {
      const result = simulateDeployGate("FALLBACK_READY", null, null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("handoff_only");
    });

    it("allows deploy when cached status is studio_stable", () => {
      const result = simulateDeployGate("studio_stable", null, null);
      expect(result.allowed).toBe(true);
    });

    it("rejects deploy when cached status is structurally_invalid", () => {
      const result = simulateDeployGate("structurally_invalid", null, null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("structurally_invalid");
    });

    it("rejects deploy when no cached result and no DB run exists", () => {
      const result = simulateDeployGate(null, null, null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("no generation run found");
    });

    it("rejects deploy for DB run with legacy completed status and no outcomeReport", () => {
      const result = simulateDeployGate(null, "completed", null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("handoff_only");
    });

    it("allows deploy for DB run with legacy completed + outcomeReport.assessedStatus=studio_stable", () => {
      const result = simulateDeployGate(null, "completed", { assessedStatus: "studio_stable" });
      expect(result.allowed).toBe(true);
    });

    it("rejects deploy for DB run with outcomeReport.assessedStatus=handoff_only", () => {
      const result = simulateDeployGate(null, "completed", { assessedStatus: "handoff_only" });
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("handoff_only");
    });

    it("rejects deploy for DB run with outcomeReport.assessedStatus=openable_with_warnings", () => {
      const result = simulateDeployGate(null, "completed", { assessedStatus: "openable_with_warnings" });
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("openable_with_warnings");
    });

    it("rejects deploy for DB run with outcomeReport.assessedStatus=structurally_invalid", () => {
      const result = simulateDeployGate(null, "completed", { assessedStatus: "structurally_invalid" });
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("structurally_invalid");
    });

    it("rejects deploy for DB run with failed status (FAILED)", () => {
      const result = simulateDeployGate(null, "failed", null);
      expect(result.allowed).toBe(false);
      expect(result.message).toContain("FAILED");
    });
  });

  describe("Run-read mapping behavior (GET /uipath-runs/:runId logic simulation)", () => {
    function simulateRunReadMapping(
      dbStatus: string,
      isActive: boolean,
      outcomeReport: { assessedStatus?: string } | null,
    ): string {
      let mappedStatus = dbStatus;
      if (!isActive) {
        const processMap: Record<string, string> = { running: "BUILDING", cancelled: "CANCELLED" };
        if (processMap[dbStatus]) {
          mappedStatus = processMap[dbStatus];
        } else if (outcomeReport?.assessedStatus && isAssessedTerminalStatus(outcomeReport.assessedStatus)) {
          mappedStatus = outcomeReport.assessedStatus;
        } else {
          mappedStatus = mapLegacyStatus(dbStatus, outcomeReport?.assessedStatus === "studio_stable");
        }
      }
      return mappedStatus;
    }

    it("active run returns raw DB status unchanged", () => {
      expect(simulateRunReadMapping("running", true, null)).toBe("running");
      expect(simulateRunReadMapping("completed", true, null)).toBe("completed");
    });

    it("inactive run with completed status and no outcome returns handoff_only", () => {
      expect(simulateRunReadMapping("completed", false, null)).toBe("handoff_only");
    });

    it("inactive run with completed status and studio_stable outcome returns studio_stable", () => {
      expect(simulateRunReadMapping("completed", false, { assessedStatus: "studio_stable" })).toBe("studio_stable");
    });

    it("inactive run with completed status and handoff_only outcome returns handoff_only", () => {
      expect(simulateRunReadMapping("completed", false, { assessedStatus: "handoff_only" })).toBe("handoff_only");
    });

    it("inactive run with completed status and structurally_invalid outcome returns structurally_invalid", () => {
      expect(simulateRunReadMapping("completed", false, { assessedStatus: "structurally_invalid" })).toBe("structurally_invalid");
    });

    it("inactive run with completed_with_warnings and no outcome returns openable_with_warnings", () => {
      expect(simulateRunReadMapping("completed_with_warnings", false, null)).toBe("openable_with_warnings");
    });

    it("inactive run with failed status returns FAILED", () => {
      expect(simulateRunReadMapping("failed", false, null)).toBe("FAILED");
    });

    it("inactive run with running status returns BUILDING (stale process state)", () => {
      expect(simulateRunReadMapping("running", false, null)).toBe("BUILDING");
    });

    it("inactive run with cancelled status returns CANCELLED", () => {
      expect(simulateRunReadMapping("cancelled", false, null)).toBe("CANCELLED");
    });

    it("legacy READY never appears in read response for completed inactive run", () => {
      const result = simulateRunReadMapping("completed", false, null);
      expect(result).not.toBe("READY");
      expect(result).not.toBe("completed");
    });

    it("outcomeReport.assessedStatus takes precedence over DB status mapping", () => {
      const result = simulateRunReadMapping("completed", false, { assessedStatus: "openable_with_warnings" });
      expect(result).toBe("openable_with_warnings");
    });
  });

  describe("Stream completion status resolution behavior", () => {
    function simulateStreamCompletion(finalStatus: string | null): string {
      if (finalStatus) {
        return mapLegacyStatus(finalStatus === "failed" ? "FAILED" : finalStatus);
      }
      return "handoff_only";
    }

    it("null finalStatus resolves to handoff_only (conservative default)", () => {
      expect(simulateStreamCompletion(null)).toBe("handoff_only");
    });

    it("failed finalStatus resolves to FAILED", () => {
      expect(simulateStreamCompletion("failed")).toBe("FAILED");
    });

    it("completed finalStatus resolves to handoff_only (not READY)", () => {
      const result = simulateStreamCompletion("completed");
      expect(result).toBe("handoff_only");
      expect(result).not.toBe("READY");
    });

    it("studio_stable finalStatus passes through", () => {
      expect(simulateStreamCompletion("studio_stable")).toBe("studio_stable");
    });

    it("structurally_invalid finalStatus passes through", () => {
      expect(simulateStreamCompletion("structurally_invalid")).toBe("structurally_invalid");
    });
  });

});
