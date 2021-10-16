import { Component } from 'react';
import './App.css';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { ContactListItem } from './components/ContactListItem/ContactListItem';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    let localeContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localeContacts) {
      this.setState({ contacts: localeContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = obj => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  searchDuplicate = value => {
    const names = this.state.contacts.map(contact => contact.name);
    names.includes(value.name)
      ? alert(`${value.name} is already in contacts!!!`)
      : this.addNewContact(value);
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  render() {
    let { addNewContact, searchDuplicate, handleChangeFilter, deleteItem } =
      this;
    let { contacts, filter } = this.state;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          addNewContact={addNewContact}
          searchDuplicate={searchDuplicate}
          contacts={contacts}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
        <ContactList>
          <ContactListItem
            contacts={contacts}
            filter={filter}
            deleteItem={deleteItem}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
