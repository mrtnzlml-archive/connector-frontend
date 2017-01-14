import React from 'react';
import './UnauthorizedBase.css';
import LoginForm from '../../scenes/Sign/Login/Form';
import PaperToastContainer from '../PaperToast/PaperToastContainer';
import MuiTheme from '../../services/MaterialUI/MuiTheme';

class UnauthorizedBase extends React.Component {

	getChildContext() {
		return {
			muiTheme: MuiTheme,
		}
	};

	render() {
		return (
			<div id="App">
				<h2>Please log in</h2>
				<LoginForm/>
				<PaperToastContainer/>
			</div>
		);
	}

}

UnauthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default UnauthorizedBase;
