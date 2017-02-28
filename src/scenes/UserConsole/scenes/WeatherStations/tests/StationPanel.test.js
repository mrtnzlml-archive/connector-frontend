import React from 'react';
import ReactDOM from 'react-dom';
import StationPanel from '../StationPanel';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<StationPanel lastRecord={{}}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
