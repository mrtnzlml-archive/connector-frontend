class Authenticator {

	/**
	 * Authenticate a user. Save a token string in Local Storage
	 *
	 * @param {string} token
	 */
	static authenticateUser(token) {
		localStorage.setItem('token', token);
	}

	/**
	 * Check if a user is authenticated - check if a token is saved in Local Storage and it's not expired
	 */
	static isUserAuthenticated() {
		let token = localStorage.getItem('token');
		if (token === null) {
			return false
		}
		let payload = JSON.parse(atob(token.split('.')[1]));
		let expirationTime = payload['exp'];
		if (expirationTime < Math.floor(new Date().getTime() / 1000)) { //time() format from PHP
			this.deauthenticateUser();
			return false;
		}
		return true;
	}

	/**
	 * Deauthenticate a user. Remove a token from Local Storage.
	 */
	static deauthenticateUser() {
		localStorage.removeItem('token');
	}

	/**
	 * Get a token value.
	 */
	static getToken() {
		return localStorage.getItem('token') ? localStorage.getItem('token') : null;
	}

}

export default Authenticator;
