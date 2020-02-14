import { ADD_WISHLIST } from "./actionTypes";

export const addWishList = wishID => ({
  type: ADD_WISHLIST,
  wishID: wishID
});
