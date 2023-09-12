import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        item: action.payload,
        quantity: 1,
      });

      // console.log('state: ', state);

      // state.items.push(action.payload);

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;

      console.log('Incoming data: ', action.payload);

      const itemToIncrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      console.log('item found increase: ', current(itemToIncrease));

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    decreaseItemQuantity: (state, action) => {
      console.log('Incoming data: ', action.payload);
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem?.item?.card?.info?.id === id
      );

      console.log('item found decrease: ', current(itemToDecrease));

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const selectItemsInCart = ({ cart }) => cart?.items;

export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    return total + cartItem.item.card.info.price * cartItem.quantity;
  }, 0);
};

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
