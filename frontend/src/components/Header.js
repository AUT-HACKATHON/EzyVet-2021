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
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

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
						<LinkContainer className="mx-1" to="/">
							<Nav.Link onClick={() => scrollTo('about')}>About</Nav.Link>
						</LinkContainer>
						<LinkContainer className="mx-1" to="/">
							<Nav.Link onClick={() => scrollTo('features')}>Features</Nav.Link>
						</LinkContainer>

						<LinkContainer className="mx-1" to="/list">
							<Nav.Link>Clinics</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						{user ? (
							<div>
								<NavDropdown title={<span> {user.name}</span>} id="username">
									<NavDropdown.Item className="my-1">
										<LinkContainer className="p-0" to="/other">
											<Nav.Link>Other</Nav.Link>
										</LinkContainer>
									</NavDropdown.Item>
									<NavDropdown.Item className="my-1">
										<LinkContainer className="p-0" to="/dashboard">
											<Nav.Link>Dashboard</Nav.Link>
										</LinkContainer>
									</NavDropdown.Item>
									<NavDropdown.Item className="my-1" onClick={logout}>
										Logout
									</NavDropdown.Item>
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
