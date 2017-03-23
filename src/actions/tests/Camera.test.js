import * as actions from '../Camera'

describe('actions', () => {

	it('should create an action to inform about loading cameras', () => {
		expect(actions.loadingAllCameras()).toEqual({
			type: actions.ALL_CAMERAS_LOADING,
		});
	});

});
