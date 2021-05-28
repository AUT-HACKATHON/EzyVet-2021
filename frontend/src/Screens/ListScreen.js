import React, { useEffect, useState } from 'react';
import { getDistance } from 'geolib';
import axios from 'axios';

const ListScreen = ({ history }) => {
	const [vetData, setVetData] = useState();

	useEffect(() => {
		if (!vetData && 'geolocation' in navigator) {
			const fetchVets = async () => {
				const { data } = await axios.get('/api/vets/list');
				console.log('Available');
				navigator.geolocation.getCurrentPosition(function (position) {
					const userCoords = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					};
					data.sort((a, b) => {
						const coordA = { latitude: a.location.lat, longitude: a.location.lng };
						const coordB = { latitude: b.location.lat, longitude: b.location.lng };
						return getDistance(userCoords, coordB) - getDistance(userCoords, coordA);
					});
					setVetData(data);
				});
			};
			fetchVets();
		}
	}, [vetData, setVetData]);
	return (
		<>
			List:
			<br />
			{vetData &&
				vetData.map((value, index) => {
					return <li key={index}>{JSON.stringify(value)}</li>;
				})}
		</>
	);
};

export default ListScreen;
