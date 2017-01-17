import React from 'react';
import Header from '../../scenes/Dashboard/components/Header/Header';
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
				<Header/>
				<div className="wrapper--fluid">
					<div id="App__content">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}

}

AuthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default AuthorizedBase;
