import PropTypes from 'prop-types';
import { Title } from './SecondaryTitle.styled';

const SecondaryTitle = ({ title }) => <Title>{title}</Title>;

SecondaryTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SecondaryTitle;
