import React from 'react';
import ReactDOM from 'react-dom';
import SingleWeatherStationGraph from './SingleWeatherStationGraph';

const wrapper = document.createElement('div');

//FIXME: how to test `ResponsiveContainer`?
test.skip('renders without crashing', () => {
	ReactDOM.render(
		<SingleWeatherStationGraph data={[{'a': 'b'}]} dataKeys={['a']}/>,
		wrapper
	);
});
