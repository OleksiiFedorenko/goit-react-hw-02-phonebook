import PropTypes from 'prop-types';
import { Title } from './MainTitle.styled';

const MainTitle = ({ title }) => <Title>{title}</Title>;

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
