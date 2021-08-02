import React, { useEffect, useState } from 'react';
import * as style from './ProductCard.module.scss';
import { Card, Divider, Image } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { FireBucket, FireStore } from '../../services/firebase';
import { Statistic } from 'antd/es';
import moment from 'moment';

const { Meta } = Card;

export function ProductCard({ product }) {
	const [imgSrc, setImgSrc] = useState('');
	useEffect(() => {
		FireBucket.getImageLink(product.photo).then((res) => {
			console.log('res', res);
			setImgSrc(res);
		});
	}, []);
	return (
		<Card
			cover={<Image src={imgSrc} />}
			actions={[
				<EditOutlined />,
				<DeleteOutlined
					onClick={() => {
						FireStore.deleteProduct(product.id);
					}}
				/>,
			]}
		>
			<Meta title={product.title} description={product.description} />
			<Divider />
			<Statistic
				title={'Price'}
				prefix="$"
				value={product.price}
				precision={2}
			/>
			{product.expire_discount &&
				moment(product.expire_discount) > moment() && (
					<Statistic
						title={`Discount ${product.discount}% to ${moment(
							product.expire_discount
						).format('DD.MM.YYYY')}`}
						prefix="$"
						value={product.price - (product.discount / 100) * product.price}
						precision={2}
					/>
				)}
		</Card>
	);
}
