const Profile = require('../models/Profile');
const Vet = require('../models/Vet');
const { profiles, vets } = require('../data/data');

const importData = async () => {
	await Vet.insertMany(vets);
	for (const profile of profiles) {
		const mongoProfile = new Profile(profile);
		await mongoProfile.save();
		await Vet.findOne({ place_id: profile.works_at })
			.populate('profiles')
			.exec(function (err, vet) {
				vet.profiles = [...vet.profiles, mongoProfile._id];
				vet.save().catch((e) => {});
			});
	}
	console.log('Data Imported');
};

module.exports = { importData };
