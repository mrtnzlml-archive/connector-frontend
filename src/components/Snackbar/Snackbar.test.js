import React from 'react';
import ReactDOM from 'react-dom';
import {Snackbar} from './Snackbar';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<Snackbar error={false} message="test" open={true}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});

it('renders error without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<Snackbar error={true} message="test" open={true}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
