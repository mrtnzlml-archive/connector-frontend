import MessagesReducer from 'reducers/MessagesReducer';
import WeatherStationsReducer from 'reducers/WeatherStationsReducer';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import ApolloClient from 'apollo-client';
import appConfig from './../../config/application';
import HTTPFetchNetworkInterface from 'services/Apollo/HTTPFetchNetworkInterface';
import DevTools from './DevTools';
import thunkMiddleware from 'redux-thunk'

const apolloClient = new ApolloClient({
	networkInterface: new HTTPFetchNetworkInterface(appConfig.apiAddress),
});

let reducer = combineReducers({
	messages: MessagesReducer,
	weatherStations: WeatherStationsReducer,
	apollo: apolloClient.reducer(),
});

let enhancer = compose(
	applyMiddleware(
		apolloClient.middleware(),
		thunkMiddleware,
	),
	DevTools.instrument(),
);

let ReduxStore = createStore(
	reducer,
	{}, // initial state (preloadedState)
	enhancer,
);

export {
	ReduxStore,
	apolloClient as Client
}
