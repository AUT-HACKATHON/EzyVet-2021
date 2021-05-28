import React, { useEffect, useState } from 'react';
import { vets } from '../data/data';
import { getDistance } from 'geolib';

const ListScreen = ({ history }) => {
	const [vetData, setVetData] = useState();

	useEffect(() => {
		if (!vetData && 'geolocation' in navigator) {
			console.log('Available');
			navigator.geolocation.getCurrentPosition(function (position) {
				const userCoords = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				};
				vets.sort((a, b) => {
					const coordA = { latitude: a.location.lat, longitude: a.location.lng };
					const coordB = { latitude: b.location.lat, longitude: b.location.lng };
					return getDistance(userCoords, coordB) - getDistance(userCoords, coordA);
				});
				setVetData(vets);
			});
		}
	}, [vetData, setVetData]);
	return (
		<>
			List:
			<br />
			{vets.map((value, index) => {
				return <li key={index}>{JSON.stringify(value)}</li>;
			})}
		</>
	);
};

export default ListScreen;
