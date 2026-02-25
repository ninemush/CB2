import { db } from "../../db";
import { chatMessages, type ChatMessage } from "@shared/schema";
import { eq, asc } from "drizzle-orm";

export interface IChatStorage {
  getMessagesByIdeaId(ideaId: string): Promise<ChatMessage[]>;
  createMessage(ideaId: string, role: string, content: string): Promise<ChatMessage>;
  updateMessageContent(messageId: number, content: string): Promise<void>;
}

export const chatStorage: IChatStorage = {
  async getMessagesByIdeaId(ideaId: string) {
    return db.select().from(chatMessages).where(eq(chatMessages.ideaId, ideaId)).orderBy(asc(chatMessages.createdAt));
  },

  async createMessage(ideaId: string, role: string, content: string) {
    const [message] = await db.insert(chatMessages).values({ ideaId, role, content }).returning();
    return message;
  },

  async updateMessageContent(messageId: number, content: string) {
    await db.update(chatMessages).set({ content }).where(eq(chatMessages.id, messageId));
  },
};
