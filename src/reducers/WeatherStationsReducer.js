import merge from 'lodash/merge'
import {
	FETCH_ALL_WS_LOADING,
	FETCH_ALL_WS_SUCCESS,
	FETCH_SINGLE_WS_SUCCESS,
} from 'actions/WeatherStation';

const initialState = {
	loading: true,
	entities: {}, // [WS ID => WS]
};

/**
 * @see https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1
 */
export default (state = initialState, action) => {
	switch (action.type) {

		case FETCH_ALL_WS_LOADING:
			return {
				...state,
				loading: true,
			};

		case FETCH_ALL_WS_SUCCESS:
			let entities = {};
			for (let station of action.stations) {
				entities[station.node.id] = {
					id: station.node.id,
					name: station.node.name,
				};
				entities[station.node.id]['records'] = station.node.allRecords !== null
					? station.node.allRecords.records
					: [];
			}
			return merge({}, {
				loading: false,
				entities,
			});

		case FETCH_SINGLE_WS_SUCCESS:
			return merge({}, state, {
				loading: false,
				entities: {
					[action.station.id]: {
						id: action.station.id,
						name: action.station.name,
						records: action.station.allRecords !== null
							? action.station.allRecords.records
							: [],
					},
				},
			});

		default:
			return state
	}
}
