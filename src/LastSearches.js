const LastSearches = ({lastSearches, onLastSearch}) => (
  <>
    {lastSearches.map((seasrchTerm, index) => (
      <button
        key={seasrchTerm + index}
        type='button'
        className='button button_last-searched'
        onClick={() => onLastSearch(seasrchTerm)}>
        {seasrchTerm}
      </button>
    ))}
  </>
);

export default LastSearches;
