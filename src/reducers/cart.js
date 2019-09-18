import cartActions from 'actions/cart';

function cartReducer(state = {}, action) {
  switch (action.type) {
    case cartActions.ADD:
      if (state[action.id]) {
        return {
          ...state,
          [action.id]: state[action.id] + 1,
        };
      }
      return {
        ...state,
        [action.id]: 1,
      };
    case cartActions.SUBTRACT:
      if (state[action.id]) {
        if (state[action.id] === 1) {
          return Object.keys(state).reduce((newState, currentKey) => {
            if (currentKey === action.id) {
              return newState;
            }
            return {
              ...newState,
              [currentKey]: state[currentKey],
            };
          }, {});
        }
        return {
          ...state,
          [action.id]: state[action.id] - 1,
        };
      }
      console.error('ugh this shouldnt happen');
      return state;
    default:
      return state;
  }
}

export default cartReducer;
