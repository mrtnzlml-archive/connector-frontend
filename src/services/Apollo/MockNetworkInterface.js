export default class MockNetworkInterface {

	constructor(graphqlResponse) {
		this.graphqlResponse = graphqlResponse;
	}

	query(request) {
		let graphqlResponse = this.graphqlResponse;
		return new Promise(function (fulfill, reject) {
			return fulfill(graphqlResponse)
		});
	}

}
