import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      language: 'all',
      level: 'all',
      price: 'all',
    },
  },
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
