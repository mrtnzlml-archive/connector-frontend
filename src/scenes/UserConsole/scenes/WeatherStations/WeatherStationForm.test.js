import React from 'react';
import ReactDOM from 'react-dom';
import WeatherStationForm from './WeatherStationForm';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<WeatherStationForm/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
