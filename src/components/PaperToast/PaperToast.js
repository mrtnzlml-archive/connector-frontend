import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const SnackbarComponent = class extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.message) {
			this.setState({
				open: true,
			});
		}
	}

	handleRequestClose = (reason) => {
		if (reason !== 'clickaway') {
			this.setState({
				open: false,
			});
		}
	};

	render() {
		let message = this.props.message ? this.props.message : '';

		return <Snackbar
			open={this.state.open}
			message={message}
			autoHideDuration={5000}
			onRequestClose={this.handleRequestClose}
			bodyStyle={this.props.error ? {backgroundColor: 'maroon'} : {}}
		/>;
	}

};

SnackbarComponent.propTypes = {
	message: React.PropTypes.string,
	error: React.PropTypes.bool,
};

export default SnackbarComponent;
