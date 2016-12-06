import React from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import './AuthorizedBase.css';

export default class extends React.Component {
	render() {
		return (
			<div id="App">
				<div id="sidebar">
					<LeftMenu/>
				</div>
				<div id="body">

					{this.props.children}

				</div>
			</div>
		);
	}
}
