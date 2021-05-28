import React, { useContext, useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import { VetContext } from '../context/VetContext';

const VetScreen = ({ history, match }) => {
	const { vetData } = useContext(VetContext);
	const [vet, setVet] = useState();

	// const vet = vetData.find((x) => x.place_id === match.params.id);

	useEffect(() => {
		if (vetData) {
			const temp = vetData.find((x) => x.place_id === match.params.id);

			setVet(temp);
		}
	}, [match.params.id, vetData]);

	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-4">Details Page</h1>
			{vet ? (
				<Row>
					<Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2>{vet.name}</h2>
							</ListGroup.Item>

							<ListGroup.Item>Location: {vet.vicinity}</ListGroup.Item>
						</ListGroup>
					</Col>
					{vet.name}
				</Row>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default VetScreen;
