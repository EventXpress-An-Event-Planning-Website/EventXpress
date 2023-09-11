import express from 'express'
const router = express.Router()

import { createevent, getEvent, getEventDetails, addEventToDo, viewEventToDo } from '../controllers/Customer/createEventController.js'
import { protect } from '../middleware/authMiddleware.js'
import { viewVenuePackage, viewVenuePackageDetails, addVenuePack, addVenuePackToCompare, getPackageCount, getComparePackage, addPackageToCompareTable, viewCakePackage, viewCakesPackageDetails, addCakePackToCompare, getCompareCakePackage, viewCateringPackage, viewCateringsPackageDetails, viewPhotographyPackage, viewSoundAndLightPackage, viewSoundAndLightPackageDetails, viewStageRentalPackage, viewStageRentalsPackageDetails, addPhotographyPackToCompare, getComparePhotographyPackage, viewPhotographiesPackageDetails, getCompareCateringPackage, addCateringPackToCompare, viewSoundAndLightsPackageDetails, addSoundAndLightPackToCompare, getCompareSoundAndLightPackage, addStageRentalPackToCompare, getCompareStageRentalPackage } from '../controllers/Customer/packageController.js'

router.post('/createEvent', createevent)
router.get('/viewVenuePackage', viewVenuePackage)
router.post('/addToDo', addEventToDo)
router.get('/viewToDo', viewEventToDo)
router.get('/myEvents', getEvent)

router.get('/profile', createevent)
router.get('/eventDetails', getEventDetails)
router.get('/viewVenuePackageDetails', viewVenuePackageDetails)
router.post('/addvenuePackToEvent', addVenuePack)
router.post('/addvenuePackToCompare', addVenuePackToCompare)
router.get('/getPackageCount', getPackageCount)
router.get('/CompareVenue', getComparePackage)
router.post('/addvenuePackToCompareTable', addPackageToCompareTable)

router.get('/viewCakePackage', viewCakePackage)
router.get('/viewCakePackageDetails', viewCakesPackageDetails)
router.post('/addCakePackToCompare', addCakePackToCompare)
router.get('/CompareCake', getCompareCakePackage)

router.get('/viewCateringPackage', viewCateringPackage)
router.get('/viewCateringPackageDetails', viewCateringsPackageDetails)
router.post('/addCateringPackToCompare', addCateringPackToCompare)
router.get('/CompareCatering', getCompareCateringPackage)

router.get('/viewPhotographyPackage', viewPhotographyPackage)
router.get('/viewPhotographyPackageDetails', viewPhotographiesPackageDetails)
router.post('/addPhotographyPackToCompare', addPhotographyPackToCompare)
router.get('/ComparePhotography', getComparePhotographyPackage)

router.get('/viewSoundAndLightPackage', viewSoundAndLightPackage)
router.get('/viewSoundAndLightPackageDetails', viewSoundAndLightsPackageDetails)
router.post('/addSoundAndLightPackToCompare', addSoundAndLightPackToCompare)
router.get('/CompareSoundAndLight', getCompareSoundAndLightPackage)

router.get('/viewStageRentalPackage', viewStageRentalPackage)
router.get('/viewStageRentalPackageDetails', viewStageRentalsPackageDetails)
router.post('/addStageRentalPackToCompare', addStageRentalPackToCompare)
router.get('/CompareStageRental', getCompareStageRentalPackage)

export default router