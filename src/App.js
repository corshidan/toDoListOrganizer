// create the components
// make sure we import and export properly

/// ListItem
// text
// event listener on the list item to make it gray when clicked
// add a button to delete all of the todos
// Button
// button
// event listener on the button when clicked

// List
// map the array of to dos to the array of ListItems
// Button

// Input
// state text
// Button

import './App.css';
import ToDoList from './components/ToDoList';
import Button from './components/Button';
import { useState, useRef } from 'react';
function App() {
	const [lists, setLists] = useState([]);
	const anything = useRef();
	function handleChange() {
		let name = anything.current.value;
		if(!name)
			name = 'Anonymous list';
		if(lists.includes(name))
			return;
		const newList = [...lists, name];

		setLists(newList);
		anything.current.value = null;
	}
	return (
		<div className="outside">
			<section className="listPicker">
				<h1 className="title"> Lists Organizer </h1>
				<input ref={anything} type="text" placeholder="What Category is your todo list?" />
				<Button text="Add a new list" handleClick={handleChange} />
			</section>
			<main className="main">
				{lists.map((elem, index) => {
					return <ToDoList key={index} name={elem} />;
				})}
			</main>
		</div>
	);
}

export default App;
