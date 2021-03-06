import React, { useEffect } from 'react';
import withAuth from '../../util/HOC';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsActions } from './../../redux/actions';
import { ProductsSelector } from '../../redux/selectors';
import { ProductCard } from '../../components';
import { Col, Empty, Row, Spin } from 'antd';

function Products() {
	const dispatch = useDispatch();

	const products = useSelector(ProductsSelector.getProducts);
	const loading = useSelector(ProductsSelector.isLoading);

	useEffect(() => {
		dispatch(ProductsActions.productsRequest());
	}, []);
	return (
		<Spin spinning={loading}>
			<Row gutter={16}>
				{products.length ? (
					products.map((product) => (
						<Col key={product.id} span={4}>
							<ProductCard product={product} />
						</Col>
					))
				) : (
					<Empty />
				)}
			</Row>
		</Spin>
	);
}

export default withAuth(Products);
