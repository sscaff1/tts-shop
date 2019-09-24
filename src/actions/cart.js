const cartActions = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  REMOVE: 'REMOVE',
  // another comment
  add: id => {
    return {
      type: cartActions.ADD,
      id,
    };
  },

  subtract: id => {
    return {
      type: cartActions.SUBTRACT,
      id,
    };
  },

  remove: id => {
    return {
      type: cartActions.REMOVE,
      id,
    };
  },
};

export default cartActions;
