const mongoose = require('mongoose');

// Function to check if jest worker is running
function areWeTestingWithJest() {
	return process.env.JEST_WORKER_ID !== undefined;
}

//@desc connect to the mongo database
const connectDB = async () => {
	// Check for testing and abort
	if (areWeTestingWithJest()) {
		return;
	}
	try {
		// Connect to mongo databse from env configuration
		await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log('MongoDB is Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
