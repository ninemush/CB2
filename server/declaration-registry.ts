import type { VariableDeclaration } from "./workflow-spec-types";

export type DeclarationSource =
  | "explicit-spec"
  | "implicit-output"
  | "discovered-reference"
  | "iterator"
  | "catch-exception"
  | "auto-injected";

export type DeclarationScope =
  | "workflow"
  | "block";

export interface ArgumentDeclaration {
  name: string;
  direction: "InArgument" | "OutArgument" | "InOutArgument";
  type: string;
  source: DeclarationSource;
  required?: boolean;
}

export interface VariableRegistryEntry {
  name: string;
  type: string;
  default?: string;
  source: DeclarationSource;
  scope: DeclarationScope;
  scopeId?: string;
}

export interface DeclarationConflict {
  name: string;
  existingType: string;
  incomingType: string;
  existingSource: DeclarationSource;
  incomingSource: DeclarationSource;
}

export function scopeIdMatchesStackEntryExternal(scopeId: string, stackEntry: string): boolean {
  return scopeIdMatchesStackEntry(scopeId, stackEntry);
}

function scopeIdMatchesStackEntry(scopeId: string, stackEntry: string): boolean {
  if (scopeId === stackEntry) return true;
  const registeredParts = scopeId.split("::");
  const stackParts = stackEntry.split("::");
  if (registeredParts.length < 2 || stackParts.length < 2) return false;
  const registeredType = registeredParts[0].replace(/\[\d+\]$/, "");
  const stackType = stackParts[0].replace(/\[\d+\]$/, "");
  if (registeredType !== stackType) return false;
  const registeredPath = registeredParts.slice(1).join("::");
  const stackPath = stackParts.slice(1).join("::");
  if (registeredPath.endsWith(stackPath) || stackPath.endsWith(registeredPath)) return true;
  const registeredName = registeredPath.split("/").pop() || "";
  const stackName = stackPath.split("/").pop() || "";
  return registeredName !== "" && registeredName === stackName;
}

export class DeclarationRegistry {
  private arguments: Map<string, ArgumentDeclaration> = new Map();
  private variables: Map<string, VariableRegistryEntry> = new Map();
  private scopedVariables: Map<string, VariableRegistryEntry> = new Map();
  private scopeStack: string[] = [];
  private conflicts: DeclarationConflict[] = [];

  registerArgument(arg: ArgumentDeclaration): void {
    const existing = this.arguments.get(arg.name);
    if (existing) {
      if (existing.type !== arg.type || existing.direction !== arg.direction) {
        this.conflicts.push({
          name: arg.name,
          existingType: `${existing.direction}(${existing.type})`,
          incomingType: `${arg.direction}(${arg.type})`,
          existingSource: existing.source,
          incomingSource: arg.source,
        });
        console.warn(
          `[DeclarationRegistry] Argument conflict for "${arg.name}": ` +
          `existing ${existing.direction}(${existing.type}) from ${existing.source}, ` +
          `incoming ${arg.direction}(${arg.type}) from ${arg.source}`
        );
      }
      return;
    }
    this.arguments.set(arg.name, arg);
  }

  registerVariable(entry: VariableRegistryEntry): void {
    const existing = this.variables.get(entry.name);
    if (existing) {
      if (existing.type !== entry.type) {
        this.conflicts.push({
          name: entry.name,
          existingType: existing.type,
          incomingType: entry.type,
          existingSource: existing.source,
          incomingSource: entry.source,
        });
        console.warn(
          `[DeclarationRegistry] Variable conflict for "${entry.name}": ` +
          `existing type "${existing.type}" from ${existing.source}, ` +
          `incoming type "${entry.type}" from ${entry.source}`
        );
      }
      return;
    }
    this.variables.set(entry.name, entry);
  }

  updateVariableType(name: string, newType: string, source: DeclarationSource): void {
    const existing = this.variables.get(name);
    if (existing) {
      console.log(`[DeclarationRegistry] Updating variable "${name}" type from "${existing.type}" to "${newType}" (source: ${source})`);
      existing.type = newType;
      existing.source = source;
    }
  }

  registerScopedVariable(entry: VariableRegistryEntry): void {
    const key = entry.scopeId ? `${entry.scopeId}` : entry.name;
    this.scopedVariables.set(key, entry);
  }

  pushScope(scopeId: string): void {
    this.scopeStack.push(scopeId);
  }

  popScope(): string | undefined {
    return this.scopeStack.pop();
  }

  hasNameInScope(name: string): boolean {
    if (this.arguments.has(name) || this.variables.has(name)) return true;

    if (this.scopeStack.length === 0) return false;

    const entries = Array.from(this.scopedVariables.values());
    for (const entry of entries) {
      if (entry.name !== name) continue;
      if (!entry.scopeId) return true;
      for (let i = this.scopeStack.length - 1; i >= 0; i--) {
        if (scopeIdMatchesStackEntry(entry.scopeId, this.scopeStack[i])) return true;
      }
    }

    return false;
  }

  hasName(name: string): boolean {
    return this.arguments.has(name) || this.variables.has(name) || this.hasScopedName(name);
  }

  hasArgumentName(name: string): boolean {
    return this.arguments.has(name);
  }

  hasVariableName(name: string): boolean {
    return this.variables.has(name);
  }

  private hasScopedName(name: string): boolean {
    if (this.scopedVariables.has(name)) return true;
    const suffix = `::${name}`;
    const keys = Array.from(this.scopedVariables.keys());
    for (const key of keys) {
      if (key.endsWith(suffix)) return true;
    }
    return false;
  }

  getScopedVariable(scopeKey: string): VariableRegistryEntry | undefined {
    return this.scopedVariables.get(scopeKey);
  }

  getScopedVariableByScopeId(scopeId: string): VariableRegistryEntry | undefined {
    const entries = Array.from(this.scopedVariables.values());
    for (const entry of entries) {
      if (entry.scopeId === scopeId) return entry;
    }
    return undefined;
  }

  findAllScopedVariablesByName(name: string): VariableRegistryEntry[] {
    const results: VariableRegistryEntry[] = [];
    const entries = Array.from(this.scopedVariables.values());
    for (const entry of entries) {
      if (entry.name === name) results.push(entry);
    }
    return results;
  }

  findScopedVariableByTypeAndName(scopeType: string, displayName: string): VariableRegistryEntry | undefined {
    const entries = Array.from(this.scopedVariables.values());
    for (const entry of entries) {
      if (!entry.scopeId) continue;
      if (entry.scopeId.startsWith(scopeType) && entry.scopeId.endsWith(`/${displayName}`)) {
        return entry;
      }
    }
    return undefined;
  }

  getArgument(name: string): ArgumentDeclaration | undefined {
    return this.arguments.get(name);
  }

  getVariable(name: string): VariableRegistryEntry | undefined {
    return this.variables.get(name);
  }

  getAllArguments(): ArgumentDeclaration[] {
    return Array.from(this.arguments.values());
  }

  getAllVariables(): VariableDeclaration[] {
    return Array.from(this.variables.values()).map(entry => ({
      name: entry.name,
      type: entry.type,
      ...(entry.default ? { default: entry.default } : {}),
    }));
  }

  getAllArgumentsAsSpec(): Array<{ name: string; direction: string; type: string; required?: boolean }> {
    return Array.from(this.arguments.values()).map(a => ({
      name: a.name,
      direction: a.direction,
      type: a.type,
      ...(a.required !== undefined ? { required: a.required } : {}),
    }));
  }

  getConflicts(): DeclarationConflict[] {
    return [...this.conflicts];
  }

  hasConflicts(): boolean {
    return this.conflicts.length > 0;
  }

  getVariableNames(): Set<string> {
    return new Set(this.variables.keys());
  }

  getArgumentNames(): Set<string> {
    return new Set(this.arguments.keys());
  }
}
