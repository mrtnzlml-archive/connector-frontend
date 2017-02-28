import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router';
import SingleWeatherStationGraphs from './SingleWeatherStationGraphs';
import Documentation from './SingleWeatherStationDoc';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
import ModifyStation from './ModifyStation';
import StationPanel from './StationPanel';

const SingleWeatherStationContainer = class extends React.Component {

	allowedInterpolations = {
		//code: 'Public Name'
		natural: 'Natural',
		step: 'Step',
		monotone: 'Monotome',
		linear: 'Linear'
	};

	constructor(props) {
		super(props);
		let interpolation = localStorage.getItem('interpolation');

		this.state = {
			gapSize: 1,
			interpolation: this.allowedInterpolations.hasOwnProperty(interpolation) ? interpolation : 'natural',
			untilDate: new Date(), //FIXME: zde bude potřeba získat čas ze serveru a pracovat s ním!
		};

		setInterval(() => {
			this.props.data.refetch({
				untilDate: moment(new Date()).format(),
			});
		}, 1000 * 30);
	}

	changeCurve = (event, index, value) => {
		localStorage.setItem('interpolation', value);
		this.setState(prevState => ({
			interpolation: value
		}));
	};

	changeGapSize = (event, gapSize) => {
		let safeGapSize = Math.max(1, Math.abs(gapSize));
		this.setState(prevState => ({
			gapSize: safeGapSize,
		}));
		this.delayedRefetch({
			gap: safeGapSize,
		});
	};

	changeUtilDate = (event, date) => {
		this.setState(prevState => ({
			untilDate: date
		}));
		this.delayedRefetch({
			untilDate: date,
		});
	};

	delayedTimer = null;

	delayedRefetch = (variables) => {
		if (this.delayedTimer) {
			clearTimeout(this.delayedTimer);
		}
		this.delayedTimer = setTimeout(() => {
			this.delayedTimer = null;
			this.props.data.refetch(variables);
		}, 250);
	};

	memory = null;

	render() {
		if (this.props.data.loading && !this.memory) { //first loading
			return <div>
				<p>Loading all weather station data, please wait&hellip;</p>
			</div>;
		} else {
			this.memory = { //cache results into memory
				station: this.props.data.station
			}
		}

		if (!this.memory.station) { //validace props.routeParams.id (?)
			browserHistory.push('/');
		}

		let lastRecord = null;
		if (this.memory.station.allRecords) {
			lastRecord = this.memory.station.allRecords.records[0];
		}

		return <div>
			<h2>Weather station {this.memory.station.name}</h2>

			{lastRecord && <StationPanel lastRecord={lastRecord}/>}

			<SelectField name="interpolation" floatingLabelText="Graph interpolation" value={this.state.interpolation} onChange={this.changeCurve} style={{
				float: 'left',
				marginRight: '1rem',
			}}>
				<MenuItem value="natural" primaryText="Natural"/>
				<MenuItem value="step" primaryText="Step"/>
				<MenuItem value="monotone" primaryText="Monotone"/>
				<MenuItem value="linear" primaryText="Linear"/>
			</SelectField>
			<DatePicker
				name="untilDate"
				floatingLabelText="Show records until date"
				container="inline"
				mode="landscape"
				maxDate={new Date()}
				defaultDate={this.state.untilDate}
				style={{
					float: 'left',
					marginRight: '1rem',
				}}
				onChange={this.changeUtilDate}
			/>
			<TextField name="gap" floatingLabelText="Gap between records" type="number" value={this.state.gapSize} onChange={this.changeGapSize}/>

			<SingleWeatherStationGraphs recordsConnection={this.memory.station.allRecords} interpolation={this.state.interpolation}/>
			<Documentation wsId={this.memory.station.id}/>
			<ModifyStation station={this.memory.station}/>

		</div>
	};

};

export default graphql(gql`
  query ($wsId: ID!, $first: Int!, $gap: Int!, $untilDate: DateTime!) {
    station: weatherStation(id: $wsId) {
      id
      name
      allRecords(first: $first, gap: $gap, untilDate: $untilDate) {
        returnedCount
        records {
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
    }
  }`, {
	options: (props) => ({
		variables: {
			wsId: props.routeParams.id,
			first: 100,
			gap: 1,
			untilDate: moment(new Date()).format(),
		}
	}),
})(SingleWeatherStationContainer);
