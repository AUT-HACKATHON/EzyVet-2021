import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Fade from 'react-reveal';

const Developers = () => {
	const headerStyle = {
		fontSize: '3rem',
		fontWeight: '700',
		lineHeight: '1.3',
		marginBottom: '40px',
		color: '#2b044d',
		maxWidth: '600px',
	};

	const textStyle = {
		color: '#707b8e',
		fontSize: '1.2rem',
		lineHeight: '30px',
		marginBottom: '15px',
		fontWeight: '400',
		maxWidth: '300px',
	};

	const cardHeader = {
		background: 'transparent',
		borderBottom: '5px solid #333399',
	};

	const cardTitle = {
		fontSize: '1rem',
	};

	return (
		<div id="team" style={{ minHeight: '100vh' }}>
			<Container className="d-flex flex-column justify-content-center align-items-center h-100 my-5">
				<h2 style={headerStyle}>Our team</h2>
				<Row>
					<Col sm={8} md={4}>
						<Fade bottom>
							<Card style={{ boxShadow: '3px 5px #FBD3E9' }}>
								<Card.Img variant="top" src="img/devTeam/team1.jpg" />
								<Card.Header style={cardHeader}>Automation</Card.Header>

								<Card.Body>
									<Card.Title style={cardTitle}>UX UI Designer </Card.Title>
									<Card.Text style={textStyle}>
										Just a student with a part time job and 2 exams tomorrow,
										who wants to win this Hackathon
									</Card.Text>
								</Card.Body>
							</Card>
						</Fade>
					</Col>
					<Col sm={8} md={4}>
						<Fade bottom>
							<Card style={{ boxShadow: '3px 5px #FBD3E9' }}>
								<Card.Img variant="top" src="img/devTeam/team2.jpg" />

								<Card.Header style={cardHeader}>Aldar Batomunkuev</Card.Header>

								<Card.Body>
									<Card.Title style={cardTitle}>Frontend Developer </Card.Title>
									<Card.Text style={textStyle}>
										Seriously I did it all by myself this was really stressful.
										I wanna WINNNN
									</Card.Text>
								</Card.Body>
							</Card>
						</Fade>
					</Col>
					<Col sm={8} md={4}>
						<Fade bottom>
							<Card style={{ boxShadow: '3px 5px #FBD3E9' }}>
								<Card.Img variant="top" src="img/devTeam/team3.jpg" />

								<Card.Header style={cardHeader}>Aldar Batomunkuev</Card.Header>

								<Card.Body>
									<Card.Title style={cardTitle}>Backend Engineer </Card.Title>

									<Card.Text style={textStyle}>
										I hope someone can appreciate the effort I put in this team.
										(Not a vegan)
									</Card.Text>
								</Card.Body>
							</Card>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Developers;
