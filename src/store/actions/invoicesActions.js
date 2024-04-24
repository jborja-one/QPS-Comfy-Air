import axios from 'axios';
import {
	GET_ALL_INVOICES_REQUEST,
	GET_ALL_INVOICES_SUCCESS,
	GET_ALL_INVOICES_FAIL,
	GET_INVOICE_BY_ID_REQUEST,
	GET_INVOICE_BY_ID_SUCCESS,
	GET_INVOICE_BY_ID_FAIL,
	CREATE_INVOICE_REQUEST,
	CREATE_INVOICE_SUCCESS,
	CREATE_INVOICE_FAIL,
	UPDATE_INVOICE_REQUEST,
	UPDATE_INVOICE_SUCCESS,
	UPDATE_INVOICE_FAIL,
	DELETE_INVOICE_REQUEST,
	DELETE_INVOICE_SUCCESS,
	DELETE_INVOICE_FAIL,
	INVOICE_RESET,
} from '../constants/InvoicesConstant';

//Create invoice
export const createInvoice = (invoice) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_INVOICE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/invoices', invoice, config);

		dispatch({
			type: CREATE_INVOICE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_INVOICE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Get all invoices
export const getAllInvoices = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_INVOICES_REQUEST });

		const { data } = await axios.get('/api/invoices');

		dispatch({
			type: GET_ALL_INVOICES_SUCCESS,
			payload: data.invoices,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_INVOICES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Get invoice by id
export const getInvoiceById = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_INVOICE_BY_ID_REQUEST });

		const { data } = await axios.get(`/api/invoices/${id}`);

		dispatch({
			type: GET_INVOICE_BY_ID_SUCCESS,
			payload: data.invoice,
		});
	} catch (error) {
		dispatch({
			type: GET_INVOICE_BY_ID_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Update invoice
export const updateInvoice = (id, invoice) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_INVOICE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.put(
			`/api/invoices/${id}`,
			invoice,
			config
		);

		dispatch({
			type: UPDATE_INVOICE_SUCCESS,
			payload: data.invoice,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_INVOICE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Delete invoice
export const deleteInvoice = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_INVOICE_REQUEST });

		await axios.delete(`/api/invoices/${id}`);

		dispatch({
			type: DELETE_INVOICE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: DELETE_INVOICE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Reset invoice
export const resetInvoice = () => async (dispatch) => {
	dispatch({ type: INVOICE_RESET });
};
