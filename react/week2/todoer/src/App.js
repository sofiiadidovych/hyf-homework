import "./App.css";
import { useState, useEffect } from "react";

function TodoItem({ number, description }) {
  const [isChecked, setIsChecked] = useState(false)
  const [deleteState, setDeleteState] = useState(todos);

  const deleteTodo = () => {
    console.log('delete')
  };

  const check = () => {
    if(isChecked) {
      console.log('checked')
      const description = description;
      console.log(description)
      description.strike()
      setIsChecked()
    }
  }

  return (
    <li>
      #{number}: {description}
      <input type="checkbox" onChange={check}>{isChecked ? console.log("checked") : console.log("not checked")}</input>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

function TodoList({ todos }) {
  console.log("render list");
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          number={todo.id}
          description={todo.description}
        ></TodoItem>
      ))}
    </ul>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <p>You have used {count} seconds on this website</p>
  );
}

function App() {
  const [stateTodos, setStateTodos] = useState(todos);

  const addTodo = () => {
    const newTodo = { id: stateTodos.length + 1, description: "random text" };
    setStateTodos(prev => prev.concat(newTodo));
  };

  return (
    <>
      <h1>TODO list</h1>
      <Timer></Timer>
      <button onClick={addTodo}>Add todo</button>
      <TodoList todos={stateTodos}></TodoList>
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
