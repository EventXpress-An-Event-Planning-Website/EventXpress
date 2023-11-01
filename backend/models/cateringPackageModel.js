import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const viewCateringPackagesModel = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.cateringpackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewCateringPackageDetails =asyncHandler(
    async(
        package_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.cateringpackage WHERE package_id=$1`
            const packageDetail = await query(viewPackageQuery, [package_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

const viewCateringPackageDetailsUserId =asyncHandler(
    async(
        user_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.cateringpackage WHERE userid=$1`
            const packageDetail = await query(viewPackageQuery, [user_id])
            // console.log(packageDetail)
            return packageDetail
            
        } catch (error) {
            throw new Error(error)
        }

})


export {viewCateringPackagesModel,viewCateringPackageDetails,viewCateringPackageDetailsUserId}