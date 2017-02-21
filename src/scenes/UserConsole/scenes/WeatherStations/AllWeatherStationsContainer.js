import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import WeatherStationPreview from './WeatherStationPreview';
import WeatherStationForm from './WeatherStationForm';

const AllWeatherStationsContainer = (props) => {
	let {data: {loading, allStations}} = props;

	if (loading) {
		return <p>Loading all weather stations&hellip;</p>;
	}

	let weatherStationForm = <WeatherStationForm/>;

	if (!allStations.stations.length) {
		return <div>
			<h2>At this place you can add and maintain all your weather stations</h2>
			<p>Are you ready to add your first weather station?</p>
			{weatherStationForm}
		</div>;
	} else {
		return <div>
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
			{weatherStationForm}
		</div>
	}
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
