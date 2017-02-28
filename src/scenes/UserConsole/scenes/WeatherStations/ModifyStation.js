import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {browserHistory} from 'react-router'
import Alert from 'components/Dialog/Simple';

let ModifyStation = class extends React.Component {

	state = {
		alertOpened: false,
	};

	throwAlert = () => {
		this.setState({alertOpened: true});
	};

	discartAlert = () => {
		this.setState({alertOpened: false});
	};

	renameWeatherStation = (formValues) => {
		this.props.renameStation({
			variables: {
				stationId: this.props.station.id,
				newName: formValues.newName,
			}
		}).then((response) => {
			window.location.reload();
		});
	};

	removeWeatherStation = () => {
		this.props.removeStation({
			variables: {
				stationId: this.props.station.id,
			}
		}).then((response) => {
			browserHistory.push('/'); //redirect to the homepage
		});
	};

	render = () =>
		<div style={{borderTop: '3px solid indianred', marginTop: '5rem', paddingTop: '3rem'}}>
			<h2 style={{color: 'indianred'}}>Danger zone</h2>
			<div>
				<Formsy.Form onValidSubmit={this.renameWeatherStation}>
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
					onSuccess={this.removeWeatherStation}
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

let renameStationQuery = gql`
  mutation($stationId: ID!, $newName: String!) {
    renameWeatherStation(stationId: $stationId, newName: $newName) {
      name
    }
  }
`;

let removeStationQuery = gql`
  mutation($stationId: ID!) {
    removeWeatherStation(stationId: $stationId) {
      id
    }
  }
`;

const ModifyStationWithMutations =
	graphql(renameStationQuery, {name: 'renameStation'})(
		graphql(removeStationQuery, {name: 'removeStation'})(
			ModifyStation
		)
	);

export default ModifyStationWithMutations;
