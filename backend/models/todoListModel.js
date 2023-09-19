import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'



const isSelectedPackage = asyncHandler(
    async(
        event_id,
        package_id,
        service

    )=> {
        const viewPackageQuery = `SELECT * FROM todolist WHERE event_id=$1 AND todo_service=$2 AND selected_package_id=$3 `
        const packageDetail = await query(viewPackageQuery, [event_id,service,package_id])
        if (packageDetail.rowCount===0) {
            return false
        }else{
            return true
        }
        // console.log(packageDetail)
        

    }
)

const addPackageToEvent =asyncHandler(
    async(
        event_id,
        package_id,
        service
    )=>{
        try {
            console.log(event_id);
            const viewPackageQuery = `UPDATE todolist SET selected_package_id=$1 WHERE event_id=$2 AND todo_service=$3`
            const packageDetail = await query(viewPackageQuery, [package_id,event_id,service])
            // console.log(packageDetail)
            
            
        } catch (error) {
            throw new Error(error)
        }
    }
)

const getpackage=asyncHandler(async(package_id)=>{

  console.log(package_id);
    try {
        const serviceArry = package_id.split('_');
        const service = serviceArry[0].toLowerCase();
        const getTodoQuery = `SELECT * FROM ${service}package WHERE package_id=$1`
        const pack= await query(getTodoQuery,[package_id])
        return pack.rows
    } catch (error) {
        
    }
})





export {isSelectedPackage,addPackageToEvent,getpackage}