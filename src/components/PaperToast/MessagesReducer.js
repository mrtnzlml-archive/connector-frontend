export default (state = {}, action) => {
	switch (action.type) {
		case 'SHOW_MESSAGE':
			return {
				error: false,
				message: action.message,
				timestamp: Date.now(), // so React will to always rerender props
			};

		case 'SHOW_ERROR_MESSAGE':
			return {
				error: true,
				message: action.message,
				timestamp: Date.now(), // so React will to always rerender props
			};

		default:
			return state
	}
}
