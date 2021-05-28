import { createContext, useState, useEffect } from 'react';
import { getDistance } from 'geolib';
import axios from 'axios';

export const VetContext = createContext();

export const VetProvider = ({ children }) => {
	const [vetData, setVetData] = useState();
	const [location, setLocation] = useState();

	const requestLocation = () => {
		console.log('Requesting Location');
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const userCoords = {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				};
				setLocation(userCoords);
				// for (const vet of vets) {
				// 	const coord = { latitude: vet.location.lat, longitude: vet.location.lng };
				// 	vet.distance = getDistance(userCoords, coord);
				// }
				// vets.sort((a, b) => {
				//   return a.distance - b.distance;
				// });
				//setVetData(vets);
			});
		}
	};

	useEffect(() => {
		const fetchVets = async () => {
			const { data: vets } = await axios.get('/api/vets/list');
			setVetData(vets);
		};
		fetchVets();
	}, [setVetData]);

	const contextValue = {
		vetData,
		setVetData,
		requestLocation,
		location,
		setLocation,
	};

	return <VetContext.Provider value={contextValue}>{children}</VetContext.Provider>;
};
