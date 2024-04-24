import {
	GET_ALL_PROJECTS_REQUEST,
	GET_ALL_PROJECTS_SUCCESS,
	GET_ALL_PROJECTS_FAIL,
	GET_PROJECT_BY_ID_REQUEST,
	GET_PROJECT_BY_ID_SUCCESS,
	GET_PROJECT_BY_ID_FAIL,
	CREATE_PROJECT_REQUEST,
	CREATE_PROJECT_SUCCESS,
	CREATE_PROJECT_FAIL,
	UPDATE_PROJECT_REQUEST,
	UPDATE_PROJECT_SUCCESS,
	UPDATE_PROJECT_FAIL,
	DELETE_PROJECT_REQUEST,
	DELETE_PROJECT_SUCCESS,
	DELETE_PROJECT_FAIL,
	PROJECT_RESET,
} from '../constants/projectConstant';

export const getProjectsReducer = (state = { projects: [] }, action) => {
	switch (action.type) {
		case GET_ALL_PROJECTS_REQUEST:
			return {
				loading: true,
				projects: [],
			};
		case GET_ALL_PROJECTS_SUCCESS:
			return {
				loading: false,
				projects: action.payload,
			};
		case GET_ALL_PROJECTS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getProjectByIdReducer = (state = { project: {} }, action) => {
	switch (action.type) {
		case GET_PROJECT_BY_ID_REQUEST:
			return {
				loading: true,
				project: {},
			};
		case GET_PROJECT_BY_ID_SUCCESS:
			return {
				loading: false,
				project: action.payload,
			};
		case GET_PROJECT_BY_ID_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const createProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_PROJECT_REQUEST:
			return {
				loading: true,
			};
		case CREATE_PROJECT_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case CREATE_PROJECT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PROJECT_RESET:
			return {};
		default:
			return state;
	}
};

export const updateProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_PROJECT_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_PROJECT_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case UPDATE_PROJECT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PROJECT_RESET:
			return {};
		default:
			return state;
	}
};

export const deleteProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_PROJECT_REQUEST:
			return {
				loading: true,
			};
		case DELETE_PROJECT_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case DELETE_PROJECT_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case PROJECT_RESET:
			return {};
		default:
			return state;
	}
};
