import type { WorkflowSpec, WorkflowNode, ActivityNode, ForEachNode } from "./workflow-spec-types";
import type { ValueIntent } from "./xaml/expression-builder";

const ENUM_LEVEL_CANONICAL: Record<string, string> = {
  "information": "Info",
  "info": "Info",
  "warning": "Warn",
  "warn": "Warn",
  "debug": "Trace",
  "trace": "Trace",
  "error": "Error",
  "fatal": "Fatal",
};

const ENUM_PROPERTIES = new Set(["Level", "Priority", "Severity"]);

const DICT_KEY_ACCESS_RE = /^dict_\w+\s*\(\s*"[^"]*"\s*\)$/;

function stripQuotes(val: string): string {
  let result = val.replace(/&quot;/g, '"');
  if (result.length >= 2 && result.startsWith('"') && result.endsWith('"')) {
    result = result.slice(1, -1);
  }
  return result;
}

function stripXamlExtension(name: string): string {
  return name.replace(/\.xaml$/i, "");
}

function cleanWorkflowName(name: string): string {
  let cleaned = stripQuotes(name);
  cleaned = stripXamlExtension(cleaned);
  cleaned = cleaned.replace(/\s+/g, "_");
  return cleaned;
}

function normalizeEnumValue(propName: string, val: string): string {
  if (!ENUM_PROPERTIES.has(propName)) return val;
  const stripped = stripQuotes(val);
  const canonical = ENUM_LEVEL_CANONICAL[stripped.toLowerCase()];
  return canonical || stripped;
}

function deriveVarNameFromDictAccess(dictExpr: string): string {
  const match = dictExpr.match(/dict_\w+\s*\(\s*"([^"]*)"\s*\)/);
  if (match) {
    const key = match[1].replace(/[^a-zA-Z0-9_]/g, "");
    return key ? `str_${key}` : "str_REVIEW_DictOutput";
  }
  return "str_REVIEW_DictOutput";
}

function normalizePropertyValue(propName: string, val: string): string {
  if (ENUM_PROPERTIES.has(propName)) {
    return normalizeEnumValue(propName, val);
  }

  if (propName === "WorkflowFileName") {
    let cleaned = stripQuotes(val);
    if (!cleaned.endsWith(".xaml")) {
      cleaned = cleaned + ".xaml";
    }
    return cleaned;
  }

  return val;
}

function normalizeValueIntent(propName: string, vi: ValueIntent): ValueIntent {
  if (vi.type === "expression") {
    const expr = vi as { type: "expression"; left: string; operator: string; right: string; confidence?: number };
    let left = expr.left;
    let right = expr.right;

    if (!left || left.trim() === "") {
      left = "True";
    }
    if (!right || right.trim() === "") {
      right = "True";
    }

    left = stripQuotes(left);
    right = stripQuotes(right);

    const result: ValueIntent = { type: "expression" as const, left, right, operator: expr.operator as any };
    if (expr.confidence !== undefined) (result as any).confidence = expr.confidence;
    return result;
  }

  if (vi.type === "literal") {
    const lit = vi as { type: "literal"; value: string; confidence?: number };
    if (ENUM_PROPERTIES.has(propName)) {
      const result: ValueIntent = { type: "literal" as const, value: normalizeEnumValue(propName, lit.value) };
      if (lit.confidence !== undefined) (result as any).confidence = lit.confidence;
      return result;
    }
    return lit;
  }

  if (vi.type === "variable") {
    const varRef = vi as { type: "variable"; name: string; confidence?: number };
    const result: ValueIntent = { type: "variable" as const, name: stripQuotes(varRef.name) };
    if (varRef.confidence !== undefined) (result as any).confidence = varRef.confidence;
    return result;
  }

  return vi;
}

function isValueIntent(val: unknown): val is ValueIntent {
  return typeof val === "object" && val !== null && "type" in val;
}

function normalizeActivityNode(node: ActivityNode): ActivityNode {
  const result = { ...node };

  if (result.outputVar) {
    const cleaned = stripQuotes(result.outputVar);
    if (DICT_KEY_ACCESS_RE.test(cleaned)) {
      result.outputVar = deriveVarNameFromDictAccess(cleaned);
    } else {
      result.outputVar = cleaned;
    }
  }

  if (result.properties) {
    const newProps: Record<string, string | ValueIntent> = {};
    for (const [key, val] of Object.entries(result.properties)) {
      if (isValueIntent(val)) {
        newProps[key] = normalizeValueIntent(key, val);
      } else if (typeof val === "string") {
        if (key === "WorkflowFileName") {
          newProps[key] = normalizePropertyValue(key, val);
        } else if (ENUM_PROPERTIES.has(key)) {
          newProps[key] = normalizePropertyValue(key, val);
        } else {
          const unquoted = stripQuotes(val);
          if (DICT_KEY_ACCESS_RE.test(unquoted)) {
            newProps[key] = deriveVarNameFromDictAccess(unquoted);
          } else {
            newProps[key] = val;
          }
        }
      } else {
        newProps[key] = val;
      }
    }
    result.properties = newProps;
  }

  return result;
}

function normalizeNode(node: WorkflowNode): WorkflowNode {
  switch (node.kind) {
    case "activity":
      return normalizeActivityNode(node as ActivityNode);

    case "sequence": {
      const seq = node as WorkflowSpec["rootSequence"];
      return {
        ...seq,
        children: seq.children.map(normalizeNode),
      };
    }

    case "tryCatch": {
      const tc = node as { kind: "tryCatch"; displayName: string; tryChildren: WorkflowNode[]; catchChildren: WorkflowNode[]; finallyChildren: WorkflowNode[]; catchVariableName?: string };
      return {
        ...tc,
        tryChildren: tc.tryChildren.map(normalizeNode),
        catchChildren: tc.catchChildren.map(normalizeNode),
        finallyChildren: tc.finallyChildren.map(normalizeNode),
      };
    }

    case "if": {
      const ifNode = node as { kind: "if"; displayName: string; condition: string | ValueIntent; thenChildren: WorkflowNode[]; elseChildren: WorkflowNode[] };
      let condition = ifNode.condition;
      if (isValueIntent(condition) && condition.type === "expression") {
        condition = normalizeValueIntent("", condition);
      }
      return {
        ...ifNode,
        condition,
        thenChildren: ifNode.thenChildren.map(normalizeNode),
        elseChildren: ifNode.elseChildren.map(normalizeNode),
      };
    }

    case "while": {
      const whileNode = node as { kind: "while"; displayName: string; condition: string | ValueIntent; bodyChildren: WorkflowNode[] };
      let condition = whileNode.condition;
      if (isValueIntent(condition) && condition.type === "expression") {
        condition = normalizeValueIntent("", condition);
      }
      return {
        ...whileNode,
        condition,
        bodyChildren: whileNode.bodyChildren.map(normalizeNode),
      };
    }

    case "forEach": {
      const feNode = node as ForEachNode;
      let iteratorName = feNode.iteratorName || "item";
      iteratorName = stripQuotes(iteratorName);
      if (!/^[a-zA-Z_]\w*$/.test(iteratorName)) {
        iteratorName = "item";
      }
      return {
        ...feNode,
        iteratorName,
        bodyChildren: feNode.bodyChildren.map(normalizeNode),
      };
    }

    case "retryScope": {
      const rs = node as { kind: "retryScope"; displayName: string; numberOfRetries: number; retryInterval: string; bodyChildren: WorkflowNode[] };
      return {
        ...rs,
        bodyChildren: rs.bodyChildren.map(normalizeNode),
      };
    }

    default:
      return node;
  }
}

export function normalizeWorkflowSpec(spec: WorkflowSpec): WorkflowSpec {
  const normalized = { ...spec };

  normalized.name = cleanWorkflowName(normalized.name);

  if (normalized.rootSequence) {
    const normalizedRoot = normalizeNode(normalized.rootSequence) as WorkflowSpec["rootSequence"];
    normalized.rootSequence = normalizedRoot;
  }

  return normalized;
}
