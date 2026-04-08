export function normalizeWorkflowName(raw: string): string {
  let result = raw
    .replace(/\{type:[^}]*,value:([^}]*)\}/g, "$1")
    .replace(/\{"type":"[^"]*","value":"([^"]*)"\}/g, "$1")
    .replace(/\{&quot;type&quot;:&quot;[^&]*&quot;,&quot;value&quot;:&quot;([^&]*)&quot;\}/g, "$1")
    .replace(/\{[^}]*\}/g, "")
    .replace(/[\[\]"]/g, "")
    .replace(/&quot;/g, "")
    .replace(/\s+/g, "_")
    .trim();
  while (result.toLowerCase().endsWith(".xaml")) {
    result = result.slice(0, -5);
  }
  return result.trim();
}

export function canonicalizeWorkflowName(name: string): string {
  return normalizeWorkflowName(name).toLowerCase();
}
