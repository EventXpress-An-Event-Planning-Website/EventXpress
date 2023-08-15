import asyncHandler from 'express-async-handler'
import path from 'path'
import {viewVenuePackagesModel} from '../../models/venuePackageModel.js'


const viewVenuePackage = asyncHandler(async(req, res)=>{

    const pack = await viewVenuePackagesModel()
    console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

export {viewVenuePackage} 