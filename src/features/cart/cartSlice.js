import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const itemExists = state.items.find(({ item }) => {
        console.log('checking item:', item);
        return item?.card?.info?.id === action.payload.card.info.id;
      });

      console.log('exists:', itemExists);

      if (itemExists) {
        state.items = state.items.map(({ item, quantity }) => {
          console.log('item: ', item);
          console.log('payload: ', action.payload);
          if (item?.card?.info?.id === action.payload.card.info.id) {
            return {
              ...item,
              quantity: quantity + 1,
            };
          } else {
            return { item, quantity };
          }
        });
      } else {
        state.items.push({
          item: action.payload,
          quantity: 1,
        });
      }

      // console.log('state: ', state);

      // state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const selectItemsInCart = ({ cart }) => cart?.items;

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
