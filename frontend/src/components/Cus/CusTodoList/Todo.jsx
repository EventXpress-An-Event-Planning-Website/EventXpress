import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
          <Link to={`/customer/event/${todo.location}Compare`}>
            <FontAwesomeIcon icon={faEye} style={{ color: '#6D004F' }} />
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
            <FontAwesomeIcon icon={faCaretDown} style={{ color: '#6D004F' }} />
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
