import React, { useEffect } from 'react';
import withAuth from '../../util/HOC';
import { useDispatch } from 'react-redux';
import { ProductsActions } from './../../redux/actions';

function Products() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ProductsActions.productsRequest());
	}, []);
	return <>Products</>;
}

export default withAuth(Products);
