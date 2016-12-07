import React from 'react';
import './AuthorizedBase.css';
import LoginForm from '../../scenes/Sign/Login/Form';

class UnauthorizedBase extends React.Component {
	render() {
		return (
			<div id="App">
				<div id="body">

					<LoginForm/>

				</div>
			</div>
		);
	}
}

export default UnauthorizedBase;
