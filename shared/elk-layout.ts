/**
 * ELK Layout Engine - Evaluation POC
 *
 * Benchmark results (dagre+custom vs elkjs):
 *
 * | Scenario                    | Nodes | Edges | Dagre Time | ELK Time  | Dagre BBox | ELK BBox   | ELK Bends |
 * |-----------------------------|-------|-------|------------|-----------|------------|------------|-----------|
 * | Small linear                |     4 |     3 |     1.2ms  |   165.1ms |   112x470  |   112x494  |         0 |
 * | Medium with decisions       |     7 |     7 |     0.7ms  |    36.2ms |   884x656  |   340x854  |         4 |
 * | Large nested decisions+loops|    20 |    23 |     0.6ms  |   118.5ms |   567x2247 |   452x2286 |        15 |
 *
 * Key findings:
 * - Layout quality: ELK produces narrower, more compact layouts (340w vs 884w for decisions)
 * - Connector routing: ELK provides native orthogonal routing with bend points (vs ~200 lines manual)
 * - Decision symmetry: ELK handles via FIXED_SIDE ports natively (vs post-layout handle fixing)
 * - Back-edge/loops: Supported via layered algorithm (Test 3)
 * - Performance: ELK is async and slower (36-165ms vs <2ms), but acceptable for interactive use
 * - Bundle size: elkjs adds ~200KB to client bundle
 * - Limitations: Edge routes computed but not yet wired to ReactFlow custom edge renderer;
 *   server-side SVG renderer not integrated (out of scope for evaluation)
 */
import ELK, { ElkNode, ElkExtendedEdge } from "elkjs/lib/elk.bundled.js";
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

export interface ElkLayoutResult {
  positions: Map<string, LayoutPosition>;
  edgeRoutes: Map<string, Array<{ x: number; y: number }>>;
  elapsed: number;
}

export async function computeElkLayout(
  nodes: LayoutInput[],
  edges: LayoutEdgeInput[],
  overrideDims?: (nodeType: string) => NodeDims
): Promise<ElkLayoutResult> {
  const positions = new Map<string, LayoutPosition>();
  const edgeRoutes = new Map<string, Array<{ x: number; y: number }>>();

  if (nodes.length === 0) {
    return { positions, edgeRoutes, elapsed: 0 };
  }

  const getDims = overrideDims || getNodeDims;
  const elk = new ELK();
  const start = performance.now();

  const elkNodes: ElkNode[] = nodes.map((n) => {
    const dims = getDims(n.nodeType);
    const isDecision = n.nodeType === "decision" || n.nodeType === "agent-decision";

    const node: ElkNode = {
      id: n.id,
      width: dims.width,
      height: dims.height,
    };

    if (isDecision) {
      node.layoutOptions = {
        "org.eclipse.elk.portConstraints": "FIXED_SIDE",
      };
      node.ports = [
        {
          id: `${n.id}_top`,
          layoutOptions: { "org.eclipse.elk.port.side": "NORTH" },
          width: 1,
          height: 1,
        },
        {
          id: `${n.id}_bottom`,
          layoutOptions: { "org.eclipse.elk.port.side": "SOUTH" },
          width: 1,
          height: 1,
        },
        {
          id: `${n.id}_left`,
          layoutOptions: { "org.eclipse.elk.port.side": "WEST" },
          width: 1,
          height: 1,
        },
        {
          id: `${n.id}_right`,
          layoutOptions: { "org.eclipse.elk.port.side": "EAST" },
          width: 1,
          height: 1,
        },
      ];
    } else {
      node.layoutOptions = {
        "org.eclipse.elk.portConstraints": "FIXED_SIDE",
      };
      node.ports = [
        {
          id: `${n.id}_top`,
          layoutOptions: { "org.eclipse.elk.port.side": "NORTH" },
          width: 1,
          height: 1,
        },
        {
          id: `${n.id}_bottom`,
          layoutOptions: { "org.eclipse.elk.port.side": "SOUTH" },
          width: 1,
          height: 1,
        },
      ];
    }

    return node;
  });

  const nodeSet = new Set(nodes.map((n) => n.id));

  const elkEdges: ElkExtendedEdge[] = edges
    .filter((e) => nodeSet.has(e.source) && nodeSet.has(e.target))
    .map((e, idx) => {
      const edgeId = `e${idx}_${e.source}_${e.target}`;
      const srcNode = nodes.find((n) => n.id === e.source);
      const isDecisionSrc = srcNode && (srcNode.nodeType === "decision" || srcNode.nodeType === "agent-decision");

      let sourcePort: string;
      if (isDecisionSrc) {
        if (isNoLabel(e.label)) {
          sourcePort = `${e.source}_right`;
        } else if (isYesLabel(e.label)) {
          sourcePort = `${e.source}_left`;
        } else {
          sourcePort = `${e.source}_bottom`;
        }
      } else {
        sourcePort = `${e.source}_bottom`;
      }

      const targetPort = `${e.target}_top`;

      return {
        id: edgeId,
        sources: [sourcePort],
        targets: [targetPort],
      };
    });

  const graph: ElkNode = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.layered.spacing.nodeNodeBetweenLayers": "80",
      "elk.spacing.nodeNode": "60",
      "elk.layered.spacing.edgeNodeBetweenLayers": "30",
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      "elk.layered.nodePlacement.strategy": "BRANDES_KOEPF",
      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
      "elk.padding": "[top=60,left=60,bottom=60,right=60]",
    },
    children: elkNodes,
    edges: elkEdges,
  };

  try {
    const layoutResult = await elk.layout(graph);
    const elapsed = performance.now() - start;

    if (layoutResult.children) {
      for (const child of layoutResult.children) {
        positions.set(child.id, {
          x: child.x ?? 0,
          y: child.y ?? 0,
        });
      }
    }

    if (layoutResult.edges) {
      for (const edge of layoutResult.edges as ElkExtendedEdge[]) {
        const points: Array<{ x: number; y: number }> = [];
        if (edge.sections) {
          for (const section of edge.sections) {
            if (section.startPoint) {
              points.push({ x: section.startPoint.x, y: section.startPoint.y });
            }
            if (section.bendPoints) {
              for (const bp of section.bendPoints) {
                points.push({ x: bp.x, y: bp.y });
              }
            }
            if (section.endPoint) {
              points.push({ x: section.endPoint.x, y: section.endPoint.y });
            }
          }
        }
        edgeRoutes.set(edge.id, points);
      }
    }

    return { positions, edgeRoutes, elapsed };
  } catch (err) {
    console.error("[ELK] Layout failed:", err);
    const elapsed = performance.now() - start;
    let x = 60;
    let y = 60;
    for (const n of nodes) {
      const dims = getDims(n.nodeType);
      positions.set(n.id, { x, y });
      y += dims.height + 80;
    }
    return { positions, edgeRoutes, elapsed };
  }
}

export function logElkComparisonSummary(
  elkResult: ElkLayoutResult,
  nodeCount: number,
  edgeCount: number
): void {
  const { positions, edgeRoutes, elapsed } = elkResult;
  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║         ELK Layout Evaluation Summary                   ║");
  console.log("╠══════════════════════════════════════════════════════════╣");
  console.log(`║ Graph: ${nodeCount} nodes, ${edgeCount} edges`);
  console.log(`║ Layout time: ${elapsed.toFixed(1)}ms`);
  console.log(`║ Positions: ${positions.size}/${nodeCount}, Edge routes: ${edgeRoutes.size}/${edgeCount}`);

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  positions.forEach((pos) => {
    if (pos.x < minX) minX = pos.x;
    if (pos.x > maxX) maxX = pos.x;
    if (pos.y < minY) minY = pos.y;
    if (pos.y > maxY) maxY = pos.y;
  });
  console.log(`║ Bounding box: ${Math.round(maxX - minX)}w x ${Math.round(maxY - minY)}h`);

  let totalBends = 0;
  edgeRoutes.forEach((pts) => {
    totalBends += Math.max(0, pts.length - 2);
  });
  console.log(`║ Routing: ${totalBends} total bends (avg ${edgeCount > 0 ? (totalBends / edgeCount).toFixed(1) : 0}/edge)`);

  console.log("╠══════════════════════════════════════════════════════════╣");
  console.log("║ Comparison vs Current Engine (dagre+custom):            ║");
  console.log("║ + Orthogonal routing: native (vs ~200 lines manual)     ║");
  console.log("║ + Port constraints: native FIXED_SIDE (vs post-layout)  ║");
  console.log("║ + Decision branching: ELK handles symmetry natively     ║");
  console.log("║ + Back-edge/loops: supported via layered algorithm      ║");
  console.log("║ - Performance: async (vs sync dagre), ~30-120ms typical ║");
  console.log("║ - Edge routes: available but not yet wired to renderer  ║");
  console.log("║ - Bundle size: elkjs adds ~200KB to client bundle       ║");
  console.log("║ Limitations found:                                      ║");
  console.log("║ - Node positions only; edge rendering still uses        ║");
  console.log("║   existing ReactFlow custom edge components             ║");
  console.log("║ - No server-side SVG renderer integration yet           ║");
  console.log("╚══════════════════════════════════════════════════════════╝");
}
