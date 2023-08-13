import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './reducers/userReducers';
import { reviewsReducer } from './reducers/reviewsReducer';
import { messageReducer } from './reducers/messageReducer';
import { clientReducer, clientByIdReducer } from './reducers/clientReducer';
import {
	getQuotesReducer,
	getQuoteByIdReducer,
	createQuoteReducer,
	updateQuoteReducer,
	deleteQuoteReducer,
} from './reducers/quotesReducer';
import {
	getProjectsReducer,
	getProjectByIdReducer,
	createProjectReducer,
	updateProjectReducer,
	deleteProjectReducer,
} from './reducers/projectReducer';

export const reducers = combineReducers({
	user: authReducer,
	reviews: reviewsReducer,
	messages: messageReducer,
	clients: clientReducer,
	client: clientByIdReducer,
	quotes: getQuotesReducer,
	quote: getQuoteByIdReducer,
	createQuote: createQuoteReducer,
	updateQuote: updateQuoteReducer,
	deleteQuote: deleteQuoteReducer,
	projects: getProjectsReducer,
	project: getProjectByIdReducer,
	createProject: createProjectReducer,
	updateProject: updateProjectReducer,
	deleteProject: deleteProjectReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
