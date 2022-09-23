const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
	{
		itemNumber: { type: String },
		itemName: { type: String },
		itemDescription: { type: String },
		itemQuantity: { type: Number },
		itemPrice: { type: Number },
		itemTotal: { type: Number },
		quote: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote' },
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
