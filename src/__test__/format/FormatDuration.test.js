import { describe, expect, it } from "vitest";
import { formatDuration } from "../../utils/format/FormatDuration";

describe("formatDuration", () => {
	it("should return the correct format for durations less than 60 minutes", () => {
		expect(formatDuration(1800)).toEqual("30 min");
		expect(formatDuration(2700)).toEqual("45 min");
	});

	it("should return the correct format for durations greater than 60 minutes", () => {
		expect(formatDuration(4500)).toEqual("1 h 15 min");
		expect(formatDuration(7200)).toEqual("2 h 0 min");
		expect(formatDuration(10830)).toEqual("3 h 0 min");
	});
});
