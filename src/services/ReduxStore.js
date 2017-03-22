import CamerasReducer from 'reducers/CamerasReducer';
import MessagesReducer from 'reducers/MessagesReducer';
import WeatherStationsReducer from 'reducers/WeatherStationsReducer';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import DevTools from './DevTools';
import thunkMiddleware from 'redux-thunk'

let reducer = combineReducers({
	cameras: CamerasReducer,
	messages: MessagesReducer,
	weatherStations: WeatherStationsReducer,
});

let enhancer = compose(
	applyMiddleware(
		thunkMiddleware,
	),
	DevTools.instrument(),
);

export let ReduxStore = createStore(
	reducer,
	{}, // initial state (preloadedState)
	enhancer,
);
