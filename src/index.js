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

injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

const apolloClient = new ApolloClient({
	networkInterface: new HTTPFetchNetworkInterface('//connector.adeira.loc/graphql'), //FIXME: config
});

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<Provider store={ReduxStore}>{router}</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
