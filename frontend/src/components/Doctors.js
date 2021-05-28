import React from 'react';
import { Col, Container, Fade, Row } from 'react-bootstrap';
import { features } from '../data/data';
import { FeatureCard, FeatureImage, HeaderStyle, TextStyle } from './styledComponents/HomeElements';

const Doctors = () => {
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
			<HeaderStyle>We have the best Vets</HeaderStyle>
			<Row>
				{features.map((el, index) => (
					<Col sm={8} md={4} key={index}>
						<Fade bottom>
							<FeatureCard>
								<FeatureImage>
									<img src={el.image} alt="" />
								</FeatureImage>
								<TextStyle font={'0.9rem'}>{el.text}</TextStyle>
							</FeatureCard>
						</Fade>
					</Col>
				))}

				<Col sm={8} md={4}></Col>
			</Row>
		</Container>
	);
};

export default 'Doctors';
