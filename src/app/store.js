import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import userReducer from "../features/user/userSlice";
import filterReducer from "../features/filter/filterSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: userReducer,
    filters:filterReducer,
  },
  
});
store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart)
  );

  localStorage.setItem(
    "wishlist",
    JSON.stringify(store.getState().wishlist)
  );
});