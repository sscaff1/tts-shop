import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import formatPrice from 'utils/formatPrice';
import ProductControls from './ProductControls';

function Product({ id, title, description, pictureUrl, price }) {
  return (
    <Card
      style={{
        maxWidth: '30%',
        minWidth: '30%',
        flex: 1,
        marginBottom: 15,
        marginRight: 15,
      }}
      hoverable
      cover={<img alt={title} src={pictureUrl} />}
    >
      <Card.Meta title={title} description={description} />
      <h4>{formatPrice(price)}</h4>
      <div>
        <ProductControls id={id} />
      </div>
    </Card>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Product;
