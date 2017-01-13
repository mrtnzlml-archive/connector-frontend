import React from 'react';
import ReactDOM from 'react-dom';
import PaperToast from './PaperToast';

it('renders without crashing', () => {
	ReactDOM.render(
		<PaperToast/>,
		document.createElement('div')
	);
});

it('renders message without crashing', () => {
	ReactDOM.render(
		<PaperToast message="test"/>, //TODO: test render result and opacity
		document.createElement('div')
	);
});
