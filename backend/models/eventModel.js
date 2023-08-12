import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'


const createEvent = asyncHandler(
    async(
        userId,
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType
    )=>{
    const createUserQuery = `INSERT INTO privateEvent(userId,event_name,event_date,start_time,end_time,event_type) VALUES($1, $2, $3, $4, $5,$6) RETURNING event_id,event_name`
    const createUser = await query(createUserQuery, [
      userId,
      eventName,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventType,
    
    ])
    
    if(createUser.rowCount>0){
      console.log(createUser.raws);
      return createUser.rows
    }
    else{
      throw new Error('Internal Error')
    }

})


export {createEvent}


