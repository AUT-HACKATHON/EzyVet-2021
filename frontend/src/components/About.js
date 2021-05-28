import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal';
import { ImageStyle, HeaderStyle, TextStyle } from './HomeElements';

const About = () => {
	return (
		<div id="about" style={{ minHeight: '100vh' }}>
			<Row className="d-flex justify-content-between">
				<Col md={7} className="">
					<Slide left>
						<ImageStyle src="/img/about.png"></ImageStyle>
					</Slide>
				</Col>
				<Col md={5} className="d-flex flex-column align-items-baseline mb-5">
					<Slide right className="d-flex flex-column align-items-baseline mb-5">
						<HeaderStyle>About us</HeaderStyle>
						<TextStyle>
							More than 3000 pet lovers have joined us and made lives for their pets
							easier. Take ezyVet for a test drive and book a demo to find out what
							ezyVet can do for you
						</TextStyle>
					</Slide>
				</Col>
			</Row>
		</div>
	);
};
export default About;
