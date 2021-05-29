import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiFillStar, AiFillPhone } from 'react-icons/ai';
import { GiPathDistance } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { UserContext } from '../context';
import {
	VetCard,
	VetCardImg,
	VetCardButton,
	VetCardTitle,
	VetCardBody,
	VetCardContent,
} from './styledComponents/VetElements';
import { LinkContainer } from 'react-router-bootstrap';
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
			updateUser(user);
		}
	};

	useEffect(() => {}, [user]);

	const isLiked = user && user.liked && user.liked.includes(vet.place_id);

	return (
		<>
			<VetCard className="my-2">
				<VetCardImg img={vet.image}>
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
				</VetCardImg>
				<VetCardBody>
					<LinkContainer to={`vet/${vet.place_id}`}>
						<VetCardTitle>
							{vet.name}{' '}
							<div className="d-flex align-items-center ml-1">
								<IconContext.Provider value={{ size: '1.5em', color: '#ecc94b' }}>
									<div>
										<AiFillStar />
									</div>
								</IconContext.Provider>
								{vet.rating}
							</div>
						</VetCardTitle>
					</LinkContainer>
					<VetCardContent className="my-2">
						<div className="d-flex align-items-center mt-1">
							<IconContext.Provider value={{ size: '1em', className: 'mr-3' }}>
								<div>
									<ImLocation2 />
								</div>
							</IconContext.Provider>
							<div>{vet.vicinity}</div>
						</div>
					</VetCardContent>
					<VetCardContent className="my-2">
						<div className="d-flex align-items-center mt-1">
							<IconContext.Provider value={{ size: '1em', className: 'mr-3' }}>
								<div>
									<AiFillPhone />
								</div>
							</IconContext.Provider>
							<div>
								<a href={`tel:${vet.phone}`}>{vet.phone}</a>
							</div>
						</div>
					</VetCardContent>
					<VetCardContent className="my-2">
						<div className="d-flex align-items-center mt-1">
							<IconContext.Provider value={{ size: '1.4em', className: 'mr-3' }}>
								<div>
									<GiPathDistance />
								</div>
							</IconContext.Provider>
							<div>{(vet.distance / 1000).toFixed(2)} km</div>
						</div>
					</VetCardContent>
				</VetCardBody>
				<LinkContainer to={`vet/${vet.place_id}`}>
					<VetCardButton className="mt-auto">View more</VetCardButton>
				</LinkContainer>
			</VetCard>

			{/* <Card className="m-3 d-flex ">
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
				</Card.Body>
			</Card> */}
		</>
	);
};

export default VetItemList;
