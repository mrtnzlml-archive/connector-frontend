import React from 'react';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';

export default (props) => {

	return <ResponsiveContainer width="100%" height={100}>
		<LineChart data={props.data} syncId="singleWS">
			<XAxis dataKey="creationDate"/>
			<YAxis type="number" domain={['auto', 'auto']}/>
			{props.dataKeys.map((dataKey) => {
				return <Line
					key={dataKey}
					type={props.interpolation}
					dataKey={dataKey}
					stroke="#8884d8"
					isAnimationActive={false}
					dot={{r: 2}}/>
			})}
			<Tooltip isAnimationActive={false}/>
		</LineChart>
	</ResponsiveContainer>;

};
