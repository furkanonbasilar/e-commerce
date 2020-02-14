import { ADD_PRODUCT, DECREASE_PRODUCT, DELETE_PRODUCT } from "./actionTypes";

const initialState = {
  productIDs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        productIDs: state.productIDs.concat(action.payload)
      };
    }
    case DECREASE_PRODUCT: {
      const indexFound = state.productIDs.findIndex(x => x === action.id);
      return {
        productIDs: [
          ...state.productIDs.slice(0, indexFound),
          ...state.productIDs.slice(indexFound + 1)
        ]
      };
    }
    case DELETE_PRODUCT: {
      const indexFound = state.productIDs.findIndex(x => x === action.id);
      return {
        ...state,
        productIDs: [
          ...state.productIDs.slice(0, indexFound),
          ...state.productIDs.slice(indexFound + action.quantity)
        ]
      };
    }
    default:
      return state;
  }
};
