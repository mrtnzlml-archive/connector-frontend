import React from 'react';
import './AuthorizedBase.css';
import LoginForm from '../../scenes/Sign/Login/Form';
import PaperToastContainer from '../PaperToast/PaperToastContainer';

class UnauthorizedBase extends React.Component {
	render() {
		return (
			<div id="App">
				<div id="body">
					<LoginForm/>
					<PaperToastContainer/>
				</div>
			</div>
		);
	}
}

export default UnauthorizedBase;
