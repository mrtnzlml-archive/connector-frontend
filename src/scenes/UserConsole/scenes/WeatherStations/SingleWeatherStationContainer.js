import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Brush} from 'recharts';

const SingleWeatherStationContainer = (props) => {
	let {data: {loading, station}} = props;

	if (loading) {
		return <p>Loading all weather station data&hellip;</p>;
	}

	if (!station) { //validace props.routeParams.id (?)
		browserHistory.push('/');
	}

	return <div>
		<h2>Weather station {station.name}</h2>

		{/* TODO: current temperature (last record preview) */}

		<h3>Temperature history</h3>
		<ResponsiveContainer width="100%" height={100}>
			<LineChart data={station.temperatureRecords} syncId="singleWS">
				{/*<XAxis dataKey="creationDate"/>*/}
				<YAxis type="number" domain={['auto', 'auto']}/>
				<Line type="monotone" dataKey="indoorTemperature" stroke="#8884d8" isAnimationActive={false}/>
				<Line type="monotone" dataKey="outdoorTemperature" stroke="#8884d8" isAnimationActive={false}/>
				{/*<Brush dataKey='indoorTemperature' height={30} stroke="#8884d8"/>*/}
				<Tooltip isAnimationActive={false}/>
			</LineChart>
		</ResponsiveContainer>

		<h3>Pressure history</h3>
		<ResponsiveContainer width="100%" height={100}>
			<LineChart data={station.pressureRecords} syncId="singleWS">
				<YAxis type="number" domain={['auto', 'auto']}/>
				<Line type="monotone" dataKey="absolutePressure" stroke="#8884d8" isAnimationActive={false}/>
				<Line type="monotone" dataKey="relativePressure" stroke="#8884d8" isAnimationActive={false}/>
				<Tooltip isAnimationActive={false}/>
			</LineChart>
		</ResponsiveContainer>

		<h3>Humidity history</h3>
		<ResponsiveContainer width="100%" height={100}>
			<LineChart data={station.humidityRecords} syncId="singleWS">
				<YAxis type="number" domain={['auto', 'auto']}/>
				<Line type="monotone" dataKey="indoorHumidity" stroke="#8884d8" isAnimationActive={false}/>
				<Line type="monotone" dataKey="outdoorHumidity" stroke="#8884d8" isAnimationActive={false}/>
				<Tooltip isAnimationActive={false}/>
			</LineChart>
		</ResponsiveContainer>

		<h3>Wind speed and gust history</h3>
		<ResponsiveContainer width="100%" height={100}>
			<LineChart data={station.windRecords} syncId="singleWS">
				<YAxis type="number" domain={['auto', 'auto']}/>
				<Line type="monotone" dataKey="windSpeed" stroke="#8884d8" isAnimationActive={false}/>
				<Line type="monotone" dataKey="windGust" stroke="#8884d8" isAnimationActive={false}/>
				<Tooltip isAnimationActive={false}/>
			</LineChart>
		</ResponsiveContainer>

	</div>;
};

//TODO: oddělit dotaz na více menších dotazů?
export default graphql(gql`
  query ($wsId: ID!, $first: Int!) {
    station: weatherStation(id: $wsId) {
      name
      temperatureRecords: allRecords(first: $first) {
#        creationDate
        indoorTemperature(temperatureUnit: CELSIUS)
        outdoorTemperature(temperatureUnit: CELSIUS)
      }
      pressureRecords: allRecords(first: $first) {
        absolutePressure(pressureUnit: PASCAL)
        relativePressure(pressureUnit: PASCAL)
      }
      humidityRecords: allRecords(first: $first) {
        indoorHumidity(humidityUnit: PERCENTAGE)
        outdoorHumidity(humidityUnit: PERCENTAGE)
      }
      windRecords: allRecords(first: $first) {
        windSpeed(windSpeedUnit: KMH)
        windGust(windSpeedUnit: KMH)
      }
    }
  }`, {
	options: (props) => ({
		variables: {
			wsId: props.routeParams.id,
			first: 100,
		}
	}),
})(SingleWeatherStationContainer);
