import React from 'react';
import { vets } from '../data/data';
import { getDistance } from 'geolib';

const ListScreen = ({ history }) => {
	if ('geolocation' in navigator) {
		console.log('Available');
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log(position);

			const userCoords = position.coords;

			vets.sort((a, b) => {
				const coordA = { latitude: a.location.lat, longitude: a.location.lng };
				const coordB = { latitude: b.location.lat, longitude: b.location.lng };
				return getDistance(userCoords, coordB) - getDistance(userCoords, coordA);
			});
			console.log(vets);
		});
	}
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
