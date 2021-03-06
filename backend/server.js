const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
var cors = require('cors');
const path = require('path');
const { notFound, errorHandler } = require('./middleware/error');

const vetRoutes = require('./routes/vetRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

dotenv.config();
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//ROUTES
// app.use('/api/articles', bookRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/users', userRoutes);

//Check production or dev
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(path.resolve(), '/frontend/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve('frontend', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('Hello fellow HACKATHON the app is running yaay!!!!');
	});
}

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(port, console.log(`Server is running on the port ${port}`));

module.exports = { app, server };
