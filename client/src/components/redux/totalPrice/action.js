import { INCREMENT_PRICE, DECREMENT_PRICE } from "./actionTypes";

export const incrementTotalPrice = (price, quantity) => ({
  type: INCREMENT_PRICE,
  price: price,
  quantity: quantity
});

export const decrementTotalPrice = (price, counter) => ({
  type: DECREMENT_PRICE,
  price: price,
  quantity: counter
});
