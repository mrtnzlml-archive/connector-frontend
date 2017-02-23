import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import CameraView from './CameraView';
import {GridList, GridTile} from 'material-ui/GridList';

const AllCamerasPresentation = (props) => {
	let {data: {loading, allCameras}} = props;

	if (loading) {
		return <p>Loading all weather stations&hellip;</p>;
	}

	if (!allCameras.length) {
		return <div>
			<h2>At this place you can add and maintain all your camera devices</h2>
			<p>Are you ready to add your first camera?</p>
			{/* TODO: {weatherStationForm} */}
		</div>;
	}

	return <GridList cellHeight="auto">
		{allCameras.map((camera) => {
			return <GridTile key={camera.id}>
				<CameraView cameraData={camera}/>
			</GridTile>;
		})}
	</GridList>;
};

export default graphql(gql`{
  allCameras {
    id
  }
}
`)(AllCamerasPresentation);
