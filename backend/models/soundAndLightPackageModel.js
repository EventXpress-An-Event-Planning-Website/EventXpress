import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

const viewSoundAndLightPackagesModel = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.lightsandsoundspackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewSoundAndLightPackageDetails =asyncHandler(
    async(
        package_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.lightsandsoundspackage WHERE package_id=$1`
            const packageDetail = await query(viewPackageQuery, [package_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

const viewSoundPackageDetailsUserId =asyncHandler(
    async(
        user_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.lightsandsoundspackage WHERE userid=$1`
            const packageDetail = await query(viewPackageQuery, [user_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }

})


export {viewSoundAndLightPackagesModel,viewSoundAndLightPackageDetails,viewSoundPackageDetailsUserId}