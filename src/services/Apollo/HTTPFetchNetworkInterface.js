import {print} from 'graphql-tag/printer';
import Authenticator from 'services/Authenticator';
import {showMessage, showErrorMessage} from 'actions/ActionCreators'
import {ReduxStore} from 'services/ReduxStore';

export default class HTTPFetchNetworkInterface {
	constructor(uri) {
		this.uri = uri;
	}

	query(request) {
		let headers = {
			Accept: '*/*',
			'Content-Type': 'application/json'
		};
		let token = Authenticator.getToken();
		if (token !== null) {
			headers.authorization = token;
		}

		return fetch(this.uri, {
			method: 'POST',
			body: JSON.stringify({
				query: print(request.query),
				variables: request.variables,
				operationName: request.operationName // if the provided query contains multiple named operations, this specifies which operation should be executed; if not provided, a 400 error will be returned if the query contains multiple named operations
			}),
			headers
		}).then(function (response) {
			return response.json();
		}).then(function (json) {
			if (json.errors) {
				for (let error of json.errors) {
					ReduxStore.dispatch(showMessage(error.message));
				}
			}
			return json;
		}).catch(function (err) {
			ReduxStore.dispatch(showErrorMessage('Backend API server is not reachable... :-('));
			return {
				errors: [{message: err}]
			}
		});
	}
}
