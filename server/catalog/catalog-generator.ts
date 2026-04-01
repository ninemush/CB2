import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import {
  ACTIVITY_DEFINITIONS_REGISTRY,
  getRegistryPackageIds,
  getTotalRegistryActivityCount,
  type ActivityPropertyDef,
  type ActivityDef,
} from "./activity-definitions";
import type {
  CatalogProperty,
  CatalogActivity,
  CatalogPackage,
  ActivityCatalog,
} from "./catalog-service";

const CATALOG_VERSION = "2.0.0";

const PACKAGE_NAMESPACE_DEFAULTS: Record<string, { prefix: string; clrNamespace: string; assembly: string }> = {
  "UiPath.UIAutomation.Activities": { prefix: "ui", clrNamespace: "UiPath.Core.Activities", assembly: "UiPath.UIAutomation.Activities" },
  "UiPath.System.Activities": { prefix: "ui", clrNamespace: "UiPath.Core.Activities", assembly: "UiPath.System.Activities" },
  "UiPath.WebAPI.Activities": { prefix: "uweb", clrNamespace: "UiPath.WebAPI.Activities", assembly: "UiPath.WebAPI.Activities" },
  "UiPath.DataService.Activities": { prefix: "uds", clrNamespace: "UiPath.DataService.Activities", assembly: "UiPath.DataService.Activities" },
  "UiPath.Persistence.Activities": { prefix: "upers", clrNamespace: "UiPath.Persistence.Activities", assembly: "UiPath.Persistence.Activities" },
  "UiPath.Excel.Activities": { prefix: "uexcel", clrNamespace: "UiPath.Excel.Activities", assembly: "UiPath.Excel.Activities" },
  "UiPath.Mail.Activities": { prefix: "umail", clrNamespace: "UiPath.Mail.Activities", assembly: "UiPath.Mail.Activities" },
  "UiPath.Database.Activities": { prefix: "udb", clrNamespace: "UiPath.Database.Activities", assembly: "UiPath.Database.Activities" },
  "UiPath.MLActivities": { prefix: "uml", clrNamespace: "UiPath.MLActivities", assembly: "UiPath.MLActivities" },
  "UiPath.IntelligentOCR.Activities": { prefix: "uocr", clrNamespace: "UiPath.IntelligentOCR.Activities", assembly: "UiPath.IntelligentOCR.Activities" },
  "System.Activities": { prefix: "", clrNamespace: "System.Activities", assembly: "System.Activities" },
  "UiPath.PDF.Activities": { prefix: "updf", clrNamespace: "UiPath.PDF.Activities", assembly: "UiPath.PDF.Activities" },
  "UiPath.Word.Activities": { prefix: "uword", clrNamespace: "UiPath.Word.Activities", assembly: "UiPath.Word.Activities" },
  "UiPath.GSuite.Activities": { prefix: "ugs", clrNamespace: "UiPath.GSuite.Activities", assembly: "UiPath.GSuite.Activities" },
  "UiPath.MicrosoftOffice365.Activities": { prefix: "uo365", clrNamespace: "UiPath.MicrosoftOffice365.Activities", assembly: "UiPath.MicrosoftOffice365.Activities" },
  "UiPath.Testing.Activities": { prefix: "utest", clrNamespace: "UiPath.Testing.Activities", assembly: "UiPath.Testing.Activities" },
  "UiPath.Form.Activities": { prefix: "uform", clrNamespace: "UiPath.Form.Activities", assembly: "UiPath.Form.Activities" },
  "UiPath.Cryptography.Activities": { prefix: "ucrypt", clrNamespace: "UiPath.Cryptography.Activities", assembly: "UiPath.Cryptography.Activities" },
  "UiPath.ComplexScenarios.Activities": { prefix: "ucs", clrNamespace: "UiPath.ComplexScenarios.Activities", assembly: "UiPath.ComplexScenarios.Activities" },
  "UiPath.AmazonWebServices.Activities": { prefix: "uaws", clrNamespace: "UiPath.AmazonWebServices.Activities", assembly: "UiPath.AmazonWebServices.Activities" },
  "UiPath.Amazon.Textract.Activities": { prefix: "utxt", clrNamespace: "UiPath.Amazon.Textract.Activities", assembly: "UiPath.Amazon.Textract.Activities" },
  "UiPath.Amazon.Comprehend.Activities": { prefix: "ucmp", clrNamespace: "UiPath.Amazon.Comprehend.Activities", assembly: "UiPath.Amazon.Comprehend.Activities" },
  "UiPath.Amazon.Rekognition.Activities": { prefix: "urek", clrNamespace: "UiPath.Amazon.Rekognition.Activities", assembly: "UiPath.Amazon.Rekognition.Activities" },
  "UiPath.Azure.Activities": { prefix: "uaz", clrNamespace: "UiPath.Azure.Activities", assembly: "UiPath.Azure.Activities" },
  "UiPath.AzureFormRecognizerV3.Activities": { prefix: "uafr", clrNamespace: "UiPath.AzureFormRecognizerV3.Activities", assembly: "UiPath.AzureFormRecognizerV3.Activities" },
  "UiPath.GoogleCloud.Activities": { prefix: "ugc", clrNamespace: "UiPath.GoogleCloud.Activities", assembly: "UiPath.GoogleCloud.Activities" },
  "UiPath.GoogleVision.Activities": { prefix: "ugv", clrNamespace: "UiPath.GoogleVision.Activities", assembly: "UiPath.GoogleVision.Activities" },
  "UiPath.Salesforce.Activities": { prefix: "usf", clrNamespace: "UiPath.Salesforce.Activities", assembly: "UiPath.Salesforce.Activities" },
  "UiPath.ServiceNow.Activities": { prefix: "usnow", clrNamespace: "UiPath.ServiceNow.Activities", assembly: "UiPath.ServiceNow.Activities" },
  "UiPath.Slack.Activities": { prefix: "uslack", clrNamespace: "UiPath.Slack.Activities", assembly: "UiPath.Slack.Activities" },
  "UiPath.Jira.Activities": { prefix: "ujira", clrNamespace: "UiPath.Jira.Activities", assembly: "UiPath.Jira.Activities" },
  "UiPath.MicrosoftTeams.Activities": { prefix: "uteams", clrNamespace: "UiPath.MicrosoftTeams.Activities", assembly: "UiPath.MicrosoftTeams.Activities" },
  "UiPath.FTP.Activities": { prefix: "uftp", clrNamespace: "UiPath.FTP.Activities", assembly: "UiPath.FTP.Activities" },
  "UiPath.Presentations.Activities": { prefix: "upres", clrNamespace: "UiPath.Presentations.Activities", assembly: "UiPath.Presentations.Activities" },
  "UiPath.Credentials.Activities": { prefix: "ucred", clrNamespace: "UiPath.Credentials.Activities", assembly: "UiPath.Credentials.Activities" },
  "UiPath.DocumentUnderstanding.Activities": { prefix: "udu", clrNamespace: "UiPath.DocumentUnderstanding.Activities", assembly: "UiPath.DocumentUnderstanding.Activities" },
  "UiPath.GenAI.Activities": { prefix: "ugenai", clrNamespace: "UiPath.GenAI.Activities", assembly: "UiPath.IntegrationService.Activities" },
  "UiPath.IntegrationService.Activities": { prefix: "uis", clrNamespace: "UiPath.IntegrationService.Activities", assembly: "UiPath.IntegrationService.Activities" },
  "UiPath.CommunicationsMining.Activities": { prefix: "ucm", clrNamespace: "UiPath.CommunicationsMining.Activities", assembly: "UiPath.CommunicationsMining.Activities" },
  "UiPath.WorkflowEvents.Activities": { prefix: "uwfe", clrNamespace: "UiPath.WorkflowEvents.Activities", assembly: "UiPath.WorkflowEvents.Activities" },
  "UiPath.Box.Activities": { prefix: "ubox", clrNamespace: "UiPath.Box.Activities", assembly: "UiPath.Box.Activities" },
  "UiPath.MicrosoftDynamics.Activities": { prefix: "udyn", clrNamespace: "UiPath.MicrosoftDynamics.Activities", assembly: "UiPath.MicrosoftDynamics.Activities" },
  "UiPath.Workday.Activities": { prefix: "uwd", clrNamespace: "UiPath.Workday.Activities", assembly: "UiPath.Workday.Activities" },
  "UiPath.Coupa.IntegrationService.Activities": { prefix: "ucoupa", clrNamespace: "UiPath.Coupa.IntegrationService.Activities", assembly: "UiPath.Coupa.IntegrationService.Activities" },
};

function convertProperty(p: ActivityPropertyDef): CatalogProperty {
  const result: CatalogProperty = {
    name: p.name,
    direction: p.direction,
    clrType: p.clrType,
    xamlSyntax: p.xamlSyntax,
    argumentWrapper: p.argumentWrapper,
    typeArguments: p.typeArguments,
    required: p.required,
  };
  if (p.validValues && p.validValues.length > 0) {
    result.validValues = p.validValues;
  }
  if (p.default !== undefined) {
    result.default = p.default;
  }
  return result;
}

function convertActivity(a: ActivityDef): CatalogActivity {
  const result: CatalogActivity = {
    className: a.className,
    displayName: a.displayName,
    browsable: a.browsable,
    processTypes: a.processTypes,
    properties: a.properties.map(convertProperty),
  };
  if (a.propertiesComplete) {
    result.propertiesComplete = true;
  }
  return result;
}

function resolveVersion(
  packageId: string,
  metadataPackages: Record<string, any> | null,
): { version: string; feedStatus: "verified" | "unverified"; preferred: string } {
  if (metadataPackages && metadataPackages[packageId]) {
    const entry = metadataPackages[packageId];
    const preferred = entry.preferred || entry.min || "1.0.0";
    const isVerified = !!entry.lastVerifiedAt && entry.verificationSource === "uipath-official-feed";
    return {
      version: preferred,
      feedStatus: isVerified ? "verified" : "unverified",
      preferred,
    };
  }
  return { version: "1.0.0", feedStatus: "unverified", preferred: "1.0.0" };
}

export interface GenerateCatalogOptions {
  preserveExisting?: boolean;
  existingCatalogPath?: string;
  metadataPath?: string;
  outputPath?: string;
  studioVersion?: string;
}

export function generateActivityCatalog(options: GenerateCatalogOptions = {}): ActivityCatalog {
  const {
    preserveExisting = true,
    existingCatalogPath = join(process.cwd(), "catalog", "activity-catalog.json"),
    metadataPath = join(process.cwd(), "catalog", "generation-metadata.json"),
    studioVersion = "25.10.7",
  } = options;

  let metadataPackages: Record<string, any> | null = null;
  if (existsSync(metadataPath)) {
    try {
      const raw = JSON.parse(readFileSync(metadataPath, "utf-8"));
      metadataPackages = raw.packageVersionRanges || null;
    } catch (e) {}
  }

  let resolvedStudioVersion = studioVersion;
  if (existsSync(metadataPath)) {
    try {
      const raw = JSON.parse(readFileSync(metadataPath, "utf-8"));
      if (raw.studioTarget?.version) {
        resolvedStudioVersion = raw.studioTarget.version;
      }
    } catch (e) {}
  }

  const existingPackageMap = new Map<string, CatalogPackage>();
  if (preserveExisting && existsSync(existingCatalogPath)) {
    try {
      const existingCatalog = JSON.parse(readFileSync(existingCatalogPath, "utf-8")) as ActivityCatalog;
      for (const pkg of existingCatalog.packages) {
        existingPackageMap.set(pkg.packageId, pkg);
      }
      console.log(`[Catalog Generator] Loaded ${existingPackageMap.size} existing packages from catalog`);
    } catch (e: any) {
      console.warn(`[Catalog Generator] Failed to load existing catalog: ${e.message}`);
    }
  }

  const packages: CatalogPackage[] = [];

  for (const [pkgId, existingPkg] of existingPackageMap) {
    const hasRegistryDef = ACTIVITY_DEFINITIONS_REGISTRY.some(r => r.packageId === pkgId);
    if (!hasRegistryDef) {
      const vInfo = resolveVersion(pkgId, metadataPackages);
      packages.push({
        ...existingPkg,
        version: vInfo.version,
        feedStatus: vInfo.feedStatus,
        preferredVersion: vInfo.preferred,
      });
    }
  }

  for (const regPkg of ACTIVITY_DEFINITIONS_REGISTRY) {
    const vInfo = resolveVersion(regPkg.packageId, metadataPackages);
    const existingPkg = existingPackageMap.get(regPkg.packageId);
    const nsDefaults = PACKAGE_NAMESPACE_DEFAULTS[regPkg.packageId];

    if (existingPkg) {
      const registryClassNames = new Set(regPkg.activities.map(a => a.className));
      const preservedExisting = existingPkg.activities.filter(a => !registryClassNames.has(a.className));
      const registryActivities = regPkg.activities.map(convertActivity);

      packages.push({
        packageId: regPkg.packageId,
        version: vInfo.version,
        feedStatus: vInfo.feedStatus,
        preferredVersion: vInfo.preferred,
        ...(nsDefaults ? { prefix: nsDefaults.prefix, clrNamespace: nsDefaults.clrNamespace, assembly: nsDefaults.assembly } : {}),
        activities: [...preservedExisting, ...registryActivities],
      });
    } else {
      packages.push({
        packageId: regPkg.packageId,
        version: vInfo.version,
        feedStatus: vInfo.feedStatus,
        preferredVersion: vInfo.preferred,
        ...(nsDefaults ? { prefix: nsDefaults.prefix, clrNamespace: nsDefaults.clrNamespace, assembly: nsDefaults.assembly } : {}),
        activities: regPkg.activities.map(convertActivity),
      });
    }
  }

  packages.sort((a, b) => {
    const order = [
      "System.Activities",
      "UiPath.System.Activities",
      "UiPath.UIAutomation.Activities",
    ];
    const aIdx = order.indexOf(a.packageId);
    const bIdx = order.indexOf(b.packageId);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.packageId.localeCompare(b.packageId);
  });

  const now = new Date().toISOString();
  const catalog: ActivityCatalog = {
    catalogVersion: CATALOG_VERSION,
    generatedAt: now,
    lastVerifiedAt: now,
    studioVersion: resolvedStudioVersion,
    packages,
  };

  const totalActivities = packages.reduce((sum, p) => sum + p.activities.length, 0);
  console.log(`[Catalog Generator] Generated catalog: ${packages.length} packages, ${totalActivities} activities, studio ${resolvedStudioVersion}`);

  return catalog;
}

export function generateAndWriteCatalog(options: GenerateCatalogOptions = {}): { packages: number; activities: number; path: string } {
  const outputPath = options.outputPath || join(process.cwd(), "catalog", "activity-catalog.json");
  const catalog = generateActivityCatalog(options);

  writeFileSync(outputPath, JSON.stringify(catalog, null, 2), "utf-8");

  const totalActivities = catalog.packages.reduce((sum, p) => sum + p.activities.length, 0);
  console.log(`[Catalog Generator] Wrote catalog to ${outputPath}`);

  return {
    packages: catalog.packages.length,
    activities: totalActivities,
    path: outputPath,
  };
}

if (process.argv[1]?.endsWith("catalog-generator.ts") || process.argv[1]?.endsWith("catalog-generator.js")) {
  const result = generateAndWriteCatalog();
  console.log(`Done: ${result.packages} packages, ${result.activities} activities → ${result.path}`);
}
