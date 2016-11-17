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
  <App />,
  document.getElementById('root')
);
