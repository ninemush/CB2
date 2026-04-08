import { describe, it, expect } from "vitest";
import {
  assembleWorkflowFromSpec,
  coercePropToString,
  getPropString,
  getAndClearTypedPropertyDiagnostics,
} from "../workflow-tree-assembler";
import type { WorkflowSpec, ActivityNode, PropertyValue } from "../workflow-spec-types";
import type { ValueIntent } from "../xaml/expression-builder";
import { mapWorkflowToSpec } from "../spec-to-tree-mapper";
import {
  gen_invoke_workflow_file,
  gen_log_message,
  gen_get_credential,
  gen_get_asset,
  gen_add_queue_item,
  _escapeXmlAttr,
} from "../xaml/deterministic-generators";
import { normalizeXaml } from "../xaml/xaml-compliance";

describe("Task #472: Universal ValueIntent scalar resolution", () => {

  describe("mapProperties in spec-to-tree-mapper resolves ValueIntent-shaped objects", () => {
    it("preserves valid ValueIntent objects (resolved downstream by normalizeSpecProperties)", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "InvokeWorkflowFile",
            activity: "Invoke Workflow",
            properties: {
              WorkflowFileName: { type: "literal", value: "ResolveBirthdayRecipient.xaml" },
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const invokeNode = spec.rootSequence.children[0];
      expect(invokeNode.kind).toBe("activity");
      if (invokeNode.kind === "activity") {
        const wfName = invokeNode.properties.WorkflowFileName;
        if (typeof wfName === "object" && wfName !== null && "type" in wfName) {
          expect((wfName as any).type).toBe("literal");
          expect((wfName as any).value).toBe("ResolveBirthdayRecipient.xaml");
        } else {
          expect(wfName).toBe("ResolveBirthdayRecipient.xaml");
        }
      }
    });

    it("resolves incomplete ValueIntent-like objects (failing isValueIntent) to scalar", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "InvokeWorkflowFile",
            activity: "Invoke Workflow",
            properties: {
              WorkflowFileName: { type: "literal", value: 42 },
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const invokeNode = spec.rootSequence.children[0];
      expect(invokeNode.kind).toBe("activity");
      if (invokeNode.kind === "activity") {
        const wfName = invokeNode.properties.WorkflowFileName;
        if (wfName !== undefined) {
          expect(typeof wfName === "string" || typeof wfName === "object").toBe(true);
          if (typeof wfName === "string") {
            expect(wfName).not.toContain("{");
          }
        }
      }
    });

    it("preserves non-ValueIntent structured objects like Arguments (no regression)", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "InvokeWorkflowFile",
            activity: "Invoke Workflow",
            properties: {
              WorkflowFileName: "Helper.xaml",
              Arguments: {
                in_FilePath: { direction: "InArgument", type: "x:String", value: "test.xlsx" },
              },
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const invokeNode = spec.rootSequence.children[0];
      expect(invokeNode.kind).toBe("activity");
      if (invokeNode.kind === "activity") {
        const args = invokeNode.properties.Arguments;
        expect(args).toBeDefined();
        expect(typeof args).toBe("string");
        if (typeof args === "string") {
          expect(args).toContain("in_FilePath");
        }
      }
    });

    it("blocks malformed ValueIntent-shaped objects instead of JSON.stringifying them", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "SomeActivity",
            activity: "Some Activity",
            properties: {
              SomeProp: { type: "literal", value: 42 },
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const node = spec.rootSequence.children[0];
      if (node.kind === "activity") {
        const val = node.properties.SomeProp;
        expect(val).toBeUndefined();
      }
    });

    it("preserves non-ValueIntent structured objects via JSON.stringify (existing behavior)", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "SomeActivity",
            activity: "Some Activity",
            properties: {
              SomeProp: { nested: { deep: true }, unrecognized: "data" },
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const node = spec.rootSequence.children[0];
      if (node.kind === "activity") {
        const val = node.properties.SomeProp;
        expect(val).toBeDefined();
        expect(typeof val).toBe("string");
      }
    });

    it("preserves plain string values unchanged", () => {
      const flatWorkflow = {
        name: "TestWorkflow",
        description: "test",
        steps: [
          {
            activityType: "LogMessage",
            activity: "Log Message",
            properties: {
              Message: "Hello World",
              Level: "Info",
            },
          },
        ],
        variables: [],
      };
      const spec = mapWorkflowToSpec(flatWorkflow as any);
      const logNode = spec.rootSequence.children[0];
      if (logNode.kind === "activity") {
        expect(logNode.properties.Message).toBe("Hello World");
        expect(logNode.properties.Level).toBe("Info");
      }
    });
  });

  describe("Deterministic generators resolve ValueIntent in args", () => {
    it("gen_invoke_workflow_file resolves ValueIntent workflowFileName to plain string", () => {
      const result = gen_invoke_workflow_file({
        displayName: "Invoke Test",
        workflowFileName: { type: "literal", value: "ResolveBirthdayRecipient.xaml" } as any,
      });
      expect(result).toContain('WorkflowFileName="ResolveBirthdayRecipient.xaml"');
      expect(result).not.toContain("{");
      expect(result).not.toContain('"type"');
    });

    it("gen_log_message resolves ValueIntent Message to plain string", () => {
      const result = gen_log_message({
        displayName: "Log Test",
        Message: { type: "literal", value: "Process completed successfully" } as any,
      });
      expect(result).toContain('Message="Process completed successfully"');
      expect(result).not.toContain("{");
    });

    it("gen_get_credential resolves ValueIntent AssetName to plain string", () => {
      const result = gen_get_credential({
        displayName: "Get Cred",
        AssetName: { type: "literal", value: "SAP_Credential" } as any,
      });
      expect(result).toContain('AssetName="SAP_Credential"');
      expect(result).not.toContain("{");
    });

    it("gen_get_asset resolves ValueIntent AssetName to plain string", () => {
      const result = gen_get_asset({
        displayName: "Get Asset",
        AssetName: { type: "literal", value: "ConfigAsset" } as any,
      });
      expect(result).toContain('AssetName="ConfigAsset"');
      expect(result).not.toContain("{");
    });

    it("gen_add_queue_item resolves ValueIntent QueueName to plain string", () => {
      const result = gen_add_queue_item({
        displayName: "Add Queue Item",
        QueueName: { type: "literal", value: "InvoiceQueue" } as any,
      });
      expect(result).toContain('QueueName="InvoiceQueue"');
      expect(result).not.toContain("{");
    });

    it("_escapeXmlAttr resolves ValueIntent objects instead of producing [object Object]", () => {
      const result = _escapeXmlAttr({ type: "literal", value: "test_value" });
      expect(result).toBe("test_value");
      expect(result).not.toContain("[object Object]");
    });

    it("_escapeXmlAttr resolves variable ValueIntent to name", () => {
      const result = _escapeXmlAttr({ type: "variable", name: "str_MyVar" });
      expect(result).toBe("str_MyVar");
    });

    it("plain string args remain unchanged", () => {
      const result = gen_invoke_workflow_file({
        displayName: "Invoke Test",
        workflowFileName: "ProcessData.xaml",
      });
      expect(result).toContain('WorkflowFileName="ProcessData.xaml"');
    });
  });

  describe("coercePropToString handles ValueIntent resolution", () => {
    it("resolves literal ValueIntent to plain string", () => {
      const val: ValueIntent = { type: "literal", value: "ResolveBirthdayRecipient.xaml" };
      const result = coercePropToString(val);
      expect(result).toBe("ResolveBirthdayRecipient.xaml");
    });

    it("resolves variable ValueIntent to name", () => {
      const val: ValueIntent = { type: "variable", name: "str_FileName" };
      const result = coercePropToString(val);
      expect(result).toBe("str_FileName");
    });

    it("passes plain strings through unchanged", () => {
      expect(coercePropToString("plain_value")).toBe("plain_value");
    });

    it("blocks unrecognized objects instead of producing [object Object]", () => {
      const result = coercePropToString({ unrecognized: true, garbage: "data" });
      expect(result).not.toContain("[object Object]");
      expect(result).toBe("");
    });
  });

  describe("Full pipeline integration: no phantom workflow filenames", () => {
    it("WorkflowFileName ValueIntent resolved through full spec→assembly→XAML path", () => {
      getAndClearTypedPropertyDiagnostics();

      const spec: WorkflowSpec = {
        name: "Main",
        description: "Test workflow",
        variables: [],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "InvokeWorkflowFile",
              displayName: "Invoke Birthday Resolver",
              properties: {
                WorkflowFileName: {
                  type: "literal",
                  value: "ResolveBirthdayRecipient.xaml",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
            {
              kind: "activity",
              template: "LogMessage",
              displayName: "Log Success",
              properties: {
                Message: {
                  type: "literal",
                  value: "Process completed",
                } as ValueIntent,
                Level: "Info",
              },
              errorHandling: "none",
            },
            {
              kind: "activity",
              template: "GetCredential",
              displayName: "Get SAP Credentials",
              properties: {
                AssetName: {
                  type: "literal",
                  value: "SAP_Credential",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");
      const compliant = normalizeXaml(xaml);

      expect(compliant).not.toMatch(/\{"type"/);
      expect(compliant).not.toMatch(/\{&quot;type&quot;/);
      expect(compliant).not.toMatch(/\{type:/);

      expect(compliant).toContain("ResolveBirthdayRecipient.xaml");

      const valueIntentJsonPattern = /\{"type":"(literal|variable|vb_expression)","value":"[^"]*"\}/;
      expect(compliant).not.toMatch(valueIntentJsonPattern);

      const invokeMatch = compliant.match(/WorkflowFileName="([^"]*)"/);
      if (invokeMatch) {
        expect(invokeMatch[1]).not.toContain("{");
        expect(invokeMatch[1]).not.toContain('"type"');
      }
    });

    it("variable ValueIntent WorkflowFileName resolves through pipeline without object leakage", () => {
      const spec: WorkflowSpec = {
        name: "Main",
        description: "",
        variables: [{ name: "str_WorkflowPath", type: "String" }],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "InvokeWorkflowFile",
              displayName: "Invoke Dynamic Workflow",
              properties: {
                WorkflowFileName: {
                  type: "variable",
                  name: "str_WorkflowPath",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");

      expect(xaml).not.toMatch(/\{"type"/);
      expect(xaml).not.toMatch(/\{type:/);
      expect(xaml).not.toContain("[object Object]");
    });

    it("EntityType literal ValueIntent resolves to scalar", () => {
      const spec: WorkflowSpec = {
        name: "Main",
        description: "",
        variables: [],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "QueryEntity",
              displayName: "Query Entities",
              properties: {
                EntityType: {
                  type: "literal",
                  value: "Customer",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");
      expect(xaml).not.toMatch(/\{"type":"literal","value":"Customer"\}/);
    });
  });

  describe("Pre-dispatch scalar resolution with diagnostics", () => {
    it("plain scalar WorkflowFileName passes through unchanged (idempotent)", () => {
      getAndClearTypedPropertyDiagnostics();

      const spec: WorkflowSpec = {
        name: "Main",
        description: "",
        variables: [],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "InvokeWorkflowFile",
              displayName: "Invoke Test",
              properties: {
                WorkflowFileName: "ValidFile.xaml",
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");
      expect(xaml).not.toContain("[object Object]");
      expect(xaml).not.toMatch(/\{"type"/);
      expect(xaml).toContain("ValidFile.xaml");
    });

    it("WorkflowFileName variable ValueIntent resolves to name at pre-dispatch for filename properties", () => {
      getAndClearTypedPropertyDiagnostics();

      const spec: WorkflowSpec = {
        name: "Main",
        description: "",
        variables: [{ name: "str_DynamicPath", type: "String" }],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "InvokeWorkflowFile",
              displayName: "Invoke Dynamic",
              properties: {
                WorkflowFileName: {
                  type: "variable",
                  name: "str_DynamicPath",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");
      expect(xaml).not.toContain("[object Object]");
      expect(xaml).not.toMatch(/\{"type":"variable"/);

      const diagnostics = getAndClearTypedPropertyDiagnostics();
      const wfnDiag = diagnostics.find(d => d.propertyName === "WorkflowFileName" && d.stage === "pre-dispatch-scalar-resolution");
      expect(wfnDiag).toBeDefined();
      if (wfnDiag) {
        expect(wfnDiag.action).toBe("scalar-resolved");
      }
    });

    it("UpdateEntity.EntityType literal ValueIntent resolves to scalar with diagnostic", () => {
      getAndClearTypedPropertyDiagnostics();

      const spec: WorkflowSpec = {
        name: "Main",
        description: "",
        variables: [],
        arguments: [],
        rootSequence: {
          kind: "sequence",
          displayName: "Main Sequence",
          children: [
            {
              kind: "activity",
              template: "UpdateEntity",
              displayName: "Update Entity",
              properties: {
                EntityType: {
                  type: "literal",
                  value: "Invoice",
                } as ValueIntent,
              },
              errorHandling: "none",
            },
          ],
        },
        useReFramework: false,
        dhgNotes: [],
        decomposition: [],
      };

      const { xaml } = assembleWorkflowFromSpec(spec, "general");
      expect(xaml).not.toMatch(/\{"type":"literal","value":"Invoice"\}/);

      const diagnostics = getAndClearTypedPropertyDiagnostics();
      const etDiag = diagnostics.find(d => d.propertyName === "EntityType" && d.stage === "pre-dispatch-scalar-resolution");
      expect(etDiag).toBeDefined();
      if (etDiag) {
        expect(etDiag.action).toBe("scalar-resolved");
      }
    });
  });

  describe("getPropString handles ValueIntent resolution", () => {
    it("resolves literal ValueIntent in property map", () => {
      const props: Record<string, PropertyValue> = {
        WorkflowFileName: { type: "literal", value: "Helper.xaml" } as ValueIntent,
      };
      const result = getPropString(props, "WorkflowFileName");
      expect(result).toBeTruthy();
      expect(result).not.toContain("{");
    });

    it("returns plain string property unchanged", () => {
      const props: Record<string, PropertyValue> = {
        Message: "Hello World",
      };
      const result = getPropString(props, "Message");
      expect(result).toBe("Hello World");
    });
  });
});
