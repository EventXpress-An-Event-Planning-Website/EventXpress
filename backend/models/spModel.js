import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'


const getSPprofileDetails = asyncHandler(
    async(userId)=>{
      
      const viewServiceProviderDetails = `SELECT * FROM serviceprovider WHERE id=$1`
      const SPProfileData = await query(viewServiceProviderDetails,[userId])
      
      if (SPProfileData.rowCount > 0) {
        return SPProfileData.rows[0]
      } else {
        throw new Error('Internal Error')
      }

    }
)

const getSPCakePackDetails = asyncHandler(
  async()=>{
    
    const viewServiceProviderCakeDetails = `SELECT * FROM cakepackage`
    const SPCakeData = await query(viewServiceProviderCakeDetails,[])
    
    if (SPCakeData.rowCount > 0) {
      return SPCakeData.rows
    } else {
      throw new Error('Internal Error')
    }

  }
)

const getAllNotification = asyncHandler(
  async()=>{
    
    const getAllNotificationsQuery = `SELECT * FROM customer_notification`
    const getAllNotifications = await query(getAllNotificationsQuery,[])
    
    if (getAllNotifications.rowCount > 0) {
      return getAllNotifications.rows
    } else {
      throw new Error('Internal Error')
    }

  }
)

const acceptedNotification = asyncHandler(
  async(notifyId)=>{
    
    const updateStatusQuery = `
    UPDATE customer_notification
    SET status = 'accept'
    WHERE notify_id = $1
    RETURNING *`;
    
  const updatedNotification = await query(updateStatusQuery, [notifyId]);

  if (updatedNotification.rowCount > 0) {
    return updatedNotification.rows[0];
  } else {
    throw new Error('Notification not found or could not be updated.');
  }

  }
)

const declinedNotification = asyncHandler(
  async(notifyId)=>{
    
    const updateStatusQuery = `
    UPDATE customer_notification
    SET status = 'decline'
    WHERE notify_id = $1
    RETURNING *`;
    
  const updatedNotification = await query(updateStatusQuery, [notifyId]);

  if (updatedNotification.rowCount > 0) {
    return updatedNotification.rows[0];
  } else {
    throw new Error('Notification not found or could not be updated.');
  }

  }
)

const getAllBusyDates = asyncHandler(
  async(userId)=>{
    // console.log("im there",userId);
    const dateQuery = `SELECT busy_date FROM busy_dates where user_id=$1`
    const response = await query(dateQuery,[userId])
    // console.log(response.rows);
    if (response.rowCount > 0) {
      return response.rows
    } else {
      throw new Error('Internal Error')
    }

  }
)

const setAllBusyDates = asyncHandler(
  async(userId,date)=>{
    const dateQuery = `INSERT INTO busy_dates (user_id, busy_date)
    VALUES ($1,$2)`
    const response = await query(dateQuery,[userId,date])
    // console.log(response.rows);
    if (response.rowCount > 0) {
      return response.rows
    } else {
      throw new Error('Internal Error')
    }

  }
)

export { getSPprofileDetails,getSPCakePackDetails, getAllNotification, acceptedNotification, declinedNotification, getAllBusyDates,setAllBusyDates }