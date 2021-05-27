import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar className="navbar">
				<Container>
					<LinkContainer style={{ cursor: 'pointer' }} to="/">
						<div className="nav-logo">Hello</div>
					</LinkContainer>
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
