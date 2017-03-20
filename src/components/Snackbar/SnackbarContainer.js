import {connect} from 'react-redux'
import Snackbar from './Snackbar'

const mapStateToProps = (storeState, ownProps) => {
	let messages = storeState.messages;
	return {
		message: messages.message === null ? '' : messages.message,
		error: messages.error,
		open: !!messages.message
	}
};

export default connect(mapStateToProps)(Snackbar)
