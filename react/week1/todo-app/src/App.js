import logo from "./logo.svg";
import "./App.css";

const DateItem = ({ date }) => {
  const deadlineDate = new Date(date.year, date.month - 1, date.day);
  const today = new Date();
  const validDate = deadlineDate > today ? "valid" : "expired";
  return (
    <p>
      {date.day}/ {date.month}/ {date.year} {`${validDate}`}
    </p>
  );
}

const TodoItem = ({ number, name, deadlineDate }) => {
  return (
    <li>
      <h2>
        #{number}: {name}
      </h2>
      <DateItem date={deadlineDate}></DateItem>
    </li>
  );
}

const TodoList = ({ todos }) => {
  return (
    <ul>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.number.toString()}
            number={todo.number}
            name={todo.name}
            deadlineDate={todo.deadlineDate}
          ></TodoItem>
        );
      })}
    </ul>
  );
}

const todos = [
  {
    number: 1,
    name: "Get out of bed",
    deadlineDate: {
      day: 14,
      month: 2,
      year: 2021,
    },
  },
  {
    number: 2,
    name: "Brush teeth",
    deadlineDate: {
      day: 15,
      month: 3,
      year: 2021,
    },
  },
  {
    number: 3,
    name: "Eat breakfast",
    deadlineDate: {
      day: 16,
      month: 5,
      year: 2021,
    },
  },
  {
    number: 4,
    name: "Write a plan for a day",
    deadlineDate: {
      day: 17,
      month: 6,
      year: 2021,
    },
  },
];

function App() {
  return <TodoList todos={todos} />;
}

export default App;
