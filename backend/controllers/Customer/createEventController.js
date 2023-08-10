
import asyncHandler from 'express-async-handler'
import path from 'path'
import { createEvent,eventdetails, getEventdetails } from '../../models/eventModel.js'







const createevent = asyncHandler(async(req,res)=>{

    let event=''
    const {
      userId,
      eventName,
      eventtype,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventType

    }=req.body
    event= await createEvent(
      userId,
      eventName,
      eventtype,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventType 
    )
    if (event) {
        res.status(201).json({
          id: event.id
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    console.log(eventtype);
    console.log(eventType);

    
})

const getEvent = asyncHandler(async(req,res)=>{
  const event_dateils= await eventdetails()
  if (event_dateils) {
    res.json(event_dateils.rows);
  }else{
    throw new Error ('No data to retreive')
  }

  
})



const getEventDetails = asyncHandler(async(req,res)=>{

  const event_id= req.query.id;
  console.log(event_id);
  const event_data = await getEventdetails(event_id);
  
  res.json(event_data)
})



  
      




export {
    createevent,getEvent,getEventDetails
}