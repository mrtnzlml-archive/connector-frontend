import fetch from 'services/Fetcher';
import loginMutation from 'graphql/mutation/login.graphql';
import Auth from 'services/Authenticator';
import {browserHistory} from 'react-router'

export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE'; // TODO

export const authenticate = (username, password) => {
	return dispatch => {
		fetch(loginMutation, {
			username, password
		}).then(({data}) => {
			Auth.authenticateUser(data.login.token);
			browserHistory.push('/'); //redirect to the homepage

			dispatch({ // TODO: create reducer (but it's not needed now)
				type: AUTHENTICATE_SUCCESS,
			});
		});
	}
};
