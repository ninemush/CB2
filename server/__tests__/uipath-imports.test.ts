import { describe, it, expect } from "vitest";

describe("UiPath Integration — import smoke test", () => {
  it("exports getAccessToken as a function", async () => {
    const mod = await import("../uipath-integration");
    expect(typeof mod.getAccessToken).toBe("function");
  });

  it("exports probeUiPathScopes as a function", async () => {
    const mod = await import("../uipath-integration");
    expect(typeof mod.probeUiPathScopes).toBe("function");
  });

  it("exports verifyUiPathScopes as a function", async () => {
    const mod = await import("../uipath-integration");
    expect(typeof mod.verifyUiPathScopes).toBe("function");
  });

  it("exports fetchUiPathFolders as a function", async () => {
    const mod = await import("../uipath-integration");
    expect(typeof mod.fetchUiPathFolders).toBe("function");
  });

  it("exports pushToUiPath as a function", async () => {
    const mod = await import("../uipath-integration");
    expect(typeof mod.pushToUiPath).toBe("function");
  });
});

describe("UiPath Integration — auth module import chain", () => {
  it("uipath-auth exports getAccessToken, tryAcquireResourceToken, and getHeaders", async () => {
    const authMod = await import("../uipath-auth");
    expect(typeof authMod.getAccessToken).toBe("function");
    expect(typeof authMod.tryAcquireResourceToken).toBe("function");
    expect(typeof authMod.getHeaders).toBe("function");
  });

  it("getAccessToken re-export from uipath-integration matches uipath-auth", async () => {
    const integration = await import("../uipath-integration");
    const auth = await import("../uipath-auth");
    expect(integration.getAccessToken).toBe(auth.getAccessToken);
  });

  it("fetchUiPathFolders can be called and returns a result (uses getAccessToken internally)", async () => {
    const mod = await import("../uipath-integration");
    const result = await mod.fetchUiPathFolders();
    expect(result).toHaveProperty("success");
    expect(typeof result.success).toBe("boolean");
  });
});
