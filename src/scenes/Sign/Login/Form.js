import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from 'services/Authenticator';
import {browserHistory} from 'react-router'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			canSubmit: false,
		};

		// This binding is necessary to make 'this' work in the callback
		this.enableButton = this.enableButton.bind(this);
		this.disableButton = this.disableButton.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	enableButton() {
		this.setState({
			canSubmit: true,
		});
	};

	disableButton() {
		this.setState({
			canSubmit: false,
		});
	};

	handleSubmit(formValues) {
		this.props.mutate({
			variables: {
				username: formValues.username,
				password: formValues.password,
			}
		}).then((response) => {
			Auth.authenticateUser(response.data.login.token);
			browserHistory.push('/'); //redirect to the homepage
		});
	}

	render() {
		return (
			<Formsy.Form onValid={this.enableButton}
			             onInvalid={this.disableButton}
			             onValidSubmit={this.handleSubmit}>

				<FormsyText name="username"
				            type="text"
				            required
				            hintText="What is your username?"
				            floatingLabelText="Username"/>

				<FormsyText name="password"
				            type="password"
				            required
				            hintText="What is your password?"
				            floatingLabelText="Password"/>

				<RaisedButton type="submit" label="Log In" primary={true} disabled={!this.state.canSubmit}/>
			</Formsy.Form>
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
