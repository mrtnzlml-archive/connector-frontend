export default [
	{
		path: 'weather-stations',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./../scenes/WeatherStations/AllWeatherStationsContainer').default);
			});
		}
	}, {
		path: 'weather-stations/:id',
		getComponent(nextState, cb) {
			require.ensure([], require => {
				cb(null, require('./../scenes/WeatherStations/DataSourceContainer').default);
			});
		}
	}
]
