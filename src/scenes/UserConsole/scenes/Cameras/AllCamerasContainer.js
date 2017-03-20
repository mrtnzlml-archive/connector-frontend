import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './CameraForm';
import Paper from 'material-ui/Paper';
import CameraWrapper from './CameraWrapper';

const AllCamerasContainer = (props) => {
	let {data: {loading, allCameras}} = props;

	if (loading) {
		return <p>Loading all camera devices&hellip;</p>;
	}

	if (!allCameras.length) {
		return <div>
			<h2>At this place you can add and maintain all your camera devices</h2>
			<p>Are you ready to add your first camera?</p>
			<Form/>
		</div>;
	}

	return <div>
		<CameraWrapper allCameras={allCameras}/>
		<Paper style={{padding: 20, marginTop: '5rem'}}>
			<h3>Add another camera</h3>
			<Form/>
		</Paper>
	</div>;
};

export default graphql(gql`{
  allCameras {
    id
    name
    stream {
	    source
      hls
    }
  }
}
`)(AllCamerasContainer);
