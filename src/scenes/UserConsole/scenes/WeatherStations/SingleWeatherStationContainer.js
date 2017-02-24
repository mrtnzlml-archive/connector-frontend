import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router';
import Graph from './SingleWeatherStationGraph';
import Documentation from './SingleWeatherStationDoc';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Formsy from 'formsy-react';
import {FormsyDate, FormsyText} from 'formsy-material-ui/lib';

const SingleWeatherStationContainer = class extends React.Component {

	constructor(props) {
		super(props);

		let allowedInterpolations = ['natural', 'step', 'monotone', 'linear'];
		let interpolation = localStorage.getItem('interpolation');
		this.state = {
			interpolation: allowedInterpolations.includes(interpolation) ? interpolation : 'natural',
		};

		// This binding is necessary to make `this` work in the callback
		this.handleCurve = this.handleCurve.bind(this);
	}

	handleCurve(event, index, value) {
		localStorage.setItem('interpolation', value);
		this.setState(prevState => ({
			interpolation: value
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

		let graphStyle = {marginTop: '2rem', marginBottom: '2rem'};
		return <div>
			<h2>Weather station {station.name}</h2>

			{/* TODO: current temperature (last record preview) */}

			<SelectField name="interpolation" floatingLabelText="Graph interpolation" value={this.state.interpolation} onChange={this.handleCurve} style={{
				float: 'left',
				marginRight: '1rem',
			}}>
				<MenuItem value="natural" primaryText="Natural"/>
				<MenuItem value="step" primaryText="Step"/>
				<MenuItem value="monotone" primaryText="Monotone"/>
				<MenuItem value="linear" primaryText="Linear"/>
			</SelectField>
			<Formsy.Form>
				<FormsyDate
					name="untilDate"
					floatingLabelText="Show records until date"
					container="inline"
					mode="landscape"
					maxDate={new Date()}
					defaultDate={new Date()}
					style={{
						float: 'left',
						marginRight: '1rem',
					}}
				/>
				<FormsyText name="gap" floatingLabelText="Gap between records" type="number" defaultValue={1}/> {/* FIXME: validace rozsahů na straně serveru */}
			</Formsy.Form>

			<div style={graphStyle}>
				<h3>Temperature history</h3>
				<Graph data={station.allRecords} dataKeys={['indoorTemperature', 'outdoorTemperature']} interpolation={this.state.interpolation}/>
			</div>

			<div style={graphStyle}>
				<h3>Pressure history</h3>
				<Graph data={station.allRecords} dataKeys={['absolutePressure', 'relativePressure']} interpolation={this.state.interpolation}/>
			</div>

			<div style={graphStyle}>
				<h3>Humidity history</h3>
				<Graph data={station.allRecords} dataKeys={['indoorHumidity', 'outdoorHumidity']} interpolation={this.state.interpolation}/>
			</div>

			<div style={graphStyle}>
				<h3>Wind speed and gust history</h3>
				<Graph data={station.allRecords} dataKeys={['windSpeed', 'windGust']} interpolation={this.state.interpolation}/>
			</div>

			<Documentation wsId={station.id}/>

			<div style={{borderTop: '3px solid indianred', marginTop: '5rem', paddingTop: '3rem'}}>
				<h2 style={{color: 'indianred'}}>Danger zone</h2>
				<p>
					Rename weather station
				</p>
				<div>
					<RaisedButton label="Delete weather station" backgroundColor="indianred" labelColor="white"/>
				</div>
			</div>

		</div>
	};

};

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
