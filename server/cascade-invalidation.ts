import { processMapStorage } from "./process-map-storage";
import { documentStorage } from "./document-storage";
import { storage } from "./storage";
import { evaluateTransition } from "./stage-transition";
import { isDocGenerationActive, cancelDocGeneration, setPendingInvalidation } from "./lib/doc-generation-lock";

export async function cascadeInvalidate(
  ideaId: string,
  viewType: "as-is" | "to-be",
  existingApproval: any,
  nextVersion: number
): Promise<void> {
  if (!existingApproval) return;

  const genState = isDocGenerationActive(ideaId);
  if (genState.active) {
    console.warn(`[CascadeInvalidation] Deferring cascade invalidation for idea=${ideaId} — document generation in progress (types: ${genState.types.join(", ")}). Marking in-flight generations as cancelled and queuing invalidation.`);
    for (const genType of genState.types) {
      cancelDocGeneration(ideaId, genType);
    }
    setPendingInvalidation(ideaId, viewType, nextVersion);
    return;
  }

  if (viewType === "as-is") {
    await processMapStorage.invalidateApprovals(ideaId, "to-be", "As-Is map was re-approved (v" + nextVersion + ")");
    await processMapStorage.invalidateApprovals(ideaId, "sdd", "As-Is map was re-approved (v" + nextVersion + ")");
    await processMapStorage.clearAllForView(ideaId, "to-be");
    await processMapStorage.clearAllForView(ideaId, "sdd");
    try { await documentStorage.deleteApproval(ideaId, "PDD"); } catch {}
    try { await documentStorage.deleteApproval(ideaId, "SDD"); } catch {}
    try { await storage.updateIdea(ideaId, { automationType: null, automationTypeRationale: null }); } catch {}
    console.log(`[CascadeInvalidation] As-Is v${nextVersion} invalidated feasibility, To-Be, PDD, SDD for idea=${ideaId}`);
  }

  if (viewType === "to-be") {
    await processMapStorage.invalidateApprovals(ideaId, "sdd", "To-Be map was re-approved (v" + nextVersion + ")");
    await processMapStorage.clearAllForView(ideaId, "sdd");
    try { await documentStorage.deleteApproval(ideaId, "PDD"); } catch {}
    try { await documentStorage.deleteApproval(ideaId, "SDD"); } catch {}
    console.log(`[CascadeInvalidation] To-Be v${nextVersion} invalidated PDD, SDD for idea=${ideaId}`);
  }
}

export async function cascadeInvalidateAndTransition(
  ideaId: string,
  viewType: "as-is" | "to-be",
  existingApproval: any,
  nextVersion: number,
  userId: string,
  userName: string,
  userRole: string
): Promise<void> {
  await cascadeInvalidate(ideaId, viewType, existingApproval, nextVersion);

  try {
    await evaluateTransition(ideaId, userId, userName, userRole);
  } catch (transErr: any) {
    console.error("[CascadeInvalidation] Transition evaluation failed:", transErr?.message);
  }
}
