import {
	MESSAGE_REQUEST,
	MESSAGE_SUCCESS,
	MESSAGE_FAIL,
	CLEAR_ERRORS,
} from '../constants/messageConstant';

export const messageReducer = (state = { messages: [] }, action) => {
	switch (action.type) {
		case MESSAGE_REQUEST:
			return {
				loading: true,
				messages: [],
			};
		case MESSAGE_SUCCESS:
			return {
				loading: false,
				messages: action.payload,
			};
		case MESSAGE_FAIL:
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
