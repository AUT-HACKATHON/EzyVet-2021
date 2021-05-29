const jwt = require('jsonwebtoken');

//@desc generate a jwt token for a user using a secret key
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
};

module.exports = generateToken;
