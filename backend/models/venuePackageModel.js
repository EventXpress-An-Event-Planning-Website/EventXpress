import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const viewVenuePackagesModel = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.venuepackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewVenuPackageDetails =asyncHandler(
    async(
        package_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.venuepackage WHERE package_id=${package_id}`
            const packageDetail = await query(viewPackageQuery, [])
            console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

const viewVenuePackageDetailsUserId =asyncHandler(
    async(
        user_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.venuepackage WHERE userid=$1`
            const packageDetail = await query(viewPackageQuery, [user_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }

})


export {viewVenuePackagesModel,viewVenuPackageDetails,viewVenuePackageDetailsUserId}