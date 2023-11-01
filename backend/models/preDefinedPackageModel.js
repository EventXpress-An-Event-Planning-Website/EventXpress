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

const createPredefinePackage = asyncHandler(async(body)=>{

    try {
        console.log(body);
        const img='1.jpg'
        const user_id=body.user_id
        const package_name=body.packageName
        const Packagedes =body.packageDescription
        const pacType = body.packageType
        const venue = body.venuePackage
        const catering = body.cateringPackage
        const deco = body.decorationPackage
        const photo = body.photoPackage
        const sound = body.soundPackage
        const cake = body.cakePackage
        const presentage =Number(body.presentage)
        const preDefinedPckgQuery = `INSERT INTO public.predefinedpackage(userid, venue_id, catering_id, cake_id, deco_id,soundandlight_id, photography_id, pckg_img, prepackage_type, prepackage_title, prepackage_description, prepackage_discount) VALUES ($1,$2,$3,$4, $5, $6, $7, $8, $9, $10, $11, $12);`;
        const result = await query(preDefinedPckgQuery,[user_id,venue,catering,cake,deco,sound,photo,img,pacType,package_name,Packagedes,presentage]);
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }

})

export {getPreDefinedPackage,getPreDefinedPackageDetails,getPreDefinedPackageInfo,createPredefinePackage}