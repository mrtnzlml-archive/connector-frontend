import React from 'react';
import ReactDOM from 'react-dom';
import DataSourceGrid from './DataSourceGrid';
import ApolloClient from 'apollo-client'; //FIXME: :-(
import {ApolloProvider} from 'react-apollo';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApolloProvider client={new ApolloClient}>
			<DataSourceGrid/>
		</ApolloProvider>,
		document.createElement('div')
	);
});
