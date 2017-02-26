import React from 'react';
import {Link} from 'react-router';
import styles from './WeatherStationPreview.css';
import numeral from 'numeral';

let print = floatNumber => {
	return floatNumber ? numeral(floatNumber).format('0,0.0[0]') : '---'
};

const WeatherStationPreview = (props) => {

	let record = props.lastRecord;

	return <Link to={`/weather-stations/${props.id}`}>
		<div className={styles.WeatherStationPreview + ' clearfix'}>
			<div className={styles.wsName}>
				<h2>{props.name}</h2>
			</div>

			<div className={styles.wsProps}>
				<abbr title="Wind Speed">{print(record.windSpeed)}</abbr> &#8725; <abbr title="Wind Gust">{print(record.windGust)}</abbr> km/h
				<br/>
				<abbr title="Absolute">{print(record.absolutePressure)}</abbr> &#8725; <abbr title="Relative">{print(record.relativePressure)}</abbr> Pa
			</div>

			<div className={styles.wsProps}>
				<abbr title="Indoor">{print(record.indoorTemperature)}</abbr> &#8725; <abbr title="Outdoor">{print(record.outdoorTemperature)}</abbr> &deg;C
				<br/>
				<abbr title="Indoor">{print(record.indoorHumidity)}</abbr> &#8725; <abbr title="Outdoor">{print(record.outdoorHumidity)}</abbr> %
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
