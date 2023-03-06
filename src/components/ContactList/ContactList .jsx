import { List, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const regExp = new RegExp(filter, 'gi');
    return contacts.filter(({ name }) => name.match(regExp));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </List>
  );
};
