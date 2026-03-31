import { describe, it, expect } from "vitest";
import { sanitizePropertyValue } from "../xaml-generator";
import { validateWorkflowSpec } from "../workflow-spec-types";

describe("object serialization prevention", () => {
  describe("sanitizePropertyValue", () => {
    it("converts object with header key to Dictionary", () => {
      const result = sanitizePropertyValue("RequestHeaders", { "Content-Type": "application/json" });
      expect(result).toContain("Dictionary");
      expect(result).not.toContain("[object Object]");
    });

    it("converts TimeSpan object to hh:mm:ss format", () => {
      const result = sanitizePropertyValue("RetryInterval", { minutes: 5 });
      expect(result).toBe("00:05:00");
    });

    it("converts TimeSpan object with hours and seconds", () => {
      const result = sanitizePropertyValue("Timeout", { hours: 1, minutes: 30, seconds: 15 });
      expect(result).toBe("01:30:15");
    });

    it("converts TimeSpan object with milliseconds", () => {
      const result = sanitizePropertyValue("DelayBefore", { milliseconds: 5000 });
      expect(result).toBe("00:00:05");
    });

    it("converts non-header non-timespan object to JSON string", () => {
      const result = sanitizePropertyValue("SomeProperty", { key: "value" });
      expect(result).not.toContain("[object Object]");
      expect(result).toContain("key");
    });

    it("returns error placeholder for unknown types instead of [object Object]", () => {
      const sym = Symbol("test");
      const result = sanitizePropertyValue("SomeProp", sym);
      expect(result).toBe("ERROR_UNSERIALIZABLE_SomeProp");
      expect(result).not.toContain("[object Object]");
    });

    it("handles string '[object Object]' with placeholder", () => {
      const result = sanitizePropertyValue("TestProp", "[object Object]");
      expect(result).toBe("PLACEHOLDER_TestProp_object_value");
    });

    it("handles null and undefined", () => {
      expect(sanitizePropertyValue("Key", null)).toBe("");
      expect(sanitizePropertyValue("Key", undefined)).toBe("");
    });

    it("handles primitives correctly", () => {
      expect(sanitizePropertyValue("Key", "hello")).toBe("hello");
      expect(sanitizePropertyValue("Key", 42)).toBe("42");
      expect(sanitizePropertyValue("Key", true)).toBe("true");
    });

    it("handles array values without [object Object]", () => {
      const result = sanitizePropertyValue("Items", [{ a: 1 }, { b: 2 }]);
      expect(result).not.toContain("[object Object]");
    });
  });

  describe("PropertyValueSchema via validateWorkflowSpec", () => {
    it("converts object property values to OBJECT_SERIALIZED string instead of [object Object]", () => {
      const spec = {
        name: "TestWorkflow",
        processType: "attended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "activity",
              template: "LogMessage",
              displayName: "Log",
              properties: {
                Message: { minutes: 5 },
              },
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        const activity = result.data.rootSequence.children[0];
        if (activity.kind === "activity") {
          const msg = activity.properties["Message"];
          expect(typeof msg).toBe("string");
          expect(msg).not.toBe("[object Object]");
          expect(msg).toContain("OBJECT_SERIALIZED:");
        }
      }
    });

    it("preserves ValueIntent objects through validation", () => {
      const spec = {
        name: "TestWorkflow",
        processType: "attended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "activity",
              template: "LogMessage",
              displayName: "Log",
              properties: {
                Message: { type: "literal", value: "Hello" },
              },
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        const activity = result.data.rootSequence.children[0];
        if (activity.kind === "activity") {
          const msg = activity.properties["Message"];
          expect(typeof msg).toBe("object");
          expect((msg as any).type).toBe("literal");
        }
      }
    });

    it("rejects plain objects by converting to serialized strings, not [object Object]", () => {
      const spec = {
        name: "TestWorkflow",
        processType: "attended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "activity",
              template: "HttpRequest",
              displayName: "Call API",
              properties: {
                Url: "https://example.com",
                Headers: { Authorization: "Bearer token123" },
                RetryInterval: { minutes: 2, seconds: 30 },
                Body: { data: { nested: true } },
              },
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        const activity = result.data.rootSequence.children[0];
        if (activity.kind === "activity") {
          const props = activity.properties;
          expect(props["Url"]).toBe("https://example.com");
          for (const [key, val] of Object.entries(props)) {
            const strVal = typeof val === "object" ? JSON.stringify(val) : String(val);
            expect(strVal).not.toBe("[object Object]");
            expect(strVal).not.toContain("[object Object]");
          }
        }
      }
    });

    it("serializes malformed ValueIntent objects (missing required fields) as strings", () => {
      const spec = {
        name: "TestWorkflow",
        processType: "attended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "activity",
              template: "LogMessage",
              displayName: "Log",
              properties: {
                MalformedLiteral: { type: "literal" },
                MalformedExpression: { type: "expression", left: "x" },
                MalformedVariable: { type: "variable" },
              },
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        const activity = result.data.rootSequence.children[0];
        if (activity.kind === "activity") {
          const ml = activity.properties["MalformedLiteral"];
          expect(typeof ml).toBe("string");
          expect(ml).toContain("OBJECT_SERIALIZED:");

          const me = activity.properties["MalformedExpression"];
          expect(typeof me).toBe("string");
          expect(me).toContain("OBJECT_SERIALIZED:");

          const mv = activity.properties["MalformedVariable"];
          expect(typeof mv).toBe("string");
          expect(mv).toContain("OBJECT_SERIALIZED:");
        }
      }
    });

    it("handles deeply nested objects in workflow spec without [object Object]", () => {
      const spec = {
        name: "DeepWorkflow",
        processType: "unattended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "sequence",
              displayName: "Inner",
              children: [
                {
                  kind: "activity",
                  template: "LogMessage",
                  displayName: "Deep Log",
                  properties: {
                    Message: { complex: { deeply: { nested: "value" } } },
                  },
                },
              ],
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (result.success) {
        const seq = result.data.rootSequence.children[0];
        if (seq.kind === "sequence") {
          const activity = seq.children[0];
          if (activity.kind === "activity") {
            const msg = activity.properties["Message"];
            expect(typeof msg).toBe("string");
            expect(msg).not.toBe("[object Object]");
            expect(msg).toContain("OBJECT_SERIALIZED:");
          }
        }
      }
    });
  });

  describe("end-to-end: validation then sanitization produces no [object Object]", () => {
    it("object properties survive full pipeline without [object Object]", () => {
      const spec = {
        name: "E2EWorkflow",
        processType: "attended",
        rootSequence: {
          kind: "sequence",
          displayName: "Main",
          children: [
            {
              kind: "activity",
              template: "HttpRequest",
              displayName: "API Call",
              properties: {
                Url: "https://api.example.com",
                Body: { payload: { nested: true } },
                RetryInterval: { minutes: 2 },
                Headers: { "X-Custom": "val" },
                Timeout: { seconds: 30 },
                SomeConfig: { setting: 1, another: "two" },
              },
            },
          ],
        },
      };

      const result = validateWorkflowSpec(spec);
      expect(result.success).toBe(true);
      if (!result.success) return;

      const activity = result.data.rootSequence.children[0];
      if (activity.kind !== "activity") return;

      for (const [key, val] of Object.entries(activity.properties)) {
        const sanitized = sanitizePropertyValue(key, val);
        expect(sanitized).not.toBe("[object Object]");
        expect(sanitized).not.toContain("[object Object]");
      }
    });

    it("no [object Object] leaks through sanitizePropertyValue for any value type", () => {
      const testCases: Array<{ key: string; value: any }> = [
        { key: "Prop", value: null },
        { key: "Prop", value: undefined },
        { key: "Prop", value: "hello" },
        { key: "Prop", value: 42 },
        { key: "Prop", value: true },
        { key: "Prop", value: [1, 2, 3] },
        { key: "Prop", value: ["a", "b"] },
        { key: "Prop", value: { nested: true } },
        { key: "Headers", value: { "Content-Type": "text/html" } },
        { key: "RetryInterval", value: { minutes: 5 } },
        { key: "Timeout", value: { hours: 1 } },
        { key: "DelayBefore", value: { seconds: 10 } },
        { key: "Prop", value: [{ a: 1 }, { b: 2 }] },
        { key: "Prop", value: "[object Object]" },
        { key: "Prop", value: "..." },
      ];

      for (const { key, value } of testCases) {
        const result = sanitizePropertyValue(key, value);
        expect(result).not.toBe("[object Object]");
        expect(result).not.toContain("[object Object]");
      }
    });
  });
});
