import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedBase from './AuthorizedBase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //FIXME: only because of Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)

it('renders without crashing', () => {
	ReactDOM.render(
		<MuiThemeProvider>
			<AuthorizedBase/>
		</MuiThemeProvider>,
		document.createElement('div')
	);
});
