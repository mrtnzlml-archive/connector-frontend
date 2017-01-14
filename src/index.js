import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import router from './routes/index';
import HTTPFetchNetworkInterface from './services/Apollo/HTTPFetchNetworkInterface';
import {Provider} from 'react-redux'
import ReduxStore from './services/ReduxStore';

injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

const apolloClient = new ApolloClient({
	networkInterface: new HTTPFetchNetworkInterface('//connector.adeira.localhost/graphql'), //FIXME: config
});

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<Provider store={ReduxStore}>{router}</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
