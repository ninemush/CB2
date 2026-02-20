import { db } from "./db";
import { appSettings } from "@shared/schema";
import { eq } from "drizzle-orm";
import archiver from "archiver";
import { PassThrough } from "stream";

type UiPathConfig = {
  orgName: string;
  tenantName: string;
  clientId: string;
  clientSecret: string;
  scopes: string;
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
  const clientSecret = map.get("uipath_client_secret");
  const scopes = map.get("uipath_scopes") || "OR.Default";

  if (!orgName || !tenantName || !clientId || !clientSecret) return null;

  return { orgName, tenantName, clientId, clientSecret, scopes };
}

function extractOrgName(input: string): string {
  let val = input.trim();
  val = val.replace(/^https?:\/\//, "");
  val = val.replace(/^cloud\.uipath\.com\//, "");
  val = val.replace(/\/+$/, "");
  val = val.split("/")[0];
  return val.trim();
}

export async function saveUiPathConfig(config: { orgName: string; tenantName: string; clientId: string; clientSecret?: string; scopes?: string }): Promise<void> {
  const entries: { key: string; value: string }[] = [
    { key: "uipath_org_name", value: extractOrgName(config.orgName) },
    { key: "uipath_tenant_name", value: config.tenantName.trim() },
    { key: "uipath_client_id", value: config.clientId.trim() },
  ];

  if (config.clientSecret) {
    entries.push({ key: "uipath_client_secret", value: config.clientSecret.trim() });
  }

  if (config.scopes) {
    entries.push({ key: "uipath_scopes", value: config.scopes.trim() });
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

async function upsertSetting(key: string, value: string): Promise<void> {
  const existing = await db.select().from(appSettings).where(eq(appSettings.key, key));
  if (existing.length > 0) {
    await db.update(appSettings).set({ value, updatedAt: new Date() }).where(eq(appSettings.key, key));
  } else {
    await db.insert(appSettings).values({ key, value });
  }
}

export async function recordLastTestedAt(): Promise<void> {
  await upsertSetting("uipath_last_tested", new Date().toISOString());
}

export async function getLastTestedAt(): Promise<string | null> {
  const rows = await db.select().from(appSettings).where(eq(appSettings.key, "uipath_last_tested"));
  return rows.length > 0 ? rows[0].value : null;
}

async function getAccessToken(config: UiPathConfig): Promise<string> {
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: config.scopes,
  });

  const res = await fetch("https://cloud.uipath.com/identity_/connect/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`UiPath auth failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function buildNuGetPackage(pkg: any): Promise<Buffer> {

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
  });
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

export async function testUiPathConnection(): Promise<{ success: boolean; message: string; errorType?: string }> {
  const config = await getUiPathConfig();
  if (!config) {
    return { success: false, message: "UiPath Orchestrator is not configured.", errorType: "not_configured" };
  }

  try {
    const token = await getAccessToken(config);
    const foldersUrl = `https://cloud.uipath.com/${config.orgName}/${config.tenantName}/orchestrator_/odata/Folders?$top=1`;
    const res = await fetch(foldersUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const errText = await res.text();
      if (res.status === 403) {
        return { success: false, message: "Access denied. The App ID may not have the required scopes granted. Check your External Application settings in UiPath Cloud and ensure the correct scopes are selected.", errorType: "forbidden" };
      }
      if (res.status === 404) {
        return { success: false, message: "Organization or Tenant not found. Double-check the Organization Name and Tenant Name match your UiPath Cloud URL exactly.", errorType: "not_found" };
      }
      return { success: false, message: `Connection failed (${res.status}): ${errText.slice(0, 200)}`, errorType: "unknown" };
    }
    await recordLastTestedAt();
    return { success: true, message: "Connected to UiPath Orchestrator successfully." };
  } catch (err: any) {
    const msg = err.message || String(err);
    if (msg.includes("invalid_scope")) {
      return { success: false, message: "Invalid scopes. The scopes you selected must match the scopes granted to your External Application in UiPath Cloud. Go to Admin > External Applications, edit your app, and verify the selected scopes.", errorType: "invalid_scope" };
    }
    if (msg.includes("invalid_client")) {
      return { success: false, message: "Invalid App ID or App Secret. Verify your credentials are correct. You may need to regenerate the App Secret in UiPath Cloud.", errorType: "invalid_client" };
    }
    return { success: false, message: `Connection failed: ${msg}`, errorType: "unknown" };
  }
}
