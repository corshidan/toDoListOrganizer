import './index.css';
import { useState } from 'react';
import List from '../List';
import Input from '../Input';

function ToDoList({ name }) {
	const [todos, setTodo] = useState([]);

	return (
		<div className="separate">
			<h1>{name}</h1>
			<Input todos={todos} setTodo={setTodo} />
			<List todos={todos} setTodo={setTodo} />
		</div>
	);
}

export default ToDoList;
