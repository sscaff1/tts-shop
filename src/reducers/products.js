import productActions from 'actions/products';

function productReducer(state = [], action) {
  switch (action.type) {
    case productActions.END_GET:
      return action.products;
    default:
      return state;
  }
}

export default productReducer;
