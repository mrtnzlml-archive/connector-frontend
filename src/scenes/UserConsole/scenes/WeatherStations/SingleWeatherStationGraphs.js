import React from 'react';
import Graph from './SingleWeatherStationGraph';

let graphStyle = {marginTop: '2rem', marginBottom: '2rem'};

export default (props) => {

	let connectionDetails = props.recordsConnection;
	let allRecords = connectionDetails ? connectionDetails.records : null;
	let returnedCount = connectionDetails ? connectionDetails.returnedCount : 0;

	let minimumCount = 10;
	if (returnedCount < minimumCount) {
		return <div style={{marginTop: '5rem'}}>
			<h2>There is not enought data to show statistics yet.</h2>
			<p>
				But hey, don't worry!<br/>
				Keep sending data to the weather station and come back later
				(avaliable records <strong>{returnedCount}</strong> but at least <strong>{minimumCount}</strong> is needed).
			</p>
		</div>
	}

	return <div>
		<div style={graphStyle}>
			<h3>Temperature history (<code>°C</code>)</h3>
			<Graph data={allRecords} dataKeys={['indoorTemperature', 'outdoorTemperature']} interpolation={props.interpolation}/>
		</div>

		<div style={graphStyle}>
			<h3>Pressure history (<code>Pa</code>)</h3>
			<Graph data={allRecords} dataKeys={['absolutePressure', 'relativePressure']} interpolation={props.interpolation}/>
		</div>

		<div style={graphStyle}>
			<h3>Humidity history (<code>%</code>)</h3>
			<Graph data={allRecords} dataKeys={['indoorHumidity', 'outdoorHumidity']} interpolation={props.interpolation}/>
		</div>

		<div style={graphStyle}>
			<h3>Wind speed and gust history (<code>km/h</code>)</h3>
			<Graph data={allRecords} dataKeys={['windSpeed', 'windGust']} interpolation={props.interpolation}/>
		</div>
	</div>;

};
