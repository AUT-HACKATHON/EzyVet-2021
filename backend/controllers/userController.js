const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken.js');

//@desc authenticating the user & get Token
//@route Post /api/users/login
//@access Public
exports.authUser = asyncHandler(async (req, res) => {
	// Retrieve body parameters
	const { email, password } = req.body;

	// Find user by email
	const user = await User.findOne({ email });

	// Attempt match password
	if (user && (await user.matchPassword(password))) {
		// Respond with profile
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);

		throw new Error('Invalid Email or password');
	}
});

//@desc registering a new user
//@route Post /api/users/login
//@access Public
exports.registerUser = asyncHandler(async (req, res) => {
	// Retrieve body parameters
	const { name, email, password } = req.body;
	// Attempt match user by email
	const userExists = await User.findOne({ email });

	// If exists throw error
	if (userExists) {
		res.status(400);
		throw new Error('Current email is already used');
	}

	// Create new user
	const user = await User.create({
		name,
		email,
		password,
	});

	// If user was created
	if (user) {
		// Respond with user info
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid data supplied');
	}
});

//@desc get user profile
//@route Post /api/users/profile
//@access Private
exports.getUserProfile = asyncHandler(async (req, res) => {
	// Fetch user profile by id
	const user = await User.findById(req.params.id);

	// If user exists
	if (user) {
		// Respon with user information
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			image: user.image,
			liked: user.liked,
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

//@desc get user profile
//@route Put /api/users/profile
//@access Private
exports.updateUserProfile = asyncHandler(async (req, res) => {
	// Fetch user by user id
	const user = await User.findById(req.user._id);

	// If user exists
	if (user) {
		// Update details
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.liked = req.body.liked || user.liked;

		// Save updated user
		const updatedUser = await user.save();

		// Respond with user information
		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			liked: user.liked,
			token: generateToken(updatedUser._id),
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});
