import { createStore } from 'redux'
import  chatReducer  from '../reducer/chatBotReducer'
const store = createStore(chatReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;