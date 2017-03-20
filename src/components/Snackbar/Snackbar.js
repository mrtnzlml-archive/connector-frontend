import React from 'react';
import MaterialSnackbar from 'material-ui/Snackbar';

const Snackbar = class extends React.Component {

	state = {
		open: false,
	};

	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open,
		});
	}

	handleRequestClose = (reason) => {
		if (reason !== 'clickaway') {
			this.setState({
				open: false,
			});
		}
	};

	render() {
		return <MaterialSnackbar
			open={this.state.open}
			message={this.props.message}
			autoHideDuration={5000}
			onRequestClose={this.handleRequestClose}
			bodyStyle={this.props.error ? {backgroundColor: 'maroon'} : {}}
		/>;
	}

};

Snackbar.propTypes = {
	message: React.PropTypes.string.isRequired,
	error: React.PropTypes.bool.isRequired,
	open: React.PropTypes.bool.isRequired,
};

export default Snackbar;
