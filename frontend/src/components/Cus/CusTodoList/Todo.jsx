import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import celebrationImage from '../../../assets/images/celebration.jpg';
import { Link } from 'react-router-dom';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [showDetailsId, setShowDetailsId] = useState(null); 

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  const toggleDetails = (id) => {
    setShowDetailsId(prevId => prevId === id ? null : id);
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div>
      <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <Link to={`/${todo.location}`}>
            <i class="fa-regular fa-eye" style={{color: "#6D004F"}}></i>
          </Link>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            style={{color: "#6D004F"}}
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
            style={{color: "#6D004F"}}
          />
          <div className='view-details' onClick={() => toggleDetails(todo.id)}>
            <i class="fa-solid fa-caret-down" style={{color:"#6D004F"}}></i>
          </div>
          
        </div>
        
      </div>
      {showDetailsId === todo.id && (
      <div className='selected-service-package-details '>
          <div className='selected-service-package-details-container'>
            <div className='selected-service-package-img'>
              <img src={`../../src/assets/images/${todo.img}`} />
            </div>
            {todo.selected}
          </div>
      </div>
      )}
    </div>
  ));
};

export default Todo;
