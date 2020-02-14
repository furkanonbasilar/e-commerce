import { ADD_PRODUCT } from "./actionTypes";
import { DELETE_PRODUCT } from "./actionTypes";
import { DECREASE_PRODUCT } from "./actionTypes";

export const addProduct = productID => ({
  type: ADD_PRODUCT,
  payload: productID
});

export const decreaseProduct = productId => ({
  type: DECREASE_PRODUCT,
  id: productId
});

export const deleteProduct = (productQuantity, productId) => ({
  type: DELETE_PRODUCT,
  quantity: productQuantity,
  id: productId
});
