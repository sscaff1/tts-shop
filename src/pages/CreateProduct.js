import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Input, InputNumber, Upload, Button, Icon } from 'antd';
import productActions from 'actions/products';
import { storage } from 'utils/firebase';
import uuid from 'uuid/v1';
import styles from './CreateProduct.module.css';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const uniqueFileId = useMemo(() => uuid(), []);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    file: null,
  });

  const handleChange = (key, newValue) => {
    setFormData({
      ...formData,
      [key]: newValue,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      productActions.createProduct(
        formData.title,
        formData.description,
        formData.price
      )
    );
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
        // onChange={changeEvent => {
        //   handleChange('file', changeEvent.file);
        // }}
        customRequest={event => {
          const child = storage.child(`${uniqueFileId}.jpeg`);
          child.put(event.file).then(data => {
            console.log(data);
          });
        }}
      >
        <Button>
          <Icon type="upload" /> Click to Upload
        </Button>
      </Upload>
      <div className={styles.buttonWrap}>
        <Button type="primary" onClick={onSubmit}>
          Create Product
        </Button>
        <Button>Cancel</Button>
      </div>
    </form>
  );
};

export default CreateProduct;
