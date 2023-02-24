import React from "react";
import GetLocationForm from "../../components/get-location-form/GetLocationForm";
import TripsHistory from "../../components/trips-history/TripsHistory";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<main className={styles.container}>
			<GetLocationForm />
			<TripsHistory />
		</main>
	);
};

export default Home;
