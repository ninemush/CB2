import { AsyncLocalStorage } from "node:async_hooks";
import { storage } from "./storage";

const runIdStore = new AsyncLocalStorage<string>();

export function getCurrentRunId(): string | null {
  return runIdStore.getStore() ?? null;
}

export function runInTraceContext<T>(runId: string, fn: () => T): T {
  return runIdStore.run(runId, fn);
}

export interface LlmCallTraceEntry {
  entryType: "llm_call";
  callId: string;
  stage: string;
  model?: string;
  systemPrompt: string;
  userMessages: string[];
  rawResponse: string;
  parsedResultStatus: "success" | "parse_error" | "error";
  inputTokens: number;
  outputTokens: number;
  durationMs: number;
  error?: string;
  timestamp: string;
}

export interface DeterministicTransformEntry {
  entryType: "deterministic_transform";
  callId: string;
  stage: string;
  file: string;
  description: string;
  before?: string;
  after?: string;
  timestamp: string;
}

export type TraceEntry = LlmCallTraceEntry | DeterministicTransformEntry;

let callCounter = 0;
function nextCallId(): string {
  return `trace-${++callCounter}-${Date.now()}`;
}

const runTraces = new Map<string, TraceEntry[]>();

export function initTrace(runId: string): void {
  runTraces.set(runId, []);
}

export function recordLlmCall(runId: string, entry: Omit<LlmCallTraceEntry, "entryType" | "callId" | "timestamp">): void {
  const trace = runTraces.get(runId);
  if (!trace) return;
  trace.push({
    entryType: "llm_call",
    callId: nextCallId(),
    timestamp: new Date().toISOString(),
    ...entry,
  });
}

export function recordTransform(runId: string, entry: Omit<DeterministicTransformEntry, "entryType" | "callId" | "timestamp">): void {
  const trace = runTraces.get(runId);
  if (!trace) return;
  trace.push({
    entryType: "deterministic_transform",
    callId: nextCallId(),
    timestamp: new Date().toISOString(),
    ...entry,
  });
}

export function getTrace(runId: string): TraceEntry[] {
  return runTraces.get(runId) || [];
}

export async function flushTrace(runId: string): Promise<void> {
  const trace = runTraces.get(runId);
  if (!trace || trace.length === 0) return;
  try {
    await storage.updateGenerationRunLlmTrace(runId, trace);
  } catch (err: any) {
    console.error(`[LLM Trace] Failed to flush trace for run ${runId}: ${err?.message}`);
  }
}

export async function flushAndClear(runId: string): Promise<void> {
  await flushTrace(runId);
  runTraces.delete(runId);
}

export function clearTrace(runId: string): void {
  runTraces.delete(runId);
}

function extractFullMessages(messages: Array<{ role: string; content: string | any[] }>): string[] {
  return messages.map(m => {
    if (typeof m.content === "string") {
      return m.content;
    }
    const textParts = (m.content as any[]).filter((b: any) => b.type === "text").map((b: any) => b.text);
    return textParts.join("\n");
  });
}

export function buildLlmTraceEntry(
  stage: string,
  options: { system: string; messages: Array<{ role: string; content: string | any[] }> },
  responseText: string,
  durationMs: number,
  parsedResultStatus: "success" | "parse_error" | "error",
  error?: string,
  model?: string,
): Omit<LlmCallTraceEntry, "entryType" | "callId" | "timestamp"> {
  const systemLen = options.system?.length || 0;
  const msgLen = options.messages.reduce((sum, m) => {
    if (typeof m.content === "string") return sum + m.content.length;
    return sum + (m.content as any[]).reduce((s: number, b: any) => s + (b.text?.length || 0), 0);
  }, 0);
  const inputTokens = Math.ceil((systemLen + msgLen) / 3.5);
  const outputTokens = Math.ceil(responseText.length / 3.5);

  return {
    stage,
    model,
    systemPrompt: options.system || "",
    userMessages: extractFullMessages(options.messages),
    rawResponse: responseText,
    parsedResultStatus,
    inputTokens,
    outputTokens,
    durationMs,
    error,
  };
}
