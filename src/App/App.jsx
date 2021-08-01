import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.module.scss';
import store from '../redux';
import router from './router';
import './../style/theme.scss';
import Products from '../pages/Products';
import { Layout } from 'antd';
import { PageHeader } from '../components';

const { Content } = Layout;

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path={router.login.path} component={router.login.component} />
					<Route
						path={router.signup.path}
						component={router.signup.component}
					/>
					<Route
						path="/products"
						render={() => (
							<Layout style={{ background: 'none' }}>
								<PageHeader />
								<Content style={{ padding: '15px' }}>
									<Switch>
										<Route path="/products" component={Products} exact />
									</Switch>
								</Content>
							</Layout>
						)}
					/>

					<Redirect to={'/products'} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
