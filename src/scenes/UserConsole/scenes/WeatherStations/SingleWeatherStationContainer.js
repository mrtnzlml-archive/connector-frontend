import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {browserHistory} from 'react-router'

const SingleWeatherStationContainer = (props) => {
	let {data: {loading, station}} = props;

	if (loading) {
		return null;
	}

	if (!station) { //validace props.routeParams.id (?)
		browserHistory.push('/');
	}

	return <div>
		<h2>Weather station {station.name}</h2>
		{station.records ? station.records.map(record =>
				<p key={record.id}>{record.id}</p>
			) : ''}
	</div>;
};

export default graphql(gql`
  query($wsId: ID!) {
    station: weatherStation(id: $wsId) {
		  name
      records: allRecords(first: 100) {
	      id
      }
    }
  }`, {
	options: (props) => ({
		variables: {
			wsId: props.routeParams.id
		}
	}),
})(SingleWeatherStationContainer);
