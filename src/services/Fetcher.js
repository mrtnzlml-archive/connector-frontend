import fetch from 'isomorphic-fetch'
import config from './../../config/application';
import Authenticator from 'services/Authenticator';
import {showMessage, showErrorMessage} from 'actions/Message'
import {ReduxStore} from 'services/ReduxStore';

export default function query(graphQuery, variables = null, operationName = null) {
	let headers = {
		Accept: '*/*',
		'Content-Type': 'application/json'
	};
	let token = Authenticator.getToken();
	if (token !== null) {
		headers.authorization = token;
	}

	return fetch(config.apiAddress, {
		method: 'POST',
		body: JSON.stringify({
			query: graphQuery,
			variables: variables,
			operationName: operationName
		}),
		headers
	}).then(response => response.json())
		.then(json => {
			if (json.errors) {
				for (let error of json.errors) {
					ReduxStore.dispatch(showMessage(error.message));
				}
			}
			return json; // FIXME: normalizr
		})
		.catch(function (err) {
			ReduxStore.dispatch(showErrorMessage('Backend API server failed... :-('));
			return {
				errors: [{message: err}]
			}
		});
}
