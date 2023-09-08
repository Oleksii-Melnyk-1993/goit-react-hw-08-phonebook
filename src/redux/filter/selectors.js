import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter.filter;

export const collectActuallContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
