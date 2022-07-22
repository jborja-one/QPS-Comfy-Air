const asyncHandler = require('express-async-handler');
const Message = require('../models/messagesModel');

const createMessage = async (req, res) => {
	const { fullName, phoneNumber, email, service, message } = req.body;

	const formMessage = await Message.create({
		fullName,
		phoneNumber,
		email,
		service,
		message,
	});

	if (formMessage) {
		res.status(201).json({
			_id: formMessage._id,
			fullName: formMessage.fullName,
			phoneNumber: formMessage.phoneNumber,
			email: formMessage.email,
			service: formMessage.service,
			message: formMessage.message,
		});
	} else {
		res.status(400);
		throw new Error('Message could not be created');
	}
};

module.exports = { createMessage };
