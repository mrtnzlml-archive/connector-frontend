import React from 'react';
import './Header.css';
import MainMenu from './../MainMenu/MainMenu';
import Authenticator from 'services/Authenticator';
import {browserHistory} from 'react-router'

class Header extends React.Component {

	handleLogout() {
		Authenticator.deauthenticateUser();
		browserHistory.push('/'); //redirect to the homepage
	}

	render() {
		return (
			<div id="Header">
				<div className="wrapper--fluid">
					<h1>
						Adeira<span>&#8767;</span><strong>connector</strong>
						<small>user console</small>
					</h1>
					<a className="Header__logoutLink" onClick={this.handleLogout}>
						Log Out
					</a>
				</div>
				<MainMenu/>
			</div>
		);
	}
}

export default Header;
