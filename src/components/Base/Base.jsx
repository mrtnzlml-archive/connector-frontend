import React from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import './Base.css';

class Base extends React.Component {
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

export default Base;
