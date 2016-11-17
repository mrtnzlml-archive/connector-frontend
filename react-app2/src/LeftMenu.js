import React, {Component} from 'react';
import Relay from 'react-relay';

class LeftMenu extends Component {
	render() {

		//console.log(this.props.dataSource);

		return (
			<div>
				LeftMenu - OK
			</div>
		);
	}
}

LeftMenu.propTypes = {
	dataSource: React.PropTypes.object.isRequired
};

export default Relay.createContainer(LeftMenu, {
	fragments: {
		// Define a fragment with a name matching the `dataSource` prop expected above
		dataSource: () => Relay.QL`
      fragment on DataSource {
        id,
        name
      }
    `
	}
});
