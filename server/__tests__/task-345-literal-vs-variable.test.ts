import { describe, it, expect } from "vitest";
import { smartBracketWrap, ensureBracketWrapped } from "../xaml/xaml-compliance";
import { normalizeStringToExpression, normalizePropertyToValueIntent } from "../xaml/expression-builder";

const declaredNames = new Set(["str_Status", "int_Count", "in_Config", "out_Result", "io_Data", "bool_IsActive", "myDeclaredVar"]);
const isDeclared = (name: string) => declaredNames.has(name);

describe("Task 345 — Literal vs Variable classification (context-aware bracket wrapping)", () => {

  describe("smartBracketWrap with isDeclared", () => {
    it("quotes single-word literal when not declared", () => {
      expect(smartBracketWrap("FinalizeStatus", isDeclared)).toBe('"FinalizeStatus"');
    });

    it("quotes single-word literal 'calendarName' when not declared", () => {
      expect(smartBracketWrap("calendarName", isDeclared)).toBe('"calendarName"');
    });

    it("brackets declared variable", () => {
      expect(smartBracketWrap("myDeclaredVar", isDeclared)).toBe("[myDeclaredVar]");
    });

    it("brackets prefixed variable even if not declared", () => {
      expect(smartBracketWrap("str_Status", isDeclared)).toBe("[str_Status]");
    });

    it("still passes through booleans", () => {
      expect(smartBracketWrap("True", isDeclared)).toBe("True");
      expect(smartBracketWrap("False", isDeclared)).toBe("False");
    });

    it("still passes through numbers", () => {
      expect(smartBracketWrap("42", isDeclared)).toBe("42");
    });

    it("still passes through already-wrapped expressions", () => {
      expect(smartBracketWrap("[str_Status]", isDeclared)).toBe("[str_Status]");
    });

    it("still passes through quoted strings", () => {
      expect(smartBracketWrap('"Hello World"', isDeclared)).toBe('"Hello World"');
    });

    it("backwards compatible: without isDeclared, single-word gets bracketed", () => {
      expect(smartBracketWrap("FinalizeStatus")).toBe("[FinalizeStatus]");
    });
  });

  describe("ensureBracketWrapped with isDeclared", () => {
    it("quotes single-word literal when not declared", () => {
      expect(ensureBracketWrapped("FinalizeStatus", isDeclared)).toBe('"FinalizeStatus"');
    });

    it("brackets declared variable", () => {
      expect(ensureBracketWrapped("str_Status", isDeclared)).toBe("[str_Status]");
    });

    it("brackets in_ prefixed argument", () => {
      expect(ensureBracketWrapped("in_Config", isDeclared)).toBe("[in_Config]");
    });

    it("still passes through booleans", () => {
      expect(ensureBracketWrapped("True", isDeclared)).toBe("True");
      expect(ensureBracketWrapped("False", isDeclared)).toBe("False");
    });
  });

  describe("normalizeStringToExpression with isDeclared", () => {
    it("quotes undeclared single-word literal", () => {
      expect(normalizeStringToExpression("FinalizeStatus", isDeclared)).toBe('"FinalizeStatus"');
    });

    it("brackets declared variable", () => {
      expect(normalizeStringToExpression("myDeclaredVar", isDeclared)).toBe("[myDeclaredVar]");
    });

    it("brackets prefixed variable regardless of registry", () => {
      expect(normalizeStringToExpression("str_Status", isDeclared)).toBe("[str_Status]");
      expect(normalizeStringToExpression("int_Count", isDeclared)).toBe("[int_Count]");
    });

    it("brackets in_/out_/io_ prefixed arguments", () => {
      expect(normalizeStringToExpression("in_Config", isDeclared)).toBe("[in_Config]");
      expect(normalizeStringToExpression("out_Result", isDeclared)).toBe("[out_Result]");
      expect(normalizeStringToExpression("io_Data", isDeclared)).toBe("[io_Data]");
    });

    it("passes through booleans", () => {
      expect(normalizeStringToExpression("True", isDeclared)).toBe("True");
      expect(normalizeStringToExpression("False", isDeclared)).toBe("False");
    });

    it("passes through quoted strings", () => {
      expect(normalizeStringToExpression('"Hello"', isDeclared)).toBe('"Hello"');
    });

    it("passes through numbers", () => {
      expect(normalizeStringToExpression("42", isDeclared)).toBe("42");
    });

    it("quotes enum-like value 'Information' when not declared", () => {
      expect(normalizeStringToExpression("Information", isDeclared)).toBe('"Information"');
    });

    it("backwards compatible: without isDeclared, single-word gets bracketed", () => {
      expect(normalizeStringToExpression("FinalizeStatus")).toBe("[FinalizeStatus]");
    });
  });

  describe("normalizePropertyToValueIntent with isDeclared", () => {
    it("classifies undeclared single-word as literal", () => {
      const result = normalizePropertyToValueIntent("FinalizeStatus", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("literal");
      expect(result).toHaveProperty("value", "FinalizeStatus");
    });

    it("classifies declared non-prefixed variable as variable", () => {
      const result = normalizePropertyToValueIntent("myDeclaredVar", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("variable");
      expect(result).toHaveProperty("name", "myDeclaredVar");
    });

    it("classifies prefixed variable as variable", () => {
      const result = normalizePropertyToValueIntent("str_Status", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("variable");
      expect(result).toHaveProperty("name", "str_Status");
    });

    it("classifies in_Config as variable", () => {
      const result = normalizePropertyToValueIntent("in_Config", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("variable");
      expect(result).toHaveProperty("name", "in_Config");
    });

    it("classifies boolean literal", () => {
      const result = normalizePropertyToValueIntent("True", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("literal");
      expect(result).toHaveProperty("value", "True");
    });

    it("classifies number literal", () => {
      const result = normalizePropertyToValueIntent("42", undefined, undefined, undefined, isDeclared);
      expect(result.type).toBe("literal");
      expect(result).toHaveProperty("value", "42");
    });
  });
});
