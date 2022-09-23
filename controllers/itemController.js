const asyncHandler = require('express-async-handler');
const Item = require('../models/itemModel');
const Quote = require('../models/quotesModel');
const HttpError = require('../utils/http-error');
const mongoose = require('mongoose');

// @desc    Create a Item
// @route   POST /api/items
// @access  Private
const createItem = asyncHandler(async (req, res, next) => {
	const {
		itemName,
		itemDescription,
		itemQuantity,
		itemPrice,
		itemTotal,
		quote,
	} = req.body;
	const item = new Item({
		itemName,
		itemDescription,
		itemQuantity,
		itemPrice,
		itemTotal,
		quote,
	});

	let quoteId;

	try {
		quoteId = await Quote.findById(quote);
	} catch (err) {
		const error = new HttpError(
			'Could not find quote for provided id',
			404
		);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await item.save({ session: session });
		quoteId.items.push(item);
		await quoteId.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Creating item failed', 500);
		return next(error);
	}

	res.status(201).json({ item });
});

// @desc    Get all Items
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
	const items = await Item.find({});
	res.json({ items });
});

// @desc    Get a Item
// @route   GET /api/items/:id
// @access  Public
const getItemById = asyncHandler(async (req, res, next) => {
	const item = await Item.findById(req.params.id);
	if (item) {
		res.json({ item });
	} else {
		const error = new HttpError('Could not find item for provided id', 404);
		return next(error);
	}
});

// @desc    Update a Item
// @route   PUT /api/items/:id
// @access  Private
const updateItem = asyncHandler(async (req, res) => {
	const {
		itemName,
		itemNumber,
		itemDescription,
		itemQuantity,
		itemPrice,
		itemTotal,
	} = req.body;
	const item = await Item.findById(req.params.id);

	if (item) {
		item.itemNumber = itemNumber || item.itemNumber;
		item.itemName = itemName || item.itemName;
		item.itemDescription = itemDescription || item.itemDescription;
		item.itemQuantity = itemQuantity || item.itemQuantity;
		item.itemPrice = itemPrice || item.itemPrice;
		item.itemTotal = itemTotal || item.itemTotal;

		const updatedItem = await item.save();
		res.json(updatedItem);
	} else {
		const error = new HttpError('Could not find item for provided id', 404);
		return next(error);
	}
});

// @desc    Delete a Item
// @route   DELETE /api/items/:id
// @access  Private
const deleteItem = asyncHandler(async (req, res, next) => {
	const item = await Item.findById(req.params.id);

	if (item) {
		await item.remove();
		res.json({ message: 'Item removed' });
	} else {
		const error = new HttpError('Could not find item for provided id', 404);
		return next(error);
	}
});

module.exports = {
	getItems,
	getItemById,
	createItem,
	updateItem,
	deleteItem,
};
