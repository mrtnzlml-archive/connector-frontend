import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Row from './DataSourceGridRow';

const DataSourcesContainer = (props) => {
	let {data: {loading, devices}} = props;
	console.log(props.routeParams.id); //TODO: validace (pokud GraphQL vrátí NULL, tak přesměrovat s upozorněním?)!
	return loading ? null :
		<div>
			<h2>Data Source {props.routeParams.id}</h2>
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
