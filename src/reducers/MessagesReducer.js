import {Messages} from 'actions/ActionTypes';

const initialState = {
	error: false,
	message: null,
	timestamp: null,
};

// Notes:
// - Do not mutate the state, always create new one: Object.assign({}, state, newStateChangeSet); OR { ...state, ...newState }
// - Always return previous state in 'default' switch branch
// - It shouldn't perform any side effects like API calls or router transitions. These should happen before an action is dispatched
export default (state = initialState, action) => {
	switch (action.type) {

		case Messages.SHOW_MESSAGE:
			return {
				...state, ...{
					error: false,
					message: action.message,
					timestamp: Date.now(), // so React will to always rerender props
				}
			};

		case Messages.SHOW_ERROR_MESSAGE:
			return {
				...state, ...{
					error: true,
					message: action.message,
					timestamp: Date.now(), // so React will to always rerender props
				}
			};

		default:
			return state
	}
}
