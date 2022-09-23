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

export const getInvoicesReducer = (state = { invoices: [] }, action) => {
	switch (action.type) {
		case GET_ALL_INVOICES_REQUEST:
			return {
				loading: true,
				invoices: [],
			};
		case GET_ALL_INVOICES_SUCCESS:
			return {
				loading: false,
				invoices: action.payload,
			};
		case GET_ALL_INVOICES_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getInvoiceByIdReducer = (state = { invoice: {} }, action) => {
	switch (action.type) {
		case GET_INVOICE_BY_ID_REQUEST:
			return {
				loading: true,
				invoice: {},
			};
		case GET_INVOICE_BY_ID_SUCCESS:
			return {
				loading: false,
				invoice: action.payload,
			};
		case GET_INVOICE_BY_ID_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const createInvoiceReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_INVOICE_REQUEST:
			return {
				loading: true,
			};
		case CREATE_INVOICE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case CREATE_INVOICE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case INVOICE_RESET:
			return {};
		default:
			return state;
	}
};

export const updateInvoiceReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_INVOICE_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_INVOICE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case UPDATE_INVOICE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case INVOICE_RESET:
			return {};
		default:
			return state;
	}
};

export const deleteInvoiceReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_INVOICE_REQUEST:
			return {
				loading: true,
			};
		case DELETE_INVOICE_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case DELETE_INVOICE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case INVOICE_RESET:
			return {};
		default:
			return state;
	}
};
