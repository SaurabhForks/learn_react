import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemTocart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info.id !== action.payload.card?.info?.id,
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemTocart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
