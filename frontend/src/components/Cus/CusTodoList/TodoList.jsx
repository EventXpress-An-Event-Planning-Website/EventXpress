import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useAddToDoMutation, useViewToDoQuery } from '../../../slices/eventSlice';
import { useEffect } from 'react';
import axios from 'axios';

const TodoList=({event,success})=> {
  // console.log(event.event_id);
  // const {data:viewToDo,error,isLoading}=useViewToDoQuery()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(`/api/customer/viewToDo?id=${event.event_id}`)
      .then(response => {
        const fetchedData = response.data;
        setData(fetchedData);
        console.log(fetchedData);
        const services = fetchedData.map(todo => ({
          
          id: todo.todo_id,
          text: todo.todo_service,
          location: todo.todo_service,
          selected: todo[0],
          request:todo.notifications
        }));
  
        setTodos(services);
  
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [event.event_id]);
  
  
  //   if (services.length === 0) {
  //     return <div>Loading...</div>;
  // }

    // console.log(services);


 
  
  const [addToDo,{ isLoading: createLoading }]=useAddToDoMutation()
  console.log(todos);
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
        success={success}
        event_id={event.event_id}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
