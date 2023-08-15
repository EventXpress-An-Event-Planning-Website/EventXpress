import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const TodoForm=(props) =>{
  console.log(props.event.event_id);
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const event_id=props.event.event_id;
  // console.log(event);
  const navigate=useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

 
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      event_id:event_id
    });
    setInput('');
  };

  const HandleNavigate = async()=>{
    navigate(`/Birthday?event_id=${event_id}`)
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input 
          value={event_id}
          style={{display:"none"}}/>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>

          <button style={{marginLeft:'5%'}} onClick={HandleNavigate} className='todo-button'>
            Select Predefine Package
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
