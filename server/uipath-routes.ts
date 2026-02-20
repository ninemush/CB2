import type { Express, Request, Response } from "express";
import { getUiPathConfig, saveUiPathConfig, testUiPathConnection, pushToUiPath, getLastTestedAt, fetchUiPathFolders, saveUiPathFolder } from "./uipath-integration";
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
    const lastTestedAt = await getLastTestedAt();
    if (!config) {
      return res.json({ configured: false, lastTestedAt });
    }
    return res.json({
      configured: true,
      orgName: config.orgName,
      tenantName: config.tenantName,
      clientId: config.clientId,
      scopes: config.scopes,
      hasSecret: !!config.clientSecret,
      lastTestedAt,
      folderId: config.folderId || null,
      folderName: config.folderName || null,
    });
  });

  app.get("/api/settings/uipath/folders", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const result = await fetchUiPathFolders();
    return res.json(result);
  });

  app.post("/api/settings/uipath/folder", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const { folderId, folderName } = req.body;
    await saveUiPathFolder(folderId || null, folderName || null);
    return res.json({ success: true });
  });

  app.post("/api/settings/uipath", async (req: Request, res: Response) => {
    if (!requireAdmin(req, res)) return;
    const { orgName, tenantName, clientId, clientSecret, scopes } = req.body;
    if (!orgName || !tenantName || !clientId) {
      return res.status(400).json({ message: "Organization, tenant, and client ID are required" });
    }
    const existingConfig = await getUiPathConfig();
    if (!clientSecret && !existingConfig) {
      return res.status(400).json({ message: "App Secret is required for initial configuration" });
    }
    await saveUiPathConfig({ orgName, tenantName, clientId, clientSecret: clientSecret || undefined, scopes: scopes || undefined });

    const testResult = await testUiPathConnection();
    return res.json({
      success: true,
      message: "UiPath configuration saved.",
      testResult,
    });
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
      const details = result.details;
      const folderLine = details?.folderName
        ? `Folder: **${details.folderName}**`
        : `Location: Tenant feed`;
      const findSteps = details?.folderName
        ? [
            `1. Open UiPath Orchestrator`,
            `2. Select folder **"${details.folderName}"** in the left sidebar`,
            `3. Click the **Packages** tab`,
            `4. Search for **"${details?.packageId || pkg.projectName}"**`,
          ]
        : [
            `1. Open UiPath Orchestrator`,
            `2. Go to **Tenant → Packages** (left sidebar)`,
            `3. Search for **"${details?.packageId || pkg.projectName}"**`,
          ];
      const chatMsg = [
        `Package pushed to UiPath Orchestrator successfully.`,
        ``,
        `**${details?.packageId || pkg.projectName}** v${details?.version || "1.0.0"}`,
        `Org: ${details?.orgName || "—"} / Tenant: ${details?.tenantName || "—"}`,
        folderLine,
        ``,
        `**Where to find it in Orchestrator:**`,
        ...findSteps,
        ``,
        `From there you can create a Process and assign it to a Robot to run.`,
      ].join("\n");

      await chatStorage.createMessage(ideaId, "assistant", chatMsg);
    } else {
      await chatStorage.createMessage(
        ideaId,
        "assistant",
        `Failed to push to UiPath Orchestrator. ${result.message}`
      );
    }

    return res.json(result);
  });
}
