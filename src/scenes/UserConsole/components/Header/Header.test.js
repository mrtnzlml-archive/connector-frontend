import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
	ReactDOM.render(
		<Header/>,
		document.createElement('div')
	);
});
