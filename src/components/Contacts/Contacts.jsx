const Contacts = ({ contacts, filter, onFilter }) => {
  const normalizedFilter = filter.toLowerCase();

  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onFilter} />
      </label>
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
          )
          .map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
      </ul>
    </>
  );
};

// function filterByName(contact) {
//   return contact.name.toLowerCase().includes(normalizedFilter);
// }

export default Contacts;
