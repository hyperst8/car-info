import { ChangeEvent, FormEvent, useState } from "react";

const useCarHooks = () => {
	const [registrationNumber, setRegistrationNumber] = useState("");
	const [vehicleData, setVehicleData] = useState(null);

	const fetchVehicleData = async (e: FormEvent) => {
		e.preventDefault();

		const url = `https://autosys-kjoretoy-api.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=${registrationNumber}`;
		const headers = {
			"SVV-Authorization": `Apikey ${import.meta.env.VITE_API_KEY}`,
		};
		const response = await fetch(url, { method: "GET", headers: headers });

		if (response.ok) {
			const data = await response.json();
			setVehicleData(data);
		} else {
			console.error("Error fetching data:", response.status);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setRegistrationNumber(e.target.value);
	};

	return {
		registrationNumber,
		vehicleData,
		fetchVehicleData,
		handleInputChange,
	};
};

export default useCarHooks;
