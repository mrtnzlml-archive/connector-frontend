import React from 'react';
import {Link, IndexLink} from 'react-router'
import './LeftMenu.css';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
// import Divider from 'material-ui/Divider';
// import Checkbox from 'material-ui/Checkbox';

const ACTIVE = { color: 'red' };

class LeftMenu extends React.Component {
	render() {
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
{/*			<Divider/>
				<List>
					<Subheader>Hangout Notifications</Subheader>
					<ListItem
						leftCheckbox={<Checkbox />}
						primaryText="Notifications"
						secondaryText="Allow notifications"
					/>
				</List>*/}
			</div>
		);
	}
}

export default LeftMenu;
