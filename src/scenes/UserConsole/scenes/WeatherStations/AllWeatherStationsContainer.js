import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import WeatherStation from './WeatherStation';
import WeatherStationForm from './WeatherStationForm';

const AllWeatherStationsContainer = (props) => {
	let {data: {loading, allStations}} = props;

	if (loading) {
		return <p>Loading all weather stations&hellip;</p>;
	}

	if (!allStations.stations.length) {
		return <div>
			<h2>At this place you can add and maintain all your weather stations</h2>
			<p>Are you ready to add your first weather station?</p>
			<WeatherStationForm series={allStations.series}/>
		</div>;
	} else {
		return <div>
			{allStations.stations.map(dataSource =>
				<WeatherStation
					key={dataSource.node.id}
					id={dataSource.node.id}
					name={dataSource.node.name}
					lastRecord={dataSource.node.records ? dataSource.node.records[0] : { //defaults
							indoorTemperature: null
						}}
				/>
			)}
			<WeatherStationForm series={allStations.series}/>
		</div>
	}
};

//TODO: stránkování
export default graphql(gql`{
  allStations: allWeatherStations {
    stations: edges {
      cursor
      node {
        id
        name
        records: allRecords(first: 1) {
          indoorTemperature
        }
      }
    }
    series: series {
      id
      name
    }
  }
}`)(AllWeatherStationsContainer);
