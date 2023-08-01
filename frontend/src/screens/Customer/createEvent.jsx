import React, {useRef} from 'react'
import { Form,Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { useNavigate,Link } from "react-router-dom"
import { useCreateMutation } from "../../slices/eventSlice"
import CusPendingEvent from "../../components/Cus/CusPendingEvent"
import CusOngoingEvent from "../../components/Cus/CusOngoingEvent"
import CusPreviousEvent from "../../components/Cus/CusPreviousEvent"
import { CusCrrousal } from "../../components/Cus/CusCrrousal"
import { CustomerNavbar } from "../../components/Cus/CustomerNavbar"

const CreateEvent = () => {

    const [eventName, seteventName] = useState('')
    const [eventDate, seteventDate] = useState('')
    const [eventStartTime, seteventStartTime] = useState('')
    const [eventEndTime, seteventEndTime] = useState('')
    const [eventType, seteventType] = useState('')

    const userInfo = localStorage.getItem('userInfo')
    const parsedUserInfo = JSON.parse(userInfo);
    const userId=parsedUserInfo.id

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [create, { isLoading: createLoading }] = useCreateMutation()


    const submitHandler = async (e) => {
        e.preventDefault()
    
        try {
            const res = await create({
              userId,
              eventName,
              eventDate,
              eventStartTime,
              eventEndTime,
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
            <CusCrrousal />
        </section>
        <section className="createeventbtn">
            <Button onClick={toggleCreateEvent}>Create Event</Button>
        </section>
        
        <section className="eventcontainer">
            <CusPendingEvent />
        </section>
        <section className="eventcontainer">
            <CusOngoingEvent />
        </section>
        <section className="eventcontainer">
            <CusPreviousEvent />
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

                    <Form.Group className="mb-3" controlId="eventDate">
                        <Form.Label>Event Date:</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Enter event date" 
                            value={eventDate}
                            onChange={(e)=>seteventDate(e.target.value)}/>
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
                            onChange={(e)=>seteventEndTime(e.target.value)}/>
                    </Form.Group>

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
