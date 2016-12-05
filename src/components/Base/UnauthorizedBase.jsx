import React from 'react';
import './AuthorizedBase.css';
import LoginForm from '../LoginForm/LoginForm';

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
