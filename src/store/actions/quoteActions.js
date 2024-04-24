import axios from 'axios';
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

//create a new quote
export const createQuote = (quoteData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_QUOTE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/quotes', quoteData, config);

		dispatch({
			type: CREATE_QUOTE_SUCCESS,
			payload: data.quote,
		});
	} catch (error) {
		dispatch({
			type: CREATE_QUOTE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Get all quotes
export const getAllQuotes = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_QUOTES_REQUEST });

		const { data } = await axios.get('/api/quotes');

		dispatch({
			type: GET_ALL_QUOTES_SUCCESS,
			payload: data.quotes,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_QUOTES_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Get quote by id
export const getQuoteById = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_QUOTE_BY_ID_REQUEST });

		const { data } = await axios.get(`/api/quotes/${id}`);

		dispatch({
			type: GET_QUOTE_BY_ID_SUCCESS,
			payload: data.quote,
		});
	} catch (error) {
		dispatch({
			type: GET_QUOTE_BY_ID_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Update quote
export const updateQuote = (id, quoteData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_QUOTE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.put(
			`/api/quotes/${id}`,
			quoteData,
			config
		);

		dispatch({
			type: UPDATE_QUOTE_SUCCESS,
			payload: data.quote,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_QUOTE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Delete quote
export const deleteQuote = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_QUOTE_REQUEST });

		await axios.delete(`/api/quotes/${id}`);

		dispatch({
			type: DELETE_QUOTE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: DELETE_QUOTE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Reset quote
export const resetQuote = () => async (dispatch) => {
	dispatch({
		type: QUOTE_RESET,
	});
};
