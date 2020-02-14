import { INCREMENT_PRICE } from "./actionTypes";
import { DECREMENT_PRICE } from "./actionTypes";

const initialState = {
  totalPrice: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice + action.price * action.quantity
      };
    case DECREMENT_PRICE:
      return {
        ...state,
        totalPrice: state.totalPrice - action.price * action.quantity
      };
    default:
      return state;
  }
};
