import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import authReducer from "./auth-slice";
import orderReducer from "./order-slice";
import uiReducer from "./ui-slice";
import produkReducer from "./produk-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    ui: uiReducer,
    produk: produkReducer,
  },
});

// store.subscribe(() => {
//   const currentState = store.getState();
//   // updateSession(currentState);
// });

export default store;
