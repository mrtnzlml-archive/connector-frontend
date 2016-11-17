import Relay from 'react-relay';

export default class extends Relay.Route {
	static queries = {
		dataSource: () => Relay.QL`
			query {
				device(id: $deviceId)
			}
		`,
	};
	static paramDefinitions = {
		// By setting `required` to true, `ProfileRoute` will throw if a `deviceId`
		// is not supplied when instantiated.
		deviceId: {
			required: true
		},
	};
	static routeName = 'DataSourceRoute';
}
