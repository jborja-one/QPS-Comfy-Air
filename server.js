const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');

const errorMiddleware = require('./middleware/error');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const messageRoutes = require('./routes/messagesRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const itemRoutes = require('./routes/itemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

//Handle uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log(`Error: ${err.message}`.red.bold);
	console.log('Shutting down due to uncaught exception'.red.bold);
	process.exit(1);
});

const app = express();
app.use(morgan('dev'));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/invoices', invoiceRoutes);

// Middleware to handle errors
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}`.red.bold);
	console.log(
		'Shutting down the server due to Unhandled Promise Rejection'.red.bold
	);
	// Close server & exit process
	server.close(() => process.exit(1));
});
