import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'


const createEvent = asyncHandler(
    async(
      userId,
      eventName,
      eventtype,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventType 
    )=>{
    const createUserQuery = `INSERT INTO event(userId,event_name,event_maintype,event_date,start_time,end_time,event_description,event_type) VALUES($1, $2, $3, $4, $5,$6,$7,$8) RETURNING event_id,event_name`
    const createUser = await query(createUserQuery, [
      userId,
      eventName,
      eventtype,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventType
     
    ])
    
    if(createUser.rowCount>0){
      console.log(createUser.raws);
      return createUser.rows
    }
    else{
      throw new Error('Internal Error')
    }

});

const eventdetails = asyncHandler(
  async()=>{
    const eventQuery = `SELECT * FROM public.event` 
    const result= await query(eventQuery,[])
    console.log(result);
    return result
  
  })


  const getEventdetails = asyncHandler(
    async(event_id)=>{
      const viewEventDetailsQuery = `SELECT * FROM public.event WHERE event_id=$1`
      const explicitEventData = await query(viewEventDetailsQuery,[event_id])
      console.log(explicitEventData);
      return explicitEventData.rows
    }
  )


export {createEvent,eventdetails, getEventdetails}


