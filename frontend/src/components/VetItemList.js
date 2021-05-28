import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { IconContext } from 'react-icons';
const imgStyle = {
	height: '100px',
	display: 'block',
	objectFit: 'cover',
};

const VetItemList = ({ vet }) => {
	return (
		<Card className="m-3 d-flex ">
			<IconContext.Provider value={{ size: '1.5em', className: 'heart' }}>
				<div style={{ position: 'absolute', right: '5px', top: '5px' }}>
					<AiFillHeart />
				</div>
			</IconContext.Provider>
			<Link to={`vet/${vet.place_id}`}>
				<Card.Img style={imgStyle} src={``} variant="top" />
			</Link>
			<Card.Body className="d-flex flex-column" style={{ minHeight: '200px' }}>
				<Link to={`vet/${vet.place_id}`}>
					<Card.Title as="div">
						<strong>{vet.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text className="my-auto" as="h5" style={{ fontSize: '1.05rem' }}>
					Address: {vet.vicinity}
				</Card.Text>
				<Card.Text className="" as="div" style={{ fontSize: '1.05rem' }}>
					Distance: {vet.distance ? `${vet.distance / 1000} km` : 'Unavailable'}
				</Card.Text>
				{/* <Button className="mt-auto likeBtn">Add Favorite</Button> */}
			</Card.Body>
		</Card>
	);
};

export default VetItemList;
