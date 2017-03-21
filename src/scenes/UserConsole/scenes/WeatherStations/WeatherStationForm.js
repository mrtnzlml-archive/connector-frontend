import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';

class WeatherStationForm extends React.Component {

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
		this.props.onSuccess({
			name: formValues.wsName,
		});
	};

	render() {
		return (
			<Formsy.Form onValid={this.enableButton}
			             onInvalid={this.disableButton}
			             onValidSubmit={this.handleSubmit}>

				<FormsyText name="wsName"
				            type="text"
				            required
				            fullWidth
				            floatingLabelText="Write weather station name here..."/>

				<RaisedButton type="submit" label="Save Weather Station" primary={true} disabled={!this.state.canSubmit}/>
			</Formsy.Form>
		);
	}

}

export default WeatherStationForm;
