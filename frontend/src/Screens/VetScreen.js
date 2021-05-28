import React, { useContext, useState, useEffect } from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import { VetContext } from '../context/VetContext';

/*
phone number
photo
rating
opening hours
website
*/

const itemStyle = {
	backgroundColor: 'transparent',
};

const imgStyle = {
	width: '70%',
	display: 'block',
	objectFit: 'cover',
	right: '0px',
};

const VetScreen = ({ history, match }) => {
	const { vetData } = useContext(VetContext);
	const [vet, setVet] = useState();
	const key = process.env.REACT_APP_GOOGLE_API_KEY;

	// const vet = vetData.find((x) => x.place_id === match.params.id);

	useEffect(() => {
		if (vetData) {
			const temp = vetData.find((x) => x.place_id === match.params.id);

			setVet(temp);
		}
	}, [match.params.id, vetData]);

	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-4">Details Page</h1>
			{vet ? (
				<Row>
					<Col md={6} className="ml-auto">
						<Image
							style={imgStyle}
							className="ml-5"
							src={`https://maps.googleapis.com/maps/api/streetview?location=${vet.vicinity}&size=456x456&key=${key}`}
						></Image>
					</Col>
					<Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item style={itemStyle}>
								<h2>{vet.name}</h2>
							</ListGroup.Item>

							<ListGroup.Item style={itemStyle}>
								Location: {vet.vicinity}
							</ListGroup.Item>
							<ListGroup.Item style={itemStyle}>
								Phone Number: {vet.phone}
							</ListGroup.Item>
							<ListGroup.Item style={itemStyle}>Website: {vet.phone}</ListGroup.Item>
							<ListGroup.Item style={itemStyle}>Rating: {vet.phone}</ListGroup.Item>
							<ListGroup.Item style={itemStyle}>
								Opening hours: {vet.phone}
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default VetScreen;
