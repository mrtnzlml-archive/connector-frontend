import DataSourceRoute from './DeviceRelayQueryConfig';
import React, { Component } from 'react';
import Relay from 'react-relay';
import LeftMenu from './LeftMenu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Relay.RootContainer
          Component={LeftMenu}
          route={new DataSourceRoute({
			      deviceId: '58d200ad-6376-4c01-9b6d-2ea536f1cd2c'
		      })}
        />

      </div>
    );
  }
}

export default App;
