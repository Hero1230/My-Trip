import { describe, it, expect } from "vitest";
import { calculateTotalPrice } from "../../utils/CalculateTotalPrice";

describe("calculateTotalPrice", () => {
	it("should calculate the total price correctly for short distances", () => {
		const distance = 5000;
		const rate = 0.1;
		const expectedPrice = "0.55"; // 5 km * 0.1 * 1.1 = $0.55
		const actualPrice = calculateTotalPrice(distance, rate);
		expect(actualPrice).toEqual(expectedPrice);
	});

	it("should calculate the total price correctly for long distances", () => {
		const distance = 1000000; // 1000 km
		const rate = 0.1;
		const expectedPrice = "1110.00"; // 1000 km * 0.1 * 1.1 = $110, plus $1000 for each additional 800 km
		const actualPrice = calculateTotalPrice(distance, rate);
		expect(actualPrice).toEqual(expectedPrice);
	});

	it("should round the total price to two decimal places", () => {
		const distance = 1234;
		const rate = 0.05;
		const expectedPrice = "0.07"; // 1.234 km * 0.05 * 1.1 = $0.06815, rounded to $0.07
		const actualPrice = calculateTotalPrice(distance, rate);
		expect(actualPrice).toEqual(expectedPrice);
	});
});
