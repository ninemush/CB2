import { describe, it, expect } from "vitest";
import { resolveActivityTemplate, assembleWorkflowFromSpec } from "../workflow-tree-assembler";
import { normalizeXaml } from "../xaml/xaml-compliance";
import { catalogService } from "../catalog/catalog-service";
import type { ActivityNode, WorkflowSpec } from "../workflow-spec-types";

describe("Birthday Body path isolation (E8)", () => {
  it("dedicated template emits Body under all conditions", () => {
    const makeNode = (props: Record<string, string>, label: string): ActivityNode => ({
      kind: "activity",
      template: "SendSmtpMailMessage",
      displayName: label,
      properties: props,
      errorHandling: "none",
    });

    const cases: Array<{ label: string; props: Record<string, string>; loadCatalog: boolean }> = [
      { label: "Body provided, catalog off", props: { To: "t@t.com", Subject: "Hi", Body: "Hello", Server: "smtp", Port: "587", IsBodyHtml: "False" }, loadCatalog: false },
      { label: "Body absent, catalog off", props: { To: "t@t.com", Subject: "Hi", Server: "smtp", Port: "587" }, loadCatalog: false },
      { label: "Body provided, catalog on", props: { To: "t@t.com", Subject: "Hi", Body: "Hello", Server: "smtp", Port: "587", IsBodyHtml: "False" }, loadCatalog: true },
      { label: "Body absent, catalog on", props: { To: "t@t.com", Subject: "Hi", Server: "smtp", Port: "587" }, loadCatalog: true },
      { label: "Body empty string, catalog on", props: { To: "t@t.com", Subject: "Hi", Body: "", Server: "smtp", Port: "587" }, loadCatalog: true },
    ];

    for (const c of cases) {
      if (c.loadCatalog && !catalogService.isLoaded()) {
        catalogService.load();
      }
      const node = makeNode(c.props, c.label);
      const xml = resolveActivityTemplate(node, []);
      expect(xml, `${c.label}: must contain SendSmtpMailMessage.Body child element`).toContain("SendSmtpMailMessage.Body");
      expect(xml, `${c.label}: must use ui: prefix`).toMatch(/<ui:SendSmtpMailMessage/);
    }
  });

  it("normalizeXaml corrects ui: to umail: while preserving Body child element", () => {
    if (!catalogService.isLoaded()) catalogService.load();

    const node: ActivityNode = {
      kind: "activity",
      template: "SendSmtpMailMessage",
      displayName: "Send Birthday Email",
      properties: { To: "t@t.com", Subject: "Happy Birthday", Body: "Dear friend", Server: "smtp.test.com", Port: "587", IsBodyHtml: "False" },
      errorHandling: "none",
    };
    const rawXml = resolveActivityTemplate(node, []);
    expect(rawXml).toContain("<ui:SendSmtpMailMessage.Body>");

    const wrappedXaml = `<?xml version="1.0" encoding="utf-8"?>
<Activity x:Class="Test" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:ui="http://schemas.uipath.com/workflow/activities">
  <Sequence DisplayName="Main">
    ${rawXml}
  </Sequence>
</Activity>`;

    const normalized = normalizeXaml(wrappedXaml);
    expect(normalized, "Must contain umail:SendSmtpMailMessage after normalization").toContain("umail:SendSmtpMailMessage");
    expect(normalized, "Must contain umail:SendSmtpMailMessage.Body after normalization").toContain("umail:SendSmtpMailMessage.Body");
    expect(normalized, "Must NOT contain ui:SendSmtpMailMessage after normalization").not.toMatch(/<ui:SendSmtpMailMessage[\s>]/);
  });

  it("DEFECT REPRODUCTION: prefixed template 'ui:SendSmtpMailMessage' bypasses dedicated template and omits Body", () => {
    if (!catalogService.isLoaded()) catalogService.load();

    const prefixedNode: ActivityNode = {
      kind: "activity",
      template: "ui:SendSmtpMailMessage",
      displayName: "Send Birthday Email (prefixed)",
      properties: { To: "t@t.com", Subject: "Happy Birthday" },
      errorHandling: "none",
    };

    const bareNode: ActivityNode = {
      kind: "activity",
      template: "SendSmtpMailMessage",
      displayName: "Send Birthday Email (bare)",
      properties: { To: "t@t.com", Subject: "Happy Birthday" },
      errorHandling: "none",
    };

    const bareXml = resolveActivityTemplate(bareNode, []);
    expect(bareXml, "Bare template MUST emit Body").toContain("SendSmtpMailMessage.Body");

    const prefixedXml = resolveActivityTemplate(prefixedNode, []);
    const prefixedHasBody = prefixedXml.includes("SendSmtpMailMessage.Body") || prefixedXml.includes(".Body");

    expect(prefixedHasBody, "DEFECT CONFIRMED: prefixed template 'ui:SendSmtpMailMessage' does NOT emit Body child element — this is the root cause of DHG #36 violations #87-#90").toBe(false);
  });

  it("full assembleWorkflowFromSpec with SendSmtpMailMessage Body absent still emits Body", () => {
    if (!catalogService.isLoaded()) catalogService.load();

    const spec = {
      processName: "TestBirthdayEmail",
      processType: "general",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "SendSmtpMailMessage",
            displayName: "Send Birthday Email 1",
            properties: { To: "birthday@test.com", Subject: "Happy Birthday!", Server: "smtp.test.com", Port: "587" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "SendSmtpMailMessage",
            displayName: "Send Birthday Email 2",
            properties: { To: "birthday2@test.com", Subject: "Greetings!", Body: "Dear friend", Server: "smtp.test.com", Port: "587" },
            errorHandling: "none" as const,
          },
        ],
        variables: [
          { name: "str_EmailBody", type: "String", defaultValue: '""' },
        ],
      },
    };

    const { xaml } = assembleWorkflowFromSpec(spec, "general");
    const normalized = normalizeXaml(xaml);

    const bodyChildMatches = normalized.match(/SendSmtpMailMessage\.Body/g) || [];
    expect(bodyChildMatches.length, "Must have Body child element for both SendSmtpMailMessage instances").toBeGreaterThanOrEqual(2);

    const smtpMatches = normalized.match(/<(?:umail|ui):SendSmtpMailMessage[\s>]/g) || [];
    expect(smtpMatches.length, "Must have 2 SendSmtpMailMessage opening tags").toBe(2);
  });
});
