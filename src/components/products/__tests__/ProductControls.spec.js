import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductControls from '../ProductControls';
import store from '../../../store';

describe('Product Controls', () => {
  const setup = () => {
    return (
      <Provider store={store}>
        <ProductControls id="1" />
      </Provider>
    );
  };
  beforeEach(cleanup);

  it('should render', () => {
    const { container } = render(setup());
    expect(container).toMatchSnapshot();
  });

  it('should render a count and two action buttons when initial is pressed', () => {
    const { container } = render(setup());
    const initialButton = container.querySelector('button');

    fireEvent.click(initialButton);

    expect(container).toMatchSnapshot();
  });
});
