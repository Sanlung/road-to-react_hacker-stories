import * as React from "react";
import styled from "styled-components";
import InputWithLabel from "./InputWithLabel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const StyledButtonLarge = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

const StyledSearchForm = styled.form`
  padding: 10px 0 20px 0;
  display: flex;
  align-items: baseline;
`;

const SearchForm = ({searchTerm, onSearchInput, onSearchSubmit, children}) => (
  <StyledSearchForm onSubmit={onSearchSubmit}>
    <InputWithLabel
      id='search'
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}>
      <strong>Search:</strong>
    </InputWithLabel>
    <StyledButtonLarge type='submit' disabled={!searchTerm}>
      <FontAwesomeIcon icon={faPaperPlane} />
    </StyledButtonLarge>
  </StyledSearchForm>
);

export default SearchForm;
