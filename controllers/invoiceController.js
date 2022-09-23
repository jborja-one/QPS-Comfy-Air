const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Invoice = require('../models/invoiceModel');
const Client = require('../models/clientModel');
const Item = require('../models/itemModel');
const HttpError = require('../utils/http-error');

// @desc    Create an invoice
// @route   POST /api/invoices
// @access  Private
const createInvoice = asyncHandler(async (req, res, next) => {
	let { invoiceNumber, invoiceDate, invoiceStatus, client } = req.body;

	const date = invoiceDate.split('T');
	formattedDate = date[0];

	const invoice = new Invoice({
		invoiceNumber,
		invoiceDate: formattedDate,
		invoiceStatus,
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
		await invoice.save({ session: session });
		clientID.invoice.push(invoice);
		await clientID.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Creating invoice failed', 500);
		return next(error);
	}

	res.status(201).json({ invoice });
});

// @desc    Get invoices by Client ID
// @route   GET /api/invoices/client/:id
// @access  Public
const getInvoicesByClientID = asyncHandler(async (req, res) => {
	const client = Client.findById(req.params.id);
	if (client) {
		const invoices = await Invoice.find({ client: req.params.id }).populate(
			'client'
		);
		res.json({ invoices });
	} else {
		const error = new HttpError('Client not found', 404);
		return next(error);
	}
});

// @desc    Get invoice by ID
// @route   GET /api/invoices/:id
// @access  Public
const getInvoiceByID = asyncHandler(async (req, res, next) => {
	const invoice = await Invoice.findById(req.params.id).populate('client');

	if (invoice) {
		res.json({ invoice });
	} else {
		const error = new HttpError('Invoice not found', 404);
		return next(error);
	}
});

// @desc    Get all Invoices
// @route   GET /api/invoices
// @access  Public
const getInvoices = asyncHandler(async (req, res) => {
	const invoices = await Invoice.find({}).populate('client');
	res.json({ invoices });
});

// @desc    Update an invoice
// @route   PUT /api/invoices/:id
// @access  Private
const updateInvoice = asyncHandler(async (req, res, next) => {
	const { invoiceNumber, invoiceDate, invoiceStatus } = req.body;

	const invoice = await Invoice.findById(req.params.id);

	const formattedDate = invoiceDate.split('T')[0];
	console.log(formattedDate);

	if (invoice) {
		invoice.invoiceNumber = invoiceNumber;
		invoice.invoiceDate = formattedDate;
		invoice.invoiceStatus = invoiceStatus;
		const updatedInvoice = await invoice.save();
		res.json({ updatedInvoice });
	} else {
		const error = new HttpError('Invoice not found', 404);
		return next(error);
	}
});

// @desc    Delete an invoice
// @route   DELETE /api/invoices/:id
// @access  Private
const deleteInvoice = asyncHandler(async (req, res, next) => {
	const invoiceId = req.params.id;

	if (!invoiceId) {
		const error = new HttpError('Invoice not found', 404);
		return next(error);
	}

	let invoice, client;

	try {
		invoice = await Invoice.findById(invoiceId);
		client = await Client.findById(invoice.client).populate('invoice');
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await invoice.remove({ session: session });
		client.invoice.pull(invoice);
		await client.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	res.status(200).json({ message: 'Invoice deleted' });
});

module.exports = {
	createInvoice,
	getInvoicesByClientID,
	getInvoiceByID,
	getInvoices,
	updateInvoice,
	deleteInvoice,
};
