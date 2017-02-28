import React from 'react';
import ReactDOM from 'react-dom';
import SingleWeatherStationDoc from '../SingleWeatherStationDoc';

it('renders without crashing', () => {
	ReactDOM.render(
		<SingleWeatherStationDoc/>,
		document.createElement('div')
	);
});
