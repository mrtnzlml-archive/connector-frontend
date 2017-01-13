export const showMessage = (message) => {
	return {
		type: 'SHOW_MESSAGE',
		message
	}
};

export const showErrorMessage = (message) => {
	return {
		type: 'SHOW_ERROR_MESSAGE',
		message
	}
};
