/* eslint-disable jest/no-commented-out-tests */
const request = require('supertest');

const Profile = require('./models/Profile');
const Vet = require('./models/Vet');
const User = require('./models/User');

const { app, server } = require('./server');
const { connectDB, clearDB, closeDB } = require('./config/db.memory');
const { importData } = require('./config/test.seeder');

// Set timeout as the import can take a while
jest.setTimeout(1000000000);
beforeAll(async () => {
	// Setup connection
	await connectDB();
	// Import data
	await importData();
});

// T
describe('test database has been populated', () => {
	it('Vet has been populated', async () => {
		await Vet.find().then((vets) => {
			expect(vets.length > 0);
		});
	});
	it('Profile has been populated', async () => {
		await Profile.find().then((profiles) => {
			expect(profiles.length > 0);
		});
	});
	it('User is empty', async () => {
		await User.find().then((users) => {
			expect(users.length == 0);
		});
	});
});

afterAll(async () => {
	expect.assertions(0);
	// Closing the DB connection allows Jest to exit successfully.
	await clearDB();
	await closeDB();
	await server.close();
});
