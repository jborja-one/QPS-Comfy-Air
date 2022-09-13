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

const getMessages = async (req, res) => {
	const messages = await Message.find();

	if (messages) {
		res.status(200).json(messages);
	} else {
		res.status(400);
		throw new Error('Messages could not be found');
	}
};

module.exports = { createMessage, getMessages };
