import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import router from './routes/index';
import {ReduxStore} from './services/ReduxStore';

injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

ReactDOM.render(
	<Provider store={ReduxStore}>
		{router}
	</Provider>,
	document.getElementById('root')
);
