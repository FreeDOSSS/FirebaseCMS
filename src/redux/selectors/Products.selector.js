import { createSelector } from 'reselect';

const products = (state) => state.products;

export const getProducts = createSelector(
	products,
	(auth) => auth.products || []
);
export const isLoading = createSelector(products, (auth) => auth.loading);
