import { users, ideas, type User, type InsertUser, type Idea, type InsertIdea } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getIdea(id: string): Promise<Idea | undefined>;
  getAllIdeas(): Promise<Idea[]>;
  createIdea(idea: InsertIdea): Promise<Idea>;
  getIdeasByOwnerEmail(email: string): Promise<Idea[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return db.select().from(users);
  }

  async getIdea(id: string): Promise<Idea | undefined> {
    const [idea] = await db.select().from(ideas).where(eq(ideas.id, id));
    return idea;
  }

  async getAllIdeas(): Promise<Idea[]> {
    return db.select().from(ideas).orderBy(desc(ideas.createdAt));
  }

  async createIdea(insertIdea: InsertIdea): Promise<Idea> {
    const [idea] = await db.insert(ideas).values(insertIdea).returning();
    return idea;
  }

  async getIdeasByOwnerEmail(email: string): Promise<Idea[]> {
    return db.select().from(ideas).where(eq(ideas.ownerEmail, email)).orderBy(desc(ideas.createdAt));
  }
}

export const storage = new DatabaseStorage();
