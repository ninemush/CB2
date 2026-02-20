import { db } from "./db";
import { appSettings } from "@shared/schema";
import { eq } from "drizzle-orm";

const UIPATH_KEYS = [
  "uipath_org_name",
  "uipath_tenant_name",
  "uipath_client_id",
  "uipath_user_key",
] as const;

type UiPathConfig = {
  orgName: string;
  tenantName: string;
  clientId: string;
  userKey: string;
};

export async function getUiPathConfig(): Promise<UiPathConfig | null> {
  const rows = await db.select().from(appSettings).where(
    eq(appSettings.key, "uipath_org_name")
  );
  if (rows.length === 0) return null;

  const all = await db.select().from(appSettings);
  const map = new Map(all.map((r) => [r.key, r.value]));

  const orgName = map.get("uipath_org_name");
  const tenantName = map.get("uipath_tenant_name");
  const clientId = map.get("uipath_client_id");
  const userKey = map.get("uipath_user_key");

  if (!orgName || !tenantName || !clientId || !userKey) return null;

  return { orgName, tenantName, clientId, userKey };
}

export async function saveUiPathConfig(config: Partial<UiPathConfig> & { orgName: string; tenantName: string; clientId: string }): Promise<void> {
  const entries: { key: string; value: string }[] = [
    { key: "uipath_org_name", value: config.orgName },
    { key: "uipath_tenant_name", value: config.tenantName },
    { key: "uipath_client_id", value: config.clientId },
  ];

  if (config.userKey) {
    entries.push({ key: "uipath_user_key", value: config.userKey });
  }

  for (const entry of entries) {
    const existing = await db.select().from(appSettings).where(eq(appSettings.key, entry.key));
    if (existing.length > 0) {
      await db.update(appSettings).set({ value: entry.value, updatedAt: new Date() }).where(eq(appSettings.key, entry.key));
    } else {
      await db.insert(appSettings).values(entry);
    }
  }
}

async function getAccessToken(config: UiPathConfig): Promise<string> {
  const res = await fetch("https://account.uipath.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      client_id: config.clientId,
      refresh_token: config.userKey,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`UiPath auth failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function buildNuGetPackage(pkg: any): Promise<Buffer> {
  const archiver = require("archiver");
  const { PassThrough } = require("stream");

  return new Promise<Buffer>((resolve, reject) => {
    const buffers: Buffer[] = [];
    const passthrough = new PassThrough();
    passthrough.on("data", (chunk: Buffer) => buffers.push(chunk));
    passthrough.on("end", () => resolve(Buffer.concat(buffers)));
    passthrough.on("error", reject);

    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(passthrough);

    const projectName = (pkg.projectName || "Automation").replace(/\s+/g, "_");
    const version = "1.0.0";

    const projectJson = {
      name: projectName,
      description: pkg.description || "",
      main: "Main.xaml",
      dependencies: Object.fromEntries(
        (pkg.dependencies || []).map((d: string) => [d, "*"])
      ),
      schemaVersion: "4.0",
      studioVersion: "23.10.0",
      projectVersion: version,
      runtimeOptions: { autoDispose: false, netFrameworkLazyLoading: false },
    };
    archive.append(JSON.stringify(projectJson, null, 2), { name: "project.json" });

    const workflows = pkg.workflows || [];
    for (const wf of workflows) {
      const steps = wf.steps || [];
      let activities = "";
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        activities += `
        <ui:Comment DisplayName="Step ${i + 1}: ${escapeXml(step.activity || "Activity")}" Text="${escapeXml(step.notes || "")}" />`;
      }

      const xaml = `<?xml version="1.0" encoding="utf-8"?>
<Activity mc:Ignorable="sap sap2010" x:Class="${wf.name || "Workflow"}"
  xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:sap="http://schemas.microsoft.com/netfx/2009/xaml/activities/presentation"
  xmlns:sap2010="http://schemas.microsoft.com/netfx/2010/xaml/activities/presentation"
  xmlns:ui="http://schemas.uipath.com/workflow/activities"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
  <Sequence DisplayName="${escapeXml(wf.name || "Main Sequence")}">
    <Sequence.Variables />${activities}
  </Sequence>
</Activity>`;
      archive.append(xaml, { name: `${wf.name || "Workflow"}.xaml` });
    }

    const nuspecXml = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2010/07/nuspec.xsd">
  <metadata>
    <id>${projectName}</id>
    <version>${version}</version>
    <description>${escapeXml(pkg.description || projectName)}</description>
    <authors>CannonBall</authors>
  </metadata>
</package>`;
    archive.append(nuspecXml, { name: `${projectName}.nuspec` });

    archive.finalize();
  }) as any;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export async function pushToUiPath(pkg: any): Promise<{ success: boolean; message: string }> {
  const config = await getUiPathConfig();
  if (!config) {
    return { success: false, message: "UiPath Orchestrator is not configured. Go to Admin > Integrations to set it up." };
  }

  try {
    const token = await getAccessToken(config);

    const nupkgBuffer = await buildNuGetPackage(pkg);

    const projectName = (pkg.projectName || "Automation").replace(/\s+/g, "_");
    const fileName = `${projectName}.1.0.0.nupkg`;

    const boundary = `----FormBoundary${Date.now()}`;
    const header = `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${fileName}"\r\nContent-Type: application/octet-stream\r\n\r\n`;
    const footer = `\r\n--${boundary}--\r\n`;

    const headerBuf = Buffer.from(header, "utf-8");
    const footerBuf = Buffer.from(footer, "utf-8");
    const body = Buffer.concat([headerBuf, nupkgBuffer, footerBuf]);

    const uploadUrl = `https://cloud.uipath.com/${config.orgName}/${config.tenantName}/orchestrator_/odata/Processes/UiPath.Server.Configuration.OData.UploadPackage`;

    const uploadRes = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
      },
      body,
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      return { success: false, message: `Upload failed (${uploadRes.status}): ${errText.slice(0, 300)}` };
    }

    return { success: true, message: `Package "${projectName}" uploaded to UiPath Orchestrator (${config.orgName}/${config.tenantName}).` };
  } catch (err: any) {
    return { success: false, message: `Push failed: ${err.message || String(err)}` };
  }
}

export async function testUiPathConnection(): Promise<{ success: boolean; message: string }> {
  const config = await getUiPathConfig();
  if (!config) {
    return { success: false, message: "UiPath Orchestrator is not configured." };
  }

  try {
    const token = await getAccessToken(config);
    const foldersUrl = `https://cloud.uipath.com/${config.orgName}/${config.tenantName}/orchestrator_/odata/Folders?$top=1`;
    const res = await fetch(foldersUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      return { success: false, message: `Connection failed (${res.status}). Check your credentials.` };
    }
    return { success: true, message: "Connected to UiPath Orchestrator successfully." };
  } catch (err: any) {
    return { success: false, message: `Connection failed: ${err.message || String(err)}` };
  }
}
