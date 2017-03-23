import reducer from '../CamerasReducer'
import * as actions from '../../actions/Camera';

describe('cameras reducer', () => {

	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({
			loading: false,
			entities: {}
		})
	});

	it('should handle ALL_CAMERAS_LOADING', () => {
		expect(
			reducer(undefined, {
				type: actions.ALL_CAMERAS_LOADING,
				entities: {},
			})
		).toEqual({
			loading: true,
			entities: {}
		});
	});

	it('should handle ALL_CAMERAS_LOAD_SUCCESS', () => {
		expect(
			reducer({
				entities: {
					'1': {},
					'2': {},
				}
			}, {
				type: actions.ALL_CAMERAS_LOAD_SUCCESS,
				cameras: [{id: 3}]
			})
		).toEqual({
			loading: false,
			entities: {
				'3': {
					id: 3,
				},
			}
		});
	});

});
