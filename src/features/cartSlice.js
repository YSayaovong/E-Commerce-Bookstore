import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      state.count = state.items.reduce((a, b) => a + b.qty, 0);
      state.subtotal = state.items.reduce((a, b) => a + b.price * b.qty, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.count = state.items.reduce((a, b) => a + b.qty, 0);
      state.subtotal = state.items.reduce((a, b) => a + b.price * b.qty, 0);
    },
    clearCart(state) {
      state.items = [];
      state.subtotal = 0;
      state.count = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
