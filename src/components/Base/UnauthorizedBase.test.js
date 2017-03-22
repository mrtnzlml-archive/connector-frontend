import React from 'react';
import ReactDOM from 'react-dom';
import UnauthorizedBase from './UnauthorizedBase';
import {ApplicationContext} from 'services/TestUtils';

test.skip();

// FIXME: it needs Redux Store for nested components (how to?
// it('renders without crashing', () => {
// 	ReactDOM.render(
// 		<ApplicationContext>
// 			<UnauthorizedBase/>
// 		</ApplicationContext>,
// 		document.createElement('div')
// 	);
// });
