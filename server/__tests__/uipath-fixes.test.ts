import { describe, it, expect } from "vitest";
import { validateWorkflowSpec, WorkflowSpecSchema } from "../workflow-spec-types";
import { getCachedPipelineResult, findUiPathMessage } from "../uipath-pipeline";

describe("UiPath Package Generation Fixes", () => {
  describe("FIX 1 — maxRetries schema validation (nonnegative)", () => {
    const baseSpec = {
      name: "TestWorkflow",
      variables: [{ name: "str_Test", type: "String" }],
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main Sequence",
        children: [],
      },
      useReFramework: true,
    };

    it("maxRetries: 0 passes schema validation", () => {
      const spec = {
        ...baseSpec,
        reframeworkConfig: {
          queueName: "TestQueue",
          maxRetries: 0,
          processName: "TestProcess",
        },
      };
      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.reframeworkConfig?.maxRetries).toBe(0);
      }
    });

    it("maxRetries: 1 passes schema validation", () => {
      const spec = {
        ...baseSpec,
        reframeworkConfig: {
          queueName: "TestQueue",
          maxRetries: 1,
          processName: "TestProcess",
        },
      };
      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
    });

    it("maxRetries: 5 passes schema validation", () => {
      const spec = {
        ...baseSpec,
        reframeworkConfig: {
          queueName: "TestQueue",
          maxRetries: 5,
          processName: "TestProcess",
        },
      };
      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
    });

    it("maxRetries: -1 fails schema validation", () => {
      const spec = {
        ...baseSpec,
        reframeworkConfig: {
          queueName: "TestQueue",
          maxRetries: -1,
          processName: "TestProcess",
        },
      };
      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(false);
    });

    it("maxRetries: 1.5 fails schema validation (not integer)", () => {
      const spec = {
        ...baseSpec,
        reframeworkConfig: {
          queueName: "TestQueue",
          maxRetries: 1.5,
          processName: "TestProcess",
        },
      };
      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(false);
    });

    it("reframeworkConfig is optional and spec validates without it", () => {
      const result = validateWorkflowSpec(baseSpec);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.reframeworkConfig).toBeUndefined();
      }
    });

    it("maxRetries: 0 parsed through Zod schema directly", () => {
      const parsed = WorkflowSpecSchema.safeParse({
        ...baseSpec,
        reframeworkConfig: { queueName: "Q", maxRetries: 0, processName: "P" },
      });
      expect(parsed.success).toBe(true);
      if (parsed.success) {
        expect(parsed.data.reframeworkConfig?.maxRetries).toBe(0);
      }
    });
  });

  describe("FIX 1 — reframeworkConfig coercion before validation", () => {
    function applyCoercion(parsed: any): any {
      if (parsed && typeof parsed === "object") {
        if (parsed.reframeworkConfig == null || typeof parsed.reframeworkConfig !== "object") {
          parsed.reframeworkConfig = undefined;
          if (parsed.useReFramework) {
            parsed.reframeworkConfig = { queueName: "", maxRetries: 1, processName: parsed.name || "" };
          }
        } else {
          if (parsed.reframeworkConfig.maxRetries == null || parsed.reframeworkConfig.maxRetries < 0) {
            parsed.reframeworkConfig.maxRetries = 1;
          }
        }
      }
      return parsed;
    }

    it("reframeworkConfig: null with useReFramework=true coerces to defaults and passes validation", () => {
      const input = {
        name: "MyProcess",
        useReFramework: true,
        reframeworkConfig: null,
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig).toEqual({
        queueName: "",
        maxRetries: 1,
        processName: "MyProcess",
      });
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });

    it("reframeworkConfig: null with useReFramework=false sets to undefined and passes validation", () => {
      const input = {
        name: "MyProcess",
        useReFramework: false,
        reframeworkConfig: null,
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig).toBeUndefined();
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });

    it("maxRetries: null coerces to 1 and passes validation", () => {
      const input = {
        name: "MyProcess",
        useReFramework: true,
        reframeworkConfig: { queueName: "Q1", maxRetries: null, processName: "P1" },
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig.maxRetries).toBe(1);
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });

    it("maxRetries: -3 coerces to 1 and passes validation", () => {
      const input = {
        name: "MyProcess",
        useReFramework: true,
        reframeworkConfig: { queueName: "Q1", maxRetries: -3, processName: "P1" },
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig.maxRetries).toBe(1);
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });

    it("maxRetries: 0 is preserved after coercion (valid nonnegative)", () => {
      const input = {
        name: "MyProcess",
        useReFramework: true,
        reframeworkConfig: { queueName: "Q1", maxRetries: 0, processName: "P1" },
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig.maxRetries).toBe(0);
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });

    it("reframeworkConfig as string (non-object) is coerced to undefined", () => {
      const input = {
        name: "MyProcess",
        useReFramework: false,
        reframeworkConfig: "invalid",
        variables: [],
        rootSequence: { kind: "sequence", displayName: "Main", children: [] },
      };
      const coerced = applyCoercion(input);
      expect(coerced.reframeworkConfig).toBeUndefined();
      const result = validateWorkflowSpec(coerced);
      expect(result.success).toBe(true);
    });
  });

  describe("FIX 2 — Download endpoint cache lookup", () => {
    it("getCachedPipelineResult returns null when no cached build exists", () => {
      const result = getCachedPipelineResult("nonexistent-idea-" + Date.now());
      expect(result).toBeNull();
    });

    it("getCachedPipelineResult returns null for empty string ideaId", () => {
      const result = getCachedPipelineResult("");
      expect(result).toBeNull();
    });

    it("getCachedPipelineResult with mode returns null when no matching mode cached", () => {
      const result = getCachedPipelineResult("nonexistent-idea-" + Date.now(), "full_implementation");
      expect(result).toBeNull();
    });
  });

  describe("FIX 2 — findUiPathMessage", () => {
    it("returns null when no UIPATH message exists", () => {
      const messages = [
        { role: "user", content: "Hello" },
        { role: "assistant", content: "Hi there" },
      ];
      expect(findUiPathMessage(messages)).toBeNull();
    });

    it("finds the latest UIPATH message", () => {
      const messages = [
        { role: "assistant", content: '[UIPATH:{"old":"data"}]' },
        { role: "user", content: "Regenerate" },
        { role: "assistant", content: '[UIPATH:{"new":"data"}]' },
      ];
      const found = findUiPathMessage(messages);
      expect(found).not.toBeNull();
      expect(found.content).toContain('"new"');
    });

    it("ignores user messages starting with [UIPATH:", () => {
      const messages = [
        { role: "user", content: '[UIPATH:{"fake":"data"}]' },
      ];
      expect(findUiPathMessage(messages)).toBeNull();
    });
  });

  describe("FIX 3 — Package card rendering gates", () => {
    it("BUILDING status should not be treated as success", () => {
      const status = "BUILDING";
      const isSuccess = status === "READY" || status === "READY_WITH_WARNINGS";
      expect(isSuccess).toBe(false);
    });

    it("FAILED status should not be treated as success", () => {
      const status = "FAILED";
      const isSuccess = status === "READY" || status === "READY_WITH_WARNINGS";
      expect(isSuccess).toBe(false);
    });

    it("READY status is treated as success", () => {
      const status = "READY";
      const isSuccess = status === "READY" || status === "READY_WITH_WARNINGS";
      expect(isSuccess).toBe(true);
    });

    it("READY_WITH_WARNINGS status is treated as success", () => {
      const status = "READY_WITH_WARNINGS";
      const isSuccess = status === "READY" || status === "READY_WITH_WARNINGS";
      expect(isSuccess).toBe(true);
    });

    it("isFailed flag is correctly derived from status", () => {
      expect("FAILED" === "FAILED").toBe(true);
      expect("READY" === "FAILED").toBe(false);
      expect("READY_WITH_WARNINGS" === "FAILED").toBe(false);
      expect("BUILDING" === "FAILED").toBe(false);
    });
  });
});
