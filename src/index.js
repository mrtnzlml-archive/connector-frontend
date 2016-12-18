import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import router from './routes/index';
import Authenticator from './services/Authenticator';

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

const networkInterface = createNetworkInterface({
	uri: 'https://adeira.loc/graphql'
});

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};  // Create the header object if needed.
		}
		let token = Authenticator.getToken();
		if (token !== null) {
			req.options.headers.authorization = token;
		}
		next();
	}
}]);

const apolloClient = new ApolloClient({
	networkInterface,
});

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<ApolloProvider client={apolloClient}>
			{router}
		</ApolloProvider>
	</MuiThemeProvider>,
	document.getElementById('root')
);
