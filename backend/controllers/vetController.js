const Vet = require('../models/Vet');
const asyncHandler = require('express-async-handler');

//@desc get list of vets
//@route Get /api/vets/list
//@access Public
exports.listVets = asyncHandler(async (req, res) => {
	const list = await Vet.find();
	res.json(list);
});

//@desc get profiles from a vet id
//@route Get /api/vets/listProfiles/<id>
//@access Public
exports.listVetProfiles = asyncHandler(async (req, res) => {
	const list = await Vet.findOne({ place_id: req.params.id })
		.populate('profiles')
		.select('profiles');
	res.json(list.profiles);
});
