import { combineReducers } from "redux";
import cartReducer from "components/redux/cart/reducer";
import totalPriceReducer from "components/redux/totalPrice/reducer";
import wishListReducer from "components/redux/wishlist/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  totalPrice: totalPriceReducer,
  wishList: wishListReducer
});

export default rootReducer;
