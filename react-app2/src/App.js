import React, {Component} from 'react';
import Relay from 'react-relay';
import LeftMenu from './LeftMenu';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		if (!this.state.loggedIn) {
			return <div>Log In</div>
		}

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p>It is {this.state.date.toLocaleTimeString()}.</p>

				<LeftMenu dataSource={this.props.dataSource}/>
				<LoginForm dataSource={this.props.dataSource}/>

			</div>
		);
	}
}

export default Relay.createContainer(App, {
	fragments: {
		// Define a fragment with a name matching the `dataSource` prop expected above
		dataSource: () => Relay.QL`
      fragment on DataSource {
        id,
        ${LeftMenu.getFragment('dataSource')}
      }
    `
	}
});
