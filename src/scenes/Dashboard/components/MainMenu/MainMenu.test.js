import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

it('renders without crashing', () => {
	ReactDOM.render(
		<MainMenu/>,
		document.createElement('div')
	);
});
