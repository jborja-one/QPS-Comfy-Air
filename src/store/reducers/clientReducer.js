import {
	CLIENT_REQUEST,
	CLIENT_SUCCESS,
	CLIENT_FAIL,
	CLIENT_BY_ID_REQUEST,
	CLIENT_BY_ID_SUCCESS,
	CLIENT_BY_ID_FAIL,
	CLEAR_ERRORS,
} from '../constants/clientsConstant';

export const clientReducer = (state = { clients: [] }, action) => {
	switch (action.type) {
		case CLIENT_REQUEST:
			return {
				loading: true,
				clients: [],
			};
		case CLIENT_SUCCESS:
			return {
				loading: false,
				clients: action.payload,
			};
		case CLIENT_FAIL:
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

export const clientByIdReducer = (state = { client: {} }, action) => {
	switch (action.type) {
		case CLIENT_BY_ID_REQUEST:
			return {
				loading: true,
			};
		case CLIENT_BY_ID_SUCCESS:
			return {
				loading: false,
				client: action.payload,
			};
		case CLIENT_BY_ID_FAIL:
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
