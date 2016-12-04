import React from 'react';
import Relay from 'react-relay';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LoginMutation from './../../mutations/LoginMutation'
import Auth from './../../modules/Auth';
import {browserHistory} from 'react-router'

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '', //FIXME: required!
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
		event.preventDefault();

		Relay.Store.commitUpdate(
			new LoginMutation({
				username: this.state.username,
				password: this.state.password,
			}), {
				onSuccess: (response) => {
					Auth.authenticateUser(response.login.token); //FIXME: this doesn't seems to be right
					browserHistory.push('/'); //redirect to the homepage
				},
				onFailure: (transaction) => {
					console.error(transaction.getError().source); //TODO: better error messages handling
				}
			}
		);
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
