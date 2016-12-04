// import DataSourceRoute from './DeviceRelayQueryConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import router from './routes/index';

injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

Relay.injectNetworkLayer(
	new Relay.DefaultNetworkLayer('https://adeira.loc/graphql', { //FIXME: already in babelRelayPlugin
		headers: {
			Authorization: 'Bearer TOKEN' //TODO
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

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>{router}</MuiThemeProvider>,
	document.getElementById('root')
);
