import React, {useRef} from 'react'
import { Form,Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { useNavigate,Link } from "react-router-dom"
import CusPendingEvent from "../../components/Cus/CusPendingEvent"
import CusOngoingEvent from "../../components/Cus/CusOngoingEvent"
import CusPreviousEvent from "../../components/Cus/CusPreviousEvent"
import { CusCrrousal } from "../../components/Cus/CusCrrousal"
import { CustomerNavbar } from "../../components/Cus/CustomerNavbar"
import { useCreateMutation,useGetEventQuery } from '../../slices/eventSlice'
import { eventSlice } from '../../slices/eventSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { isBefore } from 'date-fns';
import CreateEventCarrousal from '../../components/Cus/CreateEventCarrousal'



const CreateEvent = () => {

    const dispatch = useDispatch()
    

    const { data: eventData, error, isLoading } = useGetEventQuery();
    useEffect(() => {
        if (error) {
          console.error('Error fetching events:', error);
        }

    }, [error]);

    useEffect(()=>{
        if(!isLoading) {
            // console.log(eventData);
        }
    }, [isLoading])
   

    
    const [eventName, seteventName] = useState('')
    const [eventDate, seteventDate] = useState('')
    const [eventStartTime, seteventStartTime] = useState('')
    const [eventEndTime, seteventEndTime] = useState('')
    const [eventType, seteventType] = useState('')
    const [eventtype, seteventtype] = useState('')
    const [eventDescription, setEventDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const eventDateInputRef = useRef(null); 

    const userInfo = localStorage.getItem('userInfo')
    const parsedUserInfo = JSON.parse(userInfo);
    const userId=parsedUserInfo.id

    
    const navigate = useNavigate()

    const [create, { isLoading: createLoading }] = useCreateMutation()
    
    const submitHandler = async (e) => {
        e.preventDefault()
    
        try {
            const res = await create({
              userId,
              eventName,
              eventtype,
              eventDate,
              eventStartTime,
              eventEndTime,
              eventDescription,
              eventType,
            }).unwrap()
            navigate('/customerHome')
          } catch (err) {
            toast.error(err?.data?.message || err.error)
          }
        
      }
    const [showCreateEvent, setShowCreateEvent] = useState(false);

    const [containerWidth, setContainerWidth] = useState('100%');

    // Function to toggle the visibility of the create event container
    const toggleCreateEvent = () => {
      
        setShowCreateEvent(!showCreateEvent);
        setContainerWidth(showCreateEvent ? '100%' : '80%');
      };

    const maxWordCount = 250;

    const handleDescriptionChange = (e) => {
        const description = e.target.value;
        setEventDescription(description);
  
        const wordCount = description.trim().split(/\s+/).length;
        const remainingWords = maxWordCount - wordCount;
  
        if (remainingWords < 0) {
            setDescriptionError('Description should be limited to 250 words.');
        } else {
            setDescriptionError('');
        }
    };

    const handleEventDateChange = (e) => {
        const selectedDate = e.target.value;
        seteventDate(selectedDate)
    
       
    };

    const [selectedStartTime, setSelectedStartTime] = useState('');

 

    // Handler for selecting start time
    const handleEventStartTimeChange = (e) => {
        const startTime = e.target.value;
        seteventStartTime(startTime);
        setSelectedStartTime(startTime);
    };
    
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
        
        
        
        <section id='content' className='cus-block'>
            <CreateEventCarrousal />
        </section>
        <div className='create-event-container'>
            <div className='create-event-container-sentence'>
                <span>ARE YOU INTERESTING TO PLAN AN EVENT FROM OUR PLATFORM?</span>
                
            </div>
            <section className="createeventbtn">
                <Button onClick={toggleCreateEvent}>Create Event</Button>
            </section>

        </div>
        
        
        <section className="eventcontainer">
            <CusPendingEvent
              eventData={eventData}/>
        </section>
        <section className="eventcontainer">
            <CusOngoingEvent 
                eventData={eventData}/>
        </section>
        <section className="eventcontainer">
            <CusPreviousEvent 
                eventData={eventData}/>
        </section>
        {showCreateEvent && (
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
            )}

       
        </>
       
    
  )
}

export default CreateEvent
