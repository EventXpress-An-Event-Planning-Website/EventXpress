import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useAddToDoMutation, useViewToDoQuery } from '../../../slices/eventSlice';
import { useEffect } from 'react';

const TodoList=({event})=> {

  // const {data:viewToDo,error,isLoading}=useViewToDoQuery()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`/api/customer/eventDetails?id=${event_id}`)
      .then(response => {
        setData(response.data);
        setEvent(data)
        setLoading(false);
        
       
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [loading,event_id]);
 
    if (event.length === 0) {
        return <div>Loading...</div>;
    }
  const services=[
    {id:1,text:'Venue',selected:'Araliya Garden'},
    {id:2,text:'Catering',selected:'Avenra Garden'},
    {id:3,text:'Cakes',selected:'Araliya Garden'},
    {id:4,text:'Cakes',selected:'Araliya Garden'},
    {id:5,text:'Cakes',selected:'Araliya Garden'},
    {id:6,text:'Cakes',selected:'Araliya Garden'}]

 
  const [todos, setTodos] = useState([...services]);
  const [addToDo,{ isLoading: createLoading }]=useAddToDoMutation()
  
  const addTodo = async(todo) => {
    console.log(todo.event_id);
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
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
