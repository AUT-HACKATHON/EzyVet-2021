import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal';
import {
	FeatureCard,
	FeatureImage,
	HeaderStyle,
	TextStyle,
	FeatureTitle,
} from './styledComponents/HomeElements';
import { features } from '../data/data';

const Features = () => {
	return (
		<div id="features">
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
				<HeaderStyle>Our Features</HeaderStyle>
				<Row>
					{features.map((el, index) => (
						<Col sm={12} md={4} key={index}>
							<Fade bottom>
								<FeatureCard>
									<FeatureImage>
										<img src={el.image} alt="" />
									</FeatureImage>
									<FeatureTitle font="1em">{el.header}</FeatureTitle>
									<TextStyle font={'1rem'}>{el.text}</TextStyle>
								</FeatureCard>
							</Fade>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Features;
