import React from 'react';
import LeftMenu from '../../scenes/Dashboard/components/LeftMenu/LeftMenu';
import './AuthorizedBase.css';
import MuiTheme from '../../services/MaterialUI/MuiTheme';

class AuthorizedBase extends React.Component {

	getChildContext() {
		return {
			muiTheme: MuiTheme,
		}
	};

	render() {
		return (
			<div id="App">
				<div id="sidebar">
					<LeftMenu/>
				</div>
				<div id="body">

					{this.props.children}

				</div>
			</div>
		);
	}

}

AuthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default AuthorizedBase;
