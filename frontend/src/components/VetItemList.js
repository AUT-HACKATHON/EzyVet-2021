import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { IconContext } from 'react-icons';
import { UserContext } from '../context';
const imgStyle = {
	height: '100px',
	display: 'block',
	objectFit: 'cover',
};

const VetItemList = ({ history, vet }) => {
	const { user, updateUser } = useContext(UserContext);

	const likeVet = async () => {
		if (!user) {
			history.push('/login');
		} else if (isLiked) {
			user.liked = user.liked.filter(function (item) {
				return item !== vet.place_id;
			});
		} else {
			if (!user.liked) {
				user.liked = [];
			}
			user.liked.push(vet.place_id);
		}
		console.log(user);
		updateUser(user);
	};

	useEffect(() => {}, [user]);

	const isLiked = user && user.liked && user.liked.includes(vet.place_id);

	return (
		<Card className="m-3 d-flex ">
			<div onClick={likeVet}>
				<IconContext.Provider value={{ size: '1.5em', className: 'heart' }}>
					{isLiked ? (
						<div style={{ position: 'absolute', right: '5px', top: '5px' }}>
							<AiFillHeart />
						</div>
					) : (
						<div style={{ position: 'absolute', right: '5px', top: '5px' }}>
							<AiOutlineHeart />
						</div>
					)}
				</IconContext.Provider>
			</div>
			<Link to={`vet/${vet.place_id}`}>
				<Card.Img
					style={imgStyle}
					src={vet.image ? vet.image : '/img/logo.png'}
					variant="top"
				/>
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
