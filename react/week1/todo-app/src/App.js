import logo from './logo.svg';
import './App.css';

function DateItem(props) {
  let d = new Date();
  d.setFullYear(props.date.year, props.date.month - 1, props.date.day);
  const today = new Date();
  const validDate = (d > today) ? 'valid': 'expired';
  return (
    <p>{props.date.day}/ {props.date.month}/ {props.date.year} {`${validDate}`}</p>
  )
}

function TodoItem(props) {
  return (
    <li>
      <h2>#{props.number}: {props.name}</h2>
      <DateItem date={props.deadlineDate}></DateItem>
    </li>
  )
}

function TodoList(props) {
  return (
    <ul>
      <h1>Todo List</h1>
      {
        props.todos.map(todo => {
          return <TodoItem number={todo.number} name={todo.name} deadlineDate={todo.deadlineDate}></TodoItem>
        })
      }
    </ul>
  )
}

const todos = [
  {
    number: 1,
    name: 'Get out of bed',
    deadlineDate: {
      day: 14,
      month: 2,
      year: 2021
    }
  },
  {
    number: 2,
    name: 'Brush teeth',
    deadlineDate: {
      day: 15,
      month: 3,
      year: 2021
    }
  },
  {
    number: 3,
    name: 'Eat breakfast',
    deadlineDate: {
      day: 16,
      month: 5,
      year: 2021
    }
  },
  {
    number: 4,
    name: 'Write a plan for a day',
    deadlineDate: {
      day: 17,
      month: 6,
      year: 2021
    }
  }
];

function App() {
  return (
    <TodoList todos={todos} />
  );
}

export default App;
