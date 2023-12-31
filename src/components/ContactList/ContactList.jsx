import { ContactListItem } from './ContactItemList/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { collectActuallContacts } from 'redux/filter/selectors';

export const ContactList = () => {
  // const filter = useSelector(getFilter);
  const isLoading = useSelector(selectIsLoading);
  const count = useSelector(selectContactsCount);
  const error = useSelector(selectError);
  const filteredContactList = useSelector(collectActuallContacts);

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContactList = getFilteredContacts();

  return (
    <ul className={css.list}>
      {!count && !isLoading && !error ? (
        <p className={css.empty_phonebook}>
          Phonebook empty 🙄 Add first contact to list
        </p>
      ) : (
        filteredContactList.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};
