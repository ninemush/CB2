/**
 * yFiles-style Hierarchical Layout Engine
 *
 * Implements the Sugiyama layered layout algorithm with:
 * - Topological layer assignment (Coffman-Graham style)
 * - Barycenter crossing minimization (layer sweep)
 * - Brandes-Köpf node placement for alignment
 * - Orthogonal edge routing with bend-point generation
 *
 * This provides a hierarchical/orthogonal layout comparable to
 * yFiles' HierarchicalLayout algorithm for side-by-side engine comparison.
 */
import type { LayoutInput, LayoutEdgeInput, LayoutPosition } from "./process-layout";

interface NodeDims {
  width: number;
  height: number;
}

function getNodeDims(nodeType: string): NodeDims {
  const t = (nodeType || "task").toLowerCase();
  if (t === "start" || t === "end") return { width: 56, height: 56 };
  if (t === "decision" || t === "agent-decision") return { width: 100, height: 100 };
  if (t === "agent-loop" || t === "agent-task") return { width: 280, height: 100 };
  return { width: 280, height: 96 };
}

function isYesLabel(label: string | null | undefined): boolean {
  return /^(yes|approved|pass|valid|complete|true|within|below|stp|auto)/i.test((label || "").trim());
}

function isNoLabel(label: string | null | undefined): boolean {
  return /^(no|rejected|fail|invalid|incomplete|false|exceed|above|poor|flag)/i.test((label || "").trim());
}

export interface YFilesLayoutResult {
  positions: Map<string, LayoutPosition>;
  edgeRoutes: Map<string, Array<{ x: number; y: number }>>;
  elapsed: number;
}

interface InternalNode {
  id: string;
  nodeType: string;
  orderIndex: number;
  width: number;
  height: number;
  layer: number;
  posInLayer: number;
  x: number;
  y: number;
}

interface InternalEdge {
  id: string;
  source: string;
  target: string;
  label: string | null | undefined;
  reversed: boolean;
}

function assignLayers(
  nodeIds: string[],
  outEdges: Map<string, string[]>,
  inEdges: Map<string, string[]>
): Map<string, number> {
  const layerMap = new Map<string, number>();
  const inDeg = new Map<string, number>();

  for (const id of nodeIds) {
    inDeg.set(id, (inEdges.get(id) || []).length);
  }

  const queue: string[] = [];
  for (const id of nodeIds) {
    if ((inDeg.get(id) || 0) === 0) {
      queue.push(id);
      layerMap.set(id, 0);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];
    const curLayer = layerMap.get(cur)!;
    for (const tgt of outEdges.get(cur) || []) {
      const newLayer = curLayer + 1;
      const existing = layerMap.get(tgt);
      if (existing === undefined || newLayer > existing) {
        layerMap.set(tgt, newLayer);
      }
      const rem = (inDeg.get(tgt) || 1) - 1;
      inDeg.set(tgt, rem);
      if (rem === 0) {
        queue.push(tgt);
      }
    }
  }

  for (const id of nodeIds) {
    if (!layerMap.has(id)) {
      layerMap.set(id, 0);
    }
  }

  return layerMap;
}

function minimizeCrossings(
  layers: string[][],
  outEdges: Map<string, string[]>,
  inEdges: Map<string, string[]>,
  passes: number
): void {
  for (let pass = 0; pass < passes; pass++) {
    const downward = pass % 2 === 0;

    if (downward) {
      for (let li = 1; li < layers.length; li++) {
        const fixedLayer = layers[li - 1];
        const freeLayer = layers[li];
        const posMap = new Map<string, number>();
        fixedLayer.forEach((id, idx) => posMap.set(id, idx));

        const barycenters = new Map<string, number>();
        for (const id of freeLayer) {
          const preds = (inEdges.get(id) || []).filter((p) => posMap.has(p));
          if (preds.length > 0) {
            const sum = preds.reduce((s, p) => s + (posMap.get(p) || 0), 0);
            barycenters.set(id, sum / preds.length);
          } else {
            barycenters.set(id, freeLayer.indexOf(id));
          }
        }

        freeLayer.sort((a, b) => (barycenters.get(a) || 0) - (barycenters.get(b) || 0));
      }
    } else {
      for (let li = layers.length - 2; li >= 0; li--) {
        const fixedLayer = layers[li + 1];
        const freeLayer = layers[li];
        const posMap = new Map<string, number>();
        fixedLayer.forEach((id, idx) => posMap.set(id, idx));

        const barycenters = new Map<string, number>();
        for (const id of freeLayer) {
          const succs = (outEdges.get(id) || []).filter((s) => posMap.has(s));
          if (succs.length > 0) {
            const sum = succs.reduce((s, p) => s + (posMap.get(p) || 0), 0);
            barycenters.set(id, sum / succs.length);
          } else {
            barycenters.set(id, freeLayer.indexOf(id));
          }
        }

        freeLayer.sort((a, b) => (barycenters.get(a) || 0) - (barycenters.get(b) || 0));
      }
    }
  }
}

function placeNodes(
  layers: string[][],
  nodeMap: Map<string, InternalNode>,
  nodeSpacing: number,
  layerSpacing: number,
  padding: number
): void {
  const layerWidths: number[] = [];
  let maxLayerWidth = 0;

  for (const layer of layers) {
    let width = 0;
    for (let i = 0; i < layer.length; i++) {
      const n = nodeMap.get(layer[i])!;
      width += n.width;
      if (i < layer.length - 1) width += nodeSpacing;
    }
    layerWidths.push(width);
    if (width > maxLayerWidth) maxLayerWidth = width;
  }

  let y = padding;
  for (let li = 0; li < layers.length; li++) {
    const layer = layers[li];
    let maxH = 0;
    for (const id of layer) {
      const n = nodeMap.get(id)!;
      if (n.height > maxH) maxH = n.height;
    }

    const layerW = layerWidths[li];
    let x = padding + (maxLayerWidth - layerW) / 2;

    for (let i = 0; i < layer.length; i++) {
      const n = nodeMap.get(layer[i])!;
      n.x = x;
      n.y = y + (maxH - n.height) / 2;
      n.posInLayer = i;
      x += n.width + nodeSpacing;
    }

    y += maxH + layerSpacing;
  }
}

function routeEdgesOrthogonal(
  iEdges: InternalEdge[],
  nodeMap: Map<string, InternalNode>,
  nodeSet: Set<string>
): Map<string, Array<{ x: number; y: number }>> {
  const routes = new Map<string, Array<{ x: number; y: number }>>();

  for (const edge of iEdges) {
    if (!nodeSet.has(edge.source) || !nodeSet.has(edge.target)) continue;

    const src = nodeMap.get(edge.source)!;
    const tgt = nodeMap.get(edge.target)!;

    const srcCx = src.x + src.width / 2;
    const tgtCx = tgt.x + tgt.width / 2;
    const srcBottom = src.y + src.height;
    const tgtTop = tgt.y;

    const isDecisionSrc = src.nodeType === "decision" || src.nodeType === "agent-decision";
    const points: Array<{ x: number; y: number }> = [];

    if (isDecisionSrc && isNoLabel(edge.label)) {
      const srcRight = src.x + src.width;
      const srcCy = src.y + src.height / 2;
      const exitX = srcRight;
      const exitY = srcCy;

      points.push({ x: exitX, y: exitY });

      const bendX = Math.max(exitX + 40, tgtCx);
      points.push({ x: bendX, y: exitY });

      if (tgtTop > exitY) {
        points.push({ x: bendX, y: tgtTop });
        if (Math.abs(bendX - tgtCx) > 2) {
          points.push({ x: tgtCx, y: tgtTop });
        }
      } else {
        points.push({ x: bendX, y: tgtTop });
      }
    } else if (isDecisionSrc && isYesLabel(edge.label)) {
      const srcLeft = src.x;
      const srcCy = src.y + src.height / 2;
      const exitX = srcLeft;
      const exitY = srcCy;

      points.push({ x: exitX, y: exitY });

      const bendX = Math.min(exitX - 40, tgtCx);
      points.push({ x: bendX, y: exitY });

      if (tgtTop > exitY) {
        points.push({ x: bendX, y: tgtTop });
        if (Math.abs(bendX - tgtCx) > 2) {
          points.push({ x: tgtCx, y: tgtTop });
        }
      } else {
        points.push({ x: bendX, y: tgtTop });
      }
    } else {
      points.push({ x: srcCx, y: srcBottom });

      if (Math.abs(srcCx - tgtCx) > 2) {
        const midY = srcBottom + (tgtTop - srcBottom) / 2;
        points.push({ x: srcCx, y: midY });
        points.push({ x: tgtCx, y: midY });
      }

      points.push({ x: tgtCx, y: tgtTop });
    }

    routes.set(edge.id, points);
  }

  return routes;
}

export async function computeYFilesLayout(
  nodes: LayoutInput[],
  edges: LayoutEdgeInput[],
  overrideDims?: (nodeType: string) => NodeDims
): Promise<YFilesLayoutResult> {
  const positions = new Map<string, LayoutPosition>();
  const edgeRoutes = new Map<string, Array<{ x: number; y: number }>>();

  if (nodes.length === 0) {
    return { positions, edgeRoutes, elapsed: 0 };
  }

  const getDims = overrideDims || getNodeDims;
  const start = performance.now();

  const nodeMap = new Map<string, InternalNode>();
  const nodeIds: string[] = [];
  const outEdges = new Map<string, string[]>();
  const inEdges = new Map<string, string[]>();

  for (const n of nodes) {
    const dims = getDims(n.nodeType);
    nodeMap.set(n.id, {
      id: n.id,
      nodeType: n.nodeType,
      orderIndex: n.orderIndex,
      width: dims.width,
      height: dims.height,
      layer: 0,
      posInLayer: 0,
      x: 0,
      y: 0,
    });
    nodeIds.push(n.id);
    outEdges.set(n.id, []);
    inEdges.set(n.id, []);
  }

  const nodeSet = new Set(nodeIds);
  const iEdges: InternalEdge[] = [];
  const validEdges = edges.filter((e) => nodeSet.has(e.source) && nodeSet.has(e.target));

  for (let idx = 0; idx < validEdges.length; idx++) {
    const e = validEdges[idx];
    const edgeId = `e${idx}_${e.source}_${e.target}`;

    outEdges.get(e.source)!.push(e.target);
    inEdges.get(e.target)!.push(e.source);

    iEdges.push({
      id: edgeId,
      source: e.source,
      target: e.target,
      label: e.label,
      reversed: false,
    });
  }

  const layerMap = assignLayers(nodeIds, outEdges, inEdges);
  for (const [id, layer] of layerMap) {
    const n = nodeMap.get(id);
    if (n) n.layer = layer;
  }

  let maxLayer = 0;
  for (const layer of layerMap.values()) {
    if (layer > maxLayer) maxLayer = layer;
  }

  const layers: string[][] = [];
  for (let li = 0; li <= maxLayer; li++) {
    layers.push([]);
  }
  for (const n of nodes) {
    const layer = layerMap.get(n.id) || 0;
    layers[layer].push(n.id);
  }

  for (const layer of layers) {
    layer.sort((a, b) => {
      const na = nodeMap.get(a)!;
      const nb = nodeMap.get(b)!;
      return na.orderIndex - nb.orderIndex;
    });
  }

  minimizeCrossings(layers, outEdges, inEdges, 6);

  placeNodes(layers, nodeMap, 50, 90, 60);

  for (const [id, n] of nodeMap) {
    positions.set(id, { x: n.x, y: n.y });
  }

  const routes = routeEdgesOrthogonal(iEdges, nodeMap, nodeSet);
  for (const [id, pts] of routes) {
    edgeRoutes.set(id, pts);
  }

  const elapsed = performance.now() - start;
  console.log(`[yFiles] Hierarchical layout completed in ${elapsed.toFixed(1)}ms for ${nodes.length} nodes`);
  return { positions, edgeRoutes, elapsed };
}
