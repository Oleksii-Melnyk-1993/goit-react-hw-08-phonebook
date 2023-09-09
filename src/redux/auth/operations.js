import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthenticationHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthenticationHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (references, thunkApi) => {
    try {
      const values = await axios.post('/user/signup', references);
      setAuthenticationHeader(values.data.token);
      return values.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (references, thunkApi) => {
    try {
      const values = await axios.post('/user/login', references);
      setAuthenticationHeader(values.data.token);
      return values.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const values = await axios.post('/user/logout');
    clearAuthenticationHeader();
    return values.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshPage = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkApi.rejectWithValue('Please, login!');
    }
    try {
      setAuthenticationHeader(persistToken);
      const values = await axios.get('/users/current');
      return values.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
