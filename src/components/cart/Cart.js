import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import Summary from './Summary';
import styles from './Cart.module.css';

function Cart() {
  const totalItems = useSelector(state => {
    const objectKeys = Object.keys(state.cart);
    return objectKeys.reduce((total, key) => {
      return total + state.cart[key];
    }, 0);
  });
  const cartItems = useSelector(state => {
    return Object.keys(state.cart).map(productKey => {
      const product = state.products.find(p => p.id === productKey);
      return {
        ...product,
        cartQuantity: state.cart[productKey],
      };
    });
  });
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3>My Cart</h3>
        <h3>Total Items: {totalItems}</h3>
      </div>
      <div className={styles.content}>
        {cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            pictureUrl={cartItem.pictureUrl}
            title={cartItem.title}
            id={cartItem.id}
            price={cartItem.price}
            quantity={cartItem.cartQuantity}
          />
        ))}
      </div>
      <Summary />
    </div>
  );
}

export default Cart;
