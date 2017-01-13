export default (state = {}, action) => {
	switch (action.type) {
		case 'SHOW_MESSAGE':
			return {
				message: action.message,
			};
		default:
			return state
	}
}
