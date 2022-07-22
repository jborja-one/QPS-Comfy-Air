import axios from 'axios';

const API_URL = '/api/messages';

//create a new message
const createMessage = async (messageData) => {
	const response = await axios.post(API_URL, messageData);

	if (response.data) {
		localStorage.setItem('message', JSON.stringify(response.data));
	}

	throw new Error('Message could not be created');
};

const messagesService = {
	createMessage,
};

export default messagesService;
