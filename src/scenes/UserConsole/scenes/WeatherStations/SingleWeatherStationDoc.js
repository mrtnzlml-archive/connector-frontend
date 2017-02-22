import React from 'react';

export default (props) => {
	return <div>
		<h2>Documentation</h2>
		To create another weather station record send this GraphQL query:

		<pre>{`mutation ($id: ID!, $input: PhysicalQuantitiesInput!) {
  createWeatherStationRecord(id: $id, quantities: $input) {
    id
  }
}`}</pre>

		With JSON data:

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
