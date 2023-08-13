const express = require('express');
const {
	createInvoice,
	getInvoicesByClientID,
	getInvoices,
	getInvoiceByID,
	updateInvoice,
	deleteInvoice,
} = require('../controllers/invoiceController');

const router = express.Router();

router.route('/').post(createInvoice).get(getInvoices);
router
	.route('/:id')
	.get(getInvoiceByID)
	.put(updateInvoice)
	.delete(deleteInvoice);
router.route('/client/:id').get(getInvoicesByClientID);

module.exports = router;
