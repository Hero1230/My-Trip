export const formatDistance = (distance) => {
	if (isNaN(distance)) {
		return "Invalid distance";
	}
	let formattedDistance;
	if (distance >= 1000) {
		formattedDistance = distance / 1000;
		if (Number.isInteger(formattedDistance)) {
			formattedDistance = formattedDistance.toFixed(0);
		} else {
			formattedDistance = formattedDistance.toFixed(1);
		}
		formattedDistance += " km";
	} else {
		formattedDistance = distance.toFixed(0) + " m";
	}
	return formattedDistance;
};
