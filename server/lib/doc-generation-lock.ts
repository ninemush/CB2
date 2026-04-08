interface GenerationEntry {
  type: string;
  startedAt: number;
  cancelled: boolean;
}

interface PendingInvalidation {
  ideaId: string;
  viewType: "as-is" | "to-be";
  nextVersion: number;
}

const activeDocGenerations = new Map<string, GenerationEntry>();
const pendingInvalidations = new Map<string, PendingInvalidation>();
const completionCallbacks = new Map<string, Array<() => Promise<void>>>();

export function acquireDocGenerationLock(ideaId: string, type: string): { acquired: boolean; reason?: string } {
  const lockKey = `${ideaId}-${type}`;
  const existing = activeDocGenerations.get(lockKey);
  if (existing) {
    const elapsed = Date.now() - existing.startedAt;
    const staleMs = 5 * 60 * 1000;
    if (elapsed < staleMs && !existing.cancelled) {
      return { acquired: false, reason: `${type} generation already in progress (${Math.round(elapsed / 1000)}s ago)` };
    }
    console.warn(`[DocGenLock] Clearing ${existing.cancelled ? "cancelled" : "stale"} ${type} generation lock for idea=${ideaId} (${Math.round(elapsed / 1000)}s old)`);
    activeDocGenerations.delete(lockKey);
  }
  activeDocGenerations.set(lockKey, { type, startedAt: Date.now(), cancelled: false });
  return { acquired: true };
}

export function releaseDocGenerationLock(ideaId: string, type: string): void {
  activeDocGenerations.delete(`${ideaId}-${type}`);
}

export function isGenerationCancelled(ideaId: string, type: string): boolean {
  const entry = activeDocGenerations.get(`${ideaId}-${type}`);
  return entry?.cancelled ?? false;
}

export function cancelDocGeneration(ideaId: string, type: string): void {
  const entry = activeDocGenerations.get(`${ideaId}-${type}`);
  if (entry) {
    entry.cancelled = true;
    console.log(`[DocGenLock] Marked ${type} generation as cancelled for idea=${ideaId}`);
  }
}

export function isDocGenerationActive(ideaId: string): { active: boolean; types: string[] } {
  const types: string[] = [];
  const staleMs = 5 * 60 * 1000;
  const now = Date.now();
  for (const [key, val] of Array.from(activeDocGenerations.entries())) {
    if (key.startsWith(`${ideaId}-`) && (now - val.startedAt) < staleMs && !val.cancelled) {
      types.push(val.type);
    }
  }
  return { active: types.length > 0, types };
}

export function setPendingInvalidation(ideaId: string, viewType: "as-is" | "to-be", nextVersion: number): void {
  pendingInvalidations.set(ideaId, { ideaId, viewType, nextVersion });
  console.log(`[DocGenLock] Queued pending cascade invalidation for idea=${ideaId} viewType=${viewType} v${nextVersion}`);
}

export function consumePendingInvalidation(ideaId: string): PendingInvalidation | null {
  const pending = pendingInvalidations.get(ideaId);
  if (pending) {
    pendingInvalidations.delete(ideaId);
    return pending;
  }
  return null;
}

export function onGenerationComplete(ideaId: string, callback: () => Promise<void>): void {
  const key = ideaId;
  if (!completionCallbacks.has(key)) {
    completionCallbacks.set(key, []);
  }
  completionCallbacks.get(key)!.push(callback);
}

export async function runCompletionCallbacks(ideaId: string): Promise<void> {
  const callbacks = completionCallbacks.get(ideaId);
  if (callbacks && callbacks.length > 0) {
    completionCallbacks.delete(ideaId);
    for (const cb of callbacks) {
      try {
        await cb();
      } catch (err: any) {
        console.error(`[DocGenLock] Completion callback error for idea=${ideaId}:`, err?.message);
      }
    }
  }
}
