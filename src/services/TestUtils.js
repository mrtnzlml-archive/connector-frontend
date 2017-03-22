import React from 'react';
import MuiTheme from 'services/MaterialUI/MuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // needed for onTouchTap (https://github.com/callemall/material-ui#react-tap-event-plugin)

export class ApplicationContext extends React.Component {

	getChildContext() {
		return {
			muiTheme: MuiTheme,
		}
	};

	render() {
		return <div>{this.props.children}</div>;
	};

}

ApplicationContext.childContextTypes = {
	muiTheme: React.PropTypes.object,
};
