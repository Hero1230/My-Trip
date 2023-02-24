import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TripDetailsContext } from "../../context/TripDetailsContext";
import { TripsHistoryContext } from "../../context/TripsHistoryContex";
import { calculateTotalPrice } from "../../utils/CalculateTotalPrice";
import { formatDistance } from "../../utils/format/FormatDistance";
import { formatDuration } from "../../utils/format/FormatDuration";
import styles from "./TripDetail.module.scss";

const TripDetails = (props) => {
	const navigate = useNavigate();
	const [rate, setRate] = useState(1);
	const { tripDetails } = useContext(TripDetailsContext);
	const { setTripsHistory } = useContext(TripsHistoryContext);
	const isAddedToHistory = useRef(false);

	const totalDuration = formatDuration(tripDetails?.totalDuration);
	const totalDistance = formatDistance(tripDetails?.totalDistance);
	const totalPrice = calculateTotalPrice(tripDetails?.totalDistance, rate);

	useEffect(() => {
		if ((!isAddedToHistory.current, !isNaN(tripDetails?.totalDistance))) {
			setTripsHistory((prev) => [
				...prev,
				{
					startPoint: tripDetails?.startPoint.address.label,
					endPoint: tripDetails?.endPoint.address.label,
					totalDistance,
					totalDuration,
					totalPrice,
				},
			]);
			isAddedToHistory.current = true;
		}
	}, [tripDetails?.totalDistance]);

	return (
		<div className={styles.container}>
			<div>
				<p>From:</p>
				<p>{tripDetails?.startPoint.address.label}</p>
				<p>To:</p>
				<p>{tripDetails?.endPoint.address.label}</p>
			</div>
			{!isNaN(tripDetails?.totalDistance) && (
				<div className={styles["details-info"]}>
					<p>Total Duration: {totalDuration}</p>
					<p>Total Distance: {totalDistance}</p>
					<p className={styles["total-price"]}>Total Price: {totalPrice} $</p>
				</div>
			)}
			<div className={styles.actions}>
				<label className={styles.rate}>
					Rate:
					<input
						type="number"
						step={0.01}
						min={0.01}
						value={rate}
						onChange={(e) => setRate(e.target.value)}
					/>{" "}
					$
				</label>
				<div className={styles.buttons}>
					<button onClick={() => navigate("/")}>Back</button>
					<button className={styles.pdf} onClick={props.handlePrint}>
						PDF
					</button>
				</div>
			</div>
		</div>
	);
};

export default TripDetails;
