import ListItem from '../ListItem';
import './index.css';

function List({ todos, setTodo }) {
	return (
		<ul>
			{todos.map((todo, index) => (
				<ListItem key={index} todo={todo} todos={todos} setTodo={setTodo} />
			))}
		</ul>
	);
}

export default List;
