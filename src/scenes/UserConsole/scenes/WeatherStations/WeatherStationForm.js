import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import {showMessage} from 'components/PaperToast/Actions';
import {ReduxStore} from 'services/ReduxStore';

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
		this.props.mutate({
			variables: {
				name: formValues.wsName,
			}
		}).then((response) => {
			browserHistory.push('/weather-stations/' + response.data.station.id); //redirect to new WS page
			ReduxStore.dispatch(showMessage('New weather station has been created.'));
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

export default graphql(gql`
  mutation ($name: String!) {
    station: createWeatherStation(name: $name) {
      id
    }
  }
`)(WeatherStationForm);
