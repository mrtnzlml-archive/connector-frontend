import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import router from './routes/index';
import {ReduxStore, Client} from './services/ReduxStore';

injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

ReactDOM.render(
	<ApolloProvider client={Client} store={ReduxStore}>
		{router}
	</ApolloProvider>,
	document.getElementById('root')
);
