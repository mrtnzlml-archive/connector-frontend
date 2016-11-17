import React from 'react';
import ReactDOM from 'react-dom';
import DataSource from './DataSource';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<DataSource/>,
		div
	);
});
