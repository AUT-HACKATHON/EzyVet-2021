import React, { useContext, useState, useEffect } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import Loader from '../components/Loader';
import VetItemList from '../components/VetItemList';
import { VetContext } from '../context/';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

const sortArr = ['Default', 'Name', 'Distance', 'Rating'];

const ListScreen = ({ history }) => {
	const { vetData, location } = useContext(VetContext);
	const [displayVets, setDisplayVets] = useState();
	const [search, setSearch] = useState(null);
	const [sort, setSort] = useState('Default');

	useEffect(() => {
		if (vetData) {
			setDisplayVets(vetData);
		}
	}, [vetData]);

	useEffect(() => {
		if (vetData && location) {
			if (sort === 'Distance') {
				//TODO sort by location
			}
		}
	}, [location, sort, vetData]);

	useEffect(() => {
		console.log(displayVets);
	}, [sort, displayVets]);

	useEffect(() => {
		if (search) {
			geocodeByPlaceId(search.value.place_id)
				.then((results) => {
					const { geometry } = results[0];
					let coords = {};
					if (geometry.location) {
						coords.lat = geometry.location.lat();
						coords.lng = geometry.location.lng();
					} else if (geometry.bounds) {
						coords.lat = geometry.bounds.La.g;
						coords.lng = geometry.bounds.Ua.g;
					}
					console.log(coords);
					//TODO add coords
				})
				.catch(console.error);
		}
	}, [search]);

	const compare = (vet1, vet2, type) => {
		if (type === 'Default') {
			return;
		}

		const property = type.toLowerCase();

		if (vet1[property] < vet2[property]) {
			return -1;
		}
		if (vet1[property] > vet2[property]) {
			return 1;
		}
		return 0;
	};

	const sortArray = (type) => {
		if (type === 'Default') {
			setDisplayVets(vetData);
			return;
		}

		const sorted = [...displayVets].sort((a, b) => compare(a, b, type));
		setDisplayVets(sorted);
	};

	const handleSelectSort = (type) => {
		// if (type === 'Default') {
		// 	setDisplayVets(vetData);
		// 	setSort('Default');
		// 	return;
		// }
		// const filteredArticles = [...articles].filter((el) => {
		// 	return el.se_practice === type;
		// });
		// console.log(filteredArticles);
		// setDisplayArticles(filteredArticles);
		sortArray(type);
		setSort(type);
	};
	return (
		<div className="d-flex flex-column align-items-center">
			<h1 className="mb-5">Vet clinics</h1>
			<Row className="mb-4 ml-5 align-self-stretch d-flex align-items-center">
				<GooglePlacesAutocomplete
					apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
					// style={{ minWidth: '1000px' }}
					autocompletionRequest={{
						componentRestrictions: {
							country: ['nz'],
						},
					}}
					selectProps={{
						search,
						onChange: setSearch,
					}}
				/>
			</Row>
			<Row className="mb-4 ml-5 align-self-stretch d-flex align-items-center">
				<span className="mr-2">Sort By: </span>
				<Dropdown onSelect={handleSelectSort}>
					<Dropdown.Toggle
						variant="info"
						id="dropdown-basic"
						style={{ minWidth: '80px' }}
					>
						{sort}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{sortArr.map((el, index) => (
							<Dropdown.Item eventKey={el} key={index}>
								{el}
							</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</Row>

			{displayVets ? (
				<Row>
					{displayVets.map((value, index) => (
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
