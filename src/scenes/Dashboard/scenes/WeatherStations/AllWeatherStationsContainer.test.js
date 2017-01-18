import React from 'react';
import ReactDOM from 'react-dom';
import AllWeatherStationsContainer from './AllWeatherStationsContainer';
import ApolloClient from 'apollo-client'; //FIXME: :-(
import {ApolloProvider} from 'react-apollo';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApolloProvider client={new ApolloClient}>
			<AllWeatherStationsContainer/>
		</ApolloProvider>,
		document.createElement('div')
	);
});
