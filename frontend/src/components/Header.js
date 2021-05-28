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
					<Nav className="ml-auto mr-4">
						<LinkContainer className="mx-1" to="/list">
							<Nav.Link>List</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						<LinkContainer className="mx-1" to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
