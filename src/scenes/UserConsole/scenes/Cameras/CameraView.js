import React from 'react';
import ClapprPlayer from 'components/Clappr/Clappr';

let CameraView = (props) =>
	<ClapprPlayer source={props.camera.stream.hls}/>;

CameraView.propTypes = {
	camera: React.PropTypes.shape({
		stream: React.PropTypes.shape({
			hls: React.PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
};

export default CameraView;
