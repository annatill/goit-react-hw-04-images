import { useState } from 'react';
import propTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit, handleErrorMessage }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return handleErrorMessage('Please fill in all fields');
    }
    onSubmit(query);
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleErrorMessage: propTypes.func.isRequired,
};
