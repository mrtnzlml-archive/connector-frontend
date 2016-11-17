import DataSourceRoute from './DeviceRelayQueryConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import App from './App';
import './index.css';

Relay.injectNetworkLayer(
	new Relay.DefaultNetworkLayer('http://adeira.loc/graphql', {
		credentials: 'same-origin',
	})
);

ReactDOM.render(
	<Relay.RootContainer
		Component={App}
		route={new DataSourceRoute({
			deviceId: '58d200ad-6376-4c01-9b6d-2ea536f1cd2c'
		})}
	/>,
	document.getElementById('root')
);
