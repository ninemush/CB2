import { describe, it, expect, beforeEach } from "vitest";
import {
  buildExpression,
  normalizeStringToExpression,
  tryParseJsonValueIntent,
  getAndClearJsonValueIntentDiagnostics,
  resolveValueIntentJsonString,
  containsValueIntentJson,
  sweepAttributeValueForJsonIntents,
  type ValueIntent,
} from "../xaml/expression-builder";
import {
  resolvePropertyValue,
  assembleNode,
  setRemediationContext,
  clearRemediationContext,
  getAndClearResidualJsonDefects,
  type AssemblyRemediationContext,
} from "../workflow-tree-assembler";
import type { RemediationEntry } from "../uipath-pipeline";
import type { ActivityNode, VariableDeclaration } from "../workflow-spec-types";

describe("Task 444: ValueIntent Serialization Completeness", () => {
  beforeEach(() => {
    getAndClearJsonValueIntentDiagnostics();
    getAndClearResidualJsonDefects();
    clearRemediationContext();
  });

  describe("ValueIntent JSON in Condition attributes", () => {
    it("resolves JSON ValueIntent expression in If condition string", () => {
      const node = {
        kind: "if" as const,
        displayName: "Check Status",
        condition: '{"type":"expression","left":"int_StatusCode","operator":"<>","right":"200"}',
        thenChildren: [],
        elseChildren: [],
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).not.toContain('{&quot;type');
      expect(result).toContain("int_StatusCode");
      expect(result).toContain("200");
    });

    it("resolves JSON ValueIntent variable in If condition string", () => {
      const node = {
        kind: "if" as const,
        displayName: "Check Flag",
        condition: '{"type":"variable","name":"bool_IsReady"}',
        thenChildren: [],
        elseChildren: [],
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).toContain("bool_IsReady");
    });

    it("resolves JSON ValueIntent vb_expression in While condition string", () => {
      const node = {
        kind: "while" as const,
        displayName: "Loop Until Done",
        condition: '{"type":"vb_expression","value":"int_Counter > 0"}',
        bodyChildren: [],
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).toContain("int_Counter");
    });
  });

  describe("Assign with no valid To target", () => {
    it("generates fallback variable when Assign.To is Nothing", () => {
      const remediations: RemediationEntry[] = [];
      const ctx: AssemblyRemediationContext = {
        fileName: "Test.xaml",
        propertyRemediations: remediations,
        escalationThreshold: 5,
      };
      setRemediationContext(ctx);

      const node: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Set Result",
        properties: {
          To: "Nothing",
          Value: '"Hello"',
        },
        errorHandling: "none",
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain(">Nothing</OutArgument>");
      expect(result).toContain("obj_REVIEW_");
      expect(result).toContain("UnresolvedTarget");

      const ctx2 = clearRemediationContext();
      const assignFallbacks = ctx2?.propertyRemediations.filter(
        r => r.remediationCode === "ASSIGN_TO_FALLBACK_VARIABLE"
      ) ?? [];
      expect(assignFallbacks.length).toBeGreaterThanOrEqual(1);
      expect(assignFallbacks[0].propertyName).toBe("To");
      expect(assignFallbacks[0].reason).toContain("Nothing");
    });

    it("generates fallback variable when Assign.To is null-like keyword", () => {
      const node: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Set Empty",
        properties: {
          To: "null",
          Value: '"test"',
        },
        errorHandling: "none",
      };
      const result = assembleNode(node, []);
      expect(result).toContain("obj_REVIEW_");
      expect(result).toContain("UnresolvedTarget");
    });

    it("generates unique fallback variable names for different assigns", () => {
      const node1: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Set Result",
        properties: { To: "Nothing", Value: '"A"' },
        errorHandling: "none",
      };
      const node2: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Set Result",
        properties: { To: "Nothing", Value: '"B"' },
        errorHandling: "none",
      };
      const result1 = assembleNode(node1, []);
      const result2 = assembleNode(node2, []);
      const varMatch1 = result1.match(/obj_REVIEW_\w+_UnresolvedTarget_\d+/);
      const varMatch2 = result2.match(/obj_REVIEW_\w+_UnresolvedTarget_\d+/);
      expect(varMatch1).not.toBeNull();
      expect(varMatch2).not.toBeNull();
      expect(varMatch1![0]).not.toBe(varMatch2![0]);
    });

    it("resolves JSON ValueIntent in Assign.To to proper variable name", () => {
      const node: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Set Name",
        properties: {
          To: '{"type":"variable","name":"str_UserName"}',
          Value: '"John"',
        },
        errorHandling: "none",
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).toContain("str_UserName");
    });
  });

  describe("Nested ValueIntent in complex expressions", () => {
    it("resolves JSON ValueIntent in activity property values", () => {
      const result = resolvePropertyValue('{"type":"vb_expression","value":"String.Format(\"{0} - {1}\", str_First, str_Last)"}');
      expect(result).not.toContain('{"type"');
      expect(result).toContain("String.Format");
    });

    it("resolves JSON literal ValueIntent in property", () => {
      const result = resolvePropertyValue('{"type":"literal","value":"Hello World"}');
      expect(result).not.toContain('{"type"');
      expect(result).toContain("Hello World");
    });

    it("resolves JSON variable ValueIntent in property", () => {
      const result = resolvePropertyValue('{"type":"variable","name":"str_Output"}');
      expect(result).not.toContain('{"type"');
      expect(result).toContain("str_Output");
    });
  });

  describe("Idempotency — already-resolved VB.NET expressions pass unchanged", () => {
    it("leaves simple variable name unchanged", () => {
      const result = resolveValueIntentJsonString("str_Name");
      expect(result).toBe("str_Name");
    });

    it("leaves bracket-wrapped variable unchanged", () => {
      const result = resolveValueIntentJsonString("[str_Name]");
      expect(result).toBe("[str_Name]");
    });

    it("leaves arithmetic expression unchanged", () => {
      const result = resolveValueIntentJsonString("int_Count + 1");
      expect(result).toBe("int_Count + 1");
    });

    it("leaves String.Format expression unchanged", () => {
      const result = resolveValueIntentJsonString('String.Format("{0}", str_Name)');
      expect(result).toBe('String.Format("{0}", str_Name)');
    });

    it("leaves quoted string unchanged", () => {
      const result = resolveValueIntentJsonString('"Hello World"');
      expect(result).toBe('"Hello World"');
    });

    it("leaves True/False unchanged", () => {
      expect(resolveValueIntentJsonString("True")).toBe("True");
      expect(resolveValueIntentJsonString("False")).toBe("False");
    });

    it("leaves Nothing unchanged", () => {
      expect(resolveValueIntentJsonString("Nothing")).toBe("Nothing");
    });

    it("leaves numeric literals unchanged", () => {
      expect(resolveValueIntentJsonString("42")).toBe("42");
      expect(resolveValueIntentJsonString("3.14")).toBe("3.14");
    });
  });

  describe("containsValueIntentJson detection", () => {
    it("detects JSON ValueIntent strings", () => {
      expect(containsValueIntentJson('{"type":"literal","value":"Info"}')).toBe(true);
      expect(containsValueIntentJson('{"type":"variable","name":"str_X"}')).toBe(true);
      expect(containsValueIntentJson('{&quot;type&quot;:&quot;literal&quot;,&quot;value&quot;:&quot;Info&quot;}')).toBe(true);
    });

    it("does not flag normal strings", () => {
      expect(containsValueIntentJson("Hello World")).toBe(false);
      expect(containsValueIntentJson("[str_Name]")).toBe(false);
      expect(containsValueIntentJson("42")).toBe(false);
      expect(containsValueIntentJson("True")).toBe(false);
    });
  });

  describe("sweepAttributeValueForJsonIntents", () => {
    it("resolves JSON literal intent in attribute value", () => {
      const result = sweepAttributeValueForJsonIntents('{"type":"literal","value":"Info"}');
      expect(result).toBe('"Info"');
    });

    it("resolves JSON variable intent in attribute value", () => {
      const result = sweepAttributeValueForJsonIntents('{"type":"variable","name":"str_Result"}');
      expect(result).toBe("[str_Result]");
    });

    it("passes through normal values unchanged", () => {
      expect(sweepAttributeValueForJsonIntents("[str_Name]")).toBe("[str_Name]");
      expect(sweepAttributeValueForJsonIntents('"Hello"')).toBe('"Hello"');
      expect(sweepAttributeValueForJsonIntents("True")).toBe("True");
    });
  });

  describe("Pre-emission sweep integration", () => {
    it("resolves residual JSON in condition attributes of If nodes", () => {
      const node = {
        kind: "if" as const,
        displayName: "JSON Condition Test",
        condition: '{"type":"vb_expression","value":"str_Status = \\"Active\\""}',
        thenChildren: [],
        elseChildren: [],
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).not.toContain('{&quot;type');
    });

    it("no JSON objects survive in Assign output", () => {
      const node: ActivityNode = {
        kind: "activity",
        template: "Assign",
        displayName: "Test Assign",
        properties: {
          To: { type: "variable", name: "str_Result" },
          Value: '{"type":"literal","value":"Success"}',
        },
        errorHandling: "none",
      };
      const result = assembleNode(node, []);
      expect(result).not.toContain('{"type"');
      expect(result).not.toContain('{&quot;type');
      expect(result).toContain("str_Result");
    });
  });
});
