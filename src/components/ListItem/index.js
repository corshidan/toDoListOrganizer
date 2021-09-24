import Button from '../Button';
import './index.css';

function ListItem({ todo, todos, setTodo }) {
	// function deleteTodo(event) {
	// const value = event.target.parentNode.innerHTML.split('<')[0];
	// 	const index = todos.findIndex((element) => element === value);
	// 	const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)];
	// 	console.log(value, index, newArray);
	// 	setTodo(newArray);
	// }

	// function deleteTodo() {
	// 	const index = todos.findIndex((element) => element === text);
	// 	const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)];
	// 	setTodo(newArray);
	// }

	function checkComplete() {
		// const foundObj = todos.find(element => element.text === todo.text);
		// foundObj.completed = !foundObj.completed;
		// setTodo(todos);

		// const index = todos.findIndex(element => element.text === todo.text);
		// const newObject = {...todos[index], completed: !todos[index].completed};
		// const newArray = [...todos.slice(0, index), newObject, ...todos.slice(index+1)];
		// setTodo(newArray);
		// e.target.checked = !e.target.checked

		const newArray = [...todos];
		const done = newArray.find((element) => element.text === todo.text);
		done.completed = !done.completed;
		setTodo(newArray);
	}

	function deleteTodo() {
		const newArray = todos.filter((element) => element.text !== todo.text);
		setTodo(newArray);

		console.log(newArray, todos);
	}
	console.log(todos);
	console.log(todo.completed);
	return (
		<li className="listItem">
			<p>
				<input type="checkbox" onChange={checkComplete} checked={todo.completed} />
				{todo.text}
			</p>
			<Button handleClick={deleteTodo} text=" 	🗑️" />
		</li>
	);
}

export default ListItem;
