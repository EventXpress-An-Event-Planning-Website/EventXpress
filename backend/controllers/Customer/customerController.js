import asyncHandler from 'express-async-handler'
import path from 'path'


const sendRequest = asyncHandler(async(req,res)=>{
    console.log(req.body);
    

})


export{sendRequest}

