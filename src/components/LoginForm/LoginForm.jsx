import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from './../../modules/Auth';
import {browserHistory} from 'react-router'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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

		this.props.mutate({
			variables: {
				username: this.state.username,
				password: this.state.password,
			}
		}).then((response) => {
			Auth.authenticateUser(response.data.login.token); //FIXME: this doesn't seems to be right
			browserHistory.push('/'); //redirect to the homepage
		}).catch((error) => {
			console.error(error.message); //TODO: better error messages handling
		})
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

export default graphql(gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`)(LoginForm);
