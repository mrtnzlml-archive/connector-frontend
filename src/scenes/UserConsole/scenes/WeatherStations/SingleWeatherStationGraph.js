import React from 'react';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';

let tickFormatterX = (timestamp) => {
	//TODO: nejen datum, ale i čas!
	let date = new Date(Date.parse(timestamp));
	return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
};

let renderTooltip = (props) => {
	let {payload} = props;
	if (!payload.length) {
		return;
	}
	return <div>
		{payload[0].value}
		<br/>
		{payload[1].value}
	</div>;
};

export default (props) => {

	return <ResponsiveContainer width="100%" height={100}>
		<LineChart data={props.data} syncId="singleWS">

			<XAxis
				dataKey="creationDate"
				tickFormatter={tickFormatterX}
				minTickGap={10}
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
