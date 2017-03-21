import React from 'react';
import StationPanel from './StationPanel';
import {connect} from 'react-redux';

const StationPanelContainer = class extends React.Component {

	render = () => {
		let {station} = this.props;

		if (!station) { // loading
			return null;
		}

		let lastRecord = station.records ? station.records[0] : null;

		return <div>{lastRecord && <StationPanel lastRecord={lastRecord}/>}</div>;
	}

};

StationPanelContainer.propTypes = {
	stationId: React.PropTypes.string.isRequired,
};

export default connect(
	(storageState, ownProps) => { // mapStateToProps
		let {weatherStations: {entities}} = storageState;

		return {
			station: entities ? entities[ownProps.stationId] : null, // only single station
		}
	}
)(StationPanelContainer);
