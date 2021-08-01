import { all, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './../types';
import { FireAuth } from '../../services/firebase';
import { notification } from 'antd';
import { LOGOUT_FAILURE, LOGOUT_SUCCESS } from '../types/Auth.types';

function* signUp() {
	yield takeLatest(
		AuthTypes.SIGN_UP_REQUEST,
		function* ({ payload, callback }) {
			try {
				const user = yield call(
					FireAuth.signUp,
					payload.email,
					payload.password
				);
				if (callback) {
					callback(user);
				}
				yield put({ type: AuthTypes.SIGN_UP_SUCCESS, payload: user });
			} catch (err) {
				notification.error({
					message: err.message,
				});
				yield put({ type: AuthTypes.SIGN_UP_FAILURE });
			}
		}
	);
}

function* signIn() {
	yield takeLatest(
		AuthTypes.SIGN_IN_REQUEST,
		function* ({ payload, callback }) {
			try {
				const user = yield call(
					FireAuth.signIn,
					payload.email,
					payload.password
				);
				if (callback) {
					callback(user);
				}
				yield put({ type: AuthTypes.SIGN_IN_SUCCESS, payload: user });
			} catch (err) {
				notification.error({
					message: err.message,
				});
				yield put({ type: AuthTypes.SIGN_IN_FAILURE });
			}
		}
	);
}

function* logOut() {
	yield takeLatest(AuthTypes.LOGOUT_REQUEST, function* () {
		try {
			yield call(FireAuth.logout);
			yield put({ type: LOGOUT_SUCCESS });
		} catch (err) {
			yield put({ type: LOGOUT_FAILURE });
		}
	});
}

export default function* rootAuth() {
	yield all([signUp(), signIn(), logOut()]);
}
