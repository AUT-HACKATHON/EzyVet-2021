import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import VetItemList from '../components/VetItemList';
import { VetContext } from '../context/';
import { getDistance } from 'geolib';
import { UserContext } from '../context';

const LikedVetsScreen = ({ history }) => {
	const { vetData, setVetData, location } = useContext(VetContext);
	const [displayVets, setDisplayVets] = useState();
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (!user) {
			history.push('/');
			return;
		}

		if (user && vetData) {
			const arr = [...vetData].filter((el) => {
				return user.liked?.includes(el.place_id);
			});

			// console.log(user);
			setDisplayVets(arr);
		}
	}, [user, history, vetData]);

	useEffect(() => {
		if (displayVets && location) {
			const vets = [...displayVets];
			for (const vet of vets) {
				const coord = { latitude: vet.location.lat, longitude: vet.location.lng };
				vet.distance = getDistance(location, coord);
			}

			setDisplayVets(vets);
		}
	}, [location, setVetData, displayVets]);

	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-3">Your vets</h1>

			{displayVets ? (
				<Row className="justify-content-center">
					{displayVets.map((value, index) => (
						<Col
							key={index}
							sm={12}
							md={6}
							className="d-flex align-items-center flex-column"
						>
							<VetItemList history={history} vet={value} />
						</Col>
					))}
				</Row>
			) : (
				<Loader className="my-5"></Loader>
			)}

			{displayVets && displayVets.length === 0 && <h2>No liked vets</h2>}
		</div>
	);
};

export default LikedVetsScreen;
