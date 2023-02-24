const API_KEY = import.meta.env.VITE_API_KEY;

export const getGeoLocation = async (address) => {
	let data = await fetch(
		`https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${API_KEY}`
	).catch((error) => {
		console.log(error);
		return null;
	});

	if (!data) {
		return null;
	}

	return data?.json();
};
