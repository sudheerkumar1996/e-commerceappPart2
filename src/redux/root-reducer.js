//2
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers ({
    user: userReducer,//goes to the actual reducer we want
    cart: cartReducer
});