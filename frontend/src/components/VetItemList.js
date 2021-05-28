import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VetItemList = ({ vet }) => {
	const key = process.env.REACT_APP_GOOGLE_API_KEY;
	return (
		<Card className="m-3 d-flex " style={{ minHeight: '300px' }}>
			<Link to={`vet/${vet.place_id}`}>
				<Card.Img
					src={`https://maps.googleapis.com/maps/api/streetview?location=${vet.vicinity}&size=456x456&key=${key}`}
					variant="top"
				/>
			</Link>
			<Card.Body className="d-flex flex-column">
				<Link to={`vet/${vet.place_id}`}>
					<Card.Title as="div">
						<strong>Name: {vet.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text className="my-auto" as="h5" style={{ fontSize: '1.05rem' }}>
					Address: {vet.vicinity}
				</Card.Text>
				<Card.Text className="" as="div" style={{ fontSize: '1.05rem' }}>
					Distance: {vet.distance ? `${vet.distance / 1000} km` : 'Unavailable'}
				</Card.Text>
				<Button className="mt-auto likeBtn">Add Favorite</Button>
			</Card.Body>
		</Card>
	);
};

export default VetItemList;
