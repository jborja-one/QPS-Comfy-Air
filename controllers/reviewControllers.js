const Review = require('../models/reviewModel');

const createReview = async (req, res) => {
	const { fullName, rating, review, date, service } = req.body;

	const formReview = await Review.create({
		fullName,
		rating,
		service,
		review,
		date,
	});

	if (formReview) {
		res.status(201).json({
			_id: formReview._id,
			fullName: formReview.fullName,
			rating: formReview.rating,
			service: formReview.service,
			review: formReview.review,
			date: formReview.date,
		});
	} else {
		res.status(400);
		throw new Error('Review could not be created');
	}
};

const getReviews = async (req, res) => {
	const reviews = await Review.find();

	if (reviews) {
		res.status(200).json(reviews);
	} else {
		res.status(400);
		throw new Error('Reviews could not be found');
	}
};

module.exports = { createReview, getReviews };
