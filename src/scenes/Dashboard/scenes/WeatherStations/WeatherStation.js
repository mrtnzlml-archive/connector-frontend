import React from 'react';
import {Link} from 'react-router';
import './WeatherStation.css';

const WeatherStation = (props) => {
	let ds = props.dataSource;
	return <div className="WeatherStationPreview">
		<h3>{ds.name} <small>({ds.records.length} records available)</small></h3>
		<p>
			UUID: <Link to={`/weather-stations/${ds.id}`}>{ds.id}</Link>
		</p>
	</div>;
};

WeatherStation.propTypes = {
	dataSource: React.PropTypes.shape({
		id: React.PropTypes.string,
		name: React.PropTypes.string,
		records: React.PropTypes.array,
		// records: React.PropTypes.shape({
		// 	id: React.PropTypes.string
		// })
	}).isRequired,
};

export default WeatherStation;
