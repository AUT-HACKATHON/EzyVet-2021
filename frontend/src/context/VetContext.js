import React, { useState, useEffect } from 'react';
import { getDistance } from 'geolib';
import axios from 'axios';

export const VetContext = React.createContext();

export const VetProvider = ({ children }) => {
	const [vetData, setVetData] = useState();

	useEffect(() => {
		if (!vetData && 'geolocation' in navigator) {
			const fetchVets = async () => {
				const { data: vets } = await axios.get('/api/vets/list');
				console.log('Available');
				navigator.geolocation.getCurrentPosition(function (position) {
					const userCoords = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					};
					for (const vet of vets) {
						const coord = { latitude: vet.location.lat, longitude: vet.location.lng };
						vet.distance = getDistance(userCoords, coord);
					}
					vets.sort((a, b) => {
						return a.distance - b.distance;
					});
					setVetData(vets);
				});
				setVetData(vets);
			};
			fetchVets();
		}
	}, [vetData, setVetData]);

	const contextValue = {
		vetData,
		setVetData,
	};

	return <VetContext.Provider value={contextValue}>{children}</VetContext.Provider>;
};
