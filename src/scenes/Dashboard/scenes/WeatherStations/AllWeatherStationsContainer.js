import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import WeatherStation from './WeatherStation';

const AllWeatherStationsContainer = (props) => {
	let {data: {loading, allStations}} = props;

	if (loading) {
		return <p>Loading all weather stations&hellip;</p>;
	}

	if (!allStations.stations.length) {
		return <p>There is not a single weather station available.</p>;
	}

	return <div>
			{allStations.stations.map(dataSource =>
				<WeatherStation key={dataSource.id} dataSource={dataSource}/>
			)}
		</div>;
};

export default graphql(gql`
  {
    allStations: allWeatherStations {
      stations: weatherStations {
        id
        name
        records {
          id
        }
      }
    }
  }
`)(AllWeatherStationsContainer);
