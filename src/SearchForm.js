import InputWithLabel from "./InputWithLabel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

// const StyledButtonLarge = styled.button`
//   background: transparent;
//   border: 1px solid #171212;
//   padding: 10px;
//   cursor: pointer;
//   transition: all 0.1s ease-in;

//   &:hover {
//     background: #171212;
//     color: #ffffff;
//   }
// `;

// const StyledSearchForm = styled.form`
//   padding: 10px 0 20px 0;
//   display: flex;
//   align-items: baseline;
// `;

const SearchForm = ({searchTerm, onSearchInput, onSearchSubmit}) => (
  <form className='search-form' onSubmit={onSearchSubmit}>
    <InputWithLabel
      id='search'
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}>
      <strong>Search:</strong>
    </InputWithLabel>
    <button
      type='submit'
      disabled={!searchTerm}
      className='button button_large'>
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  </form>
);

export default SearchForm;
