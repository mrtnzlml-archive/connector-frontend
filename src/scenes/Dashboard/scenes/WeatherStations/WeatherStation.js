import React from 'react';
import {Link} from 'react-router';
import './WeatherStation.css';

const WeatherStation = (props) => {
	let ds = props.dataSource;
	return <Link to={`/weather-stations/${ds.id}`}>
		<div className="WeatherStationPreview">
			<h3>{ds.name}</h3>
			<p>
				{ds.records.length} records available
				<br/>
				UUID: {ds.id}
			</p>
		</div>
	</Link>;
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
