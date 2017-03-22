import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import {connect} from 'react-redux';
import {createCamera} from 'actions/Camera';

export class CameraForm extends React.Component {

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
		this.props.dispatch(createCamera({
			streamSource: formValues.stream,
			name: formValues.name,
		}));
	};

	render() {
		return (
			<Formsy.Form onValid={this.enableButton}
			             onInvalid={this.disableButton}
			             onValidSubmit={this.handleSubmit}>

				<FormsyText name="name"
				            type="text"
				            required
				            fullWidth
				            floatingLabelText="Write weather station name here..."/>
				<FormsyText name="stream"
				            type="text"
				            required
				            fullWidth
				            value="rtsp://"
				            floatingLabelText="Camera stream address"/>

				<RaisedButton type="submit" label="Save Camera" primary={true} disabled={!this.state.canSubmit}/>
			</Formsy.Form>
		);
	}

}

export default connect()(CameraForm);
