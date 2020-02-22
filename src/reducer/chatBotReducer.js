import { createReducer } from '../utils/index';
import Constant from '../constants/index';
const initialState = {
	drawerState: false,
	newS: true,
	chatBotListening: false,
	botProcessing: false,
	drawer: false,
	chats: [{ user: 1, message: 'Hello,How can i help You?' }],
	first: true,
	listeningFlag: false
};
export default createReducer(initialState, {
	[Constant.OPEN_CHAT_WINDOW]: (state, payload) => ({
		...state,
		drawerState: true,
		drawer: false
	}),
	[Constant.CLOSE_CHAT_WINDOW]: (state, payload) => ({
		...state,
		drawerState: false,
		newS: true,
		chatBotListening: false,
		botProcessing: false,
		drawer: false,
		chats: [{ user: 1, message: 'Hello,How can i help You?' }],
		first: true,
		listeningFlag: false
	}),
	[Constant.OPEN_DRAWER]: (state, payload) => ({
		...state,
		drawer: true,
		drawerState: false,
		chatBotListening: false,
		botProcessing: false
	}),
	[Constant.CLOSE_DRAWER]: (state, payload) => ({
		...state,
		drawer: false
	}),
	[Constant.START_CHAT_BOT_LISTENING]: (state, payload) => ({
		...state,
		chatBotListening: true
	}),
	[Constant.STOP_CHAT_BOT_LISTENING]: (state, payload) => ({
		...state,
		chatBotListening: false
	}),
	[Constant.TOGGLE_LISTENING_FLAG]: (state, payload) => ({
		...state,
		listeningFlag: !state.listeningFlag
	}),
	[Constant.LISTENED_SOMETHING]: (state, payload) => ({
		...state,
		chats: [...state.chats, payload]
	}),
	[Constant.TOGGLE_CHATBOT_PROCESSING]: (state, payload) => ({
		...state,
		botProcessing: !state.botProcessing
	})
});
