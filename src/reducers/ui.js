import productActions from 'actions/products';

function uiReducer(state = {}, action) {
  switch (action.type) {
    case productActions.START_GET:
      return {
        ...state,
        loading: true,
      };
    case productActions.END_GET:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default uiReducer;
