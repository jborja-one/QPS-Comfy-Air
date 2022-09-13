const express = require('express');
const {
	createReview,
	getReviews,
} = require('../controllers/reviewControllers');

const router = express.Router();

router.route('/').post(createReview).get(getReviews);

module.exports = router;
