const express = require('express');

const {
	createProject,
	getProjectByClientID,
	getProjectByID,
	getProjects,
	updateProject,
	deleteProject,
} = require('../controllers/projectController');

const router = express.Router();

router.route('/').post(createProject).get(getProjects);
router
	.route('/:id')
	.get(getProjectByID)
	.put(updateProject)
	.delete(deleteProject);
router.route('/client/:id').get(getProjectByClientID);

module.exports = router;
