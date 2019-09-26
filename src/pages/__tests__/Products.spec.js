import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Products from '../Products';
import createStore from '../../store';

jest.mock('utils/firebase');

describe('Products Page', () => {
  afterEach(cleanup);
  const setup = () => {
    return (
      <Provider store={createStore()}>
        <Products />
      </Provider>
    );
  };

  it('should start with loading screen', async () => {
    const { container } = render(setup());
    const spinner = container.querySelector('.spin');

    expect(spinner).toBeTruthy();
  });

  it('should render', async () => {
    const { container } = render(setup());

    await waitForElementToBeRemoved(() => container.querySelector('.spin'));

    expect(container).toMatchSnapshot();
  });
});
