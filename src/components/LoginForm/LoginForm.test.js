import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //FIXME: only because of Material-UI
import ApolloClient from 'apollo-client'; //FIXME: :-(
import {ApolloProvider} from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

it('renders without crashing', () => {
	ReactDOM.render(
		<MuiThemeProvider>
			<ApolloProvider client={new ApolloClient}>
				<LoginForm/>
			</ApolloProvider>
		</MuiThemeProvider>,
		document.createElement('div')
	);
});
