import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import WeatherStation from './WeatherStation';

const AllWeatherStationsContainer = (props) => {
	let {data: {loading, allStations}} = props;
	return loading ? null :
		<div>
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
