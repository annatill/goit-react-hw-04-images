import propTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onClick }) => (
  <ButtonLoadMore type="button" onClick={onClick}>
    Load more
  </ButtonLoadMore>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
