import Constants from '../constants/index';

export const openChatWindow = () => ({
	type: Constants.OPEN_CHAT_WINDOW,
	payload: ''
});

export const closeChatWindow = () => ({
	type: Constants.CLOSE_CHAT_WINDOW,
	payload: ''
});

export const openDrawer = () => ({
	type: Constants.OPEN_DRAWER,
	payload: ''
});

export const closeDrawer = () => ({
	type: Constants.CLOSE_DRAWER,
	payload: ''
});

export const toggleFirst = () => ({
	type: Constants.START_CHAT_BOT_LISTENING,
	payload: ''
});

export const startListening = () => ({
	type: Constants.START_CHAT_BOT_LISTENING,
	payload: ''
});

export const stopListening = () => ({
	type: Constants.STOP_CHAT_BOT_LISTENING,
	payload: ''
});

export const toggleListeningFlag = () => ({
	type: Constants.TOGGLE_LISTENING_FLAG,
	payload: ''
});

export const listenedSomething = text => ({
	type: Constants.LISTENED_SOMETHING,
	payload: text
});

export const toggleChatBotProcessing = () => ({
	type: Constants.TOGGLE_CHATBOT_PROCESSING,
	payload: ''
});
