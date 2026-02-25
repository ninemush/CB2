import type { ProcessNode, ProcessEdge } from "@shared/schema";

export type XamlGap = {
  category: "selector" | "credential" | "endpoint" | "logic" | "config" | "manual";
  activity: string;
  description: string;
  placeholder: string;
  estimatedMinutes: number;
};

export type XamlGeneratorResult = {
  xaml: string;
  gaps: XamlGap[];
  usedPackages: string[];
  variables: VariableDecl[];
};

type VariableDecl = {
  name: string;
  type: string;
  defaultValue?: string;
};

type ActivityContext = {
  system: string;
  nodeType: string;
  name: string;
  description: string;
  role: string;
  isPainPoint: boolean;
};

type WorkflowStep = {
  activity?: string;
  activityType?: string;
  activityPackage?: string;
  properties?: Record<string, any>;
  variables?: VariableDecl[];
  errorHandling?: "retry" | "catch" | "escalate" | "none";
  selectorHint?: string;
  notes?: string;
};

type WorkflowSpec = {
  name: string;
  description?: string;
  steps?: WorkflowStep[];
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function classifyActivity(ctx: ActivityContext): {
  activityType: string;
  activityPackage: string;
  properties: Record<string, string>;
  selectorHint?: string;
  errorHandling: "retry" | "catch" | "escalate" | "none";
  variables: VariableDecl[];
  gaps: XamlGap[];
} {
  const system = (ctx.system || "").toLowerCase();
  const name = (ctx.name || "").toLowerCase();
  const desc = (ctx.description || "").toLowerCase();
  const combined = `${name} ${desc} ${system}`;

  if (system.includes("excel") || system.includes("spreadsheet") || combined.includes("excel") || combined.includes("spreadsheet")) {
    return classifyExcel(ctx, combined);
  }
  if (system.includes("email") || system.includes("outlook") || system.includes("smtp") || combined.includes("email") || combined.includes("mail")) {
    return classifyEmail(ctx, combined);
  }
  if (system.includes("api") || system.includes("http") || system.includes("rest") || system.includes("web service") || combined.includes("api") || combined.includes("http request")) {
    return classifyApi(ctx, combined);
  }
  if (system.includes("database") || system.includes("sql") || system.includes("db") || combined.includes("database") || combined.includes("query")) {
    return classifyDatabase(ctx, combined);
  }
  if (system.includes("queue") || combined.includes("queue item") || combined.includes("transaction")) {
    return classifyQueue(ctx, combined);
  }
  if (combined.includes("file") || combined.includes("folder") || combined.includes("directory") || combined.includes("read") || combined.includes("write") || combined.includes("download") || combined.includes("upload")) {
    return classifyFile(ctx, combined);
  }
  if (combined.includes("browser") || combined.includes("web") || combined.includes("click") || combined.includes("type") || combined.includes("navigate") || combined.includes("login") || combined.includes("portal") || combined.includes("screen") || combined.includes("ui ") || combined.includes("application")) {
    return classifyUI(ctx, combined);
  }

  return classifyGeneral(ctx, combined);
}

function classifyExcel(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [];

  if (combined.includes("read") || combined.includes("extract") || combined.includes("get") || combined.includes("open")) {
    variables.push({ name: "dt_ExcelData", type: "System.Data.DataTable" });
    gaps.push({
      category: "config",
      activity: "ExcelReadRange",
      description: `Configure Excel file path for "${ctx.name}"`,
      placeholder: "C:\\Data\\Input.xlsx",
      estimatedMinutes: 10,
    });
    return {
      activityType: "ui:ExcelApplicationScope",
      activityPackage: "UiPath.Excel.Activities",
      properties: { WorkbookPath: "TODO: Set Excel file path" },
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  if (combined.includes("write") || combined.includes("save") || combined.includes("export") || combined.includes("update")) {
    variables.push({ name: "dt_OutputData", type: "System.Data.DataTable" });
    gaps.push({
      category: "config",
      activity: "ExcelWriteRange",
      description: `Configure output Excel file path for "${ctx.name}"`,
      placeholder: "C:\\Data\\Output.xlsx",
      estimatedMinutes: 10,
    });
    return {
      activityType: "ui:ExcelApplicationScope",
      activityPackage: "UiPath.Excel.Activities",
      properties: { WorkbookPath: "TODO: Set output Excel file path" },
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  variables.push({ name: "dt_ExcelData", type: "System.Data.DataTable" });
  gaps.push({
    category: "config",
    activity: "ExcelApplicationScope",
    description: `Configure Excel file path for "${ctx.name}"`,
    placeholder: "C:\\Data\\Workbook.xlsx",
    estimatedMinutes: 10,
  });
  return {
    activityType: "ui:ExcelApplicationScope",
    activityPackage: "UiPath.Excel.Activities",
    properties: { WorkbookPath: "TODO: Set Excel file path" },
    errorHandling: "retry",
    variables,
    gaps,
  };
}

function classifyEmail(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [];

  if (combined.includes("send") || combined.includes("notify") || combined.includes("forward") || combined.includes("reply")) {
    variables.push({ name: "str_EmailTo", type: "String", defaultValue: '""' });
    variables.push({ name: "str_EmailSubject", type: "String", defaultValue: '""' });
    variables.push({ name: "str_EmailBody", type: "String", defaultValue: '""' });
    gaps.push({
      category: "credential",
      activity: "SendSmtpMailMessage",
      description: `Configure SMTP credentials for "${ctx.name}"`,
      placeholder: "Use Orchestrator Credential asset",
      estimatedMinutes: 15,
    });
    gaps.push({
      category: "config",
      activity: "SendSmtpMailMessage",
      description: `Set SMTP server and port for "${ctx.name}"`,
      placeholder: "smtp.office365.com:587",
      estimatedMinutes: 5,
    });
    return {
      activityType: "ui:SendSmtpMailMessage",
      activityPackage: "UiPath.Mail.Activities",
      properties: {
        To: "TODO: Set recipient email",
        Subject: "TODO: Set email subject",
        Body: "TODO: Set email body",
        Server: "TODO: Set SMTP server",
        Port: "587",
      },
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  variables.push({ name: "list_Emails", type: "System.Collections.Generic.List(System.Net.Mail.MailMessage)" });
  gaps.push({
    category: "credential",
    activity: "GetImapMailMessage",
    description: `Configure IMAP credentials for "${ctx.name}"`,
    placeholder: "Use Orchestrator Credential asset",
    estimatedMinutes: 15,
  });
  return {
    activityType: "ui:GetImapMailMessage",
    activityPackage: "UiPath.Mail.Activities",
    properties: {
      Server: "TODO: Set IMAP server",
      Port: "993",
      Top: "10",
    },
    errorHandling: "retry",
    variables,
    gaps,
  };
}

function classifyApi(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [
    { name: "str_ApiResponse", type: "String", defaultValue: '""' },
    { name: "int_StatusCode", type: "Int32", defaultValue: "0" },
  ];

  let method = "GET";
  if (combined.includes("post") || combined.includes("create") || combined.includes("submit") || combined.includes("send")) {
    method = "POST";
  } else if (combined.includes("update") || combined.includes("patch")) {
    method = "PATCH";
  } else if (combined.includes("delete") || combined.includes("remove")) {
    method = "DELETE";
  }

  gaps.push({
    category: "endpoint",
    activity: "HttpClient",
    description: `Configure API endpoint URL for "${ctx.name}"`,
    placeholder: "https://api.example.com/endpoint",
    estimatedMinutes: 15,
  });
  gaps.push({
    category: "credential",
    activity: "HttpClient",
    description: `Configure API authentication for "${ctx.name}"`,
    placeholder: "Bearer token or API key from Orchestrator asset",
    estimatedMinutes: 10,
  });

  return {
    activityType: "ui:HttpClient",
    activityPackage: "UiPath.Web.Activities",
    properties: {
      EndPoint: "TODO: Set API endpoint URL",
      Method: method,
      AcceptFormat: "JSON",
    },
    errorHandling: "retry",
    variables,
    gaps,
  };
}

function classifyDatabase(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [
    { name: "dt_QueryResult", type: "System.Data.DataTable" },
  ];

  gaps.push({
    category: "endpoint",
    activity: "ExecuteQuery",
    description: `Configure database connection string for "${ctx.name}"`,
    placeholder: "Server=TODO;Database=TODO;User Id=TODO;Password=TODO;",
    estimatedMinutes: 15,
  });
  gaps.push({
    category: "logic",
    activity: "ExecuteQuery",
    description: `Write SQL query for "${ctx.name}"`,
    placeholder: "SELECT * FROM TableName WHERE Condition",
    estimatedMinutes: 20,
  });

  return {
    activityType: "ui:ExecuteQuery",
    activityPackage: "UiPath.Database.Activities",
    properties: {
      ConnectionString: "TODO: Set database connection string",
      Sql: "TODO: Write SQL query",
      ProviderName: "System.Data.SqlClient",
    },
    errorHandling: "catch",
    variables,
    gaps,
  };
}

function classifyQueue(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [];

  if (combined.includes("add") || combined.includes("push") || combined.includes("create")) {
    variables.push({ name: "queueItemInfo", type: "UiPath.Core.QueueItemData" });
    gaps.push({
      category: "config",
      activity: "AddQueueItem",
      description: `Configure queue name and item data for "${ctx.name}"`,
      placeholder: "QueueName from Orchestrator",
      estimatedMinutes: 10,
    });
    return {
      activityType: "ui:AddQueueItem",
      activityPackage: "UiPath.System.Activities",
      properties: {
        QueueName: "TODO: Set Orchestrator queue name",
        Reference: "TODO: Set unique reference",
      },
      errorHandling: "catch",
      variables,
      gaps,
    };
  }

  if (combined.includes("get") || combined.includes("fetch") || combined.includes("process") || combined.includes("transaction")) {
    variables.push({ name: "queueItem", type: "UiPath.Core.QueueItem" });
    gaps.push({
      category: "config",
      activity: "GetTransactionItem",
      description: `Configure queue name for "${ctx.name}"`,
      placeholder: "QueueName from Orchestrator",
      estimatedMinutes: 10,
    });
    return {
      activityType: "ui:GetTransactionItem",
      activityPackage: "UiPath.System.Activities",
      properties: {
        QueueName: "TODO: Set Orchestrator queue name",
      },
      errorHandling: "catch",
      variables,
      gaps,
    };
  }

  variables.push({ name: "queueItem", type: "UiPath.Core.QueueItem" });
  return {
    activityType: "ui:SetTransactionStatus",
    activityPackage: "UiPath.System.Activities",
    properties: {
      Status: "Successful",
    },
    errorHandling: "catch",
    variables,
    gaps,
  };
}

function classifyFile(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [];

  if (combined.includes("read") || combined.includes("load") || combined.includes("open") || combined.includes("import")) {
    variables.push({ name: "str_FileContent", type: "String", defaultValue: '""' });
    gaps.push({
      category: "config",
      activity: "ReadTextFile",
      description: `Configure input file path for "${ctx.name}"`,
      placeholder: "C:\\Data\\Input.txt",
      estimatedMinutes: 5,
    });
    return {
      activityType: "ui:ReadTextFile",
      activityPackage: "UiPath.System.Activities",
      properties: { FileName: "TODO: Set input file path" },
      errorHandling: "catch",
      variables,
      gaps,
    };
  }

  if (combined.includes("write") || combined.includes("save") || combined.includes("export") || combined.includes("output")) {
    gaps.push({
      category: "config",
      activity: "WriteTextFile",
      description: `Configure output file path for "${ctx.name}"`,
      placeholder: "C:\\Data\\Output.txt",
      estimatedMinutes: 5,
    });
    return {
      activityType: "ui:WriteTextFile",
      activityPackage: "UiPath.System.Activities",
      properties: {
        FileName: "TODO: Set output file path",
        Text: "TODO: Set content to write",
      },
      errorHandling: "catch",
      variables,
      gaps,
    };
  }

  if (combined.includes("exist") || combined.includes("check") || combined.includes("verify")) {
    variables.push({ name: "bool_FileExists", type: "Boolean", defaultValue: "False" });
    return {
      activityType: "ui:PathExists",
      activityPackage: "UiPath.System.Activities",
      properties: { Path: "TODO: Set path to check" },
      errorHandling: "none",
      variables,
      gaps,
    };
  }

  variables.push({ name: "str_FileContent", type: "String", defaultValue: '""' });
  gaps.push({
    category: "config",
    activity: "ReadTextFile",
    description: `Configure file path for "${ctx.name}"`,
    placeholder: "C:\\Data\\File.txt",
    estimatedMinutes: 5,
  });
  return {
    activityType: "ui:ReadTextFile",
    activityPackage: "UiPath.System.Activities",
    properties: { FileName: "TODO: Set file path" },
    errorHandling: "catch",
    variables,
    gaps,
  };
}

function classifyUI(ctx: ActivityContext, combined: string): ReturnType<typeof classifyActivity> {
  const gaps: XamlGap[] = [];
  const variables: VariableDecl[] = [];

  const selectorBase = `<html app='${escapeXml(ctx.system || "application")}' />`;

  if (combined.includes("open") || combined.includes("launch") || combined.includes("navigate") || combined.includes("browser") || combined.includes("url")) {
    gaps.push({
      category: "selector",
      activity: "OpenBrowser",
      description: `Set target URL for "${ctx.name}"`,
      placeholder: "https://application.example.com",
      estimatedMinutes: 5,
    });
    return {
      activityType: "ui:OpenBrowser",
      activityPackage: "UiPath.UIAutomation.Activities",
      properties: {
        Url: "TODO: Set application URL",
        BrowserType: "Chrome",
      },
      selectorHint: selectorBase,
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  if (combined.includes("type") || combined.includes("enter") || combined.includes("input") || combined.includes("fill")) {
    gaps.push({
      category: "selector",
      activity: "TypeInto",
      description: `Configure UI selector for input field in "${ctx.name}"`,
      placeholder: `<webctrl tag='INPUT' name='TODO' />`,
      estimatedMinutes: 15,
    });
    return {
      activityType: "ui:TypeInto",
      activityPackage: "UiPath.UIAutomation.Activities",
      properties: {
        Text: "TODO: Set text to type",
      },
      selectorHint: `${selectorBase}<webctrl tag='INPUT' name='TODO_field_name' />`,
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  if (combined.includes("click") || combined.includes("press") || combined.includes("button") || combined.includes("submit") || combined.includes("select")) {
    gaps.push({
      category: "selector",
      activity: "Click",
      description: `Configure UI selector for clickable element in "${ctx.name}"`,
      placeholder: `<webctrl tag='BUTTON' name='TODO' />`,
      estimatedMinutes: 15,
    });
    return {
      activityType: "ui:Click",
      activityPackage: "UiPath.UIAutomation.Activities",
      properties: {},
      selectorHint: `${selectorBase}<webctrl tag='BUTTON' name='TODO_button_name' />`,
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  if (combined.includes("get text") || combined.includes("extract") || combined.includes("scrape") || combined.includes("read") || combined.includes("copy")) {
    variables.push({ name: "str_ExtractedText", type: "String", defaultValue: '""' });
    gaps.push({
      category: "selector",
      activity: "GetText",
      description: `Configure UI selector for text extraction in "${ctx.name}"`,
      placeholder: `<webctrl tag='SPAN' id='TODO' />`,
      estimatedMinutes: 15,
    });
    return {
      activityType: "ui:GetText",
      activityPackage: "UiPath.UIAutomation.Activities",
      properties: {},
      selectorHint: `${selectorBase}<webctrl tag='SPAN' id='TODO_element_id' />`,
      errorHandling: "retry",
      variables,
      gaps,
    };
  }

  gaps.push({
    category: "selector",
    activity: "ClickOnText",
    description: `Configure UI selector for "${ctx.name}"`,
    placeholder: `<webctrl tag='*' aaname='TODO' />`,
    estimatedMinutes: 15,
  });
  return {
    activityType: "ui:Click",
    activityPackage: "UiPath.UIAutomation.Activities",
    properties: {},
    selectorHint: `${selectorBase}<webctrl tag='*' aaname='TODO_element' />`,
    errorHandling: "retry",
    variables,
    gaps,
  };
}

function classifyGeneral(ctx: ActivityContext, _combined: string): ReturnType<typeof classifyActivity> {
  return {
    activityType: "ui:LogMessage",
    activityPackage: "UiPath.System.Activities",
    properties: {
      Level: "Info",
      Message: `"Executing: ${escapeXml(ctx.name)}"`,
    },
    errorHandling: "none",
    variables: [],
    gaps: [{
      category: "logic",
      activity: "LogMessage",
      description: `Implement business logic for "${ctx.name}"`,
      placeholder: "Replace LogMessage with actual implementation",
      estimatedMinutes: 30,
    }],
  };
}

function renderVariablesBlock(variables: VariableDecl[]): string {
  if (variables.length === 0) return "<Sequence.Variables />";

  const uniqueVars = new Map<string, VariableDecl>();
  for (const v of variables) {
    if (!uniqueVars.has(v.name)) {
      uniqueVars.set(v.name, v);
    }
  }

  let xml = "<Sequence.Variables>\n";
  uniqueVars.forEach((v) => {
    const typeAttr = mapClrType(v.type);
    if (v.defaultValue) {
      xml += `        <Variable x:TypeArguments="${typeAttr}" Name="${escapeXml(v.name)}" Default="${escapeXml(v.defaultValue)}" />\n`;
    } else {
      xml += `        <Variable x:TypeArguments="${typeAttr}" Name="${escapeXml(v.name)}" />\n`;
    }
  });
  xml += "      </Sequence.Variables>";
  return xml;
}

function mapClrType(type: string): string {
  const lower = type.toLowerCase();
  if (lower === "string") return "x:String";
  if (lower === "int32" || lower === "integer" || lower === "int") return "x:Int32";
  if (lower === "boolean" || lower === "bool") return "x:Boolean";
  if (lower.includes("datatable")) return "scg:DataTable";
  return type;
}

function renderActivity(
  activityType: string,
  displayName: string,
  properties: Record<string, string>,
  selectorHint?: string
): string {
  let propAttrs = "";
  for (const [key, value] of Object.entries(properties)) {
    propAttrs += ` ${key}="${escapeXml(value)}"`;
  }

  let selectorXml = "";
  if (selectorHint) {
    selectorXml = `\n            <!-- TODO: Replace placeholder selector with real UI selector captured from UiPath Studio -->
            <!-- Selector hint: ${escapeXml(selectorHint)} -->`;
  }

  return `
          <${activityType} DisplayName="${escapeXml(displayName)}"${propAttrs} />${selectorXml}`;
}

function wrapInTryCatch(innerXml: string, stepName: string, errorHandling: "retry" | "catch" | "escalate" | "none"): string {
  if (errorHandling === "none") return innerXml;

  if (errorHandling === "retry") {
    return `
          <ui:RetryScope DisplayName="Retry: ${escapeXml(stepName)}" NumberOfRetries="3" RetryInterval="00:00:05">
            <ui:RetryScope.Body>
              <Sequence DisplayName="Retry Body: ${escapeXml(stepName)}">${innerXml}
              </Sequence>
            </ui:RetryScope.Body>
            <ui:RetryScope.Condition>
              <ui:ShouldRetry />
            </ui:RetryScope.Condition>
          </ui:RetryScope>`;
  }

  const catchAction = errorHandling === "escalate"
    ? `<ui:LogMessage Level="Error" Message="[Escalation Required] ${escapeXml(stepName)} failed — manual intervention needed" DisplayName="Log Escalation" />`
    : `<ui:LogMessage Level="Error" Message="[Error] ${escapeXml(stepName)} failed" DisplayName="Log Error" />`;

  return `
          <TryCatch DisplayName="Try: ${escapeXml(stepName)}">
            <TryCatch.Try>
              <Sequence DisplayName="Execute: ${escapeXml(stepName)}">${innerXml}
              </Sequence>
            </TryCatch.Try>
            <TryCatch.Catches>
              <Catch x:TypeArguments="s:Exception">
                <ActivityAction x:TypeArguments="s:Exception">
                  <ActivityAction.Argument>
                    <DelegateInArgument x:TypeArguments="s:Exception" Name="exception" />
                  </ActivityAction.Argument>
                  <Sequence DisplayName="Handle Exception: ${escapeXml(stepName)}">
                    ${catchAction}
                    <Rethrow DisplayName="Rethrow" />
                  </Sequence>
                </ActivityAction>
              </Catch>
            </TryCatch.Catches>
          </TryCatch>`;
}

function wrapInIf(innerXml: string, condition: string, displayName: string): string {
  return `
          <If DisplayName="Decision: ${escapeXml(displayName)}" Condition="[${escapeXml(condition)}]">
            <If.Then>
              <Sequence DisplayName="Then: ${escapeXml(displayName)}">${innerXml}
              </Sequence>
            </If.Then>
            <If.Else>
              <Sequence DisplayName="Else: ${escapeXml(displayName)}">
                <ui:LogMessage Level="Info" Message="'Condition not met: ${escapeXml(displayName)}'" DisplayName="Log Else Path" />
              </Sequence>
            </If.Else>
          </If>`;
}

export function generateRichXamlFromNodes(
  nodes: ProcessNode[],
  edges: ProcessEdge[],
  workflowName: string,
  projectDescription: string
): XamlGeneratorResult {
  const allGaps: XamlGap[] = [];
  const allVariables: VariableDecl[] = [];
  const usedPackages = new Set<string>(["UiPath.System.Activities"]);
  let activities = "";

  const edgeMap = new Map<number, { target: number; label: string }[]>();
  for (const e of edges) {
    const list = edgeMap.get(e.sourceNodeId) || [];
    list.push({ target: e.targetNodeId, label: e.label || "" });
    edgeMap.set(e.sourceNodeId, list);
  }

  const nodeMap = new Map<number, ProcessNode>();
  for (const n of nodes) {
    nodeMap.set(n.id, n);
  }

  const sortedNodes = [...nodes].sort((a, b) => a.orderIndex - b.orderIndex);

  activities += `
        <ui:LogMessage Level="Info" Message="'=== Starting: ${escapeXml(workflowName)} ==='" DisplayName="Log Start" />`;

  const startNodes = sortedNodes.filter(n => n.nodeType === "start");
  const endNodes = sortedNodes.filter(n => n.nodeType === "end");
  const taskNodes = sortedNodes.filter(n => n.nodeType !== "start" && n.nodeType !== "end");

  if (startNodes.length > 0) {
    for (const node of startNodes) {
      activities += `
        <ui:LogMessage Level="Info" Message="'Initialization: ${escapeXml(node.name)}'" DisplayName="Init: ${escapeXml(node.name)}" />`;
    }
    activities += `
        <!-- TODO: Add config file reading (InitAllSettings) and variable initialization here -->`;
    allGaps.push({
      category: "config",
      activity: "Initialization",
      description: "Add Config.xlsx reading and variable initialization in start sequence",
      placeholder: "Use InitAllSettings.xaml to read Config.xlsx",
      estimatedMinutes: 30,
    });
  }

  for (const node of taskNodes) {
    const ctx: ActivityContext = {
      system: node.system || "",
      nodeType: node.nodeType,
      name: node.name,
      description: node.description || "",
      role: node.role || "",
      isPainPoint: node.isPainPoint || false,
    };

    if (node.nodeType === "decision") {
      const outEdges = edgeMap.get(node.id) || [];
      const condition = outEdges.find(e => e.label)?.label || "TODO_Condition";

      allVariables.push({ name: "bool_Decision", type: "Boolean", defaultValue: "False" });
      allGaps.push({
        category: "logic",
        activity: "Decision",
        description: `Implement decision logic for "${node.name}": ${condition}`,
        placeholder: `Evaluate condition: ${condition}`,
        estimatedMinutes: 20,
      });

      let thenActivities = "";
      let elseActivities = "";
      for (const outEdge of outEdges) {
        const targetNode = nodeMap.get(outEdge.target);
        if (!targetNode) continue;
        const branchCtx: ActivityContext = {
          system: targetNode.system || "",
          nodeType: targetNode.nodeType,
          name: targetNode.name,
          description: targetNode.description || "",
          role: targetNode.role || "",
          isPainPoint: targetNode.isPainPoint || false,
        };
        const classified = classifyActivity(branchCtx);
        const branchActivity = renderActivity(classified.activityType, targetNode.name, classified.properties, classified.selectorHint);
        const label = (outEdge.label || "").toLowerCase();
        if (label.includes("yes") || label.includes("true") || label.includes("approve") || label.includes("pass")) {
          thenActivities += branchActivity;
        } else {
          elseActivities += branchActivity;
        }
      }

      if (!thenActivities) {
        thenActivities = `
            <ui:LogMessage Level="Info" Message="'Then branch: ${escapeXml(node.name)}'" DisplayName="Then Path" />`;
      }

      activities += `
        <If DisplayName="Decision: ${escapeXml(node.name)}" Condition="[${escapeXml(condition)}]">
          <If.Then>
            <Sequence DisplayName="Yes: ${escapeXml(node.name)}">${thenActivities}
            </Sequence>
          </If.Then>
          <If.Else>
            <Sequence DisplayName="No: ${escapeXml(node.name)}">${elseActivities || `
              <ui:LogMessage Level="Info" Message="'Else branch: ${escapeXml(node.name)}'" DisplayName="Else Path" />`}
            </Sequence>
          </If.Else>
        </If>`;
      continue;
    }

    const classified = classifyActivity(ctx);
    usedPackages.add(classified.activityPackage);
    allVariables.push(...classified.variables);
    allGaps.push(...classified.gaps);

    const activityXml = renderActivity(
      classified.activityType,
      node.name,
      classified.properties,
      classified.selectorHint
    );

    const wrappedXml = wrapInTryCatch(activityXml, node.name, classified.errorHandling);
    activities += wrappedXml;
  }

  for (const node of endNodes) {
    activities += `
        <ui:LogMessage Level="Info" Message="'Completed: ${escapeXml(node.name)}'" DisplayName="End: ${escapeXml(node.name)}" />`;
  }

  activities += `
        <ui:LogMessage Level="Info" Message="'=== Completed: ${escapeXml(workflowName)} ==='" DisplayName="Log Completion" />`;

  const variablesBlock = renderVariablesBlock(allVariables);

  const xaml = `<?xml version="1.0" encoding="utf-8"?>
<Activity mc:Ignorable="sap sap2010" x:Class="${escapeXml(workflowName.replace(/\s+/g, "_"))}"
  xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:s="clr-namespace:System;assembly=mscorlib"
  xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation"
  xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation"
  xmlns:scg="clr-namespace:System.Data;assembly=System.Data"
  xmlns:ui="http://schemas.uipath.com/workflow/activities"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <Sequence DisplayName="${escapeXml(workflowName)}">
    ${variablesBlock}${activities}
  </Sequence>
</Activity>`;

  return {
    xaml,
    gaps: allGaps,
    usedPackages: Array.from(usedPackages),
    variables: allVariables,
  };
}

export function generateRichXamlFromSpec(
  workflow: WorkflowSpec,
  sddContent?: string
): XamlGeneratorResult {
  const allGaps: XamlGap[] = [];
  const allVariables: VariableDecl[] = [];
  const usedPackages = new Set<string>(["UiPath.System.Activities"]);
  let activities = "";

  const wfName = workflow.name || "Workflow";
  const steps = workflow.steps || [];

  activities += `
        <ui:LogMessage Level="Info" Message="'=== Starting: ${escapeXml(wfName)} ==='" DisplayName="Log Start" />`;

  if (sddContent) {
    const errorHandlingSection = extractSddSection(sddContent, 5);
    if (errorHandlingSection) {
      allGaps.push({
        category: "logic",
        activity: "ErrorHandling",
        description: "Review SDD Section 5 error handling strategy and ensure all exception paths are implemented",
        placeholder: errorHandlingSection.slice(0, 200),
        estimatedMinutes: 60,
      });
    }
  }

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const stepName = step.activity || step.activityType || `Step ${i + 1}`;

    if (step.activityType) {
      usedPackages.add(step.activityPackage || "UiPath.System.Activities");
      if (step.variables) {
        allVariables.push(...step.variables);
      }

      const props: Record<string, string> = {};
      if (step.properties) {
        for (const [k, v] of Object.entries(step.properties)) {
          props[k] = String(v);
        }
      }

      const activityXml = renderActivity(
        step.activityType,
        stepName,
        props,
        step.selectorHint
      );

      if (step.selectorHint) {
        allGaps.push({
          category: "selector",
          activity: step.activityType,
          description: `Replace placeholder selector in "${stepName}"`,
          placeholder: step.selectorHint,
          estimatedMinutes: 15,
        });
      }

      const errorHandling = step.errorHandling || "none";
      const wrappedXml = wrapInTryCatch(activityXml, stepName, errorHandling);
      activities += wrappedXml;
    } else {
      const ctx: ActivityContext = {
        system: "",
        nodeType: "task",
        name: stepName,
        description: step.notes || "",
        role: "",
        isPainPoint: false,
      };

      const classified = classifyActivity(ctx);
      usedPackages.add(classified.activityPackage);
      allVariables.push(...classified.variables);
      allGaps.push(...classified.gaps);

      const activityXml = renderActivity(
        classified.activityType,
        stepName,
        classified.properties,
        classified.selectorHint
      );

      const wrappedXml = wrapInTryCatch(activityXml, stepName, classified.errorHandling);
      activities += wrappedXml;
    }
  }

  activities += `
        <ui:LogMessage Level="Info" Message="'=== Completed: ${escapeXml(wfName)} ==='" DisplayName="Log Completion" />`;

  const variablesBlock = renderVariablesBlock(allVariables);

  const xaml = `<?xml version="1.0" encoding="utf-8"?>
<Activity mc:Ignorable="sap sap2010" x:Class="${escapeXml(wfName.replace(/\s+/g, "_"))}"
  xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:s="clr-namespace:System;assembly=mscorlib"
  xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation"
  xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation"
  xmlns:scg="clr-namespace:System.Data;assembly=System.Data"
  xmlns:ui="http://schemas.uipath.com/workflow/activities"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <Sequence DisplayName="${escapeXml(wfName)}">
    ${variablesBlock}${activities}
  </Sequence>
</Activity>`;

  return {
    xaml,
    gaps: allGaps,
    usedPackages: Array.from(usedPackages),
    variables: allVariables,
  };
}

function extractSddSection(sddContent: string, sectionNumber: number): string | null {
  const pattern = new RegExp(`## ${sectionNumber}\\.\\s+[^\\n]+\\n([\\s\\S]*?)(?=## \\d+\\.|$)`);
  const match = sddContent.match(pattern);
  return match ? match[1].trim() : null;
}

export function generateInitAllSettingsXaml(): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<Activity mc:Ignorable="sap sap2010" x:Class="InitAllSettings"
  xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:s="clr-namespace:System;assembly=mscorlib"
  xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation"
  xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation"
  xmlns:scg="clr-namespace:System.Data;assembly=System.Data"
  xmlns:ui="http://schemas.uipath.com/workflow/activities"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <Sequence DisplayName="Initialize All Settings">
    <Sequence.Variables>
      <Variable x:TypeArguments="scg:DataTable" Name="dt_Settings" />
      <Variable x:TypeArguments="scg:DataTable" Name="dt_Constants" />
      <Variable x:TypeArguments="x:String" Name="str_ConfigPath" Default="Data\\Config.xlsx" />
    </Sequence.Variables>
    <ui:LogMessage Level="Info" Message="'Reading configuration from Config.xlsx...'" DisplayName="Log Config Start" />
    <!-- TODO: Read Settings sheet from Config.xlsx -->
    <ui:ExcelApplicationScope DisplayName="Read Config File" WorkbookPath="[str_ConfigPath]">
      <ui:ExcelApplicationScope.Body>
        <Sequence DisplayName="Read Config Sheets">
          <ui:ExcelReadRange DisplayName="Read Settings Sheet" SheetName="Settings" DataTable="[dt_Settings]" />
          <ui:ExcelReadRange DisplayName="Read Constants Sheet" SheetName="Constants" DataTable="[dt_Constants]" />
        </Sequence>
      </ui:ExcelApplicationScope.Body>
    </ui:ExcelApplicationScope>
    <!-- TODO: Iterate through dt_Settings rows and fetch Orchestrator Asset values -->
    <!-- TODO: Iterate through dt_Constants rows and store values in Config dictionary -->
    <ui:LogMessage Level="Info" Message="'Configuration loaded successfully'" DisplayName="Log Config Complete" />
  </Sequence>
</Activity>`;
}

export function aggregateGaps(results: XamlGeneratorResult[]): XamlGap[] {
  const all: XamlGap[] = [];
  for (const r of results) {
    all.push(...r.gaps);
  }
  return all;
}

export function aggregatePackages(results: XamlGeneratorResult[]): string[] {
  const pkgs = new Set<string>();
  for (const r of results) {
    for (const p of r.usedPackages) {
      pkgs.add(p);
    }
  }
  return Array.from(pkgs);
}

export type DhgOptions = {
  projectName: string;
  description?: string;
  gaps: XamlGap[];
  usedPackages: string[];
  workflowNames: string[];
  sddContent?: string;
};

export function generateDeveloperHandoffGuide(opts: DhgOptions): string {
  const {
    projectName,
    description,
    gaps,
    usedPackages,
    workflowNames,
    sddContent,
  } = opts;

  const selectorGaps = gaps.filter((g) => g.category === "selector");
  const credentialGaps = gaps.filter((g) => g.category === "credential");
  const endpointGaps = gaps.filter((g) => g.category === "endpoint");
  const configGaps = gaps.filter((g) => g.category === "config");
  const logicGaps = gaps.filter((g) => g.category === "logic");
  const manualGaps = gaps.filter((g) => g.category === "manual");

  const totalMinutes = gaps.reduce((sum, g) => sum + g.estimatedMinutes, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  let md = "";

  md += `# Developer Handoff Guide\n\n`;
  md += `**Project:** ${projectName}\n`;
  if (description) {
    md += `**Description:** ${description}\n`;
  }
  md += `**Generated:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Estimated Completion Effort:** ${totalHours} hours (${totalMinutes} minutes)\n\n`;
  md += `---\n\n`;

  md += `## 1. Package Overview\n\n`;
  md += `This automation package was generated by CannonBall from an approved Solution Design Document (SDD). `;
  md += `It contains near-production-ready XAML workflows with real UiPath activities, but requires developer review and completion of the items listed below.\n\n`;
  md += `### File Listing\n\n`;
  md += `| File | Purpose |\n`;
  md += `|------|--------|\n`;
  md += `| \`project.json\` | UiPath project manifest with dependencies |\n`;
  md += `| \`Main.xaml\` | Entry point workflow |\n`;
  for (const wfName of workflowNames) {
    if (wfName !== "Main") {
      md += `| \`${wfName}.xaml\` | Workflow: ${wfName} |\n`;
    }
  }
  md += `| \`InitAllSettings.xaml\` | Configuration initialization workflow |\n`;
  md += `| \`Data/Config.xlsx\` | Configuration settings and constants |\n`;
  md += `| \`DeveloperHandoffGuide.md\` | This guide |\n\n`;
  md += `### How to Open in UiPath Studio\n\n`;
  md += `1. Extract the package contents to a local folder\n`;
  md += `2. Open UiPath Studio\n`;
  md += `3. Click **Open Project** and navigate to the extracted folder\n`;
  md += `4. Select \`project.json\`\n`;
  md += `5. Install any missing dependencies from the **Manage Packages** dialog\n`;
  md += `6. Review and complete all TODO items listed in this guide\n\n`;

  md += `### Required Packages\n\n`;
  for (const pkg of usedPackages) {
    md += `- \`${pkg}\`\n`;
  }
  md += `\n`;

  md += `---\n\n`;

  md += `## 2. Selector Completion Checklist\n\n`;
  if (selectorGaps.length === 0) {
    md += `No UI selectors require configuration.\n\n`;
  } else {
    md += `The following activities have placeholder UI selectors that must be replaced with real selectors captured from UiPath Studio.\n\n`;
    md += `| # | Activity | Description | Placeholder Selector | Est. Time |\n`;
    md += `|---|----------|-------------|---------------------|----------|\n`;
    selectorGaps.forEach((g, i) => {
      md += `| ${i + 1} | \`${g.activity}\` | ${g.description} | \`${g.placeholder}\` | ${g.estimatedMinutes} min |\n`;
    });
    md += `\n`;
    md += `**How to capture selectors:**\n`;
    md += `1. Open the workflow in UiPath Studio\n`;
    md += `2. Find each activity marked with a TODO selector comment\n`;
    md += `3. Use the **Indicate on Screen** feature to capture the real selector\n`;
    md += `4. Validate each selector works reliably across multiple runs\n`;
    md += `5. Consider adding wildcards for dynamic attributes (e.g., session IDs)\n\n`;
  }

  md += `---\n\n`;

  md += `## 3. Credential & Asset Setup\n\n`;
  if (credentialGaps.length === 0) {
    md += `No credential or asset configuration required.\n\n`;
  } else {
    md += `The following Orchestrator Assets need to be created with real values.\n\n`;
    md += `| # | Activity | Description | Placeholder | Est. Time |\n`;
    md += `|---|----------|-------------|------------|----------|\n`;
    credentialGaps.forEach((g, i) => {
      md += `| ${i + 1} | \`${g.activity}\` | ${g.description} | ${g.placeholder} | ${g.estimatedMinutes} min |\n`;
    });
    md += `\n`;
    md += `**Setup instructions:**\n`;
    md += `1. Go to UiPath Orchestrator > Tenant > Assets\n`;
    md += `2. Create each credential asset listed above\n`;
    md += `3. For Credential type assets, provide the username and password\n`;
    md += `4. For Text/Integer assets, provide the appropriate value\n`;
    md += `5. Ensure the robot has access to the assets in the correct folder\n\n`;
  }

  md += `---\n\n`;

  md += `## 4. Integration Endpoints\n\n`;
  const integrationGaps = [...endpointGaps, ...configGaps];
  if (integrationGaps.length === 0) {
    md += `No integration endpoints require configuration.\n\n`;
  } else {
    md += `The following API URLs, database connections, and file paths need real values.\n\n`;
    md += `| # | Category | Activity | Description | Placeholder | Est. Time |\n`;
    md += `|---|----------|----------|-------------|------------|----------|\n`;
    integrationGaps.forEach((g, i) => {
      md += `| ${i + 1} | ${g.category} | \`${g.activity}\` | ${g.description} | \`${g.placeholder}\` | ${g.estimatedMinutes} min |\n`;
    });
    md += `\n`;
  }

  md += `---\n\n`;

  md += `## 5. Testing Checklist\n\n`;
  let testingContent = "";
  if (sddContent) {
    const section7Match = sddContent.match(/## 7[\.\s][^\n]+\n([\s\S]*?)(?=## \d+\.|$)/);
    if (section7Match) {
      testingContent = section7Match[1].trim();
    }
  }
  if (testingContent) {
    md += `The following testing approach is derived from the SDD Test Strategy:\n\n`;
    md += testingContent + `\n\n`;
  } else {
    md += `### Recommended Testing Steps\n\n`;
    md += `1. **Unit Testing**: Test each workflow individually with sample data\n`;
    md += `2. **Integration Testing**: Run the full process end-to-end in a Dev environment\n`;
    md += `3. **Exception Testing**: Verify error handling by simulating failures\n`;
    md += `4. **UAT**: Run with real data in a controlled environment with business stakeholders\n`;
    md += `5. **Performance Testing**: Verify processing times meet SLA requirements\n\n`;
  }
  md += `### Pre-Production Checklist\n\n`;
  md += `- [ ] All placeholder selectors replaced with real selectors\n`;
  md += `- [ ] All credentials configured in Orchestrator\n`;
  md += `- [ ] All API endpoints updated to real URLs\n`;
  md += `- [ ] Config.xlsx populated with production values\n`;
  md += `- [ ] Error handling tested for all exception scenarios\n`;
  md += `- [ ] Logging verified at appropriate levels\n`;
  md += `- [ ] Robot permissions verified for all target systems\n`;
  md += `- [ ] Process runs successfully end-to-end in UAT\n\n`;

  md += `---\n\n`;

  md += `## 6. Known Gaps & Manual Steps\n\n`;
  const complexGaps = [...logicGaps, ...manualGaps];
  if (complexGaps.length === 0) {
    md += `No complex logic gaps or manual steps identified.\n\n`;
  } else {
    md += `The following items require manual implementation or complex business logic that could not be fully automated.\n\n`;
    md += `| # | Category | Activity | Description | Est. Time |\n`;
    md += `|---|----------|----------|-------------|----------|\n`;
    complexGaps.forEach((g, i) => {
      md += `| ${i + 1} | ${g.category} | \`${g.activity}\` | ${g.description} | ${g.estimatedMinutes} min |\n`;
    });
    md += `\n`;
  }

  md += `---\n\n`;

  md += `## 7. Estimated Completion Effort\n\n`;
  md += `| Category | Count | Est. Minutes | Est. Hours |\n`;
  md += `|----------|-------|-------------|------------|\n`;

  const categories: { label: string; items: XamlGap[] }[] = [
    { label: "UI Selector Configuration", items: selectorGaps },
    { label: "Credential & Asset Setup", items: credentialGaps },
    { label: "Integration Endpoints", items: endpointGaps },
    { label: "Configuration Values", items: configGaps },
    { label: "Business Logic Implementation", items: logicGaps },
    { label: "Manual Steps", items: manualGaps },
  ];

  for (const cat of categories) {
    if (cat.items.length > 0) {
      const mins = cat.items.reduce((s, g) => s + g.estimatedMinutes, 0);
      md += `| ${cat.label} | ${cat.items.length} | ${mins} | ${(mins / 60).toFixed(1)} |\n`;
    }
  }

  md += `| **Total** | **${gaps.length}** | **${totalMinutes}** | **${totalHours}** |\n\n`;

  md += `> **Note:** These estimates assume a developer familiar with UiPath Studio and the target applications. `;
  md += `Actual effort may vary based on environment complexity, selector stability, and business rule complexity.\n`;

  return md;
}

export function generateDhgSummary(gaps: XamlGap[]): string {
  const selectorCount = gaps.filter((g) => g.category === "selector").length;
  const credentialCount = gaps.filter((g) => g.category === "credential").length;
  const endpointCount = gaps.filter((g) => g.category === "endpoint").length;
  const configCount = gaps.filter((g) => g.category === "config").length;
  const logicCount = gaps.filter((g) => g.category === "logic").length;
  const manualCount = gaps.filter((g) => g.category === "manual").length;
  const totalMinutes = gaps.reduce((sum, g) => sum + g.estimatedMinutes, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  const lines: string[] = [
    `Developer Handoff Summary (${gaps.length} items, ~${totalHours}h effort):`,
  ];

  if (selectorCount > 0) lines.push(`  - ${selectorCount} UI selector(s) to capture`);
  if (credentialCount > 0) lines.push(`  - ${credentialCount} credential/asset(s) to configure`);
  if (endpointCount > 0) lines.push(`  - ${endpointCount} integration endpoint(s) to set`);
  if (configCount > 0) lines.push(`  - ${configCount} configuration value(s) to update`);
  if (logicCount > 0) lines.push(`  - ${logicCount} business logic gap(s) to implement`);
  if (manualCount > 0) lines.push(`  - ${manualCount} manual step(s) to complete`);

  lines.push(`See DeveloperHandoffGuide.md in the package for full details.`);

  return lines.join("\n");
}
