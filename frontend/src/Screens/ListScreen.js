import React, { useEffect, useState } from 'react';
import { vets } from '../data/data';
import { getDistance } from 'geolib';
import { Row, Col } from 'react-bootstrap';
import VetItemList from '../components/VetItemList';

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
				for (const vet of vets) {
					const coord = { latitude: vet.location.lat, longitude: vet.location.lng };
					vet.distance = getDistance(userCoords, coord);
				}
				vets.sort((a, b) => {
					// const coordA = { latitude: a.location.lat, longitude: a.location.lng };
					// const coordB = { latitude: b.location.lat, longitude: b.location.lng };
					// return getDistance(userCoords, coordB) - getDistance(userCoords, coordA);

					return a.distance - b.distance;
				});
				setVetData(vets);
			});
		}
	}, [vetData, setVetData]);
	return (
		<>
			<h1>Vet clinics</h1>
			<Row className="my-5">
				{vets.map((value, index) => (
					<Col key={index} sm={12} md={6} lg={4} xl={3}>
						<VetItemList vet={value}> </VetItemList>
					</Col>
				))}
			</Row>
		</>
	);
};

export default ListScreen;
