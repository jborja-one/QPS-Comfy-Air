import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './reducers/userReducers';
import { reviewsReducer } from './reducers/reviewsReducer';
import { messageReducer } from './reducers/messageReducer';
import { clientReducer, clientByIdReducer } from './reducers/clientReducer';

export const reducers = combineReducers({
	user: authReducer,
	reviews: reviewsReducer,
	messages: messageReducer,
	clients: clientReducer,
	client: clientByIdReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
