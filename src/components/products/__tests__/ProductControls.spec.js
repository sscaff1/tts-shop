import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductControls from '../ProductControls';
import createStore from '../../../store';

describe('Product Controls', () => {
  const setup = () => {
    return (
      <Provider store={createStore()}>
        <ProductControls id="1" />
      </Provider>
    );
  };

  afterEach(cleanup);

  it('should render', () => {
    const { container } = render(setup());
    expect(container).toMatchSnapshot();
  });

  it('should render a count and two action buttons when initial is pressed', () => {
    const { container, getByText } = render(setup());
    const initialButton = container.querySelector('button');

    fireEvent.click(initialButton);

    const increaseButton = getByText('+');
    const decreaseButton = getByText('-');
    const count = container.querySelector('div > span');
    expect(increaseButton).toBeTruthy();
    expect(decreaseButton).toBeTruthy();
    expect(count.innerHTML).toBe('1');
  });

  it('should increase the count when increase is pressed', () => {
    const { container, getByText } = render(setup());
    const initialButton = container.querySelector('button');

    fireEvent.click(initialButton);

    const increaseButton = getByText('+');
    const count = container.querySelector('div > span');
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);
    expect(count.innerHTML).toBe('3');
  });

  it('should decrease the count when the decrease is pressed', () => {
    const { container, getByText } = render(setup());
    const initialButton = container.querySelector('button');

    fireEvent.click(initialButton);

    const increaseButton = getByText('+');
    const decreaseButton = getByText('-');
    const count = container.querySelector('div > span');
    fireEvent.click(increaseButton);
    fireEvent.click(decreaseButton);
    expect(count.innerHTML).toBe('1');
  });

  it('should return back to Add to Cart button', () => {
    const { container, getByText } = render(setup());
    const initialButton = container.querySelector('button');

    fireEvent.click(initialButton);

    const decreaseButton = getByText('-');

    fireEvent.click(decreaseButton);

    const count = container.querySelector('div > span');
    expect(count).toBeFalsy();
  });
});
