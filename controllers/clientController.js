const Client = require('../models/clientModel');
const HttpError = require('../utils/http-error');

// @desc    Create a client
// @route   POST /api/clients
// @access  Private
const createClient = async (req, res, next) => {
	const {
		clientName,
		clientEmail,
		clientPhone,
		clientStreet,
		clientCity,
		clientState,
		clientZip,
		clientNotes,
	} = req.body;

	const existingPhone = await Client.findOne({ clientPhone });
	const existingEmail = await Client.findOne({ clientEmail });

	if (existingEmail || existingPhone) {
		res.status(400);
		const error = new HttpError('Client already exists', 400);
		return next(error);
	}

	const client = await Client.create({
		clientName,
		clientEmail,
		clientPhone,
		clientStreet,
		clientCity,
		clientState,
		clientZip,
		clientNotes,
	});

	if (client) {
		res.status(201).json({ client });
	} else {
		res.status(400);
		const error = new HttpError('Invalid client data', 400);
		return next(error);
	}
};

//@desc    Get client by ID
//@route   GET /api/clients/:id
//@access  Private
const getClientById = async (req, res, next) => {
	const client = await Client.findById(req.params.id).populate('project');

	if (client) {
		res.json(client);
	} else {
		res.status(404);
		const error = new HttpError('Client not found', 404);
		return next(error);
	}
};

// @desc    Get all clients
// @route   GET /api/clients
// @access  Private
const getClients = async (req, res) => {
	const clients = await Client.find({}).populate('project');
	res.json({ clients });
};

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private
const deleteClient = async (req, res, next) => {
	const clientId = req.params.id;

	if (!clientId) {
		res.status(404);
		const error = new HttpError('Client not found', 404);
		return next(error);
	}

	const client = await Client.findById(clientId).populate('project');
	console.log(client.project.length);

	if (!client.project.length === 0) {
		await client.remove();
		res.json({ message: 'Client removed' });
	} else {
		res.status(404);
		const error = new HttpError(
			'Client has quotes or invoices and cannot be deleted.',
			404
		);
		return next(error);
	}
};

// @desc    Update a client
// @route   PUT /api/clients/:id
// @access  Private
const updateClient = async (req, res) => {
	const {
		clientName,
		clientEmail,
		ClientPhone,
		ClientStreet,
		clientCity,
		clientState,
		clientZip,
		clientNotes,
	} = req.body;

	const client = await Client.findById(req.params.id);

	if (client) {
		client.clientName = clientName || client.clientName;
		client.clientEmail = clientEmail || client.clientEmail;
		client.ClientPhone = ClientPhone || client.ClientPhone;
		client.ClientStreet = ClientStreet || client.ClientStreet;
		client.clientCity = clientCity || client.clientCity;
		client.clientState = clientState || client.clientState;
		client.clientZip = clientZip || client.clientZip;
		client.clientNotes = clientNotes || client.clientNotes;

		const updatedClient = await client.save();
		res.json({
			_id: updatedClient._id,
			clientName: updatedClient.clientName,
			clientEmail: updatedClient.clientEmail,
			ClientPhone: updatedClient.ClientPhone,
			ClientStreet: updatedClient.ClientStreet,
			clientCity: updatedClient.clientCity,
			clientState: updatedClient.clientState,
			clientZip: updatedClient.clientZip,
			clientNotes: updatedClient.clientNotes,
		});
	} else {
		res.status(404);
		const error = new HttpError('Client not found', 404);
		return next(error);
	}
};

module.exports = {
	getClients,
	deleteClient,
	createClient,
	updateClient,
	getClientById,
};
