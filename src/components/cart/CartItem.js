import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'antd';
import formatPrice from 'utils/formatPrice';
import cartActions from 'actions/cart';

import styles from './CartItem.module.css';

function CartItem({ pictureUrl, title, price, quantity, id }) {
  const dispatch = useDispatch();
  const subtotal = useMemo(() => {
    return quantity * price;
  }, [price, quantity]);

  function handleRemove(e) {
    e.preventDefault();

    dispatch(cartActions.remove(id));
  }
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles.description}>
          <img src={pictureUrl} alt={title} />
          <p>{title}</p>
        </div>
        <div className={styles.details}>
          <div>
            <strong>Price:</strong> <span>{formatPrice(price)}</span>
          </div>
          <div>
            <strong>Quantity:</strong> <span>{quantity}</span>
          </div>
          <div>
            <strong>SubTotal:</strong> <span>{formatPrice(subtotal)}</span>
          </div>
        </div>
      </div>
      <button type="button" className={styles.close} onClick={handleRemove}>
        <Icon type="close-circle" />
      </button>
    </div>
  );
}

export default CartItem;
