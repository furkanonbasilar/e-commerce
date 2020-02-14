import { ADD_WISHLIST } from "./actionTypes";

const initialState = {
  wishIDs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISHLIST: {
      return {
        ...state,
        wishIDs: state.wishIDs.concat(action.wishID)
      };
    }
    default:
      return state;
  }
};
