import { describe, it, expect, beforeAll, afterEach } from "vitest";
import {
  getFilteredSchema,
  getAdoptionReport,
  getStageManifest,
  resetLookupCounters,
  registerStage,
  rejectionDetailMessage,
  type FilteredSchemaResult,
} from "../catalog/filtered-schema-lookup";
import { catalogService } from "../catalog/catalog-service";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

describe("Catalog Filter Adoption", () => {
  beforeAll(() => {
    catalogService.load();
  });

  afterEach(() => {
    resetLookupCounters();
  });

  describe("filtered schema lookup", () => {
    it("returns approved for a valid, emission-approved, non-deprecated activity", () => {
      if (!catalogService.isLoaded()) return;
      const result = getFilteredSchema("Assign", "quality-gate");
      expect(result.status).toBe("approved");
      if (result.status === "approved") {
        expect(result.schema.activity.className).toBe("Assign");
      }
    });

    it("returns unknown-activity for a non-existent activity", () => {
      const result = getFilteredSchema("CompletelyFakeActivity12345", "quality-gate");
      expect(result.status).toBe("rejected");
      if (result.status === "rejected") {
        expect(result.reason).toBe("unknown-activity");
        expect(result.activityName).toBe("CompletelyFakeActivity12345");
      }
    });

    it("returns deprecated-activity for a deprecated activity", () => {
      if (!catalogService.isLoaded()) return;
      const catalog = catalogService.getCatalog();
      if (!catalog) return;

      let deprecatedActivity: string | null = null;
      for (const pkg of catalog.packages) {
        for (const act of pkg.activities) {
          if (act.isDeprecated) {
            deprecatedActivity = act.className;
            break;
          }
        }
        if (deprecatedActivity) break;
      }

      if (!deprecatedActivity) {
        console.log("No deprecated activities in catalog — skipping test");
        return;
      }

      const result = getFilteredSchema(deprecatedActivity, "quality-gate");
      expect(result.status).toBe("rejected");
      if (result.status === "rejected") {
        expect(result.reason).toBe("deprecated-activity");
      }
    });

    it("returns non-emission-approved-activity for a non-approved activity", () => {
      if (!catalogService.isLoaded()) return;
      const catalog = catalogService.getCatalog();
      if (!catalog) return;

      let nonApprovedActivity: string | null = null;
      for (const pkg of catalog.packages) {
        for (const act of pkg.activities) {
          if (!act.emissionApproved && !act.isDeprecated) {
            nonApprovedActivity = act.className;
            break;
          }
        }
        if (nonApprovedActivity) break;
      }

      if (!nonApprovedActivity) {
        console.log("No non-emission-approved activities in catalog — skipping test");
        return;
      }

      const result = getFilteredSchema(nonApprovedActivity, "quality-gate");
      expect(result.status).toBe("rejected");
      if (result.status === "rejected") {
        expect(result.reason).toBe("non-emission-approved-activity");
      }
    });

    it("tracks lookup counters per stage", () => {
      getFilteredSchema("CompletelyFakeActivity12345", "quality-gate");
      getFilteredSchema("Assign", "quality-gate");
      const report = getAdoptionReport();
      const qgEntry = report.find(e => e.stage === "quality-gate");
      expect(qgEntry).toBeDefined();
      expect(qgEntry!.adopted).toBe(true);
      expect(qgEntry!.lookups.total).toBeGreaterThanOrEqual(2);
    });
  });

  describe("rejection detail messages", () => {
    it("produces distinct messages for each rejection reason", () => {
      const deprecated = rejectionDetailMessage("deprecated-activity", "OldActivity", 5);
      expect(deprecated).toContain("deprecated");
      expect(deprecated).toContain("OldActivity");
      expect(deprecated).toContain("Line 5");

      const nonApproved = rejectionDetailMessage("non-emission-approved-activity", "TestAct");
      expect(nonApproved).toContain("non-emission-approved");

      const targetIncompat = rejectionDetailMessage("target-incompatible-activity", "WinOnlyAct");
      expect(targetIncompat).toContain("target-incompatible");

      const unknown = rejectionDetailMessage("unknown-activity", "FakeAct");
      expect(unknown).toContain("unknown");
      expect(unknown).toContain("hallucinated");
    });
  });

  describe("stage manifest and adoption report", () => {
    it("manifest includes all required pipeline stages", () => {
      const manifest = getStageManifest();
      expect(manifest).toContain("quality-gate");
      expect(manifest).toContain("deterministic-validators");
      expect(manifest).toContain("iterative-llm-corrector");
      expect(manifest).toContain("workflow-tree-assembler");
      expect(manifest).toContain("xaml-compliance");
      expect(manifest).toContain("executable-path-validator");
      expect(manifest).toContain("post-emission-dependency-analyzer");
    });

    it("all manifest stages are adopted (registered)", async () => {
      await import("../uipath-quality-gate");
      await import("../meta-validation/deterministic-validators");
      await import("../meta-validation/iterative-llm-corrector");
      await import("../workflow-tree-assembler");
      await import("../xaml/xaml-compliance");
      await import("../xaml/executable-path-validator");
      await import("../post-emission-dependency-analyzer");

      const report = getAdoptionReport();
      const unadopted = report.filter(e => !e.adopted);
      if (unadopted.length > 0) {
        console.error("Unadopted stages:", unadopted.map(e => e.stage));
      }
      expect(unadopted).toHaveLength(0);
    });

    it("adoption report has correct structure", () => {
      registerStage("quality-gate");
      getFilteredSchema("Assign", "quality-gate");
      const report = getAdoptionReport();

      for (const entry of report) {
        expect(entry).toHaveProperty("stage");
        expect(entry).toHaveProperty("adopted");
        expect(entry).toHaveProperty("lookups");
        expect(entry.lookups).toHaveProperty("total");
        expect(entry.lookups).toHaveProperty("approved");
        expect(entry.lookups).toHaveProperty("deprecated");
        expect(entry.lookups).toHaveProperty("nonEmissionApproved");
        expect(entry.lookups).toHaveProperty("targetIncompatible");
        expect(entry.lookups).toHaveProperty("unknown");
      }
    });
  });

  describe("grep-based bypass detection", () => {
    it("no direct catalogService.getActivitySchema() usage outside allowlisted files", () => {
      const ALLOWLISTED_FILES = new Set([
        "catalog-service.ts",
        "filtered-schema-lookup.ts",
        "prompt-guidance-filter.ts",
        "emission-gate.ts",
        "xaml-template-builder.ts",
        "spec-validator.ts",
        "catalog-enrichment.ts",
        "catalog-generator.ts",
        "catalog-validator.ts",
        "metadata-service.ts",
        "metadata-refresher.ts",
        "metadata-schemas.ts",
        "activity-definitions.ts",
        "type-compatibility-validator.ts",
        "required-property-enforcer.ts",
        "package-assembler.ts",
        "xaml-generator.ts",
        "uipath-activity-registry.ts",
        "uipath-pipeline.ts",
        "uipath-quality-gate.ts",
        "xaml-compliance.ts",
        "executable-path-validator.ts",
      ]);

      const serverDir = join(process.cwd(), "server");
      const violations: string[] = [];

      function scanDir(dir: string): void {
        const entries = readdirSync(dir);
        for (const entry of entries) {
          const fullPath = join(dir, entry);
          const stat = statSync(fullPath);
          if (stat.isDirectory()) {
            if (entry === "__tests__" || entry === "node_modules") continue;
            scanDir(fullPath);
          } else if (entry.endsWith(".ts") && !entry.endsWith(".test.ts") && !entry.endsWith(".spec.ts")) {
            if (ALLOWLISTED_FILES.has(entry)) continue;

            const content = readFileSync(fullPath, "utf-8");
            const lines = content.split("\n");
            for (let i = 0; i < lines.length; i++) {
              if (lines[i].includes("catalogService.getActivitySchema(")) {
                violations.push(`${fullPath}:${i + 1}: direct catalogService.getActivitySchema() usage`);
              }
              if (/ACTIVITY_REGISTRY\[/.test(lines[i]) && !lines[i].trim().startsWith("//")) {
                violations.push(`${fullPath}:${i + 1}: direct ACTIVITY_REGISTRY[] usage`);
              }
            }
          }
        }
      }

      scanDir(serverDir);

      if (violations.length > 0) {
        console.error("Direct catalogService.getActivitySchema() bypass detected:\n" + violations.join("\n"));
      }
      expect(violations).toHaveLength(0);
    });
  });
});
