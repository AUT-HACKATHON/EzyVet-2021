import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slide from 'react-reveal';

const About = () => {
	const imgStyle = {
		width: '500px',
		// height: '500px',
		display: 'block',
		objectFit: 'cover',
	};

	const headerStyle = {
		fontSize: '5rem',
		fontWeight: '700',
		lineHeight: '1.3',
		marginBottom: '40px',
		color: '#2b044d',
		maxWidth: '600px',
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
		<div id="about" style={{ minHeight: '100vh' }}>
			<Container className="d-flex justify-content-start  h-100 my-5">
				<Row className="d-flex justify-content-between">
					<Col md={7} className="">
						<Slide left>
							<Image style={imgStyle} src="img/park1.png"></Image>
						</Slide>
					</Col>
					<Col md={4} className="d-flex flex-column align-items-baseline mb-5">
						<Slide right>
							<h2 style={headerStyle}>About us</h2>
							<div style={textStyle}>
								More than 3000 pet lovers have joined us and made lives for their
								pets easier. Take ezyVet for a test drive and book a demo to find
								out what ezyVet can do for you
							</div>
						</Slide>

						{/* <Button id="heroBtn">Join now</Button> */}
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default About;
