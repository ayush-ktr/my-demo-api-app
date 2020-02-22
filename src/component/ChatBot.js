import React, { Component } from 'react';
import SpeechToText from 'speech-to-text';
import { connect } from 'react-redux';
import * as chatBotActions from '../actions/index';
import { bindActionCreators } from 'redux';
import { speakText } from '../utils/index';

class ChatBot extends Component {
	constructor() {
		super();
		this.state = {
			wakeUpWord: [
				'JARVIS',
				'POODLE',
				'BUMBLEBEE',
				'OPTIMUS',
				'SENTINEL',
				'HELLO',
				'BALLU',
				'UDAL'
			],
			error: '',
			wakeUpInterimText: '',
			wakeUpFinalisedText: '',
			listening: false,
			language: 'en-IN',
			flag: false,
			x: false
		};
	}
	componentDidMount() {
		this.startListening();
	}

	onAnythingSaid = text => {
		console.log('Said Something :', text);
		this.setState({
			wakeUpInterimText: text,
			wakeUpFinalisedText: ''
		});
	};

	onEndEvent = () => {
		if (this.state.flag === false) this.startListening();
		else this.stopListening();
	};

	onFinalised = text => {
		// this.setState({
		// 	x: this.state.wakeUpWord.includes(text.toUpperCase())
		// });
		// console.log(text);
		// this.setState({
		//     finalisedText: text,
		//     interimText: ''
		// });
		if (this.state.wakeUpWord.includes(text.toUpperCase())) {
			if (this.props.drawerState === false) {
				this.props.chatBotActions.openChatWindow();
				console.log('Chat Window Open');
			} else {
				this.props.chatBotActions.toggleListeningFlag();
				this.props.chatBotActions.startListening();
			}
		} else if (
			this.props.listeningFlag === true ||
			this.props.chatBotListening
		) {
			this.props.chatBotActions.stopListening();
			if (this.props.listeningFlag)
				this.props.chatBotActions.toggleListeningFlag();
			console.log('listened text: ', text);
			setTimeout(() => {
				this.props.chatBotActions.listenedSomething({
					user: 2,
					message: text
				});
			}, 400);
			setTimeout(() => {
				this.props.chatBotActions.toggleChatBotProcessing();
			}, 1000);
			setTimeout(() => {
				this.props.chatBotActions.toggleChatBotProcessing();
				this.props.chatBotActions.listenedSomething({
					user: 1,
					message: 'Nothing, only chilling'
				});
			}, 2700);
			setTimeout(() => {
				speakText('Nothing, only chilling');
			}, 2800);
		}
	};

	startListening = () => {
		console.log('Start Listening Called');
		try {
			this.listener = new SpeechToText(
				this.onFinalised,
				this.onEndEvent,
				this.onAnythingSaid,
				this.state.language
			);
			this.listener.startListening();
			this.setState({
				listening: true,
				flag: false
			});
		} catch (err) {
			console.log(err);
		}
	};

	stopListening = () => {
		// console.log('Stop Listening Called');
		// this.listener.stopListening();
		// this.setState({
		// 	listening: false,
		// 	flag: true
		// });
	};

	render() {
		return (
			<div>
				{/* <div style={{ marginLeft: '25%', height: '50vh', width: '50vw' }}>
                    <ChatWindow />
                </div> */}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		drawerState: state.drawerState,
		listeningFlag: state.listeningFlag,
		chatBotListening: state.chatBotListening
	};
};

const mapDispatchToProps = dispatch => ({
	chatBotActions: bindActionCreators(chatBotActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ChatBot);
