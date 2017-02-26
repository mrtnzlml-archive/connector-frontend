import React from 'react';
import {Link, IndexLink} from 'react-router';
import styles from './MainMenu.css';

class MainMenu extends React.Component {
	render() {
		return (
			<div className={styles.mainMenu}>
				<div className="wrapper--fluid">
					<ul className="clearfix">
						<li>
							<IndexLink to="/" activeClassName={styles.active}>
								Weather stations
							</IndexLink>
						</li>
						<li>
							<Link to="/cameras" activeClassName={styles.active}>
								Cameras
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default MainMenu;
