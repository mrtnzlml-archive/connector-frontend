export default [
	{
		path: 'weather-stations',
		onEnter(nextState, replace) {
			replace('/');
		},
	}, {
		path: 'weather-stations/:id',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./../scenes/WeatherStations/DataSourceContainer').default);
			});
		}
	}
]
