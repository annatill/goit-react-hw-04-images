import { Component } from 'react';
import propTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
    // isButtonDisabled: true,
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      query: value.toLowerCase(),
      // isButtonDisabled: value.length === 0,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return this.props.handleErrorMessage('Please fill in all fields');
    }
    this.props.onSubmit(this.state.query);
    // this.setState({ page: 1, isButtonDisabled: true });
  };

  render() {
    const { query } = this.state;
    // const { query, isButtonDisabled } = this.state;
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />

          {/* <button type="submit" disabled={isButtonDisabled}> */}
          <SearchFormButton type="submit">Search</SearchFormButton>
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleErrorMessage: propTypes.func.isRequired,
};
