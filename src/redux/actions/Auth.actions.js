import { AuthTypes } from './../types';

/**
 * signUpRequest action
 * @param email {string}
 * @param password {string}
 * @param callback {function | null}
 * @returns {{payload: {password, email}, callback: null, type: string}}
 */
export const signUpRequest = (email, password, callback = null) => ({
	type: AuthTypes.SIGN_UP_REQUEST,
	payload: {
		email,
		password,
	},
	callback,
});

/**
 * signInRequest action
 * @param email {string}
 * @param password {string}
 * @param callback {function | null}
 * @returns {{payload: {password, email}, callback: null, type: string}}
 */
export const signInRequest = (email, password, callback = null) => ({
	type: AuthTypes.SIGN_IN_REQUEST,
	payload: {
		email,
		password,
	},
	callback,
});

/**
 * logOutRequest action
 * @returns {{type: string}}
 */
export const logOutRequest = () => ({
	type: AuthTypes.LOGOUT_REQUEST,
});
