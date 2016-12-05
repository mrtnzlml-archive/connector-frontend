import React from 'react';
import {Redirect, Route, IndexRoute} from 'react-router'
import {Router, browserHistory} from 'react-router'
import Auth from './../modules/Auth';
import AuthorizedBase from '../components/Base/AuthorizedBase';
import UnauthorizedBase from '../components/Base/UnauthorizedBase';
import Dashboard from '../components/Dashboard/Dashboard';
import DataSourceGrid from '../components/DataSource/DataSourceGrid';
import NotFound from '../components/Error/NotFound';

export default (
	<Router history={browserHistory}>
		<Route path="/login" getComponent={(nextState, callback) => {
			if (Auth.isUserAuthenticated()) {
				browserHistory.push('/');
			} else {
				callback(null, UnauthorizedBase); //callback signature: (err, component)
			}
		}}/>

		<Route path="/" getComponent={(nextState, callback) => {
			if (Auth.isUserAuthenticated()) {
				callback(null, AuthorizedBase); //callback signature: (err, component)
			} else {
				browserHistory.push('/login');
			}
		}}>
			<IndexRoute component={Dashboard}/>
			<Route path="data-sources" component={DataSourceGrid}/>
			<Route path='/e404' component={NotFound}/>
			<Redirect from='*' to='/e404'/>
		</Route>
	</Router>
);
