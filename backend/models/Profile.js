const mongoose = require('mongoose');

const name = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	first: {
		type: String,
	},
	last: {
		type: String,
	},
});

const Date = mongoose.Schema({
	year: {
		type: String,
	},
	age: {
		type: Number,
	},
});

const Profile = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	gender: {
		type: String,
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
	registered: {
		type: Date,
		require: true,
	},
	works_at: {
		type: String,
		require: true,
	},
	picture: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Profile', Profile);
