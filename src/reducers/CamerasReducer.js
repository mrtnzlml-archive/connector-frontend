import {
	ALL_CAMERAS_LOADING,
	ALL_CAMERAS_LOAD_SUCCESS,
} from 'actions/Camera';

const initialState = {
	loading: false,
	entities: {}, // [camera ID => camera]
};

export default (state = initialState, action) => {
	switch (action.type) {

		case ALL_CAMERAS_LOADING:
			return {
				...state,
				loading: Object.keys(state.entities).length === 0, // only if there is not a single entity
			};

		case ALL_CAMERAS_LOAD_SUCCESS:
			let entities = {};
			for (let camera of action.cameras) {
				entities[camera.id] = camera;
			}
			return {
				...state,
				loading: false,
				entities: entities,
			};

		default:
			return state
	}
}
