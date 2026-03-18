import { describe, it, expect, beforeAll } from "vitest";
import { validateCatalog } from "../catalog/catalog-validator";
import { catalogService, type ProcessType } from "../catalog/catalog-service";
import { classifyProcessType } from "../ai-xaml-enricher";
import { readFileSync } from "fs";
import { join } from "path";

const catalogPath = join(process.cwd(), "catalog", "activity-catalog.json");

describe("Activity Catalog", () => {
  let catalog: any;

  beforeAll(() => {
    catalog = JSON.parse(readFileSync(catalogPath, "utf-8"));
    catalogService.load(catalogPath);
  });

  describe("Catalog Validator", () => {
    it("validates the bootstrap catalog successfully", () => {
      const result = validateCatalog(catalog);
      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("rejects a catalog with missing catalogVersion", () => {
      const bad = { ...catalog, catalogVersion: undefined };
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("catalogVersion"))).toBe(true);
    });

    it("rejects a catalog with empty packages", () => {
      const bad = { ...catalog, packages: [] };
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("non-empty array"))).toBe(true);
    });

    it("rejects a catalog with empty packageId", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages[0].packageId = "";
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("must not be empty"))).toBe(true);
    });

    it("rejects a catalog with duplicate packageIds", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages.push({ ...bad.packages[0] });
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("duplicate packageId"))).toBe(true);
    });

    it("rejects invalid argumentWrapper values", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages[0].activities[0].properties[0].argumentWrapper = "BadWrapper";
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("argumentWrapper"))).toBe(true);
    });

    it("validates generatedAt as ISO 8601", () => {
      const bad = { ...catalog, generatedAt: "not-a-date" };
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("ISO 8601"))).toBe(true);
    });

    it("validates studioVersion as semver", () => {
      const bad = { ...catalog, studioVersion: "not-semver" };
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("semver"))).toBe(true);
    });

    it("rejects an activity with invalid direction", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages[0].activities[0].properties[0].direction = "InvalidDir";
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("direction"))).toBe(true);
    });

    it("rejects an activity with invalid xamlSyntax", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages[0].activities[0].properties[0].xamlSyntax = "invalid";
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("xamlSyntax"))).toBe(true);
    });

    it("rejects a null catalog", () => {
      const result = validateCatalog(null);
      expect(result.valid).toBe(false);
    });

    it("rejects a package with invalid version", () => {
      const bad = JSON.parse(JSON.stringify(catalog));
      bad.packages[0].version = "not-a-version";
      const result = validateCatalog(bad);
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("version format"))).toBe(true);
    });
  });

  describe("Catalog Service - getActivitySchema", () => {
    it("returns schema for Assign", () => {
      const schema = catalogService.getActivitySchema("Assign");
      expect(schema).not.toBeNull();
      expect(schema!.activity.className).toBe("Assign");
      expect(schema!.activity.properties.length).toBeGreaterThan(0);
    });

    it("returns schema for prefixed activity ui:Click -> Click", () => {
      const schema = catalogService.getActivitySchema("ui:Click");
      expect(schema).not.toBeNull();
      expect(schema!.activity.className).toBe("Click");
      expect(schema!.packageId).toBe("UiPath.UIAutomation.Activities");
    });

    it("returns schema for unprefixed className", () => {
      const schema = catalogService.getActivitySchema("HttpClient");
      expect(schema).not.toBeNull();
      expect(schema!.activity.className).toBe("HttpClient");
      expect(schema!.packageId).toBe("UiPath.Web.Activities");
    });

    it("returns null for unknown activity", () => {
      const schema = catalogService.getActivitySchema("ui:NonexistentActivity");
      expect(schema).toBeNull();
    });

    it("returns correct properties for Assign with child-element syntax and typeArguments", () => {
      const schema = catalogService.getActivitySchema("Assign");
      expect(schema).not.toBeNull();
      const toProp = schema!.activity.properties.find(p => p.name === "To");
      expect(toProp).toBeDefined();
      expect(toProp!.xamlSyntax).toBe("child-element");
      expect(toProp!.argumentWrapper).toBe("OutArgument");
      expect(toProp!.typeArguments).toBe("x:Object");
    });
  });

  describe("Catalog Service - validateEmittedActivity", () => {
    it("detects Assign.To emitted as attribute instead of child-element", () => {
      const result = catalogService.validateEmittedActivity(
        "Assign",
        { To: "myVar", Value: "someValue" },
        []
      );
      expect(result.valid).toBe(false);
      expect(result.violations.length).toBeGreaterThan(0);
      expect(result.corrections.some(c => c.type === "move-to-child-element" && c.property === "To")).toBe(true);
      expect(result.corrections.some(c => c.type === "move-to-child-element" && c.property === "Value")).toBe(true);
    });

    it("returns valid for Assign with correct child-element usage", () => {
      const result = catalogService.validateEmittedActivity(
        "Assign",
        {},
        ["To", "Assign.To", "Value", "Assign.Value"]
      );
      expect(result.valid).toBe(true);
      expect(result.violations).toHaveLength(0);
    });

    it("returns valid for Click with attribute properties", () => {
      const result = catalogService.validateEmittedActivity(
        "ui:Click",
        { ClickType: "Single", TimeoutMS: "30000" },
        []
      );
      expect(result.valid).toBe(true);
    });

    it("returns valid for unknown activity", () => {
      const result = catalogService.validateEmittedActivity(
        "ui:UnknownActivity",
        { SomeProp: "value" },
        []
      );
      expect(result.valid).toBe(true);
    });

    it("detects missing required properties", () => {
      const result = catalogService.validateEmittedActivity(
        "ui:KillProcess",
        {},
        []
      );
      expect(result.valid).toBe(false);
      expect(result.violations.some(v => v.includes("ProcessName"))).toBe(true);
      expect(result.corrections.some(c => c.type === "add-missing-required")).toBe(true);
    });
  });

  describe("Catalog Service - buildActivityPalette", () => {
    it("returns activities for api-integration processType", () => {
      const palette = catalogService.buildActivityPalette("api-integration");
      expect(palette.length).toBeGreaterThan(0);
      const classNames = palette.map(p => p.className);
      expect(classNames).toContain("HttpClient");
      expect(classNames).toContain("DeserializeJson");
      expect(classNames).toContain("Assign");
    });

    it("returns UI activities for attended-ui processType", () => {
      const palette = catalogService.buildActivityPalette("attended-ui");
      expect(palette.length).toBeGreaterThan(0);
      const classNames = palette.map(p => p.className);
      expect(classNames).toContain("Click");
      expect(classNames).toContain("TypeInto");
    });

    it("returns document processing activities for document-processing type", () => {
      const palette = catalogService.buildActivityPalette("document-processing");
      const classNames = palette.map(p => p.className);
      expect(classNames).toContain("DigitizeDocument");
      expect(classNames).toContain("ClassifyDocument");
      expect(classNames).toContain("Assign");
    });

    it("returns orchestration activities for orchestration type", () => {
      const palette = catalogService.buildActivityPalette("orchestration");
      const classNames = palette.map(p => p.className);
      expect(classNames).toContain("AddQueueItem");
      expect(classNames).toContain("GetTransactionItem");
      expect(classNames).toContain("SetTransactionStatus");
    });

    it("general processType returns broad palette", () => {
      const palette = catalogService.buildActivityPalette("general");
      expect(palette.length).toBeGreaterThan(10);
    });

    it("each palette entry has required fields including xamlSyntax", () => {
      const palette = catalogService.buildActivityPalette("general");
      for (const entry of palette) {
        expect(entry.className).toBeTruthy();
        expect(entry.displayName).toBeTruthy();
        expect(Array.isArray(entry.properties)).toBe(true);
        for (const prop of entry.properties) {
          expect(["attribute", "child-element"]).toContain(prop.xamlSyntax);
        }
      }
    });
  });

  describe("Catalog Service - getConfirmedVersion", () => {
    it("returns version for known packages", () => {
      const version = catalogService.getConfirmedVersion("UiPath.System.Activities");
      expect(version).toBe("23.10.3");
    });

    it("returns version for UiPath.UIAutomation.Activities", () => {
      const version = catalogService.getConfirmedVersion("UiPath.UIAutomation.Activities");
      expect(version).toBe("23.10.8");
    });

    it("returns null for unknown packages", () => {
      const version = catalogService.getConfirmedVersion("UiPath.NonExistent.Package");
      expect(version).toBeNull();
    });

    it("returns version for System.Activities (Assign/Throw)", () => {
      const version = catalogService.getConfirmedVersion("System.Activities");
      expect(version).toBe("4.0.0");
    });
  });

  describe("Catalog Service - getPackageForActivity", () => {
    it("returns package for Click", () => {
      const pkg = catalogService.getPackageForActivity("ui:Click");
      expect(pkg).toBe("UiPath.UIAutomation.Activities");
    });

    it("returns package for HttpClient", () => {
      const pkg = catalogService.getPackageForActivity("HttpClient");
      expect(pkg).toBe("UiPath.Web.Activities");
    });

    it("returns null for unknown activity", () => {
      const pkg = catalogService.getPackageForActivity("ui:NonExistent");
      expect(pkg).toBeNull();
    });
  });

  describe("Catalog Service - getActivitiesForPackage", () => {
    it("returns activities for UiPath.UIAutomation.Activities", () => {
      const activities = catalogService.getActivitiesForPackage("UiPath.UIAutomation.Activities");
      expect(activities.length).toBeGreaterThan(0);
      const classNames = activities.map(a => a.className);
      expect(classNames).toContain("Click");
      expect(classNames).toContain("TypeInto");
    });

    it("returns empty for unknown package", () => {
      const activities = catalogService.getActivitiesForPackage("Unknown.Package");
      expect(activities).toHaveLength(0);
    });
  });

  describe("Process Type Classification", () => {
    it("classifies API-heavy content as api-integration", () => {
      const result = classifyProcessType(
        "This process uses REST API endpoints to fetch JSON data from the web service",
        []
      );
      expect(result).toBe("api-integration");
    });

    it("classifies document processing content", () => {
      const result = classifyProcessType(
        "Use intelligent OCR to digitize the document and extract data from PDF invoices",
        []
      );
      expect(result).toBe("document-processing");
    });

    it("classifies orchestration content", () => {
      const result = classifyProcessType(
        "Get transaction from queue and process each item using REFramework dispatcher performer pattern",
        []
      );
      expect(result).toBe("orchestration");
    });

    it("classifies unattended UI content", () => {
      const result = classifyProcessType(
        "Click the button and type into the field, get text from browser using selectors for scheduled background process",
        []
      );
      expect(result).toBe("unattended-ui");
    });

    it("defaults to general for non-specific content", () => {
      const result = classifyProcessType(
        "Process the data and generate a report",
        []
      );
      expect(result).toBe("general");
    });
  });

  describe("Catalog loading edge cases", () => {
    it("isLoaded returns true after successful load", () => {
      expect(catalogService.isLoaded()).toBe(true);
    });
  });
});
