import asyncHandler from 'express-async-handler'
import path from 'path'




const createEvent = asyncHandler(async(req,res)=>{

    const {
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType

    }=req.body

    
})