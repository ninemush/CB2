import { classifyComplexity, type ComplexityTier } from "../complexity-classifier";

describe("classifyComplexity", () => {
  const makeSpec = (workflows: Array<{ steps?: number; description?: string }> = []) => ({
    projectName: "Test",
    description: "",
    dependencies: [],
    workflows: workflows.map((w, i) => ({
      name: `Workflow${i}`,
      description: w.description || "",
      variables: [],
      steps: Array.from({ length: w.steps || 0 }, (_, j) => ({
        activity: `Step${j}`,
        activityType: "ui:Comment",
        activityPackage: "UiPath.System.Activities",
        properties: {},
        selectorHint: null,
        errorHandling: "none" as const,
        notes: "",
      })),
    })),
  });

  it("classifies a minimal process as simple", () => {
    const result = classifyComplexity(makeSpec([{ steps: 3 }]));
    expect(result.tier).toBe("simple");
    expect(result.streamlined).toBe(true);
    expect(result.score).toBeLessThanOrEqual(2);
  });

  it("classifies a process with 2 workflows and few steps as simple", () => {
    const result = classifyComplexity(makeSpec([{ steps: 4 }, { steps: 3 }]));
    expect(result.tier).toBe("simple");
    expect(result.streamlined).toBe(true);
  });

  it("classifies a process with many workflows as moderate or complex", () => {
    const result = classifyComplexity(makeSpec([
      { steps: 5 }, { steps: 5 }, { steps: 5 }, { steps: 5 },
    ]));
    expect(["moderate", "complex"]).toContain(result.tier);
    expect(result.streamlined).toBe(false);
  });

  it("classifies a process with advanced capabilities as moderate or complex", () => {
    const result = classifyComplexity(
      makeSpec([{ steps: 3 }]),
      "This process uses Document Understanding to classify documents and extract data from invoices.",
    );
    expect(["moderate", "complex"]).toContain(result.tier);
    expect(result.streamlined).toBe(false);
  });

  it("classifies agent-based processes as complex", () => {
    const nodes = [
      { name: "Agent Loop", description: "Agentic task handler", system: "AI", nodeType: "agent-loop" },
    ];
    const result = classifyComplexity(
      makeSpec([{ steps: 5 }, { steps: 5 }, { steps: 5 }]),
      "This process uses agentic capabilities for intelligent automation.",
      nodes,
    );
    expect(result.tier).toBe("complex");
    expect(result.streamlined).toBe(false);
  });

  it("detects orchestrator artifact signals from SDD text", () => {
    const sdd = "The process uses a Queue named InvoiceQueue. An Asset called EmailServer stores the connection. A Credential called SAP_Login is required.";
    const result = classifyComplexity(makeSpec([{ steps: 3 }]), sdd);
    expect(result.score).toBeGreaterThan(0);
    expect(result.reasons.some(r => r.includes("orchestrator artifact"))).toBe(true);
  });

  it("simple tier with no SDD and few nodes", () => {
    const nodes = [
      { name: "Start", description: "", system: "", nodeType: "start" },
      { name: "Read Excel", description: "Read input file", system: "Excel", nodeType: "action" },
      { name: "End", description: "", system: "", nodeType: "end" },
    ];
    const result = classifyComplexity(makeSpec([{ steps: 2 }]), undefined, nodes);
    expect(result.tier).toBe("simple");
    expect(result.streamlined).toBe(true);
  });

  it("complex tier with many nodes and advanced activities", () => {
    const nodes = Array.from({ length: 20 }, (_, i) => ({
      name: `Step ${i}`,
      description: `Action Center human task for step ${i}`,
      system: "SAP",
      nodeType: "action",
    }));
    const result = classifyComplexity(
      makeSpec([{ steps: 10 }, { steps: 10 }, { steps: 10 }, { steps: 10 }, { steps: 10 }, { steps: 10 }]),
      "Uses Integration Service connector and Data Fabric data entity storage.",
      nodes,
    );
    expect(result.tier).toBe("complex");
    expect(result.streamlined).toBe(false);
  });

  it("returns reasons array explaining the classification", () => {
    const result = classifyComplexity(makeSpec([{ steps: 2 }]));
    expect(result.reasons.length).toBeGreaterThan(0);
    expect(result.reasons.some(r => r.includes("workflow count"))).toBe(true);
  });
});
