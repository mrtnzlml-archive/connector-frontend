import reducer from '../MessagesReducer'
import * as actions from '../../actions/Message';

describe('messages reducer', () => {

	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({
			error: false,
			message: null,
		})
	});

	it('should handle RESET_ERROR_MESSAGE', () => {
		expect(
			reducer({
				error: true,
				message: 'Error Message',
			}, {
				type: actions.RESET_ERROR_MESSAGE,
			})
		).toEqual({
			error: false,
			message: null,
		});
	});

	it('should handle SHOW_MESSAGE', () => {
		expect(
			reducer(undefined, {
				type: actions.SHOW_MESSAGE,
				message: 'Normal Message'
			})
		).toEqual({
			error: false,
			message: 'Normal Message',
		});
	});

	it('should handle SHOW_ERROR_MESSAGE', () => {
		expect(
			reducer(undefined, {
				type: actions.SHOW_ERROR_MESSAGE,
				message: 'Error Message'
			})
		).toEqual({
			error: true,
			message: 'Error Message',
		});
	});

});
