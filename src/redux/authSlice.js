import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    userEmail: null,
    userName: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
          state.isAuthenticated = true;
          state.userEmail = action.payload.email;
          state.userName = action.payload.displayName;
    },
    clearAuthenticated: state => {
      state.isAuthenticated = false;
      state.userEmail = null;
    },
  },
});

export const { setAuthenticated, clearAuthenticated } = authSlice.actions;
export const authReducer = authSlice.reducer;
