import React, { Component } from 'react';
import { connect } from 'react-redux';
import { speakText } from '../utils/index';
import * as chatBotActions from '../actions/index';
import { bindActionCreators } from 'redux';
import './style.css';
class ChatWindow extends Component {
	componentDidMount() {
		speakText('');
		setTimeout(() => {
			speakText('Hello,how can i help You?');
		}, 1000);

		setTimeout(() => {
			this.props.chatBotActions.startListening();
		}, 2700);
	}
	// speakText = text => {
	// 	speechSynthesis.getVoices();

	// 	var utterance = new SpeechSynthesisUtterance(text);
	// 	utterance.pitch = 1.0;
	// 	utterance.volume = 1;
	// 	utterance.rate = 0.9;
	// 	utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
	// 		return voice.name == 'Google UK English Female';
	// 	})[0];
	// 	utterance.lang = 'en-UK';
	// 	speechSynthesis.speak(utterance);
	// };

	render() {
		let { chats } = this.props;
		// console.log('chats', this.props);
		return (
			<div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
				{/* <div class="header">Sentinel</div> */}
				{/* {this.speakText('hello')} */}
				<div class="chats">
					{chats.map((value, i) => {
						if (value.user === 1) {
							const c = (
								<span id={i} class="u1 chat">
									{value.message}
								</span>
							);
							// console.log('hello');
							// speakText(value.message);
							// setTimeout(() => {
							// 	this.props.chatBotActions.startListening();
							// 	clearTimeout();
							// }, 3000);
							return c;
						} else if (value.user === 2) {
							return (
								<span id={i} class="u2 chat">
									{value.message}
								</span>
							);
						}
					})}
					{}
					{/* <span class="u1 chat">Hey sam, whats up?</span>
					<span class="u2 chat">nothing here how 'bout u?</span>
					<span class="u1 chat">
						I'm just heading up to your neck of the woods for some
						work related stuff.
					</span>
					<span class="u1 chat">
						driveing through mcdonalds right now
					</span>
					<span class="u2 chat">
						cool! where exactly will you be?
					</span>
					<span class="u1 chat">
						up in the ridgway, mt. horab area
					</span>
					<span class="u2 chat">
						cool! where exactly will you be?
					</span>
					<span class="u1 chat">
						up in the ridgway, mt. horab area
					</span>
					<span class="u2 chat">
						cool! where exactly will you be?
					</span>
					<span class="u1 chat">
						up in the ridgway, mt. horab area
					</span>
					<span class="u2 chat">
						cool! where exactly will you be?
					</span>
					<span class="u1 chat">
						up in the ridgway, mt. horab area
					</span>
					<span class="u2 chat">
						cool! where exactly will you be?
					</span>
					<span class="u1 chat">
						up in the ridgway, mt. horab area
					</span> */}

					{/* User Listening */}
					<span
						style={
							this.props.chatBotListening === true
								? {}
								: { display: 'none' }
						}
					>
						<span class="u2 chat">
							<span class="is-typing">
								<span class="jump1"></span>
								<span class="jump2"></span>
								<span class="jump3"></span>
							</span>
						</span>
					</span>

					{/* ChatBot Processing */}
					<span
						style={
							this.props.botProcessing === true
								? {}
								: { display: 'none' }
						}
					>
						<span class="u1 chat">
							<span class="is-typing">
								<span class="jump1"></span>
								<span class="jump2"></span>
								<span class="jump3"></span>
							</span>
						</span>
					</span>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		chats: state.chats,
		chatBotListening: state.chatBotListening,
		botProcessing: state.botProcessing
	};
};

const mapDispatchToProps = dispatch => ({
	chatBotActions: bindActionCreators(chatBotActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
