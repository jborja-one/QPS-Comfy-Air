import axios from 'axios';
import {
	MESSAGE_REQUEST,
	MESSAGE_SUCCESS,
	MESSAGE_FAIL,
	CLEAR_ERRORS,
} from '../constants/messageConstant';

// Get all messages
export const getMessages = () => async (dispatch) => {
	try {
		dispatch({ type: MESSAGE_REQUEST });

		const { data } = await axios.get('/api/messages');

		dispatch({
			type: MESSAGE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: MESSAGE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Create message
export const createMessage = (messageData) => async (dispatch) => {
	try {
		dispatch({ type: MESSAGE_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/messages', messageData, config);
		console.log(data);
		dispatch({
			type: MESSAGE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: MESSAGE_FAIL,
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
