import Button from '../Button';
import { /*useRef,*/ useState } from 'react';
import './index.css';

function Input({ setTodo, todos }) {
	// const nameOfTodo = useRef();
	const [inputText, setInputText] = useState('');
	const handleTextChange = (e) => setInputText(e.target.value);
	// function addTodo(event) {
	//     const anything = [...todo, event.target.previousSibling.value];
	//     setTodo(anything);
	//   }
	function addTodo() {
		// let todo = nameOfTodo.current.value;

		if (todos.some((element) => element.text === inputText) === false && inputText) {
			const anything = [...todos, { text: inputText, completed: false }];
			setTodo(anything);
		} else {
			console.log('it was a duplicate');
		}
		// nameOfTodo.current.value = null;
		handleTextChange({ target: { value: '' }});
		return;
	}
	function deleteCompleted() {
		const newArray = [...todos];
		const result = newArray.filter((elem) => elem.completed !== true);
		setTodo(result);
	}
	return (
		<div className="listHeader">
			<input 
			// ref={nameOfTodo}
			 type="text" placeholder="Add todo" value={inputText} onChange={handleTextChange} required />
			<section>
				<Button handleClick={addTodo} text="➕" />
				<Button handleClick={deleteCompleted} text="🔥" />
			</section>
		</div>
	);
}

export default Input;
