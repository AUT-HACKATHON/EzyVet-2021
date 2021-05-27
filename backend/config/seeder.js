const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Profile = require('../models/Profile');
const Vet = require('../models/Vet');
const { profiles, vets } = require('../data/data');
const connectDB = require('./db');

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Profile.deleteMany();
		await Vet.deleteMany();

		await Vet.insertMany(vets);
		for (const profile of profiles) {
			const mongoProfile = new Profile(profile);
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
