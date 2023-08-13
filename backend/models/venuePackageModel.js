import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

const viewPackages = asyncHandler(
    async(

    )=> {
        const viewPackageQuery = `SELECT * FROM public.venuepackage`
        const packageDetail = await query(viewPackageQuery, [])
        console.log(packageDetail)
        return packageDetail

    }
)


export {viewPackages}