import {Messages} from './ActionTypes';

export const showMessage = (message) => {
	return {
		type: Messages.SHOW_MESSAGE,
		message
	}
};

export const showErrorMessage = (message) => {
	return {
		type: Messages.SHOW_ERROR_MESSAGE,
		message
	}
};
