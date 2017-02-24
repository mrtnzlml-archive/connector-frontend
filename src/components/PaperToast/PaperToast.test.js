import React from 'react';
import ReactDOM from 'react-dom';
import PaperToast from './PaperToast';
import {ApplicationContext} from 'services/TestUtils';

it('renders without crashing', () => {
	ReactDOM.render(
		<ApplicationContext>
			<PaperToast/>
		</ApplicationContext>,
		document.createElement('div')
	);
});

it('renders message without crashing', () => {
	ReactDOM.render( // TODO: test render result and opacity
		<ApplicationContext>
			<PaperToast message="test"/>
		</ApplicationContext>,
		document.createElement('div')
	);
});
