import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import NoContacts from 'components/NoContacts/NoContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contactObj => {
    const { name, number } = contactObj;
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === normalizedName
      )
    )
      return Notify.warning(`${name} is already in contacts.`);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
    Notify.success(`${name} is added to contacts.`);
    return true;
  };

  deleteContact = (id, name) => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({ contacts: updatedContacts });
    Notify.failure(`${name} was removed from contacts.`);
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    const isAnyContacts = Boolean(this.state.contacts.length);

    return (
      <Container>
        <Title mainTitle="Phonebook" />
        <NewContactForm addContact={this.addContact} />
        <Title title="Contacts" />
        <Filter filter={this.state.filter} onFilter={this.onFilter} />

        {isAnyContacts && filteredContacts.length ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <NoContacts
            message={isAnyContacts ? `No contacts found` : `No contacts yet`}
          />
        )}
      </Container>
    );
  }
}

export default App;
