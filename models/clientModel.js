const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
	{
		clientName: { type: String, required: true },
		clientEmail: { type: String, required: true, unique: true },
		clientPhone: { type: String, required: true, unique: true },
		clientStreet: { type: String, required: true },
		clientCity: { type: String, required: true },
		clientState: { type: String, required: true },
		clientZip: { type: String, required: true },
		clientNotes: [{ type: String }],
		project: [{ type: mongoose.Types.ObjectId, ref: 'Project' }],
		// quote: [{ type: mongoose.Types.ObjectId, ref: 'Quote' }],
		// invoice: [{ type: mongoose.Types.ObjectId, ref: 'Invoice' }],
	},
	{
		timestamps: true,
	}
);

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
