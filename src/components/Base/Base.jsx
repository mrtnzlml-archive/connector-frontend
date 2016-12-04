import React from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import './Base.css';
import LoginForm from '../LoginForm/LoginForm';

class Base extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: true, //FIXME
		};
	}

	render() {
		if (!this.state.loggedIn) {
			return <LoginForm/>;
		}

		return (
			<div id="App">
				<div id="sidebar">
					<LeftMenu dataSource={this.props.dataSource}/>
				</div>
				<div id="body">

					{this.props.children}

				</div>
			</div>
		);
	}
}

export default Base;
