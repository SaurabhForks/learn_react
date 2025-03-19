import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSilce";
const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export default store;
