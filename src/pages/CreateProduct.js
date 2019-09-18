import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Input, InputNumber, Upload, Button, Icon, notification } from 'antd';
import productActions from 'actions/products';
import { storage } from 'utils/firebase';
import uuid from 'uuid/v1';
import styles from './CreateProduct.module.css';

const CreateProduct = ({ navigate }) => {
  const dispatch = useDispatch();
  const uniqueFileId = useMemo(() => uuid(), []);
  const [loading, setLoading] = useState(false);
  const initialFormState = {
    title: '',
    description: '',
    price: 0,
    file: null,
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (key, newValue) => {
    setFormData({
      ...formData,
      [key]: newValue,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    dispatch(
      productActions.createProduct(
        formData.title,
        formData.description,
        formData.price,
        formData.file
      )
    ).then(() => {
      setFormData(initialFormState);
      setLoading(false);
      notification.open({
        message: 'Product was created successfully!!',
      });
      navigate('/');
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <legend>Create Product</legend>
      <Input
        placeholder="Title"
        className={styles.input}
        value={formData.title}
        onChange={e => {
          handleChange('title', e.target.value);
        }}
      />
      <Input.TextArea
        placeholder="Description"
        className={styles.input}
        value={formData.description}
        onChange={e => {
          handleChange('description', e.target.value);
        }}
      />
      <InputNumber
        className={styles.input}
        placeholder="Price"
        formatter={value => `$ ${value}`}
        min={0}
        precision={2}
        onChange={newValue => {
          handleChange('price', newValue);
        }}
        value={formData.price}
      />
      <Upload
        className={styles.input}
        listType="picture"
        customRequest={event => {
          const child = storage.child(`${uniqueFileId}.jpeg`);
          child
            .put(event.file)
            .then(snapshot => {
              return snapshot.ref.getDownloadURL();
            })
            .then(url => {
              handleChange('file', url);
              event.onSuccess();
            });
        }}
        onPreview={() => {
          window.open(formData.file, '_blank');
        }}
      >
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      <div className={styles.buttonWrap}>
        <Button type="primary" onClick={onSubmit} loading={loading}>
          Create Product
        </Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};

CreateProduct.propTypes = {
  navigate: PropTypes.func,
};

CreateProduct.defaultProps = {
  navigate: () => {},
};

export default CreateProduct;
