import React from 'react';
import CameraView from './CameraView';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Alert from 'components/Dialog/Simple';
import Style from './CameraWrapper.css';
import {connect} from 'react-redux';
import {removeCamera as removeCameraAction} from 'actions/Camera';

class CameraWrapper extends React.Component {

	state = {
		alertOpened: false,
	};

	throwAlert = () => {
		this.setState({alertOpened: true});
	};

	discartAlert = () => {
		this.setState({alertOpened: false});
	};

	removeCamera = (cameraId) => {
		this.props.dispatch(removeCameraAction({
			cameraId: cameraId,
		}));
		this.discartAlert();
	};

	render = () => <div className="clearfix">
		{this.props.allCameras.map((camera) => {
			return <Card key={camera.id} className={Style.Card}>
				<CardMedia>
					<CameraView camera={camera}/>
				</CardMedia>
				<CardTitle title={camera.name} subtitle={camera.stream.source}/>
				<CardActions>
					<FlatButton label="Delete this camera" onClick={this.throwAlert}/>
					<Alert
						open={this.state.alertOpened}
						title={`Do you want to delete this camera?`}
						body="Deleting of this camera cannot be reversed. You'll have to add camera again."
						yesLabel="Yes, delete camera"
						onRequestClose={this.discartAlert}
						onSuccess={() => {
							this.removeCamera(camera.id)
						}}
					/>
				</CardActions>
			</Card>;
		})}
	</div>;

}

CameraWrapper.propTypes = {
	allCameras: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			id: React.PropTypes.string.isRequired,
			name: React.PropTypes.string.isRequired,
			stream: React.PropTypes.shape({
				source: React.PropTypes.string.isRequired,
				hls: React.PropTypes.string.isRequired, // because of <CameraView/>
			}).isRequired,
		}).isRequired,
	).isRequired,
};

export default connect()(CameraWrapper);
