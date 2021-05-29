import React, { useContext, useState, useEffect } from 'react';
import { Accordion, Image, ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import { VetContext } from '../context/';
import axios from 'axios';
import Map from '../components/Map';
import { HeaderStyle, TextStyle } from '../components/styledComponents/HomeElements';
import { ProfileImage } from '../components/styledComponents/VetElements';
import { AiFillStar, AiFillPhone, AiOutlineLink } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ImLocation2 } from 'react-icons/im';

const itemStyle = {
	backgroundColor: 'transparent',
};

const imgStyle = {
	width: '90%',
	display: 'block',
	objectFit: 'cover',
	right: '0px',
	boxShadow: '8px 8px #00ACB6',
};
const doctorStyle = {
	border: '1px solid #c7c7c7',
	background: 'white',
};

const VetScreen = ({ history, match }) => {
	const { vetData, location } = useContext(VetContext);
	const [vet, setVet] = useState();
	const [profiles, setProfiles] = useState();
	const [markers, setMarkers] = useState([]);

	// const vet = vetData.find((x) => x.place_id === match.params.id);

	useEffect(() => {
		if (vetData) {
			const temp = vetData.find((x) => x.place_id === match.params.id);
			setVet(temp);
			var mark = [
				{
					lat: temp.location.lat,
					lng: temp.location.lng,
					info: temp.name,
				},
			];
			if (location) {
				mark = [
					{
						lat: location.latitude,
						lng: location.longitude,
						info: 'Your Location',
					},
					...mark,
				];
			}
			console.log(location, mark);
			setMarkers(mark);
		}

		const fetchProfiles = async () => {
			const { data } = await axios.get('/api/vets/listProfiles/' + match.params.id);
			setProfiles(data);
		};

		fetchProfiles();
	}, [location, match.params.id, vetData]);

	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-4">Details Page</h1>

			{vet ? (
				<>
					<Row>
						<Col md={6} className="ml-auto">
							<Image
								style={imgStyle}
								className="ml-5"
								src={vet.image ? vet.image : '/img/logo.png'}
							></Image>
							{vet.rating && (
								<div className="d-flex justify-content-center align-items-center my-3 ml-3">
									Rating:
									<IconContext.Provider
										value={{
											size: '1.5em',
											color: '#ecc94b',
											className: 'ml-1',
										}}
									>
										<div>
											<AiFillStar />
										</div>
									</IconContext.Provider>
									{vet.rating}
								</div>
							)}
						</Col>
						<Col md={6}>
							<ListGroup variant="flush">
								<ListGroup.Item style={itemStyle}>
									<h2>{vet.name}</h2>
								</ListGroup.Item>
								{/* LOCATION */}
								<ListGroup.Item style={itemStyle}>
									<div className="d-flex align-items-center mt-1">
										<IconContext.Provider
											value={{ size: '1em', className: 'mr-3' }}
										>
											<div>
												<ImLocation2 />
											</div>
										</IconContext.Provider>
										<div>{vet.vicinity}</div>
									</div>
								</ListGroup.Item>
								{vet.phone && (
									<ListGroup.Item style={itemStyle}>
										<div className="d-flex align-items-center mt-1">
											<IconContext.Provider
												value={{ size: '1em', className: 'mr-3' }}
											>
												<div>
													<AiFillPhone />
												</div>
											</IconContext.Provider>
											<div>
												{' '}
												<a href={'mailto:' + vet.phone}>{vet.phone}</a>
											</div>
										</div>
										{/* Phone Number:{' '}
										<a href={'mailto:' + vet.phone}>{vet.phone}</a> */}
									</ListGroup.Item>
								)}
								{vet.website && (
									<ListGroup.Item style={itemStyle}>
										<div className="d-flex align-items-center mt-1">
											<IconContext.Provider
												value={{ size: '1em', className: 'mr-3' }}
											>
												<div>
													<AiOutlineLink />
												</div>
											</IconContext.Provider>
											<div>
												<a href={vet.website}>{vet.website}</a>
											</div>
										</div>
									</ListGroup.Item>
								)}

								{vet.opening_hours && (
									<Accordion defaultActiveKey="1">
										<Accordion.Toggle
											as={ListGroup.Item}
											style={{
												backgroundColor: 'transparent',
												cursor: 'pointer',
												color: '#4a56b9',
												fontStyle: 'italic',
											}}
											eventKey="0"
										>
											Show Opening hours
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
											<ListGroup>
												{vet.opening_hours.map((el, index) => (
													<ListGroup.Item key={index} style={itemStyle}>
														<div key={index}>{el}</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										</Accordion.Collapse>
									</Accordion>
								)}
							</ListGroup>
						</Col>
					</Row>
					<Row className="my-3 align-self-center">
						<Accordion
							defaultActiveKey="1"
							className="d-flex justify-content-center flex-column align-items-center"
						>
							<Accordion.Toggle
								eventKey="0"
								style={{
									backgroundColor: 'transparent',
									cursor: 'pointer',
									color: '#4a56b9',
									border: '0',
									borderBottom: '1px solid',
									borderRadius: '20%',
								}}
								as={ListGroup.Item}
							>
								Show Doctors
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Row className="justify-content-center align-items-center d-flex">
									{profiles &&
										profiles.map((el, index) => (
											<Col
												md={5}
												key={index}
												style={doctorStyle}
												className="d-flex justify-content-center align-items-center mx-1 my-1"
											>
												<Col md={4}>
													<ProfileImage
														src={`/img/${el.picture}`}
													></ProfileImage>
												</Col>
												<Col md={8}>
													<TextStyle font="1em" mb="0.3em">
														{el.name.title} {el.name.first}{' '}
														{el.name.last}
													</TextStyle>
													<TextStyle font="0.8em" mb="0.3em">
														<a href={'mailto:' + el.email}>
															{el.email}
														</a>
													</TextStyle>
													<TextStyle
														font="0.8em"
														mb="0.3em"
														color="#838383"
													>
														Age: {el.dob.age}
													</TextStyle>
													<TextStyle font="0.8em" mb="0.3em">
														Experience: {el.registered.age} years
													</TextStyle>
												</Col>
											</Col>
										))}
								</Row>
							</Accordion.Collapse>
						</Accordion>
					</Row>
					<Col md={12} className="my-3 mx-auto">
						<HeaderStyle font="2.4rem" color="black" fontWeight="500" align="center">
							Find on the map
						</HeaderStyle>
						<Map markers={markers} zoom={12} />
					</Col>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default VetScreen;
