import asyncHandler from 'express-async-handler'
// import path from 'path'
import { venuePackage } from '../../models/createPackageModel.js'
import { photographyPackage } from '../../models/createPackageModel.js'
import { decorationPackage } from '../../models/createPackageModel.js'
import { cateringPackage } from '../../models/createPackageModel.js'
import { cakePackage } from '../../models/createPackageModel.js'
import { lightsSoundPackage } from '../../models/createPackageModel.js'
import { stagePackage } from '../../models/createPackageModel.js'
import { viewVenuePackageDetailsUserId } from '../../models/venuePackageModel.js'
import { viewCakePackageDetailsUserId } from '../../models/cakePackageModel.js'
import { viewDecorationPackageDetailsUserId } from '../../models/decorationPackageModel.js'
import { viewCateringPackageDetailsUserId } from '../../models/cateringPackageModel.js'
import { viewPhotoPackageDetailsUserId } from '../../models/photographyPackageModel.js'
import { viewSoundPackageDetailsUserId } from '../../models/soundAndLightPackageModel.js'
import { createPredefinePackage } from '../../models/preDefinedPackageModel.js'

const createpackage = asyncHandler(async(req,res)=>{

    let packages=''
    const {
        userId,
        packageBusName,
        packageTitle,
        packageAddress,
        packageContact,
        packageDescription,
        packagePrice,
        packageType,
        packageImage,
        packageOpTitle,
        packageOpDescription,
        packageOpMaxCount,
        packageOparea,
        packageOpType,
        packageTools,
        packageFormat,
        packageDecoElements,
        packageMenu,
        packageSoundSource,
        packageLights,
        packageStageType,
        packageStageSize,
        packageStageHeight,
        packageServingSize,
        packageCakeShape,
        packageAllergy,

    }=req.body

    const createdate = new Date();

    if (packageType==="Venue") {

        packages= await venuePackage(
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
            packageOpType
        )
        if (packages) {
          res.status(201).json({
            id: packages.id
          })
        } else {
          res.status(400)
          throw new Error('Invalid user data')
        }
        
        
    } else if (packageType==="Photography") {
        packages= await photographyPackage(
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
        )
        if (packages) {
            res.status(201).json({
              id: packages.id
            })
          } else {
            res.status(400)
            throw new Error('Invalid user data')
          }

    } else if (packageType==="Decoration") {
      packages= await decorationPackage(
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageContact,
          packageDescription,
          packagePrice,
          packageImage,
          createdate,
          packageDecoElements
      )
      if (packages) {
          res.status(201).json({
            id: packages.id
          })
      } else {
          res.status(400)
          throw new Error('Invalid user data')
      }
    } else if (packageType==="Catering") {
      packages= await cateringPackage(
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
      )
      if (packages) {
          res.status(201).json({
            id: packages.id
          })
      } else {
          res.status(400)
          throw new Error('Invalid user data')
      }

    } else if (packageType==="Cake") {
      packages= await cakePackage(
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
      )
      if (packages) {
          res.status(201).json({
            id: packages.id
          })
      } else {
          res.status(400)
          throw new Error('Invalid user data')
      }
    } else if (packageType==="LightsANDSounds") {
      packages= await lightsSoundPackage(
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
      )
      if (packages) {
          res.status(201).json({
            id: packages.id
          })
      } else {
          res.status(400)
          throw new Error('Invalid user data')
      }

    } else if (packageType==="Stage") {
      packages= await stagePackage(
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
      )
      if (packages) {
          res.status(201).json({
            id: packages.id
          })
      } else {
          res.status(400)
          throw new Error('Invalid user data')
      }

    }
    
})

const createPredefine = asyncHandler(async(req,res)=>{
  
  const result = await createPredefinePackage(req.body);
  console.log(result);
  res.json(result.rowCount)

})

const getsloePackages = asyncHandler(async(req,res)=>{
  
  const user_id = req.query.id
  const venuePackage = (await viewVenuePackageDetailsUserId(user_id)).rows
  const cakePackage= (await viewCakePackageDetailsUserId(user_id)).rows
  const decoPackage = (await viewDecorationPackageDetailsUserId(user_id)).rows
  const cateringPackage = (await viewCateringPackageDetailsUserId(user_id)).rows
  const photography = (await viewPhotoPackageDetailsUserId(user_id)).rows
  const sound =(await viewSoundPackageDetailsUserId(user_id)).rows

  const allPackages = {
    venue: venuePackage,
    cake: cakePackage,
    decoration: decoPackage,
    catering: cateringPackage,
    photography: photography,
    sound: sound
  };
  res.json(allPackages)
  

})

export {
    createpackage,createPredefine,getsloePackages
}



