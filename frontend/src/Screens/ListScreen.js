import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import VetItemList from '../components/VetItemList';
import { VetContext } from '../context/';
const ListScreen = ({ history }) => {
	const { vetData } = useContext(VetContext);

	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-5">Vet clinics</h1>

			{vetData ? (
				<Row>
					{vetData.map((value, index) => (
						<Col key={index} sm={12} md={6} lg={4} xl={3}>
							<VetItemList vet={value}> </VetItemList>
						</Col>
					))}
				</Row>
			) : (
				<Loader className="my-5"></Loader>
			)}
		</div>
	);
};

export default ListScreen;
