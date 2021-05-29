const Vet = require('../models/Vet');
const asyncHandler = require('express-async-handler');

//@desc get list of vets
//@route Get /api/vets/list
//@access Public
exports.listVets = asyncHandler(async (req, res) => {
	// Fetch list of vets
	const list = await Vet.find();
	// Return list
	res.json(list);
});

//@desc get profiles from a vet id
//@route Get /api/vets/listProfiles/<id>
//@access Public
exports.listVetProfiles = asyncHandler(async (req, res) => {
	// Fetch vet by request id
	const list = await Vet.findOne({ place_id: req.params.id })
		// Populate profiles
		.populate('profiles')
		// Only return profile information
		.select('profiles');
	// Return profiles
	res.json(list.profiles);
});
