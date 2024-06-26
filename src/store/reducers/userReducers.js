import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CLEAR_ERRORS,
} from '../constants/userConstant';

export const authReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case LOGIN_FAIL:
			return {
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case LOGOUT_SUCCESS:
			return {
				loading: false,
				isAuthenticated: false,
				user: null,
			};
		case LOGOUT_FAIL:
			return {
				...state,
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
