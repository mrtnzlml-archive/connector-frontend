import React from 'react';
import {Link} from 'react-router';
import './WeatherStation.css';

const WeatherStation = (props) => {

	//console.log(props.lastRecord); //TODO

	return <Link to={`/weather-stations/${props.id}`}>
		<div className="WeatherStationPreview">
			<h3>{props.name}</h3>
		</div>
	</Link>;
};

WeatherStation.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	lastRecord: React.PropTypes.shape({
		indoorTemperature: React.PropTypes.number,
	}).isRequired,
};

export default WeatherStation;
