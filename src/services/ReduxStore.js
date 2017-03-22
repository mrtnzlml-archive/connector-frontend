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

let enhancer = null;
if (process.env.NODE_ENV === 'production') {

	enhancer = compose(applyMiddleware(thunkMiddleware));

} else {

	enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
		),
		DevTools.instrument(), // must be after 'applyMiddleware'
	);

}

export let ReduxStore = createStore(
	reducer,
	{}, // initial state (preloadedState)
	enhancer,
);
