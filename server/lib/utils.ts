import crypto from "crypto";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function computePackageFingerprint(
  pkg: { projectName?: string; description?: string; workflows?: any[]; dependencies?: any[] },
  sddContent: string,
  processNodes: any[],
  processEdges: any[],
  orchestratorArtifacts: any,
  aliasMap?: Record<string, string>,
  complexityTier?: string,
): string {
  const payload = JSON.stringify({
    p: pkg.projectName || "",
    d: pkg.description || "",
    w: pkg.workflows || [],
    dep: pkg.dependencies || [],
    sdd: crypto.createHash("md5").update(sddContent || "").digest("hex"),
    n: processNodes
      .map((n: any) => ({ id: n.id, name: n.name, nodeType: n.nodeType || n.type, description: n.description, role: n.role, system: n.system, isPainPoint: n.isPainPoint, orderIndex: n.orderIndex }))
      .sort((a: any, b: any) => a.id - b.id),
    e: processEdges
      .map((e: any) => ({ s: e.sourceNodeId, t: e.targetNodeId, label: e.label }))
      .sort((a: any, b: any) => a.s - b.s || a.t - b.t),
    a: orchestratorArtifacts || null,
    aliasMap: aliasMap || null,
    tier: complexityTier || null,
  });
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function extractSddStructuralContent(sddContent: string): string {
  const artifactMatch = sddContent.match(/```orchestrator_artifacts\s*([\s\S]*?)```/);
  const artifactBlock = artifactMatch ? artifactMatch[1].trim() : "";
  const headingBlocks: string[] = [];
  const structuralHeadings = /^#{1,3}\s+\d+\..*(?:deployment|artifact|orchestrator|architecture|technical|component)/im;
  const sections = sddContent.split(/(?=^#{1,3}\s)/m);
  for (const section of sections) {
    if (structuralHeadings.test(section)) {
      headingBlocks.push(section.trim());
    }
  }
  return artifactBlock + "\n" + headingBlocks.join("\n");
}

export function computeEnrichmentFingerprint(
  processNodes: any[],
  processEdges: any[],
  sddContent: string,
  orchestratorArtifacts: any,
  projectName: string,
  complexityTier?: string,
  workflows?: any[],
): string {
  const structuralSdd = extractSddStructuralContent(sddContent);
  const payload = JSON.stringify({
    n: processNodes
      .map((n: any) => ({ id: n.id, name: n.name, nodeType: n.nodeType || n.type, description: n.description, role: n.role, system: n.system, isPainPoint: n.isPainPoint, orderIndex: n.orderIndex }))
      .sort((a: any, b: any) => a.id - b.id),
    e: processEdges
      .map((e: any) => ({ s: e.sourceNodeId, t: e.targetNodeId, label: e.label }))
      .sort((a: any, b: any) => a.s - b.s || a.t - b.t),
    sddStructural: crypto.createHash("md5").update(structuralSdd).digest("hex"),
    orch: orchestratorArtifacts || null,
    proj: projectName,
    tier: complexityTier || null,
    wf: workflows ? crypto.createHash("md5").update(JSON.stringify(workflows)).digest("hex") : null,
  });
  return crypto.createHash("sha256").update(payload).digest("hex");
}

export function computeXamlFingerprint(
  enrichmentResult: any,
  treeEnrichmentResult: any,
  pkg: { projectName?: string; description?: string; workflows?: any[]; dependencies?: any[] },
  orchestratorArtifacts: any,
  generationMode: string,
  complexityTier?: string,
  dependencyMap?: Record<string, string>,
  targetFramework?: string,
): string {
  const payload = JSON.stringify({
    enrichment: enrichmentResult ? {
      nodes: (enrichmentResult.nodes || []).map((n: any) => ({ id: n.id, name: n.name })),
      useReFramework: enrichmentResult.useReFramework,
      decomposition: enrichmentResult.decomposition || [],
    } : null,
    treeEnrichment: treeEnrichmentResult ? {
      status: treeEnrichmentResult.status,
      spec: treeEnrichmentResult.workflowSpec ? {
        name: treeEnrichmentResult.workflowSpec.name,
        variables: treeEnrichmentResult.workflowSpec.variables,
        arguments: treeEnrichmentResult.workflowSpec.arguments,
        root: crypto.createHash("md5").update(JSON.stringify(treeEnrichmentResult.workflowSpec.rootSequence || {})).digest("hex"),
        useReFramework: treeEnrichmentResult.workflowSpec.useReFramework,
        decomposition: treeEnrichmentResult.workflowSpec.decomposition || [],
      } : null,
      processType: treeEnrichmentResult.processType,
    } : null,
    pkgSpec: {
      p: pkg.projectName || "",
      d: pkg.description || "",
      w: pkg.workflows || [],
      dep: pkg.dependencies || [],
    },
    orch: orchestratorArtifacts || null,
    mode: generationMode,
    tier: complexityTier || null,
    depMap: dependencyMap || null,
    tf: targetFramework || null,
  });
  return crypto.createHash("sha256").update(payload).digest("hex");
}

export function computeQualityGateFingerprint(
  xamlEntries: { name: string; content: string }[],
  projectJsonContent: string,
  configData: string,
  orchestratorArtifacts: any,
  targetFramework: string,
  complexityTier?: string,
  automationPattern?: string,
): string {
  const payload = JSON.stringify({
    xaml: xamlEntries.map(e => ({
      name: e.name,
      hash: crypto.createHash("md5").update(e.content).digest("hex"),
    })),
    projJson: crypto.createHash("md5").update(projectJsonContent || "").digest("hex"),
    config: crypto.createHash("md5").update(configData || "").digest("hex"),
    orch: orchestratorArtifacts || null,
    tf: targetFramework,
    tier: complexityTier || null,
    pattern: automationPattern || null,
  });
  return crypto.createHash("sha256").update(payload).digest("hex");
}
