import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Map from "./pages/map/Map";
import "./index.css";
import { TripDetailsContextProvider } from "./context/TripDetailsContext";
import { TripsHistoryContextProvider } from "./context/TripsHistoryContex";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/map",
		element: <Map />,
	},
	{
		path: "*",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TripsHistoryContextProvider>
			<TripDetailsContextProvider>
				<RouterProvider router={router} />
			</TripDetailsContextProvider>
		</TripsHistoryContextProvider>
	</React.StrictMode>
);
