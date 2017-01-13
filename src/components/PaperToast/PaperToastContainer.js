import {connect} from 'react-redux'
import PaperToast from './PaperToast'

const mapStateToProps = (storeState) => {
	return {
		message: storeState.message
	}
};

export default connect(mapStateToProps)(PaperToast)
