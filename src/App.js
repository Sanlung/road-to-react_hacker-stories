import * as React from "react";

const App = () => {
	const stories = [
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

	const handleSearch = (e) => {
		console.log(e.target.value);
	};

	return (
		<div>
			<h1>My Hacker Stories</h1>
			<Search onSearch={handleSearch} />
			<hr />
			<List list={stories} />
		</div>
	);
};

const List = (props) => (
	<div>
		<h2>{props.title}</h2>
		<ul>
			{/* make list items */}
			{props.list.map((el) => (
				<Item key={el.objectID} item={el} />
			))}
		</ul>
	</div>
);

const Item = (props) => (
	<li>
		<span>
			<a href={props.item.url}>{props.item.title}</a>
		</span>
		<span>{props.item.author}</span>
		<span>{props.item.num_comments}</span>
		<span>{props.item.points}</span>
	</li>
);

const Search = (props) => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		props.onSearch(e);
	};

	return (
		<div>
			<label htmlFor='search'>Search: </label>
			<input
				id='search'
				type='text'
				placeholder={searchTerm}
				onChange={handleChange}
			/>
		</div>
	);
};

export default App;
