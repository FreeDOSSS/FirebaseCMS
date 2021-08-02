import React from 'react';
import { Input, Typography } from 'antd';
import { FireBucket, FireStore } from '../../services/firebase';
import router from '../../App/router';
import { ProductForm } from '../../components';

const { Title } = Typography;
function AddProduct({ history }) {
	const uploadFile = (file) => FireBucket.uploadFile(file);

	const onFinish = async (values) => {
		await uploadFile(values.photo[0].originFileObj);

		values.photo = `images/${values.photo[0].name}`;
		let exp_data = values.expire_discount;
		if (exp_data) {
			values.expire_discount = exp_data.toISOString();
		}

		await FireStore.createProduct(values);
		history.push(router.products.path);
	};

	return (
		<div style={{ maxWidth: '500px', margin: 'auto' }}>
			<Title level={2} align={'center'}>
				Create New Product
			</Title>
			<ProductForm onFinish={onFinish} />
		</div>
	);
}

export default AddProduct;
