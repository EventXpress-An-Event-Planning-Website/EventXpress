import asyncHandler from 'express-async-handler'
import path from 'path'
import {viewVenuePackagesModel,viewVenuePackageDetailsUserId,viewVenuPackageDetails} from '../../models/venuePackageModel.js'
import { getNoOfComparepackages,insertPackageToCompare,getComparePack,getComparePackCount,updatePackageToCompare } from '../../models/compareServicesModel.js'
import { viewCakePackagesModel,viewCakePackageDetails } from '../../models/cakePackageModel.js'
import { viewDecorationPackagesModel, viewDecorationPackageDetails } from '../../models/decorationPackageModel.js'
import { viewCateringPackagesModel, viewCateringPackageDetails } from '../../models/cateringPackageModel.js'
import { viewPhotographyPackagesModel, viewPhotographyPackageDetails } from '../../models/photographyPackageModel.js'
import { viewSoundAndLightPackagesModel, viewSoundAndLightPackageDetails } from '../../models/soundAndLightPackageModel.js'
import { viewStageRentalPackagesModel, viewStageRentalPackageDetails } from '../../models/stageRentalPackageModel.js'
import { isSelectedPackage,addPackageToEvent } from '../../models/todoListModel.js'
import { getNotificationByEventAndPackage,deleteNotificationByEventAndPackage } from '../../models/customer_notificationModel.js'
import { getPreDefinedPackage,getPreDefinedPackageDetails,getPreDefinedPackageInfo } from '../../models/preDefinedPackageModel.js'

// import Venue from '../../../frontend/src/components/Cus/Pages/Venue.jsx'

const viewVenuePackage = asyncHandler(async (req, res) => {
    const pack = await viewVenuePackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewVenuePackageDetails = asyncHandler(async (req, res) => {
    // console.log('Kalana');
    // console.log(req);
    const user_id = req.query.uid;

    console.log(user_id);
    const pack = await viewVenuePackageDetailsUserId(user_id)
    res.json(pack.rows)

})

const addVenuePack = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.json(true)
})

const addVenuePackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'Venue'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)


})

const getPackageCount = asyncHandler(async (req, res) => {

    const event_id = Number(req.query.event_id);
    console.log(event_id);
    const service = req.query.service
    console.log(service);
    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    console.log(rowCount);
    res.json(rowCount);


})

const getComparePackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'venue'
    const service1 = 'Venue'

    const packages = await getComparePack(event_id, service, service1)
    console.log(packages);
    res.json(packages)
})

const addPackageToCompareTable = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const column_id = pack.column_id
    const service = 'Venue'
    console.log(pack);

    const count = await getComparePackCount(event_id, column_id, service)
    console.log(count);
    if (count === 0) {
        const pack = await insertPackageToCompare(event_id, service, package_id, column_id)
        res.json(pack.rows[0].column_id)
    }else{
        const pack = await updatePackageToCompare(event_id,service,package_id,column_id)
        res.json(pack.rows[0].column_id)
    }





})

const viewCakePackage = asyncHandler(async (req, res) => {
    const pack = await viewCakePackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewCakesPackageDetails = asyncHandler(async (req, res) => {

    // console.log(req);
    const package_id = req.query.pac;



    const pack = await viewCakePackageDetails(package_id)
    console.log(pack.rows);
    res.json(pack.rows)

})

const viewCateringPackage = asyncHandler(async (req, res) => {
    const pack = await viewCateringPackagesModel()
    // console.log(pack.rows)
    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewCateringsPackageDetails = asyncHandler(async (req, res) => {
    // console.log(req);
    const package_id = req.query.pac;

    const pack = await viewCateringPackageDetails(package_id)
    console.log(pack.rows);
    res.json(pack.rows)

})

const viewPhotographyPackage = asyncHandler(async (req, res) => {
    const pack = await viewPhotographyPackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewPhotographiesPackageDetails = asyncHandler(async (req, res) => {

    // console.log(req);
    const package_id = req.query.pac;

    const pack = await viewPhotographyPackageDetails(package_id)
    // console.log(pack.rows);
    res.json(pack.rows)

})

const viewSoundAndLightPackage = asyncHandler(async (req, res) => {
    const pack = await viewSoundAndLightPackagesModel()
    // console.log(pack.rows)
    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewSoundAndLightsPackageDetails = asyncHandler(async (req, res) => {
    // console.log(req);
    const package_id = req.query.pac;

    const pack = await viewSoundAndLightPackageDetails(package_id)
    // console.log(pack.rows);
    res.json(pack.rows)

})

const viewStageRentalPackage = asyncHandler(async (req, res) => {
    const pack = await viewStageRentalPackagesModel()
    // console.log(pack.rows)
    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)

const viewStageRentalsPackageDetails = asyncHandler(async (req, res) => {
    // console.log(req);
    const package_id = req.query.pac;

    const pack = await viewStageRentalPackageDetails(package_id)
    // console.log(pack.rows);
    res.json(pack.rows)

})

const addCakePackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'Cake'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)


})

const getCompareCakePackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'cake'
    const service1 = 'Cake'

    const packages = await getComparePack(event_id, service, service1)
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

const viewdecoPackage = asyncHandler(async(req, res)=>{
    const pack = await viewDecorationPackagesModel()
    // console.log(pack.rows)

    // const array = [{id:1}, {id:2}]
    res.json(pack.rows)
}
)
const viewDecoPackageDetails=asyncHandler(async(req,res)=>{
  
    // console.log(req);
    const package_id=req.query.pac;
 

   
    const pack = await viewDecorationPackageDetails(package_id)
    console.log(pack.rows);
    res.json(pack.rows)

})

const addDecoPackToCompare = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const service = 'Decoration'

    const noOfPack = await getNoOfComparepackages(event_id,service)
    const rowCount=noOfPack.rowCount;
    const column_id=rowCount+1
    const addCopmarePackage = await insertPackageToCompare(event_id,service,package_id,column_id)
    console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)


})

const addDecoPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'Decoration'
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

const getCompareDecoPackage = asyncHandler(async(req,res)=>{
    const event_id=Number(req.query.event_id);
    const service ='decoration'
    const service1 = 'Decoration'

    const packages= await getComparePack(event_id,service,service1)
    console.log(packages);
    res.json(packages)
})

 
const addPhotographyPackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'Photography'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)
})

const getComparePhotographyPackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'Photography'
    const service1 = 'Photography'

    const packages = await getComparePack(event_id, service, service1)
    // console.log(packages);
    res.json(packages)
})

const addCateringPackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'Catering'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)
})

const getCompareCateringPackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'Catering'
    const service1 = 'Catering'

    const packages = await getComparePack(event_id, service, service1)
    // console.log(packages);
    res.json(packages)
})

const addSoundAndLightPackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'SoundAndLight'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)
})

const getCompareSoundAndLightPackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'lightsandsounds'
    const service1 = 'SoundAndLight'

    const packages = await getComparePack(event_id, service, service1)
    // console.log(packages);
    res.json(packages)
})

const addStageRentalPackToCompare = asyncHandler(async (req, res) => {
    const pack = req.body
    const event_id = pack.event_id
    const package_id = pack.package_id
    const service = 'StageRental'

    const noOfPack = await getNoOfComparepackages(event_id, service)
    const rowCount = noOfPack.rowCount;
    const column_id = rowCount + 1
    const addCopmarePackage = await insertPackageToCompare(event_id, service, package_id, column_id)
    // console.log(addCopmarePackage.rows[0].column_id);
    res.json(addCopmarePackage.rows[0].column_id)
})

const getCompareStageRentalPackage = asyncHandler(async (req, res) => {
    const event_id = Number(req.query.event_id);
    const service = 'StageRental'
    const service1 = 'StageRental'

    const packages = await getComparePack(event_id, service, service1)
    // console.log(packages);
    res.json(packages)
})


const addCateringPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'Catering'
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

const addPhotographyPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'Photography'
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

const addSoundAndLightPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'SoundAndLight'
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

const addStageRentalPackageToCompareTable = asyncHandler(async(req,res)=>{
    const pack=req.body
    const event_id=pack.event_id
    const package_id=pack.package_id
    const column_id = pack.column_id
    const service = 'StageRental'
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

const addPackToEvent = asyncHandler(async(req,res)=>{
    const package_id=req.body.package_id
    const event_id= req.body.event_id
    const service= req.body.service
    console.log(package_id);
    console.log(event_id);
    console.log(service);
    const isSelected = await isSelectedPackage(event_id,package_id,service)
    console.log(isSelected);
    if (isSelected==='false') {
        const update = await addPackageToEvent(event_id,package_id,service)
        res.json('true')
    }else{
        
        const notification=await getNotificationByEventAndPackage(service,event_id)
        if (notification.status==='Accept') {
            res.json('false')
        }else{
            const deleted = await deleteNotificationByEventAndPackage(service,event_id);
            const update = await addPackageToEvent(event_id,package_id,service)
            res.json('true')

        }
    }

})

const viewBirthdayPackage = asyncHandler(async(req,res)=>{
    const event_type = req.query.event_type;

    const getPreDefinedPackageDetails = await getPreDefinedPackage(event_type);
    // console.log(getPreDefinedPackageDetails);
    res.json(getPreDefinedPackageDetails)


})

const viewBirthdayPackageDetails = asyncHandler(async(req,res)=>{
    const package_id = req.query.package_id;

    const getPreDefinedPackageDetail = await getPreDefinedPackageDetails(package_id) 
    // console.log(getPreDefinedPackageDetail);
    const venue_id = getPreDefinedPackageDetail[0].venue_id
    const catering_id = getPreDefinedPackageDetail[0].catering_id
    const cake_id = getPreDefinedPackageDetail[0].cake_id
    const photography_id = getPreDefinedPackageDetail[0].photography_id
    const stageRental_id = getPreDefinedPackageDetail[0].stagerental_id
    const deco_id = getPreDefinedPackageDetail[0].deco_id
    const soundAndLight_id = getPreDefinedPackageDetail[0].soundandlight_id

    const venueDetails = await viewVenuPackageDetails(venue_id)
    const cateringDetails = await viewCateringPackageDetails(catering_id)
    const cakeDetails = await viewCakePackageDetails(cake_id)
    const photographyDetails = await viewPhotographyPackageDetails(photography_id)
    const stagerRentalDetails = await viewStageRentalPackageDetails(stageRental_id)
    const decorationDetails = await viewDecorationPackageDetails(deco_id)
    const soundAndLightDetails = await viewSoundAndLightPackageDetails(soundAndLight_id)
    console.log();
    const array=[]
    array.push(venueDetails.rows);
    array.push(cateringDetails.rows);
    array.push(cakeDetails.rows);
    array.push(photographyDetails.rows);
    array.push(stagerRentalDetails.rows);
    array.push(decorationDetails.rows);
    array.push(soundAndLightDetails.rows);
    res.json(array)

})

const viewPreBirthdayPackageDetails = asyncHandler(async(req,res)=>{
    const package_id = req.query.package_id;

    const getPreDefinedPackageDetail = await getPreDefinedPackageInfo(package_id) 
})

export { viewVenuePackage, viewVenuePackageDetails, addVenuePack, addVenuePackToCompare, getPackageCount, getComparePackage, 
    addPackageToCompareTable, viewCakePackage, viewCakesPackageDetails, addCakePackToCompare,addCakePackageToCompareTable, getCompareCakePackage, 
    viewCateringPackage,viewdecoPackage,viewDecoPackageDetails,addDecoPackToCompare,addDecoPackageToCompareTable, getCompareDecoPackage , 
    viewCateringsPackageDetails, viewPhotographyPackage, viewPhotographiesPackageDetails, viewPhotographyPackageDetails, viewSoundAndLightPackage, 
    viewSoundAndLightsPackageDetails, viewSoundAndLightPackageDetails, viewStageRentalPackage, viewStageRentalsPackageDetails, 
    viewStageRentalPackageDetails, addPhotographyPackToCompare, getComparePhotographyPackage, getCompareCateringPackage, addCateringPackToCompare, 
    addSoundAndLightPackToCompare, getCompareSoundAndLightPackage, addStageRentalPackToCompare, getCompareStageRentalPackage,addCateringPackageToCompareTable,
    addPhotographyPackageToCompareTable,addSoundAndLightPackageToCompareTable,addStageRentalPackageToCompareTable,addPackToEvent,viewBirthdayPackage,viewBirthdayPackageDetails,viewPreBirthdayPackageDetails } 
