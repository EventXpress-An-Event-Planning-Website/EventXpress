import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

const getBusyUser = asyncHandler(
    async(
        date
    )=> {
        const viewBusyUserQuery = `SELECT * FROM public.busy_dates where busy_date=$1`
        const busy_user = await query(viewBusyUserQuery, [date])
        // console.log(packageDetail)
        return busy_user

    }
)

export {getBusyUser}