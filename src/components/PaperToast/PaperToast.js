import React from 'react';
import './PaperToast.css';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.message) {
			this.setState({
				opacity: 1
			});
			setTimeout(() => this.setState({
				opacity: 0
			}), 5000);
		}
	}

	render() {
		return <span id="PaperToast" style={{opacity: this.state.opacity}}>{this.props.message}</span>;
	}
}
