import React from 'react';
import ReactDOM from 'react-dom';
import AuthorizedBase from './AuthorizedBase';
import {Provider} from 'react-redux'
import ReduxStore from 'services/ReduxStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

it('renders without crashing', () => {
	ReactDOM.render(
		<Provider store={ReduxStore}>
			<AuthorizedBase/>
		</Provider>,
		document.createElement('div')
	);
});
