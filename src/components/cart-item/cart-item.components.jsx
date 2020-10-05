import React from 'react';
//import '../cart-item/cart-item.styles.scss';
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
  } from './cart-item.styles';

const CartItem = ({item: {imageUrl,price,name,quantity}}) => (
    <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);
// localStorage.setItem("cart",JSON.stringify("CartItem"));
// const copyCartItem = JSON.parse(localStorage.getItem("cart"));
export default CartItem;
