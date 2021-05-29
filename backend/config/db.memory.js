const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();
let connected = false;

const connectDB = async () => {
	try {
		if (!connected) {
			const uri = await mongod.getUri();
			await mongoose.connect(uri, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			});
			connected = true;
			console.log('MongoDB is Connected...');
		} else {
			console.log('MongoDB is already Connected...');
		}
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

const closeDB = async () => {
	try {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
		await mongod.stop();
		console.log('MongoDB closed Connection...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

const clearDB = async () => {
	try {
		const collections = Object.values(mongoose.connection.collections);
		collections.forEach(async (collection) => {
			await collection.deleteMany();
		});
		console.log('MongoDB cleared Database...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = { connectDB, closeDB, clearDB };
