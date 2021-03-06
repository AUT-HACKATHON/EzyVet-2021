import React, { useState, useEffect, useContext } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/';

const LoginScreen = ({ history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const { user, login } = useContext(UserContext);

	useEffect(() => {
		if (user) {
			history.push('/');
		}
	}, [history, user]);

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await login(email, password);
			history.push('/');
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			);
		}
	};

	return (
		<Container>
			<Row>
				<Col md={8} xs={12} className="mx-auto">
					<Form onSubmit={submitHandler} className="my-5">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="my-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type="submit" variant="primary" className="my-2">
							Sign in
						</Button>
						{error && <Alert variant="info">{error}</Alert>}

						<Row className="py-3">
							<Col>
								Don't have an account?
								<Link to="/register"> Register</Link>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginScreen;
