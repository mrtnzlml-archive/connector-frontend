import {connect} from 'react-redux'
import PaperToast from './PaperToast'

const mapStateToProps = (storeState) => {
	return {
		error: storeState.error,
		timestamp: storeState.timestamp,
		message: storeState.message,
	}
};

export default connect(mapStateToProps)(PaperToast)
