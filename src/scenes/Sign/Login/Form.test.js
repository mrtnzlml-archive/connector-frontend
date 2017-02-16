import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './Form';
import {ApplicationContext} from '../../../services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<LoginForm/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
