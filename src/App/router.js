import Login from './../pages/Login';
import SignUp from './../pages/SignUp';
import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';

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
		component: AddProduct,
		path: '/products/create',
	},
};

export default router;
