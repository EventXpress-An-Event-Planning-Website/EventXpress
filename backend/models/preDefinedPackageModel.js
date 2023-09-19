import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

const getPreDefinedPackage = asyncHandler(async(event_type)=>{
    try {
        const preDefinedPckgQuery = `SELECT * FROM predefinedpackage WHERE prepackage_type=$1`;
        const result = await query(preDefinedPckgQuery,[event_type]);
        // console.log(result);
        return result.rows;
    } catch (error) {
        
    }
})

const getPreDefinedPackageDetails = asyncHandler(async(package_id)=>{
    try {
        const preDefinedPckgQuery = `SELECT * FROM predefinedpackage WHERE predefined_id=$1`;
        const result = await query(preDefinedPckgQuery,[package_id]);
        // console.log(result);
        return result.rows;
    } catch (error) {
        
    }
})

const getPreDefinedPackageInfo = asyncHandler(async(package_id)=>{
    try {
        const preDefinedPckgQuery = `SELECT * FROM predefinedpackage INNER JOIN serviceprovider ON predefinedpackage.userid=serviceprovider.id WHERE predefined_id=$1`;
        const result = await query(preDefinedPckgQuery,[package_id]);
        // console.log(result);
        return result.rows;
    } catch (error) {
        
    }
})

export {getPreDefinedPackage,getPreDefinedPackageDetails,getPreDefinedPackageInfo}