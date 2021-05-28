const mongoose = require('mongoose');
const Profile = require('../models/Profile');

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
