import { all } from 'redux-saga/effects';
import rootAuth from './Auth.saga';
import rootProducts from './Products.saga';

export default function* rootSaga() {
	yield all([rootAuth(), rootProducts()]);
	// code after all-effect
}
