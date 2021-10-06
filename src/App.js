import * as React from "react";
import InputWithLabel from "./InputWithLabel";
import List from "./List";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const getAsyncStories = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve({data: {stories: initialStories}}), 2000)
  );

const [
  removeStory,
  storiesFetchInit,
  storiesFetchSuccess,
  storiesFetchFailure,
] = [
  "REMOVE_STORY",
  "STORIES_FETCH_INIT",
  "STORIES_FETCH_SUCCESS",
  "STORIES_FETCH_FAILURE",
];

const storiesReducer = (state, action) => {
  switch (action.type) {
    case storiesFetchInit:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case storiesFetchSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case storiesFetchFailure:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case removeStory:
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");
  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  React.useEffect(() => {
    dispatchStories({type: storiesFetchInit});
    getAsyncStories()
      .then((result) => {
        dispatchStories({
          type: storiesFetchSuccess,
          payload: result.data.stories,
        });
      })
      .catch(() => dispatchStories({type: storiesFetchFailure}));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: removeStory,
      payload: item,
    });
  };

  const searchedStories = stories.data.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id='search'
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}>
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;
