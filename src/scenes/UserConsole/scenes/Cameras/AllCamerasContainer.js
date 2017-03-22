import React from 'react';
import Form from './CameraForm';
import Paper from 'material-ui/Paper';
import CameraWrapper from './CameraWrapper';
import {connect} from 'react-redux';
import {loadAllCameras} from 'actions/Camera';

const AllCamerasContainer = class extends React.Component {

	componentWillMount() {
		this.props.dispatch(loadAllCameras());
	}

	render = () => {
		let {cameras, loading} = this.props;

		if (loading) {
			return <p>Loading all camera devices&hellip;</p>;
		}

		if (!cameras.length) {
			return <div>
				<h2>At this place you can add and maintain all your camera devices</h2>
				<p>Are you ready to add your first camera?</p>
				<Form/>
			</div>;
		}

		return <div>
			<CameraWrapper allCameras={cameras}/>
			<Paper style={{padding: 20, marginTop: '5rem'}}>
				<h3>Add another camera</h3>
				<Form/>
			</Paper>
		</div>;
	}

};

export default connect(
	storeState => { //mapStateToProps
		let {cameras} = storeState;
		return {
			loading: cameras.loading,
			cameras: Object.keys(cameras.entities).map(key => cameras.entities[key]),
		}
	}
)(AllCamerasContainer);
