import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import appReducer from '../features/app/appSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
  },
});

export default store;
