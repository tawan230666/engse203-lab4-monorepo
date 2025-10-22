import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload; // { id, name }
      const existing = state.items.find((i) => i.id === newItem.id);
      state.totalQuantity += 1;
      if (!existing) {
        state.items.push({ ...newItem, quantity: 1, price: 1500 });
      } else {
        existing.quantity += 1;
      }
    },
    removeItem(state, action) {
      const { id } = action.payload;
      const idx = state.items.findIndex((i) => i.id === id);
      if (idx !== -1) {
        const item = state.items[idx];
        state.totalQuantity = Math.max(0, state.totalQuantity - 1);
        if (item.quantity > 1) item.quantity -= 1;
        else state.items.splice(idx, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
