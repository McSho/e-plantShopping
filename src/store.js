
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Ensure the path to CartSlice is correct

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,  // Associate the cart reducer with the 'cart' key in the state
    },
});

export default store;
