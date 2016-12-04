import Relay from 'react-relay';

export default class extends Relay.Route {

	static routeName = 'DataSourceRoute';

	static queries = {
		dataSource: () => Relay.QL`
			query {
				device(id: $deviceId)
			}
		`,
	};

	static paramDefinitions = {
		deviceId: {
			required: true
		},
	};

}
