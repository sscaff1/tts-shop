import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import cartActions from 'actions/cart';

function ProductControls({ id }) {
  const quantity = useSelector(state => state.cart[id] || 0);
  const dispatch = useDispatch();
  if (quantity === 0) {
    return (
      <Button onClick={() => dispatch(cartActions.add(id))}>Add to Cart</Button>
    );
  }
  return (
    <div>
      <Button onClick={() => dispatch(cartActions.subtract(id))}>-</Button>
      <span style={{ marginLeft: 5, marginRight: 5 }}>{quantity}</span>
      <Button onClick={() => dispatch(cartActions.add(id))}>+</Button>
    </div>
  );
}

ProductControls.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductControls;
