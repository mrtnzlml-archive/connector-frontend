import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		// This binding is necessary to make `this` work in the callback
		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeUsername(event) {
		this.setState({
			username: event.target.value
		});
	}

	handleChangePassword(event) {
		this.setState({
			password: event.target.value
		});
	}

	handleSubmit(event) {
		alert(this.state.username + ' / ' + this.state.password);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<TextField type="text" floatingLabelText="Username" value={this.state.username} onChange={this.handleChangeUsername}/><br/>
				<TextField type="password" floatingLabelText="Password" value={this.state.password} onChange={this.handleChangePassword}/><br/>
				<RaisedButton type="submit" label="Sign In" primary={true}/>
			</form>
		);
	}
}

export default LoginForm;
