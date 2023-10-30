import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const viewDecorationPackagesModel = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.decorationpackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewDecorationPackageDetails =asyncHandler(
    async(
        package_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.decorationpackage WHERE package_id=$1`
            const packageDetail = await query(viewPackageQuery, [package_id])
            console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

const viewDecorationPackageDetailsUserId =asyncHandler(
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


export {viewDecorationPackagesModel,viewDecorationPackageDetails,viewDecorationPackageDetailsUserId}