import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const viewPhotographyPackagesModel = asyncHandler(
    async (

    ) => {
        const viewPackageQuery = `SELECT * FROM public.photographypackage`
        const packageDetail = await query(viewPackageQuery, [])
        // console.log(packageDetail)
        return packageDetail

    }
)

const viewPhotographyPackageDetails = asyncHandler(
    async (
        package_id
    ) => {
        try {
            const viewPackageQuery = `SELECT * FROM public.photographypackage WHERE package_id=$1`
            const packageDetail = await query(viewPackageQuery, [package_id])
            // console.log(packageDetail)
            console.log(packageDetail)
            return packageDetail

        } catch (error) {
            throw new Error(error)
        }
    }
)

const viewPhotoPackageDetailsUserId =asyncHandler(
    async(
        user_id
    )=>{
        try {
            const viewPackageQuery = `SELECT * FROM public.photographypackage WHERE userid=$1`
            const packageDetail = await query(viewPackageQuery, [user_id])
            // console.log(packageDetail)
            return packageDetail

        } catch (error) {
            throw new Error(error)
        }

})


export { viewPhotographyPackagesModel, viewPhotographyPackageDetails,viewPhotoPackageDetailsUserId }