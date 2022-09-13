const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
	{
		fullName: { type: String },
		rating: { type: Number },
		service: { type: String },
		review: { type: String },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('Review', reviewSchema, 'reviews');
module.exports = User;
