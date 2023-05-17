import styled from '@emotion/styled';

export const SearchbarContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #344e41;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  padding: 0;
  background-color: #3a5a40;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 48px;
  border: 1px solid #517852;
  border-radius: 5px;
  background-color: #588157;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-size: 16px;
  scale: 1;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  &:hover {
    background-color: #7e9971;
    scale: 0.98;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: none;
  background-color: #3a5a40;
  padding: 0 10px;
  color: #fff;
  border-radius: 5px;

  &:focus,
  &:hover {
    outline: 1px solid #496e4c;
  }

  &::placeholder {
    color: #fff;
    font: inherit;
    font-size: 18px;
  }
`;
