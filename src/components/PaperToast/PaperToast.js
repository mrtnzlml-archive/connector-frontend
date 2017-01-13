import React from 'react';
import './PaperToast.css';

export default class extends React.Component {
	static propTypes = {
		message: React.PropTypes.string,
		error: React.PropTypes.bool,
	};

	constructor(props) {
		super(props);
		this.state = {
			opacity: 0,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.message) {
			this.setState({
				opacity: 1,
			});
			setTimeout(() => this.setState({
				opacity: 0,
			}), 5000);
		}
	}

	render() {
		return <span className={'PaperToast ' + (this.props.error ? 'PaperToast--error' : '')}
		             style={{opacity: this.state.opacity}}>{this.props.message}</span>;
	}
}
