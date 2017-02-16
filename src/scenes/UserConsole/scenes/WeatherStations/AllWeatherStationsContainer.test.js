import React from 'react';
import ReactDOM from 'react-dom';
import AllWeatherStationsContainer from './AllWeatherStationsContainer';
import {ApplicationContext} from '../../../../services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext graphqlResponse={{
			"data": {
				"allStations": {
					"series": [],
					"stations": []
				}
			}
		}}>
			<AllWeatherStationsContainer/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
