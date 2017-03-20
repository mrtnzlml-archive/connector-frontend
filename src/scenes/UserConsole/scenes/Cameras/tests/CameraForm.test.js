import React from 'react';
import ReactDOM from 'react-dom';
import CameraForm from '../CameraForm';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<CameraForm/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
