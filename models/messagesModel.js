const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
	{
		fullName: { type: String },
		phoneNumber: { type: String },
		email: { type: String },
		service: { type: String },
		message: { type: String },
	},
	{ timestamps: true }
);

const Message = mongoose.model('Message', messageSchema, 'messages');
module.exports = Message;
