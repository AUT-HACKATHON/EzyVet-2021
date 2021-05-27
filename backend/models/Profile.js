const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const name = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	first: {
		type: String,
		required: true,
	},
	last: {
		type: String,
		required: true,
	},
});

const Profile = new mongoose.Schema({
	name: {
		type: name,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model('Profile', Profile);
