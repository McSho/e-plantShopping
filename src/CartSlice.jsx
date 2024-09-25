import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If the item exists, we could increase its quantity (this logic can vary)
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a default quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Logic to remove the item from the cart
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Logic to update the quantity of a specific item in the cart
      const itemToUpdate = state.items.find(item => item.name === action.payload.name);
      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;