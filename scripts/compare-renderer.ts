import dagreImport from "@dagrejs/dagre";
import sharp from "sharp";
import { escapeXml } from "../server/lib/xml-utils";
import fs from "fs";
import path from "path";

const dagre = (dagreImport as any).default || dagreImport;

interface MapNode {
  id: number;
  name: string;
  nodeType: string;
  role?: string | null;
  system?: string | null;
  description?: string | null;
  isPainPoint?: boolean | null;
  positionX?: number | null;
  positionY?: number | null;
  orderIndex?: number;
}

interface MapEdge {
  id: number;
  sourceNodeId: number;
  targetNodeId: number;
  label?: string | null;
}

interface LayoutNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  data: MapNode;
}

interface LayoutEdge {
  source: string;
  target: string;
  label: string;
  points: { x: number; y: number }[];
  isDecisionSource?: boolean;
  sourceHandle?: string;
}

interface RenderConfig {
  label: string;
  taskWidth: number;
  taskHeight: number;
  startEndSize: number;
  decisionSize: number;
  nameFontSize: number;
  badgeFontSize: number;
  edgeLabelFontSize: number;
  decisionFontSize: number;
  nameMaxChars: number;
  nameMaxLines: number;
  nodesep: number;
  ranksep: number;
  density: number;
  edgeCornerRadius: number;
  clearance: number;
  badgeHeight: number;
  nameTruncate: number;
}

const CURRENT: RenderConfig = {
  label: "CURRENT",
  taskWidth: 240,
  taskHeight: 70,
  startEndSize: 44,
  decisionSize: 52,
  nameFontSize: 10,
  badgeFontSize: 7.5,
  edgeLabelFontSize: 8,
  decisionFontSize: 8,
  nameMaxChars: 30,
  nameMaxLines: 1,
  nodesep: 60,
  ranksep: 80,
  density: 72,
  edgeCornerRadius: 8,
  clearance: 40,
  badgeHeight: 14,
  nameTruncate: 30,
};

const IMPROVED: RenderConfig = {
  label: "IMPROVED",
  taskWidth: 320,
  taskHeight: 100,
  startEndSize: 52,
  decisionSize: 90,
  nameFontSize: 14,
  badgeFontSize: 11,
  edgeLabelFontSize: 10,
  decisionFontSize: 11,
  nameMaxChars: 40,
  nameMaxLines: 2,
  nodesep: 80,
  ranksep: 120,
  density: 144,
  edgeCornerRadius: 10,
  clearance: 60,
  badgeHeight: 18,
  nameTruncate: 40,
};

const TEST_NODES: MapNode[] = [
  { id: 7127, name: "8AM Daily Trigger", nodeType: "start", role: "System", system: "Orchestrator Triggers", orderIndex: 0 },
  { id: 7128, name: "Get Today's Birthday Events (Birthdays calendar)", nodeType: "task", role: "System", system: "Google Calendar (UiPath activities)", orderIndex: 1 },
  { id: 7129, name: "Any Birthdays Today?", nodeType: "decision", role: "System", system: "Orchestrator", orderIndex: 2 },
  { id: 7130, name: "End (No Birthdays Today)", nodeType: "end", role: "System", system: "Orchestrator", orderIndex: 3 },
  { id: 7131, name: "For Each Birthday Person", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 4 },
  { id: 7132, name: "Lookup Contact by Full Name", nodeType: "task", role: "System", system: "Google Contacts (UiPath activities)", orderIndex: 5 },
  { id: 7133, name: "Email Available (Personal/Home)?", nodeType: "decision", role: "System", system: "Orchestrator", orderIndex: 6 },
  { id: 7134, name: "Select Preferred Email (Personal over Home)", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 7 },
  { id: 7135, name: "Generate Birthday Message in My Voice", nodeType: "agent-task", role: "System", system: "UiPath GenAI Activities", orderIndex: 8 },
  { id: 7136, name: "Message Policy Check (safe/appropriate/no sensitive content)", nodeType: "agent-decision", role: "System", system: "UiPath GenAI Activities", orderIndex: 9 },
  { id: 7137, name: "Create Human Review Task (Message Needs Review)", nodeType: "task", role: "System", system: "Action Center", orderIndex: 10 },
  { id: 7138, name: "Approved to Send?", nodeType: "decision", role: "You", system: "Action Center", orderIndex: 11 },
  { id: 7139, name: "Send Birthday Email", nodeType: "task", role: "System", system: "Gmail (Integration Service)", orderIndex: 12 },
  { id: 7140, name: "Skip Send (Rejected)", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 13 },
  { id: 7141, name: "Mark Person Processed", nodeType: "task", role: "System", system: "Data Service", orderIndex: 14 },
  { id: 7142, name: "Mark Person Skipped", nodeType: "task", role: "System", system: "Data Service", orderIndex: 15 },
  { id: 7143, name: "Next Birthday Person?", nodeType: "decision", role: "System", system: "Orchestrator", orderIndex: 16 },
  { id: 7144, name: "Loop to Next Person", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 17 },
  { id: 7145, name: "End (Run Complete)", nodeType: "end", role: "System", system: "Orchestrator", orderIndex: 18 },
  { id: 7146, name: "No Action (No Email Found)", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 19 },
  { id: 7147, name: "Mark Missing Email", nodeType: "task", role: "System", system: "Data Service", orderIndex: 20 },
  { id: 7148, name: "Return to Loop Control", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 21 },
  { id: 7149, name: "Continue Loop Check", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 22 },
  { id: 7150, name: "Next Birthday Person? (after missing email)", nodeType: "decision", role: "System", system: "Orchestrator", orderIndex: 23 },
  { id: 7151, name: "Loop to Next (from missing email path)", nodeType: "task", role: "System", system: "Orchestrator", orderIndex: 24 },
];

const TEST_EDGES: MapEdge[] = [
  { id: 7721, sourceNodeId: 7127, targetNodeId: 7128, label: "" },
  { id: 7722, sourceNodeId: 7128, targetNodeId: 7129, label: "" },
  { id: 7723, sourceNodeId: 7129, targetNodeId: 7130, label: "No" },
  { id: 7724, sourceNodeId: 7129, targetNodeId: 7131, label: "Yes" },
  { id: 7725, sourceNodeId: 7131, targetNodeId: 7132, label: "" },
  { id: 7726, sourceNodeId: 7132, targetNodeId: 7133, label: "" },
  { id: 7727, sourceNodeId: 7133, targetNodeId: 7134, label: "Yes" },
  { id: 7728, sourceNodeId: 7134, targetNodeId: 7135, label: "" },
  { id: 7729, sourceNodeId: 7135, targetNodeId: 7136, label: "" },
  { id: 7730, sourceNodeId: 7136, targetNodeId: 7137, label: "Needs review" },
  { id: 7731, sourceNodeId: 7137, targetNodeId: 7138, label: "" },
  { id: 7732, sourceNodeId: 7138, targetNodeId: 7139, label: "Approved" },
  { id: 7733, sourceNodeId: 7138, targetNodeId: 7140, label: "Rejected" },
  { id: 7734, sourceNodeId: 7139, targetNodeId: 7141, label: "" },
  { id: 7735, sourceNodeId: 7140, targetNodeId: 7142, label: "" },
  { id: 7736, sourceNodeId: 7141, targetNodeId: 7143, label: "" },
  { id: 7737, sourceNodeId: 7143, targetNodeId: 7144, label: "Yes" },
  { id: 7738, sourceNodeId: 7143, targetNodeId: 7145, label: "No" },
  { id: 7739, sourceNodeId: 7133, targetNodeId: 7146, label: "No" },
  { id: 7740, sourceNodeId: 7146, targetNodeId: 7147, label: "" },
  { id: 7741, sourceNodeId: 7147, targetNodeId: 7148, label: "" },
  { id: 7742, sourceNodeId: 7148, targetNodeId: 7149, label: "" },
  { id: 7743, sourceNodeId: 7149, targetNodeId: 7150, label: "" },
  { id: 7744, sourceNodeId: 7150, targetNodeId: 7151, label: "Yes" },
  { id: 7745, sourceNodeId: 7150, targetNodeId: 7145, label: "No" },
  { id: 7746, sourceNodeId: 7142, targetNodeId: 7130, label: "" },
  { id: 7747, sourceNodeId: 7144, targetNodeId: 7130, label: "" },
  { id: 7748, sourceNodeId: 7151, targetNodeId: 7130, label: "" },
];

function getNodeDimensions(nodeType: string, cfg: RenderConfig): { width: number; height: number } {
  const t = (nodeType || "task").toLowerCase();
  if (t === "start" || t === "end") return { width: cfg.startEndSize, height: cfg.startEndSize };
  if (t === "decision" || t === "agent-decision") return { width: cfg.decisionSize, height: cfg.decisionSize };
  return { width: cfg.taskWidth, height: cfg.taskHeight };
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + "\u2026";
}

function wrapText(str: string, maxCharsPerLine: number, maxLines: number): string[] {
  if (str.length <= maxCharsPerLine) return [str];
  const words = str.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (current.length === 0) {
      current = word;
    } else if ((current + " " + word).length <= maxCharsPerLine) {
      current += " " + word;
    } else {
      lines.push(current);
      current = word;
      if (lines.length >= maxLines) break;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (lines.length === maxLines && current && !lines.includes(current)) {
    lines[maxLines - 1] = truncate(lines[maxLines - 1], maxCharsPerLine);
  }
  return lines;
}

function getLabelSemanticSide(label: string | null | undefined): "left" | "right" | null {
  const lbl = (label || "").trim();
  if (/^(no|rejected|fail|invalid|incomplete|false|exceed|above|poor|flag)/i.test(lbl)) return "right";
  if (/^(yes|approved|pass|valid|complete|true|within|below|stp|auto)/i.test(lbl)) return "left";
  return null;
}

function computeLayout(nodes: MapNode[], edges: MapEdge[], cfg: RenderConfig): { layoutNodes: LayoutNode[]; layoutEdges: LayoutEdge[] } {
  const g = new dagre.graphlib.Graph({ multigraph: true });
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: "TB",
    nodesep: cfg.nodesep,
    ranksep: cfg.ranksep,
    edgesep: 40,
    marginx: 40,
    marginy: 40,
  });

  for (const node of nodes) {
    const dims = getNodeDimensions(node.nodeType, cfg);
    g.setNode(String(node.id), { width: dims.width, height: dims.height });
  }

  for (const edge of edges) {
    g.setEdge(String(edge.sourceNodeId), String(edge.targetNodeId), {}, String(edge.id));
  }

  dagre.layout(g);

  const layoutNodes: LayoutNode[] = nodes.map((node) => {
    const pos = g.node(String(node.id));
    const dims = getNodeDimensions(node.nodeType, cfg);
    return {
      id: String(node.id),
      x: pos.x - dims.width / 2,
      y: pos.y - dims.height / 2,
      width: dims.width,
      height: dims.height,
      data: node,
    };
  });

  const nodeTypeMap: Record<string, string> = {};
  nodes.forEach(n => { nodeTypeMap[String(n.id)] = n.nodeType || "task"; });

  const nodeById: Record<string, LayoutNode> = {};
  layoutNodes.forEach(n => { nodeById[n.id] = n; });

  const edgesBySource: Record<string, MapEdge[]> = {};
  for (const edge of edges) {
    const key = String(edge.sourceNodeId);
    if (!edgesBySource[key]) edgesBySource[key] = [];
    edgesBySource[key].push(edge);
  }

  const layoutEdges: LayoutEdge[] = edges.map((edge) => {
    const srcType = nodeTypeMap[String(edge.sourceNodeId)] || "task";
    const isDecision = srcType === "decision" || srcType === "agent-decision";
    const siblings = edgesBySource[String(edge.sourceNodeId)] || [edge];

    const lbl = (edge.label || "").trim();
    let sourceHandle = "bottom";
    if (isDecision) {
      const isNoEdge = /^(no|rejected|fail|invalid|incomplete|false|exceed|above|poor|flag|needs)/i.test(lbl);
      const isYesEdge = /^(yes|approved|pass|valid|complete|true|within|below|stp|auto)/i.test(lbl);
      if (isNoEdge) sourceHandle = "right";
      else if (isYesEdge) sourceHandle = "left";
      else if (siblings.length > 1) {
        const idx = siblings.indexOf(edge);
        sourceHandle = idx === 0 ? "left" : "right";
      } else sourceHandle = "left";
    }

    const srcNode = nodeById[String(edge.sourceNodeId)];
    const tgtNode = nodeById[String(edge.targetNodeId)];
    const points = (srcNode && tgtNode) ? computeEdgePoints(srcNode, tgtNode, sourceHandle, cfg) : [];

    return {
      source: String(edge.sourceNodeId),
      target: String(edge.targetNodeId),
      label: edge.label || "",
      points,
      isDecisionSource: isDecision,
      sourceHandle,
    };
  });

  fixDecisionHandlesPostLayout(layoutNodes, layoutEdges, nodeTypeMap, cfg);

  for (const le of layoutEdges) {
    if (le.isDecisionSource) {
      const srcNode = nodeById[le.source];
      const tgtNode = nodeById[le.target];
      if (srcNode && tgtNode) {
        le.points = computeEdgePoints(srcNode, tgtNode, le.sourceHandle, cfg);
      }
    }
  }

  return { layoutNodes, layoutEdges };
}

function fixDecisionHandlesPostLayout(
  layoutNodes: LayoutNode[],
  layoutEdges: LayoutEdge[],
  nodeTypeMap: Record<string, string>,
  cfg: RenderConfig
): void {
  const nodePositions: Record<string, { x: number; y: number; width: number; height: number }> = {};
  layoutNodes.forEach((n) => {
    nodePositions[n.id] = { x: n.x + n.width / 2, y: n.y + n.height / 2, width: n.width, height: n.height };
  });

  const edgesBySource: Record<string, LayoutEdge[]> = {};
  layoutEdges.forEach((e) => {
    if (!edgesBySource[e.source]) edgesBySource[e.source] = [];
    edgesBySource[e.source].push(e);
  });

  for (const sourceId of Object.keys(edgesBySource)) {
    const srcType = nodeTypeMap[sourceId] || "task";
    const isDecision = srcType === "decision" || srcType === "agent-decision";
    if (!isDecision) continue;

    const siblings = edgesBySource[sourceId];
    if (siblings.length !== 2) continue;

    const srcPos = nodePositions[sourceId];
    if (!srcPos) continue;

    const tgt0 = nodePositions[siblings[0].target];
    const tgt1 = nodePositions[siblings[1].target];
    if (!tgt0 || !tgt1) continue;

    const halfW = cfg.decisionSize / 2;
    const dx0 = Math.abs(tgt0.x - srcPos.x);
    const dx1 = Math.abs(tgt1.x - srcPos.x);
    const dy0 = tgt0.y - srcPos.y;
    const dy1 = tgt1.y - srcPos.y;
    const directlyBelow0 = dx0 < halfW && dy0 > 0;
    const directlyBelow1 = dx1 < halfW && dy1 > 0;

    let handle0: string;
    let handle1: string;

    if (directlyBelow0 && !directlyBelow1) {
      handle0 = "bottom";
      handle1 = tgt1.x > srcPos.x ? "right" : "left";
    } else if (directlyBelow1 && !directlyBelow0) {
      handle1 = "bottom";
      handle0 = tgt0.x > srcPos.x ? "right" : "left";
    } else {
      if (tgt0.x < tgt1.x) {
        handle0 = "left";
        handle1 = "right";
      } else if (tgt0.x > tgt1.x) {
        handle0 = "right";
        handle1 = "left";
      } else {
        const sem0 = getLabelSemanticSide(siblings[0].label);
        const sem1 = getLabelSemanticSide(siblings[1].label);
        handle0 = sem0 || "left";
        handle1 = sem1 || "right";
        if (handle0 === handle1) {
          handle0 = "left";
          handle1 = "right";
        }
      }

      const wouldCross =
        (handle0 === "left" && handle1 === "right" && (tgt0.x > tgt1.x)) ||
        (handle0 === "right" && handle1 === "left" && (tgt0.x < tgt1.x));
      if (wouldCross) {
        const tmp = handle0;
        handle0 = handle1;
        handle1 = tmp;
      }
    }

    siblings[0].sourceHandle = handle0;
    siblings[1].sourceHandle = handle1;
  }
}

function computeEdgePoints(srcNode: LayoutNode, tgtNode: LayoutNode, sourceHandle: string | undefined, cfg: RenderConfig): { x: number; y: number }[] {
  const cx = srcNode.x + srcNode.width / 2;
  const cy = srcNode.y + srcNode.height / 2;
  const tx = tgtNode.x + tgtNode.width / 2;
  const ty = tgtNode.y;
  const diamondR = cfg.decisionSize / 2;
  const clearance = cfg.clearance;

  if (sourceHandle === "left") {
    const sx = cx - diamondR;
    const sy = cy;
    const exitX = Math.min(sx - clearance, tx);
    if (Math.abs(exitX - tx) < 10) {
      return [{ x: sx, y: sy }, { x: exitX, y: sy }, { x: tx, y: ty }];
    }
    return [{ x: sx, y: sy }, { x: exitX, y: sy }, { x: exitX, y: ty - 10 }, { x: tx, y: ty }];
  }

  if (sourceHandle === "right") {
    const sx = cx + diamondR;
    const sy = cy;
    const exitX = Math.max(sx + clearance, tx);
    if (Math.abs(exitX - tx) < 10) {
      return [{ x: sx, y: sy }, { x: exitX, y: sy }, { x: tx, y: ty }];
    }
    return [{ x: sx, y: sy }, { x: exitX, y: sy }, { x: exitX, y: ty - 10 }, { x: tx, y: ty }];
  }

  if (sourceHandle === "bottom-left" || sourceHandle === "bottom-right") {
    const offset = sourceHandle === "bottom-left" ? -diamondR * 0.5 : diamondR * 0.5;
    const sx = cx + offset;
    const sy = cy + diamondR;
    if (Math.abs(sx - tx) < 10) {
      return [{ x: sx, y: sy }, { x: tx, y: ty }];
    }
    const midY = sy + (ty - sy) * 0.3;
    return [{ x: sx, y: sy }, { x: sx, y: midY }, { x: tx, y: midY }, { x: tx, y: ty }];
  }

  const sx = srcNode.x + srcNode.width / 2;
  const sy = srcNode.y + srcNode.height;
  if (Math.abs(sx - tx) < 10) {
    return [{ x: sx, y: sy }, { x: tx, y: ty }];
  }
  const midY = (sy + ty) / 2;
  return [{ x: sx, y: sy }, { x: sx, y: midY }, { x: tx, y: midY }, { x: tx, y: ty }];
}

function renderEdgePath(points: { x: number; y: number }[], r: number): string {
  if (points.length < 2) return "";
  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];
    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;
    const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    if (len1 < 1 || len2 < 1) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }
    const clampR = Math.min(r, len1 / 2, len2 / 2);
    const ax = curr.x - (dx1 / len1) * clampR;
    const ay = curr.y - (dy1 / len1) * clampR;
    const bx = curr.x + (dx2 / len2) * clampR;
    const by = curr.y + (dy2 / len2) * clampR;
    d += ` L ${ax} ${ay} Q ${curr.x} ${curr.y} ${bx} ${by}`;
  }
  const last = points[points.length - 1];
  d += ` L ${last.x} ${last.y}`;
  return d;
}

function getEdgeColor(label: string): string {
  const l = label.toLowerCase();
  if (l === "yes" || l === "true" || l === "approved") return "#22c55e";
  if (l === "no" || l === "false" || l === "rejected") return "#ef4444";
  if (l === "needs review") return "#f59e0b";
  return "#2dd4bf";
}

function renderNodeSvg(node: LayoutNode, cfg: RenderConfig): string {
  const { x, y, width, height, data } = node;
  const nType = (data.nodeType || "task").toLowerCase();

  if (nType === "start") {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const r = width * 0.41;
    const pr = r * 0.35;
    return `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#059669" stroke="#34d399" stroke-width="2"/>
      <polygon points="${cx - pr * 0.7},${cy - pr} ${cx - pr * 0.7},${cy + pr} ${cx + pr},${cy}" fill="white"/>
    `;
  }

  if (nType === "end") {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const r = width * 0.41;
    const sq = r * 0.45;
    return `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#dc2626" stroke="#f87171" stroke-width="2"/>
      <rect x="${cx - sq}" y="${cy - sq}" width="${sq * 2}" height="${sq * 2}" rx="2" fill="white"/>
    `;
  }

  if (nType === "decision" || nType === "agent-decision") {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const s = cfg.decisionSize / 2;
    const nameLines = wrapText(data.name || "?", cfg.nameMaxChars - 10, cfg.nameMaxLines);
    const lineHeight = cfg.decisionFontSize + 3;
    const totalTextH = nameLines.length * lineHeight;
    const startY = -totalTextH / 2 + cfg.decisionFontSize * 0.4;
    const fillColor = nType === "agent-decision" ? "#7c3aed" : "#d97706";
    const strokeColor = nType === "agent-decision" ? "#a78bfa" : "#fbbf24";
    let textSvg = "";
    nameLines.forEach((line, i) => {
      textSvg += `<text x="0" y="${startY + i * lineHeight}" text-anchor="middle" fill="white" font-size="${cfg.decisionFontSize}" font-weight="600" font-family="system-ui, sans-serif">${escapeXml(line)}</text>`;
    });
    return `
      <g transform="translate(${cx}, ${cy})">
        <rect x="${-s}" y="${-s}" width="${s * 2}" height="${s * 2}" rx="4" transform="rotate(45)" fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.5"/>
        ${textSvg}
      </g>
    `;
  }

  const borderColor = "#2dd4bf";
  const painPointBorder = data.isPainPoint ? "#ef4444" : borderColor;
  const nameLines = wrapText(data.name || "Unnamed", cfg.nameMaxChars, cfg.nameMaxLines);
  const roleText = data.role ? truncate(data.role, cfg.nameMaxChars - 8) : "";
  const systemText = data.system ? truncate(data.system, cfg.nameMaxChars - 8) : "";

  const lineHeight = cfg.nameFontSize + 4;
  const nameStartY = y + 8 + cfg.nameFontSize;
  let nameTextSvg = "";
  nameLines.forEach((line, i) => {
    nameTextSvg += `<text x="${x + width / 2}" y="${nameStartY + i * lineHeight}" text-anchor="middle" fill="#e4e4e7" font-size="${cfg.nameFontSize}" font-weight="600" font-family="system-ui, sans-serif">${escapeXml(line)}</text>`;
  });

  const maxBadgeArea = width - 16;
  let badgeSvg = "";
  let badgeX = x + 8;
  const badgeY = y + height - cfg.badgeHeight - 6;

  if (roleText) {
    let rw = Math.min(roleText.length * (cfg.badgeFontSize * 0.7) + 14, maxBadgeArea);
    badgeSvg += `
      <rect x="${badgeX}" y="${badgeY}" width="${rw}" height="${cfg.badgeHeight}" rx="3" fill="#374151"/>
      <text x="${badgeX + rw / 2}" y="${badgeY + cfg.badgeHeight * 0.72}" text-anchor="middle" fill="#9ca3af" font-size="${cfg.badgeFontSize}" font-family="system-ui, sans-serif">${escapeXml(roleText)}</text>
    `;
    badgeX += rw + 4;
  }
  if (systemText) {
    const remainingSpace = (x + width - 8) - badgeX;
    if (remainingSpace > 30) {
      let sw = Math.min(systemText.length * (cfg.badgeFontSize * 0.7) + 14, remainingSpace);
      badgeSvg += `
        <rect x="${badgeX}" y="${badgeY}" width="${sw}" height="${cfg.badgeHeight}" rx="3" fill="#1e293b"/>
        <text x="${badgeX + sw / 2}" y="${badgeY + cfg.badgeHeight * 0.72}" text-anchor="middle" fill="#64748b" font-size="${cfg.badgeFontSize}" font-family="system-ui, sans-serif">${escapeXml(truncate(systemText, Math.floor(remainingSpace / (cfg.badgeFontSize * 0.7))))}</text>
      `;
    }
  }

  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="#1e1e2e" stroke="${painPointBorder}" stroke-width="1.5"/>
    ${nameTextSvg}
    ${badgeSvg}
  `;
}

async function renderWithConfig(nodes: MapNode[], edges: MapEdge[], cfg: RenderConfig): Promise<{ svgContent: string; pngBuffer: Buffer; width: number; height: number }> {
  const { layoutNodes, layoutEdges } = computeLayout(nodes, edges, cfg);

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const n of layoutNodes) {
    const nType = (n.data.nodeType || "task").toLowerCase();
    const extra = (nType === "decision" || nType === "agent-decision") ? cfg.decisionSize * 0.7 : 0;
    minX = Math.min(minX, n.x - extra);
    minY = Math.min(minY, n.y - extra);
    maxX = Math.max(maxX, n.x + n.width + extra);
    maxY = Math.max(maxY, n.y + n.height + extra);
  }
  for (const e of layoutEdges) {
    for (const p of e.points) {
      minX = Math.min(minX, p.x - 20);
      minY = Math.min(minY, p.y - 20);
      maxX = Math.max(maxX, p.x + 20);
      maxY = Math.max(maxY, p.y + 20);
    }
  }

  const padding = 60;
  const svgWidth = maxX - minX + padding * 2;
  const svgHeight = maxY - minY + padding * 2;
  const offsetX = -minX + padding;
  const offsetY = -minY + padding;

  const adjustedNodes = layoutNodes.map((n) => ({
    ...n,
    x: n.x + offsetX,
    y: n.y + offsetY,
  }));

  const adjustedEdges = layoutEdges.map((e) => ({
    ...e,
    points: e.points.map((p) => ({ x: p.x + offsetX, y: p.y + offsetY })),
  }));

  let edgesSvg = "";
  for (const edge of adjustedEdges) {
    const color = getEdgeColor(edge.label);
    const pathD = renderEdgePath(edge.points, cfg.edgeCornerRadius);
    if (!pathD) continue;

    edgesSvg += `<path d="${pathD}" fill="none" stroke="${color}" stroke-width="${cfg.label === "IMPROVED" ? 2 : 1.5}" marker-end="url(#arrow-${color.replace("#", "")})" stroke-linejoin="round"/>`;

    if (edge.label) {
      let lx: number, ly: number;
      if (edge.isDecisionSource && edge.points.length >= 2) {
        const srcPt = edge.points[0];
        const isBottomHandle = edge.sourceHandle === "bottom-left" || edge.sourceHandle === "bottom-right";
        const xDir = edge.sourceHandle === "left" ? -1 : edge.sourceHandle === "right" ? 1 : edge.sourceHandle === "bottom-left" ? -0.5 : 0.5;
        lx = srcPt.x + xDir * (isBottomHandle ? 40 : 50);
        ly = srcPt.y + (isBottomHandle ? 25 : 30);
      } else {
        const midIdx = Math.floor(edge.points.length / 2);
        lx = edge.points[midIdx]?.x || 0;
        ly = edge.points[midIdx]?.y || 0;
      }
      const labelBgW = edge.label.length * (cfg.edgeLabelFontSize * 0.65) + 14;
      const labelBgH = cfg.edgeLabelFontSize + 8;
      edgesSvg += `
        <rect x="${lx - labelBgW / 2}" y="${ly - labelBgH / 2}" width="${labelBgW}" height="${labelBgH}" rx="4" fill="#18181b" stroke="${color}" stroke-width="0.5"/>
        <text x="${lx}" y="${ly + cfg.edgeLabelFontSize * 0.35}" text-anchor="middle" fill="${color}" font-size="${cfg.edgeLabelFontSize}" font-weight="500" font-family="system-ui, sans-serif">${escapeXml(edge.label)}</text>
      `;
    }
  }

  let nodesSvg = "";
  for (const node of adjustedNodes) {
    nodesSvg += renderNodeSvg(node, cfg);
  }

  const arrowColors = new Set<string>();
  for (const edge of adjustedEdges) {
    arrowColors.add(getEdgeColor(edge.label));
  }
  let markerDefs = "";
  for (const color of arrowColors) {
    const id = `arrow-${color.replace("#", "")}`;
    const mSize = cfg.label === "IMPROVED" ? 10 : 8;
    markerDefs += `
      <marker id="${id}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="${mSize}" markerHeight="${mSize}" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="${color}"/>
      </marker>
    `;
  }

  const titleFontSize = cfg.label === "IMPROVED" ? 18 : 14;
  const titleSvg = `<text x="${svgWidth / 2}" y="${30}" text-anchor="middle" fill="#71717a" font-size="${titleFontSize}" font-weight="700" font-family="system-ui, sans-serif">${cfg.label}: nodes ${cfg.taskWidth}×${cfg.taskHeight}, decisions ${cfg.decisionSize}×${cfg.decisionSize}, font ${cfg.nameFontSize}px, spacing ${cfg.nodesep}/${cfg.ranksep}, DPI ${cfg.density}</text>`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
  <defs>${markerDefs}</defs>
  <rect width="100%" height="100%" fill="#0a0a0f"/>
  ${titleSvg}
  ${edgesSvg}
  ${nodesSvg}
</svg>`;

  const pngBuffer = await sharp(Buffer.from(svg), { density: cfg.density })
    .png()
    .toBuffer();

  return { svgContent: svg, pngBuffer, width: Math.round(svgWidth), height: Math.round(svgHeight) };
}

async function main() {
  const outDir = path.join(process.cwd(), "scripts", "renderer-comparison");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  console.log("Rendering CURRENT settings...");
  const current = await renderWithConfig(TEST_NODES, TEST_EDGES, CURRENT);
  fs.writeFileSync(path.join(outDir, "current.svg"), current.svgContent);
  fs.writeFileSync(path.join(outDir, "current.png"), current.pngBuffer);
  console.log(`  CURRENT: SVG ${current.width}×${current.height}, PNG ${(current.pngBuffer.length / 1024).toFixed(0)}KB`);

  console.log("Rendering IMPROVED settings...");
  const improved = await renderWithConfig(TEST_NODES, TEST_EDGES, IMPROVED);
  fs.writeFileSync(path.join(outDir, "improved.svg"), improved.svgContent);
  fs.writeFileSync(path.join(outDir, "improved.png"), improved.pngBuffer);
  console.log(`  IMPROVED: SVG ${improved.width}×${improved.height}, PNG ${(improved.pngBuffer.length / 1024).toFixed(0)}KB`);

  console.log(`\nComparison files saved to: ${outDir}/`);
  console.log("  current.png  — existing renderer settings");
  console.log("  improved.png — proposed improvements");
  console.log("  current.svg  — SVG source (current)");
  console.log("  improved.svg — SVG source (improved)");

  const sizeRatio = (improved.pngBuffer.length / current.pngBuffer.length).toFixed(1);
  const areaRatio = ((improved.width * improved.height) / (current.width * current.height)).toFixed(1);
  console.log(`\nSize comparison:`);
  console.log(`  PNG size ratio: ${sizeRatio}x (${(current.pngBuffer.length / 1024).toFixed(0)}KB → ${(improved.pngBuffer.length / 1024).toFixed(0)}KB)`);
  console.log(`  Canvas area ratio: ${areaRatio}x (${current.width}×${current.height} → ${improved.width}×${improved.height})`);
}

main().catch(console.error);
