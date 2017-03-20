import React from 'react';
import Header from 'scenes/UserConsole/components/Header/Header';
import styles from './AuthorizedBase.css';
import MuiTheme from 'services/MaterialUI/MuiTheme';
import SnackbarContainer from 'components/Snackbar/SnackbarContainer';

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
					<div className={styles.app__content}>
						{this.props.children}
					</div>
				</div>
				<SnackbarContainer/>
			</div>
		);
	}

}

AuthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default AuthorizedBase;
