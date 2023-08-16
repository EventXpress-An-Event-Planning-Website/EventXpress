import React, { useRef } from "react";
import { Form, Button,Modal,Toast } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import CusPendingEvent from "../../components/Cus/CusPendingEvent";
import CusOngoingEvent from "../../components/Cus/CusOngoingEvent";
import CusPreviousEvent from "../../components/Cus/CusPreviousEvent";
import { CusCrrousal } from "../../components/Cus/CusCrrousal";
import { CustomerNavbar } from "../../components/Cus/CustomerNavbar";
import { useCreateMutation, useGetEventQuery } from "../../slices/eventSlice";
import { eventSlice } from "../../slices/eventSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { isBefore } from "date-fns";
import CreateEventCarrousal from "../../components/Cus/CreateEventCarrousal";
import { toast } from 'react-toastify';
import axios from "axios";
import { useUploadSingleMutation } from "../../slices/uploadApiSlice";


const CreateEvent = () => {
    const dispatch = useDispatch();
    const [data,setData]=useState([])
    const [eventData, setEventData]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false)
    const [eventName, seteventName] = useState("");
    const [eventDate, seteventDate] = useState("");
    const [eventStartTime, seteventStartTime] = useState("");
    const [eventEndTime, seteventEndTime] = useState("");
    const [eventImage, setEventImage] = useState(null)
    const [eventType, seteventType] = useState("");
    const [eventtype, seteventtype] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const eventDateInputRef = useRef(null);
    const [showCreateEvent, setShowCreateEvent] = useState(false);
    const [containerWidth, setContainerWidth] = useState("100%");

  useEffect(() => {
    axios.get(`/api/customer/myEvents`)
      .then(response => {
        setData(response.data);
        setEventData(data)
        setLoading(false);
        
       
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [loading,showModal]);
  const [uploadSingle] = useUploadSingleMutation();

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
          return imageFilename;
        } else {
          throw new Error('Error uploading image: Invalid response format');
        }
      }
      return ''; // If no image is provided, return an empty string
    } catch (error) {
      console.error('Error uploading image:', error);
      return ''; // Return an empty string if there is an error during upload
    }
  };
//   const { data: eventData, error, isLoading } = useGetEventQuery(); 
//   useEffect(() => {
    
//     if (error) {
//       console.error("Error fetching events:", error);
//     }
//   }, [error]);

//   useEffect(() => {
//     if (!isLoading) {
//       // console.log(eventData);
//     }
//   }, [isLoading,]);

  

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;

  const navigate = useNavigate();

  const [create, { isLoading: createLoading }] = useCreateMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const eventImages= uploadImage(eventImage)
      console.log(eventImages);
      const res = await create({
        userId,
        eventName,
        eventtype,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventImages,
        eventType,
        eventDescription,
        
      }).unwrap();
      setLoading(true)
      setShowModal(false)
      toast.success("Event Created Successfully")
      navigate("/customer/myEvents");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  
  

  // Function to toggle the visibility of the create event container
  const toggleCreateEvent = () => {
    setShowCreateEvent(!showCreateEvent);
    setContainerWidth(showCreateEvent ? "100%" : "80%");
  };
  const handleEventImageChange = (e) => {
    const file = e.target.files[0]
    setEventImage(file)
  }

  const maxWordCount = 250;

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setEventDescription(description);

    const wordCount = description.trim().split(/\s+/).length;
    const remainingWords = maxWordCount - wordCount;

    if (remainingWords < 0) {
      setDescriptionError("Description should be limited to 250 words.");
    } else {
      setDescriptionError("");
    }
  };

  const handleEventDateChange = (e) => {
    const selectedDate = e.target.value;
    seteventDate(selectedDate);
  };

  const [selectedStartTime, setSelectedStartTime] = useState("");

  // Handler for selecting start time
  const handleEventStartTimeChange = (e) => {
    const startTime = e.target.value;
    seteventStartTime(startTime);
    setSelectedStartTime(startTime);
  };

  const openModal = () => {
    console.log(showModal);
    setShowModal(true)
    console.log(showModal);
}

const closeModal = () => {
    setShowModal(false)
}

  //   const hideCreateEvent = () => {
  //     setShowCreateEvent(false);
  //     setContainerWidth('100%');
  //   };

  // useEffect(() => {
  //     const handleBlur = (event) => {
  //       if (containerRef.current && !containerRef.current.contains(event.target)) {
  //         setShowCard(false);
  //       }
  //     };

  //     document.addEventListener('click', handleBlur);

  //     return () => {
  //       document.removeEventListener('click', handleBlur);
  //     };
  //   }, []);

  const containerRef = useRef(null);

  return (
    <>
      <section id="content" className="cus-block">
        <CreateEventCarrousal />
      </section>
      <div className="create-event-container">
        <div className="create-event-container-sentence">
          <span>ARE YOU INTERESTING TO PLAN AN EVENT FROM OUR PLATFORM?</span>
        </div>
        <section className="createeventbtn">
          <Button onClick={openModal}>Create Event</Button>
        </section>
      </div>

      <section className="eventcontainer">
        <CusPendingEvent eventData={eventData} />
      </section>
      <section className="eventcontainer">
        <CusOngoingEvent eventData={eventData} />
      </section>
      <section className="eventcontainer">
        <CusPreviousEvent eventData={eventData} />
      </section>
      {/* {showCreateEvent && (
        <div className="createEvent_Background" onClick={() => setShowCreateEvent(false)}>
            <div   ref={containerRef}
                   className={`createEvent_PageContainer ${showCreateEvent ? '' : 'hidden'}`}
                   onClick={(e) => e.stopPropagation()} >
                <Form className="createEvent_FormContainer" onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="userId">
                        <Form.Control 
                            type="number" 
                            value={userId}
                            style={{ display: 'none' }}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="eventName">
                        <Form.Label>Event Name:</Form.Label>
                        <Form.Control 
                            type="text" 
                            onChange={(e)=>seteventName(e.target.value)}
                            required
                            value={eventName}
                            autoFocus
                            placeholder="Enter event name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="eventType">
                        <Form.Label>Select Event Type:</Form.Label>
                        <Form.Select 
                            size=""
                            value={eventtype}
                            onChange={(e)=>seteventtype(e.target.value)}>
                            <option></option>
                            <option>Public</option>
                            <option>Private</option>
                            
                        </Form.Select>
                    </Form.Group>
                    
                    <div className='event_details_Container'>
                    <Form.Group className="mb-3" controlId="eventDate">
                        <Form.Label>Event Date:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter event date"
                            value={eventDate}
                            onChange={handleEventDateChange}
                            onInvalid={(e) => e.target.setCustomValidity('Event date cannot be a previous date.')}
                            ref={eventDateInputRef}
                            min={new Date().toISOString().split('T')[0]} // Set the min attribute to the current date
                        />
                        <p className="text-danger">{eventDateInputRef.current?.validationMessage}</p>
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="eventStartTime">
                            <Form.Label>Event Start Time:</Form.Label>
                            <Form.Control 
                                type="time" 
                                placeholder="Enter event start time" 
                                value={eventStartTime}
                                onChange={(e)=>seteventStartTime(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="eventEndTime">
                            <Form.Label>Event End Time:</Form.Label>
                            <Form.Control 
                                type="time" 
                                placeholder="Enter event end time" 
                                value={eventEndTime}
                                onChange={(e)=>seteventEndTime(e.target.value)}
                                min={eventStartTime}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="eventDescription">
                            <Form.Label>Event Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                onChange={handleDescriptionChange}
                                value={eventDescription}
                                placeholder="Enter event description"
                            />
                        </Form.Group>
                        {descriptionError ? (
                            <span className="text-danger">{descriptionError}</span>
                        ) : (
                            <p>Remaining words: {Math.max(maxWordCount - eventDescription.trim().split(/\s+/).length, 0)}</p>
                        )}
                    </div>
                    
                    {eventtype === 'Private' && (
                    <Form.Group className="mb-3" controlId="eventType">
                        <Form.Label>Select Event Type:</Form.Label>
                        <Form.Select 
                            size=""
                            value={eventType}
                            onChange={(e)=>seteventType(e.target.value)}>
                            <option></option>
                            <option>Birthday Party</option>
                            <option>Anivesary</option>
                            <option>Bachelor Party</option>

                        </Form.Select>
                    </Form.Group>
                    )}
                   
                       
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    

                </Form>
                
            </div>
            </div>
            )} */}

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>EventXpress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form
              
              onSubmit={submitHandler}
            >
              <Form.Group className="mb-3" controlId="userId">
                <Form.Control
                  type="number"
                  value={userId}
                  style={{ display: "none" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="eventName">
                <Form.Label>Event Name:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => seteventName(e.target.value)}
                  required
                  value={eventName}
                  autoFocus
                  placeholder="Enter event name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="eventType">
                <Form.Label>Select Event Type:</Form.Label>
                <Form.Select
                  size=""
                  value={eventtype}
                  onChange={(e) => seteventtype(e.target.value)}
                >
                  <option></option>
                  <option>Public</option>
                  <option>Private</option>
                </Form.Select>
              </Form.Group>

              <div className="event_details_Container">
                <Form.Group className="mb-3" controlId="eventDate">
                  <Form.Label>Event Date:</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter event date"
                    value={eventDate}
                    onChange={handleEventDateChange}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        "Event date cannot be a previous date."
                      )
                    }
                    ref={eventDateInputRef}
                    min={new Date().toISOString().split("T")[0]} // Set the min attribute to the current date
                  />
                  <p className="text-danger">
                    {eventDateInputRef.current?.validationMessage}
                  </p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventStartTime">
                  <Form.Label>Event Start Time:</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Enter event start time"
                    value={eventStartTime}
                    onChange={(e) => seteventStartTime(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventEndTime">
                  <Form.Label>Event End Time:</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Enter event end time"
                    value={eventEndTime}
                    onChange={(e) => seteventEndTime(e.target.value)}
                    min={eventStartTime}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="eventImage">
                  <Form.Label>Event Image:</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    placeholder="Upload image of event"
                    onChange={handleEventImageChange}
                   
                  />
                </Form.Group>

                {eventtype === "Private" && (
                <Form.Group className="mb-3" controlId="eventType">
                  <Form.Label>Select Event Type:</Form.Label>
                  <Form.Select
                    size=""
                    value={eventType}
                    onChange={(e) => seteventType(e.target.value)}
                  >
                    <option></option>
                    <option>Birthday Party</option>
                    <option>Anniversary</option>
                    <option>Bride To Be</option>
                    <option>Social Event</option>
                    <option>Farewell</option>
                    <option>Christmas Celebration</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              )}
              {eventtype === "Public" && (
                <Form.Group className="mb-3" controlId="eventType">
                  <Form.Label>Select Event Type:</Form.Label>
                  <Form.Select
                    size=""
                    value={eventType}
                    onChange={(e) => seteventType(e.target.value)}
                  >
                    <option></option>
                    <option>Music Concert</option>
                    <option>Drama</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              )}
                <Form.Group className="mb-3" controlId="eventDescription">
                  <Form.Label>Event Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    onChange={handleDescriptionChange}
                    value={eventDescription}
                    placeholder="Enter event description"
                  />
                </Form.Group>
                {descriptionError ? (
                  <span className="text-danger">{descriptionError}</span>
                ) : (
                  <p>
                    Remaining words:{" "}
                    {Math.max(
                      maxWordCount -
                        eventDescription.trim().split(/\s+/).length,
                      0
                    )}
                  </p>
                )}
              </div>

             

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateEvent;
