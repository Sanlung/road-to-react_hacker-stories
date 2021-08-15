const names = ["Chung", "Mary", "John"];

const App = () => (
	<div>
		<h1>Hello{names.map((name) => ` ${name}`)}!</h1>
		<label htmlFor='search'>Search: </label>
		<input id='search' type='text' />
	</div>
);

export default App;
