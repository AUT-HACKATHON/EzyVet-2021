import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import VetItemList from '../components/VetItemList';
import { VetContext } from '../context/VetContext';

const ListScreen = ({ history }) => {
	const { vetData } = useContext(VetContext);

	return (
		<>
			<h1>Vet clinics</h1>
			{vetData ? (
				<Row className="my-5">
					{vetData.map((value, index) => (
						<Col key={index} sm={12} md={6} lg={4} xl={3}>
							<VetItemList vet={value}> </VetItemList>
						</Col>
					))}
				</Row>
			) : (
				<h2>Loading</h2>
			)}
		</>
	);
};

export default ListScreen;
