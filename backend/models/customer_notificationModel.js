import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const getNotificationByEventAndPackage=asyncHandler(async(service,event_id)=>{

    try {
        const getNotificationQuery = `Select * From customer_notification WHERE event_id=$1 AND service=$2`
        const notification = await query(getNotificationQuery,[event_id,service])
        return notification.rows
        
    } catch (error) {
        throw new Error(error)
    }

})

const deleteNotificationByEventAndPackage=asyncHandler(async(service,event_id)=>{

    try {
        const getNotificationQuery = `Delete From customer_notification WHERE event_id=$1 AND service=$2`
        const notification = await query(getNotificationQuery,[event_id,service])
        return true
        
    } catch (error) {
        throw new Error(error)
    }

})


export {getNotificationByEventAndPackage,deleteNotificationByEventAndPackage}

