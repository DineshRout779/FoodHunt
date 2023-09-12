import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import appReducer from '../features/app/appSlice';
import addressReducer from '../features/address/addressSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    address: addressReducer,
  },
});

export default store;
