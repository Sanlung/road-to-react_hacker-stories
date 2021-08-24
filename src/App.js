import * as React from "react";

const list = [
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

const App = () => (
	<div>
		<h1>My Hacker Stories</h1>
		<Search />
		<hr />
		<List />
	</div>
);

const List = () => (
	<ul>
		{/* make list items */}
		{list.map((el) => (
			<li key={el.objectID}>
				<span>
					<a href={el.url}>{el.title}</a>
				</span>
				<span>{el.author}</span>
				<span>{el.num_comments}</span>
				<span>{el.points}</span>
			</li>
		))}
	</ul>
);

const Search = () => (
	<div>
		<label htmlFor='search'>Search: </label>
		<input id='search' type='text' />
	</div>
);

export default App;
