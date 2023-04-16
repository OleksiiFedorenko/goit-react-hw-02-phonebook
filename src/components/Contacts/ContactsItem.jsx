const ContactsItem = ({ id, name, number, toDelete }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => toDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
