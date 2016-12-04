import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

//FIXME: this is actually DataSourceContainer (should render DataSources with props in constructor - Presentational component)
//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rzy1zv982
const DataSourceGrid = ({data: {loading, devices}}) => {
	return loading ? null :
		<div>
			{devices.map(dataSource => <b key={dataSource.id}>{dataSource.name}<br/></b>)}
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
`)(DataSourceGrid);
