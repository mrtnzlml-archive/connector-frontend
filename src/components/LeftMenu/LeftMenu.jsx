import React from 'react';
// import Relay from 'react-relay';
import {Link, IndexLink} from 'react-router'
import './LeftMenu.css';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const ACTIVE = { color: 'red' };

class LeftMenu extends React.Component {
	render() {

		//console.log(this.props.dataSource);

		return (
			<div className="LeftMenu">
				<List>
					<Subheader>Adeira<strong>:connector</strong></Subheader>
					<IndexLink to="/" activeStyle={ACTIVE}>
						<ListItem
							primaryText="Dashboard"
						/>
					</IndexLink>
					<Link to="/data-sources">
						<ListItem
							primaryText="Data Sources"
							secondaryText="List all available data sources"
						/>
					</Link>
				</List>
				<Divider/>
				<List>
					<Subheader>Hangout Notifications</Subheader>
					<ListItem
						leftCheckbox={<Checkbox />}
						primaryText="Notifications"
						secondaryText="Allow notifications"
					/>
				</List>
			</div>
		);
	}
}

LeftMenu.propTypes = {
	// dataSource: React.PropTypes.object.isRequired
};

export default LeftMenu;
// export default Relay.createContainer(LeftMenu, {
// 	fragments: {
// 		// Define a fragment with a name matching the `dataSource` prop expected above
// 		dataSource: () => Relay.QL`
//       fragment on DataSource {
//         id,
//         name
//       }
//     `
// 	}
// });
