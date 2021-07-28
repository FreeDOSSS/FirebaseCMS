import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.module.scss';
import store from '../redux';
import router from './router';

const routerMap = Object.values(router);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					{routerMap.map((route, i) => (
						<Route
							path={route.path}
							component={route.component}
							exact
							key={`route-path-${i}`}
						/>
					))}
					<Route />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
