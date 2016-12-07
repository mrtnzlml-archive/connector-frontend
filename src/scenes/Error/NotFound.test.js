import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFound';

it('renders without crashing', () => {
	ReactDOM.render(
		<NotFound/>,
		document.createElement('div')
	);
});
