import React from 'react';
import {Link} from 'react-router';

const Row = (props) => {
	let ds = props.dataSource;
	return <div>{ds.name} <Link to={`/data-sources/${ds.id}`}>{ds.id}</Link> ({ds.records.length} records available)
	</div>;
};

Row.propTypes = {
	dataSource: React.PropTypes.shape({
		id: React.PropTypes.string,
		name: React.PropTypes.string,
		records: React.PropTypes.array,
		// records: React.PropTypes.shape({
		// 	id: React.PropTypes.string
		// })
	}).isRequired,
};

export default Row;
