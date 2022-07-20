const express = require('express');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Backend server is running');
});

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
