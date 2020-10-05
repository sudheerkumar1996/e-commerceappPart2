import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem  from '../cart-item/cart-item.components';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector}  from 'reselect';
//import './cart-dropdown.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown.styles';
const CartDropdown = ({cartItems,history,dispatch}) =>(
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
             ) )) : (
                 <EmptyMessageContainer>your cart is empty</EmptyMessageContainer>
             )
            }
            </CartItemsContainer>
        <CartDropdownButton 
            onClick={()=>
            { history.push('/checkout');
            dispatch(toggleCartHidden())}}>
                     GO TO CHECKOUT
            </CartDropdownButton>
            </CartDropdownContainer>
);
// const mapStateToProps = ({cart: { cartItems}}) => ({
//     cartItems
// });
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});
export default withRouter(connect (mapStateToProps)(CartDropdown));

// note:
// dispathc:
// dispatch is a function of the Redux store. You call store.
//  dispatch to dispatch an action. This is the only way to trigger a state change.
//   With React Redux,
//  your components never access the store directly - connect does it for you.

 // withRouter is a higher order component that will pass closest route's match ,
//  current location , and history props to the wrapped component whenever it renders. 
//  simply it connects component to the router. Not all components,
//  especially the shared components, will have the access to such router's props.