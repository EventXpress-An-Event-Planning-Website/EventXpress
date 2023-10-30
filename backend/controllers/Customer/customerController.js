import asyncHandler from 'express-async-handler'
import path from 'path'
import { insertNotification } from '../../models/customer_notificationModel.js';


const sendRequest = asyncHandler(async(req,res)=>{
    const requ= await insertNotification(req.body)
    res.json(requ);
})


export{sendRequest}

