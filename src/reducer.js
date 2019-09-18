import { combineReducers } from 'redux';
import products from 'reducers/products';
import ui from 'reducers/ui';
import cart from 'reducers/cart';

export default combineReducers({
  products,
  ui,
  cart,
});
