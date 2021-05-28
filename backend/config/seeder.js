const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('../models/Profile');
const Vet = require('../models/Vet');
const { profiles, vets } = require('../data/data');
const connectDB = require('./db');
const fetch = require('node-fetch');

dotenv.config();
const key = process.env.REACT_APP_GOOGLE_API_KEY;

connectDB();

const fetchDetails = async (vet, place) => {
	let url = 'https://maps.googleapis.com/maps/api/place/details/json?';
	url += `place_id=${place}&fields=formatted_phone_number,opening_hours,website,rating&key=${key}`;
	const fetched = await fetch(url);
	const data = await fetched.json();
	const { result } = data;
	if (result.formatted_phone_number) {
		vet.phone = result.formatted_phone_number;
	}
	if (result.rating) {
		vet.rating = result.rating;
	}
	if (result.website) {
		vet.website = result.website;
	}
	if (result.opening_hours) {
		const { opening_hours } = result;
		if (opening_hours.weekday_text) {
			const { weekday_text } = opening_hours;
			vet.opening_hours = weekday_text;
		}
	}
};

const fetchPlace = async (vet, name) => {
	let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
	url += `input=${encodeURIComponent(name)}&inputtype=textquery&fields=place_id,photo&key=${key}`;
	const fetched = await fetch(url);
	const data = await fetched.json();
	let { candidates } = data;

	if (candidates?.length > 0) {
		const candidate = candidates[0];
		const place_id = candidate.place_id;
		const { photos } = candidate;
		if (photos?.length > 0) {
			if (vet) {
				let photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800';
				photoUrl += `&photoreference=${photos[0].photo_reference}&key=${key}`;
				const check = await fetch(photoUrl);
				vet.image = check.url;
			}
		}
		await fetchDetails(vet, place_id);
		vet?.save();
	}
};

const importData = async () => {
	try {
		await Profile.deleteMany();
		await Vet.deleteMany();

		await Vet.insertMany(vets);

		const vetDB = await Vet.find();
		for (const vet of vetDB) {
			await fetchPlace(vet, vet.name);
		}

		for (const profile of profiles) {
			const mongoProfile = new Profile(profile);
			await mongoProfile.save();
			await Vet.findOne({ place_id: profile.works_at })
				.populate('profiles')
				.exec(function (err, vet) {
					vet.profiles = [...vet.profiles, mongoProfile._id];
					vet.save();
				});
		}

		console.log('Data Imported');
		process.exit();
	} catch (err) {
		console.log(`${err}`);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Profile.deleteMany();
		await Vet.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (err) {
		console.log(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
