import React from 'react';
import { Typography } from 'antd';
import * as style from './SignUp.module.scss';
import { useDispatch } from 'react-redux';

import { AuthActions } from './../../redux/actions';
import { Link } from 'react-router-dom';
import router from '../../App/router';
import { AuthForm } from '../../components';

const { Title } = Typography;

function SignUp(props) {
	const onFinish = (values) => {
		dispatch(AuthActions.signUpRequest(values.email, values.password));
	};

	const dispatch = useDispatch();

	return (
		<div className={style.wrp}>
			<Title level={2}>
				Sign Up or <Link to={router.login.path}>sign in</Link>
			</Title>
			<AuthForm onFinish={onFinish} />
		</div>
	);
}

export default SignUp;
