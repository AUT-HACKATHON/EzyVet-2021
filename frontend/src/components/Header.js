import { useContext } from 'react';
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { UserContext } from '../context/';

const imgStyle = {
	width: '200px',
	// height: '500px',
	display: 'block',
	objectFit: 'cover',
};

const Header = () => {
	const { user, logout } = useContext(UserContext);
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
							<Nav.Link>Clinics</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						{user ? (
							<div>
								<LinkContainer to="/dashboard">
									<Nav.Link>{user.name}</Nav.Link>
								</LinkContainer>
								<NavDropdown title={<i className="fas fa-user"></i>} id="username">
									<LinkContainer className="mx-1" to="/other">
										<Nav.Link>Other</Nav.Link>
									</LinkContainer>
									<NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
								</NavDropdown>
							</div>
						) : (
							<LinkContainer className="mx-1" to="/login">
								<Nav.Link>Login</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
