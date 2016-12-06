import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
	ReactDOM.render(
		<Dashboard/>,
		document.createElement('div')
	);
});
