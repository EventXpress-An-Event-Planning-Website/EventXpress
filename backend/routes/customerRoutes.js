import express from 'express'
const router = express.Router()


import { createevent,getEvent, getEventDetails,addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import {protect}  from '../middleware/authMiddleware.js'
import { viewVenuePackage,viewVenuePackageDetails,addVenuePack,addVenuePackToCompare,
    getPackageCount,getComparePackage,addPackageToCompareTable,viewCakePackage,viewCakesPackageDetails,
    addCakePackToCompare,getCompareCakePackage,addCakePackageToCompareTable,viewdecoPackage,viewDecoPackageDetails,
    addDecoPackToCompare,addDecoPackageToCompareTable,getCompareDecoPackage, viewCateringPackage, viewCateringsPackageDetails, 
    viewPhotographyPackage, viewSoundAndLightPackage, viewSoundAndLightPackageDetails, viewStageRentalPackage, viewStageRentalsPackageDetails, 
    addPhotographyPackToCompare, getComparePhotographyPackage, viewPhotographiesPackageDetails, getCompareCateringPackage, addCateringPackToCompare, 
    viewSoundAndLightsPackageDetails, addSoundAndLightPackToCompare, getCompareSoundAndLightPackage, addStageRentalPackToCompare, getCompareStageRentalPackage,
    addCateringPackageToCompareTable,addPhotographyPackageToCompareTable,addSoundAndLightPackageToCompareTable,addStageRentalPackageToCompareTable,addPackToEvent,
    viewBirthdayPackage,viewBirthdayPackageDetails, viewPreBirthdayPackageDetails} from '../controllers/Customer/packageController.js'

// import { viewVenuePackage, viewVenuePackageDetails, addVenuePack, addVenuePackToCompare, getPackageCount, getComparePackage, addPackageToCompareTable, viewCakePackage, viewCakesPackageDetails, addCakePackToCompare, getCompareCakePackage} from '../controllers/Customer/packageController.js'
import { sendRequest } from '../controllers/Customer/customerController.js'

router.post('/createEvent', createevent)
router.get('/viewVenuePackage', viewVenuePackage)
router.post('/addToDo', addEventToDo)
router.get('/viewToDo', viewEventToDo)
router.get('/myEvents', getEvent)

router.get('/profile', createevent)
router.get('/eventDetails',getEventDetails)
router.get('/viewVenuePackageDetails',viewVenuePackageDetails)
router.post('/addvenuePackToEvent',addVenuePack )
router.post('/addvenuePackToCompare',addVenuePackToCompare )
router.get('/getPackageCount',getPackageCount)
router.get('/CompareVenue',getComparePackage)
router.post('/addvenuePackToCompareTable',addPackageToCompareTable)
router.get('/viewCakePackage',viewCakePackage)
router.get('/viewCakePackageDetails',viewCakesPackageDetails)
router.post('/addCakePackToCompare',addCakePackToCompare )
router.get('/CompareCake',getCompareCakePackage)
router.post('/addCakePackToCompareTable', addCakePackageToCompareTable )
router.get('/viewDecoPackage',viewdecoPackage)
router.get('/viewDecorationPackageDetails',viewDecoPackageDetails)
router.post('/addDecoPackToCompare',addDecoPackToCompare )
router.post('/addDecoPackToCompareTable', addDecoPackageToCompareTable )
router.get('/CompareDeco',getCompareDecoPackage)


router.get('/viewCateringPackage', viewCateringPackage)
router.get('/viewCateringPackageDetails', viewCateringsPackageDetails)
router.post('/addCateringPackToCompare', addCateringPackToCompare)
router.get('/CompareCatering', getCompareCateringPackage)
router.post('/addCateringPackToCompareTable', addCateringPackageToCompareTable )


router.get('/viewPhotographyPackage', viewPhotographyPackage)
router.get('/viewPhotographyPackageDetails', viewPhotographiesPackageDetails)
router.post('/addPhotographyPackToCompare', addPhotographyPackToCompare)
router.get('/ComparePhotography', getComparePhotographyPackage)
router.post('/addPhotographyPackToCompareTable', addPhotographyPackageToCompareTable )


router.get('/viewSoundAndLightPackage', viewSoundAndLightPackage)
router.get('/viewSoundAndLightPackageDetails', viewSoundAndLightsPackageDetails)
router.post('/addSoundAndLightPackToCompare', addSoundAndLightPackToCompare)
router.get('/CompareSoundAndLight', getCompareSoundAndLightPackage)
router.post('/addSoundAndLightPackToCompareTable', addSoundAndLightPackageToCompareTable)


router.get('/viewStageRentalPackage', viewStageRentalPackage)
router.get('/viewStageRentalPackageDetails', viewStageRentalsPackageDetails)
router.post('/addStageRentalPackToCompare', addStageRentalPackToCompare)
router.get('/CompareStageRental', getCompareStageRentalPackage)
router.post('/addStageRentalPackToCompareTable', addStageRentalPackageToCompareTable )

router.post('/addCakePackToEvent', addPackToEvent )
router.get('/viewBirthdayPackage', viewBirthdayPackage)
router.get('/viewBirthdayPackageDetails', viewBirthdayPackageDetails)
router.get('/viewPreBirthdayPackageDetails', viewPreBirthdayPackageDetails)


router.post('/sendRequest', sendRequest)


export default router