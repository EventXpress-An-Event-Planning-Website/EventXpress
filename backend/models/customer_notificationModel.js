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

const insertNotification=asyncHandler(async(body)=>{
    
    try {
        const status='Pending'
        const insertNotificationQuery = `INSERT INTO customer_notification(event_id, user_id, package_id, send_user_id, status, service) Values($1,$2,$3,$4,$5,$6) RETURNING notify_id `
        const notification = await query(insertNotificationQuery,[body.event_id,body.send_id,body.package_id,body.user_id,status,body.service])
        return notification
        
    } catch (error) {
        throw new Error(error)
    }

})


export {getNotificationByEventAndPackage,deleteNotificationByEventAndPackage,insertNotification}

