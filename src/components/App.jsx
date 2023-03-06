import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList ';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </Container>
  );
}
