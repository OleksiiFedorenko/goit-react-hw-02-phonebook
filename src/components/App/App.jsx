import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import Section from 'components/Section/Section';
import AddContact from 'components/AddContact/AddContact';
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

  addContact = e => {
    e.preventDefault();
    const { name, number } = e.target;

    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });
    e.target.reset();
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    console.log(this.state.contacts);

    return (
      <Container>
        <MainTitle title="Phonebook" />
        <Section title="Add new">
          <AddContact addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            onFilter={this.onFilter}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
