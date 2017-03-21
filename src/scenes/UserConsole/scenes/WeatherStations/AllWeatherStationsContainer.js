import React from 'react';
import {connect} from 'react-redux';
import WeatherStationPreview from './WeatherStationPreview';
import WeatherStationForm from './WeatherStationForm';
import Paper from 'material-ui/Paper';
import {loadAllWeatherStations, createWeatherStation} from 'actions/WeatherStation';

const AllWeatherStationsContainer = class extends React.Component {

	componentWillMount() {
		this.props.dispatch(loadAllWeatherStations());
	}

	render = () => {
		const {stations, loading} = this.props;
		if (loading) {
			return <p>Loading all weather stations&hellip;</p>;
		}

		let weatherStationForm = <WeatherStationForm onSuccess={(variables) => {
			this.props.dispatch(createWeatherStation(variables));
		}}/>;

		let html = null;
		if (stations.length === 0) {
			html = <Paper style={{padding: 20}}>
				<h2>At this place you can add and maintain all your weather stations</h2>
				<p>Are you ready to add your first weather station? It's very simple:</p>
				{weatherStationForm}
			</Paper>;
		} else {
			html = <div>
				{stations.map(station =>
					<WeatherStationPreview
						key={station.id}
						id={station.id}
						name={station.name}
						lastRecord={station.records.length > 0 ? station.records[0] : { //defaults
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
	}

};

export default connect(
	(storageState) => { // mapStateToProps
		let {weatherStations: {entities, loading}} = storageState;

		entities = Object.keys(entities).map(key => entities[key]); // object->array so it's possible to use .map()

		return {
			loading: loading,
			stations: entities
		}
	}
)(AllWeatherStationsContainer);
