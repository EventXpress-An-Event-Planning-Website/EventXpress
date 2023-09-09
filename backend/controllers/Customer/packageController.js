import asyncHandler from 'express-async-handler'
import path from 'path'
import {viewVenuePackagesModel,viewVenuePackageDetailsUserId} from '../../models/venuePackageModel.js'
import { getNoOfComparepackages,insertPackageToCompare,getComparePack,getComparePackCount,updatePackageToCompare } from '../../models/compareServicesModel.js'
import { viewCakePackagesModel,viewCakePackageDetails } from '../../models/cakePackageModel.js'
// import Venue from '../../../frontend/src/components/Cus/Pages/Venue.jsx'


const viewVenuePackage = asyncHandler(async(req, res)=>{
    const pack = await viewVenuePackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewVenuePackageDetails=asyncHandler(async(req,res)=>{
    console.log('Kalana');
    // console.log(req);
    const user_id=req.query.uid;

    console.log(user_id);
    const pack = await viewVenuePackageDetailsUserId(user_id)
    res.json(pack.rows)

})

const addVenuePack = asyncHandler(async(req,res)=>{
    console.log(req.body);
    res.json(true)
})

const addVenuePackToCompare = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const service = 'Venue'

    const noOfPack = await getNoOfComparepackages(event_id,service)
    const rowCount=noOfPack.rowCount;
    const column_id=rowCount+1
    const addCopmarePackage = await insertPackageToCompare(event_id,service,package_id,column_id)
    console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)


})

const getPackageCount = asyncHandler(async(req,res)=>{

    const event_id=Number(req.query.event_id);
    console.log(event_id);
    const service=req.query.service
    console.log(service);
    const noOfPack = await getNoOfComparepackages(event_id,service)
    const rowCount=noOfPack.rowCount;
    console.log(rowCount);
    res.json(rowCount);


})

const getComparePackage = asyncHandler(async(req,res)=>{
    const event_id=Number(req.query.event_id);
    const service ='venue'
    const service1 = 'Venue'

    const packages= await getComparePack(event_id,service,service1)
    console.log(packages);
    res.json(packages)
})

const addPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'Venue'
    console.log(pack);
    
    const count = await getComparePackCount(event_id,column_id,service)
    console.log(count);
    if (count===0) {
        const pack = await insertPackageToCompare(event_id,service,package_id,column_id)
        res.json(pack.rows[0].column_id)
    }else{
        const pack = await updatePackageToCompare(event_id,service,package_id,column_id)
        res.json(pack.rows[0].column_id)
    }


    


})

const viewCakePackage = asyncHandler(async(req, res)=>{
    const pack = await viewCakePackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewCakesPackageDetails=asyncHandler(async(req,res)=>{
  
    // console.log(req);
    const package_id=req.query.pac;
 

   
    const pack = await viewCakePackageDetails(package_id)
    console.log(pack.rows);
    res.json(pack.rows)

})

const addCakePackToCompare = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const service = 'Cake'

    const noOfPack = await getNoOfComparepackages(event_id,service)
    const rowCount=noOfPack.rowCount;
    const column_id=rowCount+1
    const addCopmarePackage = await insertPackageToCompare(event_id,service,package_id,column_id)
    console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)


})

const getCompareCakePackage = asyncHandler(async(req,res)=>{
    const event_id=Number(req.query.event_id);
    const service ='cake'
    const service1 = 'Cake'

    const packages= await getComparePack(event_id,service,service1)
    console.log(packages);
    res.json(packages)
})

const addCakePackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'Cake'
    console.log(pack);
    
    const count = await getComparePackCount(event_id,column_id,service)
    console.log(count);
    if (count===0) {
        const pack = await insertPackageToCompare(event_id,service,package_id,column_id)
        res.json(pack.rows[0].column_id)
    }else{
        const pack = await updatePackageToCompare(event_id,service,package_id,column_id)
        res.json(pack.rows[0].column_id)
    }


    


})

export {viewVenuePackage, viewVenuePackageDetails,addVenuePack,addVenuePackToCompare,getPackageCount,getComparePackage,addPackageToCompareTable,viewCakePackage,viewCakesPackageDetails,addCakePackToCompare,getCompareCakePackage,addCakePackageToCompareTable  } 