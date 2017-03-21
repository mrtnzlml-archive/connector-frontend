import React from 'react';
import SingleWeatherStationGraphs from './SingleWeatherStationGraphs';
import Documentation from './SingleWeatherStationDoc';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import ModifyStation from './ModifyStation';
import StationPanel from './StationPanelContainer';
import {connect} from 'react-redux';
import {loadSingleWeatherStation} from 'actions/WeatherStation';

const SingleWeatherStationContainer = class extends React.Component {

	allowedInterpolations = { // code: 'Public Name'
		natural: 'Natural',
		step: 'Step',
		monotone: 'Monotome',
		linear: 'Linear',
	};

	allowedAggregations = { // code: 'Public Name'
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
	}

	componentWillMount() {
		let load = () => this.props.dispatch(loadSingleWeatherStation({
			wsId: this.props.routeParams.id, // FIXME
			aggregation: 'hour',
			untilDate: this.state.untilDate,
		}));
		load();
		this.timer = setInterval(() => {
			load();
		}, 1000 * 30);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
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

	render() {
		const {station} = this.props;

		if (!station) {
			return <p>Loading weather station data, please wait&hellip;</p>;
		}

		return <div>
			<h2>Weather station {station.name}</h2>
			<StationPanel stationId={station.id}/>

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

			<SingleWeatherStationGraphs records={station.records} interpolation={this.state.interpolation}/>
			<Documentation wsId={station.id}/>
			<ModifyStation station={station}/>

		</div>
	};

};

export default connect(
	(storageState, ownProps) => { // mapStateToProps
		let {weatherStations: {entities}} = storageState;

		return {
			station: entities ? entities[ownProps.routeParams.id] : null, // only single station
		}
	}
)(SingleWeatherStationContainer);
