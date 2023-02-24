import { describe, expect, it } from "vitest";
import { formatDistance } from "../../utils/format/FormatDistance";

describe("formatDistance", () => {
	it('should return "Invalid distance" if the input is not a number', () => {
		expect(formatDistance("not a number")).toBe("Invalid distance");
	});

	it("should format the distance in kilometers if it is greater than or equal to 1 km", () => {
		expect(formatDistance(1500)).toBe("1.5 km");
		expect(formatDistance(3000)).toBe("3 km");
		expect(formatDistance(10000)).toBe("10 km");
	});

	it("should format the distance in meters if it is less than 1 km", () => {
		expect(formatDistance(500)).toBe("500 m");
		expect(formatDistance(250)).toBe("250 m");
		expect(formatDistance(0)).toBe("0 m");
	});
});
