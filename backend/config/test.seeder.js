const Profile = require('../models/Profile');
const Vet = require('../models/Vet');
const { profiles, vets } = require('../data/data');

//@desc imports json into test database
const importData = async () => {
	// Insert json into vets
	await Vet.insertMany(vets);

	// For each json profile
	for (const profile of profiles) {
		// Create mongo profile
		const mongoProfile = new Profile(profile);
		// Save profile
		await mongoProfile.save();

		// Attempt to find vet profile works_at
		await Vet.findOne({ place_id: profile.works_at })
			// Populate the profiles
			.populate('profiles')
			// Append mongo profile reference
			.exec(function (err, vet) {
				vet.profiles = [...vet.profiles, mongoProfile._id];
				vet.save().catch((e) => {});
			});
	}
	console.log('Data Imported');
};

module.exports = { importData };
