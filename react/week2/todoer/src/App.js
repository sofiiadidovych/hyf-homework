import "./App.css";
import { useState, useEffect } from "react";

function TodoItem({ id, description, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const check = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={isChecked ? "checked" : "not-checked"}>
      #{id}: {description}
      <input type="checkbox" onChange={check}></input>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function TodoList({ todos }) {
  const [stateTodos, setStateTodos] = useState(todos);

  const addTodo = () => {
      const newTodo = {
        id: stateTodos.length > 0 ? stateTodos[stateTodos.length - 1].id + 1 : 1,
        description: "random text",
      };
      const todosWithNew = stateTodos.concat(newTodo);
      setStateTodos(todosWithNew);
  };

  const onDelete = (id) => {
      const filteredTodos = stateTodos.filter((todo) => todo.id !== id);
      setStateTodos(filteredTodos);
  };

  return (
    <>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {stateTodos.length > 0 ?
        stateTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            onDelete={onDelete}
          ></TodoItem>
        ))
          : 'No items'}
      </ul>
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <p>You have used {count} seconds on this website</p>
  );
}

function App() {
  return (
    <>
      <h1>TODO list</h1>
      <Timer></Timer>
      <TodoList todos={todos}></TodoList>
    </>
  );
}

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

export default App;
