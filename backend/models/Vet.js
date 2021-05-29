const mongoose = require('mongoose');
const Profile = require('../models/Profile');
const User = require('../models/User');

const Location = new mongoose.Schema({
	lat: {
		type: Number,
		required: true,
	},
	lng: {
		type: Number,
		required: true,
	},
});

const Endorsements = new mongoose.Schema({
	type: {
		type: String,
		enum: ['Dog', 'Cat', 'Turtle', 'Lizard', 'Fish'],
		required: true,
	},
	endorsements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Vet = new mongoose.Schema({
	place_id: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	location: {
		type: Location,
		required: true,
	},
	vicinity: {
		type: String,
		required: true,
	},
	location: {
		type: Location,
		required: true,
	},
	profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
	endorsements: [{ type: Endorsements }],
	image: {
		type: String,
	},
	phone: {
		type: String,
	},
	rating: {
		type: Number,
	},
	website: {
		type: String,
	},
	opening_hours: [{ type: String }],
});

module.exports = mongoose.model('Vet', Vet);
