import React, { useCallback } from 'react';
import { Avatar, Button, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../redux/selectors/Auth.selector';
import * as style from './PageHeader.module.scss';
import { LogoutOutlined } from '@ant-design/icons';
import { logOutRequest } from '../../redux/actions/Auth.actions';

const { Header } = Layout;

export function PageHeader(props) {
	const user = useSelector(getUser);

	const dispatch = useDispatch();

	const onLogout = useCallback(() => dispatch(logOutRequest()), []);

	return (
		<Header className={style.header}>
			<div className={style['user--box']}>
				<Avatar size="default" className={style.user__avatar}>
					{user && user.email && user.email.toUpperCase()[0]}
				</Avatar>
				<p className={style.user__email}>{user && user.email}</p>
			</div>

			<div className={style['auth--box']}>
				<Button
					onClick={onLogout}
					className={style.logout_btn}
					icon={<LogoutOutlined />}
				/>
			</div>
		</Header>
	);
}
