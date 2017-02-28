import React from 'react';
import numeral from 'numeral';

let print = floatNumber => {
	return !isNaN(floatNumber) ? numeral(floatNumber).format('0,0.0[0]') : '---'
};

let panel = (props) => {
	let record = props.lastRecord;

	let partStyle = {float: 'left', marginRight: '4rem', paddingRight: '4rem', borderRight: '1px dotted #aaa'};

	let style = {
		large: {fontSize: '8rem'},
		normal: {fontSize: '4rem'},
	};

	return <div style={{margin: '3rem 0'}}>
		<div style={partStyle}>
			<span style={style.large}><abbr title="Indoor">{print(record.indoorTemperature)}</abbr></span>
			<span style={style.normal}> / <abbr title="Outdoor">{print(record.outdoorTemperature)}</abbr> °C</span>
		</div>

		<div style={partStyle}>
			<span style={style.large}><abbr title="Indoor humidity">{print(record.indoorHumidity)}</abbr></span>
			<span style={style.normal}> / <abbr title="Outdoor humidity">{print(record.outdoorHumidity)}</abbr> %</span>
		</div>

		<div>
			<span style={style.large}><abbr title="Wind speed">{print(record.windSpeed)}</abbr></span>
			<span style={style.normal}> km/h</span>
		</div>

		<div>
			<span style={style.large}><abbr title="Absolute pressure">{print(record.absolutePressure)}</abbr></span>
			<span style={style.normal}> Pa</span>
		</div>
	</div>;
};

panel.propTypes = {
	lastRecord: React.PropTypes.shape({}).isRequired
};

export default panel;
