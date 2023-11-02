import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useAddToDoMutation, useViewToDoQuery } from '../../../slices/eventSlice';
import { useEffect } from 'react';
import axios from 'axios';

const TodoList=({event,success})=> {
  // console.log(event.event_id);
  // const {data:viewToDo,error,isLoading}=useViewToDoQuery()
  const [todoListState, setTodoListState] = useState("Initial Value");
  const [refreshTodoList, setRefreshTodoList] = useState(false);
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
  }, [event.event_id,refreshTodoList]);
  
  
  //   if (services.length === 0) {
  //     return <div>Loading...</div>;
  // }

    // console.log(services);
    const handleTodoValueChange = (updatedValue) => {
      // Update the state variable with the updated value received from Todo
      setTodoListState(updatedValue);
    };

 
  
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
    // console.log(id);
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
    axios.delete(`/api/customer/deleteTodo?todo_id=${id}`)
    .then((response)=> {
    console.log('Deleted successfully:', response.data);
  })
    .catch((error) =>{
    console.error('An error occurred:', error);
  });
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
        event_date={event.event_date}
        todoListState={todoListState}
        onTodoValueChange={handleTodoValueChange}
        // Pass the state variable and the setRefreshTodoList function
        refreshTodoList={refreshTodoList}
        setRefreshTodoList={setRefreshTodoList}
      />
    </>
  );
}

export default TodoList;
