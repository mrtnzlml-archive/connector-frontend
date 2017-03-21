export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

export const resetErrorMessage = () => {
	return {
		type: RESET_ERROR_MESSAGE,
	}
};

export const showMessage = (message) => {
	return {
		type: SHOW_MESSAGE,
		message
	}
};

export const showErrorMessage = (message) => {
	return {
		type: SHOW_ERROR_MESSAGE,
		message
	}
};
