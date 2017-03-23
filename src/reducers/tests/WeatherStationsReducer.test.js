import reducer from '../WeatherStationsReducer'
import * as actions from '../../actions/WeatherStation';

describe('weather stations reducer', () => {

	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual({
			loading: true,
			entities: {},
		})
	});

	it('should handle FETCH_ALL_WS_LOADING', () => {
		expect(
			reducer(undefined, {
				type: actions.FETCH_ALL_WS_LOADING
			})
		).toEqual({
			loading: true,
			entities: {},
		});
	});

	it('should handle FETCH_ALL_WS_SUCCESS', () => {
		expect(
			reducer(undefined, {
				type: actions.FETCH_ALL_WS_SUCCESS,
				stations: [{
					node: {
						id: '007',
						name: 'J. Bond',
						allRecords: null,
					},
				}],
			})
		).toEqual({
			loading: false,
			entities: {
				'007': {
					id: '007',
					name: 'J. Bond',
					records: [],
				},
			},
		});

		expect(
			reducer(undefined, {
				type: actions.FETCH_ALL_WS_SUCCESS,
				stations: [{
					node: {
						id: '007',
						name: 'J. Bond',
						allRecords: {
							records: [{
								id: 'r01'
							}],
						},
					},
				}],
			})
		).toEqual({
			loading: false,
			entities: {
				'007': {
					id: '007',
					name: 'J. Bond',
					records: [{
						id: 'r01'
					}],
				},
			},
		});
	});

	it('should handle FETCH_SINGLE_WS_SUCCESS', () => {
		expect(
			reducer(undefined, {
				type: actions.FETCH_SINGLE_WS_SUCCESS,
				station: {
					id: '007',
					name: 'J. Bond',
					allRecords: null,
				},
			})
		).toEqual({
			loading: false,
			entities: {
				'007': {
					id: '007',
					name: 'J. Bond',
					records: [],
				},
			},
		});

		expect(
			reducer(undefined, {
				type: actions.FETCH_SINGLE_WS_SUCCESS,
				station: {
					id: '007',
					name: 'J. Bond',
					allRecords: {
						records: [{
							id: 'r01'
						}],
					},
				},
			})
		).toEqual({
			loading: false,
			entities: {
				'007': {
					id: '007',
					name: 'J. Bond',
					records: [{
						id: 'r01'
					}],
				},
			},
		});
	});

});
