export const calculateTotalPrice = (distance, rate) => {
	const distanceKM = distance / 1000;
	let price = distanceKM * rate * 1.1;
	if (distanceKM > 800) {
		const daily = parseInt((distanceKM / 800).toFixed(0));
		price += 1000 * daily;
	}
	return price.toFixed(2);
};
