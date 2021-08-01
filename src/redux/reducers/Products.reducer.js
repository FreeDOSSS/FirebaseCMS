import { ProductTypes } from './../types';

const initialState = {
	products: [],
	loading: false,
};

function productReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ProductTypes.PRODUCTS_REQUEST:
			return { ...state, loading: true };
		case ProductTypes.PRODUCTS_SUCCESS:
			return { products: payload.products, loading: false };
		case ProductTypes.PRODUCTS_FAILURE:
			return { ...state, loading: false };
		default:
			return state;
	}
}

export default productReducer;
