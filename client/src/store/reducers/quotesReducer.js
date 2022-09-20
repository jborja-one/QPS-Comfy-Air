import {
	GET_ALL_QUOTES_REQUEST,
	GET_ALL_QUOTES_SUCCESS,
	GET_ALL_QUOTES_FAIL,
	GET_QUOTE_BY_ID_REQUEST,
	GET_QUOTE_BY_ID_SUCCESS,
	GET_QUOTE_BY_ID_FAIL,
	CREATE_QUOTE_REQUEST,
	CREATE_QUOTE_SUCCESS,
	CREATE_QUOTE_FAIL,
	UPDATE_QUOTE_REQUEST,
	UPDATE_QUOTE_SUCCESS,
	UPDATE_QUOTE_FAIL,
	DELETE_QUOTE_REQUEST,
	DELETE_QUOTE_SUCCESS,
	DELETE_QUOTE_FAIL,
	QUOTE_RESET,
} from '../constants/quotesConstant';

export const getQuotesReducer = (state = { quotes: [] }, action) => {
	switch (action.type) {
		case GET_ALL_QUOTES_REQUEST:
			return {
				loading: true,
				quotes: [],
			};
		case GET_ALL_QUOTES_SUCCESS:
			return {
				loading: false,
				quotes: action.payload,
			};
		case GET_ALL_QUOTES_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getQuoteByIdReducer = (state = { quote: {} }, action) => {
	switch (action.type) {
		case GET_QUOTE_BY_ID_REQUEST:
			return {
				loading: true,
				quote: {},
			};
		case GET_QUOTE_BY_ID_SUCCESS:
			return {
				loading: false,
				quote: action.payload,
			};
		case GET_QUOTE_BY_ID_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const createQuoteReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_QUOTE_REQUEST:
			return {
				loading: true,
			};
		case CREATE_QUOTE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case CREATE_QUOTE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case QUOTE_RESET:
			return {};
		default:
			return state;
	}
};

export const updateQuoteReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_QUOTE_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_QUOTE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case UPDATE_QUOTE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case QUOTE_RESET:
			return {};
		default:
			return state;
	}
};

export const deleteQuoteReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_QUOTE_REQUEST:
			return {
				loading: true,
			};
		case DELETE_QUOTE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case DELETE_QUOTE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case QUOTE_RESET:
			return {};
		default:
			return state;
	}
};
