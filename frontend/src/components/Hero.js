import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Slide from 'react-reveal';
import { LinkContainer } from 'react-router-bootstrap';
import { ImageStyle, HeaderStyle, TextStyle } from './styledComponents/HomeElements';

const Hero = () => {
	return (
		<div id="home" style={{ minHeight: '90vh' }}>
			<Container
				style={{ minHeight: '70vh' }}
				className="d-flex justify-content-center align-items-center h-100"
			>
				<Row>
					<Col md={5} sm={12} className="d-flex flex-column  justify-content-center my-3">
						<Slide left>
							<HeaderStyle font={'5em'}>EzyVet Match</HeaderStyle>
							<TextStyle align="left">
								Find your best vet practice. Join us and see the best vet clinics
								around you! See the location, rating and much more!
							</TextStyle>
							<Row className="d-flex align-items-center justify-content-center">
								<LinkContainer to="/list" className="mr-3">
									<Button id="heroBtn" className="mb-1">
										View Clinics
									</Button>
								</LinkContainer>
								<LinkContainer to="/list">
									<Button id="heroBtn">Join us</Button>
								</LinkContainer>
							</Row>
						</Slide>
					</Col>
					<Col md={7} sm={0} className="d-flex flex-column justify-content-center my-5">
						<Slide right>
							<ImageStyle width={'100%'} src="img/welcome.png"></ImageStyle>
						</Slide>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Hero;
