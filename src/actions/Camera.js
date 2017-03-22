import fetch from 'services/Fetcher';
import {showMessage} from 'actions/Message';
import allCamerasQuery from 'graphql/query/allCameras.graphql';
import createCameraMutation from 'graphql/mutation/createCamera.graphql';
import removeCameraMutation from 'graphql/mutation/removeCamera.graphql';

export const ALL_CAMERAS_LOADING = 'ALL_CAMERAS_LOADING';
export const ALL_CAMERAS_LOAD_SUCCESS = 'ALL_CAMERAS_LOAD_SUCCESS';
export const ALL_CAMERAS_LOAD_FAILURE = 'ALL_CAMERAS_LOAD_FAILURE'; // TODO

const loadingAllCameras = () => {
	return {
		type: ALL_CAMERAS_LOADING,
	}
};

// relies on Redux Thunk middleware
export const loadAllCameras = () => {
	return dispatch => {
		dispatch(loadingAllCameras());
		fetch(allCamerasQuery).then(({data}) => {
			dispatch({
				type: ALL_CAMERAS_LOAD_SUCCESS,
				cameras: data.allCameras,
			});
		});
	}
};

// relies on Redux Thunk middleware
export const createCamera = (variables) => {
	return dispatch => {
		fetch(createCameraMutation, variables).then(({data}) => {
			dispatch(showMessage('New camera has been created. Streaming will start in one moment.'));
			dispatch(loadAllCameras()); // refetch
		});
	}
};

export const removeCamera = (variables) => {
	return dispatch => {
		fetch(removeCameraMutation, variables).then(({data}) => {
			dispatch(loadAllCameras()); // refetch
		});
	}
};
