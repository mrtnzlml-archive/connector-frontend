import {connect} from 'react-redux'
import Snackbar from './Snackbar'

const mapStateToProps = (storeState, ownProps) => {
	let messages = storeState.messages;
	return {
		...messages,
		...{
			message: messages.message === null ? '' : messages.message,
			open: !!messages.message
		}
	}
};

export default connect(mapStateToProps)(Snackbar)
