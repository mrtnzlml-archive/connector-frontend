import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from './LeftMenu';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //FIXME: only because of Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

it('renders without crashing', () => {
	ReactDOM.render(
		<MuiThemeProvider>
			<LeftMenu/>
		</MuiThemeProvider>,
		document.createElement('div')
	);
});
