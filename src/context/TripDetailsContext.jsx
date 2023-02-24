import React, { createContext, useState } from "react";

export const TripDetailsContext = createContext({});

export const TripDetailsContextProvider = ({ children }) => {
	const [tripDetails, setTripDetails] = useState(null);

	return (
		<TripDetailsContext.Provider value={{ tripDetails, setTripDetails }}>
			{children}
		</TripDetailsContext.Provider>
	);
};
