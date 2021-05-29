import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { doctors } from '../data/data';
import {
	FeatureCard,
	FeatureImage,
	FeatureTitle,
	HeaderStyle,
	TextStyle,
} from './styledComponents/HomeElements';

const Doctors = () => {
	console.log(doctors);
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
			<HeaderStyle font="3rem">We have the best Vets</HeaderStyle>
			<Row>
				{doctors.map((el, index) => (
					<Col sm={6} md={3} key={index}>
						<FeatureCard>
							<FeatureImage>
								<img src={'/img/' + el.picture} alt="" />
							</FeatureImage>
							<FeatureTitle font="1em">{el.name.first}dsds</FeatureTitle>
							<TextStyle font={'1rem'}>{el.text}</TextStyle>
						</FeatureCard>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Doctors;
