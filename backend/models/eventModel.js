import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'


const createEvent = asyncHandler(
    async(

        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType
    )=>{
    const createUserQuery = `INSERT INTO customer(name, email, nic, nicImage, profileImage, location, contactNo, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, name, email`
    const createUser = await query(createUserQuery, [
      eventName,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventType,
     
    ])

})