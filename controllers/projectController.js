const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const Client = require('../models/clientModel');
const Project = require('../models/projectModel');
const HttpError = require('../utils/http-error');

// @desc    Create a Project
// @route   POST /api/project
// @access  Private
const createProject = async (req, res, next) => {
	let {
		projectNumber,
		projectDate,
		projectType,
		projectStatus,
		projectNotes,
		client,
		projectItems,
	} = req.body;

	const date = projectDate.split('T');
	formattedDate = date[0];

	const project = await new Project({
		projectNumber,
		projectDate,
		projectType,
		projectStatus,
		projectNotes,
		projectItems,
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
		await project.save({ session: session });
		clientID.project.push(project);
		await clientID.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Creating project failed', 500);
		return next(error);
	}

	res.status(201).json({ project });
};

// @desc    Get projects by Client ID
// @route   GET /api/projects/client/:id
// @access  Public
const getProjectByClientID = asyncHandler(async (req, res) => {
	const client = Client.findById(req.params.id);
	if (client) {
		const project = await Project.find({ client: req.params.id }).populate(
			'client'
		);
		res.json({ project });
	} else {
		const error = new HttpError('Client not found', 404);
		return next(error);
	}
});

// @desc    Get project by ID
// @route   GET /api/project/:id
// @access  Public
const getProjectByID = asyncHandler(async (req, res) => {
	const project = await Project.findById(req.params.id).populate('client');

	if (project) {
		res.json({ project });
	} else {
		const error = new HttpError('Project not found', 404);
		return next(error);
	}
});

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
	const projects = await Project.find({}).populate('client');
	res.json({ projects });
});

// @desc    Update a Project
// @route   PUT /api/project/:id
// @access  Private
const updateProject = asyncHandler(async (req, res, next) => {
	const {
		projectNumber,
		projectDate,
		projectStatus,
		projectNotes,
		projectItems,
	} = req.body;

	const project = await Project.findById(req.params.id);

	const date = projectDate.split('T');
	formattedDate = date[0];

	if (project) {
		project.projectNumber = projectNumber;
		project.projectDate = formattedDate;
		project.projectStatus = projectStatus;
		project.projectNotes = projectNotes;
		project.projectItems = projectItems;
		const updatedProject = await Project.save();
		res.json({ updatedProject });
	} else {
		const error = new HttpError('Invoice not found', 404);
		return next(error);
	}
});

// @desc    Delete a Project
// @route   DELETE /api/project/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
	const projectID = req.params.id;

	if (!projectID) {
		const error = new HttpError('Project not found', 404);
		return next(error);
	}

	let project, client;

	try {
		project = await Project.findById(projectID);
		client = await Client.findById(project.client).populate('project');
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	try {
		const session = await mongoose.startSession();
		session.startTransaction();
		await project.remove({ session: session });
		client.project.pull(project);
		await client.save({ session: session });
		await session.commitTransaction();
	} catch (err) {
		const error = new HttpError('Something went wrong', 500);
		return next(error);
	}

	res.status(200).json({ message: 'Project Deleted' });
});

module.exports = {
	createProject,
	getProjectByClientID,
	getProjectByID,
	getProjects,
	updateProject,
	deleteProject,
};
