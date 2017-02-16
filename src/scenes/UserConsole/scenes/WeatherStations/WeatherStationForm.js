import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Formsy from 'formsy-react';
import {FormsyText, FormsySelect} from 'formsy-material-ui/lib';
// import MenuItem from 'material-ui/MenuItem';
import {showMessage} from 'components/PaperToast/Actions';
import ReduxStore from 'services/ReduxStore';

class WeatherStationForm extends React.Component {

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
				name: formValues.wsName,
				//TODO: WS type
			}
		}).then((response) => {
			browserHistory.push('/weather-stations/' + response.data.station.id); //redirect to new WS page
			ReduxStore.dispatch(showMessage('New weather station has been created.'));
		});
	}

	render() {
		return (
			<Formsy.Form onValid={this.enableButton}
			             onInvalid={this.disableButton}
			             onValidSubmit={this.handleSubmit}>

				<FormsyText name="wsName"
				            type="text"
				            required
				            fullWidth
				            floatingLabelText="Weather Station Name"/>

				{/* FIXME */}
				{/*<FormsySelect name="wsType" value="0104b09d-470d-403a-bccf-5eef54cdccfe" fullWidth>*/}
					{/*{this.props.series.map(series =>*/}
						{/*<MenuItem value={series.id} key={series.id} primaryText={series.name}/>*/}
					{/*)}*/}
				{/*</FormsySelect>*/}

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
