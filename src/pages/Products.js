import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Product from 'components/products/Product';
import productActions from 'actions/products';

import styles from './Products.module.css';

function Products() {
  const dispatch = useDispatch();
  const { products, ui } = useSelector(state => state);

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);
  if (ui.loading) {
    return (
      <div className={styles.spin}>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          pictureUrl={product.pictureUrl}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
