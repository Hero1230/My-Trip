import React, { createContext, useState } from "react";

export const TripsHistoryContext = createContext({});

export const TripsHistoryContextProvider = ({ children }) => {
	const [tripsHistory, setTripsHistory] = useState([]);

	return (
		<TripsHistoryContext.Provider value={{ tripsHistory, setTripsHistory }}>
			{children}
		</TripsHistoryContext.Provider>
	);
};
