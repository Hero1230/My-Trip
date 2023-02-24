import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TripDetailsContext } from "../../context/TripDetailsContext";
import { getGeoLocation } from "../../utils/GetGeoLocation";
import { validateGetLocationForm } from "../../utils/validation/ValidateGetLocationForm";
import styles from "./GetLocationFrom.module.scss";
const GetLocationForm = () => {
	const navigate = useNavigate();
	const { setTripDetails } = useContext(TripDetailsContext);
	const [currentLocation, setCurrentLocation] = useState("");
	const [targetLocation, setTargetLocation] = useState("");
	const [validationError, setValidationError] = useState(null);
	setTripDetails(null);
	const handleSubmit = async (e) => {
		e.preventDefault();

		const validatedInput1 = validateGetLocationForm(currentLocation);
		const validatedInput2 = validateGetLocationForm(targetLocation);

		if (!validatedInput1 && !validatedInput2) {
			setValidationError("Please provide the two input addresses");
			return;
		}

		const startPoint = await getGeoLocation(currentLocation);
		const endPoint = await getGeoLocation(targetLocation);

		if (!startPoint || !endPoint) {
			setValidationError("Something went wrong! Please try later!");
		}

		if (startPoint.items.length > 0 && endPoint.items.length > 0) {
			setTripDetails((prev) => ({
				...prev,
				startPoint: startPoint.items[0],
				endPoint: endPoint.items[0],
			}));
			navigate("/map");
		} else {
			setValidationError("Couldn't find this address!");
		}
	};
	return (
		<div className={styles.container}>
			<h2>Search</h2>
			<form className={styles.form}>
				<label>
					From:
					<input
						placeholder="Boston"
						value={currentLocation}
						onChange={(e) => {
							setCurrentLocation(e.target.value);
						}}
					/>
				</label>
				<label>
					To:
					<input
						placeholder="New York"
						value={targetLocation}
						onChange={(e) => {
							setTargetLocation(e.target.value);
						}}
					/>
				</label>
				<button onClick={handleSubmit}>Start</button>
				{validationError && <p className="error">{validationError}</p>}
			</form>
		</div>
	);
};

export default GetLocationForm;
