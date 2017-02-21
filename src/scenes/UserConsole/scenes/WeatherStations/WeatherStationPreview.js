import React from 'react';
import {Link} from 'react-router';
import './WeatherStationPreview.css';
import numeral from 'numeral';

let print = floatNumber => {
	return floatNumber ? numeral(floatNumber).format('0,0.0[0]') : '---'
};

const WeatherStationPreview = (props) => {

	let record = props.lastRecord;

	return <Link to={`/weather-stations/${props.id}`}>
		<div className="WeatherStationPreview">
			<h3>{props.name}</h3>
			<div>
				Temperature: <abbr title="Indoor">{print(record.indoorTemperature)}</abbr> / <abbr title="Outdoor">{print(record.outdoorTemperature)}</abbr> °C
				Pressure: <abbr title="Absolute">{print(record.absolutePressure)}</abbr> / <abbr title="Relative">{print(record.relativePressure)}</abbr> Pa
				Humidity: <abbr title="Indoor">{print(record.indoorHumidity)}</abbr> / <abbr title="Outdoor">{print(record.outdoorHumidity)}</abbr> %
				Wind: <abbr title="Wind Speed">{print(record.windSpeed)}</abbr> / <abbr title="Wind Gust">{print(record.windGust)}</abbr> Kmh
			</div>
		</div>
	</Link>;

};

WeatherStationPreview.propTypes = {
	id: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	lastRecord: React.PropTypes.shape({
		absolutePressure: React.PropTypes.number,
		relativePressure: React.PropTypes.number,
		indoorTemperature: React.PropTypes.number,
		outdoorTemperature: React.PropTypes.number,
		indoorHumidity: React.PropTypes.number,
		outdoorHumidity: React.PropTypes.number,
		windSpeed: React.PropTypes.number,
		windGust: React.PropTypes.number,
	}).isRequired,
};

export default WeatherStationPreview;
