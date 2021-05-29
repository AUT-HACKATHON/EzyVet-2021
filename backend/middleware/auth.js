const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

//@desc protect a route with jwt token
const protect = asyncHandler(async (req, res, next) => {
	let token;
	// Checks for headers
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			// Fetch token from headers
			token = req.headers.authorization.split(' ')[1];
			// Decode token into user id
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			// Fetch user from mong database
			// Then drop the password field
			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401);

			throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token found');
	}
});

module.exports = protect;
