import { Typography } from 'antd';
import * as style from './Login.module.scss';
import { AuthActions } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import router from '../../App/router';
import React from 'react';
import withAuth from '../../util/HOC';
import { AuthForm } from '../../components';

const { Title } = Typography;

function Login() {
	const onFinish = (values) => {
		dispatch(AuthActions.signInRequest(values.email, values.password));
	};

	const dispatch = useDispatch();

	return (
		<div className={style.wrp}>
			<Title level={2}>
				Sign In or <Link to={router.signup.path}>sign up</Link>
			</Title>
			<AuthForm onFinish={onFinish} />
		</div>
	);
}

export default withAuth(Login, true);
