import React from 'react';
import './UnauthorizedBase.css';
import LoginForm from '../../scenes/Sign/Login/Form';
import PaperToastContainer from '../PaperToast/PaperToastContainer';

class UnauthorizedBase extends React.Component {
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

export default UnauthorizedBase;
