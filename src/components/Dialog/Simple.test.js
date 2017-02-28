import React from 'react';
import ReactDOM from 'react-dom';
import SimpleDialog from './Simple';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<SimpleDialog open={true} body="body" onRequestClose={() => {}} onSuccess={() => {}} title="title" yesLabel="yes"/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
