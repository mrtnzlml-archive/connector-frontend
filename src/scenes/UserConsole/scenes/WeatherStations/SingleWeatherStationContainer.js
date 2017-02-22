import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router';
import Graph from './SingleWeatherStationGraph';
import Documentation from './SingleWeatherStationDoc';

const SingleWeatherStationContainer = class extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			interpolation: 'natural',
		};

		// This binding is necessary to make `this` work in the callback
		this.curve = this.curve.bind(this);
	}

	curve(interpolation) {
		this.setState(prevState => ({
			interpolation: interpolation
		}));
	};

	render() {
		let {data: {loading, station}} = this.props;

		if (loading) {
			return <p>Loading all weather station data&hellip;</p>;
		}

		if (!station) { //validace props.routeParams.id (?)
			browserHistory.push('/');
		}

		return <div>
			<h2>Weather station {station.name}</h2>

			{/* TODO: current temperature (last record preview) */}

			<a onClick={() => this.curve('natural')}>Natural interpolation</a>
			<a onClick={() => this.curve('step')}>Step interpolation</a>

			<h3>Temperature history</h3>
			<Graph data={station.allRecords} dataKeys={['indoorTemperature', 'outdoorTemperature']} interpolation={this.state.interpolation}/>

			<h3>Pressure history</h3>
			<Graph data={station.allRecords} dataKeys={['absolutePressure', 'relativePressure']} interpolation={this.state.interpolation}/>

			<h3>Humidity history</h3>
			<Graph data={station.allRecords} dataKeys={['indoorHumidity', 'outdoorHumidity']} interpolation={this.state.interpolation}/>

			<h3>Wind speed and gust history</h3>
			<Graph data={station.allRecords} dataKeys={['windSpeed', 'windGust']} interpolation={this.state.interpolation}/>

			<Documentation wsId={station.id}/>

		</div>
	};

};

//TODO: oddělit dotaz na více menších dotazů?
export default graphql(gql`
  query ($wsId: ID!, $first: Int!) {
    station: weatherStation(id: $wsId) {
      id
      name
      allRecords(first: $first) {
        creationDate
        indoorTemperature(temperatureUnit: CELSIUS)
        outdoorTemperature(temperatureUnit: CELSIUS)
        absolutePressure(pressureUnit: PASCAL)
        relativePressure(pressureUnit: PASCAL)
        indoorHumidity(humidityUnit: PERCENTAGE)
        outdoorHumidity(humidityUnit: PERCENTAGE)
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
