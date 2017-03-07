import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router';
import SingleWeatherStationGraphs from './SingleWeatherStationGraphs';
import Documentation from './SingleWeatherStationDoc';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import moment from 'moment';
import ModifyStation from './ModifyStation';
import StationPanel from './StationPanelContainer';

const SingleWeatherStationContainer = class extends React.Component {

	allowedInterpolations = {
		//code: 'Public Name'
		natural: 'Natural',
		step: 'Step',
		monotone: 'Monotome',
		linear: 'Linear',
	};

	allowedAggregations = {
		//code: 'Public Name'
		hour: 'Hour',
		day: 'Day',
		week: 'Week',
		month: 'Month',
	};

	constructor(props) {
		super(props);
		let interpolation = localStorage.getItem('interpolation');
		let aggregation = localStorage.getItem('aggregation');

		this.state = {
			aggregation: this.allowedAggregations.hasOwnProperty(aggregation) ? aggregation : 'hour',
			interpolation: this.allowedInterpolations.hasOwnProperty(interpolation) ? interpolation : 'natural',
			untilDate: new Date(), //FIXME: zde bude potřeba získat čas ze serveru a pracovat s ním!
		};

		setInterval(() => {
			this.props.data.refetch({ //manual polling (changing variable)
				untilDate: this.state.untilDate,
			});
		}, 1000 * 30);
	}

	changeCurve = (event, index, value) => {
		localStorage.setItem('interpolation', value);
		this.setState(prevState => ({
			interpolation: value
		}));
	};

	changeAggregation = (event, index, value) => {
		localStorage.setItem('aggregation', value);
		this.setState(prevState => ({
			aggregation: value
		}));
		this.delayedRefetch({
			aggregation: value,
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

		return <div>
			<h2>Weather station {this.memory.station.name}</h2>
			<StationPanel stationId={this.memory.station.id}/>

			<SelectField name="interpolation" floatingLabelText="Graph interpolation" value={this.state.interpolation} onChange={this.changeCurve} style={{float: 'left', marginRight: '1rem'}}>
				{Object.keys(this.allowedInterpolations).map((key) =>
					<MenuItem key={key} value={key} primaryText={this.allowedInterpolations[key]}/>
				)}
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
			<SelectField name="aggregation" floatingLabelText="Aggregation" value={this.state.aggregation} onChange={this.changeAggregation} style={{marginRight: '1rem'}}>
				{Object.keys(this.allowedAggregations).map((key) =>
					<MenuItem key={key} value={key} primaryText={this.allowedAggregations[key]}/>
				)}
			</SelectField>

			<SingleWeatherStationGraphs recordsConnection={this.memory.station.allRecords} interpolation={this.state.interpolation}/>
			<Documentation wsId={this.memory.station.id}/>
			<ModifyStation station={this.memory.station}/>

		</div>
	};

};

export default graphql(gql`
  query ($wsId: ID!, $first: Int!, $aggregation: RecordsAggregation!, $untilDate: DateTime!) {
    station: weatherStation(id: $wsId) {
      id
      name
      allRecords(first: $first, aggregation: $aggregation, untilDate: $untilDate) {
        returnedCount
        records {
          aggregatedDate
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
			aggregation: 'hour',
			untilDate: moment(new Date()).format(),
		}
	}),
})(SingleWeatherStationContainer);
