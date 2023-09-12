import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshPage, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLogIn: false,
  token: null,
  isRefreshing: false,
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogIn = false;
    },
    [refreshPage.pending](state) {
      state.isRefreshing = true;
    },
    [refreshPage.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogIn = true;
      state.isRefreshing = false;
    },
    [refreshPage.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authenticationReducer = authenticationSlice.reducer;
