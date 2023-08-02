import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList=()=> {

  const services=[
    {id:1,text:'Venue',location:'Venue',selected:'Araliya Garden',img:"venue5.jpg"},
    {id:2,text:'Catering',location:'Catering',selected:'Marino Beach Colombo',img:"catering-2.webp"},
    {id:3,text:'Cakes',location:'Cake',selected:'Green Palace Colombo',img:"cake3.jpg"},
    {id:4,text:'Decoration',location:'Decoration',selected:'Araliya Garden',img:""},
    {id:5,text:'Photography',location:'Photography',selected:'Araliya Garden',img:""},
    {id:6,text:'Sound and Light',location:'SoundAndLight',selected:'Araliya Garden',img:""}]
 
  const [todos, setTodos] = useState([...services]);

  
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [ ...todos,todo];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
     
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
