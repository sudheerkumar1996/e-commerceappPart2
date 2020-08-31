import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    
});
//created separate action addItem.
export const addItem= item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});