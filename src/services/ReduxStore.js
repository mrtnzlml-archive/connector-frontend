import MessagesReducer from 'components/PaperToast/MessagesReducer';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import ApolloClient from 'apollo-client';
import appConfig from './../../config/application';
import HTTPFetchNetworkInterface from 'services/Apollo/HTTPFetchNetworkInterface';

const apolloClient = new ApolloClient({
	networkInterface: new HTTPFetchNetworkInterface(appConfig.apiAddress),
});

let ReduxStore = createStore(
	combineReducers({
		messages: MessagesReducer,
		apollo: apolloClient.reducer(),
	}),
	{}, // initial state (preloadedState)
	compose( // enhancer
		applyMiddleware(apolloClient.middleware()),
	),
);

export {
	ReduxStore,
	apolloClient as Client
}
