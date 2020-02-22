export const createReducer = (initialState, reducerMap) => (
	state = initialState,
	action = {}
) => {
	const reducer = reducerMap[action.type];

	return reducer ? reducer(state, action.payload) : state;
};

export function createConstants(...constants) {
	return constants.reduce((acc, constant) => {
		acc[constant] = constant;
		return acc;
	}, {});
}

export const speakText = text => {
	speechSynthesis.getVoices();
	console.log(text);

	var utterance = new SpeechSynthesisUtterance(text);
	utterance.pitch = 1.0;
	utterance.volume = 1;
	utterance.rate = 0.9;
	utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
		return voice.name == 'Google UK English Female';
	})[0];
	utterance.lang = 'en-UK';
	speechSynthesis.speak(utterance);
};
