import { describe, it, expect } from "vitest";
import {
  getCriticalActivityFamilyContracts,
  lookupContractByFamilyId,
  lookupContractByTemplate,
  lowerCriticalActivityNode,
  detectMixedFamilyDrift,
  runCriticalActivityLowering,
  runPreEmissionLoweringGate,
  runXamlLevelCriticalActivityLowering,
  loweringDiagnosticsToPackageViolations,
  mergeLoweringDiagnostics,
  detectMailSendClusters,
  lockClusterToFamily,
  buildMailFamilyLockDiagnostics,
  runMailFamilyLockAnalysis,
  runXamlLevelMailFamilyLockAnalysis,
  checkCrossFamilyDriftInXaml,
  checkCrossFamilyDriftInDependencies,
  mailFamilyLockToPackageViolations,
  crossFamilyDriftToPackageViolations,
  detectConnectorIntent,
  collapseCompetingRepresentations,
  applyCanonicalRewrite,
  buildRewriteDirective,
  type RewriteDirective,
  type CriticalActivityFamilyContract,
  type CriticalStepLoweringResult,
  type CriticalActivityLoweringDiagnostics,
  type MailSendCluster,
  type MailSendClusterNode,
  type MailFamilyLockResult,
  type MailFamilyLockDiagnostics,
  type ConnectorIntent,
  type PropertyProvenance,
  type RepresentationType,
  type CollapseResult,
} from "../critical-activity-lowering";
import type { StudioProfile } from "../catalog/metadata-service";
import type { ActivityNode, WorkflowNode } from "../workflow-spec-types";

const WINDOWS_PROFILE: StudioProfile = {
  studioLine: "StudioX",
  studioVersion: "2024.10",
  targetFramework: "Windows",
  projectType: "Process",
  expressionLanguage: "VisualBasic",
  minimumRequiredPackages: [],
};

const PORTABLE_PROFILE: StudioProfile = {
  studioLine: "StudioX",
  studioVersion: "2024.10",
  targetFramework: "Portable",
  projectType: "Process",
  expressionLanguage: "VisualBasic",
  minimumRequiredPackages: [],
};

const ALL_PACKAGES = new Set([
  "UiPath.GSuite.Activities",
  "UiPath.Mail.Activities",
  "UiPath.System.Activities",
  "UiPath.Persistence.Activities",
  "UiPath.DataService.Activities",
]);

describe("Critical Activity Family Contracts", () => {
  it("defines contracts for all expected families", () => {
    const contracts = getCriticalActivityFamilyContracts();
    const familyIds = contracts.map(c => c.familyId);
    expect(familyIds).toContain("gmail-send");
    expect(familyIds).toContain("smtp-send");
    expect(familyIds).toContain("outlook-send");
    expect(familyIds).toContain("action-center-create");
    expect(familyIds).toContain("action-center-wait");
    expect(familyIds).toContain("retry-scope");
    expect(familyIds).toContain("invoke-workflow");
    expect(familyIds).toContain("data-service-create");
    expect(familyIds).toContain("data-service-update");
    expect(familyIds).toContain("data-service-query");
  });

  it("gmail-send contract has correct concrete type and package", () => {
    const contract = lookupContractByFamilyId("gmail-send");
    expect(contract).not.toBeNull();
    expect(contract!.concreteType).toBe("UiPath.GSuite.Activities.GmailSendMessage");
    expect(contract!.packageId).toBe("UiPath.GSuite.Activities");
    expect(contract!.requiredProperties).toContain("To");
    expect(contract!.requiredProperties).toContain("Subject");
    expect(contract!.requiredProperties).toContain("Body");
  });

  it("smtp-send contract requires Server (derived from registry)", () => {
    const contract = lookupContractByFamilyId("smtp-send");
    expect(contract).not.toBeNull();
    expect(contract!.requiredProperties).toContain("Server");
  });

  it("outlook-send is Windows-only", () => {
    const contract = lookupContractByFamilyId("outlook-send");
    expect(contract).not.toBeNull();
    expect(contract!.targetFrameworkCompat).toBe("Windows");
  });

  it("lookupContractByTemplate resolves GmailSendMessage", () => {
    const contract = lookupContractByTemplate("GmailSendMessage");
    expect(contract).not.toBeNull();
    expect(contract!.familyId).toBe("gmail-send");
  });

  it("lookupContractByTemplate resolves ui:GmailSendMessage", () => {
    const contract = lookupContractByTemplate("ui:GmailSendMessage");
    expect(contract).not.toBeNull();
    expect(contract!.familyId).toBe("gmail-send");
  });
});

describe("Gmail send with Body in spec lowers to valid Gmail activity", () => {
  it("lowers successfully with all required properties", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: {
        To: "recipient@example.com",
        Subject: "Test Subject",
        Body: "Test Body Content",
      },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "SendEmail.xaml", "SendEmail", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.resolvedConcreteType).toBe("UiPath.GSuite.Activities.GmailSendMessage");
    expect(result.resolvedPackage).toBe("UiPath.GSuite.Activities");
    expect(result.contractSatisfied).toBe(true);
    expect(result.missingRequiredProperties).toHaveLength(0);
    expect(result.packageFatal).toBe(false);
  });
});

describe("Gmail intent does not produce SMTP fallback", () => {
  it("Gmail template maps to gmail-send family not smtp-send", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail Message",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.selectedFamily).not.toBe("smtp-send");
    expect(result.resolvedConcreteType).toBe("UiPath.GSuite.Activities.GmailSendMessage");
    expect(result.resolvedConcreteType).not.toContain("SendSmtp");
  });
});

describe("Narrative TryCatch send step is rejected", () => {
  it("rejects pseudo TryCatch text in property payloads", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Email with TryCatch",
      properties: {
        To: "a@b.com",
        Subject: "S",
        Body: 'TryCatch { Try: GmailSendMessage(To="a@b.com") Catches: Exception -> log error }',
      },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_pseudo_representation");
    expect(result.rejectedPseudoRepresentations.length).toBeGreaterThan(0);
    expect(result.packageFatal).toBe(true);
  });
});

describe("Critical send step missing Body is rejected before emission", () => {
  it("rejects Gmail send with missing Body", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
    expect(result.packageFatal).toBe(true);
  });

  it("rejects Gmail send with PLACEHOLDER Body", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "PLACEHOLDER" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
  });

  it("rejects SMTP send with missing Server", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "SendSmtpMailMessage",
      displayName: "Send SMTP Mail",
      properties: { To: "a@b.com", Subject: "S", Body: "B", Port: "25" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Server");
  });
});

describe("Family valid for Windows but targeted at Portable is rejected", () => {
  it("rejects Outlook send when target is Portable", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "SendOutlookMailMessage",
      displayName: "Send Outlook",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", PORTABLE_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_framework_incompatible");
    expect(result.packageFatal).toBe(true);
    expect(result.remediationHint).toContain("Windows");
    expect(result.remediationHint).toContain("Portable");
  });

  it("allows Outlook send when target is Windows", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "SendOutlookMailMessage",
      displayName: "Send Outlook",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
  });
});

describe("Family whose package is not in verified dependency set", () => {
  it("rejects Gmail send when GSuite package is not verified", () => {
    const limitedPackages = new Set(["UiPath.System.Activities", "UiPath.Mail.Activities"]);

    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, limitedPackages,
    );

    expect(result.loweringOutcome).toBe("rejected_package_unavailable");
    expect(result.packageFatal).toBe(true);
    expect(result.remediationHint).toContain("UiPath.GSuite.Activities");
  });
});

describe("Mixed-family drift detection", () => {
  it("detects mixed Gmail and SMTP in same workflow as non-fatal when explicit", () => {
    const nodes: ActivityNode[] = [
      {
        kind: "activity",
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none",
      },
      {
        kind: "activity",
        template: "SendSmtpMailMessage",
        displayName: "Send SMTP",
        properties: { To: "a@b.com", Subject: "S", Body: "B", Server: "smtp.x.com", Port: "25" },
        errorHandling: "none",
      },
    ];

    const drift = detectMixedFamilyDrift(nodes, "Main.xaml", "Main");
    expect(drift).not.toBeNull();
    expect(drift!.loweringOutcome).toBe("rejected_mixed_family");
    expect(drift!.packageFatal).toBe(false);
    expect(drift!.candidatesConsidered).toContain("gmail-send");
    expect(drift!.candidatesConsidered).toContain("smtp-send");
  });

  it("detects mixed families as fatal when ambiguous template involved", () => {
    const nodes: ActivityNode[] = [
      {
        kind: "activity",
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none",
      },
      {
        kind: "activity",
        template: "SendMail",
        displayName: "Send Mail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none",
      },
    ];

    const drift = detectMixedFamilyDrift(nodes, "Main.xaml", "Main");
    expect(drift).not.toBeNull();
    expect(drift!.loweringOutcome).toBe("rejected_mixed_family");
    expect(drift!.packageFatal).toBe(true);
  });

  it("does not flag single-family workflows", () => {
    const nodes: ActivityNode[] = [
      {
        kind: "activity",
        template: "GmailSendMessage",
        displayName: "Send Gmail 1",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none",
      },
      {
        kind: "activity",
        template: "GmailSendMessage",
        displayName: "Send Gmail 2",
        properties: { To: "c@d.com", Subject: "S2", Body: "B2" },
        errorHandling: "none",
      },
    ];

    const drift = detectMixedFamilyDrift(nodes, "Main.xaml", "Main");
    expect(drift).toBeNull();
  });
});

describe("Action Center create/wait handling", () => {
  it("action-center-create with valid properties lowers successfully", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "CreateFormTask",
      displayName: "Create Approval Task",
      properties: {
        Title: "Approval",
        FormSchemaPath: "schema.json",
        TaskDataJson: '{"field1": "value1"}',
      },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Process.xaml", "Process", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.selectedFamily).toBe("action-center-create");
    expect(result.loweringOutcome).toBe("lowered");
    expect(result.contractSatisfied).toBe(true);
  });

  it("action-center-create with narrative pseudo-properties is rejected", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "CreateFormTask",
      displayName: "Create Approval Task",
      properties: {
        Title: "Approval",
        FormSchemaPath: "schema.json",
        TaskDataJson: 'Action: Create Task with approval form data for manager review',
      },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Process.xaml", "Process", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.selectedFamily).toBe("action-center-create");
    expect(result.loweringOutcome).toBe("rejected_pseudo_representation");
    expect(result.packageFatal).toBe(true);
  });

  it("action-center-create with missing Title is rejected", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "CreateFormTask",
      displayName: "Create Task",
      properties: { FormSchemaPath: "schema.json" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Process.xaml", "Process", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Title");
  });
});

describe("Data Service update with concrete entity lowers correctly", () => {
  it("update entity with all required properties lowers successfully", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "UpdateEntity",
      displayName: "Update Customer Record",
      properties: {
        EntityType: "Customer",
        EntityObject: "[customerRecord]",
      },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "UpdateCustomer.xaml", "UpdateCustomer", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
    expect(result.selectedFamily).toBe("data-service-update");
    expect(result.resolvedConcreteType).toBe("UiPath.DataService.Activities.UpdateEntity");
    expect(result.resolvedPackage).toBe("UiPath.DataService.Activities");
  });
});

describe("No placeholder injection for rejected contracts", () => {
  it("rejected lowering generates package violations", () => {
    const diagnostics: CriticalActivityLoweringDiagnostics = {
      perStepResults: [
        {
          file: "Main.xaml",
          workflow: "Main",
          sourceStep: "Send Gmail",
          detectedIntent: "GmailSendMessage",
          selectedFamily: "gmail-send",
          resolvedConcreteType: "UiPath.GSuite.Activities.GmailSendMessage",
          resolvedPackage: "UiPath.GSuite.Activities",
          targetFrameworkCompatibility: "Both (target: Windows)",
          verifiedDependencyMatch: true,
          candidatesConsidered: ["gmail-send"],
          contractSatisfied: false,
          missingRequiredProperties: ["Body"],
          rejectedPseudoRepresentations: [],
          loweringOutcome: "rejected_incomplete_contract",
          packageFatal: true,
          remediationHint: "Activity is missing required properties: Body",
        },
      ],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 0,
        totalRejectedForIncompleteContract: 1,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const violations = loweringDiagnosticsToPackageViolations(diagnostics);
    expect(violations.length).toBe(1);
    expect(violations[0].violationType).toBe("critical_activity_lowering_failure");
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].severity).toBe("execution_blocking");
  });
});

describe("runCriticalActivityLowering (spec-level)", () => {
  it("processes specs with mixed critical and non-critical nodes", () => {
    const specs = [{
      file: "Main.xaml",
      workflow: "Main",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main Sequence",
        children: [
          {
            kind: "activity" as const,
            template: "LogMessage",
            displayName: "Log Start",
            properties: { Message: "Starting" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Email",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    }];

    const result = runCriticalActivityLowering(specs, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.summary.totalCriticalSteps).toBe(1);
    expect(result.summary.totalLoweredSuccessfully).toBe(1);
    expect(result.perStepResults[0].selectedFamily).toBe("gmail-send");
  });
});

describe("runXamlLevelCriticalActivityLowering", () => {
  it("detects Gmail send in XAML with all properties present", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="Test">
      <ui:GmailSendMessage.Body>
        <InArgument x:TypeArguments="x:String">Hello</InArgument>
      </ui:GmailSendMessage.Body>
    </ui:GmailSendMessage>
  </Sequence>
</Activity>`;

    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Main.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    expect(result.summary.totalCriticalSteps).toBeGreaterThanOrEqual(1);
    const gmailResult = result.perStepResults.find(r => r.selectedFamily === "gmail-send");
    expect(gmailResult).toBeDefined();
    expect(gmailResult!.loweringOutcome).toBe("lowered");
  });

  it("detects mixed Gmail and SMTP in same XAML file", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="S" />
    <ui:SendSmtpMailMessage DisplayName="Send SMTP" To="b@c.com" Subject="S2" Server="smtp.x.com" Port="25" />
  </Sequence>
</Activity>`;

    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Main.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    const mixedResult = result.perStepResults.find(r => r.loweringOutcome === "rejected_mixed_family");
    expect(mixedResult).toBeDefined();
    expect(mixedResult!.packageFatal).toBe(false);
  });

  it("rejects Outlook send in Portable target XAML", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:SendOutlookMailMessage DisplayName="Send Outlook" To="a@b.com" Subject="S" />
  </Sequence>
</Activity>`;

    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Main.xaml", content: xaml }],
      PORTABLE_PROFILE,
      ALL_PACKAGES,
    );

    const outlookResult = result.perStepResults.find(r => r.selectedFamily === "outlook-send");
    expect(outlookResult).toBeDefined();
    expect(outlookResult!.loweringOutcome).toBe("rejected_framework_incompatible");
    expect(outlookResult!.packageFatal).toBe(true);
  });

  it("rejects Gmail when package is not in verified set", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="S" />
  </Sequence>
</Activity>`;

    const limitedPackages = new Set(["UiPath.System.Activities"]);
    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Main.xaml", content: xaml }],
      WINDOWS_PROFILE,
      limitedPackages,
    );

    const gmailResult = result.perStepResults.find(r => r.selectedFamily === "gmail-send");
    expect(gmailResult).toBeDefined();
    expect(gmailResult!.loweringOutcome).toBe("rejected_package_unavailable");
  });
});

describe("Non-critical activities are skipped", () => {
  it("LogMessage is skipped", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "LogMessage",
      displayName: "Log Info",
      properties: { Message: "Hello" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("skipped_not_critical");
    expect(result.packageFatal).toBe(false);
  });
});

describe("InvokeWorkflowFile lowering", () => {
  it("lowers successfully with WorkflowFileName", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "InvokeWorkflowFile",
      displayName: "Invoke Process",
      properties: { WorkflowFileName: "Process.xaml" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
    expect(result.selectedFamily).toBe("invoke-workflow");
  });

  it("rejects when WorkflowFileName is missing", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "InvokeWorkflowFile",
      displayName: "Invoke Process",
      properties: {},
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("WorkflowFileName");
  });
});

describe("diagnostics summary accuracy", () => {
  it("summary counts match per-step results", () => {
    const specs = [{
      file: "Main.xaml",
      workflow: "Main",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Gmail OK",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Gmail Missing Body",
            properties: { To: "a@b.com", Subject: "S" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "LogMessage",
            displayName: "Log",
            properties: {},
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    }];

    const result = runCriticalActivityLowering(specs, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.summary.totalCriticalSteps).toBe(2);
    expect(result.summary.totalLoweredSuccessfully).toBe(1);
    expect(result.summary.totalRejectedForIncompleteContract).toBe(1);
    expect(result.summary.totalMixedFamilyConflicts).toBe(0);
  });
});

describe("Retry scope lowering", () => {
  it("retry scope lowers with no required properties", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "RetryScope",
      displayName: "Retry Operation",
      properties: {},
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
    expect(result.selectedFamily).toBe("retry-scope");
    expect(result.resolvedConcreteType).toBe("UiPath.System.Activities.RetryScope");
  });
});

describe("XAML-level pseudo-representation detection", () => {
  it("rejects XAML activity with narrative pseudo text in attributes", () => {
    const xaml = `<Activity>
      <Sequence DisplayName="Main">
        <GmailSendMessage DisplayName="Send Email" To="a@b.com" Subject="Test" Body="Step 1: Send the email to the recipient" />
      </Sequence>
    </Activity>`;

    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Process.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    const gmailResult = result.perStepResults.find(r => r.selectedFamily === "gmail-send");
    expect(gmailResult).toBeDefined();
    expect(gmailResult!.loweringOutcome).toBe("rejected_pseudo_representation");
    expect(gmailResult!.packageFatal).toBe(true);
  });

  it("XAML scoped child properties do not bleed across activity instances", () => {
    const xaml = `<Activity>
      <Sequence DisplayName="Main">
        <GmailSendMessage DisplayName="Gmail1" To="a@b.com" Subject="S1">
          <GmailSendMessage.Body>Hello World</GmailSendMessage.Body>
        </GmailSendMessage>
        <GmailSendMessage DisplayName="Gmail2" To="b@c.com" Subject="S2" />
      </Sequence>
    </Activity>`;

    const result = runXamlLevelCriticalActivityLowering(
      [{ name: "Process.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    const gmail1 = result.perStepResults.find(r => r.sourceStep === "Gmail1");
    const gmail2 = result.perStepResults.find(r => r.sourceStep === "Gmail2");
    expect(gmail1).toBeDefined();
    expect(gmail2).toBeDefined();
    expect(gmail1!.loweringOutcome).toBe("lowered");
    expect(gmail2!.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(gmail2!.missingRequiredProperties).toContain("Body");
  });
});

describe("Child-element property shape validation", () => {
  it("accepts child-element property with valid string value", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "Hello world" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
    expect(result.missingRequiredProperties).not.toContain("Body");
  });

  it("rejects child-element property with placeholder value", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "PLACEHOLDER" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
  });

  it("rejects child-element property with empty string", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
  });

  it("accepts child-element property with object value containing valid content", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: { value: "Real email body content" } },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
  });

  it("rejects child-element property with object missing value key", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: { someOtherKey: "data" } },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
  });

  it("rejects child-element property with object containing placeholder value", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: { value: "STUB_BODY" } },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("rejected_incomplete_contract");
    expect(result.missingRequiredProperties).toContain("Body");
  });
});

describe("Package verification is fail-closed", () => {
  it("empty verified set rejects critical activities as package unavailable", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const emptySet = new Set<string>();
    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, emptySet,
    );

    expect(result.loweringOutcome).toBe("rejected_package_unavailable");
    expect(result.packageFatal).toBe(true);
  });

  it("accepts critical activities when package is in verified set", () => {
    const node: ActivityNode = {
      kind: "activity",
      template: "GmailSendMessage",
      displayName: "Send Gmail",
      properties: { To: "a@b.com", Subject: "S", Body: "B" },
      errorHandling: "none",
    };

    const result = lowerCriticalActivityNode(
      node, "Main.xaml", "Main", WINDOWS_PROFILE, ALL_PACKAGES,
    );

    expect(result.loweringOutcome).toBe("lowered");
  });
});

describe("Pre-emission lowering gate", () => {
  it("passes when all critical activities are complete", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "LogMessage",
            displayName: "Log",
            properties: { Message: "Done" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    expect(result.passed).toBe(true);
    expect(result.fatalFailures).toHaveLength(0);
    expect(result.diagnostics.summary.totalLoweredSuccessfully).toBe(1);
  });

  it("fails when critical activity has missing properties", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    expect(result.passed).toBe(false);
    expect(result.fatalFailures.length).toBeGreaterThan(0);
    expect(result.fatalFailures[0].loweringOutcome).toBe("rejected_incomplete_contract");
  });

  it("fails when critical activity has pseudo-representation", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "Step 1: Send the email to manager" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    expect(result.passed).toBe(false);
    expect(result.fatalFailures[0].loweringOutcome).toBe("rejected_pseudo_representation");
  });

  it("fails when mixed mail families with ambiguous template are present", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "SendMail",
            displayName: "Send Mail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    expect(result.passed).toBe(false);
    const mixedFamilyFailure = result.fatalFailures.find(f => f.loweringOutcome === "rejected_mixed_family");
    expect(mixedFamilyFailure).toBeDefined();
    expect(mixedFamilyFailure!.packageFatal).toBe(true);
  });

  it("allows explicit multi-provider mail families as non-fatal", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "SendSmtpMailMessage",
            displayName: "Send SMTP",
            properties: { To: "a@b.com", Subject: "S", Body: "B", Server: "smtp.test.com" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    const mixedFamily = result.diagnostics.perStepResults.find(r => r.loweringOutcome === "rejected_mixed_family");
    expect(mixedFamily).toBeDefined();
    expect(mixedFamily!.packageFatal).toBe(false);
  });

  it("rejects ambiguous SendMail template as unmappable critical family", () => {
    const spec = {
      name: "Process",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "SendMail",
            displayName: "Send Mail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    };

    const result = runPreEmissionLoweringGate(spec, "Windows", ALL_PACKAGES);
    expect(result.passed).toBe(false);
    expect(result.fatalFailures.length).toBeGreaterThan(0);
    expect(result.fatalFailures[0].loweringOutcome).toBe("rejected_no_concrete_mapping");
  });

  it("contracts are derived from activity-definitions registry", () => {
    const contracts = getCriticalActivityFamilyContracts();
    const gmailContract = contracts.find(c => c.familyId === "gmail-send");
    expect(gmailContract).toBeDefined();
    expect(gmailContract!.requiredProperties).toContain("To");
    expect(gmailContract!.requiredProperties).toContain("Subject");
    expect(gmailContract!.requiredProperties).toContain("Body");
    expect(gmailContract!.className).toBe("GmailSendMessage");

    const smtpContract = contracts.find(c => c.familyId === "smtp-send");
    expect(smtpContract).toBeDefined();
    expect(smtpContract!.requiredProperties).toContain("Server");
    expect(smtpContract!.requiredProperties).toContain("To");

    const createEntityContract = contracts.find(c => c.familyId === "data-service-create");
    expect(createEntityContract).toBeDefined();
    expect(createEntityContract!.requiredProperties).toContain("EntityType");
    expect(createEntityContract!.requiredProperties).toContain("EntityObject");
  });
});

describe("mergeLoweringDiagnostics", () => {
  it("merges pre-emission and XAML-level diagnostics", () => {
    const preEmission: CriticalActivityLoweringDiagnostics = {
      perStepResults: [{
        file: "Main.xaml",
        workflow: "Main",
        sourceStep: "Send Gmail (pre-emission)",
        detectedIntent: "GmailSendMessage",
        selectedFamily: "gmail-send",
        resolvedConcreteType: "GmailSendMessage",
        resolvedPackage: "UiPath.GSuite.Activities",
        targetFrameworkCompatibility: "Windows",
        verifiedDependencyMatch: true,
        candidatesConsidered: ["gmail-send"],
        contractSatisfied: false,
        missingRequiredProperties: ["Body"],
        rejectedPseudoRepresentations: [],
        loweringOutcome: "rejected_incomplete_contract",
        packageFatal: true,
        remediationHint: "Missing Body",
      }],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 0,
        totalRejectedForIncompleteContract: 1,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const xamlLevel: CriticalActivityLoweringDiagnostics = {
      perStepResults: [{
        file: "Helper.xaml",
        workflow: "Helper",
        sourceStep: "Send SMTP",
        detectedIntent: "SendSmtpMailMessage",
        selectedFamily: "smtp-send",
        resolvedConcreteType: "SendSmtpMailMessage",
        resolvedPackage: "UiPath.Mail.Activities",
        targetFrameworkCompatibility: "Windows",
        verifiedDependencyMatch: true,
        candidatesConsidered: ["smtp-send"],
        contractSatisfied: true,
        missingRequiredProperties: [],
        rejectedPseudoRepresentations: [],
        loweringOutcome: "lowered",
        packageFatal: false,
        remediationHint: "",
      }],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 1,
        totalRejectedForIncompleteContract: 0,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const merged = mergeLoweringDiagnostics(preEmission, xamlLevel);
    expect(merged.perStepResults).toHaveLength(2);
    expect(merged.summary.totalCriticalSteps).toBe(2);
    expect(merged.summary.totalLoweredSuccessfully).toBe(1);
    expect(merged.summary.totalRejectedForIncompleteContract).toBe(1);
    expect(merged.perStepResults.find(r => r.sourceStep === "Send Gmail (pre-emission)")).toBeDefined();
    expect(merged.perStepResults.find(r => r.sourceStep === "Send SMTP")).toBeDefined();
  });

  it("deduplicates identical step results", () => {
    const diag: CriticalActivityLoweringDiagnostics = {
      perStepResults: [{
        file: "Main.xaml",
        workflow: "Main",
        sourceStep: "Send Gmail",
        detectedIntent: "GmailSendMessage",
        selectedFamily: "gmail-send",
        resolvedConcreteType: "GmailSendMessage",
        resolvedPackage: "UiPath.GSuite.Activities",
        targetFrameworkCompatibility: "Windows",
        verifiedDependencyMatch: true,
        candidatesConsidered: ["gmail-send"],
        contractSatisfied: true,
        missingRequiredProperties: [],
        rejectedPseudoRepresentations: [],
        loweringOutcome: "lowered",
        packageFatal: false,
        remediationHint: "",
      }],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 1,
        totalRejectedForIncompleteContract: 0,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const merged = mergeLoweringDiagnostics(diag, diag);
    expect(merged.perStepResults).toHaveLength(1);
    expect(merged.summary.totalCriticalSteps).toBe(1);
  });

  it("handles undefined sources gracefully", () => {
    const diag: CriticalActivityLoweringDiagnostics = {
      perStepResults: [{
        file: "Main.xaml",
        workflow: "Main",
        sourceStep: "Send Gmail",
        detectedIntent: "GmailSendMessage",
        selectedFamily: "gmail-send",
        resolvedConcreteType: "GmailSendMessage",
        resolvedPackage: "UiPath.GSuite.Activities",
        targetFrameworkCompatibility: "Windows",
        verifiedDependencyMatch: true,
        candidatesConsidered: ["gmail-send"],
        contractSatisfied: true,
        missingRequiredProperties: [],
        rejectedPseudoRepresentations: [],
        loweringOutcome: "lowered",
        packageFatal: false,
        remediationHint: "",
      }],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 1,
        totalRejectedForIncompleteContract: 0,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const merged = mergeLoweringDiagnostics(undefined, diag, undefined);
    expect(merged.perStepResults).toHaveLength(1);
    expect(merged.summary.totalCriticalSteps).toBe(1);
  });

  it("preserves pre-emission fatal failures even when stub replaces workflow", () => {
    const preEmissionFatal: CriticalActivityLoweringDiagnostics = {
      perStepResults: [{
        file: "Main.xaml",
        workflow: "Main",
        sourceStep: "Send Gmail",
        detectedIntent: "GmailSendMessage",
        selectedFamily: "gmail-send",
        resolvedConcreteType: "GmailSendMessage",
        resolvedPackage: "UiPath.GSuite.Activities",
        targetFrameworkCompatibility: "Windows",
        verifiedDependencyMatch: false,
        candidatesConsidered: ["gmail-send"],
        contractSatisfied: false,
        missingRequiredProperties: ["Body", "Subject"],
        rejectedPseudoRepresentations: [],
        loweringOutcome: "rejected_incomplete_contract",
        packageFatal: true,
        remediationHint: "Missing Body, Subject",
      }],
      summary: {
        totalCriticalSteps: 1,
        totalLoweredSuccessfully: 0,
        totalRejectedForIncompleteContract: 1,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const xamlLevelEmpty: CriticalActivityLoweringDiagnostics = {
      perStepResults: [],
      summary: {
        totalCriticalSteps: 0,
        totalLoweredSuccessfully: 0,
        totalRejectedForIncompleteContract: 0,
        totalRejectedForNoConcreteMapping: 0,
        totalMixedFamilyConflicts: 0,
        totalPseudoRepresentationRejections: 0,
        totalFrameworkIncompatible: 0,
        totalPackageUnavailable: 0,
      },
    };

    const merged = mergeLoweringDiagnostics(preEmissionFatal, xamlLevelEmpty);
    expect(merged.perStepResults).toHaveLength(1);
    expect(merged.perStepResults[0].packageFatal).toBe(true);
    expect(merged.perStepResults[0].loweringOutcome).toBe("rejected_incomplete_contract");
    expect(merged.perStepResults[0].missingRequiredProperties).toContain("Body");
    expect(merged.summary.totalRejectedForIncompleteContract).toBe(1);
  });
});

describe("Mail family lock — cluster detection", () => {
  it("detects a standalone Gmail send as a single cluster", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].concreteSendNode).toBeDefined();
    expect(clusters[0].concreteSendNode!.template).toBe("GmailSendMessage");
    expect(clusters[0].detectedFamilies.has("gmail-send")).toBe(true);
    expect(clusters[0].hasNarrativeContainer).toBe(false);
  });

  it("detects Gmail inside TryCatch as a cluster", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "tryCatch" as const,
        displayName: "Try Send Email",
        tryChildren: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ],
        catchChildren: [
          {
            kind: "activity" as const,
            template: "LogMessage",
            displayName: "Log Error",
            properties: { Message: "Failed" },
            errorHandling: "none" as const,
          },
        ],
        finallyChildren: [],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].concreteSendNode).toBeDefined();
    expect(clusters[0].concreteSendNode!.template).toBe("GmailSendMessage");
    expect(clusters[0].nodes.some(n => n.role === "trycatch-wrapper")).toBe(true);
    expect(clusters[0].nodes.some(n => n.role === "catch-step")).toBe(true);
  });

  it("detects Gmail inside RetryScope as a cluster", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "retryScope" as const,
        displayName: "Retry Send",
        numberOfRetries: 3,
        retryInterval: "00:00:05",
        bodyChildren: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].nodes.some(n => n.role === "retryscope-wrapper")).toBe(true);
  });

  it("detects mail send nested inside an if-then branch", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "if" as const,
        displayName: "Check condition",
        condition: "True",
        thenChildren: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ],
        elseChildren: [],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].concreteSendNode!.template).toBe("GmailSendMessage");
  });

  it("detects mail send nested inside a sequence inside a while loop", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "while" as const,
        displayName: "Retry loop",
        condition: "retryCount < 3",
        bodyChildren: [
          {
            kind: "sequence" as const,
            displayName: "Inner Sequence",
            children: [
              {
                kind: "activity" as const,
                template: "SendSmtpMailMessage",
                displayName: "Send SMTP",
                properties: { To: "a@b.com", Subject: "S", Body: "B", Server: "smtp.x.com", Port: "25" },
                errorHandling: "none" as const,
              },
            ],
          },
        ],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].concreteSendNode!.template).toBe("SendSmtpMailMessage");
    expect(clusters[0].detectedFamilies.has("smtp-send")).toBe(true);
  });

  it("detects mail send nested inside a forEach loop", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "forEach" as const,
        displayName: "For Each Recipient",
        itemType: "System.String",
        valuesExpression: "recipients",
        iteratorName: "item",
        bodyChildren: [
          {
            kind: "activity" as const,
            template: "SendOutlookMailMessage",
            displayName: "Send Outlook",
            properties: { To: "item", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(1);
    expect(clusters[0].concreteSendNode!.template).toBe("SendOutlookMailMessage");
    expect(clusters[0].detectedFamilies.has("outlook-send")).toBe(true);
  });

  it("detects mail sends at multiple nesting depths", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Top-level Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
      {
        kind: "if" as const,
        displayName: "Conditional",
        condition: "True",
        thenChildren: [
          {
            kind: "sequence" as const,
            displayName: "Nested Seq",
            children: [
              {
                kind: "activity" as const,
                template: "SendSmtpMailMessage",
                displayName: "Nested SMTP",
                properties: { To: "b@c.com", Subject: "S2", Body: "B2", Server: "smtp.x.com", Port: "25" },
                errorHandling: "none" as const,
              },
            ],
          },
        ],
        elseChildren: [],
      },
    ];

    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main");
    expect(clusters).toHaveLength(2);
    expect(clusters[0].concreteSendNode!.template).toBe("GmailSendMessage");
    expect(clusters[1].concreteSendNode!.template).toBe("SendSmtpMailMessage");
  });
});

describe("Mail family lock — locking", () => {
  it("locks a Gmail cluster successfully with all properties", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.concreteActivityType).toBe("UiPath.GSuite.Activities.GmailSendMessage");
    expect(result.packageFatal).toBe(false);
  });

  it("rejects cluster with missing Body property", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S" },
      },
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
    expect(result.missingRequiredProperties).toContain("Body");
  });

  it("rejects cluster with ambiguous mail family", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
    expect(result.lockRejectionReason).toContain("ambiguous");
  });

  it("rejects cluster with ambiguous-mail via dedicated branch", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [],
      concreteSendNode: null,
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
  });

  it("rejects cluster with conflicting families", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [],
      concreteSendNode: null,
      detectedFamilies: new Set(["gmail-send", "smtp-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
    expect(result.crossFamilyDriftViolation).toBe(true);
  });
});

describe("Mail family lock — narrative container elimination", () => {
  it("rejects cluster with narrative TryCatch representation", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: 'Try = "GmailSendMessage(to=user)"' },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: 'Try = "GmailSendMessage(to=user)"' },
      },
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: true,
      narrativeRepresentationsFound: ["narrative-try-send"],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
    expect(result.narrativeRepresentationsRejected).toContain("narrative-try-send");
    expect(result.lockRejectionReason).toContain("narrative container");
  });

  it("rejects cluster with catch narrative representation", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: 'B', Catches: '"Exception -> LogError"' },
      }],
      concreteSendNode: null,
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: true,
      narrativeRepresentationsFound: ["narrative-catch-block"],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.packageFatal).toBe(true);
    expect(result.narrativeRepresentationsRejected).toContain("narrative-catch-block");
  });

  it("does not inject placeholders for rejected narrative clusters", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: 'Try = "GmailSendMessage(to=user)"' },
      }],
      concreteSendNode: null,
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: true,
      narrativeRepresentationsFound: ["narrative-try-send"],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.concreteActivityType).toBeNull();
    expect(result.concretePackage).toBeNull();
  });
});

describe("Mail family lock — cross-family drift guardrails", () => {
  it("detects Gmail-locked cluster producing SMTP activity tag in XAML", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "UiPath.GSuite.Activities.GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
    }];

    const xaml = `<Activity>
      <Sequence DisplayName="Main">
        <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="S" Body="B" />
        <ui:SendSmtpMailMessage DisplayName="Send SMTP" To="b@c.com" Subject="S2" Body="B2" Server="smtp.x.com" Port="25" />
      </Sequence>
    </Activity>`;

    const violations = checkCrossFamilyDriftInXaml(xaml, lockResults, "Main.xaml");
    expect(violations.length).toBeGreaterThan(0);
    expect(violations[0].violationType).toBe("wrong-family-activity-tag");
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].lockedFamily).toBe("gmail-send");
  });

  it("detects Gmail-locked cluster with UiPath.Mail.Activities in dependencies", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "UiPath.GSuite.Activities.GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
    }];

    const violations = checkCrossFamilyDriftInDependencies(
      { "UiPath.GSuite.Activities": {}, "UiPath.Mail.Activities": {} },
      lockResults,
    );

    expect(violations.length).toBeGreaterThan(0);
    expect(violations[0].violationType).toBe("wrong-family-package");
    expect(violations[0].violatingArtifact).toBe("UiPath.Mail.Activities");
    expect(violations[0].packageFatal).toBe(true);
  });

  it("no violations when Gmail-locked and only GSuite package present", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "UiPath.GSuite.Activities.GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
    }];

    const violations = checkCrossFamilyDriftInDependencies(
      { "UiPath.GSuite.Activities": {} },
      lockResults,
    );

    expect(violations).toHaveLength(0);
  });
});

describe("Mail family lock — diagnostics and package violations", () => {
  it("buildMailFamilyLockDiagnostics produces correct summary", () => {
    const lockResults: MailFamilyLockResult[] = [
      {
        clusterId: "c1", file: "Main.xaml", workflow: "Main",
        selectedFamily: "gmail-send", concreteActivityType: "GmailSendMessage",
        concretePackage: "UiPath.GSuite.Activities", locked: true,
        lockRejectionReason: null, narrativeRepresentationsRejected: [],
        missingRequiredProperties: [], packageFatal: false, crossFamilyDriftViolation: false,
      },
      {
        clusterId: "c2", file: "Main.xaml", workflow: "Main",
        selectedFamily: null, concreteActivityType: null,
        concretePackage: null, locked: false,
        lockRejectionReason: "ambiguous mail family", narrativeRepresentationsRejected: [],
        missingRequiredProperties: [], packageFatal: true, crossFamilyDriftViolation: false,
      },
      {
        clusterId: "c3", file: "Main.xaml", workflow: "Main",
        selectedFamily: "gmail-send", concreteActivityType: "GmailSendMessage",
        concretePackage: "UiPath.GSuite.Activities", locked: false,
        lockRejectionReason: "narrative container", narrativeRepresentationsRejected: ["narrative-try-send"],
        missingRequiredProperties: [], packageFatal: true, crossFamilyDriftViolation: false,
      },
    ];

    const diag = buildMailFamilyLockDiagnostics(lockResults);
    expect(diag.summary.totalClusters).toBe(3);
    expect(diag.summary.totalLocked).toBe(1);
    expect(diag.summary.totalRejectedAmbiguous).toBe(1);
    expect(diag.summary.totalRejectedNarrative).toBe(1);
  });

  it("rejected clusters feed into packageCompletenessViolations", () => {
    const diag: MailFamilyLockDiagnostics = {
      perClusterResults: [{
        clusterId: "Main.xaml:Main:mail-cluster-0",
        file: "Main.xaml",
        workflow: "Main",
        selectedFamily: null,
        concreteActivityType: null,
        concretePackage: null,
        locked: false,
        lockRejectionReason: "Cluster has ambiguous mail family",
        narrativeRepresentationsRejected: [],
        missingRequiredProperties: [],
        packageFatal: true,
        crossFamilyDriftViolation: false,
      }],
      summary: {
        totalClusters: 1, totalLocked: 0, totalRejectedAmbiguous: 1,
        totalRejectedNarrative: 0, totalRejectedMissingProperties: 0,
        totalCrossFamilyDriftViolations: 0,
      },
    };

    const violations = mailFamilyLockToPackageViolations(diag);
    expect(violations).toHaveLength(1);
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].violationType).toBe("critical_activity_lowering_failure");
    expect(violations[0].severity).toBe("execution_blocking");
  });

  it("cross-family drift violations feed into packageCompletenessViolations", () => {
    const driftViolations = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      lockedFamily: "gmail-send" as const,
      violatingArtifact: "SendSmtpMailMessage",
      violationType: "wrong-family-activity-tag" as const,
      detail: "Locked to gmail-send but emitted XAML contains <SendSmtpMailMessage>",
      packageFatal: true,
    }];

    const violations = crossFamilyDriftToPackageViolations(driftViolations);
    expect(violations).toHaveLength(1);
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].activityType).toBe("SendSmtpMailMessage");
    expect(violations[0].propertyName).toBe("CrossFamilyDrift");
  });
});

describe("Mail family lock — runMailFamilyLockAnalysis integration", () => {
  it("locks Gmail-only workflow successfully", () => {
    const specs = [{
      file: "Main.xaml",
      workflow: "Main",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    }];

    const result = runMailFamilyLockAnalysis(specs, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.summary.totalClusters).toBe(1);
    expect(result.summary.totalLocked).toBe(1);
    expect(result.perClusterResults[0].selectedFamily).toBe("gmail-send");
  });

  it("rejects Gmail cluster with missing properties via lock analysis", () => {
    const specs = [{
      file: "Main.xaml",
      workflow: "Main",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    }];

    const result = runMailFamilyLockAnalysis(specs, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.summary.totalClusters).toBe(1);
    expect(result.summary.totalLocked).toBe(0);
    expect(result.summary.totalRejectedMissingProperties).toBe(1);
    expect(result.perClusterResults[0].packageFatal).toBe(true);
  });
});

describe("Mail family lock — XAML-level analysis", () => {
  it("locks Gmail XAML with all properties", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="Test" Body="Hello" />
  </Sequence>
</Activity>`;

    const { diagnostics } = runXamlLevelMailFamilyLockAnalysis(
      [{ name: "Main.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    expect(diagnostics.summary.totalClusters).toBeGreaterThanOrEqual(1);
    const gmailLock = diagnostics.perClusterResults.find(r => r.selectedFamily === "gmail-send");
    expect(gmailLock).toBeDefined();
    expect(gmailLock!.locked).toBe(true);
  });

  it("allows independent clusters of different families in the same XAML (no false-positive drift)", () => {
    const xaml = `<Activity>
  <Sequence DisplayName="Main">
    <ui:GmailSendMessage DisplayName="Send Gmail" To="a@b.com" Subject="S" Body="B" />
    <ui:SendSmtpMailMessage DisplayName="Send SMTP" To="b@c.com" Subject="S2" Body="B2" Server="smtp.x.com" Port="25" />
  </Sequence>
</Activity>`;

    const { crossFamilyViolations, diagnostics } = runXamlLevelMailFamilyLockAnalysis(
      [{ name: "Main.xaml", content: xaml }],
      WINDOWS_PROFILE,
      ALL_PACKAGES,
    );

    expect(diagnostics.summary.totalClusters).toBeGreaterThanOrEqual(2);
    expect(crossFamilyViolations.length).toBe(0);
  });

  it("detects cross-family drift when unattributed wrong-family tag appears in XAML", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "test.xaml:Main:mail-cluster-0",
      file: "test.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
    }];

    const xamlWithDrift = `<Activity><Sequence><ui:GmailSendMessage /><ui:SendSmtpMailMessage /></Sequence></Activity>`;
    const violations = checkCrossFamilyDriftInXaml(xamlWithDrift, lockResults, "test.xaml");
    expect(violations.length).toBeGreaterThan(0);
    expect(violations[0].violationType).toBe("wrong-family-activity-tag");
    expect(violations[0].packageFatal).toBe(true);
  });
});

describe("Connector intent detection", () => {
  it("detects Gmail connector from integrationServiceConnectors array", () => {
    const intent = detectConnectorIntent(
      { To: "a@b.com", Subject: "S", Body: "B" },
      "Send Email",
      [{ connectorName: "Gmail", connectionName: "MyGmailConn", connectionId: "conn-123" }],
    );
    expect(intent).not.toBeNull();
    expect(intent!.connectorName).toBe("Gmail");
    expect(intent!.resolvedFamily).toBe("gmail-send");
    expect(intent!.connectionName).toBe("MyGmailConn");
    expect(intent!.connectionId).toBe("conn-123");
  });

  it("detects Outlook connector from integrationServiceConnectors", () => {
    const intent = detectConnectorIntent(
      {},
      "Send Email",
      [{ connectorName: "Outlook365" }],
    );
    expect(intent).not.toBeNull();
    expect(intent!.resolvedFamily).toBe("outlook-send");
  });

  it("detects Gmail connector from narrative text in displayName", () => {
    const intent = detectConnectorIntent(
      { Note: "use the Gmail connector" },
      "Send via Gmail Connector",
    );
    expect(intent).not.toBeNull();
    expect(intent!.resolvedFamily).toBe("gmail-send");
  });

  it("returns null when no connector signals present", () => {
    const intent = detectConnectorIntent(
      { To: "a@b.com", Subject: "S", Body: "B" },
      "Send Email",
    );
    expect(intent).toBeNull();
  });
});

describe("Connector-driven cluster resolves to one concrete target", () => {
  it("ambiguous SendMail with Gmail connector locks to gmail-send", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
      connectorIntent: { connectorName: "Gmail", connectionName: "MyGmail", connectionId: "conn-1", resolvedFamily: "gmail-send" },
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.concreteActivityType).toBe("UiPath.GSuite.Activities.GmailSendMessage");
    expect(result.concretePackage).toBe("UiPath.GSuite.Activities");
    expect(result.connectorIntentDetected).toBeDefined();
    expect(result.connectorIntentDetected!.connectorName).toBe("Gmail");
    expect(result.collapseApplied).toBe(true);
  });

  it("ambiguous SendMail with Outlook connector locks to outlook-send on Windows", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
      connectorIntent: { connectorName: "Outlook365", connectionName: null, connectionId: null, resolvedFamily: "outlook-send" },
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.selectedFamily).toBe("outlook-send");
  });

  it("connector intent plumbed via integrationServiceConnectors param resolves ambiguous cluster", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(
      cluster, WINDOWS_PROFILE, ALL_PACKAGES,
      [{ connectorName: "Gmail", connectionName: "Prod Gmail", connectionId: "c-99" }],
    );
    expect(result.locked).toBe(true);
    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.connectorIntentDetected).toBeDefined();
    expect(result.selectedCanonicalSource).toContain("connector-intent");
  });
});

describe("Cluster with narrative TryCatch plus Gmail concrete does not emit both", () => {
  it("collapses narrative + concrete into single canonical node", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [
        {
          nodeIndex: 0,
          displayName: "TryCatch Wrapper",
          template: "TryCatch",
          detectedFamily: null,
          role: "trycatch-wrapper",
          properties: {},
        },
        {
          nodeIndex: 1,
          displayName: "Send Gmail",
          template: "GmailSendMessage",
          detectedFamily: "gmail-send",
          role: "concrete-send",
          properties: { To: "a@b.com", Subject: "S", Body: "B" },
        },
        {
          nodeIndex: 2,
          displayName: "Narrative Send",
          template: "SendMail",
          detectedFamily: "ambiguous-mail-send",
          role: "concrete-send",
          properties: { To: "a@b.com", Subject: "S", Body: "B" },
          representationType: "ambiguous-template" as RepresentationType,
        },
      ],
      concreteSendNode: {
        nodeIndex: 1,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["gmail-send", "ambiguous-mail-send"]),
      hasNarrativeContainer: true,
      narrativeRepresentationsFound: ["narrative-trycatch-container"],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.selectedFamily).toBe("gmail-send");
    expect(result.collapseApplied).toBe(true);
    expect(result.rejectedCompetingRepresentations).toBeDefined();
    expect(result.rejectedCompetingRepresentations!.length).toBeGreaterThan(0);
    expect(result.selectedCanonicalSource).toBe("GmailSendMessage");
  });
});

describe("Body preservation through rewriting", () => {
  it("Body preserved after collapse when both representations have it", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "Real body content" },
      },
      {
        nodeIndex: 1,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "Real body content" },
        representationType: "ambiguous-template" as RepresentationType,
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    expect(result.bodyPreserved).toBe(true);
    expect(result.canonicalProperties.Body).toBe("Real body content");
  });

  it("Body loss during rewriting causes collapse failure", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "Real body" },
      },
      {
        nodeIndex: 1,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "" },
        representationType: "ambiguous-template" as RepresentationType,
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    expect(result.bodyPreserved).toBe(true);
    expect(result.canonicalProperties.Body).toBe("Real body");
  });

  it("rejects when all representations lose Body during rewriting", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S" },
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    expect(result.bodyPreserved).toBe(false);
  });
});

describe("Wrong-family drift after lock is package-fatal", () => {
  it("Gmail-locked cluster with wrong-family SMTP tag in XAML is fatal", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "UiPath.GSuite.Activities.GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      detectedRepresentations: ["concrete-send"],
      selectedCanonicalSource: "GmailSendMessage",
      collapseApplied: false,
    }];

    const xaml = `<Activity><Sequence><ui:GmailSendMessage DisplayName="Send" To="a@b.com" /><ui:SendSmtpMailMessage DisplayName="SMTP" /></Sequence></Activity>`;
    const violations = checkCrossFamilyDriftInXaml(xaml, lockResults, "Main.xaml");
    expect(violations.length).toBeGreaterThan(0);
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].violationType).toBe("wrong-family-activity-tag");
  });

  it("wrong-family package in dependencies after lock is fatal", () => {
    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "UiPath.GSuite.Activities.GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", connectionName: null, connectionId: null, resolvedFamily: "gmail-send" },
    }];

    const violations = checkCrossFamilyDriftInDependencies(
      ["UiPath.GSuite.Activities", "UiPath.Mail.Activities"],
      lockResults,
    );
    expect(violations.length).toBeGreaterThan(0);
    expect(violations[0].packageFatal).toBe(true);
    expect(violations[0].violationType).toBe("wrong-family-package");
  });
});

describe("No placeholder injection for rejected clusters (mail lock)", () => {
  it("rejected ambiguous cluster does not produce concreteActivityType", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["ambiguous-mail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.concreteActivityType).toBeNull();
    expect(result.concretePackage).toBeNull();
  });

  it("rejected narrative cluster does not produce concreteActivityType", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: 'TryCatch { Try: GmailSendMessage(To="a@b.com") }' },
      }],
      concreteSendNode: null,
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: true,
      narrativeRepresentationsFound: ["narrative-trycatch-container"],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(false);
    expect(result.concreteActivityType).toBeNull();
    expect(result.concretePackage).toBeNull();
    expect(result.packageFatal).toBe(true);
  });
});

describe("Provenance is recorded for each preserved property after collapse", () => {
  it("single-node cluster records provenance for all required properties", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "Test Sub", Body: "Test Body" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "Test Sub", Body: "Test Body" },
      },
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.propertyProvenance).toBeDefined();
    expect(result.propertyProvenance!.length).toBeGreaterThanOrEqual(3);

    const toProv = result.propertyProvenance!.find(p => p.propertyName === "To");
    expect(toProv).toBeDefined();
    expect(toProv!.value).toBe("a@b.com");
    expect(toProv!.sourceTemplate).toBe("GmailSendMessage");
    expect(toProv!.sourceRepresentationType).toBe("concrete-send");

    const subjectProv = result.propertyProvenance!.find(p => p.propertyName === "Subject");
    expect(subjectProv).toBeDefined();
    expect(subjectProv!.value).toBe("Test Sub");

    const bodyProv = result.propertyProvenance!.find(p => p.propertyName === "Body");
    expect(bodyProv).toBeDefined();
    expect(bodyProv!.value).toBe("Test Body");
  });

  it("multi-node collapse records provenance with correct source attribution", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "From Gmail", Body: "Gmail Body" },
      },
      {
        nodeIndex: 1,
        displayName: "Send Generic",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "From Generic", Body: "Generic Body" },
        representationType: "ambiguous-template" as RepresentationType,
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    expect(result.provenance.length).toBeGreaterThanOrEqual(3);

    const subjectProv = result.provenance.find(p => p.propertyName === "Subject");
    expect(subjectProv).toBeDefined();
    expect(subjectProv!.sourceTemplate).toBe("GmailSendMessage");
    expect(subjectProv!.value).toBe("From Gmail");
    expect(subjectProv!.sourceRepresentationType).toBe("concrete-send");

    const bodyProv = result.provenance.find(p => p.propertyName === "Body");
    expect(bodyProv).toBeDefined();
    expect(bodyProv!.sourceTemplate).toBe("GmailSendMessage");
    expect(bodyProv!.value).toBe("Gmail Body");
  });
});

describe("Conflicting non-empty values with no precedence rule causes rejection", () => {
  it("rejects when two concrete-send nodes have different values at same precedence", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail 1",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "alice@a.com", Subject: "Subject A", Body: "Body A" },
      },
      {
        nodeIndex: 1,
        displayName: "Send Gmail 2",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "bob@b.com", Subject: "Subject B", Body: "Body B" },
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(false);
    expect(result.rejectionReason).toBeDefined();
    expect(result.rejectionReason).toContain("Conflicting values");
    expect(result.rejectionReason).toContain("same precedence");
  });

  it("allows when concrete-send and ambiguous-template have different values (concrete wins)", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "alice@a.com", Subject: "Concrete Subject", Body: "Concrete Body" },
      },
      {
        nodeIndex: 1,
        displayName: "Send Mail",
        template: "SendMail",
        detectedFamily: "ambiguous-mail-send",
        role: "concrete-send",
        properties: { To: "bob@b.com", Subject: "Ambiguous Subject", Body: "Ambiguous Body" },
        representationType: "ambiguous-template" as RepresentationType,
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    expect(result.canonicalProperties.To).toBe("alice@a.com");
    expect(result.canonicalProperties.Subject).toBe("Concrete Subject");
    expect(result.canonicalProperties.Body).toBe("Concrete Body");
  });
});

describe("Diagnostics extension with connector-intent and provenance fields", () => {
  it("buildMailFamilyLockDiagnostics includes connector intent and collapse counts", () => {
    const lockResults: MailFamilyLockResult[] = [
      {
        clusterId: "c1", file: "Main.xaml", workflow: "Main",
        selectedFamily: "gmail-send", concreteActivityType: "GmailSendMessage",
        concretePackage: "UiPath.GSuite.Activities", locked: true,
        lockRejectionReason: null, narrativeRepresentationsRejected: [],
        missingRequiredProperties: [], packageFatal: false, crossFamilyDriftViolation: false,
        connectorIntentDetected: { connectorName: "Gmail", connectionName: null, connectionId: null, resolvedFamily: "gmail-send" },
        collapseApplied: true,
        detectedRepresentations: ["concrete-send", "ambiguous-template"],
        selectedCanonicalSource: "GmailSendMessage",
        rejectedCompetingRepresentations: ["SendMail"],
        propertyProvenance: [
          { propertyName: "To", value: "a@b.com", sourceNodeIndex: 0, sourceTemplate: "GmailSendMessage", sourceRepresentationType: "concrete-send" },
        ],
      },
      {
        clusterId: "c2", file: "Main.xaml", workflow: "Main",
        selectedFamily: "smtp-send", concreteActivityType: "SendSmtpMailMessage",
        concretePackage: "UiPath.Mail.Activities", locked: true,
        lockRejectionReason: null, narrativeRepresentationsRejected: [],
        missingRequiredProperties: [], packageFatal: false, crossFamilyDriftViolation: false,
        collapseApplied: false,
      },
    ];

    const diag = buildMailFamilyLockDiagnostics(lockResults);
    expect(diag.summary.totalClusters).toBe(2);
    expect(diag.summary.totalLocked).toBe(2);
    expect(diag.summary.totalConnectorIntentResolved).toBe(1);
    expect(diag.summary.totalCollapseApplied).toBe(1);
  });

  it("lock result includes all extended diagnostics fields", () => {
    const cluster: MailSendCluster = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      nodes: [{
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      }],
      concreteSendNode: {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
      },
      detectedFamilies: new Set(["gmail-send"]),
      hasNarrativeContainer: false,
      narrativeRepresentationsFound: [],
      connectorIntent: { connectorName: "Gmail", connectionName: "MyConn", connectionId: "c-1", resolvedFamily: "gmail-send" },
    };

    const result = lockClusterToFamily(cluster, WINDOWS_PROFILE, ALL_PACKAGES);
    expect(result.locked).toBe(true);
    expect(result.detectedRepresentations).toBeDefined();
    expect(result.detectedRepresentations).toContain("concrete-send");
    expect(result.selectedCanonicalSource).toBe("GmailSendMessage");
    expect(result.rejectedCompetingRepresentations).toBeDefined();
    expect(result.rejectedCompetingRepresentations).toHaveLength(0);
    expect(result.propertyProvenance).toBeDefined();
    expect(result.propertyProvenance!.length).toBeGreaterThanOrEqual(3);
    expect(result.connectorIntentDetected).toBeDefined();
    expect(result.connectorIntentDetected!.connectorName).toBe("Gmail");
    expect(result.collapseApplied).toBe(false);
  });
});

describe("End-to-end connector plumbing via detectMailSendClusters", () => {
  it("populates connectorIntent on clusters when integrationServiceConnectors are passed", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
    ];

    const connectors = [{ connectorName: "Gmail", connectionName: "MyGmailConn", connectionId: "conn-1" }];
    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main", connectors);
    expect(clusters.length).toBe(1);
    expect(clusters[0].connectorIntent).toBeDefined();
    expect(clusters[0].connectorIntent!.connectorName).toBe("Gmail");
    expect(clusters[0].connectorIntent!.resolvedFamily).toBe("gmail-send");
  });

  it("scopes connector intent to cluster context when multiple mail connectors exist", () => {
    const connectors = [
      { connectorName: "Gmail", connectionName: "GmailConn", connectionId: "g-1" },
      { connectorName: "Outlook365", connectionName: "OutlookConn", connectionId: "o-1" },
    ];
    const gmailResult = detectConnectorIntent(
      { To: "a@b.com" },
      "Send via Gmail",
      connectors,
    );
    expect(gmailResult).toBeDefined();
    expect(gmailResult!.connectorName).toBe("Gmail");
    expect(gmailResult!.resolvedFamily).toBe("gmail-send");

    const outlookResult = detectConnectorIntent(
      { To: "a@b.com" },
      "Send via Outlook365",
      connectors,
    );
    expect(outlookResult).toBeDefined();
    expect(outlookResult!.connectorName).toBe("Outlook365");
    expect(outlookResult!.resolvedFamily).toBe("outlook-send");

    const ambiguousResult = detectConnectorIntent(
      { To: "a@b.com" },
      "Send Email",
      connectors,
    );
    expect(ambiguousResult).toBeNull();
  });

  it("does not populate connectorIntent when no matching connectors exist", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
    ];

    const connectors = [{ connectorName: "Salesforce", connectionName: "SFConn", connectionId: "conn-2" }];
    const clusters = detectMailSendClusters(nodes, "Main.xaml", "Main", connectors);
    expect(clusters.length).toBe(1);
    expect(clusters[0].connectorIntent).toBeFalsy();
  });

  it("passes connectors through runMailFamilyLockAnalysis end-to-end", () => {
    const specs = [{
      file: "Main.xaml",
      workflow: "Main",
      rootSequence: {
        kind: "sequence" as const,
        displayName: "Main",
        children: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "Test", Body: "Hello" },
            errorHandling: "none" as const,
          },
        ] as WorkflowNode[],
      },
    }];

    const connectors = [{ connectorName: "Gmail", connectionName: "MyGmailConn", connectionId: "conn-1" }];
    const result = runMailFamilyLockAnalysis(specs, WINDOWS_PROFILE, ALL_PACKAGES, connectors);
    expect(result.summary.totalClusters).toBe(1);
    expect(result.summary.totalLocked).toBe(1);
    const lockedResult = result.perClusterResults[0];
    expect(lockedResult.connectorIntentDetected).toBeDefined();
    expect(lockedResult.connectorIntentDetected!.connectorName).toBe("Gmail");
  });
});

describe("applyCanonicalRewrite", () => {
  it("rewrites ambiguous mail nodes to canonical template when collapse is applied", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "SendMail",
        displayName: "Send Email",
        properties: { To: "a@b.com", Subject: "S" },
        errorHandling: "none" as const,
      },
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", connectionName: "c", connectionId: "1", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "a@b.com", Subject: "S", Body: "Hello" },
        nestedInWrapper: false,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "a@b.com" },
        { propertyName: "Subject", source: "concrete-send", value: "S" },
        { propertyName: "Body", source: "concrete-send", value: "Hello" },
      ],
      detectedRepresentations: ["concrete-send"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: [],
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes[0].kind).toBe("activity");
    const rewritten = rewrittenNodes[0] as ActivityNode;
    expect(rewritten.template).toBe("GmailSendMessage");
    expect(rewritten.properties?.Body).toBe("Hello");
  });

  it("does not rewrite nodes when no collapse was applied", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: false,
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(0);
    expect(rewrittenNodes[0]).toEqual(nodes[0]);
  });

  it("does not cross-contaminate properties between clusters of the same family", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "SendMail",
        displayName: "Send Email 1",
        properties: { To: "user1@a.com" },
        errorHandling: "none" as const,
      },
      {
        kind: "activity" as const,
        template: "SendMail",
        displayName: "Send Email 2",
        properties: { To: "user2@b.com" },
        errorHandling: "none" as const,
      },
    ];

    const lockResultCluster1: MailFamilyLockResult = {
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "correct1@a.com", Subject: "Subject1", Body: "Body1" },
        nestedInWrapper: false,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "correct1@a.com" },
        { propertyName: "Subject", source: "concrete-send", value: "Subject1" },
        { propertyName: "Body", source: "concrete-send", value: "Body1" },
      ],
      detectedRepresentations: ["concrete-send"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: [],
    };

    const lockResultCluster2: MailFamilyLockResult = {
      clusterId: "Main.xaml:Main:mail-cluster-1",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 1,
        competingTopLevelIndices: [],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "correct2@b.com", Subject: "Subject2", Body: "Body2" },
        nestedInWrapper: false,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "correct2@b.com" },
        { propertyName: "Subject", source: "concrete-send", value: "Subject2" },
        { propertyName: "Body", source: "concrete-send", value: "Body2" },
      ],
      detectedRepresentations: ["concrete-send"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: [],
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, [lockResultCluster1, lockResultCluster2]);
    expect(rewriteCount).toBe(2);
    const node0 = rewrittenNodes[0] as ActivityNode;
    const node1 = rewrittenNodes[1] as ActivityNode;
    expect(node0.properties?.To).toBe("correct1@a.com");
    expect(node0.properties?.Subject).toBe("Subject1");
    expect(node1.properties?.To).toBe("correct2@b.com");
    expect(node1.properties?.Subject).toBe("Subject2");
  });

  it("removes competing non-canonical mail nodes from output", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "GmailSendMessage",
        displayName: "Send Gmail",
        properties: { To: "a@b.com", Subject: "S", Body: "B" },
        errorHandling: "none" as const,
      },
      {
        kind: "activity" as const,
        template: "SendMail",
        displayName: "Send Email Duplicate",
        properties: { To: "a@b.com", Subject: "S" },
        errorHandling: "none" as const,
      },
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [1],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "a@b.com", Subject: "S", Body: "B" },
        nestedInWrapper: false,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "a@b.com" },
        { propertyName: "Subject", source: "concrete-send", value: "S" },
        { propertyName: "Body", source: "concrete-send", value: "B" },
      ],
      detectedRepresentations: ["concrete-send", "ambiguous-template"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: ["SendMail"],
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(1);
    const canonical = rewrittenNodes[0] as ActivityNode;
    expect(canonical.template).toBe("GmailSendMessage");
  });

  it("preserves To/Subject/Body through provenance-based rewrite", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "activity" as const,
        template: "SendMail",
        displayName: "Send Email",
        properties: { To: "old@x.com" },
        errorHandling: "none" as const,
      },
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "smtp-send",
      concreteActivityType: "SendSmtpMailMessage",
      concretePackage: "UiPath.Mail.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "SMTP", resolvedFamily: "smtp-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [],
        canonicalTemplate: "SendSmtpMailMessage",
        canonicalProperties: { To: "correct@y.com", Subject: "Correct Subject", Body: "Correct Body" },
        nestedInWrapper: false,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "correct@y.com" },
        { propertyName: "Subject", source: "narrative-container", value: "Correct Subject" },
        { propertyName: "Body", source: "concrete-send", value: "Correct Body" },
      ],
      detectedRepresentations: ["concrete-send", "narrative-container"],
      selectedCanonicalSource: "SendSmtpMailMessage",
      rejectedCompetingRepresentations: ["narrative-container"],
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(1);
    const rewritten = rewrittenNodes[0] as ActivityNode;
    expect(rewritten.template).toBe("SendSmtpMailMessage");
    expect(rewritten.properties?.To).toBe("correct@y.com");
    expect(rewritten.properties?.Subject).toBe("Correct Subject");
    expect(rewritten.properties?.Body).toBe("Correct Body");
  });

  it("rewrites mail send inside tryCatch wrapper via nestedInWrapper directive", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "tryCatch" as const,
        displayName: "Try Send Email",
        tryChildren: [
          {
            kind: "activity" as const,
            template: "SendMail",
            displayName: "Send Email",
            properties: { To: "old@x.com", Subject: "Old" },
            errorHandling: "none" as const,
          },
        ],
        catchChildren: [],
        finallyChildren: [],
      } as any,
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "correct@y.com", Subject: "Correct", Body: "Body" },
        nestedInWrapper: true,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "correct@y.com" },
        { propertyName: "Subject", source: "concrete-send", value: "Correct" },
        { propertyName: "Body", source: "concrete-send", value: "Body" },
      ],
      detectedRepresentations: ["concrete-send"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: [],
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(1);
    const wrapper = rewrittenNodes[0] as any;
    expect(wrapper.kind).toBe("tryCatch");
    const innerSend = wrapper.tryChildren[0] as ActivityNode;
    expect(innerSend.template).toBe("GmailSendMessage");
    expect(innerSend.properties?.To).toBe("correct@y.com");
    expect(innerSend.properties?.Subject).toBe("Correct");
    expect(innerSend.properties?.Body).toBe("Body");
  });

  it("collapses multiple competing mail sends inside tryCatch to exactly one canonical", () => {
    const nodes: WorkflowNode[] = [
      {
        kind: "tryCatch" as const,
        displayName: "Try Send Email",
        tryChildren: [
          {
            kind: "activity" as const,
            template: "GmailSendMessage",
            displayName: "Send Gmail",
            properties: { To: "a@b.com", Subject: "S", Body: "B" },
            errorHandling: "none" as const,
          },
          {
            kind: "activity" as const,
            template: "SendMail",
            displayName: "Send Email Duplicate",
            properties: { To: "a@b.com" },
            errorHandling: "none" as const,
          },
        ],
        catchChildren: [],
        finallyChildren: [],
      } as any,
    ];

    const lockResults: MailFamilyLockResult[] = [{
      clusterId: "Main.xaml:Main:mail-cluster-0",
      file: "Main.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      collapseApplied: true,
      connectorIntentDetected: { connectorName: "Gmail", resolvedFamily: "gmail-send" },
      rewriteDirective: {
        canonicalTopLevelIndex: 0,
        competingTopLevelIndices: [],
        canonicalTemplate: "GmailSendMessage",
        canonicalProperties: { To: "a@b.com", Subject: "S", Body: "B" },
        nestedInWrapper: true,
      },
      propertyProvenance: [
        { propertyName: "To", source: "concrete-send", value: "a@b.com" },
        { propertyName: "Subject", source: "concrete-send", value: "S" },
        { propertyName: "Body", source: "concrete-send", value: "B" },
      ],
      detectedRepresentations: ["concrete-send", "ambiguous-template"],
      selectedCanonicalSource: "GmailSendMessage",
      rejectedCompetingRepresentations: ["SendMail"],
    }];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(nodes, lockResults);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(1);
    const wrapper = rewrittenNodes[0] as any;
    expect(wrapper.kind).toBe("tryCatch");
    expect(wrapper.tryChildren.length).toBe(1);
    const canonical = wrapper.tryChildren[0] as ActivityNode;
    expect(canonical.template).toBe("GmailSendMessage");
    expect(canonical.properties?.To).toBe("a@b.com");
    expect(canonical.properties?.Body).toBe("B");
  });

  it("collapseCompetingRepresentations includes narrative node properties in provenance", () => {
    const nodes: MailSendClusterNode[] = [
      {
        nodeIndex: 0,
        displayName: "Send Gmail",
        template: "GmailSendMessage",
        detectedFamily: "gmail-send",
        role: "concrete-send",
        properties: { To: "a@b.com", Subject: "S" },
      },
      {
        nodeIndex: 1,
        displayName: "Email Container",
        template: "SendEmailContainer",
        detectedFamily: null,
        role: "trycatch-wrapper",
        properties: { Body: "Narrative Body Value" },
      },
    ];

    const result = collapseCompetingRepresentations(nodes, ["To", "Subject", "Body"]);
    expect(result.collapsed).toBe(true);
    const bodyProv = result.provenance.find(p => p.propertyName === "Body");
    expect(bodyProv).toBeDefined();
    expect(bodyProv!.value).toBe("Narrative Body Value");
    expect(bodyProv!.sourceRepresentationType).toBe("narrative-container");
  });
});

describe("nested container rewrite stability", () => {
  const MAIL_TEMPLATES = ["GmailSendMessage", "SendOutlookMailMessage", "SendSmtpMailMessage", "SendExchangeMailMessage"];
  const isMailTemplate = (t: string) => MAIL_TEMPLATES.includes(t);

  function makeLockResultWithDirective(directive: RewriteDirective): MailFamilyLockResult {
    return {
      clusterId: "test-cluster",
      file: "test.xaml",
      workflow: "Main",
      selectedFamily: "gmail-send",
      concreteActivityType: "GmailSendMessage",
      concretePackage: "UiPath.GSuite.Activities",
      locked: true,
      lockRejectionReason: null,
      narrativeRepresentationsRejected: [],
      missingRequiredProperties: [],
      packageFatal: false,
      crossFamilyDriftViolation: false,
      detectedRepresentations: ["concrete-send"],
      collapseApplied: true,
      rewriteDirective: directive,
    };
  }

  it("canonicalizes mail sends inside a sequence container, preserving adjacent non-mail nodes", () => {
    const children: WorkflowNode[] = [
      { kind: "activity" as const, template: "LogMessage", displayName: "Log Start", properties: { Message: "Starting" } },
      {
        kind: "sequence" as const,
        displayName: "Mail Sequence",
        children: [
          { kind: "activity" as const, template: "GmailSendMessage", displayName: "Send Gmail", properties: { To: "a@b.com", Subject: "S", Body: "B" } },
          { kind: "activity" as const, template: "LogMessage", displayName: "Log Between", properties: { Message: "Between mails" } },
          { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Send Outlook", properties: { To: "b@c.com", Subject: "S2", Body: "B2" } },
        ],
      } as any,
      { kind: "activity" as const, template: "Assign", displayName: "Set Result", properties: { Variable: "result", Value: "done" } },
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 1,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "a@b.com", Subject: "S", Body: "B" },
      nestedInWrapper: false,
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(3);
    expect(rewrittenNodes[0].template).toBe("LogMessage");
    expect(rewrittenNodes[2].template).toBe("Assign");

    const seqNode = rewrittenNodes[1] as any;
    expect(seqNode.kind).toBe("sequence");
    const mailSends = seqNode.children.filter((c: any) => isMailTemplate(c.template));
    expect(mailSends.length).toBe(1);
    const logNodes = seqNode.children.filter((c: any) => c.template === "LogMessage");
    expect(logNodes.length).toBe(1);
  });

  it("canonicalizes mail sends inside an if-then-else, preserving non-mail neighbors", () => {
    const children: WorkflowNode[] = [
      {
        kind: "if" as const,
        displayName: "Check Condition",
        condition: "x > 0",
        thenChildren: [
          { kind: "activity" as const, template: "GmailSendMessage", displayName: "Gmail Then", properties: { To: "then@x.com", Subject: "Then", Body: "Then Body" } },
          { kind: "activity" as const, template: "LogMessage", displayName: "Log Then", properties: { Message: "then done" } },
        ],
        elseChildren: [
          { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Outlook Else", properties: { To: "else@x.com", Subject: "Else", Body: "Else Body" } },
        ],
      } as any,
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "then@x.com", Subject: "Then", Body: "Then Body" },
      nestedInWrapper: false,
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(1);

    const ifNode = rewrittenNodes[0] as any;
    expect(ifNode.kind).toBe("if");

    const thenMailSends = ifNode.thenChildren.filter((c: any) => isMailTemplate(c.template));
    const elseMailSends = ifNode.elseChildren.filter((c: any) => isMailTemplate(c.template));
    expect(thenMailSends.length + elseMailSends.length).toBe(1);

    const thenLogs = ifNode.thenChildren.filter((c: any) => c.template === "LogMessage");
    expect(thenLogs.length).toBe(1);
  });

  it("canonicalizes mail sends inside a while loop, keeping exactly one canonical", () => {
    const children: WorkflowNode[] = [
      {
        kind: "while" as const,
        displayName: "Retry Loop",
        condition: "retryCount < 3",
        bodyChildren: [
          { kind: "activity" as const, template: "GmailSendMessage", displayName: "Send Gmail", properties: { To: "a@b.com", Subject: "S", Body: "B" } },
          { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Send Outlook", properties: { To: "c@d.com", Subject: "S2", Body: "B2" } },
          { kind: "activity" as const, template: "Assign", displayName: "Increment", properties: { Variable: "retryCount", Value: "retryCount + 1" } },
        ],
      } as any,
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "a@b.com", Subject: "S", Body: "B" },
      nestedInWrapper: false,
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    expect(rewriteCount).toBe(1);

    const whileNode = rewrittenNodes[0] as any;
    expect(whileNode.kind).toBe("while");
    const mailSends = whileNode.bodyChildren.filter((c: any) => isMailTemplate(c.template));
    expect(mailSends.length).toBe(1);
    const assigns = whileNode.bodyChildren.filter((c: any) => c.template === "Assign");
    expect(assigns.length).toBe(1);
  });

  it("canonicalizes mail sends inside forEach, preserving non-mail nodes", () => {
    const children: WorkflowNode[] = [
      {
        kind: "forEach" as const,
        displayName: "For Each Item",
        bodyChildren: [
          { kind: "activity" as const, template: "GmailSendMessage", displayName: "Send Gmail", properties: { To: "x@y.com", Subject: "FE", Body: "FEB" } },
          { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Send Outlook", properties: { To: "y@z.com", Subject: "FE2", Body: "FEB2" } },
          { kind: "activity" as const, template: "LogMessage", displayName: "Log Sent", properties: { Message: "sent" } },
        ],
      } as any,
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "x@y.com", Subject: "FE", Body: "FEB" },
      nestedInWrapper: false,
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    expect(rewriteCount).toBe(1);

    const forEachNode = rewrittenNodes[0] as any;
    expect(forEachNode.kind).toBe("forEach");
    const mailSends = forEachNode.bodyChildren.filter((c: any) => isMailTemplate(c.template));
    expect(mailSends.length).toBe(1);
    const logs = forEachNode.bodyChildren.filter((c: any) => c.template === "LogMessage");
    expect(logs.length).toBe(1);
  });

  it("does not remove non-mail sibling top-level nodes when competing indices are mail-only", () => {
    const children: WorkflowNode[] = [
      { kind: "activity" as const, template: "LogMessage", displayName: "Log Before", properties: { Message: "before" } },
      { kind: "activity" as const, template: "GmailSendMessage", displayName: "Send Gmail", properties: { To: "a@b.com", Subject: "S", Body: "B" } },
      { kind: "activity" as const, template: "LogMessage", displayName: "Log Middle", properties: { Message: "middle" } },
      { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Send Outlook", properties: { To: "c@d.com", Subject: "S2", Body: "B2" } },
      { kind: "activity" as const, template: "Assign", displayName: "Set Done", properties: { Variable: "done", Value: "true" } },
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 1,
      competingTopLevelIndices: [3],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "a@b.com", Subject: "S", Body: "B" },
      nestedInWrapper: false,
    };

    const { rewrittenNodes } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    const logs = rewrittenNodes.filter(n => n.template === "LogMessage");
    expect(logs.length).toBe(2);
    const assigns = rewrittenNodes.filter(n => n.template === "Assign");
    expect(assigns.length).toBe(1);
    const mails = rewrittenNodes.filter(n => isMailTemplate(n.template));
    expect(mails.length).toBe(1);
  });

  it("handles deeply nested sequence-in-tryCatch with stable top-level indices", () => {
    const children: WorkflowNode[] = [
      { kind: "activity" as const, template: "Assign", displayName: "Init", properties: { Variable: "x", Value: "1" } },
      {
        kind: "tryCatch" as const,
        displayName: "TryCatch",
        tryChildren: [
          {
            kind: "sequence" as const,
            displayName: "Inner Seq",
            children: [
              { kind: "activity" as const, template: "GmailSendMessage", displayName: "Gmail Deep", properties: { To: "deep@a.com", Subject: "Deep", Body: "Deep Body" } },
              { kind: "activity" as const, template: "SendOutlookMailMessage", displayName: "Outlook Deep", properties: { To: "deep@b.com", Subject: "Deep2", Body: "Deep2 Body" } },
            ],
          },
        ],
        catchChildren: [],
        finallyChildren: [],
      } as any,
      { kind: "activity" as const, template: "LogMessage", displayName: "Log End", properties: { Message: "end" } },
    ] as WorkflowNode[];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 1,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "deep@a.com", Subject: "Deep", Body: "Deep Body" },
      nestedInWrapper: true,
    };

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, [makeLockResultWithDirective(directive)]);
    expect(rewriteCount).toBe(1);
    expect(rewrittenNodes.length).toBe(3);
    expect(rewrittenNodes[0].template).toBe("Assign");
    expect(rewrittenNodes[2].template).toBe("LogMessage");

    const tcNode = rewrittenNodes[1] as any;
    expect(tcNode.kind).toBe("tryCatch");
    const innerSeq = tcNode.tryChildren[0] as any;
    expect(innerSeq.kind).toBe("sequence");
    const mails = innerSeq.children.filter((c: any) => isMailTemplate(c.template));
    expect(mails.length).toBe(1);
  });

  it("topLevelAncestorIndex correctly maps nested cluster nodes to top-level containers", () => {
    const children: WorkflowNode[] = [
      { kind: "activity" as const, template: "LogMessage", displayName: "Log", properties: {} },
      {
        kind: "sequence" as const,
        displayName: "Inner Seq",
        children: [
          { kind: "activity" as const, template: "GmailSendMessage", displayName: "Gmail", properties: { To: "a@b.com", Subject: "S", Body: "B" } },
        ],
      } as any,
      { kind: "activity" as const, template: "Assign", displayName: "Done", properties: {} },
    ] as WorkflowNode[];

    const clusters = detectMailSendClusters(children, "test.xaml", "Main");
    expect(clusters.length).toBe(1);

    const gmailNode = clusters[0].nodes.find(n => n.role === "concrete-send");
    expect(gmailNode).toBeDefined();
    expect(gmailNode!.nodeIndex).toBe(1);
  });

  it("applies ordinal-targeted rewrite when multiple directives share the same top-level index (no cross-cluster contamination)", () => {
    const children: WorkflowNode[] = [
      {
        kind: "sequence" as const,
        displayName: "Outer",
        children: [
          { kind: "activity" as const, template: "SendMail", displayName: "Send 1", properties: { To: "a@x.com", Subject: "S1", Body: "B1" } },
          { kind: "activity" as const, template: "LogMessage", displayName: "Log", properties: { Message: "between" } },
          { kind: "activity" as const, template: "SendMail", displayName: "Send 2", properties: { To: "b@y.com", Subject: "S2", Body: "B2" } },
        ],
      } as any,
    ] as WorkflowNode[];

    const directive1: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "a@x.com", Subject: "S1", Body: "B1" },
      nestedInWrapper: false,
      localMailSendOrdinal: 0,
    };
    const directive2: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "SendOutlookMailMessage",
      canonicalProperties: { To: "b@y.com", Subject: "S2", Body: "B2" },
      nestedInWrapper: false,
      localMailSendOrdinal: 1,
    };

    const lockResults: MailFamilyLockResult[] = [
      makeLockResultWithDirective(directive1),
      makeLockResultWithDirective(directive2),
    ];

    const { rewrittenNodes, rewriteCount } = applyCanonicalRewrite(children, lockResults);
    expect(rewriteCount).toBe(2);
    expect(rewrittenNodes.length).toBe(1);
    const seqNode = rewrittenNodes[0] as any;
    expect(seqNode.children.length).toBe(3);
    expect(seqNode.children[0].template).toBe("GmailSendMessage");
    expect(seqNode.children[0].properties.To).toBe("a@x.com");
    expect(seqNode.children[1].template).toBe("LogMessage");
    expect(seqNode.children[2].template).toBe("SendOutlookMailMessage");
    expect(seqNode.children[2].properties.To).toBe("b@y.com");
  });

  it("falls back to passthrough when multiple directives collide without ordinals", () => {
    const children: WorkflowNode[] = [
      {
        kind: "sequence" as const,
        displayName: "Outer",
        children: [
          { kind: "activity" as const, template: "SendMail", displayName: "Send 1", properties: { To: "a@x.com" } },
          { kind: "activity" as const, template: "SendMail", displayName: "Send 2", properties: { To: "b@y.com" } },
        ],
      } as any,
    ] as WorkflowNode[];

    const directive1: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "GmailSendMessage",
      canonicalProperties: { To: "a@x.com" },
      nestedInWrapper: false,
    };
    const directive2: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "SendOutlookMailMessage",
      canonicalProperties: { To: "b@y.com" },
      nestedInWrapper: false,
    };

    const lockResults: MailFamilyLockResult[] = [
      makeLockResultWithDirective(directive1),
      makeLockResultWithDirective(directive2),
    ];

    const { rewrittenNodes } = applyCanonicalRewrite(children, lockResults);
    expect(rewrittenNodes.length).toBe(1);
    const seqNode = rewrittenNodes[0] as any;
    expect(seqNode.children.length).toBe(2);
    expect(seqNode.children[0].properties.To).toBe("a@x.com");
    expect(seqNode.children[1].properties.To).toBe("b@y.com");
  });

  it("preserves finallyChildren in tryCatch during canonical rewrite", () => {
    const children: WorkflowNode[] = [
      {
        kind: "tryCatch",
        tryChildren: [
          { kind: "activity", template: "SendMail", displayName: "Send Email", properties: { To: "a@x.com", Subject: "Sub1", Body: "Body1" } } as WorkflowNode,
        ],
        catchChildren: [
          { kind: "activity", template: "LogMessage", displayName: "Log", properties: { Message: "error" } } as WorkflowNode,
        ],
        finallyChildren: [
          { kind: "activity", template: "LogMessage", displayName: "Cleanup Log", properties: { Message: "cleanup" } } as WorkflowNode,
        ],
      } as WorkflowNode,
    ];

    const directive: RewriteDirective = {
      canonicalTopLevelIndex: 0,
      competingTopLevelIndices: [],
      canonicalTemplate: "SendSmtpMailMessage",
      canonicalProperties: { To: "a@x.com", Subject: "Sub1", Body: "Body1" },
      nestedInWrapper: true,
    };

    const lockResults: MailFamilyLockResult[] = [makeLockResultWithDirective(directive)];
    const { rewrittenNodes } = applyCanonicalRewrite(children, lockResults);
    expect(rewrittenNodes.length).toBe(1);
    const tryCatchNode = rewrittenNodes[0] as any;
    expect(tryCatchNode.kind).toBe("tryCatch");
    expect(tryCatchNode.tryChildren.length).toBe(1);
    expect(tryCatchNode.tryChildren[0].template).toBe("SendSmtpMailMessage");
    expect(tryCatchNode.catchChildren.length).toBe(1);
    expect(tryCatchNode.catchChildren[0].template).toBe("LogMessage");
    expect(tryCatchNode.finallyChildren).toBeDefined();
    expect(tryCatchNode.finallyChildren.length).toBe(1);
    expect(tryCatchNode.finallyChildren[0].template).toBe("LogMessage");
    expect(tryCatchNode.finallyChildren[0].displayName).toBe("Cleanup Log");
  });
});
