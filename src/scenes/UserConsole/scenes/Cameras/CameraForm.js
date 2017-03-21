import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';
import {showMessage} from 'actions/Message';
import {ReduxStore} from 'services/ReduxStore';

class CameraForm extends React.Component {

	state = {
		canSubmit: false,
	};

	enableButton = () => {
		this.setState({
			canSubmit: true,
		});
	};

	disableButton = () => {
		this.setState({
			canSubmit: false,
		});
	};

	handleSubmit = (formValues) => {
		this.props.mutate({
			variables: {
				streamSource: formValues.stream,
				name: formValues.name,
			}
		}).then((response) => {
			browserHistory.push('/cameras/'); //redirect to all cameras page
			ReduxStore.dispatch(showMessage('New camera has been created. Streaming will start in one moment.'));
		});
	};

	render() {
		return (
			<Formsy.Form onValid={this.enableButton}
			             onInvalid={this.disableButton}
			             onValidSubmit={this.handleSubmit}>

				<FormsyText name="name"
				            type="text"
				            required
				            fullWidth
				            floatingLabelText="Write weather station name here..."/>
				<FormsyText name="stream"
				            type="text"
				            required
				            fullWidth
				            value="rtsp://"
				            floatingLabelText="Camera stream address"/>

				<RaisedButton type="submit" label="Save Camera" primary={true} disabled={!this.state.canSubmit}/>
			</Formsy.Form>
		);
	}

}

export default graphql(gql`
  mutation ($streamSource: String!, $name: String!) {
    station: createCamera(streamSource: $streamSource, name: $name) {
      id
    }
  }
`)(CameraForm);
