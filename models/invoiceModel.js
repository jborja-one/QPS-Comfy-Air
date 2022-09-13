const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema(
	{
		invoiceNumber: { type: Number, default: 0 },
		invoiceDate: { type: Date },
		invoiceStatus: { type: String },
		client: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Client',
		},
	},
	{
		timestamps: true,
	}
);

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
