import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const imgStyle = {
	width: '200px',
	// height: '500px',
	display: 'block',
	objectFit: 'cover',
};

const Header = () => {
	return (
		<header>
			<Navbar className="navbar">
				<Container>
					<LinkContainer style={{ cursor: 'pointer' }} to="/">
						<h1>
							<Image style={imgStyle} src="/img/logo.png"></Image>
						</h1>
					</LinkContainer>
					<Nav>
						<LinkContainer className="mx-1" to="/list">
							<Nav.Link>List</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
