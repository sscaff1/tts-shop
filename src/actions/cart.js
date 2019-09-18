const cartActions = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',

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
};

export default cartActions;
