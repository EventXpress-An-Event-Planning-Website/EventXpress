import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import celebrationImage from "../../../assets/images/celebration.jpg";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Todo = ({ success,event_id, todos, completeTodo, removeTodo, updateTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  console.log(event_id);
  const navigate = useNavigate();
  const [showDetailsId, setShowDetailsId] = useState(null);

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  const toggleDetails = (id) => {
    setShowDetailsId((prevId) => (prevId === id ? null : id));
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const openModal = () => {
    console.log(showModal);
    setShowModal(true);
    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit=(id)=>{
    navigate(`/customer/eventdetails?id=${id}&success=1`)
  }
  const handleFormSubmit = () => {
    handleSubmit(event_id); // Pass the event_id to the handleSubmit function
    closeModal(); // Close the modal after submitting the form
  };

  return todos.map((todo, index) => (
    <div>
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <Link
            to={`/customer/event/${todo.location}?event_id=${event_id}&packageCount=0`}
          >
            <FontAwesomeIcon icon={faEye} style={{ color: "#6D004F" }} />
          </Link>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
            style={{ color: "#6D004F" }}
          />
          {/* <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
            style={{color: "#6D004F"}}
          /> */}
          <div className="view-details" onClick={() => toggleDetails(todo.id)}>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#6D004F" }} />
          </div>
        </div>
      </div>
      {showDetailsId === todo.id && (
        <div className="selected-service-package-details ">
          <div className="selected-service-package-details-container">
            <div className="selected-service-package-img">
              <img src={`../../src/assets/images/${todo.img}`} />
            </div>
            {todo.selected}
            <div
              style={{
                color: "green",
                marginLeft: "20%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {success==='1'?
              <span style={{ marginLeft: "20%" }}>pending</span>:
              
              <Button style={{ width: "100px" }} onClick={openModal}>
                Create Appoinment
              </Button>}
            </div>
          </div>
        </div>
      )}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>EventXpress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Create An Appointment For Physical Meating</p>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Date For Appointment:</Form.Label>
              <Form.Control
                type="date"
                min={new Date().toISOString().split("T")[0]} // Set the min attribute to the current date
              />
            </Form.Group>
            <Button variant="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={closeModal}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  ));
};

export default Todo;
