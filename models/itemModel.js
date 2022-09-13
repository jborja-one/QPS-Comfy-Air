const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
	{
		itemNumber: { type: String },
		itemDescription: { type: String },
		itemPrice: { type: Number },
		itemQuantity: { type: Number },
		itemTotal: { type: Number },
		quote: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote' },
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
