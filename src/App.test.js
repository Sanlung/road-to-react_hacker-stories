import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import App, {storiesReducer} from "./App";
import SearchForm from "./SearchForm";
import InputWithLabel from "./InputWithLabel";
import List from "./List";
import Item from "./Item";
import axios from "axios";

/*
Declare mock test data
*/

jest.mock("axios");

const storyOne = {
  title: "React",
  url: "https://reactjs.org/",
  author: "Jordan Walke",
  num_comments: 3,
  points: 4,
  objectID: 0,
};

const storyTwo = {
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramvo, Andrew Clark",
  num_comments: 2,
  points: 5,
  objectID: 1,
};

const stories = [storyOne, storyTwo];

/*
Test suites
*/

// For storiesReducer in App component
// describe("storiesReducter", () => {
//   test("remove a story from all stories", () => {
//     const action = {type: "REMOVE_STORY", payload: storyOne};
//     const state = {data: stories, isLoading: false, isError: false};
//     const newState = storiesReducer(state, action);
//     const expectedState = {data: [storyTwo], isLoading: false, isError: false};
//     expect(newState).toStrictEqual(expectedState);
//   });

//   test("fetch new stories", () => {
//     const action = {type: "STORIES_FETCH_SUCCESS", payload: stories};
//     const state = {data: [], isLoading: false, isError: false};
//     const newState = storiesReducer(state, action);
//     const expectedState = {
//       data: [storyOne, storyTwo],
//       isLoading: false,
//       isError: false,
//     };
//     expect(newState).toStrictEqual(expectedState);
//   });

//   test("fetch new stories failed", () => {
//     const action = {type: "STORIES_FETCH_FAILURE"};
//     const state = {data: [], isLoading: false, isError: true};
//     const newState = storiesReducer(state, action);
//     const expectedState = {
//       data: [],
//       isLoading: false,
//       isError: true,
//     };
//     expect(newState).toStrictEqual(expectedState);
//   });

//   test("fetch new stories pending", () => {
//     const action = {type: "STORIES_FETCH_INIT"};
//     const state = {data: [], isLoading: true, isError: false};
//     const newState = storiesReducer(state, action);
//     const expectedState = {
//       data: [],
//       isLoading: true,
//       isError: false,
//     };
//     expect(newState).toStrictEqual(expectedState);
//   });
// });

// // For Item component
// describe("Item", () => {
//   test("renders all properties", () => {
//     render(<Item item={storyOne} />);
//     // screen.debug();
//     expect(screen.getByText("Jordan Walke")).toBeInTheDocument();
//     expect(screen.getByText("React")).toHaveAttribute(
//       "href",
//       "https://reactjs.org/"
//     );
//   });

//   test("renders a clickable dismiss button", () => {
//     render(<Item item={storyTwo} />);

//     expect(screen.getByRole("button")).toBeInTheDocument();
//   });

//   test("clicking the dismiss button calls the callback handler", () => {
//     const handleRemoveItem = jest.fn();
//     render(<Item item={storyOne} onRemoveItem={handleRemoveItem} />);
//     fireEvent.click(screen.getByRole("button"));

//     expect(handleRemoveItem).toHaveBeenCalledTimes(1);
//   });
// });

// For SearchForm component
// describe("SearchForm", () => {
//   const searchFormProps = {
//     searchTerm: "React",
//     onSearchInput: jest.fn(),
//     onSearchSubmit: jest.fn(),
//   };
//   test("renders the input field with its value", () => {
//     render(<SearchForm {...searchFormProps} />);
//     screen.getByRole("");
//     expect(screen.getByDisplayValue("React")).toBeInTheDocument();
//   });

//   test("renders the correct label", () => {
//     render(<SearchForm {...searchFormProps} />);

//     expect(screen.getByLabelText(/Search/)).toBeInTheDocument();
//   });

//   test("calls onSearchInput on search field change", () => {
//     render(<SearchForm {...searchFormProps} />);

//     fireEvent.change(screen.getByDisplayValue("React"), {
//       target: {value: "Redux"},
//     });

//     expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
//   });

//   test("calls onSearchSubmit on submit button click", () => {
//     render(<SearchForm {...searchFormProps} />);

//     fireEvent.submit(screen.getByRole("button"));

//     expect(searchFormProps.onSearchSubmit).toHaveBeenCalledTimes(1);
//   });

// For snapshot
// test("renders snapshot", () => {
//   const {container} = render(<SearchForm {...searchFormProps} />);
//   expect(container.firstChild).toMatchSnapshot();
// });
// });

// // For List component
// describe("List", () => {
//   const listProps = {
//     list: stories,
//     onRemoveItem: jest.fn(),
//   };

//   test("contains an array of items", () => {
//     render(<List {...listProps} />);

//     expect(listProps.list).toBeInstanceOf(Array);
//   });

//   test("renders all list items", () => {
//     render(<List {...listProps} />);

//     expect(listProps.list).toContain(storyOne);
//     expect(listProps.list).toContain(storyTwo);
//   });

//   test("calls onRemoveItem on remove button click", () => {
//     render(<List {...listProps} />);

//     fireEvent.click(screen.getAllByRole("button")[0]);
//     fireEvent.click(screen.getAllByRole("button")[1]);

//     expect(listProps.onRemoveItem).toBeCalledTimes(2);
//   });
// });

// // For InputWithLabel component
// describe("InputWithLabel", () => {
//   const inputWithLabelProps = {
//     id: "search",
//     value: "React",
//     isFocused: true,
//     children: "Search:",
//     onInputChange: jest.fn(),
//   };

//   test("renders the input field with its value", () => {
//     render(<InputWithLabel {...inputWithLabelProps} />);

//     expect(screen.getByDisplayValue("React")).toBeInTheDocument();
//   });

//   test("renders the correct label", () => {
//     render(<InputWithLabel {...inputWithLabelProps} />);

//     expect(screen.getByLabelText(/Search/)).toBeInTheDocument();
//   });

//   test("has a focused input field", () => {
//     render(<InputWithLabel {...inputWithLabelProps} />);

//     expect(screen.getByDisplayValue("React").focus).toBeTruthy();
//   });

//   test("calls onInputChange on search field change", () => {
//     render(<InputWithLabel {...inputWithLabelProps} />);

//     fireEvent.change(screen.getByDisplayValue("React"), {
//       target: {value: "Redux"},
//     });

//     expect(inputWithLabelProps.onInputChange).toHaveBeenCalledTimes(1);
//   });
// });

// For App and REST API
describe("App", () => {
  test("succeeds fetching data", async () => {
    const promise = Promise.resolve({
      data: {
        hits: stories,
      },
    });
    axios.get.mockImplementationOnce(() => promise);
    render(<App />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    await act(() => promise);
    expect(screen.queryByText(/Loading/)).toBeNull();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Redux")).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(3);
  });
  test("fails fetching data", async () => {
    const promise = Promise.reject();
    axios.get.mockImplementationOnce(() => promise);
    render(<App />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    try {
      await act(() => promise);
    } catch (error) {
      expect(screen.queryByText(/Loading/)).toBeNull();
      expect(screen.queryByText(/went wrong/)).toBeInTheDocument();
    }
  });
  test("removes a story", async () => {
    const promise = Promise.resolve({
      data: {
        hits: stories,
      },
    });
    axios.get.mockImplementationOnce(() => promise);
    render(<App />);
    await act(() => promise);
    expect(screen.getAllByRole("button").length).toBe(3);
    expect(screen.getByText("Jordan Walke")).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(screen.getAllByRole("button").length).toBe(2);
    expect(screen.queryByText("Jordan Walke")).toBeNull();
  });
  test("searches for specific stories", async () => {
    const reactPromise = Promise.resolve({
      data: {
        hits: stories,
      },
    });
    const anotherStory = {
      title: "JavaScript",
      url: "https://en.wikipedia.org/wiki/JavaScript",
      author: "Brendan Eich",
      num_comments: 15,
      points: 10,
      objectID: 3,
    };
    const javascriptPromise = Promise.resolve({
      data: {
        hits: [anotherStory],
      },
    });
    axios.get.mockImplementation((url) => {
      if (url.includes("React")) {
        return reactPromise;
      }
      if (url.includes("JavaScript")) {
        return javascriptPromise;
      }
      throw Error();
    });
    // Initial render
    render(<App />);
    // First data fetching
    await act(() => reactPromise);
    expect(screen.getByDisplayValue("React")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("JavaScript")).toBeNull();
    expect(screen.getByText("Jordan Walke")).toBeInTheDocument();
    expect(screen.getByText("Dan Abramvo, Andrew Clark")).toBeInTheDocument();
    expect(screen.queryByText("Brendan Eich")).toBeNull();
    // User interaction -> search
    fireEvent.change(screen.getByDisplayValue("React"), {
      target: {
        value: "JavaScript",
      },
    });
    expect(screen.queryByDisplayValue("React")).toBeNull();
    expect(screen.getByDisplayValue("JavaScript")).toBeInTheDocument();
    fireEvent.submit(screen.getAllByRole("button")[0]);
    // Second data fetching
    await act(() => javascriptPromise);
    expect(screen.queryByText("Jordan Walke")).toBeNull();
    expect(screen.queryByText("Dan Abramvo, Andrew Clark")).toBeNull();
    expect(screen.getByText("Brendan Eich")).toBeInTheDocument();
  });
});
