import React from 'react';
import PropTypes from 'prop-types';

const Todos = (props) => {
  console.log(props);
  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      textDecoration: props.completed ? 'line-through' : 'none'
    }
  };

  const markComplete = (e) => {
    console.log('mark');
  }

  const el = props.todos.map((todo, key) => (
    <h3 key={key} style={getStyle()}>{todo.title}</h3>
  ));


  return (
    <>
    <h1>This is Todos Component function</h1>
    {el}
    <input type="checkbox" onChange={markComplete}/>
    </>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
