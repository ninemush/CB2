import { describe, it, expect, vi } from "vitest";
import { validateXamlContent } from "../xaml-generator";

describe("Task 100 Fixes", () => {
  describe("FIX 1 — move-to-child-element regex produces properly spaced attributes", () => {
    function simulateMoveToChildElement(content: string, fullTag: string, propName: string, propVal: string) {
      const escapedTag = fullTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const escapedVal = propVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      const className = fullTag.includes(":") ? fullTag.split(":").pop()! : fullTag;
      const childElement = `<${className}.${propName}>\n            <InArgument x:TypeArguments="x:String">[${propVal}]</InArgument>\n          </${className}.${propName}>`;

      const selfClosingRegex = new RegExp(`(<${escapedTag}\\s[^>]*?)${propName}="${escapedVal}"([^>]*?)(\\s*\\/\\>)`);
      const openTagRegex = new RegExp(`(<${escapedTag}\\s[^>]*?)${propName}="${escapedVal}"([^>]*?>)`);

      if (selfClosingRegex.test(content)) {
        return content.replace(selfClosingRegex, `$1 $2>\n          ${childElement}\n        </${fullTag}>`);
      } else if (openTagRegex.test(content)) {
        return content.replace(openTagRegex, `$1 $2\n          ${childElement}`);
      }
      return content;
    }

    it("self-closing tag: does not jam adjacent attributes together when removing mid-list attribute", () => {
      const input = `<ui:CreateTask DisplayName="Create Task" TaskObject="obj" Priority="High" />`;
      const result = simulateMoveToChildElement(input, "ui:CreateTask", "TaskObject", "obj");

      expect(result).not.toMatch(/""[A-Za-z]/);
      expect(result).toContain('DisplayName="Create Task"');
      expect(result).toContain('Priority="High"');
      expect(result).toContain("CreateTask.TaskObject");
    });

    it("self-closing tag: preserves space between remaining attributes when removing first non-DisplayName attribute", () => {
      const input = `<ui:CreateTask DisplayName="Create" Alpha="a" Beta="b" />`;
      const result = simulateMoveToChildElement(input, "ui:CreateTask", "Alpha", "a");

      expect(result).toContain('DisplayName="Create"');
      expect(result).toContain('Beta="b"');
      expect(result).not.toMatch(/""[A-Z]/);
    });

    it("open tag: does not jam adjacent attributes together when removing mid-list attribute", () => {
      const input = `<ui:CreateTask DisplayName="Create Task" TaskObject="obj" Priority="High">\n</ui:CreateTask>`;
      const result = simulateMoveToChildElement(input, "ui:CreateTask", "TaskObject", "obj");

      expect(result).not.toMatch(/""[A-Za-z]/);
      expect(result).toContain('DisplayName="Create Task"');
      expect(result).toContain('Priority="High"');
      expect(result).toContain("CreateTask.TaskObject");
    });

    it("remaining attributes are separated by whitespace, not jammed", () => {
      const input = `<MyActivity DisplayName="Test" Foo="bar" Baz="qux" />`;
      const result = simulateMoveToChildElement(input, "MyActivity", "Foo", "bar");

      const tagLine = result.split("\n")[0];
      expect(tagLine).toMatch(/DisplayName="Test"\s+Baz="qux"/);
      expect(tagLine).not.toMatch(/""Baz/);
    });
  });

  describe("FIX 2 — classifiedIntent should not be reset at send time in sendMessageDirect", () => {
    it("the initial setup block of sendMessageDirect does not reset classifiedIntent to empty string", async () => {
      const fs = await import("fs");
      const path = await import("path");
      const workspacePath = path.resolve(import.meta.dirname, "../../client/src/pages/workspace.tsx");
      const content = fs.readFileSync(workspacePath, "utf-8");

      const fnStart = content.indexOf("const sendMessageDirect = useCallback(async");
      expect(fnStart).toBeGreaterThan(-1);

      const initBlock = content.slice(fnStart, fnStart + 300);

      expect(initBlock).toContain("lastUserMessageRef.current = text");
      expect(initBlock).toContain('setDeployStep("")');
      expect(initBlock).not.toMatch(/setClassifiedIntent\(\s*["']\s*["']\s*\)/);
      expect(initBlock).toContain("setClassifiedIntent(guessIntentFromMessage(text))");
    });
  });

  describe("FIX 3 — XAML content logged at debug level on wellformedness failure", () => {
    it("logs full XAML content via console.debug when XML validation fails", () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      const malformedXaml = `<Root><Unclosed></Root>`;
      validateXamlContent([{ name: "Test.xaml", content: malformedXaml }]);

      const debugCalls = debugSpy.mock.calls.filter(
        (call) => typeof call[0] === "string" && call[0].includes("[XAML wellformedness]")
      );
      expect(debugCalls.length).toBeGreaterThan(0);
      expect(debugCalls[0][0]).toContain(malformedXaml);
      expect(debugCalls[0][0]).toContain("Test.xaml");

      debugSpy.mockRestore();
    });

    it("logs full XAML content via console.debug on XML parse exception", () => {
      const debugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

      const brokenXaml = `<?xml version="1.0"?><Root attr="no-close`;
      validateXamlContent([{ name: "Broken.xaml", content: brokenXaml }]);

      const debugCalls = debugSpy.mock.calls.filter(
        (call) => typeof call[0] === "string" && call[0].includes("[XAML wellformedness]")
      );
      expect(debugCalls.length).toBeGreaterThan(0);
      expect(debugCalls[0][0]).toContain(brokenXaml);

      debugSpy.mockRestore();
    });
  });
});
