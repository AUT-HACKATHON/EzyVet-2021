const mongoose = require('mongoose');

const Location = new mongoose.Schema({
	lat: {
		type: String,
		required: true,
	},
	lng: {
		type: String,
		required: true,
	},
});

const Vet = new mongoose.Schema({
	name: {
		type: Location,
		required: true,
	},
	place_id: {
		type: String,
		required: true,
		unique: true,
	},
	vicinity: {
		type: String,
		required: true,
	},
	location: {
		type: Location,
		required: true,
	},
	profiles: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
});

module.exports = mongoose.model('Vet', Vet);
