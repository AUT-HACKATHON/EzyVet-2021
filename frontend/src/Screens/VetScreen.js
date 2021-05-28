import React, { useContext, useState, useEffect } from 'react';
import { Accordion, Card, Image, ListGroup, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import { VetContext } from '../context/';
import axios from 'axios';
import Map from '../components/Map';
import { HeaderStyle } from '../components/styledComponents/HomeElements';

const itemStyle = {
	backgroundColor: 'transparent',
};

const imgStyle = {
	width: '90%',
	display: 'block',
	objectFit: 'cover',
	right: '0px',
};

const VetScreen = ({ history, match }) => {
	const { vetData } = useContext(VetContext);
	const [vet, setVet] = useState();
	const [profiles, setProfiles] = useState();

	// const vet = vetData.find((x) => x.place_id === match.params.id);

	useEffect(() => {
		if (vetData) {
			const temp = vetData.find((x) => x.place_id === match.params.id);
			setVet(temp);
		}

		const fetchProfiles = async () => {
			const { data } = await axios.get('/api/vets/listProfiles/' + match.params.id);
			setProfiles(data);
		};

		fetchProfiles();
	}, [match.params.id, vetData]);

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
						</Col>
						<Col md={6}>
							<ListGroup variant="flush">
								<ListGroup.Item style={itemStyle}>
									<h2>{vet.name}</h2>
								</ListGroup.Item>

								<ListGroup.Item style={itemStyle}>
									Location: {vet.vicinity}
								</ListGroup.Item>
								{vet.phone && (
									<ListGroup.Item style={itemStyle}>
										Phone Number: {vet.phone}
									</ListGroup.Item>
								)}
								{vet.website && (
									<ListGroup.Item style={itemStyle}>
										Website: <a href={vet.website}>{vet.website}</a>
									</ListGroup.Item>
								)}
								{vet.rating && (
									<ListGroup.Item style={itemStyle}>
										Rating: {vet.rating}
									</ListGroup.Item>
								)}

								{vet.opening_hours && (
									<Accordion defaultActiveKey="1">
										<Accordion.Toggle
											as={ListGroup.Item}
											style={{
												backgroundColor: 'transparent',
												cursor: 'pointer',
												color: '#1FA167',
												fontStyle: 'italic',
											}}
											eventKey="0"
										>
											Show Opening hours
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
											<ListGroup>
												{vet.opening_hours.map((el, index) => (
													<ListGroup.Item style={itemStyle}>
														<div key={index}>{el}</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										</Accordion.Collapse>
									</Accordion>
								)}
							</ListGroup>
						</Col>
						<Row>
							<Accordion defaultActiveKey="1">
								<Accordion.Toggle eventKey="0">Show Doctors</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<ListGroup variant="flush">
										{profiles &&
											profiles.map((el, index) => (
												<ListGroup.Item key={index} style={itemStyle}>
													<Card>
														<Card.Body className="d-flex">
															<Card.Img
																src={`/img/${el.picture}`}
															></Card.Img>
															<Card.Text>
																Name: {el.name.title}{' '}
																{el.name.first} {el.name.last}
															</Card.Text>
														</Card.Body>
													</Card>
												</ListGroup.Item>
											))}
									</ListGroup>
								</Accordion.Collapse>
							</Accordion>
						</Row>
						<Col md={12} className="my-3 mx-auto">
							<HeaderStyle
								font="2.4rem"
								color="black"
								fontWeight="500"
								align="center"
							>
								Find on the map
							</HeaderStyle>
							<Map
								markers={[
									{
										lat: vet.location.lat,
										lng: vet.location.lng,
										info: vet.name,
									},
								]}
								zoom={12}
							/>
						</Col>
					</Row>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default VetScreen;
