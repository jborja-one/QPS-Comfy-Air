const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {
	const { name, password, email } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(404);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		password,
		email,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			password: user.password,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('User could not be created');
	}
};

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid Email or Password');
	}
});

module.exports = { registerUser, loginUser };
