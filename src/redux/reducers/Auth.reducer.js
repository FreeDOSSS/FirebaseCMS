import { AuthTypes } from './../types';

const initialState = {
	user: null,
	isLogin: false,
	loading: false,
};

function authReducer(state = initialState, { type, payload }) {
	switch (type) {
		case AuthTypes.SIGN_UP_REQUEST:
		case AuthTypes.SIGN_IN_REQUEST:
			return { ...state, loading: true };
		case AuthTypes.SIGN_UP_SUCCESS:
		case AuthTypes.SIGN_IN_SUCCESS:
			return { isLogin: true, user: payload.user, loading: false };
		case AuthTypes.SIGN_UP_FAILURE:
		case AuthTypes.SIGN_IN_FAILURE:
			return { isLogin: false, user: null, loading: false };
		case AuthTypes.LOGOUT_SUCCESS:
			return initialState;
		default:
			return state;
	}
}

export default authReducer;
