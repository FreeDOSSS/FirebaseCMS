import { combineReducers } from 'redux';
import products from './Products.reducer';
import auth from './Auth.reducer';

export default combineReducers({ auth, products });
