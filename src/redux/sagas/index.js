import { all } from 'redux-saga/effects';
import rootAuth from './Auth.saga';

export default function* rootSaga() {
	yield all([rootAuth()]);
	// code after all-effect
}
