export const formatDuration = (duration) => {
	const minutes = Math.floor(duration / 60);
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	if (hours > 0) {
		return `${hours} h ${remainingMinutes} min`;
	} else {
		return `${remainingMinutes} min`;
	}
};
