import axios from 'axios';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CLEAR_ERRORS,
} from '../constants/userConstant';

// Login
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGIN_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Logout
export const logout = () => async (dispatch) => {
	try {
		await axios.get('/api/users/logout');

		dispatch({
			type: LOGOUT_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
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
