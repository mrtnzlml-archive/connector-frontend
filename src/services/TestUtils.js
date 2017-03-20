import React from 'react';
import ApolloClient from 'apollo-client';
import MockNetworkInterface from './Apollo/MockNetworkInterface';
import {ApolloProvider} from 'react-apollo';
import AuthorizedBase from 'components/Base/AuthorizedBase';
import {ReduxStore} from './ReduxStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

export class ApplicationContext extends React.Component {
	render() {
		return <MockApolloProvider graphqlResponse={this.props.graphqlResponse}>
			<AuthorizedBase>
				{this.props.children}
			</AuthorizedBase>
		</MockApolloProvider>;
	};
}

// See: https://github.com/apollographql/react-apollo/blob/master/examples/create-react-app/src/Pokemon.test.js
export class MockApolloProvider extends React.Component {

	render() {
		return (
			<ApolloProvider store={ReduxStore} client={new ApolloClient({
				networkInterface: new MockNetworkInterface(this.props.graphqlResponse),
				addTypename: false //do not require '__typename' fields in response
			})}>
				{this.props.children}
			</ApolloProvider>
		);
	}

}
