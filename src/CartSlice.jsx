import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;

        // Check if the item already exists in the cart
        const existingItem = state.items.find(item => item.name === name);
  
        if (existingItem) {
          // If it exists, increase the quantity
          existingItem.quantity += 1;
        } else {
          // Otherwise, add new item with quantity 1
          state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        // action.payload is the name of the item to remove
        state.items = state.items.filter(item => item.name !== action.payload);
      },
  
      updateQuantity: (state, action) => {
        // action.payload should be an object: { name, quantity }
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
      },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
