import fetch from 'services/Fetcher';
import singleWeatherStationQuery from 'graphql/query/singleWeatherStation.graphql';
import allWeatherStationsQuery from 'graphql/query/allWeatherStations.graphql';
import createWeatherStationMutation from 'graphql/mutation/createWeatherStation.graphql';
import renameWeatherStationMutation from 'graphql/mutation/renameWeatherStation.graphql';
import removeWeatherStationMutation from 'graphql/mutation/removeWeatherStation.graphql';
import {browserHistory} from 'react-router'
import {showMessage} from './Message';


export const FETCH_ALL_WS_LOADING = 'FETCH_ALL_WS_LOADING';
export const FETCH_ALL_WS_SUCCESS = 'FETCH_ALL_WS_SUCCESS';

export const FETCH_SINGLE_WS_SUCCESS = 'FETCH_SINGLE_WS_SUCCESS';

// relies on Redux Thunk middleware
export const loadAllWeatherStations = () => {
	return dispatch => {
		dispatch({ // update the app state to inform that the API call is starting
			type: FETCH_ALL_WS_LOADING
		});
		fetch(allWeatherStationsQuery).then(({data}) => {
			dispatch({
				type: FETCH_ALL_WS_SUCCESS,
				stations: data.allStations.stations,
			});
		});
	}
};

// relies on Redux Thunk middleware
export const loadSingleWeatherStation = (variables) => {
	return dispatch => {
		fetch(singleWeatherStationQuery, variables).then(({data}) => {
			if (data !== null) { // station not found
				dispatch({
					type: FETCH_SINGLE_WS_SUCCESS,
					station: data.station,
				});
			} else {
				browserHistory.push('/'); //redirect to the homepage
			}
		});
	}
};

// relies on Redux Thunk middleware
export const createWeatherStation = (variables) => {
	return dispatch => {
		fetch(createWeatherStationMutation, variables).then(({data}) => {
			browserHistory.push('/weather-stations/' + data.station.id); // redirect to the new WS page
			dispatch(showMessage('New weather station has been created.'));
			dispatch(loadAllWeatherStations()); // refetch
		});
	}
};

// relies on Redux Thunk middleware
export const renameWeatherStation = (variables) => {
	return dispatch => {
		fetch(renameWeatherStationMutation, variables).then(() => {
			dispatch(loadSingleWeatherStation({
				wsId: variables.stationId,
			}));
			dispatch(showMessage('Weather station has been renamed.'));
		});
	}
};

// relies on Redux Thunk middleware
export const removeWeatherStation = (variables) => {
	return dispatch => {
		fetch(removeWeatherStationMutation, variables).then(() => {
			dispatch(loadAllWeatherStations()); // refetch
			browserHistory.push('/'); //redirect to the homepage
		});
	}
};
