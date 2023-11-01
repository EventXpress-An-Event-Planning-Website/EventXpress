import asyncHandler from 'express-async-handler'
import path from 'path'
import { insertNotification,CheckStatus } from '../../models/customer_notificationModel.js';
// import Venue from '../../../frontend/src/components/Cus/Pages/Venue.jsx';


const sendRequest = asyncHandler(async(req,res)=>{
    const requ= await insertNotification(req.body)
    res.json(requ);
})

const checkVenueStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'Venue'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
    
   
})

const checkCakeStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'Cakes'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
   
})

const checkCateringStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'Catering'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
   
})

const checkPhotoStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'Photography'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
   
})

const checkDecoStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'Decoration'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
   
})


const checkSoundAndLightStatus = asyncHandler(async(req,res)=>{
    const event_id=req.query.event_id
    const service= 'SoundAndLight'
    const check= await CheckStatus(event_id,service)
    if(check.length !=0){
        if (check[0].status==='Accept') {
            const rep=false
            res.json(rep)
        }else{
            const rep=true
            res.json(rep)
        }

    }
    else{
        const rep=true
        res.json(rep)
    }
   
})

export{sendRequest,checkVenueStatus,checkCakeStatus,checkCateringStatus,checkPhotoStatus,checkDecoStatus,checkSoundAndLightStatus }

