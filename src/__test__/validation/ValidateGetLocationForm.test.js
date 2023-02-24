import { describe, expect, it } from "vitest";
import { validateGetLocationForm } from "../../utils/validation/ValidateGetLocationForm";

describe("ValidateGetLocationForm", () => {
	it("Should return true for valid input", (t) => {
		const validInput = "New York";
		const result = validateGetLocationForm(validInput);
		expect(result).toBe(true);
	});

	it("Should return false for empty input", (t) => {
		const emptyInput = "";
		const result = validateGetLocationForm(emptyInput);
		expect(result).toBe(false);
	});

	it("Should return false for input with only whitespace", (t) => {
		const whitespaceInput = "  ";
		const result = validateGetLocationForm(whitespaceInput);
		expect(result).toBe(false);
	});
});
