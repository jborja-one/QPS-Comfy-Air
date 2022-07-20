//Connection file to mongo db
const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://comfyair:comfyair@cluster0.xs6h7.mongodb.net/?retryWrites=true&w=majority',
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
			}
		);
		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan.underline
		);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.bold);
		process.exit();
	}
};

module.exports = connectDB;
