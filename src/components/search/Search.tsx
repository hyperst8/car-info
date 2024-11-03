import useCarHooks from "../../hooks/useCarHooks";
import "../../styles/search.scss";

const Search = () => {
	const { registrationNumber, fetchVehicleData, handleInputChange } =
		useCarHooks();

	return (
		<form onSubmit={fetchVehicleData}>
			<div className="form-wrapper">
				<div className="license-plate">
					<div className="flag-label">
						<img src="" alt="Norwegian flag" />
						<label htmlFor="registrationNumber">N</label>
					</div>
					<input
						type="text"
						id="registrationNumber"
						value={registrationNumber}
						onChange={handleInputChange}
						placeholder="Registreringsnummer"
					/>
				</div>
				<button type="submit">Hent kjøretøydata</button>
			</div>
		</form>
	);
};

export default Search;
