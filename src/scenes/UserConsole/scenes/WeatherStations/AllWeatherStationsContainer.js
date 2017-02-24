import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import WeatherStationPreview from './WeatherStationPreview';
import WeatherStationForm from './WeatherStationForm';
import Paper from 'material-ui/Paper';

const AllWeatherStationsContainer = (props) => {

	let {data: {loading, allStations}} = props;

	if (loading) {
		return <p>Loading all weather stations&hellip;</p>;
	}

	let weatherStationForm = <WeatherStationForm/>;

	let html = null;
	if (!allStations.stations.length) {

		html = <Paper style={{padding: 20}}>
			<h2>At this place you can add and maintain all your weather stations</h2>
			<p>Are you ready to add your first weather station? It's very simple:</p>
			{weatherStationForm}
		</Paper>;

	} else {

		html = <div>
			{allStations.stations.map(dataSource =>
				<WeatherStationPreview
					key={dataSource.node.id}
					id={dataSource.node.id}
					name={dataSource.node.name}
					lastRecord={dataSource.node.records ? dataSource.node.records[0] : { //defaults
							indoorTemperature: null
						}}
				/>
			)}
			<Paper style={{padding: 20, marginTop: '5rem'}}>
				<h3>Add another weather station</h3>
				{weatherStationForm}
			</Paper>
		</div>

	}

	return <div id="AllWeatherStationsContainer">{html}</div>

};

export default graphql(gql`{
  allStations: allWeatherStations {
    stations: edges {
      cursor
      node {
        id
        name
        records: allRecords(first: 1) {
          absolutePressure(pressureUnit:PASCAL)
          relativePressure(pressureUnit:PASCAL)
          indoorTemperature(temperatureUnit:CELSIUS)
          outdoorTemperature(temperatureUnit:CELSIUS)
          indoorHumidity(humidityUnit:PERCENTAGE)
          outdoorHumidity(humidityUnit:PERCENTAGE)
          windSpeed(windSpeedUnit:KMH)
          windGust(windSpeedUnit:KMH)
        }
      }
    }
  }
}`)(AllWeatherStationsContainer);
