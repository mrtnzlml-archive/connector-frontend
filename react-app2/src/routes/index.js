import React from 'react';
import {Redirect, Route} from 'react-router'

import App from './../components/App/App';
import DataSource from './../components/DataSource/DataSource';
import NotFound from './../components/Error/NotFound';

export default (
	<Route path="/" component={App}>
		<Route path="data-sources" component={DataSource}/>
		<Route path='/e404' component={NotFound}/>
		<Redirect from='*' to='/e404'/>
	</Route>
);
