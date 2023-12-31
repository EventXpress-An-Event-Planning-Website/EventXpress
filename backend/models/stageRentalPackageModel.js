import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const viewStageRentalPackagesModel = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.stagerentalpackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewStageRentalPackageDetails =asyncHandler(
    async(
        package_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.stagerentalpackage WHERE package_id=$1`
            const packageDetail = await query(viewPackageQuery, [package_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

// const viewVenuePackageDetailsUserId =asyncHandler(
//     async(
//         user_id
//     )=>{
//         try {
//             const viewPackageQuery = `SELECT * FROM public.venuepackage WHERE userid=$1`
//             const packageDetail = await query(viewPackageQuery, [user_id])
//             // console.log(packageDetail)
//             return packageDetail
            
//         } catch (error) {
//             throw new Error(error)
//         }

// })


export {viewStageRentalPackagesModel,viewStageRentalPackageDetails}