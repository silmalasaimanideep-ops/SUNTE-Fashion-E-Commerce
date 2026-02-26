import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart"))?.items || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const { id, selectedSize } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // ✅ FIXED remove
    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;

      state.items = state.items.filter(
        (item) =>
          item.id !== id ||
          item.selectedSize !== selectedSize
      );
    },

    clearCart: (state) => {
      state.items = [];
    },

    increaseQuantity: (state, action) => {
      const { id, selectedSize } = action.payload;

      const item = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const { id, selectedSize } = action.payload;

      const item = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;