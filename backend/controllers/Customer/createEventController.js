import asyncHandler from 'express-async-handler'
import path from 'path'
import { createEvent } from '../../models/eventModel.js'




const createevent = asyncHandler(async(req,res)=>{

    let event=''
    const {
        userId,
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType

    }=req.body
    event= await createEvent(
        userId,
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
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
    

    
})

export {
    createevent
}