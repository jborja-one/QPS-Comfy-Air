const express = require('express');

const {
	getClients,
	deleteClient,
	createClient,
	getClientById,
	updateClient,
} = require('../controllers/clientController');

const router = express.Router();

router.route('/').get(getClients).post(createClient);
router.route('/:id').get(getClientById).delete(deleteClient).put(updateClient);

module.exports = router;
