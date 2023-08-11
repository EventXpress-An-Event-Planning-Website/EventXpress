import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useAddToDoMutation, useViewToDoQuery } from '../../../slices/eventSlice';
import { useEffect } from 'react';
import axios from 'axios';

const TodoList=({event})=> {
  console.log(event.event_id);
  // const {data:viewToDo,error,isLoading}=useViewToDoQuery()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`/api/customer/viewToDo?id=${event.event_id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
        console.log(data);
       
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [loading,event.event_id]);
 
    
  const services=[
    {id:1,text:'Venue',location:'Venue',selected:'Araliya Garden',img:"venue5.jpg"},
    {id:2,text:'Catering',location:'Catering',selected:'Marino Beach Colombo',img:"catering-2.webp"},
    {id:3,text:'Cakes',location:'Cake',selected:'Green Palace Colombo',img:"cake3.jpg"},
    {id:4,text:'Decoration',location:'Decoration',selected:'Araliya Garden',img:""},
    {id:5,text:'Photography',location:'Photography',selected:'Araliya Garden',img:""},
    {id:6,text:'Sound and Light',location:'SoundAndLight',selected:'Araliya Garden',img:""}]
 
  const [todos, setTodos] = useState([...services]);
  const event_id = event.event_id
  const [addToDo,{ isLoading: createLoading }]=useAddToDoMutation()
  
  const addTodo = async(todo) => {
    // console.log(todo.event_id);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const event_id= todo.event_id
    const todoText = todo.text

    const newTodos = [ ...todos,todo];

    setTodos(newTodos);
    try {
      const res = await addToDo({
        event_id,
        todoText
      
      }).unwrap()
      
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
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
     
      <TodoForm onSubmit={addTodo} event={event} />
      <Todo
        event_id={event_id}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
