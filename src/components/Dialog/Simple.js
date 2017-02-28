import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SimpleDialog extends React.Component {

	render() {
		const actions = [
			<FlatButton
				label="No, it was mistake"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.props.onRequestClose}
			/>,
			<RaisedButton
				label={this.props.yesLabel}
				primary={true}
				onTouchTap={this.props.onSuccess}
			/>,
		];

		return (
			<div>
				<Dialog title={this.props.title} actions={actions} modal={false} open={this.props.open} onRequestClose={this.props.onRequestClose}>
					{this.props.body}
				</Dialog>
			</div>
		);
	}

}

SimpleDialog.propTypes = {
	open: React.PropTypes.bool.isRequired,
	title: React.PropTypes.string.isRequired,
	body: React.PropTypes.string.isRequired,
	yesLabel: React.PropTypes.string.isRequired,
	onRequestClose: React.PropTypes.func.isRequired,
	onSuccess: React.PropTypes.func.isRequired,
};

export default SimpleDialog;
