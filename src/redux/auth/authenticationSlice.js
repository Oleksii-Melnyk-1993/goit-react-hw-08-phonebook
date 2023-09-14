import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshPage, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,
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
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    },
    [logOut.fulfilled](state) {
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
