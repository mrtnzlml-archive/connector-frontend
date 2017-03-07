import React from 'react';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';
import moment from 'moment';

let tickAggregatedDate = (timestamp) => {
	return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'); // March 7th 2017, 4:31:55 pm
};

let renderTooltip = (props) => {
	let {payload} = props;
	if (!payload.length) {
		return;
	}
	return <div style={{background: 'rgba(255, 255, 255, 0.75)'}}>
		{tickAggregatedDate(payload[0].payload.aggregatedDate)}
		<br/>
		{payload[0].value}
		<br/>
		{payload[1].value}
	</div>;
};

export default (props) => {

	return <ResponsiveContainer width="100%" height={100}>
		<LineChart data={props.data} syncId="singleWS">

			<XAxis
				dataKey="aggregatedDate"
				tickFormatter={tickAggregatedDate}
				interval="preserveStartEnd"
			  style={{
			  	fontSize: '1rem',
			  }}
			/>
			<YAxis
				hide={true}
				domain={['auto', 'auto']}
			/>

			{props.dataKeys.map((dataKey, index) => {
				let colors = ['0288d1', '0fb8ad'];
				return <Line
					key={dataKey}
					type={props.interpolation}
					dataKey={dataKey}
					stroke={`#${colors[index]}`}
					isAnimationActive={false}
					dot={{r: 2}}
				/>
			})}

			<Tooltip content={renderTooltip} isAnimationActive={false}/>

		</LineChart>
	</ResponsiveContainer>;

};
