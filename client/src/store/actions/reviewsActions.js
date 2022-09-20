import axios from 'axios';
import {
	REVIEW_REQUEST,
	REVIEW_SUCCESS,
	REVIEW_FAIL,
	CLEAR_ERRORS,
} from '../constants/reviewsConstant';

// Get all reviews
export const getReviews = () => async (dispatch) => {
	try {
		dispatch({ type: REVIEW_REQUEST });

		const { data } = await axios.get('/api/reviews');

		dispatch({
			type: REVIEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: REVIEW_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Create review
export const createReview = (reviewData) => async (dispatch) => {
	try {
		dispatch({ type: REVIEW_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/reviews', reviewData, config);

		dispatch({
			type: REVIEW_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: REVIEW_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
};
