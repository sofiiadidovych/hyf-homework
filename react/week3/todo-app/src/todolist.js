import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Timer from "./timer";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function TodoItem({ id, description, deadline, onDelete, onUpdate }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const check = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={isChecked ? "checked" : "not-ckecked"}>
      { isEdit
      ? <input
            type="text"
            value={updatedDescription}
            onChange={(event)=> {
                const value = event.target.value;
                setUpdatedDescription(value);
            }}/>
      : <span>#{id} | {description} | {deadline}</span> }

      <input type="checkbox" onChange={check} />
      <button onClick={() => onDelete(id)}>Delete</button>

      { isEdit
      ? <button onClick={() => {
            onUpdate(id, updatedDescription);
            setIsEdit(false);
            }
        }>Update</button>
      : <button onClick={() => setIsEdit(true)}>Edit</button> }

    </li>
  );
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
}

function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ul>
      {todos.length
        ? todos.map((todo) => (
            <FancyBorder key={todo.id}>
              <TodoItem
                id={todo.id}
                description={todo.description}
                deadline={todo.deadline}
                onDelete={onDelete}
                onUpdate={onUpdate}
              ></TodoItem>
            </FancyBorder>
          ))
        : "No items"}
    </ul>
  );
}

function FancyBorder(props) {
  return <div className="fancy-border">{props.children}</div>;
}

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((fetchedTodos) => setTodos(fetchedTodos));
  }, []);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoDescription === '') {
        alert('Description can not be empty');
        return;
    }

    const todoDate = new Date(todoDeadline);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    if (isNaN(todoDate.getTime()) || todoDate < todayDate) {
        alert('Deadline is not valid')
        return;
    }

    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      description: todoDescription,
      deadline: todoDeadline,
    };

    setTodos([...todos, newTodo]);
    setTodoDescription("");
    setTodoDeadline("");
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const onUpdate = (id, updatedDescription) => {
    const updatedTodos = [...todos];
    updatedTodos.forEach(todo => {
        if(todo.id === id) {
            todo.description = updatedDescription
        }
    });
    setTodos(updatedTodos);
  }

  return (
    <>
      <div>
        <h1>TODOLIST</h1>
        <Timer />
      </div>

      <form onSubmit={handleAddTodo}>
        <div>
          <label htmlFor="description">Todo description </label>
          <input
            type="text"
            id="description"
            placeholder="description"
            value={todoDescription}
            onChange={(event) => {
              const value = event.target.value;
              setTodoDescription(value);
            }}
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline </label>
          <input
            type="date"
            id="deadline"
            value={todoDeadline}
            onChange={(event) => {
              const value = event.target.value;
              setTodoDeadline(value);
            }}
          />
        </div>
        <div>
          <button type="submit">Add todo</button>
        </div>
      </form>
      <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </>
  );
}

export default TodoContainer;
