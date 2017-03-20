import React from 'react';
import styles from './UnauthorizedBase.css';
import LoginForm from 'scenes/Sign/Login/Form';
import SnackbarContainer from 'components/Snackbar/SnackbarContainer';
import MuiTheme from 'services/MaterialUI/MuiTheme';

class UnauthorizedBase extends React.Component {

	getChildContext() {
		return {
			muiTheme: MuiTheme,
		}
	};

	render() {
		return (
			<div className={styles.unApp}>
				<h2>Please log in</h2>
				<LoginForm/>
				<SnackbarContainer/>
			</div>
		);
	}

}

UnauthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default UnauthorizedBase;
