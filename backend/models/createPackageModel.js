import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

const generateRandomId  = (packageType) => {
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${packageType}_${randomNumber}`;
};

const venuePackage = asyncHandler(
    async(
        userId,
        packageTitle,
        packageLocation,
        packageAddress,
        packageDescription,
        packagePrice,
        packageImage,
        packageOpTitle,
        packageOpDescription,
        packageOpMaxCount,
        packageOparea,
        packageOpType
        
    )=>{
        // const packageid //random id concat with the type
    const packageId = generateRandomId("Venue");
    const createUserQuery = `INSERT INTO venuepackage(userid, package_id, package_title, package_location, package_address, package_description, package_price, sp_images, package_op_title, package_op_des, package_op_count, package_op_area, package_op_type) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING userid`
    const createUser = await query(createUserQuery, [
      userId,
      packageId,
      packageTitle,
      packageLocation,
      packageAddress,
      packageDescription,
      packagePrice,
      packageImage,
      packageOpTitle,
      packageOpDescription,
      packageOpMaxCount,
      packageOparea,
      packageOpType
    ])
    
    if(createUser.rowCount>0){
      console.log('package model',createUser);
      return createUser.rows
    }
    else{
      throw new Error('Internal Error')
    }

})

const otherPackage = asyncHandler(
    async(
        userId,
        packageTitle,
        packageLocation,
        packageAddress,
        packageDescription,
        packagePrice,
        packageImage,
        packageType,

    )=>{
    const packageId = generateRandomId(packageType);
    const createUserQuery = `INSERT INTO ${packageType}package(userid, package_id, package_title, package_location, package_address, package_description, package_price, sp_images) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid`
    const createUser = await query(createUserQuery, [
      userId,
      packageId,
      packageTitle,
      packageLocation,
      packageAddress,
      packageDescription,
      packagePrice,
      packageImage
     
    ])
    
    if(createUser.rowCount>0){
      console.log('package model',createUser);
      return createUser.rows
    }
    else{
      throw new Error('Internal Error')
    }

})


export {venuePackage, otherPackage}