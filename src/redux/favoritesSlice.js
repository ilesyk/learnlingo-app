import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = slice.actions;
export const favoritesReducer = slice.reducer;
