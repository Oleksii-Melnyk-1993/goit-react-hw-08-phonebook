import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/filterContacts';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authenticationReducer } from './auth/authenticationSlice';

const authenticatePersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(
  authenticatePersistConfig,
  authenticationReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
