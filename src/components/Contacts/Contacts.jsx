import ContactsItem from './ContactsItem';

const Contacts = ({ contacts, filter, onDelete }) => {
  const normalizedFilter = filter.toLowerCase();

  function filterByName(contact) {
    return contact.name.toLowerCase().includes(normalizedFilter);
  }

  return (
    <ul>
      {contacts.filter(filterByName).map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          toDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default Contacts;
