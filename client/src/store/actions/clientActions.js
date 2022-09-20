import axios from 'axios';
import {
	CLIENT_REQUEST,
	CLIENT_SUCCESS,
	CLIENT_FAIL,
	CLIENT_BY_ID_REQUEST,
	CLIENT_BY_ID_SUCCESS,
	CLIENT_BY_ID_FAIL,
	CLEAR_ERRORS,
} from '../constants/clientsConstant';

// Get all clients
export const getClients = () => async (dispatch) => {
	try {
		dispatch({ type: CLIENT_REQUEST });

		const { data } = await axios.get('/api/clients');

		dispatch({
			type: CLIENT_SUCCESS,
			payload: data.clients,
		});
	} catch (error) {
		dispatch({
			type: CLIENT_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Create client
export const createClient = (clientData) => async (dispatch) => {
	try {
		dispatch({ type: CLIENT_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/clients', clientData, config);

		dispatch({
			type: CLIENT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CLIENT_FAIL,
			payload: error.response.data.message,
		});
	}
};

//Get client by id
export const getClientById = (id) => async (dispatch) => {
	try {
		dispatch({ type: CLIENT_BY_ID_REQUEST });

		const { data } = await axios.get(`/api/clients/${id}`);
		dispatch({
			type: CLIENT_BY_ID_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CLIENT_BY_ID_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Update client
export const updateClient = (id, clientData) => async (dispatch) => {
	try {
		dispatch({ type: CLIENT_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.put(
			`/api/clients/${id}`,
			clientData,
			config
		);

		dispatch({
			type: CLIENT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CLIENT_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Delete client
export const deleteClient = (id) => async (dispatch) => {
	try {
		dispatch({ type: CLIENT_REQUEST });

		const { data } = await axios.delete(`/api/clients/${id}`);

		dispatch({
			type: CLIENT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CLIENT_FAIL,
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
