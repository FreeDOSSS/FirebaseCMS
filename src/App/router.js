import Login from './../pages/Login';
import SignUp from './../pages/SignUp';
import Products from '../pages/Products';

const router = {
	login: {
		component: Login,
		path: '/login',
	},
	signup: {
		component: SignUp,
		path: '/sign-up',
	},
	products: {
		component: Products,
		path: '/products',
	},
	productsEdit: {
		component: '',
		path: '',
	},
	productsCreate: {
		component: '',
		path: '',
	},
};

export default router;
