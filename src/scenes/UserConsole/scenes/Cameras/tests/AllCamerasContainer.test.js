import React from 'react';
import ReactDOM from 'react-dom';
import {AllCamerasContainer} from '../AllCamerasContainer';
import {ApplicationContext} from 'services/TestUtils';

let dispatchMock = () => {};

it('renders without crashing during loading', () => {
	ReactDOM.render(
		<ApplicationContext>
			<AllCamerasContainer dispatch={dispatchMock} loading={true}/>
		</ApplicationContext>,
		document.createElement('div')
	);
});

// FIXME: it needs Redux Store for nested components (how to?
// it('renders without crashing', () => {
// 	ReactDOM.render(
// 		<ApplicationContext>
// 			<AllCamerasContainer dispatch={dispatchMock} store={{}} loading={false} cameras={[]}/>
// 		</ApplicationContext>,
// 		document.createElement('div')
// 	);
// });
