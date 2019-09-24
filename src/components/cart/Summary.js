import React from 'react';
// adding another comment
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import formatPrice from 'utils/formatPrice';

import styles from './Summary.module.css';

function Summary() {
  const subtotal = useSelector(state => {
    return Object.keys(state.cart).reduce((total, key) => {
      const product = state.products.find(p => p.id === key);
      return total + state.cart[key] * product.price;
    }, 0);
  });
  return (
    <div className={styles.root}>
      <div>
        <strong>Sub-Total:</strong> <span>{formatPrice(subtotal)}</span>
      </div>
      <Button disabled={subtotal === 0}>Buy Now</Button>
    </div>
  );
}

export default Summary;
