import { all, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { ProductTypes } from './../types';
import { FireStore } from '../../services/firebase';

function* getProducts() {
	yield takeLatest(ProductTypes.PRODUCTS_REQUEST, function* () {
		try {
			const products = yield call(FireStore.getProducts);
			yield put({ type: ProductTypes.PRODUCTS_SUCCESS, payload: { products } });
		} catch (err) {
			yield put({ type: ProductTypes.PRODUCTS_FAILURE });
		}
	});
}

export default function* rootProducts() {
	yield all([getProducts()]);
}
