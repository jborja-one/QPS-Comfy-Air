import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messagesService from './messagesServices';

// Get message from local storage
const formMessage = JSON.parse(localStorage.getItem('message'));

const initialState = {
	formMessage: formMessage ? formMessage : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Create a new message
export const createMessage = createAsyncThunk(
	'messages/createMessage',
	async (messageData, thunkAPI) => {
		try {
			return await messagesService.createMessage(messageData);
		} catch (error) {
			const errorMessage =
				(error.response &&
					error.response.data &&
					error.response.data.errorMessage) ||
				error.errorMessage ||
				error.toString();
			return thunkAPI.rejectWithValue({ errorMessage });
		}
	}
);

export const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createMessage.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createMessage.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = { true: () => undefined };
				state.formMessage = action.payload;
			})
			.addCase(createMessage.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload.errorMessage;
				state.formMessage = null;
			});
	},
});

export const { reset } = messageSlice.actions;
export default messageSlice.reducer;
