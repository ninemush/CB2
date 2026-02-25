import Anthropic from "@anthropic-ai/sdk";
import type { ProcessNode, ProcessEdge } from "@shared/schema";

export interface EnrichedActivity {
  activityType: string;
  displayName: string;
  package: string;
  properties: Record<string, string>;
  selectorHint?: string;
  errorHandling: "retry" | "catch" | "escalate" | "none";
  variables: { name: string; type: string; defaultValue?: string }[];
}

export interface EnrichedNodeSpec {
  nodeId: number;
  nodeName: string;
  activities: EnrichedActivity[];
  gaps: {
    category: "selector" | "credential" | "endpoint" | "logic" | "config";
    activity: string;
    description: string;
    placeholder: string;
    estimatedMinutes: number;
  }[];
}

export interface WorkflowDecomposition {
  name: string;
  description: string;
  nodeIds: number[];
  isDispatcher?: boolean;
  isPerformer?: boolean;
}

export interface EnrichmentResult {
  nodes: EnrichedNodeSpec[];
  decomposition: WorkflowDecomposition[];
  useReFramework: boolean;
  reframeworkConfig?: {
    queueName: string;
    maxRetries: number;
    processName: string;
  };
  dhgNotes: string[];
}

const ENRICHMENT_PROMPT = `You are a senior UiPath RPA architect. Given a process map and SDD content, produce a detailed technical specification for generating UiPath XAML workflows.

RULES:
1. Each process node should map to ONE OR MORE UiPath activities (multi-activity sequences for complex steps)
2. Use REAL UiPath activity types from standard packages:
   - UiPath.UIAutomation.Activities: OpenBrowser, NavigateTo, TypeInto, Click, GetText, ElementExists, AttachBrowser, AttachWindow, UseApplicationBrowser
   - UiPath.Excel.Activities: ExcelApplicationScope, ExcelReadRange, ExcelWriteRange, ExcelWriteCell
   - UiPath.Mail.Activities: SendSmtpMailMessage, GetImapMailMessage, GetOutlookMailMessages, SendOutlookMailMessage
   - UiPath.Web.Activities: HttpClient, DeserializeJson, SerializeJson
   - UiPath.Database.Activities: ExecuteQuery, ExecuteNonQuery, ConnectToDatabase
   - UiPath.System.Activities: AddQueueItem, GetTransactionItem, SetTransactionStatus, GetCredential, GetAsset, ReadTextFile, WriteTextFile, PathExists, LogMessage, InvokeWorkflowFile
   - System.Activities: Assign, If, ForEach, Switch, Delay, Sequence, TryCatch, Rethrow
3. Generate SYSTEM-SPECIFIC selector patterns:
   - SAP GUI: <wnd app='saplogon.exe' /><ctrl role='editable text' automationid='usr/txtRSYST-BNAME' />
   - SAP Fiori: <webctrl css-selector='.sapMInputBaseInner' parentcss-selector='.sapMInput' />
   - Salesforce: <webctrl tag='INPUT' css-selector='input[data-interactive-lib-uid]' parentcss-selector='.slds-form-element' />
   - ServiceNow: <webctrl tag='INPUT' id='sys_display.incident.caller_id' />
   - Workday: <webctrl tag='INPUT' data-automation-id='textInputBox' />
   - Oracle: <webctrl tag='INPUT' id='pt1:r1:0:inputText1::content' />
   - Generic web: <webctrl tag='INPUT|SELECT|BUTTON' name='field_name_from_context' />
   - Desktop: <wnd cls='WindowClass' title='Window Title' /><ctrl name='ControlName' role='role' />
4. Use REAL property values from the SDD when available (queue names, asset names, API endpoints, file paths)
5. Variable names should be CONTEXT-SPECIFIC (dt_InvoiceData not dt_ExcelData, str_CustomerEmail not str_EmailTo)
6. For login flows, generate FULL multi-step sequences: navigate → type username → type password → click login → verify success
7. For data processing, use ForEachRow with proper column references
8. Determine if REFramework should be used (when queues are involved for transaction processing)
9. Suggest workflow decomposition: group related steps into sub-workflows by system or function

OUTPUT FORMAT — respond with ONLY valid JSON matching this schema:
{
  "nodes": [
    {
      "nodeId": <number>,
      "nodeName": "<string>",
      "activities": [
        {
          "activityType": "<full UiPath activity type e.g. ui:TypeInto>",
          "displayName": "<descriptive name>",
          "package": "<UiPath package name>",
          "properties": { "<PropertyName>": "<value or TODO_description>" },
          "selectorHint": "<system-specific selector XML or null>",
          "errorHandling": "retry|catch|escalate|none",
          "variables": [{ "name": "<var_name>", "type": "<.NET type>", "defaultValue": "<optional>" }]
        }
      ],
      "gaps": [
        {
          "category": "selector|credential|endpoint|logic|config",
          "activity": "<activity type>",
          "description": "<specific actionable instruction>",
          "placeholder": "<current placeholder value>",
          "estimatedMinutes": <number>
        }
      ]
    }
  ],
  "decomposition": [
    { "name": "<WorkflowName>", "description": "<purpose>", "nodeIds": [<ids>], "isDispatcher": false, "isPerformer": false }
  ],
  "useReFramework": true|false,
  "reframeworkConfig": { "queueName": "<from SDD>", "maxRetries": 3, "processName": "<name>" },
  "dhgNotes": ["<architecture decision or risk note>"]
}`;

export async function enrichWithAI(
  nodes: ProcessNode[],
  edges: ProcessEdge[],
  sddContent: string,
  orchestratorArtifacts: any,
  projectName: string,
  timeoutMs: number = 45000
): Promise<EnrichmentResult | null> {
  try {
    const anthropic = new Anthropic({
      apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
      baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
    });

    const nodeDescriptions = nodes
      .filter(n => n.nodeType !== "start" && n.nodeType !== "end")
      .map(n => ({
        id: n.id,
        name: n.name,
        type: n.nodeType,
        system: n.system || "Unknown",
        role: n.role || "System",
        description: n.description || "",
        isPainPoint: n.isPainPoint || false,
      }));

    const edgeDescriptions = edges.map(e => ({
      from: nodes.find(n => n.id === e.sourceNodeId)?.name || `Node${e.sourceNodeId}`,
      to: nodes.find(n => n.id === e.targetNodeId)?.name || `Node${e.targetNodeId}`,
      label: e.label || "",
    }));

    const sddSummary = sddContent ? sddContent.slice(0, 8000) : "No SDD available";

    const artifactsJson = orchestratorArtifacts
      ? JSON.stringify(orchestratorArtifacts, null, 2).slice(0, 3000)
      : "No artifacts defined";

    const userMessage = `Project: ${projectName}

PROCESS MAP NODES:
${JSON.stringify(nodeDescriptions, null, 2)}

PROCESS MAP EDGES:
${JSON.stringify(edgeDescriptions, null, 2)}

ORCHESTRATOR ARTIFACTS (from SDD):
${artifactsJson}

SDD CONTENT (excerpts):
${sddSummary}

Generate the enriched workflow specification. For each node, provide the specific UiPath activities with system-aware properties and selectors. Determine if REFramework is appropriate and suggest workflow decomposition.`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      console.log(`[AI XAML Enricher] Requesting enrichment for ${nodeDescriptions.length} nodes...`);
      const response = await anthropic.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 8192,
        system: ENRICHMENT_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      });

      clearTimeout(timeout);

      const content = response.content[0];
      if (content.type !== "text") {
        console.log("[AI XAML Enricher] Non-text response received");
        return null;
      }

      let jsonText = content.text.trim();
      const fenceMatch = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (fenceMatch) {
        jsonText = fenceMatch[1].trim();
      }

      const parsed = JSON.parse(jsonText) as EnrichmentResult;

      if (!parsed.nodes || !Array.isArray(parsed.nodes)) {
        console.log("[AI XAML Enricher] Invalid response structure — missing nodes array");
        return null;
      }

      for (const node of parsed.nodes) {
        if (!node.activities) node.activities = [];
        if (!node.gaps) node.gaps = [];
        node.activities = node.activities.filter((a: any) =>
          a && typeof a.activityType === "string" && a.activityType.length > 0
        );
        for (const act of node.activities) {
          if (!act.properties) act.properties = {};
          if (!act.variables) act.variables = [];
          if (!act.errorHandling) act.errorHandling = "none";
          if (!act.package) act.package = "UiPath.System.Activities";
        }
      }
      if (!parsed.decomposition) parsed.decomposition = [];
      if (!parsed.dhgNotes) parsed.dhgNotes = [];
      if (typeof parsed.useReFramework !== "boolean") parsed.useReFramework = false;

      console.log(`[AI XAML Enricher] Successfully enriched ${parsed.nodes.length} nodes, REFramework=${parsed.useReFramework}, ${parsed.decomposition?.length || 0} sub-workflows`);
      return parsed;
    } finally {
      clearTimeout(timeout);
    }
  } catch (err: any) {
    if (err.name === "AbortError") {
      console.log("[AI XAML Enricher] Timed out — falling back to keyword classification");
    } else {
      console.log(`[AI XAML Enricher] Error: ${err.message} — falling back to keyword classification`);
    }
    return null;
  }
}
