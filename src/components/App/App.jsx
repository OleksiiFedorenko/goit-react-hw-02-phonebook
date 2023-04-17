import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import SecondaryTitle from 'components/SecondaryTitle/SecondaryTitle';
import NewContact from 'components/NewContact/NewContact';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (contactObj, resetForm) => {
    const { name, number } = contactObj;

    if (this.state.contacts.some(contact => contact.name === name)) {
      return Notify.warning(`${name} is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
    Notify.success(`${name} is added to contacts.`);
    resetForm();
  };

  deleteContact = name => {
    const indexToDelete = this.state.contacts.findIndex(
      contact => contact.name === name
    );

    if (indexToDelete < 0) return;
    const updatedContacts = this.state.contacts.splice(indexToDelete, 1);
    this.setState(updatedContacts);
    Notify.failure(`${name} was removed from contacts.`);
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <Container>
        <MainTitle title="Phonebook" />
        <NewContact addContact={this.addContact} />
        <SecondaryTitle title="Contacts" />
        <Filter filter={this.state.filter} onFilter={this.onFilter} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          onFilter={this.onFilter}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
