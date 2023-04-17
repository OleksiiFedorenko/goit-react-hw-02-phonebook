import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem';
import { ContactList } from './Contacts.styled';

const Contacts = ({ contacts, filter, onDelete }) => {
  const normalizedFilter = filter.toLowerCase();

  function filterByName(contact) {
    return contact.name.toLowerCase().includes(normalizedFilter);
  }

  return (
    <ContactList>
      {contacts.filter(filterByName).map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
