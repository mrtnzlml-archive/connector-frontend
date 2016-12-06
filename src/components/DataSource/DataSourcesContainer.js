import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Row from './DataSourceGridRow';

//FIXME: this is actually DataSourceContainer (should render DataSources with props in constructor - Presentational component)
//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rzy1zv982
const DataSourcesContainer = (props) => {
	let {data: {loading, devices}} = props;
	return loading ? null :
		<div>
			<h2>Data Sources</h2>
			{devices.map(dataSource =>
				<Row key={dataSource.id} dataSource={dataSource}/>
			)}
		</div>;
};

export default graphql(gql`
  query {
    devices {
      id,
      name,
      records
    }
  }
`)(DataSourcesContainer);
