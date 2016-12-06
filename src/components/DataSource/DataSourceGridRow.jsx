import React from 'react';

const Row = (props) => {
	let ds = props.dataSource;
	return <div>{ds.name} {ds.id} ({ds.records.length} records available)</div>;
};

Row.propTypes = {
	dataSource: React.PropTypes.shape({
		id: React.PropTypes.string,
		name: React.PropTypes.string,
		records: React.PropTypes.arrayOf(React.PropTypes.string)
	}).isRequired,
};

export default Row;
