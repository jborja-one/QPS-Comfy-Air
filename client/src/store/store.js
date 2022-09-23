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
	getInvoicesReducer,
	getInvoiceByIdReducer,
	createInvoiceReducer,
	updateInvoiceReducer,
	deleteInvoiceReducer,
} from './reducers/invoicesReducer';

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
	invoices: getInvoicesReducer,
	invoice: getInvoiceByIdReducer,
	createInvoice: createInvoiceReducer,
	updateInvoice: updateInvoiceReducer,
	deleteInvoice: deleteInvoiceReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
