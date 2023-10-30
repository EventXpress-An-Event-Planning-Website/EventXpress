import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import celebrationImage from "../../../assets/images/celebration.jpg";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const Todo = ({
  success,
  event_id,
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [spName,setSpName] = useState('');
  const [selectedPackage,setSelectedPackage]= useState([])
  
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

  const openModal = (serviceProvider) => {
    console.log(serviceProvider);
    setSpName(serviceProvider.selected.package_busname)
    setSelectedPackage(serviceProvider)
    
    console.log(showModal);
    setShowModal(true);
    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (id) => {
    navigate(`/customer/eventdetails?id=${id}&success=1`);
  };
  const handleFormSubmit = () => {
    handleSubmit(event_id); // Pass the event_id to the handleSubmit function
    closeModal(); // Close the modal after submitting the form
  };

  const sendRequest = ()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"))
    console.log(user);
    const notificationdata ={
      event_id:event_id,
      user_id:user.id,
      package_id:selectedPackage.selected.package_id,
      send_id:selectedPackage.selected.userid,
      service:selectedPackage.location
      
    }
    console.log(notificationdata);
   
    if(todos.some(item => item.selected === undefined || item.selected === null)){
      toast.error("Before send a Request Please Select All Services or Delete Unwanted Details");
      setShowModal(false);
      console.log('Weranga');
    }else{
      axios
          .post("/api/customer/sendRequest", notificationdata)
          .then((response) => {
            const packCount = response.data;
            console.log(packCount);
            // Perform navigation after successful POST
            navigate(`/customer/event/CakeCompare?event_id=${event_id}`);
          })
          .catch((error) => {
            console.error("Error adding event:", error);
            // Handle error if needed
          });
       
    }
  }

  return todos.map((todo, index) => (
    <>
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          {todo.selected === undefined ? (
            <Link
              to={`/customer/event/${todo.location}?event_id=${event_id}&packageCount=0`}
            >
              <FontAwesomeIcon icon={faEye} style={{ color: "#6D004F" }} />
            </Link>
          ) :todo.request!== undefined && todo.request.status === "Accept" ? null : (
            <Link
              to={`/customer/event/${todo.location}?event_id=${event_id}&packageCount=0`}
            >
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ color: "#6D004F" }}
              />
            </Link>
          )}

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
          {todo.selected === undefined ? (
            <div className="selected-service-package-details-container">
              <h2>Still Not Selected</h2>
            </div>
          ) : (
            <div className="selected-service-package-details-container">
              <div className="selected-service-package-img">
                <img
                  src={`../../src/assets/images/uploads/${todo.selected.sp_images}`}
                />
              </div>

              {todo.selected.package_title}
              <div
                style={{
                  color: "green",
                  marginLeft: "20%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {success === "Accept" ? (
                  <span style={{ marginLeft: "20%" }}>Accept</span>
                ) : (
                  <Button style={{ width: "100px" }} onClick={() => openModal(todo)}>
                    Send Request
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>EventXpress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <div>
            <p>Send a Request For a {spName}</p>
            
          </div>

          <Button onClick={sendRequest}>Confirm</Button>
      
      </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={closeModal}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  ));
};

export default Todo;
