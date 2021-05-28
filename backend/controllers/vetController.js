const Vet = require('../models/Vet');
const asyncHandler = require('express-async-handler');

//@desc authenticating the user & get Token
//@route Post /api/users/login
//@access Public
exports.listVets = asyncHandler(async (req, res) => {
	const list = await Vet.find();
	res.json(list);
});