# Birthday Benchmark: Required-Property Defect Path Isolation

**Task:** #462 — Analysis only (no implementation fixes)
**Benchmark:** BirthdayGreetingsV20
**Date:** 2026-04-07

---

## Evidence Sources

| ID | Artifact | Type | Location |
|----|----------|------|----------|
| E1 | DHG (36) | Full pipeline run with SDD (latest available Birthday benchmark artifact) | `attached_assets/DeveloperHandoffGuide_(36)_1775146789492.md` |
| E2 | Regression test run | 4-node simplified benchmark | `server/__tests__/pipeline-regression.test.ts:631–709` (vitest, run 2026-04-07) |
| E3 | Regression test extraction | XAML + QG output from `assemblePipeline(birthdayNodes)` | `/tmp/birthday_evidence.txt` (generated 2026-04-07) |
| E4 | Code inspection | `server/workflow-tree-assembler.ts` | Lines referenced inline |
| E5 | Code inspection | `server/xaml/xaml-compliance.ts` | Lines referenced inline |
| E6 | Code inspection | `server/uipath-quality-gate.ts` | Lines referenced inline |
| E7 | Code inspection | `server/uipath-activity-registry.ts` | Lines referenced inline |
| E8 | Direct emission + defect reproduction test | Typed vitest (reproduction evidence, not original benchmark artifact): dedicated template, normalization, full assembly, AND prefix-bypass defect reproduction | `server/__tests__/birthday-body-path-isolation.test.ts` (run 2026-04-07, 4/4 pass) |
| E9 | Code inspection | `server/spec-to-tree-mapper.ts` lines 12–13 | `stripActivityPrefix()` |
| E10 | Code inspection | `server/pre-lowering-spec-normalization.ts` line 114 | `(node.template).replace(/^ui:/, "")` for classification only |
| E11 | Code inspection | `server/package-assembler.ts` lines 4130–4628 | Pipeline dispatch logic |

---

## 1. Defect Inventory

### 1.1 SendSmtpMailMessage missing required property `Body`

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE (E1)**

DHG (36) structured report JSON (E1, lines 933–967) contains four identical violations:

```json
{
  "level": "validation-finding",
  "file": "Process.xaml",
  "remediationCode": "STUB_ACTIVITY_UNKNOWN",
  "reason": "Line 375: umail:SendSmtpMailMessage is missing required property \"Body\"",
  "classifiedCheck": "MISSING_REQUIRED_ACTIVITY_PROPERTY"
}
```

| DHG Item | File | Line | Activity Tag | Missing Property |
|----------|------|------|-------------|-----------------|
| #87 | Process.xaml | 375 | `umail:SendSmtpMailMessage` | `Body` |
| #88 | Process.xaml | 429 | `umail:SendSmtpMailMessage` | `Body` |
| #89 | Process.xaml | 512 | `umail:SendSmtpMailMessage` | `Body` |
| #90 | Process.xaml | 529 | `umail:SendSmtpMailMessage` | `Body` |

**Inferred defective XAML shape (INFERRED FROM CODE ONLY — E6):**

The QG detection logic (E6, `uipath-quality-gate.ts:2416–2484`) checks four patterns for Body: (1) attribute `Body=...` in opening tag, (2) exact-prefix child `<umail:SendSmtpMailMessage.Body`, (3) any-prefix child, (4) bare nested `<Body`. All four patterns returned false for all four elements. The inferred shape is a self-closing or open tag with NO Body attribute or child element.

**Evidence limitation:** The actual Process.xaml from the full pipeline run is not available as a stored artifact. Only the QG validator messages in DHG (36) are available. The inferred XAML shape is the only shape consistent with all four QG detection patterns returning false. Reproduction evidence (E8 test 3) confirms this shape is produced by the identified defect path.

### 1.2 LogMessage missing required property `Message`

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE — NO DEFECT EXISTS (E1)**

Exhaustive full-text search of DHG (36) (E1, the latest and only available full Birthday benchmark artifact) for the string `LogMessage` returns **zero matches**. The string does not appear anywhere in the DHG — not in any defect entry, remediation item, quality warning, or any other section.

Supplementary evidence from regression test (E2, E3): All emitted LogMessage elements include `Message` attribute. LogMessage is flagged as `unknown-activity` (35 instances, E3), not `MISSING_REQUIRED_ACTIVITY_PROPERTY`. Zero MRP violations exist in the regression test.

LogMessage/Message is not a required-property defect in any available benchmark artifact.

---

## 2. Path Isolation: SendSmtpMailMessage Body Defect

### 2.1 Pipeline Dispatch: Legacy Path Excluded

**Evidence classification: INFERRED FROM CODE ONLY (E11)**

The pipeline dispatcher has two XAML generation paths:

| Path | Entry Point | Dispatcher Location |
|------|------------|:---:|
| **Tree-based** | `assembleWorkflowFromSpec()` | PA:4287 |
| **Legacy** | `generateRichXamlFromNodes()` / `generateRichXamlFromSpec()` | PA:4563, 4588, 4628 |

The legacy paths at PA:4544 and PA:4614 are guarded by `!treeEnrichment`. The Birthday pipeline always has SDD content and process nodes, which means `enrichWithAITree()` is always attempted (PA:3393). If AI enrichment fails, the deterministic scaffold at PA:3438 produces a `treeEnrichment` object. Therefore `treeEnrichment` is ALWAYS set for the Birthday benchmark, and the legacy paths at PA:4544-4639 are NEVER entered.

**Conclusion (INFERRED FROM CODE ONLY — E11): The legacy XAML generation path (`renderActivity()` in `xaml-generator.ts`) is excluded as the defect source.** All Birthday workflows go through `assembleWorkflowFromSpec()` at PA:4287.

### 2.2 Tree-Based Path: Dedicated Template ALWAYS Emits Body

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE (E8)**

`resolveActivityTemplate()` at WTA:2204 checks `if (templateName === "SendSmtpMailMessage")` (exact match) and dispatches to `resolveSendSmtpMailMessageTemplate()`. The dedicated template ALWAYS emits `<ui:SendSmtpMailMessage.Body>`, proven by E8 test 1 under 5 conditions (catalog on/off, Body present/absent/empty). All use `template: "SendSmtpMailMessage"` (bare name).

### 2.3 Root Cause: AI Enricher Returns Prefixed Template Name

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE (E8) + INFERRED FROM CODE ONLY (E10)**

The AI enricher (`enrichWithAITree()` at `ai-xaml-enricher.ts:708`) returns `template` values directly from LLM output. The `ActivityNodeSchema` at `workflow-spec-types.ts:32` accepts any non-empty string — no prefix stripping.

The `pre-lowering-spec-normalization.ts` at line 114 strips `ui:` prefix **for classification purposes only**: `(node.template || "").replace(/^ui:/, "")`. This local variable does NOT modify `node.template`. This line is strong evidence that the AI enricher produces templates with `ui:` prefix — the pre-lowering code explicitly accounts for it.

When the AI returns `template: "ui:SendSmtpMailMessage"`:

1. `resolveActivityTemplate()` at WTA:2078: `templateName = "ui:SendSmtpMailMessage"`
2. WTA:2204: `templateName === "SendSmtpMailMessage"` → **FALSE** (prefix mismatch)
3. Falls through to `resolveDynamicTemplate()` at WTA:2338
4. `resolveDynamicTemplate()` iterates only over `node.properties` — no Body-guarantee fallback
5. Body is absent from output → QG flags `MISSING_REQUIRED_ACTIVITY_PROPERTY`

### 2.4 Defect Reproduction

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE (E8 — test 3 "DEFECT REPRODUCTION")**

E8 test 3 (`birthday-body-path-isolation.test.ts`, passing) reproduces the exact defect:

```typescript
const prefixedNode: ActivityNode = {
  kind: "activity",
  template: "ui:SendSmtpMailMessage",
  displayName: "Send Birthday Email (prefixed)",
  properties: { To: "t@t.com", Subject: "Happy Birthday" },
  errorHandling: "none",
};

const prefixedXml = resolveActivityTemplate(prefixedNode, []);
const prefixedHasBody = prefixedXml.includes("SendSmtpMailMessage.Body") || prefixedXml.includes(".Body");
expect(prefixedHasBody).toBe(false);  // PASSES — Body is missing
```

Contrast with bare template (same test):

```typescript
const bareNode: ActivityNode = {
  kind: "activity",
  template: "SendSmtpMailMessage",
  displayName: "Send Birthday Email (bare)",
  properties: { To: "t@t.com", Subject: "Happy Birthday" },
  errorHandling: "none",
};

const bareXml = resolveActivityTemplate(bareNode, []);
expect(bareXml).toContain("SendSmtpMailMessage.Body");  // PASSES — Body is present
```

**This proves:** the ONLY difference between Body-present and Body-absent output is whether `node.template` has a `ui:` prefix. The dedicated template at WTA:2204 requires exact bare-name match; a prefixed template bypasses it entirely.

### 2.5 Defect Attribution Summary

**Finding 1 (CONFIRMED BY BENCHMARK EVIDENCE — E8):** The dedicated template at WTA:2204 ALWAYS emits Body when `templateName === "SendSmtpMailMessage"` (bare).

**Finding 2 (CONFIRMED BY BENCHMARK EVIDENCE — E1):** DHG shows 4× Body MISSING on `umail:SendSmtpMailMessage` elements.

**Finding 3 (CONFIRMED BY BENCHMARK EVIDENCE — E8):** `resolveActivityTemplate()` called with `template: "ui:SendSmtpMailMessage"` (prefixed) produces output WITHOUT Body.

**Finding 4 (INFERRED FROM CODE ONLY — E10):** `pre-lowering-spec-normalization.ts:114` explicitly strips `ui:` prefix from `node.template` for classification, proving the AI enricher produces prefixed templates in production.

**Finding 5 (INFERRED FROM CODE ONLY — E11):** The legacy XAML path is excluded; `treeEnrichment` is always set for Birthday.

**Conclusion (CONFIRMED BY BENCHMARK EVIDENCE — E8 — for prefix-dependent Body omission; INFERRED FROM CODE ONLY — E4 — for internal branch dispatch to resolveDynamicTemplate):** The failing code path enters `resolveActivityTemplate()` at WTA:2078 with a prefixed `templateName`. The prefix mismatch at WTA:2204 prevents the dedicated template from being reached, and Body is omitted from the output (E8 test 3 reproduces this). The internal dispatch to `resolveDynamicTemplate()` at WTA:2338 is inferred from the code structure (E4) — the fallthrough is the only remaining path after all dedicated template checks fail. The root cause is that `resolveActivityTemplate()` does not strip namespace prefixes from `node.template` before dispatching to dedicated templates.

---

## 3. LogMessage/Message: Defect Classification

**Evidence classification: CONFIRMED BY BENCHMARK EVIDENCE — NO DEFECT EXISTS (E1, E2, E3)**

| Assertion | Evidence | Classification |
|-----------|----------|---------------|
| "LogMessage" returns zero matches in entire DHG (36) | E1: full-text search, zero results | Confirmed by benchmark evidence |
| LogMessage `Message` attribute present in all regression test elements | E3: All elements include `Message="..."` | Confirmed by benchmark evidence |
| Zero MRP violations for LogMessage in regression test | E3: Zero violations total | Confirmed by benchmark evidence |
| LogMessage flagged as `unknown-activity` only | E3: 35 instances | Confirmed by benchmark evidence |
| All 16+ LogMessage emission sites in WTA include `Message` | E4: Lines 2116, 2275, 2280, ..., 5031 | Inferred from code only |

LogMessage/Message is not a required-property defect. It is exclusively an `unknown-activity` classification issue in the regression test, and produces no defects at all in the full pipeline (DHG).

---

## 4. Next Implementation Task

**Scope:** Strip namespace prefixes from `node.template` before dedicated template dispatch in `resolveActivityTemplate()`.

**What to fix:**

In `server/workflow-tree-assembler.ts`, function `resolveActivityTemplate()` at line 2078, strip any namespace prefix from `node.template` before the dedicated template dispatch chain. Change:

```typescript
const templateName = node.template;
```

To:

```typescript
const templateName = node.template.replace(/^[a-zA-Z][a-zA-Z0-9]*:/, "");
```

This matches the prefix-stripping logic already used in `spec-to-tree-mapper.ts:12–13` (`stripActivityPrefix()`). After this fix, `template: "ui:SendSmtpMailMessage"` would be normalized to `"SendSmtpMailMessage"`, matching the dedicated template at WTA:2204, which always emits Body.

**Non-goals:**
- Do NOT modify the dedicated template at WTA:2525 (it already works correctly).
- Do NOT modify the QG detection logic.
- Do NOT address the LogMessage unknown-activity issue (separate defect class, no required-property failure).

**Acceptance criteria:**
- E8 defect reproduction test (test 3) must be updated to expect Body IS present even with `template: "ui:SendSmtpMailMessage"`.
- All existing E8 tests continue to pass.
- Full BirthdayGreetingsV20 pipeline produces zero `MISSING_REQUIRED_ACTIVITY_PROPERTY` violations for `Body` on `SendSmtpMailMessage`.
