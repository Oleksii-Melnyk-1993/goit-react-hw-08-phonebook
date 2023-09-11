import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  selectContactsCount,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Audio } from 'react-loader-spinner';
import { useAuthentication } from 'hooks';
import { refreshPage } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresh } = useAuthentication();

  useEffect(() => {
    dispatch(refreshPage());
  }, [dispatch]);

  return (
    <div
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts: <span className={css.total_count}>{totalCount}</span>
      </p>
      <Filter />
      {isLoading && !error && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && <p> An {error} has occured😥, try again later </p>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};
