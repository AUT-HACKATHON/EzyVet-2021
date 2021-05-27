const mongoose = require('mongoose');

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

const Date = mongoose.Schema({});

const Profile = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	gender: {
		type: name,
		required: true,
	},
	name: {
		type: name,
		required: true,
	},
	dob: {
		type: Date,
		require: true,
	},
});

module.exports = mongoose.model('Profile', Profile);
