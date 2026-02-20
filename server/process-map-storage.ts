import { processNodes, processEdges, processApprovals, type ProcessNode, type InsertProcessNode, type ProcessEdge, type InsertProcessEdge, type ProcessApproval, type InsertProcessApproval } from "@shared/schema";
import { db } from "./db";
import { eq, and, asc } from "drizzle-orm";

export class ProcessMapStorage {
  async getNodesByIdeaId(ideaId: string, viewType: string = "as-is"): Promise<ProcessNode[]> {
    return db.select().from(processNodes)
      .where(and(eq(processNodes.ideaId, ideaId), eq(processNodes.viewType, viewType)))
      .orderBy(asc(processNodes.orderIndex));
  }

  async getNodeById(id: number): Promise<ProcessNode | undefined> {
    const [node] = await db.select().from(processNodes).where(eq(processNodes.id, id));
    return node;
  }

  async createNode(data: InsertProcessNode): Promise<ProcessNode> {
    const [node] = await db.insert(processNodes).values(data).returning();
    return node;
  }

  async updateNode(id: number, data: Partial<InsertProcessNode>): Promise<ProcessNode> {
    const [node] = await db.update(processNodes).set(data).where(eq(processNodes.id, id)).returning();
    return node;
  }

  async deleteNode(id: number): Promise<void> {
    await db.delete(processEdges).where(eq(processEdges.sourceNodeId, id));
    await db.delete(processEdges).where(eq(processEdges.targetNodeId, id));
    await db.delete(processNodes).where(eq(processNodes.id, id));
  }

  async findNodeByName(ideaId: string, name: string, viewType: string = "as-is"): Promise<ProcessNode | undefined> {
    const [node] = await db.select().from(processNodes)
      .where(and(eq(processNodes.ideaId, ideaId), eq(processNodes.name, name), eq(processNodes.viewType, viewType)));
    return node;
  }

  async getEdgeById(id: number): Promise<ProcessEdge | undefined> {
    const [edge] = await db.select().from(processEdges).where(eq(processEdges.id, id));
    return edge;
  }

  async getEdgesByIdeaId(ideaId: string, viewType: string = "as-is"): Promise<ProcessEdge[]> {
    return db.select().from(processEdges)
      .where(and(eq(processEdges.ideaId, ideaId), eq(processEdges.viewType, viewType)));
  }

  async createEdge(data: InsertProcessEdge): Promise<ProcessEdge> {
    const [edge] = await db.insert(processEdges).values(data).returning();
    return edge;
  }

  async updateEdge(id: number, data: Partial<InsertProcessEdge>): Promise<ProcessEdge> {
    const [edge] = await db.update(processEdges).set(data).where(eq(processEdges.id, id)).returning();
    return edge;
  }

  async deleteEdge(id: number): Promise<void> {
    await db.delete(processEdges).where(eq(processEdges.id, id));
  }

  async getApproval(ideaId: string, viewType: string = "as-is"): Promise<ProcessApproval | undefined> {
    const [approval] = await db.select().from(processApprovals)
      .where(and(eq(processApprovals.ideaId, ideaId), eq(processApprovals.viewType, viewType)));
    return approval;
  }

  async createApproval(data: InsertProcessApproval): Promise<ProcessApproval> {
    const [approval] = await db.insert(processApprovals).values(data).returning();
    return approval;
  }
}

export const processMapStorage = new ProcessMapStorage();
