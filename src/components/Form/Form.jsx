import { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledButton } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const newName = name;

    const isInContacts = contacts.find(({ name }) => name === newName);

    if (isInContacts) {
      alert(`${name} is aready in contacts.`);
      return;
    }

    dispatch(addContacts(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <input
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
