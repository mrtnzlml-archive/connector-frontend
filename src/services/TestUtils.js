import React from 'react';
import ApolloClient from 'apollo-client';
import MockNetworkInterface from './Apollo/MockNetworkInterface';
import {ApolloProvider} from 'react-apollo';
import AuthorizedBase from '../components/Base/AuthorizedBase';
import {Provider as ReduxProvider} from 'react-redux'
import ReduxStore from './ReduxStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

function mockNetworkInterface(...mockedResponses) {
	return new MockNetworkInterface(...mockedResponses);
}

export class ApplicationContext extends React.Component {
	render() {
		return <ReduxProvider store={ReduxStore}>
			<MockApolloProvider>
				<AuthorizedBase>
					{this.props.children}
				</AuthorizedBase>
			</MockApolloProvider>
		</ReduxProvider>;
	};
}

// See: https://github.com/apollographql/react-apollo/blob/master/examples/create-react-app/src/Pokemon.test.js
export class MockApolloProvider extends React.Component {

	constructor(props, context) {
		super(props, context);

		const networkInterface = mockNetworkInterface.apply(null, this.props.mocks);
		this.client = new ApolloClient({networkInterface});
	}

	render() {
		return (
			<ApolloProvider client={this.client}>
				{this.props.children}
			</ApolloProvider>
		);
	}

}
