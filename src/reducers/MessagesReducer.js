import {
	SHOW_MESSAGE,
	SHOW_ERROR_MESSAGE,
	RESET_ERROR_MESSAGE,
} from 'actions/Message';

const initialState = {
	error: false,
	message: null,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case RESET_ERROR_MESSAGE:
			return {
				...state,
				error: false,
				message: null,
			};

		case SHOW_MESSAGE:
			return {
				...state,
				error: false,
				message: action.message,
			};

		case SHOW_ERROR_MESSAGE:
			return {
				...state,
				error: true,
				message: action.message,
			};

		default:
			return state
	}
}
