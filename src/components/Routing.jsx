import { useContext, useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { TripDetailsContext } from "../context/TripDetailsContext";

L.Marker.prototype.options.icon = L.icon({
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing(props) {
	const { setTripDetails } = useContext(TripDetailsContext);
	const { start, end } = props;
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		const waypoints = [
			L.latLng(start.lat, start.lng),
			L.latLng(end.lat, end.lng),
		];

		const routingControl = L.Routing.control({
			waypoints,
			draggableWaypoints: false,
			addWaypoints: false,
			show: false,
		})
			.on("routesfound", function (e) {
				if (
					(!e.routes[0] || !e.routes[1]) &&
					routingControl.getWaypoints().length === 0
				) {
					routingControl.setWaypoints(waypoints);
				}

				const totalDistance = +e.routes[0].summary.totalDistance;
				const totalDuration = +e.routes[0].summary.totalTime;

				setTripDetails((prev) => ({
					...prev,
					totalDistance,
					totalDuration,
				}));
			})
			.on("routingerror", () => {
				alert("Something went wrong! Please try again later!");
			})
			.addTo(map);

		return () => map.removeControl(routingControl);
	}, [map]);

	return null;
}
