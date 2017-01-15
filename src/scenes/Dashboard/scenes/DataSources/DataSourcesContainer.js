import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Row from './DataSourceGridRow';

const DataSourcesContainer = (props) => {
	let {data: {loading, allStations}} = props;
	return loading ? null :
		<div>
			<h2>Data Sources</h2>
			{allStations.stations.map(dataSource =>
				<Row key={dataSource.id} dataSource={dataSource}/>
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
`)(DataSourcesContainer);
