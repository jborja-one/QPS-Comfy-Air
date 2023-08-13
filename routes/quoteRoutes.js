const express = require('express');
const {
	createQuote,
	getQuotes,
	getQuoteById,
	updateQuote,
	deleteQuote,
	getQuotesByClientID,
} = require('../controllers/quotesController');
const router = express.Router();

router.route('/').post(createQuote).get(getQuotes);
router.route('/:id').get(getQuoteById).put(updateQuote).delete(deleteQuote);
router.route('/client/:id').get(getQuotesByClientID);

module.exports = router;
