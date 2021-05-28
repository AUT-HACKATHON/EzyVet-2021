import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Slide from 'react-reveal';
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
	const imgStyle = {
		width: '700px',
		display: 'block',
		objectFit: 'cover',
	};

	const headerStyle = {
		fontSize: '5rem',
		fontWeight: '700',
		lineHeight: '1.3',
		marginBottom: '40px',
		color: '#2b044d',
		maxWidth: '50vw',
	};

	const textStyle = {
		color: '#031e45',
		fontSize: '1.5rem',
		lineHeight: '30px',
		marginBottom: '20px',
		fontWeight: '400',
		maxWidth: '300px',
	};

	return (
		<div id="home" style={{ minHeight: '90vh' }}>
			<Container
				style={{ minHeight: '70vh' }}
				className="d-flex justify-content-center align-items-center h-100"
			>
				<Row>
					<Col md={5} className="d-flex flex-column  justify-content-center my-3">
						<Slide left>
							<h1 style={headerStyle}>EzyVet Match</h1>
							<div style={textStyle}>
								Find your best vet practice. Join us and see the best vet clinics
								around you! See the location, rating and much more!
							</div>
							<Row>
								<LinkContainer to="/list" className="mr-3">
									<Button id="heroBtn">View Clinics</Button>
								</LinkContainer>
								<LinkContainer to="/list">
									<Button id="heroBtn">Join us</Button>
								</LinkContainer>
							</Row>
						</Slide>
					</Col>
					<Col md={7} className="d-flex flex-column justify-content-center my-5">
						<Slide right>
							<Image style={imgStyle} src="img/welcome.png"></Image>
						</Slide>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Hero;
