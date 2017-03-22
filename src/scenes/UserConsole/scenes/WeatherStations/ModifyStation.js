import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import Alert from 'components/Dialog/Simple';
import {connect} from 'react-redux';
import {renameWeatherStation, removeWeatherStation} from 'actions/WeatherStation';

export let ModifyStation = class extends React.Component {

	state = {
		alertOpened: false,
	};

	throwAlert = () => {
		this.setState({alertOpened: true});
	};

	discartAlert = () => {
		this.setState({alertOpened: false});
	};

	rename = (formValues) => {
		this.props.dispatch(renameWeatherStation({
			stationId: this.props.station.id,
			newName: formValues.newName,
		}));
	};

	remove = () => {
		this.props.dispatch(removeWeatherStation({
			stationId: this.props.station.id,
		}));
	};

	render = () =>
		<div style={{borderTop: '3px solid indianred', marginTop: '5rem', paddingTop: '3rem'}}>
			<h2 style={{color: 'indianred'}}>Danger zone</h2>
			<div>
				<Formsy.Form onValidSubmit={this.rename}>
					<FormsyText
						name="newName"
						required
						floatingLabelText="Rename weather station"
						defaultValue={this.props.station.name}
						style={{marginRight: '1rem'}}
					/>
					<RaisedButton label="Apply new name" type="submit"/>
				</Formsy.Form>
			</div>
			<div style={{marginTop: '2rem'}}>
				<Alert
					open={this.state.alertOpened}
					title={`Do you want to delete weather station '${this.props.station.name}' and related records?`}
					body="Deleting of this station will not only delete the weather station but it will also delete related weather station records. This is permanent operation and cannot be reversed."
					yesLabel="Yes, delete weather station"
					onRequestClose={this.discartAlert}
					onSuccess={this.remove}
				/>
				<RaisedButton label="Delete weather station" backgroundColor="#cd5c5c" labelColor="#fff" onClick={this.throwAlert}/>
			</div>
		</div>

};

ModifyStation.propTypes = {
	station: React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
	}).isRequired
};

export default connect()(ModifyStation);
