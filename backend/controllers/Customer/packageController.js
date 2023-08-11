import asyncHandler from 'express-async-handler'
import path from 'path'
import { viewPackages } from '../../models/venuePackageModel.js'


const viewPackage = asyncHandler(async(req, res)=>{

    const pack = await viewPackages()
    console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

export {viewPackage} 