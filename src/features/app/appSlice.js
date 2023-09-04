import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  isLocationModalOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    openMenu(state) {
      state.isMenuOpen = true;
    },
    closeLocationModal(state) {
      state.isLocationModalOpen = false;
    },
    openLocationModal(state) {
      state.isLocationModalOpen = true;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  closeLocationModal,
  openLocationModal,
} = appSlice.actions;

export default appSlice.reducer;
