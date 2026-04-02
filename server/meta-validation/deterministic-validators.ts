import type { ErrorCategory } from "./confidence-scorer";
import type { Correction, CorrectionSet, CorrectionConfidence } from "./meta-validator";
import { catalogService } from "../catalog/catalog-service";
import { inferTypeFromPrefix, hasRecognizedPrefix } from "../shared/type-inference";
import { findUndeclaredVariables } from "../xaml/vbnet-expression-linter";

function extractActivities(xaml: string): Array<{
  tag: string;
  className: string;
  displayName: string;
  attributes: Record<string, string>;
  fullMatch: string;
  startIndex: number;
}> {
  const results: Array<{
    tag: string;
    className: string;
    displayName: string;
    attributes: Record<string, string>;
    fullMatch: string;
    startIndex: number;
  }> = [];

  const pattern = /<((?:[\w]+:)?[\w]+)((?:\s+[\w.:]+="[^"]*")*)\s*\/?>/g;
  let match;
  while ((match = pattern.exec(xaml)) !== null) {
    const tag = match[1];
    const attrString = match[2] || "";
    if (tag.startsWith("/") || tag === "?xml" || tag.startsWith("!")) continue;
    if (tag === "Variable" || tag === "Sequence.Variables" || tag.startsWith("x:") || tag.startsWith("xmlns")) continue;

    const className = tag.includes(":") ? tag.split(":").pop()! : tag;
    const attributes: Record<string, string> = {};
    const attrRegex = /([\w.:]+)="([^"]*)"/g;
    let am;
    while ((am = attrRegex.exec(attrString)) !== null) {
      attributes[am[1]] = am[2];
    }

    results.push({
      tag,
      className,
      displayName: attributes["DisplayName"] || className,
      attributes,
      fullMatch: match[0],
      startIndex: match.index,
    });
  }

  return results;
}

function extractVariableDeclarations(xaml: string): Set<string> {
  const vars = new Set<string>();
  const varPattern = /<Variable\s[^>]*Name="([^"]+)"/g;
  let m;
  while ((m = varPattern.exec(xaml)) !== null) {
    vars.add(m[1]);
  }
  return vars;
}


export function validateEnumViolations(
  xamlContent: string,
  workflowName: string,
): Correction[] {
  const corrections: Correction[] = [];

  if (!catalogService.isLoaded()) return corrections;

  const activities = extractActivities(xamlContent);

  for (const activity of activities) {
    const schema = catalogService.getActivitySchema(activity.className);
    if (!schema) continue;

    for (const [attrName, attrValue] of Object.entries(activity.attributes)) {
      if (attrName === "DisplayName" || attrName.startsWith("xmlns") || attrName.includes(":")) continue;

      const propDef = schema.activity.properties.find(p => p.name === attrName);
      if (!propDef || !propDef.validValues || propDef.validValues.length === 0) continue;

      const trimmedValue = attrValue.trim();
      if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) continue;

      if (!propDef.validValues.includes(trimmedValue)) {
        const bestMatch = findClosestMatch(trimmedValue, propDef.validValues);
        if (bestMatch) {
          corrections.push({
            workflowName,
            activityDisplayName: activity.displayName,
            category: "ENUM_VIOLATIONS",
            confidence: "high",
            description: `Property "${attrName}" has invalid value "${trimmedValue}". Valid values: ${propDef.validValues.join(", ")}`,
            original: `${attrName}="${attrValue}"`,
            corrected: `${attrName}="${bestMatch}"`,
          });
        }
      }
    }
  }

  return corrections;
}

function findClosestMatch(value: string, validValues: string[]): string | null {
  const lower = value.toLowerCase();
  for (const v of validValues) {
    if (v.toLowerCase() === lower) return v;
  }

  for (const v of validValues) {
    if (v.toLowerCase().startsWith(lower) || lower.startsWith(v.toLowerCase())) return v;
  }

  return validValues[0] || null;
}

export function validateLiteralExpressions(
  xamlContent: string,
  workflowName: string,
): Correction[] {
  const corrections: Correction[] = [];

  const expressionAttrs = ["Value", "Condition", "Message", "Text", "Expression", "To"];
  const activities = extractActivities(xamlContent);

  for (const activity of activities) {
    for (const attrName of expressionAttrs) {
      const attrValue = activity.attributes[attrName];
      if (!attrValue) continue;

      if (attrValue.startsWith("[") || attrValue.startsWith("\"") || attrValue.startsWith("'")) continue;
      if (attrValue === "True" || attrValue === "False" || attrValue === "Nothing") continue;
      if (/^\d+$/.test(attrValue)) continue;
      if (attrValue.startsWith("&quot;")) continue;
      if (attrValue.includes(" ") || attrValue.includes("+") || attrValue.includes("&amp;")) continue;

      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(attrValue)) {
        if (catalogService.isLoaded()) {
          const schema = catalogService.getActivitySchema(activity.className);
          if (schema) {
            const propDef = schema.activity.properties.find((p: any) => p.name === attrName);
            if (propDef) {
              const isStringLiteral = propDef.clrType === "System.String" || propDef.clrType === "String";
              const isEnum = propDef.validValues && propDef.validValues.length > 0;
              if (isStringLiteral || isEnum) continue;
            }
          }
        }

        corrections.push({
          workflowName,
          activityDisplayName: activity.displayName,
          category: "LITERAL_EXPRESSIONS",
          confidence: "medium",
          description: `Bare variable reference "${attrValue}" in "${attrName}" attribute should be wrapped in brackets`,
          original: `${attrName}="${attrValue}"`,
          corrected: `${attrName}="[${attrValue}]"`,
        });
      }
    }
  }

  const bareAnglePattern = /<(InArgument|OutArgument)[^>]*>([^<]*<[^/!?])/g;
  let bareMatch;
  while ((bareMatch = bareAnglePattern.exec(xamlContent)) !== null) {
    const content = bareMatch[2];
    if (content.includes("&lt;")) continue;

    const bareIdx = content.lastIndexOf("<");
    if (bareIdx >= 0) {
      const textBefore = content.substring(0, bareIdx);
      corrections.push({
        workflowName,
        activityDisplayName: "",
        category: "LITERAL_EXPRESSIONS",
        confidence: "high",
        description: `Bare '<' character in argument content may cause XML parse errors`,
        original: textBefore + "<",
        corrected: textBefore + "&lt;",
      });
    }
  }

  return corrections;
}

export function validateNestedArguments(
  xamlContent: string,
  workflowName: string,
): Correction[] {
  const corrections: Correction[] = [];

  const argTags = ["InArgument", "OutArgument"];
  for (const tag of argTags) {
    const pattern = new RegExp(
      `<${tag}(\\s[^>]*)?>\\s*<${tag}(\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>\\s*<\\/${tag}>`,
      "g",
    );
    let match;
    while ((match = pattern.exec(xamlContent)) !== null) {
      const outerAttrs = (match[1] || "").trim();
      const innerAttrs = (match[2] || "").trim();
      const content = match[3].trim();
      const attrs = innerAttrs || outerAttrs;

      corrections.push({
        workflowName,
        activityDisplayName: "",
        category: "NESTED_ARGUMENTS",
        confidence: "high",
        description: `Doubled ${tag} nesting detected — should be collapsed to single ${tag}`,
        original: match[0],
        corrected: `<${tag}${attrs ? " " + attrs : ""}>${content}</${tag}>`,
      });
    }
  }

  return corrections;
}

export function validateMissingProperties(
  xamlContent: string,
  workflowName: string,
): Correction[] {
  const corrections: Correction[] = [];

  if (!catalogService.isLoaded()) return corrections;

  const activities = extractActivities(xamlContent);

  for (const activity of activities) {
    const schema = catalogService.getActivitySchema(activity.className);
    if (!schema) continue;

    const requiredProps = schema.activity.properties.filter(p => p.required);
    const presentAttrs = new Set(Object.keys(activity.attributes));

    const childPropPattern = new RegExp(
      `<${activity.className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.(\\w+)`,
      "g",
    );
    let cm;
    while ((cm = childPropPattern.exec(xamlContent)) !== null) {
      presentAttrs.add(cm[1]);
    }

    for (const prop of requiredProps) {
      if (prop.name === "DisplayName") continue;
      if (presentAttrs.has(prop.name)) continue;

      corrections.push({
        workflowName,
        activityDisplayName: activity.displayName,
        category: "MISSING_PROPERTIES",
        confidence: "medium",
        description: `Required property "${prop.name}" (${prop.clrType}) is missing from ${activity.className}`,
        original: "",
        corrected: "",
      });
    }
  }

  return corrections;
}

export function validateUndeclaredVariables(
  xamlContent: string,
  workflowName: string,
): Correction[] {
  const corrections: Correction[] = [];

  const declaredVars = extractVariableDeclarations(xamlContent);

  const argumentPattern = /x:Property Name="([^"]+)"/g;
  let argMatch;
  while ((argMatch = argumentPattern.exec(xamlContent)) !== null) {
    declaredVars.add(argMatch[1]);
  }

  const argValuePattern = /Name="(in_|out_|io_)([^"]+)"/g;
  let argValMatch;
  while ((argValMatch = argValuePattern.exec(xamlContent)) !== null) {
    declaredVars.add(argValMatch[1] + argValMatch[2]);
  }

  declaredVars.add("exception");
  declaredVars.add("item");
  declaredVars.add("row");
  declaredVars.add("index");

  const bracketExprPattern = /\[([^\[\]]+)\]/g;
  let bracketMatch;
  const seen = new Set<string>();
  while ((bracketMatch = bracketExprPattern.exec(xamlContent)) !== null) {
    const expr = bracketMatch[1];
    if (expr.startsWith("&quot;") || expr.startsWith('"')) continue;
    if (expr.includes("xmlns") || expr.includes("clr-namespace")) continue;

    const undeclared = findUndeclaredVariables(expr, declaredVars);
    for (const varName of undeclared) {
      if (seen.has(varName)) continue;
      seen.add(varName);

      const inferredType = inferTypeFromPrefix(varName);
      if (!inferredType) continue;

      corrections.push({
        workflowName,
        activityDisplayName: "",
        category: "UNDECLARED_VARIABLES",
        confidence: "medium",
        description: `Variable "${varName}" is referenced but not declared in any <Variable> element`,
        original: "",
        corrected: `<Variable x:TypeArguments="${inferredType}" Name="${varName}" />`,
      });
    }
  }

  return corrections;
}

export function runDeterministicValidation(
  xamlEntries: { name: string; content: string }[],
  categories: ErrorCategory[],
  onProgress?: (message: string) => void,
): CorrectionSet {
  const startTime = Date.now();
  const allCorrections: Correction[] = [];
  let totalReviewed = 0;

  const categoryValidators: Record<string, (xaml: string, name: string) => Correction[]> = {
    ENUM_VIOLATIONS: validateEnumViolations,
    LITERAL_EXPRESSIONS: validateLiteralExpressions,
    NESTED_ARGUMENTS: validateNestedArguments,
    MISSING_PROPERTIES: validateMissingProperties,
    UNDECLARED_VARIABLES: validateUndeclaredVariables,
  };

  for (const entry of xamlEntries) {
    const workflowName = entry.name.replace(".xaml", "").split("/").pop() || entry.name;
    totalReviewed++;

    if (onProgress) {
      onProgress(`Validating ${workflowName} (${totalReviewed}/${xamlEntries.length})...`);
    }

    for (const cat of categories) {
      if (cat === "FLAT_STRUCTURE") continue;
      const validator = categoryValidators[cat];
      if (!validator) continue;

      try {
        const corrections = validator(entry.content, workflowName);
        allCorrections.push(...corrections);
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.warn(`[Deterministic Validator] ${cat} check failed for ${workflowName}: ${errMsg}`);
      }
    }
  }

  return {
    corrections: allCorrections,
    totalReviewed,
    reviewDurationMs: Date.now() - startTime,
    inputTokens: 0,
    outputTokens: 0,
    modelUsed: "deterministic",
  };
}
