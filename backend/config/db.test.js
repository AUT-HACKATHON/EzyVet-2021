const { connectDB, clearDB, closeDB } = require('./db.memory');

//@desc test mongo db
describe('Mongo memory test', () => {
	it('Mongodb memory connect test', async () => {
		expect.assertions(0);
		await connectDB();
	});
	it('Mongodb memory clear test', async () => {
		expect.assertions(0);
		await clearDB();
	});
	it('Mongodb memory close test', async () => {
		expect.assertions(0);
		await closeDB();
	});
});
