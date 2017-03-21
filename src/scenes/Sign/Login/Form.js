import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import {connect} from 'react-redux';
import {authenticate} from 'actions/User';

class LoginForm extends React.Component {

	state = {
		canSubmit: false,
	};

	enableButton = () => {
		this.setState({
			canSubmit: true,
		});
	};

	disableButton = () => {
		this.setState({
			canSubmit: false,
		});
	};

	handleSubmit = (formValues) => {
		this.props.dispatch(authenticate(formValues.username, formValues.password));
	};

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

export default connect()(LoginForm);
