import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

export default (props) => {

	return <Card>
		<CardMedia overlay={<CardTitle title={props.cameraData.id} subtitle={props.cameraData.id}/>}>
			<img src="webcam/prague.jpg" alt="Webcam view"/>
		</CardMedia>
	</Card>;

};
