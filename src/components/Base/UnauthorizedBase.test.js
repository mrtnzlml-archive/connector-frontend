import React from 'react';
import ReactDOM from 'react-dom';
import UnauthorizedBase from './UnauthorizedBase';

import ApolloClient from 'apollo-client'; //FIXME: only because of Apollo
import {ApolloProvider} from 'react-apollo';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

it('renders without crashing', () => {
	ReactDOM.render(
		<ApolloProvider client={new ApolloClient}>
			<UnauthorizedBase/>
		</ApolloProvider>,
		document.createElement('div')
	);
});
