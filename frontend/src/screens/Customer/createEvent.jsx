// import React from 'react'
import { Form,Button } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { Link,useNavigate } from "react-router-dom"

const CreateEvent = () => {

    const [eventName, seteventName] = useState('')
    const [eventDate, seteventDate] = useState('')
    const [eventStartTime, seteventStartTime] = useState('')
    const [eventEndTime, seteventEndTime] = useState('')
    const [eventType, seteventType] = useState('')

    const Dispath = useDispatch()
    const navigate = useNavigate()
  return (
   
        <>

        <div className="createEvent_PageContainer">
            <div className="createEvent_BlurContainer">
        
            <Form className="createEvent_FormContainer">
                <Form.Group className="mb-3" controlId="eventName">
                    <Form.Label>Event Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        onChange={(e)=>seteventName(e.target.value)}
                        required
                        autoFocus
                        placeholder="Enter event name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventDate">
                    <Form.Label>Event Date:</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="Enter event date" 
                        onChange={(e)=>seteventDate(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventStartTime">
                    <Form.Label>Event Start Time:</Form.Label>
                    <Form.Control 
                        type="time" 
                        placeholder="Enter event start time" 
                        onChange={(e)=>seteventStartTime(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventEndTime">
                    <Form.Label>Event End Time:</Form.Label>
                    <Form.Control 
                        type="time" 
                        placeholder="Enter event end time" 
                        onChange={(e)=>seteventEndTime(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventType">
                    <Form.Label>Select Event Type:</Form.Label>
                    <Form.Select 
                        size=""
                        onChange={(e)=>seteventType(e.target.value)}>
                        <option>Birthday Party</option>
                        <option>Anivesary</option>
                        <option>Bachelor Party</option>

                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Event
                </Button>
            </Form>
            </div>
        </div>
        </>
       
    
  )
}

export default CreateEvent
