import type { Express, Request, Response } from "express";
import Anthropic from "@anthropic-ai/sdk";
import { chatStorage } from "./storage";
import { storage } from "../../storage";

const anthropic = new Anthropic({
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
});

function buildSystemPrompt(ideaTitle: string, currentStage: string): string {
  return `You are the CannonBall automation design assistant. Your job is to help Process SMEs describe, analyze, and design business process automations. You are currently helping with an idea titled: ${ideaTitle}. The current stage is: ${currentStage}.

Your behavior by stage:
- Idea stage: Ask targeted questions to understand the process. Who does it? What triggers it? What systems are involved? What are the pain points? What does done look like?
- Feasibility Assessment: Based on what you've learned, assess the automation potential. Be direct. Flag complexity. Give an honest effort range.
- Design stage: Help the SME describe the process step by step in enough detail to build a visual process map.

Always be conversational, direct, and professional. Do not use bullet points for every response. Mix prose and structure based on what the moment calls for. When you have enough information to identify a discrete process step, output it in this format on its own line so the app can parse it:
[STEP: <step name> | ROLE: <who does it> | SYSTEM: <system used or 'manual'> | TYPE: <task/decision/start/end>]

This allows the visual process map to update in real time.`;
}

export function registerChatRoutes(app: Express): void {
  app.get("/api/ideas/:ideaId/messages", async (req: Request, res: Response) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    try {
      const ideaId = req.params.ideaId as string;
      const msgs = await chatStorage.getMessagesByIdeaId(ideaId);
      return res.json(msgs);
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.post("/api/chat", async (req: Request, res: Response) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const { ideaId, content } = req.body;
    if (!ideaId || !content) {
      return res.status(400).json({ error: "ideaId and content are required" });
    }

    try {
      const idea = await storage.getIdea(ideaId);
      if (!idea) {
        return res.status(404).json({ error: "Idea not found" });
      }

      await chatStorage.createMessage(ideaId, "user", content);

      const history = await chatStorage.getMessagesByIdeaId(ideaId);
      const chatMessages = history.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders();

      const systemPrompt = buildSystemPrompt(idea.title, idea.stage);

      const stream = anthropic.messages.stream({
        model: "claude-sonnet-4-5",
        max_tokens: 8192,
        system: systemPrompt,
        messages: chatMessages,
      });

      let fullResponse = "";

      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          const text = event.delta.text;
          if (text) {
            fullResponse += text;
            res.write(`data: ${JSON.stringify({ token: text })}\n\n`);
          }
        }
      }

      await chatStorage.createMessage(ideaId, "assistant", fullResponse);

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Error in chat:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Stream interrupted" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process chat" });
      }
    }
  });
}
