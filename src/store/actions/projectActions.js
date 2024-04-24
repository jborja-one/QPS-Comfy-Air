import axios from 'axios';
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
} from '../constants/projectConstant.js';

//Create Project
export const createProject = (project) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_PROJECT_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/projects', project, config);

		dispatch({
			type: CREATE_PROJECT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_PROJECT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Get all projects
export const getAllProjects = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_PROJECTS_REQUEST });

		const { data } = await axios.get('/api/projects');

		console.log(data + '&&&&&&&&&&&&&&&');

		dispatch({
			type: GET_ALL_PROJECTS_SUCCESS,
			payload: data.projects,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_PROJECTS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Get project by id
export const getProjectById = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_PROJECT_BY_ID_REQUEST });

		const { data } = await axios.get(`/api/projects/${id}`);

		dispatch({
			type: GET_PROJECT_BY_ID_SUCCESS,
			payload: data.project,
		});
	} catch (error) {
		dispatch({
			type: GET_PROJECT_BY_ID_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Update project
export const updateProject = (id, project) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_PROJECT_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.put(
			`/api/projects/${id}`,
			project,
			config
		);

		dispatch({
			type: UPDATE_PROJECT_SUCCESS,
			payload: data.project,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_PROJECT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Delete project
export const deleteProject = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_PROJECT_REQUEST });

		await axios.delete(`/api/projects/${id}`);

		dispatch({
			type: DELETE_PROJECT_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: DELETE_PROJECT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

//Reset project
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: PROJECT_RESET });
};
