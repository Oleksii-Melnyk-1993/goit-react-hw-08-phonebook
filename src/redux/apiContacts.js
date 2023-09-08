import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64f310e7edfa0459f6c64161.mockapi.io';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async function (contact, { rejectWithValue }) {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async function (contactId, { rejectWithValue }) {
    try {
      const { data } = await axios.get(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
