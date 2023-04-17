import PropTypes from 'prop-types';
import { Button } from './ContactsItem.styled';

const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(name)}>
        Delete
      </Button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;
