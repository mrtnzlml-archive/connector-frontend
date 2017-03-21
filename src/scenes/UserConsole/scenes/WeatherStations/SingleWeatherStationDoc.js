import React from 'react';
import appConfig from '../../../../../config/application'; //FIXME (?)

export default (props) => {
	return <div style={{borderTop: '3px solid #03a9f4', marginTop: '5rem', paddingTop: '3rem'}}>
		<h2>Documentation</h2>

		<p>To create another weather station record send this GraphQL query to the backend server (address is <code>{appConfig.apiAddress}</code>):</p>
		<pre>{`mutation ($id: ID!, $input: PhysicalQuantitiesInput!) {
  createWeatherStationRecord(id: $id, quantities: $input) {
    id
  }
}`}</pre>

		<p>It's important to send this quiery via HTTP POST method with this JSON data payload:</p>
		<pre>{`{
  "id": "${props.wsId}",
  "input": {
    "absolutePressure": 101300,
    "relativePressure": 99500,
    "indoorTemperature": 20,
    "outdoorTemperature": 8,
    "indoorHumidity": 30,
    "outdoorHumidity": 50,
    "windSpeed": 0,
    "windAzimuth": 90,
    "windGust": 10,
    "pressureUnit": "PASCAL",
    "humidityUnit": "PERCENTAGE",
    "windSpeedUnit": "KMH",
    "temperatureUnit": "CELSIUS"
  }
}`}</pre>

	</div>;
};
