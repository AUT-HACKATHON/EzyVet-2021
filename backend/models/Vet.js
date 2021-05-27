const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('Vet', Vet);
