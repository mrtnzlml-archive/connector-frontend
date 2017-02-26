import React from 'react';
import Header from 'scenes/UserConsole/components/Header/Header';
import styles from './AuthorizedBase.css';
import MuiTheme from 'services/MaterialUI/MuiTheme';
import PaperToastContainer from 'components/PaperToast/PaperToastContainer';

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
				<PaperToastContainer/>
			</div>
		);
	}

}

AuthorizedBase.childContextTypes = {
	muiTheme: React.PropTypes.object,
};

export default AuthorizedBase;
