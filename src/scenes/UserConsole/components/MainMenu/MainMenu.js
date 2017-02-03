import React from 'react';
import {IndexLink} from 'react-router';
import './MainMenu.css';

class MainMenu extends React.Component {
	render() {
		return (
			<div id="MainMenu">
				<div className="wrapper--fluid">
					<ul className="clearfix">
						<li>
							<IndexLink to="/" activeClassName="active">
								Weather stations
							</IndexLink>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainMenu;
