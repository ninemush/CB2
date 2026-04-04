import { catalogService, type CatalogProperty, type ActivitySchema } from "./catalog/catalog-service";
import { tryParseJsonValueIntent, buildExpression, type ValueIntent } from "./xaml/expression-builder";

export interface RequiredPropertyBinding {
  file: string;
  workflow: string;
  activityType: string;
  propertyName: string;
  sourceBinding: string;
  originalValue: string;
  resolvedValue: string;
  severity: "info";
  packageModeOutcome: "bound";
  occurrenceIndex: number;
}

export interface UnresolvedRequiredPropertyDefect {
  file: string;
  workflow: string;
  activityType: string;
  propertyName: string;
  failureReason: string;
  originalValue: string;
  severity: "execution_blocking" | "handoff_required";
  packageModeOutcome: "structured_defect" | "degraded";
}

export interface ExpressionLoweringFix {
  file: string;
  workflow: string;
  activityType: string;
  propertyName: string;
  originalValue: string;
  resolvedValue: string;
  severity: "info";
  packageModeOutcome: "lowered";
  occurrenceIndex: number;
}

export interface ExpressionLoweringFailure {
  file: string;
  workflow: string;
  activityType: string;
  propertyName: string;
  originalValue: string;
  failureReason: string;
  severity: "execution_blocking" | "handoff_required";
  packageModeOutcome: "structured_defect";
}

export interface RequiredPropertyEnforcementResult {
  requiredPropertyBindings: RequiredPropertyBinding[];
  unresolvedRequiredPropertyDefects: UnresolvedRequiredPropertyDefect[];
  expressionLoweringFixes: ExpressionLoweringFix[];
  expressionLoweringFailures: ExpressionLoweringFailure[];
  totalEnforced: number;
  totalDefects: number;
  hasBlockingDefects: boolean;
  summary: string;
}

const SENTINEL_PATTERNS = [
  /^PLACEHOLDER$/i,
  /^PLACEHOLDER_\w*/,
  /^TODO$/i,
  /^TODO_\w*/,
  /^STUB$/i,
  /^STUB_\w*/,
  /^HANDOFF$/i,
  /^HANDOFF_\w*/,
  /^HANDOFF_STRING_FORMAT_UNSAFE$/i,
];

const VALUE_INTENT_PATTERN = /\{"type":"[^"]*","value":"[^"]*"\}/;
const VALUE_INTENT_ENTITY_PATTERN = /\{&quot;type&quot;:&quot;[^&]*&quot;,&quot;value&quot;:&quot;[^&]*&quot;\}/;

export function isSentinelValue(value: string): boolean {
  const trimmed = value.trim();
  for (const pattern of SENTINEL_PATTERNS) {
    if (pattern.test(trimmed)) return true;
  }
  if (trimmed === "" || trimmed === '""' || trimmed === "''") return false;
  return false;
}

export function isGenericTypeDefault(value: string, clrType: string): boolean {
  const trimmed = value.trim();
  if (clrType.includes("String") || clrType === "string") {
    return trimmed === "" || trimmed === '""' || trimmed === "''";
  }
  if (clrType.includes("Int") || clrType === "int") {
    return trimmed === "0";
  }
  if (clrType.includes("Boolean") || clrType === "bool") {
    return trimmed === "False";
  }
  if (clrType.includes("Double") || clrType.includes("Decimal")) {
    return trimmed === "0" || trimmed === "0.0";
  }
  if (clrType.includes("Object")) {
    return trimmed === "Nothing" || trimmed === "null";
  }
  return false;
}

export function hasContractValidFallback(prop: CatalogProperty): { valid: boolean; fallbackValue?: string } {
  if (prop.default !== undefined && prop.default !== null && prop.default !== "") {
    if (!isSentinelValue(prop.default)) {
      return { valid: true, fallbackValue: prop.default };
    }
  }
  if (prop.validValues && prop.validValues.length > 0) {
    return { valid: true, fallbackValue: prop.validValues[0] };
  }
  return { valid: false };
}

export function tryLowerStructuredExpression(value: string): { lowered: boolean; result: string; reason?: string } {
  const trimmed = value.trim();

  const jsonResult = tryParseJsonValueIntent(trimmed);
  if (jsonResult) {
    try {
      const built = buildExpression(jsonResult.intent);
      if (built && !isSentinelValue(built)) {
        return { lowered: true, result: built };
      }
      return { lowered: false, result: trimmed, reason: `ValueIntent lowered to sentinel or empty value: "${built}"` };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      return { lowered: false, result: trimmed, reason: `ValueIntent build failed: ${message}` };
    }
  }

  if (VALUE_INTENT_PATTERN.test(trimmed) || VALUE_INTENT_ENTITY_PATTERN.test(trimmed)) {
    return { lowered: false, result: trimmed, reason: "Unresolvable ValueIntent JSON pattern in property value" };
  }

  return { lowered: true, result: trimmed };
}

export function enforceRequiredProperties(
  xamlEntries: { name: string; content: string }[],
  isPackageMode: boolean = true,
): RequiredPropertyEnforcementResult {
  const bindings: RequiredPropertyBinding[] = [];
  const defects: UnresolvedRequiredPropertyDefect[] = [];
  const exprFixes: ExpressionLoweringFix[] = [];
  const exprFailures: ExpressionLoweringFailure[] = [];

  if (!catalogService.isLoaded()) {
    if (isPackageMode) {
      for (const entry of xamlEntries) {
        const fileName = entry.name.split("/").pop() || entry.name;
        const workflowName = fileName.replace(/\.xaml$/i, "");
        conservativeEnforceForFile(entry, fileName, workflowName, defects);
      }
    }
    const totalDefects = defects.length;
    const hasBlockingDefects = defects.some(d => d.severity === "execution_blocking");
    const summaryParts: string[] = ["Catalog not loaded — using conservative enforcement"];
    if (defects.length > 0) summaryParts.push(`${defects.length} sentinel value(s) detected as defects`);
    return {
      requiredPropertyBindings: bindings,
      unresolvedRequiredPropertyDefects: defects,
      expressionLoweringFixes: exprFixes,
      expressionLoweringFailures: exprFailures,
      totalEnforced: 0,
      totalDefects,
      hasBlockingDefects,
      summary: summaryParts.join("; "),
    };
  }

  for (const entry of xamlEntries) {
    const fileName = entry.name.split("/").pop() || entry.name;
    const workflowName = fileName.replace(/\.xaml$/i, "");
    enforceForFile(entry, fileName, workflowName, isPackageMode, bindings, defects, exprFixes, exprFailures);
  }

  const totalDefects = defects.length + exprFailures.length;
  const hasBlockingDefects = defects.some(d => d.severity === "execution_blocking") ||
    exprFailures.some(f => f.severity === "execution_blocking");

  const summaryParts: string[] = [];
  if (bindings.length > 0) summaryParts.push(`${bindings.length} required property binding(s) resolved`);
  if (defects.length > 0) summaryParts.push(`${defects.length} unresolved required property defect(s)`);
  if (exprFixes.length > 0) summaryParts.push(`${exprFixes.length} structured expression(s) lowered`);
  if (exprFailures.length > 0) summaryParts.push(`${exprFailures.length} expression lowering failure(s)`);

  return {
    requiredPropertyBindings: bindings,
    unresolvedRequiredPropertyDefects: defects,
    expressionLoweringFixes: exprFixes,
    expressionLoweringFailures: exprFailures,
    totalEnforced: bindings.length + exprFixes.length,
    totalDefects,
    hasBlockingDefects,
    summary: summaryParts.length > 0 ? summaryParts.join("; ") : "No required property issues found",
  };
}

function enforceForFile(
  entry: { name: string; content: string },
  fileName: string,
  workflowName: string,
  isPackageMode: boolean,
  bindings: RequiredPropertyBinding[],
  defects: UnresolvedRequiredPropertyDefect[],
  exprFixes: ExpressionLoweringFix[],
  exprFailures: ExpressionLoweringFailure[],
): void {
  const activityTagPattern = /<((?:[a-z]+:)?[A-Z][A-Za-z]+)\s([^>]*?)(\/>|>)/g;
  let match;
  const occurrenceCounts = new Map<string, number>();

  while ((match = activityTagPattern.exec(entry.content)) !== null) {
    const activityTag = match[1];
    const attrStr = match[2];
    const tagStart = match.index;

    const strippedTag = activityTag.includes(":") ? activityTag.split(":").pop()! : activityTag;
    const schema = catalogService.getActivitySchema(strippedTag) || catalogService.getActivitySchema(activityTag);
    if (!schema) continue;

    const currentOccurrence = (occurrenceCounts.get(strippedTag) || 0);
    occurrenceCounts.set(strippedTag, currentOccurrence + 1);

    const closeTag = `</${activityTag}>`;
    const endIdx = entry.content.indexOf(closeTag, tagStart);
    const bodySection = endIdx > 0 ? entry.content.substring(tagStart, endIdx) : match[0];

    for (const propDef of schema.activity.properties) {
      if (!propDef.required) continue;

      const attrBoundaryPattern = new RegExp(`(?:^|\\s)${propDef.name}="`);
      const attrPresent = attrBoundaryPattern.test(attrStr);
      const childPresent = bodySection.includes(`${activityTag}.${propDef.name}`);
      if (!attrPresent && !childPresent) {
        handleMissingRequiredProperty(
          fileName, workflowName, strippedTag, propDef, isPackageMode,
          bindings, defects, currentOccurrence,
        );
        continue;
      }

      if (attrPresent) {
        const valMatch = attrStr.match(new RegExp(`(?:^|\\s)${propDef.name}="([^"]*)"`));
        if (valMatch) {
          const rawValue = valMatch[1];
          checkPropertyValue(
            fileName, workflowName, strippedTag, propDef, rawValue, isPackageMode,
            bindings, defects, exprFixes, exprFailures, currentOccurrence,
          );
        }
      } else if (childPresent) {
        const childPattern = new RegExp(`<${activityTag}\\.${propDef.name}[^>]*>([\\s\\S]*?)</${activityTag}\\.${propDef.name}>`);
        const childMatch = bodySection.match(childPattern);
        if (childMatch) {
          const childContent = childMatch[1].trim();
          const innerValMatch = childContent.match(/^(?:<[^>]+>)?([^<]*)/);
          const innerVal = innerValMatch ? innerValMatch[1].trim() : childContent;
          if (innerVal) {
            checkPropertyValue(
              fileName, workflowName, strippedTag, propDef, innerVal, isPackageMode,
              bindings, defects, exprFixes, exprFailures, currentOccurrence,
            );
          }
        }
      }
    }
  }
}

function conservativeEnforceForFile(
  entry: { name: string; content: string },
  fileName: string,
  workflowName: string,
  defects: UnresolvedRequiredPropertyDefect[],
): void {
  const attrPattern = /\s+(\w+)="([^"]*)"/g;
  const tagContext = /<((?:[a-z]+:)?[A-Z][A-Za-z]+)\s/g;
  let currentActivityType = "unknown";

  let tagMatch;
  const tagPositions: { type: string; start: number }[] = [];
  while ((tagMatch = tagContext.exec(entry.content)) !== null) {
    tagPositions.push({ type: tagMatch[1], start: tagMatch.index });
  }

  let attrMatch;
  while ((attrMatch = attrPattern.exec(entry.content)) !== null) {
    const attrPos = attrMatch.index;
    for (const tp of tagPositions) {
      if (tp.start <= attrPos) currentActivityType = tp.type;
      else break;
    }

    const propName = attrMatch[1];
    const rawValue = attrMatch[2];
    if (propName === "xmlns" || propName.startsWith("xmlns:") || propName === "x:Class" || propName === "x:Key") continue;

    const unwrapped = rawValue.replace(/^\[|\]$/g, "").trim();
    if (isSentinelValue(rawValue) || isSentinelValue(unwrapped)) {
      const strippedType = currentActivityType.includes(":") ? currentActivityType.split(":").pop()! : currentActivityType;
      defects.push({
        file: fileName,
        workflow: workflowName,
        activityType: strippedType,
        propertyName: propName,
        failureReason: `Sentinel value "${rawValue}" detected on ${strippedType}.${propName} (catalog unavailable — conservative enforcement)`,
        originalValue: rawValue,
        severity: "execution_blocking",
        packageModeOutcome: "structured_defect",
      });
    }
  }
}

function handleMissingRequiredProperty(
  fileName: string,
  workflowName: string,
  activityType: string,
  prop: CatalogProperty,
  isPackageMode: boolean,
  bindings: RequiredPropertyBinding[],
  defects: UnresolvedRequiredPropertyDefect[],
  occurrenceIndex: number,
): void {
  const fallback = hasContractValidFallback(prop);

  if (fallback.valid && fallback.fallbackValue) {
    bindings.push({
      file: fileName,
      workflow: workflowName,
      activityType,
      propertyName: prop.name,
      sourceBinding: "contract-default",
      originalValue: "",
      resolvedValue: fallback.fallbackValue,
      severity: "info",
      packageModeOutcome: "bound",
      occurrenceIndex,
    });
    return;
  }

  if (isPackageMode) {
    defects.push({
      file: fileName,
      workflow: workflowName,
      activityType,
      propertyName: prop.name,
      failureReason: `Required property "${prop.name}" on ${activityType} has no valid source binding and no contract-valid fallback`,
      originalValue: "",
      severity: "execution_blocking",
      packageModeOutcome: "structured_defect",
    });
    console.warn(`[RequiredPropertyEnforcer] DEFECT: ${activityType}.${prop.name} in ${fileName} — no contract-valid fallback, blocking`);
  }
}

function checkPropertyValue(
  fileName: string,
  workflowName: string,
  activityType: string,
  prop: CatalogProperty,
  rawValue: string,
  isPackageMode: boolean,
  bindings: RequiredPropertyBinding[],
  defects: UnresolvedRequiredPropertyDefect[],
  exprFixes: ExpressionLoweringFix[],
  exprFailures: ExpressionLoweringFailure[],
  occurrenceIndex: number,
): void {
  const unwrappedValue = rawValue.replace(/^\[|\]$/g, "").trim();
  if (isSentinelValue(rawValue) || isSentinelValue(unwrappedValue)) {
    if (isPackageMode) {
      defects.push({
        file: fileName,
        workflow: workflowName,
        activityType,
        propertyName: prop.name,
        failureReason: `Required property "${prop.name}" on ${activityType} contains sentinel value "${rawValue}" — cannot emit in package mode`,
        originalValue: rawValue,
        severity: "execution_blocking",
        packageModeOutcome: "structured_defect",
      });
      console.warn(`[RequiredPropertyEnforcer] SENTINEL DEFECT: ${activityType}.${prop.name} = "${rawValue}" in ${fileName}`);
    }
    return;
  }

  if (isPackageMode && isGenericTypeDefault(rawValue, prop.clrType)) {
    const fallback = hasContractValidFallback(prop);
    if (!fallback.valid || fallback.fallbackValue !== rawValue) {
      defects.push({
        file: fileName,
        workflow: workflowName,
        activityType,
        propertyName: prop.name,
        failureReason: `Required property "${prop.name}" on ${activityType} contains generic type default "${rawValue}" that is not a documented contract fallback`,
        originalValue: rawValue,
        severity: "execution_blocking",
        packageModeOutcome: "structured_defect",
      });
      console.warn(`[RequiredPropertyEnforcer] GENERIC DEFAULT DEFECT: ${activityType}.${prop.name} = "${rawValue}" in ${fileName} — not contract-documented`);
      return;
    }
  }

  const lowerResult = tryLowerStructuredExpression(rawValue);
  if (!lowerResult.lowered) {
    if (isPackageMode) {
      exprFailures.push({
        file: fileName,
        workflow: workflowName,
        activityType,
        propertyName: prop.name,
        originalValue: rawValue,
        failureReason: lowerResult.reason || "Expression lowering failed",
        severity: "execution_blocking",
        packageModeOutcome: "structured_defect",
      });
      console.warn(`[RequiredPropertyEnforcer] EXPRESSION LOWERING FAILURE: ${activityType}.${prop.name} in ${fileName}: ${lowerResult.reason}`);
    }
    return;
  }

  if (lowerResult.result !== rawValue) {
    exprFixes.push({
      file: fileName,
      workflow: workflowName,
      activityType,
      propertyName: prop.name,
      originalValue: rawValue,
      resolvedValue: lowerResult.result,
      severity: "info",
      packageModeOutcome: "lowered",
      occurrenceIndex,
    });
  }

  bindings.push({
    file: fileName,
    workflow: workflowName,
    activityType,
    propertyName: prop.name,
    sourceBinding: "attribute-value",
    originalValue: rawValue,
    resolvedValue: lowerResult.result,
    severity: "info",
    packageModeOutcome: "bound",
    occurrenceIndex,
  });
}

export interface PreComplianceGuardResult {
  passed: boolean;
  violations: PreComplianceGuardViolation[];
  summary: string;
}

export interface PreComplianceGuardViolation {
  file: string;
  propertyName: string;
  activityType: string;
  sentinelValue: string;
  sentinelCategory: "PLACEHOLDER" | "TODO" | "STUB" | "HANDOFF" | "SYNTHETIC_SENTINEL";
}

export function runPreCompliancePackageModeGuard(
  xamlEntries: { name: string; content: string }[],
): PreComplianceGuardResult {
  const violations: PreComplianceGuardViolation[] = [];

  if (!catalogService.isLoaded()) {
    const broadViolations: PreComplianceGuardViolation[] = [];
    for (const entry of xamlEntries) {
      const fileName = entry.name.split("/").pop() || entry.name;
      broadScanForSentinels(entry.content, fileName, broadViolations);
    }
    return {
      passed: broadViolations.length === 0,
      violations: broadViolations,
      summary: broadViolations.length === 0
        ? "Pre-compliance guard passed (catalog unavailable — broad sentinel scan used)"
        : `Pre-compliance guard FAILED: ${broadViolations.length} sentinel value(s) found via broad scan (catalog unavailable)`,
    };
  }

  for (const entry of xamlEntries) {
    const fileName = entry.name.split("/").pop() || entry.name;
    scanForSentinels(entry.content, fileName, violations);
  }

  return {
    passed: violations.length === 0,
    violations,
    summary: violations.length === 0
      ? "Pre-compliance guard passed — no sentinel values in required properties"
      : `Pre-compliance guard FAILED: ${violations.length} sentinel value(s) found in required executable properties`,
  };
}

function categorizeSentinel(value: string): PreComplianceGuardViolation["sentinelCategory"] {
  if (/^PLACEHOLDER/i.test(value) || /\bPLACEHOLDER\b/i.test(value)) return "PLACEHOLDER";
  if (/^TODO/i.test(value) || /\bTODO\b/i.test(value)) return "TODO";
  if (/^STUB/i.test(value) || /\bSTUB\b/i.test(value)) return "STUB";
  if (/^HANDOFF/i.test(value) || /\bHANDOFF\b/i.test(value)) return "HANDOFF";
  return "SYNTHETIC_SENTINEL";
}

function scanForSentinels(
  content: string,
  fileName: string,
  violations: PreComplianceGuardViolation[],
): void {
  const activityTagPattern = /<((?:[a-z]+:)?[A-Z][A-Za-z]+)\s([^>]*?)(\/>|>)/g;
  let match;

  while ((match = activityTagPattern.exec(content)) !== null) {
    const activityTag = match[1];
    const attrStr = match[2];
    const tagStart = match.index;

    const strippedTag = activityTag.includes(":") ? activityTag.split(":").pop()! : activityTag;
    const schema = catalogService.getActivitySchema(strippedTag) || catalogService.getActivitySchema(activityTag);
    if (!schema) continue;

    const closeTag = `</${activityTag}>`;
    const endIdx = content.indexOf(closeTag, tagStart);
    const bodySection = endIdx > 0 ? content.substring(tagStart, endIdx) : match[0];

    for (const propDef of schema.activity.properties) {
      if (!propDef.required) continue;

      const valMatch = attrStr.match(new RegExp(`(?:^|\\s)${propDef.name}="([^"]*)"`));
      if (valMatch) {
        const rawValue = valMatch[1];
        const unwrapped = rawValue.replace(/^\[|\]$/g, "").trim();
        if (isSentinelValue(rawValue) || isSentinelValue(unwrapped)) {
          violations.push({
            file: fileName,
            propertyName: propDef.name,
            activityType: strippedTag,
            sentinelValue: rawValue,
            sentinelCategory: categorizeSentinel(unwrapped),
          });
        }
        continue;
      }

      const childPattern = new RegExp(`<${activityTag}\\.${propDef.name}[^>]*>([\\s\\S]*?)</${activityTag}\\.${propDef.name}>`);
      const childMatch = bodySection.match(childPattern);
      if (childMatch) {
        const childContent = childMatch[1].trim();
        const innerValMatch = childContent.match(/^(?:<[^>]+>)?([^<]*)/);
        const innerVal = innerValMatch ? innerValMatch[1].trim() : childContent;
        if (innerVal) {
          const unwrapped = innerVal.replace(/^\[|\]$/g, "").trim();
          if (isSentinelValue(innerVal) || isSentinelValue(unwrapped)) {
            violations.push({
              file: fileName,
              propertyName: propDef.name,
              activityType: strippedTag,
              sentinelValue: innerVal,
              sentinelCategory: categorizeSentinel(unwrapped),
            });
          }
        }
      }
    }
  }
}

function broadScanForSentinels(
  content: string,
  fileName: string,
  violations: PreComplianceGuardViolation[],
): void {
  const attrPattern = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = attrPattern.exec(content)) !== null) {
    const propName = match[1];
    const rawValue = match[2];
    if (propName === "xmlns" || propName.startsWith("xmlns:") || propName === "x:Class" || propName === "x:Key") continue;
    const unwrapped = rawValue.replace(/^\[|\]$/g, "").trim();
    if (isSentinelValue(rawValue) || isSentinelValue(unwrapped)) {
      violations.push({
        file: fileName,
        propertyName: propName,
        activityType: "unknown",
        sentinelValue: rawValue,
        sentinelCategory: categorizeSentinel(unwrapped),
      });
    }
  }
}

export function applyRequiredPropertyEnforcement(
  xamlEntries: { name: string; content: string }[],
  isPackageMode: boolean = true,
): {
  entries: { name: string; content: string }[];
  enforcementResult: RequiredPropertyEnforcementResult;
  guardResult: PreComplianceGuardResult;
} {
  const enforcementResult = enforceRequiredProperties(xamlEntries, isPackageMode);

  if (isPackageMode) {
    const globalLoweringFailures: ExpressionLoweringFailure[] = [];
    const updatedEntries = xamlEntries.map(entry => {
      let content = entry.content;
      content = stripSentinelValuesFromRequiredProperties(content);
      content = injectContractValidFallbacks(content, enforcementResult.requiredPropertyBindings, entry.name);
      content = lowerStructuredExpressionsPerProperty(content, enforcementResult.expressionLoweringFixes, entry.name);
      content = lowerStructuredExpressionsInContent(content, entry.name, globalLoweringFailures);
      return { ...entry, content };
    });

    if (globalLoweringFailures.length > 0) {
      enforcementResult.expressionLoweringFailures.push(...globalLoweringFailures);
      enforcementResult.totalDefects += globalLoweringFailures.length;
      if (globalLoweringFailures.some(f => f.severity === "execution_blocking")) {
        enforcementResult.hasBlockingDefects = true;
      }
    }

    const guardResult = runPreCompliancePackageModeGuard(updatedEntries);

    return { entries: updatedEntries, enforcementResult, guardResult };
  }

  return {
    entries: xamlEntries,
    enforcementResult,
    guardResult: { passed: true, violations: [], summary: "Not package mode — guard skipped" },
  };
}

function injectContractValidFallbacks(
  content: string,
  bindings: RequiredPropertyBinding[],
  entryName: string,
): string {
  let result = content;
  const fileName = entryName.split("/").pop() || entryName;

  const relevantBindings = bindings.filter(
    b => b.file === fileName && b.sourceBinding === "contract-default" && b.resolvedValue,
  );

  for (const binding of relevantBindings) {
    const tagPattern = new RegExp(`(<(?:[a-z]+:)?${binding.activityType}\\s)([^>]*?)(/?>)`, "g");
    let matchIdx = 0;
    result = result.replace(tagPattern, (match, prefix: string, attrs: string, closing: string) => {
      const currentIdx = matchIdx++;
      if (currentIdx !== binding.occurrenceIndex) return match;
      const attrBoundary = new RegExp(`(?:^|\\s)${binding.propertyName}="`);
      if (attrBoundary.test(attrs)) return match;
      return `${prefix}${attrs} ${binding.propertyName}="${binding.resolvedValue}"${closing}`;
    });
  }

  return result;
}

function lowerStructuredExpressionsPerProperty(
  content: string,
  fixes: ExpressionLoweringFix[],
  entryName: string,
): string {
  let result = content;
  const fileName = entryName.split("/").pop() || entryName;

  const relevantFixes = fixes.filter(f => f.file === fileName);

  for (const fix of relevantFixes) {
    if (fix.originalValue && fix.resolvedValue && fix.originalValue !== fix.resolvedValue) {
      const escaped = fix.originalValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const tagPattern = new RegExp(`(<(?:[a-z]+:)?${fix.activityType}\\s)([^>]*?)(/?>)`, "g");
      let matchIdx = 0;
      result = result.replace(tagPattern, (match, prefix: string, attrs: string, closing: string) => {
        const currentIdx = matchIdx++;
        if (currentIdx !== fix.occurrenceIndex) return match;
        const attrRegex = new RegExp(`((?:^|\\s)${fix.propertyName}=")${escaped}(")`);
        const replaced = attrs.replace(attrRegex, `$1${fix.resolvedValue}$2`);
        return `${prefix}${replaced}${closing}`;
      });
    }
  }

  return result;
}

function stripSentinelValuesFromRequiredProperties(content: string): string {
  let result = content;

  const sentinelAttrPattern = /\s+\w+="(?:PLACEHOLDER(?:_\w*)?|TODO(?:_\w*)?|STUB(?:_\w*)?|HANDOFF(?:_\w*)?|\[(?:PLACEHOLDER(?:_\w*)?|TODO(?:_\w*)?|STUB(?:_\w*)?)\])"/gi;
  result = result.replace(sentinelAttrPattern, '');

  const childSentinelPattern = /(<\w+(?::\w+)?\.\w+[^>]*>)\s*(?:PLACEHOLDER(?:_\w*)?|TODO(?:_\w*)?|STUB(?:_\w*)?|HANDOFF(?:_\w*)?|\[(?:PLACEHOLDER(?:_\w*)?|TODO(?:_\w*)?|STUB(?:_\w*)?)\])\s*(<\/\w+(?::\w+)?\.\w+>)/gi;
  result = result.replace(childSentinelPattern, '$1$2');

  return result;
}

function lowerStructuredExpressionsInContent(
  content: string,
  entryName?: string,
  failures?: ExpressionLoweringFailure[],
): string {
  let result = content;
  const fileName = entryName ? (entryName.split("/").pop() || entryName) : "unknown";
  const workflowName = fileName.replace(/\.xaml$/i, "");

  const viPatterns = [
    /\{"type":"[^"]*","value":"([^"]*)"\}/g,
    /\{&quot;type&quot;:&quot;[^&]*&quot;,&quot;value&quot;:&quot;([^&]*)&quot;\}/g,
  ];

  for (const pattern of viPatterns) {
    const regex = new RegExp(pattern.source, "g");
    result = result.replace(regex, (fullMatch) => {
      const jsonResult = tryParseJsonValueIntent(fullMatch);
      if (jsonResult) {
        try {
          const built = buildExpression(jsonResult.intent);
          if (built && !isSentinelValue(built)) {
            return built;
          }
        } catch {
          // fall through to failure recording
        }
      }
      if (failures) {
        failures.push({
          file: fileName,
          workflow: workflowName,
          activityType: "unknown",
          propertyName: "unknown",
          originalValue: fullMatch,
          failureReason: `Global lowering failed for structured expression in ${fileName}`,
          severity: "execution_blocking",
          packageModeOutcome: "structured_defect",
        });
      }
      return fullMatch;
    });
  }

  return result;
}
