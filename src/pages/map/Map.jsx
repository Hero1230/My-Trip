import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Routing from "../../components/Routing";
import React, { useContext, useRef } from "react";
import styles from "./Map.module.scss";
import TripDetails from "../../components/trip-details/TripDetails";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import { TripDetailsContext } from "../../context/TripDetailsContext";
import { useReactToPrint } from "react-to-print";

const Map = () => {
	const printRef = useRef();
	const navigate = useNavigate();
	const { tripDetails } = useContext(TripDetailsContext);
	const start = tripDetails?.startPoint?.position;
	const end = tripDetails?.endPoint?.position;

	const handlePrint = useReactToPrint({
		content: () => printRef.current,
		documentTitle: "trip-details",
	});

	return (
		<main ref={printRef}>
			{start && end ? (
				<>
					<MapContainer
						center={[start.lat, start.lng]}
						zoom={13}
						style={{ height: "50vh" }}>
						<TileLayer
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Routing start={start} end={end} />
					</MapContainer>
					<TripDetails handlePrint={handlePrint} />
				</>
			) : (
				<div className={styles.loading}>
					<Loader />
					<button onClick={() => navigate("/")}>Back</button>
				</div>
			)}
		</main>
	);
};

export default Map;
