const assert = require("assert");
import { describe, expect, it } from "vitest";
import { getGeoLocation } from "../utils/GetGeoLocation";

describe("getGeoLocation", () => {
	it("should return expected response for a valid address", async () => {
		const address = "1600 Amphitheatre Parkway, Mountain View, CA";
		const expectedResponse = [
			{
				title: "1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States",
				id: "here:af:streetsection:bRZ7cmyxScnGBAJ2GAD1L",
				resultType: "houseNumber",
				houseNumberType: "PA",
				address: {
					label:
						"1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States",
					countryCode: "USA",
					countryName: "United States",
					stateCode: "CA",
					state: "California",
					county: "Santa Clara",
					city: "Mountain View",
					district: "North Bayshore",
					street: "Amphitheatre Pkwy",
					postalCode: "94043",
					houseNumber: "1600",
				},
				position: { lat: 37.42231, lng: -122.08411 },
				mapView: {
					west: -122.08608,
					south: 37.42043,
					east: -122.08214,
					north: 37.42419,
				},
				access: [{ lat: 37.42225, lng: -122.0842 }],
				distance: 37,
				categories: [
					{ id: "900-1000-0000", name: "Residential", primary: true },
				],
			},
		];
		global.fetch = () =>
			Promise.resolve({
				json: () => Promise.resolve(expectedResponse),
			});

		const response = await getGeoLocation(address);

		assert.deepStrictEqual(response, expectedResponse);
	});

	it("should return null for an invalid address", async () => {
		const address = "invalid address";
		global.fetch = () => Promise.reject(new Error("Invalid address"));

		const response = await getGeoLocation(address);

		expect(response).toBe(null);
	});
});
