import { readFileSync } from "fs";
import { join } from "path";
import type { CatalogProperty, CatalogActivity } from "./catalog-service";

const NOISE_PROPERTY_NAMES = new Set([
  "TelemetryName",
  "TelemetryOperation",
  "RuntimeLoggerFactory",
  "ScopeIdentifier",
  "RequiresInitialization",
  "ForceRefreshView",
  "Version",
]);

interface DllProperty {
  name: string;
  direction: "In" | "Out" | "InOut" | "None";
  clrType: string;
  xamlSyntax: "attribute" | "child-element";
  argumentWrapper: string | null;
  typeArguments: string | null;
  required: boolean;
  default: string | null;
  validValues?: string[];
}

interface DllActivity {
  className: string;
  namespace: string;
  displayName: string;
  assembly: string;
  properties: DllProperty[];
}

interface DllPackage {
  packageId: string;
  preferredVersion: string;
  activityCount: number;
  activities: DllActivity[];
}

interface DllExtract {
  generatedAt: string;
  packageCount: number;
  totalActivities: number;
  packages: DllPackage[];
}

export interface DllImportResult {
  packages: DllImportPackage[];
  stats: DllImportStats;
}

export interface DllImportPackage {
  packageId: string;
  activities: CatalogActivity[];
}

export interface DllImportStats {
  totalPackages: number;
  totalActivities: number;
  totalProperties: number;
  filteredNoiseProperties: number;
  displayNamesNormalized: number;
}

function splitPascalCase(name: string): string {
  let className = name;
  let prefix = "";

  if (/^N[A-Z]/.test(className) && className.length > 1) {
    prefix = "";
    className = className.substring(1);
  }

  const words = className
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .split(" ")
    .filter(w => w.length > 0);

  return words.join(" ");
}

function normalizeDisplayName(className: string, displayName: string): string {
  if (displayName !== className) {
    return displayName;
  }
  return splitPascalCase(className);
}

function convertDllProperty(prop: DllProperty): CatalogProperty | null {
  if (NOISE_PROPERTY_NAMES.has(prop.name)) {
    return null;
  }

  const result: CatalogProperty = {
    name: prop.name,
    direction: prop.direction,
    clrType: prop.clrType,
    xamlSyntax: prop.xamlSyntax,
    argumentWrapper: prop.argumentWrapper,
    typeArguments: prop.typeArguments,
    required: prop.required,
  };

  if (prop.validValues && prop.validValues.length > 0) {
    result.validValues = prop.validValues;
  }

  if (prop.default !== null && prop.default !== undefined) {
    result.default = prop.default;
  }

  return result;
}

function convertDllActivity(act: DllActivity): { activity: CatalogActivity; filteredCount: number } {
  let filteredCount = 0;
  const properties: CatalogProperty[] = [];

  for (const prop of act.properties) {
    const converted = convertDllProperty(prop);
    if (converted) {
      properties.push(converted);
    } else {
      filteredCount++;
    }
  }

  const displayName = normalizeDisplayName(act.className, act.displayName);

  const activity: CatalogActivity = {
    className: act.className,
    displayName,
    namespace: act.namespace,
    browsable: true,
    processTypes: ["general"],
    properties,
    emissionApproved: false,
  };

  return { activity, filteredCount };
}

export function loadDllExtract(path?: string): DllExtract {
  const filePath = path || join(process.cwd(), "catalog", "dll-metadata", "uipath-activity-metadata-from-dll-full.json");
  const raw = readFileSync(filePath, "utf-8").replace(/^\uFEFF/, "");
  return JSON.parse(raw) as DllExtract;
}

export function importDllMetadata(dllExtract: DllExtract): DllImportResult {
  const stats: DllImportStats = {
    totalPackages: 0,
    totalActivities: 0,
    totalProperties: 0,
    filteredNoiseProperties: 0,
    displayNamesNormalized: 0,
  };

  const packages: DllImportPackage[] = [];

  for (const dllPkg of dllExtract.packages) {
    const activities: CatalogActivity[] = [];

    for (const dllAct of dllPkg.activities) {
      const { activity, filteredCount } = convertDllActivity(dllAct);
      activities.push(activity);
      stats.totalProperties += activity.properties.length;
      stats.filteredNoiseProperties += filteredCount;
      if (dllAct.displayName === dllAct.className) {
        stats.displayNamesNormalized++;
      }
    }

    stats.totalActivities += activities.length;
    stats.totalPackages++;

    packages.push({
      packageId: dllPkg.packageId,
      activities,
    });
  }

  return { packages, stats };
}
