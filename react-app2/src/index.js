import App from './App/App';
// import DataSourceRoute from './DeviceRelayQueryConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

import {Redirect, Router, Route, browserHistory} from 'react-router'
import DataSource from './DataSource/DataSource';

import NotFound from './Error/NotFound';

injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

Relay.injectNetworkLayer(
	new Relay.DefaultNetworkLayer('http://adeira.loc/graphql', {
		headers: {
			Authorization: 'Bearer ' + 'TOKEN' //TODO
		},
	})
);

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

const routes = (
	<Route path="/" component={App}>
		<Route path="data-sources" component={DataSource}/>
		<Route path='/e404' component={NotFound}/>
		<Redirect from='*' to='/e404'/>
	</Route>
);

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<Router history={browserHistory}>{routes}</Router>
	</MuiThemeProvider>,
	document.getElementById('root')
);
