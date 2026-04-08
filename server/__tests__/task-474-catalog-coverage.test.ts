import { describe, it, expect, beforeAll } from "vitest";
import { catalogService } from "../catalog/catalog-service";
import { GUARANTEED_ACTIVITY_PREFIX_MAP } from "../xaml/xaml-compliance";
import { LEGACY_TO_MODERN_ALIAS_MAP, getLegacyToModernAliasMap } from "../xaml/generator-registry";
import { ACTIVITY_REGISTRY } from "../uipath-activity-registry";
import { runEmissionGate } from "../emission-gate";
import { join } from "path";
import { readFileSync } from "fs";

function makeXaml(bodyXml: string): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<Activity mc:Ignorable="sap sap2010 sads" x:Class="TestWorkflow"
  xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:ui="http://schemas.uipath.com/workflow/activities"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
  xmlns:scg="clr-namespace:System.Collections.Generic;assembly=mscorlib"
  xmlns:s="clr-namespace:System;assembly=mscorlib">
  <Sequence>
    ${bodyXml}
  </Sequence>
</Activity>`;
}

describe("Task 474: Activity catalog coverage and modern UI Automation activities", () => {
  beforeAll(() => {
    const catalogPath = join(process.cwd(), "catalog", "activity-catalog.json");
    catalogService.load(catalogPath);
  });

  const MODERN_ACTIVITIES = ["NClick", "NTypeInto", "NGetText", "NSelectItem", "NCheckState", "NApplicationCard"];

  const LEGACY_WITH_PREFER_MODERN: Record<string, string> = {
    "Click": "NClick",
    "TypeInto": "NTypeInto",
    "GetText": "NGetText",
    "SelectItem": "NSelectItem",
    "CheckState": "NCheckState",
    "OpenBrowser": "NApplicationCard",
  };

  describe("Modern N-prefixed UI Automation activities exist in catalog", () => {
    for (const className of MODERN_ACTIVITIES) {
      it(`${className} should be in the catalog with emissionApproved=true`, () => {
        const schema = catalogService.getActivitySchema(className);
        expect(schema).not.toBeNull();
        expect(schema!.activity.emissionApproved).toBe(true);
        expect(schema!.packageId).toBe("UiPath.UIAutomation.Activities");
      });
    }
  });

  describe("Legacy activities have preferModern pointers", () => {
    for (const [legacy, modern] of Object.entries(LEGACY_WITH_PREFER_MODERN)) {
      it(`${legacy} should have preferModern=${modern}`, () => {
        const schema = catalogService.getActivitySchema(legacy);
        expect(schema).not.toBeNull();
        expect(schema!.activity.preferModern).toBe(modern);
      });
    }
  });

  describe("Modern activities have prefix mappings in GUARANTEED_ACTIVITY_PREFIX_MAP", () => {
    for (const className of MODERN_ACTIVITIES) {
      it(`${className} should be mapped to prefix "ui"`, () => {
        expect(GUARANTEED_ACTIVITY_PREFIX_MAP[className]).toBe("ui");
      });
    }
  });

  describe("Legacy-to-modern alias map covers all preferModern pointers", () => {
    for (const [legacy, modern] of Object.entries(LEGACY_WITH_PREFER_MODERN)) {
      it(`LEGACY_TO_MODERN_ALIAS_MAP should map ${legacy} → ${modern}`, () => {
        expect(LEGACY_TO_MODERN_ALIAS_MAP[legacy]).toBe(modern);
      });
    }
  });

  describe("Enrichment map activities all have catalog entries", () => {
    it("every activity in the enrichment map NAMESPACE_MAP should exist in the catalog", () => {
      const enrichmentContent = readFileSync(
        join(process.cwd(), "server", "catalog", "catalog-enrichment.ts"),
        "utf-8"
      );
      const regex = /"(\w+)"\s*:\s*"(UiPath\.[^"]+)"/g;
      let match;
      const missing: string[] = [];
      while ((match = regex.exec(enrichmentContent)) !== null) {
        const actName = match[1];
        const pkgName = match[2];
        if (actName.includes(".")) continue;
        if (pkgName.includes(".Core.") || pkgName.includes(".Statements")) continue;
        const schema = catalogService.getActivitySchema(actName);
        if (!schema) {
          missing.push(`${actName} (${pkgName})`);
        }
      }
      expect(missing).toEqual([]);
    });
  });

  describe("Skeleton entries have emissionApproved=false", () => {
    const SKELETON_EXAMPLES = [
      "CloseWorkbook", "SaveWorkbook", "GetImapMailMessages", "DatabaseConnect",
      "FTPConnect", "GSuiteApplicationScope", "Office365ApplicationScope",
      "LoadTaxonomy", "MLModelRun", "DynamicsDeleteRecord",
    ];

    for (const className of SKELETON_EXAMPLES) {
      it(`${className} should be in catalog with emissionApproved=false`, () => {
        const schema = catalogService.getActivitySchema(className);
        expect(schema).not.toBeNull();
        expect(schema!.activity.emissionApproved).toBe(false);
      });
    }
  });

  describe("Catalog-derived alias map includes all preferModern pointers", () => {
    it("getLegacyToModernAliasMap should include all catalog preferModern entries", () => {
      const dynamicMap = getLegacyToModernAliasMap();
      for (const [legacy, modern] of Object.entries(LEGACY_WITH_PREFER_MODERN)) {
        expect(dynamicMap[legacy]).toBe(modern);
        expect(dynamicMap[`ui:${legacy}`]).toBe(modern);
      }
    });

    it("catalog-derived map should be a superset of static fallback entries", () => {
      const dynamicMap = getLegacyToModernAliasMap();
      const staticEntries: Record<string, string> = {
        "Click": "NClick", "ui:Click": "NClick",
        "TypeInto": "NTypeInto", "ui:TypeInto": "NTypeInto",
        "GetText": "NGetText", "ui:GetText": "NGetText",
        "OpenBrowser": "NApplicationCard", "ui:OpenBrowser": "NApplicationCard",
      };
      for (const [key, value] of Object.entries(staticEntries)) {
        expect(dynamicMap[key]).toBe(value);
      }
    });
  });

  describe("Catalog total activity count increased", () => {
    it("should have more than 340 activities (was ~246 before task 474)", () => {
      const catalog = JSON.parse(
        readFileSync(join(process.cwd(), "catalog", "activity-catalog.json"), "utf-8")
      );
      let total = 0;
      for (const pkg of catalog.packages) {
        total += pkg.activities.length;
      }
      expect(total).toBeGreaterThan(340);
    });
  });

  describe("Modern activities are emission-approved in catalog", () => {
    for (const name of MODERN_ACTIVITIES) {
      it(`${name} should be emissionApproved in catalog`, () => {
        const schema = catalogService.getActivitySchema(name);
        expect(schema).toBeDefined();
        expect(schema!.activity.emissionApproved).toBe(true);
      });
    }
  });

  describe("Activity registry consistency for modern activities", () => {
    for (const name of MODERN_ACTIVITIES) {
      it(`ui:${name} should exist in ACTIVITY_REGISTRY with a package`, () => {
        const entry = ACTIVITY_REGISTRY[`ui:${name}`];
        expect(entry).toBeDefined();
        expect(entry.package).toBeTruthy();
      });
    }

    it("modern activities in ACTIVITY_REGISTRY should match catalog package", () => {
      for (const name of MODERN_ACTIVITIES) {
        const registryEntry = ACTIVITY_REGISTRY[`ui:${name}`];
        const schema = catalogService.getActivitySchema(name);
        expect(schema).toBeDefined();
        expect(registryEntry).toBeDefined();
        expect(registryEntry.package).toBe(schema!.packageId);
      }
    });

    it("fallback registry property names should be a subset of catalog properties for modern activities", () => {
      for (const name of MODERN_ACTIVITIES) {
        const registryEntry = ACTIVITY_REGISTRY[`ui:${name}`];
        const schema = catalogService.getActivitySchema(name);
        expect(schema).toBeDefined();
        expect(registryEntry).toBeDefined();
        const catalogPropNames = schema!.activity.properties.map(p => p.name);
        const registryPropNames = [
          ...(registryEntry.properties?.required || []),
          ...(registryEntry.properties?.optional || []),
        ];
        for (const prop of registryPropNames) {
          expect(catalogPropNames).toContain(prop);
        }
      }
    });
  });

  describe("GUARANTEED_ACTIVITY_PREFIX_MAP consistency with catalog for task-474 entries", () => {
    const TASK_474_PREFIX_ENTRIES = [
      ...MODERN_ACTIVITIES,
      "SelectItem",
      "CheckState",
    ];

    for (const activityName of TASK_474_PREFIX_ENTRIES) {
      it(`${activityName} prefix in GUARANTEED_ACTIVITY_PREFIX_MAP should match catalog`, () => {
        const expectedPrefix = GUARANTEED_ACTIVITY_PREFIX_MAP[activityName];
        expect(expectedPrefix).toBeDefined();
        const catalogPrefix = catalogService.getPrefixForActivity(activityName);
        if (catalogPrefix !== null) {
          expect(catalogPrefix).toBe(expectedPrefix);
        }
      });
    }
  });

  describe("Emission gate accepts modern activities without stubbing", () => {
    const MODERN_XAML_SNIPPETS: Record<string, string> = {
      NClick: `<ui:NClick />`,
      NTypeInto: `<ui:NTypeInto Text="&quot;hello&quot;" />`,
      NGetText: `<ui:NGetText />`,
      NSelectItem: `<ui:NSelectItem Item="&quot;option1&quot;" />`,
      NCheckState: `<ui:NCheckState />`,
      NApplicationCard: `<ui:NApplicationCard Url="&quot;https://example.com&quot;"><Sequence /></ui:NApplicationCard>`,
    };

    for (const [name, snippet] of Object.entries(MODERN_XAML_SNIPPETS)) {
      it(`emission gate should not stub or reject ${name}`, () => {
        const xaml = makeXaml(snippet);
        const entries = [{ name: "Test.xaml", content: xaml }];
        const result = runEmissionGate(entries);
        const actViolations = result.violations.filter(
          v => v.type === "unapproved-activity" && v.activityName === name
        );
        expect(actViolations).toHaveLength(0);
        expect(entries[0].content).toContain(`ui:${name}`);
        expect(entries[0].content).not.toContain("[STUBBED]");
      });
    }
  });
});
