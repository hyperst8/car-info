const Vehicle = ({ vehicleData }: any): JSX.Element => {
	return (
		<div>
			<h2>Informasjon om kjøretøyet:</h2>
			<pre>{JSON.stringify(vehicleData, null, 2)}</pre>
		</div>
	);
};

export default Vehicle;
