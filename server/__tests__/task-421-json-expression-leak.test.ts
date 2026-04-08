import { describe, it, expect, beforeEach } from "vitest";
import {
  buildExpression,
  normalizeStringToExpression,
  normalizePropertyToValueIntent,
  tryParseJsonValueIntent,
  getAndClearJsonValueIntentDiagnostics,
  type ValueIntent,
} from "../xaml/expression-builder";
import {
  resolvePropertyValue,
  getPropString,
  setRemediationContext,
  clearRemediationContext,
  getAndClearResidualJsonDefects,
  type AssemblyRemediationContext,
} from "../workflow-tree-assembler";
import type { RemediationEntry } from "../uipath-pipeline";

describe("Task 421: JSON Expression Intermediate Leak Remediation", () => {
  beforeEach(() => {
    getAndClearJsonValueIntentDiagnostics();
    getAndClearResidualJsonDefects();
    clearRemediationContext();
  });

  describe("tryParseJsonValueIntent", () => {
    it("parses literal type with simple value", () => {
      const result = tryParseJsonValueIntent('{"type":"literal","value":"Info"}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "literal", value: "Info" });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("parses vb_expression type", () => {
      const result = tryParseJsonValueIntent('{"type":"vb_expression","value":"DateTime.Now.ToString()"}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "vb_expression", value: "DateTime.Now.ToString()" });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("parses variable type with name field", () => {
      const result = tryParseJsonValueIntent('{"type":"variable","name":"str_Result"}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "variable", name: "str_Result" });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("handles escaped quotes in value", () => {
      const result = tryParseJsonValueIntent('{"type":"literal","value":"Say \\"hello\\""}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "literal", value: 'Say "hello"' });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("handles reversed key order (value before type)", () => {
      const result = tryParseJsonValueIntent('{"value":"Info","type":"literal"}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "literal", value: "Info" });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("handles HTML entity encoded JSON", () => {
      const result = tryParseJsonValueIntent('{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Info&quot;}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "literal", value: "Info" });
      expect(result!.fallbackUsed).toBe(false);
    });

    it("uses JSON.parse fallback for complex cases and tags fallbackUsed", () => {
      const result = tryParseJsonValueIntent('{"type":"literal","value":"Info","confidence":0.9}');
      expect(result).not.toBeNull();
      expect(result!.intent).toEqual({ type: "literal", value: "Info" });
      expect(result!.fallbackUsed).toBe(true);
    });

    it("returns null for non-JSON strings", () => {
      expect(tryParseJsonValueIntent("Hello World")).toBeNull();
      expect(tryParseJsonValueIntent("42")).toBeNull();
      expect(tryParseJsonValueIntent("[myVar]")).toBeNull();
    });

    it("returns null for JSON without type field", () => {
      expect(tryParseJsonValueIntent('{"foo":"bar"}')).toBeNull();
    });
  });

  describe("normalizeStringToExpression — JSON detection", () => {
    it("resolves literal JSON to quoted string", () => {
      const result = normalizeStringToExpression('{"type":"literal","value":"Info"}');
      expect(result).toBe('"Info"');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
      expect(diagnostics[0].parsedIntentType).toBe("literal");
      expect(diagnostics[0].fallbackUsed).toBe(false);
    });

    it("resolves variable JSON to bracket-wrapped name", () => {
      const result = normalizeStringToExpression('{"type":"variable","name":"str_Result"}');
      expect(result).toBe("[str_Result]");
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
      expect(diagnostics[0].parsedIntentType).toBe("variable");
    });

    it("resolves vb_expression JSON to bracket-wrapped expression", () => {
      const result = normalizeStringToExpression('{"type":"vb_expression","value":"DateTime.Now"}');
      expect(result).toBe("[DateTime.Now]");
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
      expect(diagnostics[0].parsedIntentType).toBe("vb_expression");
    });

    it("does not affect normal strings", () => {
      const result = normalizeStringToExpression("Hello World", undefined, "System.String");
      expect(result).toBe('"Hello World"');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(0);
    });
  });

  describe("normalizePropertyToValueIntent — JSON detection", () => {
    it("resolves literal JSON string to ValueIntent", () => {
      const result = normalizePropertyToValueIntent('{"type":"literal","value":"Info"}');
      expect(result).toEqual({ type: "literal", value: "Info" });
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
    });

    it("resolves variable JSON string to ValueIntent", () => {
      const result = normalizePropertyToValueIntent('{"type":"variable","name":"myVar"}');
      expect(result).toEqual({ type: "variable", name: "myVar" });
    });
  });

  describe("diagnostic traceability", () => {
    it("emits complete diagnostic record with all required fields", () => {
      normalizeStringToExpression('{"type":"literal","value":"TestValue"}');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
      const d = diagnostics[0];
      expect(d.originalRaw).toBe('{"type":"literal","value":"TestValue"}');
      expect(d.parsedIntentType).toBe("literal");
      expect(d.normalizedOutput).toBe('"TestValue"');
      expect(d.fallbackUsed).toBe(false);
    });

    it("tags fallbackUsed correctly when JSON.parse is used", () => {
      normalizeStringToExpression('{"type":"literal","value":"Info","confidence":0.95}');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBe(1);
      expect(diagnostics[0].fallbackUsed).toBe(true);
    });
  });

  describe("integration: resolvePropertyValue with JSON strings", () => {
    it("resolves a JSON literal string through resolvePropertyValue without raw JSON in output", () => {
      const result = resolvePropertyValue('{"type":"literal","value":"Info"}');
      expect(result).not.toContain('{"type"');
      expect(result).not.toContain('{&quot;type');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBeGreaterThanOrEqual(1);
      expect(diagnostics.some(d => d.parsedIntentType === "literal")).toBe(true);
    });

    it("resolves a JSON variable string through resolvePropertyValue", () => {
      const result = resolvePropertyValue('{"type":"variable","name":"str_Output"}');
      expect(result).not.toContain('{"type"');
      expect(result).toContain("str_Output");
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBeGreaterThanOrEqual(1);
    });

    it("resolves a JSON vb_expression string through resolvePropertyValue", () => {
      const result = resolvePropertyValue('{"type":"vb_expression","value":"DateTime.Now"}');
      expect(result).not.toContain('{"type"');
      expect(result).toContain("DateTime.Now");
    });
  });

  describe("integration: getPropString with JSON strings", () => {
    it("resolves JSON literal string via getPropString and emits diagnostics", () => {
      const props = { Level: '{"type":"literal","value":"Info"}' };
      const result = getPropString(props, "Level");
      expect(result).not.toContain('{"type"');
      const diagnostics = getAndClearJsonValueIntentDiagnostics();
      expect(diagnostics.length).toBeGreaterThanOrEqual(1);
      expect(diagnostics[0].originalRaw).toContain('{"type":"literal"');
    });

    it("resolves JSON variable string via getPropString", () => {
      const props = { Message: '{"type":"variable","name":"str_Msg"}' };
      const result = getPropString(props, "Message");
      expect(result).not.toContain('{"type"');
      expect(result).toContain("str_Msg");
    });
  });

  describe("unresolvable residual JSON defect recording", () => {
    it("resolves known JSON types without creating defects", () => {
      const remediations: RemediationEntry[] = [];
      const ctx: AssemblyRemediationContext = {
        fileName: "Test.xaml",
        propertyRemediations: remediations,
        escalationThreshold: 5,
      };
      setRemediationContext(ctx);

      const result = resolvePropertyValue('{"type":"literal","value":"Info"}');
      expect(result).not.toContain('{"type"');
      expect(result).not.toContain('{&quot;type');

      const ctx2 = clearRemediationContext();
      const jsonDefects = ctx2?.propertyRemediations.filter(
        r => r.reason?.includes("residual JSON") || r.classifiedCheck === "RESIDUAL_JSON_PAYLOAD"
      ) ?? [];
      expect(jsonDefects.length).toBe(0);
    });

    it("resolvable JSON strings never leave raw JSON in resolvePropertyValue output", () => {
      const jsonInputs = [
        '{"type":"literal","value":"Hello"}',
        '{"type":"variable","name":"str_Test"}',
        '{"type":"vb_expression","value":"Now.Date"}',
      ];

      for (const input of jsonInputs) {
        const result = resolvePropertyValue(input);
        expect(result).not.toContain('{"type"');
        expect(result).not.toContain('{&quot;type');
      }
    });

    it("records residual JSON defects to fallback sink when no remediation context", () => {
      clearRemediationContext();

      const result = resolvePropertyValue('{"type":"literal","value":"normalValue"}');
      expect(result).not.toContain('{"type"');

      const defects = getAndClearResidualJsonDefects();
      expect(defects.length).toBe(0);
    });
  });

  describe("XMLParser processEntities: false configuration", () => {
    it("parses XAML with 1000+ entities without error when processEntities is false", async () => {
      const { XMLParser } = await import("fast-xml-parser");
      const manyEntities = Array.from({ length: 1200 }, (_, i) =>
        `<Activity DisplayName="Step ${i}" Value="&quot;test&amp;value&lt;${i}&gt;&quot;" />`
      ).join("\n");
      const xaml = `<Root>\n${manyEntities}\n</Root>`;

      const parser = new XMLParser({
        ignoreAttributes: false,
        allowBooleanAttributes: true,
        processEntities: false,
      });

      expect(() => parser.parse(xaml)).not.toThrow();
    });

    it("would fail with default entity processing on large entity count", async () => {
      const { XMLParser } = await import("fast-xml-parser");
      const manyEntities = Array.from({ length: 1200 }, (_, i) =>
        `<Activity DisplayName="Step ${i}" Value="&quot;test&amp;value&lt;${i}&gt;&quot;" />`
      ).join("\n");
      const xaml = `<Root>\n${manyEntities}\n</Root>`;

      const parser = new XMLParser({
        ignoreAttributes: false,
        allowBooleanAttributes: true,
      });

      let threwError = false;
      try {
        parser.parse(xaml);
      } catch {
        threwError = true;
      }
      expect(threwError).toBe(true);
    });
  });
});
