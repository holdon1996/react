import React from "react";
import Todos from './Todos'
import logo from "./logo.svg";
import "./App.css";

const App = props => {

  const state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  const todoItems = [
    { title: "test1", isComplete: true },
    { title: "test2" },
    { title: "test3" }
  ];

  console.log(state);
  return (
    <div className="App">
      <h3>Hello World</h3>
      <h5>I'm Black</h5>
      {todoItems.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
      <Board value={props.value} title={props.header} />
      <Todos todos={state.todos} completed="true"/>
    </div>
  );
};

const TodoItem = props => {
  const item = props.item;
  let className = "TodoItem-text";
  console.log(item);
  if (item.isComplete) {
    className += " TodoItem-complete";
  }
  return (
    <div className="TodoItem">
      <div className={className}>
        <h3>{props.item.title}</h3>
      </div>
    </div>
  );
};

const Board = props => <Square title={props.title} value={props.value} />;

const Square = props => (
  <div>
    <button className="square">{props.title}</button>
    <h3>{props.value}</h3>
  </div>
);

export default App;
