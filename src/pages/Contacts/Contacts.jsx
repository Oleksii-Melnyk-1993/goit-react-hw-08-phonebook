import { ContactForm } from 'components/ContactForm/ContactForm';
import css from './Contacts.module.css';
import { Filter } from 'components/Filter/Filter';
import { Audio } from 'react-loader-spinner';
import { ContactList } from 'components/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function App() {
  // const dispatch = useDispatch();
  const totalCount = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    fetchContacts();
  });

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
}
