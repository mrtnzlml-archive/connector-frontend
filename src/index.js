import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import router from './routes/index';
import HTTPFetchNetworkInterface from './services/Apollo/HTTPFetchNetworkInterface';
import {Provider} from 'react-redux'
import ReduxStore from './services/ReduxStore';

injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: green500,
		primary2Color: green700,
		primary3Color: green100,
	},
}, {
	avatar: {
		borderColor: null,
	},
});

const apolloClient = new ApolloClient({
	networkInterface: new HTTPFetchNetworkInterface('//connector.adeira.localhost/graphql'), //FIXME: config
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<ApolloProvider client={apolloClient}>
			<Provider store={ReduxStore}>{router}</Provider>
		</ApolloProvider>
	</MuiThemeProvider>,
	document.getElementById('root')
);
