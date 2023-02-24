import styles from "./TripsHistory.module.scss";
import { useContext } from "react";
import { TripsHistoryContext } from "../../context/TripsHistoryContex";

const TripsHistory = () => {
	const { tripsHistory } = useContext(TripsHistoryContext);
	return (
		<div className={styles.container}>
			<h2>History:</h2>
			<ul>
				{tripsHistory.length > 0 &&
					tripsHistory.map((trip) => (
						<li key={trip.id} className={styles.trip}>
							<p>
								{trip.startPoint} - {trip.endPoint}
							</p>
							<p>
								| {trip.totalDistance} | {trip.totalDuration} |{" "}
								{trip.totalPrice} $ |
							</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default TripsHistory;
