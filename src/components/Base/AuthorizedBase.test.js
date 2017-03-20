import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedBase from './AuthorizedBase';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<AuthorizedBase/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
