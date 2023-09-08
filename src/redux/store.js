import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/filterContacts';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
