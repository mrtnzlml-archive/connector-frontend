import React from 'react';
// import Relay from 'react-relay';
import LeftMenu from './../LeftMenu/LeftMenu';
import './App.css';
import Dashboard from './../Dashboard/Dashboard';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true,
		};
	}

	render() {
		if (!this.state.loggedIn) {
			return <div>Log In</div>
		}

		return (
			<div id="App">
				<div id="sidebar">
					<LeftMenu dataSource={this.props.dataSource}/>
				</div>
				<div id="body">
					<h2>Data Sources</h2>
					{this.props.children || <Dashboard/>}
				</div>

				{/*<LoginForm dataSource={this.props.dataSource}/>*/}
			</div>
		);
	}
}

export default App;
// export default Relay.createContainer(App, {
// 	fragments: {
// 		// Define a fragment with a name matching the `dataSource` prop expected above
// 		dataSource: () => Relay.QL`
//       fragment on DataSource {
//         id,
//         ${LeftMenu.getFragment('dataSource')}
//       }
//     `
// 	}
// });
