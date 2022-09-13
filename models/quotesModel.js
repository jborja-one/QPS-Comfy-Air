const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema(
	{
		quoteNumber: { type: Number, default: 0 },
		quoteDate: { type: Date },
		quoteStatus: { type: String },
		quoteTotal: { type: Number },
		quoteNotes: { type: String },
		client: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Client',
		},
		items: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Item',
			},
		],
	},
	{
		timestamps: true,
	}
);

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
