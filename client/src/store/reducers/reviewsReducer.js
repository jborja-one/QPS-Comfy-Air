import {
	REVIEW_REQUEST,
	REVIEW_SUCCESS,
	REVIEW_FAIL,
	CLEAR_ERRORS,
} from '../constants/reviewsConstant';

export const reviewsReducer = (state = { reviews: [] }, action) => {
	switch (action.type) {
		case REVIEW_REQUEST:
			return {
				loading: true,
				reviews: [],
			};
		case REVIEW_SUCCESS:
			return {
				loading: false,
				reviews: action.payload.clients.clients,
			};
		case REVIEW_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
