import { useSelector } from 'react-redux';
import React from 'react';
import { isLoggingUser } from '../../redux/selectors/Auth.selector';
import { Redirect } from 'react-router-dom';
import router from '../../App/router';

const withAuth =
	(Component, isReverted = false) =>
	(...props) => {
		const isLogin = useSelector(isLoggingUser);
		const showComponent = [
			<Component {...props} />,
			<Redirect to={isReverted ? router.products.path : router.login.path} />,
		];
		if (isReverted) {
			showComponent.reverse();
		}

		return isLogin ? showComponent[0] : showComponent[1];
	};

export default withAuth;
