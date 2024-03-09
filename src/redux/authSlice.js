import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userEmail: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload;
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
