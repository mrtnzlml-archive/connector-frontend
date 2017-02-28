import React from 'react';
import ReactDOM from 'react-dom';
import ModifyStation from '../ModifyStation';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<ModifyStation station={{
				name: 'station name'
			}}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
