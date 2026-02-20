import type { Express, Request, Response } from "express";
import { getUiPathConfig, saveUiPathConfig, testUiPathConnection, pushToUiPath } from "./uipath-integration";
import { chatStorage } from "./replit_integrations/chat/storage";
import { storage } from "./storage";

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.session.userId) {
    res.status(401).json({ message: "Not authenticated" });
    return false;
  }
  const role = req.session.activeRole || "";
  if (role !== "Admin") {
    res.status(403).json({ message: "Admin access required" });
    return false;
  }
  return true;
}

export function registerUiPathRoutes(app: Express): void {
  app.get("/api/settings/uipath", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const config = await getUiPathConfig();
    if (!config) {
      return res.json({ configured: false });
    }
    return res.json({
      configured: true,
      orgName: config.orgName,
      tenantName: config.tenantName,
      clientId: config.clientId,
      hasUserKey: !!config.userKey,
    });
  });

  app.post("/api/settings/uipath", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const { orgName, tenantName, clientId, userKey } = req.body;
    if (!orgName || !tenantName || !clientId) {
      return res.status(400).json({ message: "Organization, tenant, and client ID are required" });
    }
    const existingConfig = await getUiPathConfig();
    if (!userKey && !existingConfig) {
      return res.status(400).json({ message: "User key is required for initial configuration" });
    }
    await saveUiPathConfig({ orgName, tenantName, clientId, userKey: userKey || undefined });
    return res.json({ success: true, message: "UiPath configuration saved." });
  });

  app.post("/api/settings/uipath/test", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const result = await testUiPathConnection();
    return res.json(result);
  });

  app.get("/api/settings/uipath/status", async (_req: Request, res: Response) => {
    const config = await getUiPathConfig();
    return res.json({ configured: !!config });
  });

  app.post("/api/ideas/:ideaId/push-uipath", async (req: Request, res: Response) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const ideaId = req.params.ideaId as string;
    const idea = await storage.getIdea(ideaId);
    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    const user = await storage.getUser(req.session.userId as string);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const activeRole = (req.session.activeRole || user.role) as string;
    if (idea.ownerEmail !== user.email && activeRole !== "Admin" && activeRole !== "CoE") {
      return res.status(403).json({ message: "Access denied" });
    }

    const messages = await chatStorage.getMessagesByIdeaId(ideaId);
    const uipathMsg = [...messages].reverse().find((m) => m.content.startsWith("[UIPATH:"));
    if (!uipathMsg) {
      return res.status(404).json({ message: "No UiPath package found. Generate it first." });
    }

    let pkg;
    try {
      const jsonStr = uipathMsg.content.slice(8, -1);
      pkg = JSON.parse(jsonStr);
    } catch {
      return res.status(500).json({ message: "Invalid package data" });
    }

    const result = await pushToUiPath(pkg);

    if (result.success) {
      await chatStorage.createMessage(
        ideaId,
        "assistant",
        `Package pushed to UiPath Orchestrator successfully. ${result.message}`
      );
    }

    return res.json(result);
  });
}
