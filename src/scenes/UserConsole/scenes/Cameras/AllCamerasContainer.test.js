import React from 'react';
import ReactDOM from 'react-dom';
import AllCamerasContainer from './AllCamerasContainer';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext graphqlResponse={{
			"data": {
				"allCameras": []
			}
		}}>
			<AllCamerasContainer/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
