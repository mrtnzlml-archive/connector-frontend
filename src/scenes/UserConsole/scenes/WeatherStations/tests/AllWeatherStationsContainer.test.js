import React from 'react';
import ReactDOM from 'react-dom';
import {AllWeatherStationsContainer} from '../AllWeatherStationsContainer';
import {ApplicationContext} from 'services/TestUtils';

let dispatchMock = () => {
};

it('renders without crashing during loading', () => {
	ReactDOM.render(
		<AllWeatherStationsContainer dispatch={dispatchMock} loading={true}/>,
		document.createElement('div')
	);
});

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<AllWeatherStationsContainer dispatch={dispatchMock} loading={false} stations={[]}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
