import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<p>Welcome to the Dashboard!</p>
				<p>It is {this.state.date.toLocaleTimeString()}.</p>
			</div>
		);
	}
}
