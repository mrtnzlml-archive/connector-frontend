import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';

it('renders without crashing', () => {
	ReactDOM.render(
		<MainMenu/>,
		document.createElement('div')
	);
});
