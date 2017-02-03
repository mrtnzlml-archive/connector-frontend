import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const DataSourcesContainer = (props) => {
	let {data: {loading, station}} = props;
	//console.log(props.routeParams.id); //TODO: validace (pokud GraphQL vrátí NULL, tak přesměrovat s upozorněním?)!
	return loading ? null :
		<div>
			<h2>Data Source {props.routeParams.id}</h2>
			{station.records.map(record =>
				<p key={record.id}>{record.id}</p>
			)}
		</div>;
};

export default graphql(gql`
  query($wsId: String!) {
    station: weatherStation(id: $wsId) {
      records {
        id
      }
    }
  }
`, {
	options: (props) => ({
		variables: {
			wsId: props.routeParams.id
		}
	}),
})(DataSourcesContainer);
