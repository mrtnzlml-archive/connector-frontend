import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './index';

it('renders without crashing', () => {
	ReactDOM.render(
		<Dashboard/>,
		document.createElement('div')
	);
});
