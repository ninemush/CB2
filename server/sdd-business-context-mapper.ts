export interface WorkflowBusinessContext {
  workflowName: string;
  sddSectionHeading?: string;
  stepNames: string[];
  integrationReferences: string[];
  retryErrorHandlingMarkers: string[];
  declaredInputs: string[];
  declaredOutputs: string[];
  configAssetReferences: string[];
  proseDescription?: string;
}

export type WorkflowBusinessContextMap = Map<string, WorkflowBusinessContext>;

const INTEGRATION_KEYWORDS: Record<string, string> = {
  "sap": "SAP",
  "salesforce": "Salesforce",
  "servicenow": "ServiceNow",
  "oracle": "Oracle",
  "excel": "Excel",
  "outlook": "Outlook",
  "gmail": "Gmail",
  "browser": "Browser/Web",
  "http": "HTTP/API",
  "rest api": "REST API",
  "soap": "SOAP",
  "queue": "Orchestrator Queue",
  "orchestrator": "Orchestrator",
  "action center": "Action Center",
  "data service": "Data Service",
  "document understanding": "Document Understanding",
  "ai center": "AI Center",
  "ml skill": "ML Skill",
  "database": "Database",
  "sql": "SQL Database",
  "smtp": "SMTP/Email",
  "sharepoint": "SharePoint",
  "onedrive": "OneDrive",
  "google sheets": "Google Sheets",
  "jira": "Jira",
  "slack": "Slack",
  "teams": "Microsoft Teams",
  "power bi": "Power BI",
  "dynamics": "Dynamics 365",
  "aws": "AWS",
  "azure": "Azure",
  "gcp": "Google Cloud",
};

const RETRY_ERROR_MARKERS = [
  "retry", "retries", "max retries", "retry count", "retry scope",
  "try catch", "try/catch", "error handling", "exception",
  "business exception", "system exception", "application exception",
  "fallback", "escalate", "escalation", "timeout",
  "recovery", "compensat",
];

const CONFIG_ASSET_PATTERNS = [
  /\basset[s]?\b/i,
  /\bconfig(?:uration)?[s]?\b/i,
  /\bsetting[s]?\b/i,
  /\bparameter[s]?\b/i,
  /\bMaxRetry\b/i,
  /\bCredential[s]?\b/i,
  /\bGetAsset\b/i,
  /\bGetCredential\b/i,
  /\bOrchestratorAsset\b/i,
  /\benvironment\s+variable/i,
];

const INPUT_OUTPUT_PATTERNS = {
  input: [
    /\binput[s]?\s*[:=\-–]\s*([^\n.;]+)/gi,
    /\breceive[s]?\s+([^\n.;]+)/gi,
    /\bread[s]?\s+(?:from\s+)?([^\n.;]+)/gi,
    /\baccept[s]?\s+([^\n.;]+)/gi,
    /\bin_\w+/gi,
  ],
  output: [
    /\boutput[s]?\s*[:=\-–]\s*([^\n.;]+)/gi,
    /\breturn[s]?\s+([^\n.;]+)/gi,
    /\bwrite[s]?\s+(?:to\s+)?([^\n.;]+)/gi,
    /\bproduce[s]?\s+([^\n.;]+)/gi,
    /\bout_\w+/gi,
  ],
};

function extractSddSections(sddContent: string): Array<{ heading: string; body: string; level: number }> {
  const sections: Array<{ heading: string; body: string; level: number }> = [];
  const headingPattern = /^(#{1,4})\s+(.+)$/gm;
  const headings: Array<{ level: number; heading: string; index: number }> = [];

  let match;
  while ((match = headingPattern.exec(sddContent)) !== null) {
    headings.push({
      level: match[1].length,
      heading: match[2].trim(),
      index: match.index + match[0].length,
    });
  }

  for (let i = 0; i < headings.length; i++) {
    const start = headings[i].index;
    const end = i + 1 < headings.length ? headings[i + 1].index - headings[i + 1].heading.length - headings[i + 1].level - 2 : sddContent.length;
    sections.push({
      heading: headings[i].heading,
      body: sddContent.substring(start, end).trim(),
      level: headings[i].level,
    });
  }

  return sections;
}

function normalizeWorkflowName(name: string): string {
  return name
    .replace(/\.xaml$/i, "")
    .replace(/[_\-]/g, " ")
    .toLowerCase()
    .trim();
}

function matchSectionToWorkflow(
  sectionHeading: string,
  workflowNames: string[],
): string | null {
  const normalizedHeading = normalizeWorkflowName(sectionHeading);

  for (const wfName of workflowNames) {
    const normalizedWf = normalizeWorkflowName(wfName);
    if (normalizedWf === normalizedHeading) return wfName;
  }

  for (const wfName of workflowNames) {
    const normalizedWf = normalizeWorkflowName(wfName);
    if (normalizedHeading.includes(normalizedWf) || normalizedWf.includes(normalizedHeading)) {
      return wfName;
    }
  }

  const headingWords = normalizedHeading.split(/\s+/).filter(w => w.length > 2);
  let bestMatch: string | null = null;
  let bestOverlap = 0;

  for (const wfName of workflowNames) {
    const wfWords = normalizeWorkflowName(wfName).split(/\s+/).filter(w => w.length > 2);
    const overlap = headingWords.filter(hw => wfWords.some(ww => ww.includes(hw) || hw.includes(ww))).length;
    const overlapRatio = headingWords.length > 0 ? overlap / headingWords.length : 0;
    if (overlapRatio > 0.5 && overlap > bestOverlap) {
      bestOverlap = overlap;
      bestMatch = wfName;
    }
  }

  return bestMatch;
}

function extractIntegrationRefs(text: string): string[] {
  const refs: string[] = [];
  const lowerText = text.toLowerCase();

  for (const [keyword, label] of Object.entries(INTEGRATION_KEYWORDS)) {
    if (lowerText.includes(keyword) && !refs.includes(label)) {
      refs.push(label);
    }
  }

  return refs;
}

function extractRetryErrorMarkers(text: string): string[] {
  const markers: string[] = [];
  const lowerText = text.toLowerCase();

  for (const marker of RETRY_ERROR_MARKERS) {
    if (lowerText.includes(marker)) {
      markers.push(marker);
    }
  }

  return [...new Set(markers)];
}

function extractConfigAssetRefs(text: string): string[] {
  const refs: string[] = [];

  for (const pattern of CONFIG_ASSET_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) {
      for (const m of matches) {
        if (!refs.includes(m)) refs.push(m);
      }
    }
  }

  return refs;
}

function extractInputsOutputs(text: string): { inputs: string[]; outputs: string[] } {
  const inputs: string[] = [];
  const outputs: string[] = [];

  for (const pattern of INPUT_OUTPUT_PATTERNS.input) {
    let m;
    const re = new RegExp(pattern.source, pattern.flags);
    while ((m = re.exec(text)) !== null) {
      const val = (m[1] || m[0]).trim().slice(0, 80);
      if (val && !inputs.includes(val)) inputs.push(val);
    }
  }

  for (const pattern of INPUT_OUTPUT_PATTERNS.output) {
    let m;
    const re = new RegExp(pattern.source, pattern.flags);
    while ((m = re.exec(text)) !== null) {
      const val = (m[1] || m[0]).trim().slice(0, 80);
      if (val && !outputs.includes(val)) outputs.push(val);
    }
  }

  return { inputs: inputs.slice(0, 10), outputs: outputs.slice(0, 10) };
}

function extractStepNames(text: string): string[] {
  const steps: string[] = [];

  const numberedStepPattern = /^\s*(?:\d+[.)]\s*|[-*]\s*(?:Step\s+\d+[:.]\s*)?)(.+)$/gm;
  let match;
  while ((match = numberedStepPattern.exec(text)) !== null) {
    const step = match[1].trim().slice(0, 100);
    if (step && !steps.includes(step)) steps.push(step);
  }

  return steps.slice(0, 20);
}

function extractProseDescription(body: string): string | undefined {
  const lines = body.split("\n").filter(l => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("|"));
  const prose = lines.slice(0, 3).join(" ").trim();
  if (prose.length < 10) return undefined;
  return prose.length > 300 ? prose.slice(0, 297) + "..." : prose;
}

export function buildWorkflowBusinessContextMap(
  sddContent: string | undefined,
  workflows: Array<{ name: string; description?: string; steps?: Array<{ activity: string; notes?: string }> }>,
): WorkflowBusinessContextMap {
  const contextMap: WorkflowBusinessContextMap = new Map();

  const workflowFileNames = workflows.map(w => {
    const name = w.name || "Main";
    return name.endsWith(".xaml") ? name : `${name}.xaml`;
  });

  for (const wf of workflows) {
    const fileName = wf.name?.endsWith(".xaml") ? wf.name : `${wf.name || "Main"}.xaml`;
    const ctx: WorkflowBusinessContext = {
      workflowName: wf.name || "Main",
      stepNames: [],
      integrationReferences: [],
      retryErrorHandlingMarkers: [],
      declaredInputs: [],
      declaredOutputs: [],
      configAssetReferences: [],
    };

    if (wf.steps) {
      ctx.stepNames = wf.steps
        .map(s => s.activity)
        .filter(Boolean)
        .slice(0, 20);
    }

    if (wf.description) {
      ctx.integrationReferences.push(...extractIntegrationRefs(wf.description));
      ctx.retryErrorHandlingMarkers.push(...extractRetryErrorMarkers(wf.description));
    }

    if (wf.steps) {
      for (const step of wf.steps) {
        const stepText = `${step.activity || ""} ${step.notes || ""}`;
        ctx.integrationReferences.push(...extractIntegrationRefs(stepText));
        ctx.retryErrorHandlingMarkers.push(...extractRetryErrorMarkers(stepText));
        ctx.configAssetReferences.push(...extractConfigAssetRefs(stepText));
      }
    }

    ctx.integrationReferences = [...new Set(ctx.integrationReferences)];
    ctx.retryErrorHandlingMarkers = [...new Set(ctx.retryErrorHandlingMarkers)];
    ctx.configAssetReferences = [...new Set(ctx.configAssetReferences)];

    contextMap.set(fileName, ctx);
  }

  if (sddContent) {
    const sections = extractSddSections(sddContent);

    for (const section of sections) {
      const matchedWf = matchSectionToWorkflow(section.heading, workflowFileNames);
      if (!matchedWf) continue;

      const existing = contextMap.get(matchedWf);
      if (!existing) continue;

      existing.sddSectionHeading = section.heading;

      const sectionIntegrations = extractIntegrationRefs(section.body);
      for (const ref of sectionIntegrations) {
        if (!existing.integrationReferences.includes(ref)) {
          existing.integrationReferences.push(ref);
        }
      }

      const sectionRetry = extractRetryErrorMarkers(section.body);
      for (const marker of sectionRetry) {
        if (!existing.retryErrorHandlingMarkers.includes(marker)) {
          existing.retryErrorHandlingMarkers.push(marker);
        }
      }

      const sectionConfig = extractConfigAssetRefs(section.body);
      for (const ref of sectionConfig) {
        if (!existing.configAssetReferences.includes(ref)) {
          existing.configAssetReferences.push(ref);
        }
      }

      const { inputs, outputs } = extractInputsOutputs(section.body);
      for (const inp of inputs) {
        if (!existing.declaredInputs.includes(inp)) {
          existing.declaredInputs.push(inp);
        }
      }
      for (const out of outputs) {
        if (!existing.declaredOutputs.includes(out)) {
          existing.declaredOutputs.push(out);
        }
      }

      const sectionSteps = extractStepNames(section.body);
      for (const step of sectionSteps) {
        if (!existing.stepNames.includes(step)) {
          existing.stepNames.push(step);
        }
      }

      if (!existing.proseDescription) {
        existing.proseDescription = extractProseDescription(section.body);
      }
    }

    if (sddContent && contextMap.size > 0) {
      const globalIntegrations = extractIntegrationRefs(sddContent);
      const globalConfig = extractConfigAssetRefs(sddContent);

      for (const [, ctx] of contextMap) {
        for (const ref of globalIntegrations) {
          if (!ctx.integrationReferences.includes(ref)) {
            ctx.integrationReferences.push(ref);
          }
        }
        for (const ref of globalConfig) {
          if (!ctx.configAssetReferences.includes(ref)) {
            ctx.configAssetReferences.push(ref);
          }
        }
      }
    }
  }

  return contextMap;
}

export function formatBusinessContextForHandoff(
  ctx: WorkflowBusinessContext | undefined,
  activityName: string,
  blockType?: string,
): string {
  if (!ctx) {
    return `Activity "${activityName}" requires developer implementation.`;
  }

  const parts: string[] = [];

  if (ctx.sddSectionHeading) {
    parts.push(`[SDD Section] ${ctx.sddSectionHeading}`);
  }

  if (ctx.integrationReferences.length > 0) {
    parts.push(`[Integration] ${ctx.integrationReferences.join(", ")}`);
  }

  if (ctx.retryErrorHandlingMarkers.length > 0 && blockType) {
    const relevantMarkers = ctx.retryErrorHandlingMarkers.filter(m => {
      const bt = (blockType || "").toLowerCase();
      if (bt.includes("retry") && (m.includes("retry") || m.includes("max retries"))) return true;
      if (bt.includes("trycatch") && (m.includes("catch") || m.includes("exception") || m.includes("error"))) return true;
      return true;
    });
    if (relevantMarkers.length > 0) {
      parts.push(`[Error Handling] ${relevantMarkers.join(", ")}`);
    }
  }

  if (ctx.configAssetReferences.length > 0) {
    parts.push(`[Config/Assets] ${ctx.configAssetReferences.slice(0, 5).join(", ")}`);
  }

  if (ctx.declaredInputs.length > 0) {
    parts.push(`[Inputs] ${ctx.declaredInputs.slice(0, 5).join(", ")}`);
  }

  if (ctx.declaredOutputs.length > 0) {
    parts.push(`[Outputs] ${ctx.declaredOutputs.slice(0, 5).join(", ")}`);
  }

  if (ctx.stepNames.length > 0) {
    const relevantSteps = ctx.stepNames.slice(0, 5);
    parts.push(`[Steps] ${relevantSteps.join(" → ")}`);
  }

  if (parts.length === 0 && ctx.proseDescription) {
    parts.push(`[SDD Context] ${ctx.proseDescription}`);
  }

  if (parts.length === 0) {
    return `Activity "${activityName}" in workflow "${ctx.workflowName}" requires developer implementation.`;
  }

  return parts.join("\\n");
}
