import { createHash } from "crypto";
import AdmZip from "adm-zip";

export const CLASSIFIER_VERSION = "1.0.0";

export const AUTHORITATIVE_STUB_PATTERNS = [
  "STUB_BLOCKING_FALLBACK",
  "STUB: ",
  "STUB_WORKFLOW_GENERATOR_FAILURE",
  "stub — Final validation remediation",
  "stub due to generation/compliance failure",
  "Manual implementation required",
  "ASSEMBLY_FAILED",
  "Generator failed",
  "Generator could not",
];

export type WorkflowStatus = "stub" | "non-stub" | "malformed" | "blocked";

export interface WorkflowStatusClassification {
  file: string;
  contentHash: string;
  status: WorkflowStatus;
  rationale: string;
  classifierVersion: string;
  stageMarker: number;
}

export interface WorkflowStatusClassifierResult {
  classifications: WorkflowStatusClassification[];
  stageMarker: number;
  classifierVersion: string;
}

let _monotonicCounter = 0;
let _latestArchiveFinalizationMarker = 0;

export function resetMonotonicCounter(): void {
  _monotonicCounter = 0;
  _latestArchiveFinalizationMarker = 0;
}

function nextStageMarker(): number {
  return ++_monotonicCounter;
}

export function recordArchiveFinalization(): number {
  _latestArchiveFinalizationMarker = ++_monotonicCounter;
  return _latestArchiveFinalizationMarker;
}

export function getLatestArchiveFinalizationMarker(): number {
  return _latestArchiveFinalizationMarker;
}

export function assertClassificationFreshness(classification: WorkflowStatusClassifierResult): void {
  if (_latestArchiveFinalizationMarker > 0 && classification.stageMarker < _latestArchiveFinalizationMarker) {
    throw new Error(
      `[Workflow Status Classifier] STALE CLASSIFICATION: classifier stageMarker=${classification.stageMarker} ` +
      `predates latest archive finalization marker=${_latestArchiveFinalizationMarker}. ` +
      `Classification must be re-run on finalized archive bytes.`
    );
  }
}

function computeContentHash(content: string): string {
  return createHash("sha256").update(content, "utf-8").digest("hex");
}

function hasStubMarkers(content: string): boolean {
  return AUTHORITATIVE_STUB_PATTERNS.some(pattern => content.includes(pattern));
}

function isMalformed(content: string): { malformed: boolean; reason?: string } {
  if (!content || content.trim().length === 0) {
    return { malformed: true, reason: "Empty XAML content" };
  }
  if (!/<Activity\b[^.]/i.test(content)) {
    return { malformed: true, reason: "Missing root <Activity> element" };
  }
  if (/\[ASSEMBLY_FAILED\]/.test(content)) {
    return { malformed: true, reason: "Contains [ASSEMBLY_FAILED] marker" };
  }
  return { malformed: false };
}

function isBlocked(content: string): { blocked: boolean; reason?: string } {
  const activityMatch = content.match(/<Activity\b[^.][^>]*>([\s\S]*?)<\/Activity>/);
  if (activityMatch && activityMatch[1].trim().length === 0) {
    return { blocked: true, reason: "Empty <Activity> element — loads in Studio but has no implementation child" };
  }
  if (!/<(?:Sequence|Flowchart|StateMachine)\b(?!\.)(?:\s|>|\/)/i.test(content)) {
    return { blocked: true, reason: "No implementation child element (Sequence/Flowchart/StateMachine) — loads in Studio but has no runnable logic" };
  }
  return { blocked: false };
}

function classifySingleEntry(baseName: string, content: string, stageMarker: number): WorkflowStatusClassification {
  const contentHash = computeContentHash(content);

  const malformCheck = isMalformed(content);
  if (malformCheck.malformed) {
    return {
      file: baseName,
      contentHash,
      status: "malformed",
      rationale: malformCheck.reason!,
      classifierVersion: CLASSIFIER_VERSION,
      stageMarker,
    };
  }

  const blockedCheck = isBlocked(content);
  if (blockedCheck.blocked) {
    return {
      file: baseName,
      contentHash,
      status: "blocked",
      rationale: blockedCheck.reason!,
      classifierVersion: CLASSIFIER_VERSION,
      stageMarker,
    };
  }

  if (hasStubMarkers(content)) {
    return {
      file: baseName,
      contentHash,
      status: "stub",
      rationale: "Content matches authoritative stub patterns",
      classifierVersion: CLASSIFIER_VERSION,
      stageMarker,
    };
  }

  return {
    file: baseName,
    contentHash,
    status: "non-stub",
    rationale: "No stub markers or structural defects detected",
    classifierVersion: CLASSIFIER_VERSION,
    stageMarker,
  };
}

export function classifyFromArchiveBuffer(
  archiveBuffer: Buffer,
): WorkflowStatusClassifierResult {
  const stageMarker = nextStageMarker();
  const classifications: WorkflowStatusClassification[] = [];
  const zip = new AdmZip(archiveBuffer);

  for (const zipEntry of zip.getEntries()) {
    if (zipEntry.isDirectory) continue;
    if (!/\.xaml$/i.test(zipEntry.entryName)) continue;
    const baseName = (zipEntry.entryName.split("/").pop() || zipEntry.entryName);
    const content = zipEntry.getData().toString("utf-8");
    classifications.push(classifySingleEntry(baseName, content, stageMarker));
  }

  return { classifications, stageMarker, classifierVersion: CLASSIFIER_VERSION };
}

export function classifyWorkflowStatus(
  archiveXamlEntries: Array<{ name: string; content: string }>,
): WorkflowStatusClassifierResult {
  const stageMarker = nextStageMarker();
  const classifications: WorkflowStatusClassification[] = [];

  for (const entry of archiveXamlEntries) {
    const baseName = (entry.name.split("/").pop() || entry.name);
    classifications.push(classifySingleEntry(baseName, entry.content, stageMarker));
  }

  return { classifications, stageMarker, classifierVersion: CLASSIFIER_VERSION };
}

export interface ArchiveVerificationResult {
  verified: boolean;
  reclassifiedCount: number;
  hashMismatches: Array<{ file: string; preArchiveHash: string; archiveHash: string }>;
  statusChanges: Array<{ file: string; preArchiveStatus: WorkflowStatus; archiveStatus: WorkflowStatus }>;
  finalClassification: WorkflowStatusClassifierResult;
}

export function verifyAndReclassifyFromArchive(
  preArchiveClassification: WorkflowStatusClassifierResult,
  archiveBuffer: Buffer,
  libPath: string,
): ArchiveVerificationResult {
  const finalizationMarker = recordArchiveFinalization();
  const stageMarker = nextStageMarker();

  const zip = new AdmZip(archiveBuffer);
  const zipEntries = zip.getEntries();

  const hashMismatches: ArchiveVerificationResult["hashMismatches"] = [];
  const statusChanges: ArchiveVerificationResult["statusChanges"] = [];
  const reclassifiedEntries: WorkflowStatusClassification[] = [];

  const preClassMap = new Map<string, WorkflowStatusClassification>();
  for (const c of preArchiveClassification.classifications) {
    preClassMap.set(normalizeClassifierFileName(c.file), c);
  }

  for (const zipEntry of zipEntries) {
    if (zipEntry.isDirectory) continue;
    if (!/\.xaml$/i.test(zipEntry.entryName)) continue;

    const baseName = (zipEntry.entryName.split("/").pop() || zipEntry.entryName);
    const normalizedName = normalizeClassifierFileName(baseName);
    const archiveContent = zipEntry.getData().toString("utf-8");
    const archiveHash = computeContentHash(archiveContent);

    const preEntry = preClassMap.get(normalizedName);
    if (preEntry && preEntry.contentHash !== archiveHash) {
      hashMismatches.push({
        file: baseName,
        preArchiveHash: preEntry.contentHash,
        archiveHash,
      });
    }

    const reclassified = classifySingleEntry(baseName, archiveContent, stageMarker);
    reclassifiedEntries.push(reclassified);

    if (preEntry && preEntry.status !== reclassified.status) {
      statusChanges.push({
        file: baseName,
        preArchiveStatus: preEntry.status,
        archiveStatus: reclassified.status,
      });
    }
  }

  const finalClassification: WorkflowStatusClassifierResult = {
    classifications: reclassifiedEntries,
    stageMarker,
    classifierVersion: CLASSIFIER_VERSION,
  };

  return {
    verified: hashMismatches.length === 0 && statusChanges.length === 0,
    reclassifiedCount: reclassifiedEntries.length,
    hashMismatches,
    statusChanges,
    finalClassification,
  };
}

export function normalizeClassifierFileName(name: string): string {
  const baseName = (name.split("/").pop() || name);
  return baseName.replace(/\.xaml$/i, "").toLowerCase();
}

export interface WorkflowStatusParityEntry {
  file: string;
  finalArchiveHash: string;
  dhgInputHash: string;
  archiveStatus: WorkflowStatus;
  dhgStatus: string;
  identicalContent: boolean;
  identicalStatus: boolean;
  divergenceReason: string | null;
  postArchiveHash?: string;
  postArchiveStatus?: WorkflowStatus;
  postArchiveVerified?: boolean;
}

export interface WorkflowStatusParityResult {
  entries: WorkflowStatusParityEntry[];
  allPassed: boolean;
  divergenceCount: number;
}

export function buildWorkflowStatusParity(
  classifierResult: WorkflowStatusClassifierResult,
  dhgTierMap: Map<string, string>,
  dhgInputEntries: Array<{ name: string; content: string }>,
): WorkflowStatusParityResult {
  const entries: WorkflowStatusParityEntry[] = [];

  const dhgInputHashMap = new Map<string, string>();
  for (const entry of dhgInputEntries) {
    const normalized = normalizeClassifierFileName(entry.name);
    dhgInputHashMap.set(normalized, computeContentHash(entry.content));
  }

  for (const classification of classifierResult.classifications) {
    const normalizedName = normalizeClassifierFileName(classification.file);
    const dhgTier = dhgTierMap.get(normalizedName) || "missing";
    const dhgInputHash = dhgInputHashMap.get(normalizedName) || "missing";

    const identicalContent = classification.contentHash === dhgInputHash && dhgInputHash !== "missing";

    const classifierStatus = classification.status;
    let mappedDhgStatus: WorkflowStatus;
    switch (dhgTier.toLowerCase()) {
      case "stub": mappedDhgStatus = "stub"; break;
      case "blocked": mappedDhgStatus = "blocked"; break;
      case "generated":
      case "handoff": mappedDhgStatus = "non-stub"; break;
      default: mappedDhgStatus = "non-stub"; break;
    }

    const identicalStatus = dhgTier !== "missing" && (
      classifierStatus === mappedDhgStatus ||
      (classifierStatus === "malformed" && mappedDhgStatus === "blocked") ||
      (classifierStatus === "blocked" && mappedDhgStatus === "blocked")
    );

    let divergenceReason: string | null = null;
    if (dhgTier === "missing") {
      divergenceReason = `Workflow in classifier but missing from DHG tier table`;
    }
    if (!identicalContent && dhgTier !== "missing") {
      const contentMsg = `Content hash mismatch: archive=${classification.contentHash.substring(0, 12)}, dhgInput=${dhgInputHash.substring(0, 12)}`;
      divergenceReason = divergenceReason ? `${divergenceReason}; ${contentMsg}` : contentMsg;
    }
    if (!identicalStatus && dhgTier !== "missing") {
      const statusMsg = `Status mismatch: archive classifier=${classifierStatus}, DHG tier=${dhgTier} (mapped=${mappedDhgStatus})`;
      divergenceReason = divergenceReason ? `${divergenceReason}; ${statusMsg}` : statusMsg;
    }

    entries.push({
      file: classification.file,
      finalArchiveHash: classification.contentHash,
      dhgInputHash,
      archiveStatus: classifierStatus,
      dhgStatus: dhgTier,
      identicalContent,
      identicalStatus,
      divergenceReason,
    });
  }

  dhgTierMap.forEach((dhgTier, normalizedName) => {
    const alreadyCovered = classifierResult.classifications.some(
      c => normalizeClassifierFileName(c.file) === normalizedName
    );
    if (!alreadyCovered) {
      entries.push({
        file: `${normalizedName}.xaml`,
        finalArchiveHash: "missing",
        dhgInputHash: dhgInputHashMap.get(normalizedName) || "missing",
        archiveStatus: "malformed",
        dhgStatus: dhgTier,
        identicalContent: false,
        identicalStatus: false,
        divergenceReason: `Workflow in DHG but not in archive classifier output`,
      });
    }
  });

  const divergenceCount = entries.filter(e => e.divergenceReason !== null).length;
  return { entries, allPassed: divergenceCount === 0, divergenceCount };
}
