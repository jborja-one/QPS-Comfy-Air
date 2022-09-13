const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Client = require('../models/clientModel');
const Quote = require('../models/quotesModel');
const Item = require('../models/itemModel');
const HttpError = require('../utils/http-error');

// @desc    Create a quote
// @route   POST /api/quotes
// @access  Private
const createQuote = asyncHandler(async (req, res, next) => {
	let {
		quoteNumber,
		quoteDate,
		quoteStatus,
		quoteTotal,
		quoteNotes,
		client,
	} = req.body;

	const date = quoteDate.split('T');
	formattedDate = date[0];

	const quote = new Quote({
		quoteNumber,
		quoteDate: formattedDate,
		quoteStatus,
		quoteTotal,
		quoteNotes,
		client,
	});

	let clientID;

	try {
		clientID = await Client.findById(client);
	} catch (err) {
		const error = new HttpError('Client not found', 404);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await quote.save({ session: session });
		clientID.quote.push(quote);
		await clientID.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Creating quote failed', 500);
		return next(error);
	}

	res.status(201).json({ quote });
});

// @desc    Get quotes by Client ID
// @route   GET /api/quotes/client/:id
// @access  Public
const getQuotesByClientID = asyncHandler(async (req, res, next) => {
	const client = Client.findById(req.params.id);
	if (client) {
		const quotes = await Quote.find({ client: req.params.id })
			.populate('client')
			.populate('items');
		res.json({ quotes });
	} else {
		const error = new HttpError('Client not found', 404);
		return next(error);
	}
});

// @desc    Get all quotes
// @route   GET /api/quotes
// @access  Private
const getQuotes = asyncHandler(async (req, res) => {
	const quotes = await Quote.find({}).populate('client').populate('items');
	res.json({ quotes });
});

// @desc    Get quote by ID
// @route   GET /api/quotes/:id
// @access  Private
const getQuoteById = asyncHandler(async (req, res, next) => {
	const quote = await Quote.findById(req.params.id)
		.populate('client')
		.populate('items');

	if (quote) {
		res.json({ quote });
	} else {
		const HttpError = new HttpError('Quote not found', 404);
		return next(error);
	}
});

// @desc    Update quote
// @route   PUT /api/quotes/:id
// @access  Private
const updateQuote = asyncHandler(async (req, res, next) => {
	const {
		quoteNumber,
		quoteDate,
		quoteStatus,
		quoteTotal,
		quoteNotes,
		items,
	} = req.body;

	const quote = await Quote.findById(req.params.id);
	const item = quote.items.find((item) => item._id === items._id);

	if (quote) {
		quote.quoteNumber = quoteNumber;
		quote.quoteDate = quoteDate;
		quote.quoteStatus = quoteStatus;
		quote.quoteTotal = quoteTotal;
		quote.quoteNotes = quoteNotes;
		quote.items =
			items[
				{
					item: item.item,
					itemNumber: item.itemNumber,
					itemDescription: item.itemDescription,
					itemQuantity: item.itemQuantity,
					itemPrice: item.itemPrice,
					itemTotal: item.itemTotal,
				}
			];

		const updatedQuote = await quote.save();

		res.json({ updatedQuote });
	} else {
		const error = new HttpError('Quote not found', 404);
		return next(error);
	}
});

// @desc    Delete quote
// @route   DELETE /api/quotes/:id
// @access  Private
const deleteQuote = asyncHandler(async (req, res, next) => {
	const quoteId = req.params.id;

	if (!quoteId) {
		const error = new HttpError('No quote ID provided', 404);
		return next(error);
	}

	let quote, client;

	try {
		quote = await Quote.findById(quoteId).populate('items');
		client = await Client.findById(quote.client).populate('quote');
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await quote.remove({ session: session });
		quote.items.map((item) => item.remove({ session: session }));
		client.quote.pull(quote);
		await client.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	res.json({ message: 'Quote deleted' });
});

module.exports = {
	createQuote,
	getQuotes,
	getQuoteById,
	updateQuote,
	deleteQuote,
	getQuotesByClientID,
};
