import React from 'react';
import Clappr from 'clappr';

export default class extends React.Component {
	static propTypes = {
		source: React.PropTypes.string
	};

	shouldComponentUpdate = (nextProps, nextState) => {
		let changed = (nextProps.source !== this.props.source);
		this.props = nextProps;
		this.state = nextState;
		if (changed) {
			this.change(nextProps.source);
		}
		return false; // Clappr mutates DOM itself
	};

	componentDidMount = () => {
		this.change(this.props.source);
	};

	componentWillUnmount = () => {
		this.destroyPlayer();
	};

	destroyPlayer = () => {
		if (this.player) {
			this.player.destroy();
		}
		this.player = null;
	};

	change = (source) => {
		if (this.player) {
			this.destroyPlayer();
		}
		this.player = new Clappr.Player({
			parent: this.refs.player,
			source: source,
			// width: '100%',
			// height: '100%',
		});
	};

	render() {
		return <div ref="player"></div>;
	};

};
