const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('../models/Profile');
const Vet = require('../models/Vet');
const { profiles, vets } = require('../data/data');
const connectDB = require('./db');
const fetch = require('node-fetch');

// Import env configuration
dotenv.config();
// Retrieve google key from env
const key = process.env.REACT_APP_GOOGLE_API_KEY;

// Connect to mongo database
connectDB();

//@desc fetch information from google api for a vet place
const fetchDetails = async (vet, place) => {
	// Build url
	let url = 'https://maps.googleapis.com/maps/api/place/details/json?';
	url += `place_id=${place}&fields=formatted_phone_number,opening_hours,website,rating&key=${key}`;

	// Fetch data
	const fetched = await fetch(url);

	// Deconstruct data
	const data = await fetched.json();
	const { result } = data;

	// Assign results if the exist
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

//@desc fetch place inforation from vet name
const fetchPlace = async (vet, name) => {
	// Build url
	let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
	url += `input=${encodeURIComponent(name)}&inputtype=textquery&fields=place_id,photo&key=${key}`;

	// Fetch data
	const fetched = await fetch(url);

	// Deconstruct data
	const data = await fetched.json();
	let { candidates } = data;

	// If there is a valid candidate
	if (candidates?.length > 0) {
		// Deconstruct candidate
		const candidate = candidates[0];
		const place_id = candidate.place_id;
		const { photos } = candidate;
		
		// If candidate has a photo
		if (photos?.length > 0) {
			if (vet) {
				// Fetch photo url
				let photoUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800';
				photoUrl += `&photoreference=${photos[0].photo_reference}&key=${key}`;
				const check = await fetch(photoUrl);
				vet.image = check.url;
			}
		}

		// Fetch futher details
		await fetchDetails(vet, place_id);

		// Save information
		vet?.save();
	}
};

//@desc import data into mongo database
const importData = async () => {
	try {
		// Delete existing information
		await Profile.deleteMany();
		await Vet.deleteMany();

		// Insert vet json
		await Vet.insertMany(vets);

		// Fetch vets references from database
		const vetDB = await Vet.find();
		for (const vet of vetDB) {
			// Update place details
			await fetchPlace(vet, vet.name);
		}

		// For each json profile
		for (const profile of profiles) {
			// Create mongo profile
			const mongoProfile = new Profile(profile);
			// Save profile
			await mongoProfile.save();
			// Attempt to find vet profile works_at
			await Vet.findOne({ place_id: profile.works_at })
			// Populate the profiles
				.populate('profiles')
				// Append mongo profile reference
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

//@desc destroys data in mongo database
const destroyData = async () => {
	try {
		// Delete existing information
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
