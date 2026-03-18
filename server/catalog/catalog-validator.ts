export interface CatalogValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

const VALID_DIRECTIONS = new Set(["In", "Out", "InOut", "None"]);
const VALID_XAML_SYNTAX = new Set(["child-element", "attribute"]);
const VALID_ARGUMENT_WRAPPERS = new Set(["InArgument", "OutArgument", "InOutArgument"]);

function isIso8601(s: string): boolean {
  const d = new Date(s);
  return !isNaN(d.getTime());
}

function isSemver(s: string): boolean {
  return /^\d+\.\d+\.\d+/.test(s);
}

export function validateCatalog(catalog: any): CatalogValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!catalog || typeof catalog !== "object") {
    return { valid: false, errors: ["Catalog is not a valid object"], warnings };
  }

  if (!catalog.catalogVersion || typeof catalog.catalogVersion !== "string") {
    errors.push("Missing or invalid catalogVersion");
  }

  if (!catalog.generatedAt || typeof catalog.generatedAt !== "string") {
    errors.push("Missing or invalid generatedAt");
  } else if (!isIso8601(catalog.generatedAt)) {
    errors.push(`generatedAt "${catalog.generatedAt}" is not a valid ISO 8601 timestamp`);
  } else {
    const age = Date.now() - new Date(catalog.generatedAt).getTime();
    const fortyEightHours = 48 * 60 * 60 * 1000;
    if (age > fortyEightHours) {
      warnings.push(`Catalog generatedAt is older than 48 hours — consider regenerating`);
    }
  }

  if (!catalog.studioVersion || typeof catalog.studioVersion !== "string") {
    errors.push("Missing or invalid studioVersion");
  } else if (!isSemver(catalog.studioVersion)) {
    errors.push(`studioVersion "${catalog.studioVersion}" is not valid semver`);
  }

  if (!Array.isArray(catalog.packages) || catalog.packages.length === 0) {
    errors.push("packages must be a non-empty array");
    return { valid: errors.length === 0, errors, warnings };
  }

  const seenPackageIds = new Set<string>();

  for (let pi = 0; pi < catalog.packages.length; pi++) {
    const pkg = catalog.packages[pi];
    const pkgLabel = `packages[${pi}] (${pkg?.packageId || "unknown"})`;

    if (!pkg || typeof pkg !== "object") {
      errors.push(`${pkgLabel}: not a valid object`);
      continue;
    }

    if (typeof pkg.packageId !== "string") {
      errors.push(`${pkgLabel}: missing packageId`);
    } else if (pkg.packageId === "") {
      errors.push(`${pkgLabel}: packageId must not be empty`);
    } else {
      if (seenPackageIds.has(pkg.packageId)) {
        errors.push(`${pkgLabel}: duplicate packageId "${pkg.packageId}"`);
      }
      seenPackageIds.add(pkg.packageId);
    }

    if (typeof pkg.version !== "string" || pkg.version === "") {
      errors.push(`${pkgLabel}: missing or empty version`);
    } else if (!isSemver(pkg.version)) {
      errors.push(`${pkgLabel}: invalid version format "${pkg.version}"`);
    }

    if (!Array.isArray(pkg.activities) || pkg.activities.length === 0) {
      errors.push(`${pkgLabel}: activities must be a non-empty array`);
      continue;
    }

    const seenClassNames = new Set<string>();

    for (let ai = 0; ai < pkg.activities.length; ai++) {
      const act = pkg.activities[ai];
      const actLabel = `${pkgLabel}.activities[${ai}]`;

      if (!act || typeof act !== "object") {
        errors.push(`${actLabel}: not a valid object`);
        continue;
      }

      if (!act.className || typeof act.className !== "string") {
        errors.push(`${actLabel}: missing className`);
      } else {
        if (seenClassNames.has(act.className)) {
          warnings.push(`${actLabel}: duplicate className "${act.className}" in package`);
        }
        seenClassNames.add(act.className);
      }

      if (!act.displayName || typeof act.displayName !== "string") {
        errors.push(`${actLabel}: missing displayName`);
      }
      if (typeof act.browsable !== "boolean") {
        errors.push(`${actLabel}: browsable must be boolean`);
      }

      if (!Array.isArray(act.processTypes) || act.processTypes.length === 0) {
        warnings.push(`${actLabel}: processTypes should be a non-empty array`);
      }

      if (!Array.isArray(act.properties)) {
        errors.push(`${actLabel}: properties must be an array`);
        continue;
      }

      for (let propI = 0; propI < act.properties.length; propI++) {
        const prop = act.properties[propI];
        const propLabel = `${actLabel}.properties[${propI}] (${prop?.name || "unknown"})`;

        if (!prop || typeof prop !== "object") {
          errors.push(`${propLabel}: not a valid object`);
          continue;
        }

        if (!prop.name || typeof prop.name !== "string") {
          errors.push(`${propLabel}: missing name`);
        }

        if (!VALID_DIRECTIONS.has(prop.direction)) {
          errors.push(`${propLabel}: direction must be one of In/Out/InOut/None, got "${prop.direction}"`);
        }

        if (!VALID_XAML_SYNTAX.has(prop.xamlSyntax)) {
          errors.push(`${propLabel}: xamlSyntax must be "child-element" or "attribute", got "${prop.xamlSyntax}"`);
        }

        if (prop.argumentWrapper !== null) {
          if (!VALID_ARGUMENT_WRAPPERS.has(prop.argumentWrapper)) {
            errors.push(`${propLabel}: argumentWrapper must be InArgument/OutArgument/InOutArgument or null, got "${prop.argumentWrapper}"`);
          }

          if (prop.argumentWrapper === "OutArgument" && prop.direction !== "Out" && prop.direction !== "InOut") {
            errors.push(`${propLabel}: OutArgument wrapper requires direction Out or InOut, got "${prop.direction}"`);
          }

          if (prop.argumentWrapper === "InArgument" && prop.direction === "Out") {
            errors.push(`${propLabel}: InArgument wrapper is incompatible with direction Out`);
          }

          if (prop.argumentWrapper === "InOutArgument" && prop.direction !== "InOut") {
            warnings.push(`${propLabel}: InOutArgument wrapper but direction is "${prop.direction}"`);
          }
        }

        if (prop.xamlSyntax === "attribute" && prop.argumentWrapper !== null) {
          errors.push(`${propLabel}: attribute syntax requires argumentWrapper to be null, got "${prop.argumentWrapper}"`);
        }

        if (prop.xamlSyntax === "child-element" && prop.argumentWrapper === null) {
          warnings.push(`${propLabel}: child-element syntax usually requires an argumentWrapper`);
        }

        if (typeof prop.required !== "boolean") {
          errors.push(`${propLabel}: required must be boolean`);
        }

        if (!prop.clrType || typeof prop.clrType !== "string") {
          errors.push(`${propLabel}: missing clrType`);
        }
      }
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}
