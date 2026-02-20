import { pgTable, serial, text, timestamp, varchar, integer, boolean, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { ideas } from "../schema";

export const processNodes = pgTable("process_nodes", {
  id: serial("id").primaryKey(),
  ideaId: varchar("idea_id").notNull().references(() => ideas.id, { onDelete: "cascade" }),
  viewType: text("view_type").notNull().default("as-is"),
  name: text("name").notNull(),
  role: text("role").notNull().default(""),
  system: text("system").notNull().default(""),
  nodeType: text("node_type").notNull().default("task"),
  description: text("description").notNull().default(""),
  isPainPoint: boolean("is_pain_point").notNull().default(false),
  isGhost: boolean("is_ghost").notNull().default(false),
  positionX: real("position_x").notNull().default(0),
  positionY: real("position_y").notNull().default(0),
  orderIndex: integer("order_index").notNull().default(0),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const insertProcessNodeSchema = createInsertSchema(processNodes).omit({
  id: true,
  createdAt: true,
});
export type ProcessNode = typeof processNodes.$inferSelect;
export type InsertProcessNode = z.infer<typeof insertProcessNodeSchema>;

export const processEdges = pgTable("process_edges", {
  id: serial("id").primaryKey(),
  ideaId: varchar("idea_id").notNull().references(() => ideas.id, { onDelete: "cascade" }),
  viewType: text("view_type").notNull().default("as-is"),
  sourceNodeId: integer("source_node_id").notNull(),
  targetNodeId: integer("target_node_id").notNull(),
  label: text("label").notNull().default(""),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const insertProcessEdgeSchema = createInsertSchema(processEdges).omit({
  id: true,
  createdAt: true,
});
export type ProcessEdge = typeof processEdges.$inferSelect;
export type InsertProcessEdge = z.infer<typeof insertProcessEdgeSchema>;

export const processApprovals = pgTable("process_approvals", {
  id: serial("id").primaryKey(),
  ideaId: varchar("idea_id").notNull().references(() => ideas.id, { onDelete: "cascade" }),
  viewType: text("view_type").notNull().default("as-is"),
  userId: varchar("user_id").notNull(),
  userRole: text("user_role").notNull(),
  userName: text("user_name").notNull(),
  snapshotJson: text("snapshot_json").notNull(),
  approvedAt: timestamp("approved_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const insertProcessApprovalSchema = createInsertSchema(processApprovals).omit({
  id: true,
  approvedAt: true,
});
export type ProcessApproval = typeof processApprovals.$inferSelect;
export type InsertProcessApproval = z.infer<typeof insertProcessApprovalSchema>;
