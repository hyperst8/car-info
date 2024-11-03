import useCarHooks from "../hooks/useCarHooks";
import Search from "./search/Search";
import Vehicle from "./vehicle/Vehicle";

const Home = (): JSX.Element => {
	const { vehicleData } = useCarHooks();

	return (
		<div>
			<h1>Søk etter kjøretøy</h1>
			<Search />
			{vehicleData && <Vehicle vehicleData={vehicleData} />}
		</div>
	);
};

export default Home;
