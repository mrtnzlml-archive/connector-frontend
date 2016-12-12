export default [
	{
		path: 'data-sources',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./../scenes/DataSources/DataSourcesContainer').default);
			});
		}
	}, {
		path: 'data-sources/:id',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./../scenes/DataSources/DataSourceContainer').default);
			});
		}
	}
]
