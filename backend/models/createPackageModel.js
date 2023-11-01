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
        packageBusName,
        packageTitle,
        packageAddress,
        packageContact,
        packageDescription,
        packagePrice,
        packageImage,
        createdate,
        packageOpTitle,
        packageOpDescription,
        packageOpMaxCount,
        packageOparea,
        packageOpType,
        
    )=>{
        // const packageid //random id concat with the type
    const packageId = generateRandomId("Venue");
    const createUserQuery = `INSERT INTO venuepackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, package_op_title, package_op_des, package_op_count, package_op_area, package_op_type) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING userid`
    const createUser = await query(createUserQuery, [
      userId,
      packageId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
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

const photographyPackage = asyncHandler(
    async(
        userId,
        packageBusName,
        packageTitle,
        packageAddress,
        packageContact,
        packageDescription,
        packagePrice,
        packageImage,
        createdate,
        packageTools,
        packageFormat,

    )=>{
    const packageId = generateRandomId("Photography");
    const createUserQuery = `INSERT INTO photographypackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, package_tools, package_format) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING userid`
    const createUser = await query(createUserQuery, [
      userId,
      packageId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageTools,
      packageFormat,
     
    ])
    
    if(createUser.rowCount>0){
      console.log('package model',createUser);
      return createUser.rows
    }
    else{
      throw new Error('Internal Error')
    }

})

const decorationPackage = asyncHandler(
  async(
      userId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageDecoElements,

  )=>{
  const packageId = generateRandomId("Decoration");
  const createUserQuery = `INSERT INTO decorationpackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, package_decoelements) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING userid`
  const createUser = await query(createUserQuery, [
    userId,
    packageId,
    packageBusName,
    packageTitle,
    packageAddress,
    packageContact,
    packageDescription,
    packagePrice,
    packageImage,
    createdate,
    packageDecoElements,
   
  ])
  
  if(createUser.rowCount>0){
    console.log('package model',createUser);
    return createUser.rows
  }
  else{
    throw new Error('Internal Error')
  }

})

const cateringPackage = asyncHandler(
  async(
      userId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageMenu,

  )=>{
  const packageId = generateRandomId("Catering");
  const createUserQuery = `INSERT INTO cateringpackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, package_menu) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING userid`
  const createUser = await query(createUserQuery, [
    userId,
    packageId,
    packageBusName,
    packageTitle,
    packageAddress,
    packageContact,
    packageDescription,
    packagePrice,
    packageImage,
    createdate,
    packageMenu,
   
  ])
  
  if(createUser.rowCount>0){
    console.log('package model',createUser);
    return createUser.rows
  }
  else{
    throw new Error('Internal Error')
  }

})

const cakePackage = asyncHandler(
  async(
      userId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageServingSize,
      packageCakeShape,
      packageAllergy,

  )=>{
  const packageId = generateRandomId("Cake");
  const createUserQuery = `INSERT INTO cakepackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, serving_size, cake_shape, allergy) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING userid`
  const createUser = await query(createUserQuery, [
    userId,
    packageId,
    packageBusName,
    packageTitle,
    packageAddress,
    packageContact,
    packageDescription,
    packagePrice,
    packageImage,
    createdate,
    packageServingSize,
    packageCakeShape,
    packageAllergy,

  ])
  
  if(createUser.rowCount>0){
    console.log('package model',createUser);
    return createUser.rows
  }
  else{
    throw new Error('Internal Error')
  }

})

const lightsSoundPackage = asyncHandler(
  async(
      userId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageSoundSource,
      packageLights,

  )=>{
  const packageId = generateRandomId("LightsANDSounds");
  const createUserQuery = `INSERT INTO lightsandsoundspackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, sound_source, package_lights) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING userid`
  const createUser = await query(createUserQuery, [
    userId,
    packageId,
    packageBusName,
    packageTitle,
    packageAddress,
    packageContact,
    packageDescription,
    packagePrice,
    packageImage,
    createdate,
    packageSoundSource,
    packageLights,
   
  ])
  
  if(createUser.rowCount>0){
    console.log('package model',createUser);
    return createUser.rows
  }
  else{
    throw new Error('Internal Error')
  }
})

const stagePackage = asyncHandler(
  async(
      userId,
      packageBusName,
      packageTitle,
      packageAddress,
      packageContact,
      packageDescription,
      packagePrice,
      packageImage,
      createdate,
      packageStageType,
      packageStageSize,
      packageStageHeight,

  )=>{
  const packageId = generateRandomId("StageRental");
  const createUserQuery = `INSERT INTO stagerentalpackage(userid, package_id, package_busname, package_title, package_address, package_contact, package_description, package_price, sp_images, createdate, stage_type, stage_size, stage_height) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING userid`
  const createUser = await query(createUserQuery, [
    userId,
    packageId,
    packageBusName,
    packageTitle,
    packageAddress,
    packageContact,
    packageDescription,
    packagePrice,
    packageImage,
    createdate,
    packageStageType,
    packageStageSize,
    packageStageHeight,
   
  ])
  
  if(createUser.rowCount>0){
    console.log('package model',createUser);
    return createUser.rows
  }
  else{
    throw new Error('Internal Error')
  }

})

export {venuePackage, 
  photographyPackage, 
  decorationPackage,
  cateringPackage,
  cakePackage,
  lightsSoundPackage,
  stagePackage
}
