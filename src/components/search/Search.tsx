import useCarHooks from "../../hooks/useCarHooks";

const Search = () => {
	const { registrationNumber, fetchVehicleData, handleInputChange } =
		useCarHooks();

	return (
		<form onSubmit={fetchVehicleData}>
			<input
				type="text"
				value={registrationNumber}
				onChange={handleInputChange}
				placeholder="Registreringsnummer"
			/>
			<button type="submit">Hent kjøretøydata</button>
		</form>
	);
};

export default Search;
