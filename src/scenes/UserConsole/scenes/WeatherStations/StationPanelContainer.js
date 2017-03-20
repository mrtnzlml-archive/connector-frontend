import React from 'react';
import StationPanel from './StationPanel';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const StationPanelContainer = class extends React.Component {

	render = () => {
		if (this.props.data.loading) {
			return null;
		}
		let lastRecord = this.props.data.weatherStation.allRecords
			? this.props.data.weatherStation.allRecords.records[0]
			: null;
		return <div>{lastRecord && <StationPanel lastRecord={lastRecord}/>}</div>;
	}

};

StationPanelContainer.propTypes = {
	stationId: React.PropTypes.string.isRequired,
};

export default graphql(gql`
  query ($wsId: ID!) {
    weatherStation(id: $wsId) {
      allRecords(first: 1) {
        records {
          indoorTemperature(temperatureUnit: CELSIUS)
          outdoorTemperature(temperatureUnit: CELSIUS)
          indoorHumidity(humidityUnit: PERCENTAGE)
          outdoorHumidity(humidityUnit: PERCENTAGE)
          absolutePressure(pressureUnit: PASCAL)
          windSpeed(windSpeedUnit: KMH)
        }
      }
    }
  }
`, {
	options: (props) => ({
		pollInterval: 1000 * 30, //every 30 sec
		variables: {
			wsId: props.stationId,
		}
	}),
})(StationPanelContainer);
